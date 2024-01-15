import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ChartModal from '@components/ChartModal';
import { ChartDataContext } from '@providers/ChartDataProvider';

import DateInputs from './DateInputs';
import { ChartSubjectInterface, CurrencyHistoryData } from './interfaces';
import {
	ButtonsContainer,
	ChartButton,
	ChartButtonsWrapper,
	DatesErrorMessage,
} from './styled';

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
		const { beginDate, endDate } = this.props;

		const checkBeginDate = new Date(beginDate).getTime();
		const checkEndDate = new Date(endDate).getTime();

		if (checkBeginDate > checkEndDate) {
			this.setState({ isErrorWithDates: true });
			return;
		} else {
			this.setState({ isErrorWithDates: false });
		}

		const filteredData = history.filter((item, index) => {
			if (index === 0) return true;
			const date = new Date(item[0]).getTime();
			return date >= checkBeginDate && date <= checkEndDate;
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
		const { isOpened, isErrorWithDates } = this.state;

		return (
			<ChartButtonsWrapper>
				{isErrorWithDates && (
					<DatesErrorMessage>
						Begin date should be <b>less than or equal</b> to the end date
					</DatesErrorMessage>
				)}

				<ButtonsContainer data-cy="chart-buttons">
					<ChartButton onClick={this.handleUSDButtonClick}>USD</ChartButton>
					<ChartButton onClick={this.handleEURButtonClick}>EUR</ChartButton>
					<DateInputs />
					<ChartButton onClick={this.onOpen}>Change value</ChartButton>
				</ButtonsContainer>

				{isOpened && <ChartModal onClose={this.onClose} />}
			</ChartButtonsWrapper>
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
