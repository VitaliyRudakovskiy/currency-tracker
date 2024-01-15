const risingColor = '#a52714';
const fallingColor = '#0f9d58';
const lineColor = '#808080';

const chartOptions = {
	legend: 'none',
	bar: { groupWidth: '95%' },
	candlestick: {
		fallingColor: { strokeWidth: 0, fill: risingColor },
		risingColor: { strokeWidth: 0, fill: fallingColor },
	},
	hAxis: {
		title: 'Date',
	},
	vAxis: {
		title: 'Value',
	},
	title: 'Waterfall Chart',
	colors: [lineColor],
};

export default chartOptions;
