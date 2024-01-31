import getDate30DaysAgo from './getDate30DaysAgo';
import getRandomValue from './getRandomValue';

type HistoryEntry = [string, string | number, string | number, string | number, string | number];

type CurrencyHistoryData = [...HistoryEntry][];

const generateRandomHistory = (): CurrencyHistoryData => {
	const chartData: CurrencyHistoryData = [['Day', '', '', '', '']];
	const startDate = new Date(getDate30DaysAgo());

	for (let day = 0; day <= 30; day += 1) {
		const currentDate = new Date(startDate);
		currentDate.setDate(startDate.getDate() + day);

		const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

		const randomValues: HistoryEntry = [dateString, ...getRandomValue()];

		chartData.push(randomValues);
	}

	return chartData;
};

export default generateRandomHistory;
