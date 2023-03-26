import styled from '@emotion/styled'
import {
	Report,
	ReportVariable,
	ReportVariableFormat,
	ReportVariableType,
} from '@/modules/report'
import React, { useState } from 'react'
import { Grid, TextField } from '@mui/material'
import ReportVariableSelector from '@/components/report/ReportVariableSelector'

/**
 * 리포트 form
 * reportId input disabled
 * reportTitle input text
 * variables checkbox list?
 */

const allVariables: ReportVariable[] = [
	{
		id: 1,
		name: '페이지뷰',
		type: ReportVariableType.Number,
		format: ReportVariableFormat.Integer,
	},
	{
		id: 2,
		name: '이용자 수',
		type: ReportVariableType.Number,
		format: ReportVariableFormat.Integer,
	},
	{
		id: 3,
		name: '세션 수',
		type: ReportVariableType.Number,
		format: ReportVariableFormat.Integer,
	},
	{
		id: 4,
		name: '이벤트 명',
		type: ReportVariableType.String,
		format: ReportVariableFormat.String,
	},
	{
		id: 5,
		name: '브라우저',
		type: ReportVariableType.String,
		format: ReportVariableFormat.String,
	},
]

export interface ReportVariableSelectOption extends ReportVariable {
	selected: boolean
}

const Wrapper = styled(Grid)`
	height: 100%;
	padding: 5px;
`

type ReportEditorProps =
	| {
			isEditing: true
			report: Report
	  }
	| {
			isEditing: false
			report?: Report
	  }

const createInitialReport = (): Report => ({
	id: -1,
	title: '',
	variables: [],
})

function ReportEditor({ isEditing, report }: ReportEditorProps) {
	const [editorReport, setEditorReport] = useState<Report>(
		isEditing ? { ...report } : createInitialReport()
	)

	const [variables, setVariables] = useState<ReportVariableSelectOption[]>(
		allVariables.map(variable => ({ ...variable, selected: false }))
	)
	const [editorVariables, setEditorVariables] = useState<
		ReportVariableSelectOption[]
	>([])

	const setVariableSelected = (id: ReportVariable['id'], selected: boolean) =>
		setVariables(oldVariables =>
			oldVariables.map(oldVariable =>
				oldVariable.id === id ? { ...oldVariable, selected } : oldVariable
			)
		)

	const onSelectVariable = (id: ReportVariable['id']) => {
		const alreadySelected =
			editorVariables.findIndex(editorVariables => editorVariables.id === id) >
			-1
		if (alreadySelected) return

		setVariableSelected(id, true)

		const selectedVariable = variables.find(variable => variable.id === id)
		if (selectedVariable) {
			setEditorVariables(oldEditorVariables => [
				...oldEditorVariables,
				selectedVariable,
			])
		}
	}

	const onDeleteVariable = (id: ReportVariable['id']) => {
		setVariableSelected(id, false)

		setEditorVariables(oldEditorVariables =>
			oldEditorVariables.filter(
				oldEditorVariable => oldEditorVariable.id !== id
			)
		)
	}

	const onToggleVariable = (id: ReportVariable['id']) => {
		const pushed =
			editorVariables.findIndex(editorVariables => editorVariables.id === id) >
			-1

		if (pushed) {
			onDeleteVariable(id)
		} else {
			onSelectVariable(id)
		}
	}

	const idDisable = !isEditing
	const idDefaultValue = isEditing ? editorReport.id : '자동생성'

	const onChangeReportTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
		setEditorReport(report => ({
			...report,
			[event.target.name]: event.target.value,
		}))

	return (
		<Wrapper container spacing={1.5}>
			<Grid item xs={12} md={6}>
				<TextField
					disabled={idDisable}
					label="리포트 ID"
					defaultValue={idDefaultValue}
				/>
				<TextField
					name="title"
					label="리포트 명"
					value={editorReport.title}
					onChange={onChangeReportTitle}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<ReportVariableSelector
					allVariables={variables}
					selectedVariables={editorVariables}
					onToggle={onToggleVariable}
					onDelete={onDeleteVariable}
				/>
			</Grid>
		</Wrapper>
	)
}

export default ReportEditor
