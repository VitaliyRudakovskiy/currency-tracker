export const chartOptions = {
	legend: 'none',
	bar: { groupWidth: '95%' },
	candlestick: {
		fallingColor: { strokeWidth: 0, fill: '#a52714' },
		risingColor: { strokeWidth: 0, fill: '#0f9d58' },
	},
	backgroundColor: '#000000',
	hAxis: {
		title: 'Date',
	},
	vAxis: {
		title: 'Value',
	},
	title: 'Waterfall Chart',
	colors: ['#808080'],
};
