import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript
} from 'next/document'
import createEmotionCache from '@/styles/createEmotionCache'
import createEmotionServer from '@emotion/server/create-instance'
import { AppType } from 'next/app'
import { CustomAppProps } from '@/types/nextjs'
import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import React from 'react'

interface CustomDocumentInitialProps extends DocumentInitialProps {
	emotionStyleTags: EmotionJSX.Element[]
}

export default class MyDocument extends Document<CustomDocumentInitialProps> {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<CustomDocumentInitialProps> {
		const originalRenderPage = ctx.renderPage

		const cache = createEmotionCache()
		const { extractCriticalToChunks } = createEmotionServer(cache)

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (
					App: React.ComponentType<
						React.ComponentProps<AppType> & CustomAppProps
					>
				) =>
					function EnhanceApp(props) {
						return <App emotionCache={cache} {...props} />
					}
			})

		const initialProps = await Document.getInitialProps(ctx)

		const emotionStyles = extractCriticalToChunks(initialProps.html)
		const emotionStyleTags = emotionStyles.styles.map(style => (
			<style
				data-emotion={`${style.key} ${style.ids.join(' ')}`}
				key={style.key}
				dangerouslySetInnerHTML={{ __html: style.css }}
			/>
		))

		return {
			...initialProps,
			emotionStyleTags
		}
	}

	render() {
		return (
			<Html>
				<Head>{this.props.emotionStyleTags}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
