import ReportEditor from '@/components/report/ReportEditor'
import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import styled from '@emotion/styled'
import { Report } from '@/modules/report'

const EditorContainer = styled.div`
	height: 80vh;
`

function ReportEditorModal() {
	const isEditing = false
	const report: Report = {
		id: 1,
		title: 'report...',
		variables: [],
	}

	return (
		<Dialog fullWidth={true} maxWidth="lg" open={true}>
			<EditorContainer>
				<DialogTitle>리포트 수정</DialogTitle>
				<DialogContent>
					<ReportEditor isEditing={isEditing} report={report} />
				</DialogContent>
			</EditorContainer>
		</Dialog>
	)
}

export default ReportEditorModal
