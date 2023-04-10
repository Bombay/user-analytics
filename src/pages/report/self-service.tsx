import styled from '@emotion/styled'
import SelfServiceReport from '@/components/report/SelfServiceReport'

const SelfServiceTemplate = styled.div`
	padding-top: 15px;
	padding-left: 15px;
	padding-right: 15px;
`

function SelfService() {
	return (
		<SelfServiceTemplate>
			<SelfServiceReport />
		</SelfServiceTemplate>
	)
}

export default SelfService
