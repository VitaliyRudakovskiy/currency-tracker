import { CurrencyHistoryData } from '@interfaces/interfaces';
import { useChartDataContext } from '@providers/ChartDataProvider';
import {
	historyEURRedux,
	historyUSDRedux,
} from '@store/reducers/currencySlice';
import React, { Component, useState } from 'react';
import { useSelector } from 'react-redux';
import generateRandomHistory from '@utils/generateRandomHistory';
import { ChartButton, ButtonsContainer } from './styled';
import ChartModal from '@components/ChartModal';

const ChartButtons = () => {
	const [isOpened, setIsOpened] = useState(false);

	const chartSubject = useChartDataContext();
	const historyUSD = useSelector(historyUSDRedux);
	const historyEUR = useSelector(historyEURRedux);

	const handleButtonClick = () => {
		const newData: CurrencyHistoryData = generateRandomHistory();
		chartSubject.updateData(newData);
	};

	const handleUSDButtonClick = () => {
		chartSubject.updateData(historyUSD);
	};

	const handleEURButtonClick = () => {
		chartSubject.updateData(historyEUR);
	};

	const onOpen = () => {
		setIsOpened(true);
		document.body.style.overflowY = 'hidden';
	};

	const onClose = () => {
		setIsOpened(false);
		document.body.style.overflowY = 'auto';
	};

	return (
		<>
			<ButtonsContainer>
				<ChartButton onClick={handleUSDButtonClick}>USD</ChartButton>
				<ChartButton onClick={handleEURButtonClick}>EUR</ChartButton>
				<ChartButton onClick={handleButtonClick}>Random Data</ChartButton>
				<ChartButton onClick={onOpen}>Change value</ChartButton>
			</ButtonsContainer>

			{isOpened && <ChartModal onClose={onClose} />}
		</>
	);
};

export default ChartButtons;
