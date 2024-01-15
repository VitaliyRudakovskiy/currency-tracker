import React, { ChangeEvent, PureComponent } from 'react';
import { connect } from 'react-redux';
import datesSelects from '@constants/datesSelects';
import { historyUSDRedux } from '@store/reducers/currencySlice';
import {
	selectBeginDate,
	selectEndDate,
	setBeginDate,
	setEndDate,
} from '@store/reducers/datesSlice';
import datesDropdown from '@utils/datesDropdown';

import { DateInputProps, DateInputState, StateRedux } from './interfaces';
import { DatesSelect, SelectsContainer } from './styled';

class DateInputs extends PureComponent<DateInputProps, DateInputState> {
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

	handleInputChange =
		(onChangeFunction: string) => (e: ChangeEvent<HTMLSelectElement>) => {
			if (onChangeFunction === 'setBeginDate') {
				this.props.setBeginDate(e.target.value);
			} else if (onChangeFunction === 'setEndDate') {
				this.props.setEndDate(e.target.value);
			}
		};

	updateDates() {
		const newDates = datesDropdown(this.props.historyUSD);
		this.setState({ dates: newDates });
		this.props.setBeginDate(newDates[0]);
		this.props.setEndDate(newDates[newDates.length - 1]);
	}

	render() {
		return (
			<SelectsContainer>
				{datesSelects.map((select) => (
					<DatesSelect
						key={select.value}
						value={this.props[select.value] as string}
						onChange={this.handleInputChange(select.onChange)}
					>
						{this.state.dates.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</DatesSelect>
				))}
			</SelectsContainer>
		);
	}
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

export default connect(mapStateToProps, mapDispatchToProps)(DateInputs);
