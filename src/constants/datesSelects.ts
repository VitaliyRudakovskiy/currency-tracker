interface IDateSelect {
	value: string;
	onChange: string;
}

const datesSelects: IDateSelect[] = [
	{ value: 'beginDate', onChange: 'setBeginDate' },
	{ value: 'endDate', onChange: 'setEndDate' },
];

export default datesSelects;
