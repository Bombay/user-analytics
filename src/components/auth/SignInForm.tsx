import styled from '@emotion/styled'
import { Button, InputAdornment, TextField } from '@mui/material'
import { AccountCircle, Key } from '@mui/icons-material'

const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const Title = styled.h1`
	font-size: 22px;
	font-weight: 900;
	text-align: center;
	margin-bottom: 25px;
`

const Input = styled(TextField)`
	margin-bottom: 10px;

	& .MuiOutlinedInput-root {
		background-color: #e6e6e6;
		border-radius: 10px;
		font-size: 14px;
		font-weight: 500;

		& fieldset {
			border: none;
		}
	}
`

const SignInButton = styled(Button)`
	margin-top: 15px;
	border: none;
	border-radius: 20px;
	background: linear-gradient(135deg, #ff986f, #9406aa);
	color: #ffffff;
	padding: 7px;
	&:hover {
		border: none;
	}
`

function SignInForm() {
	return (
		<FormWrapper>
			<Title>Biskit Analytics</Title>
			<Input
				placeholder="아이디"
				size="small"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircle />
						</InputAdornment>
					)
				}}
			/>
			<Input
				type="password"
				placeholder="비밀번호"
				size="small"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Key />
						</InputAdornment>
					)
				}}
			/>
			<SignInButton variant="outlined">로그인</SignInButton>
		</FormWrapper>
	)
}

export default SignInForm
