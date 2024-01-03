import React, { useEffect, useState } from 'react';
import getCurrencyHistory from '@utils/getCurrencyHistory';
import { ExchangeRateData } from '@interfaces/interfaces';
import { chartOptions } from '@constants/chartOptions';
import { Chart } from 'react-google-charts';

export default function ChartComponent(): JSX.Element {
	const [historyUSD, setHistoryUSD] = useState<ExchangeRateData[][]>();
	const [historyEUR, setHistoryEUR] = useState<ExchangeRateData[][]>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [resultUSD, resultEUR]: [ExchangeRateData[], ExchangeRateData[]] =
					await getCurrencyHistory();

				const updatedHistoryUSD = [
					['Day', '', '', '', ''],
					...resultUSD.map((item) => [
						item.time_open.slice(0, 10),
						item.rate_low,
						item.rate_open,
						item.rate_close,
						item.rate_high,
					]),
				];

				setHistoryUSD(updatedHistoryUSD);

				const updatedHistoryEUR = [
					['Day', '', '', '', ''],
					...resultEUR.map((item) => [
						item.time_open.slice(0, 10),
						item.rate_low,
						item.rate_open,
						item.rate_close,
						item.rate_high,
					]),
				];

				setHistoryEUR(updatedHistoryEUR);
			} catch (error) {
				throw new Error(`Error fetching currency history: ${error}`);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Chart
				chartType="CandlestickChart"
				width="100%"
				height="400px"
				data={historyUSD} // или data={historyEUR} или объедините данные
				options={chartOptions}
			/>
		</>
	);
}
