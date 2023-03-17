import { ReactNode } from 'react'
import { Grid } from '@mui/material'
import Lnb from '@/containers/navigation/Lnb'

function DefaultLayout({ children }: { children: ReactNode }) {
	return (
		<Grid container>
			<Grid item>
				<Lnb />
			</Grid>
			<Grid item>{children}</Grid>
		</Grid>
	)
}

export default DefaultLayout

DefaultLayout.getLayout = (page: ReactNode) => (
	<DefaultLayout>{page}</DefaultLayout>
)
