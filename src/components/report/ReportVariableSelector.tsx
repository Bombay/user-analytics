import { Chip, Grid } from '@mui/material'
import { ReportVariableSelectOption } from '@/components/report/ReportEditor'
import { ReportVariable } from '@/modules/report'
import styled from '@emotion/styled'

const PanelTitle = styled.h3`
	font-size: 1.1rem;
	margin-bottom: 10px;
`

interface ReportVariableSelectorProps {
	allVariables: ReportVariableSelectOption[]
	selectedVariables: ReportVariableSelectOption[]
	onToggle: (id: ReportVariable['id']) => void
	onDelete: (id: ReportVariable['id']) => void
}
function ReportVariableSelector({
	allVariables,
	selectedVariables,
	onToggle,
	onDelete,
}: ReportVariableSelectorProps) {
	return (
		<Grid container>
			<Grid item xs={8}>
				<PanelTitle>선택 가능한 변수</PanelTitle>
				<Grid container spacing={0.5}>
					{allVariables.map(variable => (
						<Grid item key={variable.id}>
							<Chip
								label={variable.name}
								onClick={() => onToggle(variable.id)}
								variant={variable.selected ? 'filled' : 'outlined'}
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid item xs={4}>
				<PanelTitle>선택한 변수</PanelTitle>
				<Grid container direction="column" spacing={0.5}>
					{selectedVariables.map(selected => (
						<Grid item key={selected.id}>
							<Chip
								label={selected.name}
								onDelete={() => onDelete(selected.id)}
								variant="filled"
							/>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default ReportVariableSelector
