import styled from '@emotion/styled'
import SignInForm from '@/components/auth/SignInForm'

const borderRadius = '15px'
const StyledPanel = styled.div`
	background-color: #ffffff;
	width: 500px;
	height: 300px;
	transform: translate(0, -30px);
	border-radius: ${borderRadius};
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);

	display: grid;
	grid-template-columns: 1fr 1fr;
`

const DesignItem = styled.div`
	border-bottom-left-radius: ${borderRadius};
	border-top-left-radius: ${borderRadius};
`

// @todo 로그인 디자인 컴포넌트 생성

const FormItem = styled.div`
	border-top-right-radius: ${borderRadius};
	border-bottom-right-radius: ${borderRadius};
	padding: 50px 15px;
`

function SignInContainer() {
	return (
		<StyledPanel>
			<DesignItem />
			<FormItem>
				<SignInForm />
			</FormItem>
		</StyledPanel>
	)
}

export default SignInContainer
