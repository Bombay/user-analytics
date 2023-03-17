import PlainLayout from '@/layouts/PlainLayout'
import styled from '@emotion/styled'
import { Container } from '@mui/material'
import SignInContainer from '@/containers/auth/SignInContainer'

const SignInWrapper = styled(Container)`
	background: linear-gradient(135deg, #ff986f, #9406aa);
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

function SignIn() {
	return (
		<SignInWrapper>
			<SignInContainer />
		</SignInWrapper>
	)
}

export default SignIn

SignIn.getLayout = PlainLayout.getLayout
