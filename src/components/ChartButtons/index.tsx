import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CurrencyHistoryData } from '@interfaces/interfaces';
import {
	ChartDataContext,
	ChartSubjectInterface,
} from '@providers/ChartDataProvider';
import generateRandomHistory from '@utils/generateRandomHistory';
import ChartModal from '@components/ChartModal';
import { ChartButton, ButtonsContainer } from './styled';

interface ChartButtonsProps {
	historyUSD: CurrencyHistoryData;
	historyEUR: CurrencyHistoryData;
}

interface ChartButtonsState {
	isOpened: boolean;
}

class ChartButtons extends Component<ChartButtonsProps, ChartButtonsState> {
	context!: ChartSubjectInterface;

	static get contextType() {
		return ChartDataContext;
	}

	constructor(props: ChartButtonsProps) {
		super(props);
		this.state = {
			isOpened: false,
		};
	}

	handleButtonClick = () => {
		const { updateData } = this.context;
		const newData = generateRandomHistory();
		updateData(newData);
	};

	handleUSDButtonClick = () => {
		const { updateData } = this.context;
		const { historyUSD } = this.props;
		updateData(historyUSD);
	};

	handleEURButtonClick = () => {
		const { updateData } = this.context;
		const { historyEUR } = this.props;
		updateData(historyEUR);
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
		const { isOpened } = this.state;

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

				{isOpened && <ChartModal onClose={this.onClose} />}
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

const mapStateToProps = (state: IStateRedux) => {
	const { historyUSD, historyEUR } = state.currency;
	return {
		historyUSD,
		historyEUR,
	};
};

export default connect(mapStateToProps)(ChartButtons);
