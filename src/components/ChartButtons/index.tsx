import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CurrencyHistoryData } from '@interfaces/interfaces';
import {
	ChartDataContext,
	ChartSubjectInterface,
} from '@providers/ChartDataProvider';
import generateRandomHistory from '@utils/generateRandomHistory';
import { ChartButton, ButtonsContainer } from './styled';
import ChartModal from '@components/ChartModal';

interface ChartButtonsProps {
	historyUSD: CurrencyHistoryData;
	historyEUR: CurrencyHistoryData;
}

interface ChartButtonsState {
	isOpened: boolean;
}

class ChartButtons extends Component<ChartButtonsProps, ChartButtonsState> {
	static contextType = ChartDataContext;
	context!: ChartSubjectInterface;

	constructor(props: ChartButtonsProps) {
		super(props);
		this.state = {
			isOpened: false,
		};
	}

	handleButtonClick = () => {
		const newData = generateRandomHistory();
		this.context.updateData(newData);
	};

	handleUSDButtonClick = () => {
		this.context.updateData(this.props.historyUSD);
	};

	handleEURButtonClick = () => {
		this.context.updateData(this.props.historyEUR);
	};

	onOpen = () => {
		this.setState({ isOpened: true });
		document.body.style.overflowY = 'hidden';
	};

	onClose = () => {
		this.setState({ isOpened: false });
		document.body.style.overflowY = 'auto';
	};

	render() {
		return (
			<>
				<ButtonsContainer>
					<ChartButton onClick={this.handleUSDButtonClick}>USD</ChartButton>
					<ChartButton onClick={this.handleEURButtonClick}>EUR</ChartButton>
					<ChartButton onClick={this.handleButtonClick}>
						Random Data
					</ChartButton>
					<ChartButton onClick={this.onOpen}>Change value</ChartButton>
				</ButtonsContainer>

				{this.state.isOpened && <ChartModal onClose={this.onClose} />}
			</>
		);
	}
}

interface IStateRedux {
	currency: {
		historyUSD: CurrencyHistoryData;
		historyEUR: CurrencyHistoryData;
	};
}

const mapStateToProps = (state: IStateRedux) => ({
	historyUSD: state.currency.historyUSD,
	historyEUR: state.currency.historyEUR,
});

export default connect(mapStateToProps)(ChartButtons);
