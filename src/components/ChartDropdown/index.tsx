import React, { Component } from 'react';
import { CurrencyHistoryData, IFormData } from '@interfaces/interfaces';
import { DropdownContainer } from './styled';

interface IChartDropdown {
	selectedDate: string;
	setSelectedData: (data: string) => void;
	data: CurrencyHistoryData;
	setFormData: (data: IFormData) => void;
}

class ChartDropdown extends Component<IChartDropdown, Record<string, never>> {
	componentDidMount() {
		const { data, setSelectedData, setFormData } = this.props;

		if (data.length > 0) {
			const initialSelectedDate = this.datesDropdown(data)[0];
			const initialSelectedData = data.find(
				(item) => item[0] === initialSelectedDate
			);

			if (initialSelectedData) {
				setSelectedData(initialSelectedDate);
				setFormData({
					newLowRate: String(initialSelectedData[1]),
					newOpenRate: String(initialSelectedData[2]),
					newCloseRate: String(initialSelectedData[3]),
					newHighRate: String(initialSelectedData[4]),
				});
			}
		}
	}

	componentDidUpdate(prevProps: IChartDropdown) {
		const { data, setSelectedData, setFormData } = this.props;

		if (prevProps.data !== data && data.length > 0) {
			const initialSelectedDate = this.datesDropdown(data)[0];
			const initialSelectedData = data.find(
				(item) => item[0] === initialSelectedDate
			);

			if (initialSelectedData) {
				setSelectedData(initialSelectedDate);
				setFormData({
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
		const { setSelectedData, setFormData, data } = this.props;
		const selectedDate = event.target.value;
		setSelectedData(selectedDate);

		const selectedData = data.find((item) => item[0] === selectedDate);

		if (selectedData) {
			setFormData({
				newLowRate: String(selectedData[1]),
				newOpenRate: String(selectedData[2]),
				newCloseRate: String(selectedData[3]),
				newHighRate: String(selectedData[4]),
			});
		}
	};

	render() {
		const { selectedDate, data } = this.props;

		return (
			<DropdownContainer
				onChange={this.handleDropdownChange}
				value={selectedDate}
			>
				{this.datesDropdown(data).map((date) => (
					<option key={date} value={date}>
						{date}
					</option>
				))}
			</DropdownContainer>
		);
	}
}

export default ChartDropdown;
