import {
	Report,
	ReportVariable,
	ReportVariableFormat,
	ReportVariableType,
} from '@/modules/report'

const reports: Report[] = [
	{
		id: 1,
		title: '셀프서비스',
		variables: [
			{
				id: 1,
				name: 'Sales',
				type: ReportVariableType.Number,
				format: ReportVariableFormat.Integer,
			},
			{
				id: 2,
				name: 'ARPU',
				type: ReportVariableType.Number,
				format: ReportVariableFormat.Float,
			},
		],
	},
]

const dummyFetch = <T>(data: T) =>
	new Promise<T>(resolve => {
		setTimeout(() => resolve(data), 100)
	})

export async function fetchReport(reportId: Report['id']) {
	return dummyFetch<Report | undefined>(
		reports.find(report => report.id === reportId)
	)
}

export async function fetchReports() {
	return dummyFetch<Report[]>(reports)
}

/**
 * reportId 없을 경우 전체 variables return
 * @param reportId
 */
export async function fetchReportVariables(reportId?: Report['id']) {
	const variables: ReportVariable[] = [
		{
			id: 1,
			name: 'Sales',
			type: ReportVariableType.Number,
			format: ReportVariableFormat.Integer,
		},
		{
			id: 2,
			name: 'ARPU',
			type: ReportVariableType.Number,
			format: ReportVariableFormat.Float,
		},
		{
			id: 3,
			name: 'ARPPU',
			type: ReportVariableType.Number,
			format: ReportVariableFormat.Float,
		},
	]

	return dummyFetch<ReportVariable[]>(variables)
}

export async function saveReport(report: Report) {}

export async function editReport(report: Report) {}
