import { ReactNode } from 'react'
import { Grid } from '@mui/material'
import LnbContainer from '@/containers/navigation/LnbContainer'
import styled from '@emotion/styled'

const DefaultLayoutWrapper = styled.div`
	display: grid;
	grid-template-columns: 250px 1fr;
`

function DefaultLayout({ children }: { children: ReactNode }) {
	return (
		<DefaultLayoutWrapper>
			{/*@todo 폭이 좁아질 경우(sm 이하) 얇은 아이콘 모음으로 교체*/}
			<LnbContainer />
			<Grid container>{children}</Grid>
		</DefaultLayoutWrapper>
	)
}

export default DefaultLayout

DefaultLayout.getLayout = (page: ReactNode) => (
	<DefaultLayout>{page}</DefaultLayout>
)
