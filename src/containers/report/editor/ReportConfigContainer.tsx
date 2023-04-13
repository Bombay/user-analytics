import { fetchReport, fetchReportVariables } from '@/api/report'
import ReportConfig from '@/components/report/editor/ReportConfig'
import { useQuery } from '@tanstack/react-query'

function ReportConfigContainer() {
	const reportId = 1 // from reportConfigModalState

	const { data: report, isLoading: reportLoading } = useQuery(
		['report', reportId],
		() => fetchReport(reportId),
		{
			enabled: false,
		}
	)
	const { data: variables, isLoading: variablesLoading } = useQuery(
		['reportVariables', reportId],
		() => fetchReportVariables(reportId)
	)

	return (
		<>
			{variablesLoading || !variables ? (
				'loading...'
			) : !variables ? (
				'error'
			) : (
				<ReportConfig isEditing={false} report={report} variables={variables} />
			)}
		</>
	)
}

export default ReportConfigContainer
