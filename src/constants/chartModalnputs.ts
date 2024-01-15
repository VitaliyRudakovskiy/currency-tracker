interface IInput {
	label: string;
	value: string;
}

const chartModalInputs: IInput[] = [
	{ label: 'Low Rate', value: 'newLowRate' },
	{ label: 'High Rate', value: 'newHighRate' },
	{ label: 'Open Rate', value: 'newOpenRate' },
	{ label: 'Close Rate', value: 'newCloseRate' },
];

export default chartModalInputs;
