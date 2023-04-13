import { Report, ReportVariable } from '@/modules/report'
import styled from '@emotion/styled'
import { Button, Chip, TextField } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'

const Template = styled.div`
	padding-top: 10px;
	padding-left: 20px;
	display: flex;
	flex-direction: column;
`

const InputSection = styled.section`
	display: flex;
	column-gap: 10px;
`

const ReportVariableChip = styled(Chip)<{ selected?: boolean }>`
	background-color: ${({ selected }) => selected && '#bac8ff'};

	&:hover {
		cursor: pointer;
		background-color: ${({ selected }) =>
			selected ? '#bac8ff' : 'rgb(198, 198, 198)'};
	}
`

const VariableSection = styled.section`
	margin-top: 20px;
	h3 {
		margin-bottom: 10px;
		font-family: inherit;
	}
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
	}
`

const Footer = styled.section`
	display: flex;
	justify-content: flex-end;
`

interface ReportConfigProps {
	isEditing: boolean
	variables: ReportVariable[]
	report?: Report
}

function createInitialReport(): Report {
	return {
		id: -1,
		title: '',
		variables: [],
	}
}

function getVariablesMap(variables: Report['variables']) {
	console.log('update: ', variables)
	return new Map(variables.map(variable => [variable.id, variable]))
}

function ReportConfig({ isEditing, report, variables }: ReportConfigProps) {
	const [reportForm, setReportForm] = useState(createInitialReport())
	const reportFormVariablesMap = useMemo(
		() => getVariablesMap(reportForm.variables),
		[reportForm.variables]
	)

	useEffect(() => {
		if (report) {
			setReportForm({
				...report,
				variables: report.variables.map(variable => ({ ...variable })) || [],
			})
		}
	}, [report])

	const toggle = (variable: ReportVariable) => {
		const selected = !!reportFormVariablesMap.get(variable.id)

		setReportForm(report => ({
			...report,
			variables: selected
				? report.variables.filter(_variable => _variable.id !== variable.id)
				: [...report.variables, { ...variable }],
		}))
	}

	const isSelected = (variableId: ReportVariable['id']) =>
		!!reportFormVariablesMap.get(variableId)

	return (
		<Template>
			<InputSection>
				<TextField
					label="리포트 ID"
					size="small"
					value={reportForm.id === -1 ? '자동 생성' : reportForm.id}
					disabled
				/>
				<TextField label="리포트 명" size="small" />
			</InputSection>

			<VariableSection>
				<h3>선택 가능한 지표</h3>
				<div className="chips">
					{variables.map(variable => (
						<ReportVariableChip
							key={variable.id}
							label={variable.name}
							selected={isSelected(variable.id)}
							onClick={() => toggle(variable)}
						/>
					))}
				</div>
			</VariableSection>

			<Footer>
				<Button variant="contained">수정</Button>
				<Button>취소</Button>
			</Footer>
		</Template>
	)
}

export default ReportConfig
