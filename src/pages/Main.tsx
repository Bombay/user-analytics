import styled from '@emotion/styled'

const Title = styled.h1`
	font-size: 60px;
`

const Container = styled.div`
	background-color: gold;
	${Title} {
		font-size: 20px;
	}
`

function Main() {
	return (
		<Container>
			<Title>Hello World</Title>
		</Container>
	)
}

export default Main
