import { ReactNode } from 'react'

function PlainLayout({ children }: { children: ReactNode }) {
	return <div>{children}</div>
}

export default PlainLayout

PlainLayout.getLayout = (page: ReactNode) => <PlainLayout>{page}</PlainLayout>
