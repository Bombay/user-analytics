import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import { useState } from 'react'
import ReportConfigContainer from '@/containers/report/editor/ReportConfigContainer'

function ReportConfigModal() {
	const [isShow, setIsShow] = useState(true)

	return (
		<Dialog open={isShow} fullWidth={true} maxWidth="sm">
			<DialogTitle>리포트 수정</DialogTitle>
			<DialogContent>
				<ReportConfigContainer />
			</DialogContent>
		</Dialog>
	)
}

export default ReportConfigModal
