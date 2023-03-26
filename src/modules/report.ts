export enum ReportVariableFormat {
	String = 'string',
	Integer = 'integer',
	Percent = 'percent',
	Float = 'float',
}

export enum ReportVariableType {
	String = 'string',
	Number = 'number',
}

export interface ReportVariable {
	id: number
	name: string
	type: ReportVariableType
	format: ReportVariableFormat
}

export interface Report {
	id: number
	title: string
	variables: ReportVariable[]
}
