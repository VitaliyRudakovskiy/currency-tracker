import React, { Component } from 'react';
import { DropdownContainer } from './styled';
import { CurrencyHistoryData, IFormData } from '@interfaces/interfaces';

interface IChartDropdown {
	selectedDate: string;
	setSelectedData: (data: string) => void;
	data: CurrencyHistoryData;
	setFormData: (data: IFormData) => void;
}

class ChartDropdown extends Component<IChartDropdown, {}> {
	componentDidMount() {
		if (this.props.data.length > 0) {
			const initialSelectedDate = this.datesDropdown(this.props.data)[0];
			const initialSelectedData = this.props.data.find(
				(item) => item[0] === initialSelectedDate
			);

			if (initialSelectedData) {
				this.props.setSelectedData(initialSelectedDate);
				this.props.setFormData({
					newLowRate: String(initialSelectedData[1]),
					newOpenRate: String(initialSelectedData[2]),
					newCloseRate: String(initialSelectedData[3]),
					newHighRate: String(initialSelectedData[4]),
				});
			}
		}
	}

	componentDidUpdate(prevProps: IChartDropdown) {
		if (prevProps.data !== this.props.data && this.props.data.length > 0) {
			const initialSelectedDate = this.datesDropdown(this.props.data)[0];
			const initialSelectedData = this.props.data.find(
				(item) => item[0] === initialSelectedDate
			);

			if (initialSelectedData) {
				this.props.setSelectedData(initialSelectedDate);
				this.props.setFormData({
					newLowRate: String(initialSelectedData[1]),
					newOpenRate: String(initialSelectedData[2]),
					newCloseRate: String(initialSelectedData[3]),
					newHighRate: String(initialSelectedData[4]),
				});
			}
		}
	}

	datesDropdown = (data: CurrencyHistoryData) => {
		const subarraysWithoutFirst = data.slice(1);
		return subarraysWithoutFirst.map((item) => item[0]);
	};

	handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedDate = event.target.value;
		this.props.setSelectedData(selectedDate);

		const selectedData = this.props.data.find(
			(item) => item[0] === selectedDate
		);

		if (selectedData) {
			this.props.setFormData({
				newLowRate: String(selectedData[1]),
				newOpenRate: String(selectedData[2]),
				newCloseRate: String(selectedData[3]),
				newHighRate: String(selectedData[4]),
			});
		}
	};

	render() {
		return (
			<DropdownContainer
				onChange={this.handleDropdownChange}
				value={this.props.selectedDate}
			>
				{this.datesDropdown(this.props.data).map((date) => (
					<option key={date} value={date}>
						{date}
					</option>
				))}
			</DropdownContainer>
		);
	}
}

export default ChartDropdown;
