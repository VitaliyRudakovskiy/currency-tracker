import React, { PureComponent } from 'react';
import { CurrencyHistoryData, IFormData } from '@interfaces/interfaces';
import datesDropdown from '@constants/datesDropdown';
import DropdownContainer from './styled';

interface IChartDropdownProps {
	selectedDate: string;
	setSelectedData: (data: string) => void;
	data: CurrencyHistoryData;
	setFormData: (data: IFormData) => void;
}

class ChartDropdown extends PureComponent<IChartDropdownProps> {
	componentDidMount() {
		const { data, setSelectedData, setFormData } = this.props;

		if (data.length > 0) {
			const initialSelectedDate = datesDropdown(data)[0];
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

	componentDidUpdate(prevProps: IChartDropdownProps) {
		const { data, setSelectedData, setFormData } = this.props;

		if (prevProps.data !== data && data.length > 0) {
			const initialSelectedDate = datesDropdown(data)[0];
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
				{datesDropdown(data).map((date) => (
					<option key={date} value={date}>
						{date}
					</option>
				))}
			</DropdownContainer>
		);
	}
}

export default ChartDropdown;
