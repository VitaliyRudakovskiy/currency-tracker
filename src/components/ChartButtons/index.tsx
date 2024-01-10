import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	ChartSubjectInterface,
	CurrencyHistoryData,
} from '@interfaces/interfaces';
import { ChartDataContext } from '@providers/ChartDataProvider';
import ChartModal from '@components/ChartModal';
import { ChartButton, ButtonsContainer } from './styled';

interface ChartButtonsProps {
	historyUSD: CurrencyHistoryData;
	historyEUR: CurrencyHistoryData;
}

interface ChartButtonsState {
	isOpened: boolean;
}

class ChartButtons extends PureComponent<ChartButtonsProps, ChartButtonsState> {
	static contextType = ChartDataContext;

	context!: ChartSubjectInterface;

	constructor(props: ChartButtonsProps) {
		super(props);
		this.state = {
			isOpened: false,
		};
	}

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
		const { isOpened } = this.state;

		return (
			<>
				<ButtonsContainer>
					<ChartButton onClick={this.handleUSDButtonClick}>USD</ChartButton>
					<ChartButton onClick={this.handleEURButtonClick}>EUR</ChartButton>
					<ChartButton onClick={this.onOpen}>Change value</ChartButton>
				</ButtonsContainer>

				{isOpened && <ChartModal onClose={this.onClose} />}
			</>
		);
	}
}

ChartButtons.contextType = ChartDataContext;

interface IStateRedux {
	currency: ChartButtonsProps;
}

const mapStateToProps = (state: IStateRedux) => {
	const { historyUSD, historyEUR } = state.currency;
	return {
		historyUSD,
		historyEUR,
	};
};

export default connect(mapStateToProps)(ChartButtons);
