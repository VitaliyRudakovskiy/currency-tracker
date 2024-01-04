import { CurrencyHistoryData, HistoryEntry } from '@interfaces/interfaces';
import getDate30DaysAgo from './getDate30DaysAgo';

const generateRandomHistory = (): CurrencyHistoryData => {
	const chartData: CurrencyHistoryData = [['Day', '', '', '', '']];
	const startDate = new Date(getDate30DaysAgo());

	for (let day = 0; day <= 30; day++) {
		const currentDate = new Date(startDate);
		currentDate.setDate(startDate.getDate() + day);

		const dateString = `${currentDate.getFullYear()}-${String(
			currentDate.getMonth() + 1
		).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

		const randomValues: HistoryEntry = [dateString, ...getRandomValue()];

		chartData.push(randomValues);
	}

	return chartData;
};

const getRandomValue = (): [number, number, number, number] => {
	const smallestValue = Math.floor(Math.random() * 10);
	const largestValue =
		Math.floor(Math.random() * (100 - smallestValue)) + smallestValue;

	const randomValue1 =
		Math.floor(Math.random() * (largestValue - smallestValue - 1)) +
		smallestValue +
		1;
	const randomValue2 =
		Math.floor(Math.random() * (largestValue - smallestValue - 1)) +
		smallestValue +
		1;

	return [smallestValue, randomValue1, randomValue2, largestValue];
};

export default generateRandomHistory;
