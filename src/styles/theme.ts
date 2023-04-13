import { createTheme } from '@mui/material'
import LocalFont from 'next/font/local'

export const font = LocalFont({
	src: './fonts/notoSansKR/NotoSansKR-Regular.otf',
})

const theme = createTheme({
	typography: {
		fontFamily: font.style.fontFamily,
	},
})

export default theme
