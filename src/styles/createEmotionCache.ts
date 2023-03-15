import createCache from '@emotion/cache'

function createEmotionCache() {
	// The prepend option is set to be true, which will cause our custom styles to load first.
	return createCache({ key: 'css', prepend: true })
}

export default createEmotionCache
