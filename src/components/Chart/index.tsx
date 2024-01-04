import React, { useEffect, useState } from 'react';
import { chartOptions } from '@constants/chartOptions';
import { Chart } from 'react-google-charts';
import { useChartDataContext } from '@providers/ChartDataProvider';
import { CurrencyHistoryData } from '@interfaces/interfaces';
import Notification from '@components/Notification';
import Loader from '@components/Loader';
import ChartContainer from './styled';

export default function ChartComponent(): JSX.Element {
	const chartSubject = useChartDataContext();
	const [chartData, setChartData] = useState<CurrencyHistoryData>(
		chartSubject.getData()
	);

	const [showNotification, setShowNotification] = useState<boolean>(false);

	useEffect(() => {
		const observer = {
			update: (newData: CurrencyHistoryData) => {
				setChartData(newData);

				if (newData.length > 30) {
					setShowNotification(true);
				}
			},
		};
		chartSubject.addObserver(observer);

		return () => {
			chartSubject.removeObserver(observer);
		};
	}, [chartSubject]);

	const hideNotification = () => {
		setShowNotification(false);
	};

	return (
		<ChartContainer>
			<Chart
				chartType="CandlestickChart"
				width="100%"
				height="400px"
				data={chartData}
				options={chartOptions}
				style={{ width: '100vw', height: '70vh' }}
				loader={<Loader />}
			/>
			<Notification show={showNotification} onHide={hideNotification} />
		</ChartContainer>
	);
}
