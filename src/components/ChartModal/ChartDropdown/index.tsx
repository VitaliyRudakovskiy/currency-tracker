import React, { PureComponent } from 'react';
import datesDropdown from '@utils/datesDropdown';

import { CurrencyHistoryData, IChartDropdownProps } from './interfaces';
import DropdownContainer from './styled';

class ChartDropdown extends PureComponent<IChartDropdownProps> {
	componentDidMount() {
		const { data } = this.props;
		if (data.length > 0) {
			this.updateData(data);
		}
	}

	componentDidUpdate(prevProps: IChartDropdownProps) {
		const { data } = this.props;
		if (prevProps.data !== data && data.length > 0) {
			this.updateData(data);
		}
	}

	updateData = (data: CurrencyHistoryData) => {
		const { setSelectedData, setFormData } = this.props;

		const initialSelectedDate = datesDropdown(data)[0];
		const initialSelectedData = data.find((item) => item[0] === initialSelectedDate);

		if (initialSelectedData) {
			setSelectedData(initialSelectedDate);
			setFormData({
				newLowRate: String(initialSelectedData[1]),
				newOpenRate: String(initialSelectedData[2]),
				newCloseRate: String(initialSelectedData[3]),
				newHighRate: String(initialSelectedData[4]),
			});
		}
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
			<DropdownContainer onChange={this.handleDropdownChange} value={selectedDate}>
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
