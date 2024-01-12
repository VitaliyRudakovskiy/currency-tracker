import React, { ChangeEvent, PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	selectBeginDate,
	selectEndDate,
	setBeginDate,
	setEndDate,
} from '@store/reducers/datesSlice';
import { CurrencyState, historyUSDRedux } from '@store/reducers/currencySlice';
import datesDropdown from '@constants/datesDropdown';
import { CurrencyHistoryData, DatesState } from '@interfaces/interfaces';
import { InputsContainer, DatesSelect } from './styled';

interface DateInputProps {
	historyUSD: CurrencyHistoryData;
	beginDate: string;
	endDate: string;
	setBeginDate: (date: string) => void;
	setEndDate: (date: string) => void;
}

interface DateInputState {
	dates: string[];
}

class DateInput extends PureComponent<DateInputProps, DateInputState> {
	constructor(props: DateInputProps) {
		super(props);
		this.state = {
			dates: [],
		};
	}

	componentDidMount() {
		this.updateDates();
	}

	componentDidUpdate(prevProps: DateInputProps) {
		if (prevProps.historyUSD !== this.props.historyUSD) {
			this.updateDates();
		}
	}

	onBeginDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
		this.props.setBeginDate(e.target.value);
	};

	onEndDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
		this.props.setEndDate(e.target.value);
	};

	updateDates() {
		const newDates = datesDropdown(this.props.historyUSD);
		this.setState({ dates: newDates });
		this.props.setBeginDate(newDates[0]);
		this.props.setEndDate(newDates[newDates.length - 1]);
	}

	render() {
		return (
			<InputsContainer>
				<DatesSelect
					value={this.props.beginDate}
					onChange={this.onBeginDateChange}
				>
					{this.state.dates.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</DatesSelect>
				<DatesSelect value={this.props.endDate} onChange={this.onEndDateChange}>
					{this.state.dates.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</DatesSelect>
			</InputsContainer>
		);
	}
}

interface StateRedux {
	currency: CurrencyState;
	dates: DatesState;
}

const mapStateToProps = (state: StateRedux) => ({
	historyUSD: historyUSDRedux(state),
	beginDate: selectBeginDate(state),
	endDate: selectEndDate(state),
});

const mapDispatchToProps = {
	setBeginDate,
	setEndDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateInput);
