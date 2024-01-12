import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	ChartSubjectInterface,
	CurrencyHistoryData,
} from '@interfaces/interfaces';
import { ChartDataContext } from '@providers/ChartDataProvider';
import ChartModal from '@components/ChartModal';
import DateInput from '@components/DateInput';
import { ChartButton, ButtonsContainer } from './styled';

interface ChartButtonsProps {
	historyUSD: CurrencyHistoryData;
	historyEUR: CurrencyHistoryData;
}

interface DatesProps {
	beginDate: string;
	endDate: string;
}

type CommonProps = ChartButtonsProps & DatesProps;

interface ChartButtonsState {
	isOpened: boolean;
	isErrorWithDates: boolean;
}

class ChartButtons extends PureComponent<CommonProps, ChartButtonsState> {
	static contextType = ChartDataContext;

	context!: ChartSubjectInterface;

	constructor(props: CommonProps) {
		super(props);
		this.state = {
			isOpened: false,
			isErrorWithDates: false,
		};
	}

	handleUpdate = (history: CurrencyHistoryData) => {
		const filteredData = history.filter((item, index) => {
			if (index === 0) return true;
			const date = new Date(item[0]);
			const beginDate = new Date(this.props.beginDate);
			const endDate = new Date(this.props.endDate);
			return date >= beginDate && date <= endDate;
		});

		this.context.updateData(filteredData);
	};

	handleUSDButtonClick = () => {
		this.handleUpdate(this.props.historyUSD);
	};

	handleEURButtonClick = () => {
		this.handleUpdate(this.props.historyEUR);
	};

	onOpen = () => {
		this.setState({ isOpened: true });
	};

	onClose = () => {
		this.setState({ isOpened: false });
	};

	render() {
		const { isOpened } = this.state;

		return (
			<>
				<ButtonsContainer data-cy="chart-buttons">
					<ChartButton
						disabled={this.state.isErrorWithDates}
						onClick={this.handleUSDButtonClick}
					>
						USD
					</ChartButton>
					<ChartButton
						disabled={this.state.isErrorWithDates}
						onClick={this.handleEURButtonClick}
					>
						EUR
					</ChartButton>
					<DateInput />
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
	dates: DatesProps;
}

const mapStateToProps = (state: IStateRedux) => {
	const { historyUSD, historyEUR } = state.currency;
	const { beginDate, endDate } = state.dates;

	return {
		historyUSD,
		historyEUR,
		beginDate,
		endDate,
	};
};

export default connect(mapStateToProps)(ChartButtons);
