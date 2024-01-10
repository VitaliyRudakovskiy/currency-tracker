import React, { PureComponent } from 'react';
import { IFormData } from '@interfaces/interfaces';
import ChartModalInput from '@components/ChartModalInput';
import ChartInputsContainer from './styled';

interface IChartInputsProps {
	formData: IFormData;
	setFormData: (data: IFormData) => void;
}

class ChartModalInputs extends PureComponent<IChartInputsProps> {
	handleInputChange =
		(fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
			const { formData, setFormData } = this.props;
			setFormData({
				...formData,
				[fieldName]: event.target.value,
			});
		};

	render() {
		const { formData } = this.props;
		const { newLowRate, newHighRate, newOpenRate, newCloseRate } = formData;

		return (
			<ChartInputsContainer>
				<ChartModalInput
					label="Low Rate"
					value={newLowRate}
					onChange={this.handleInputChange('newLowRate')}
				/>
				<ChartModalInput
					label="High Rate"
					value={newHighRate}
					onChange={this.handleInputChange('newHighRate')}
				/>
				<ChartModalInput
					label="Open Rate"
					value={newOpenRate}
					onChange={this.handleInputChange('newOpenRate')}
				/>
				<ChartModalInput
					label="Close Rate"
					value={newCloseRate}
					onChange={this.handleInputChange('newCloseRate')}
				/>
			</ChartInputsContainer>
		);
	}
}

export default ChartModalInputs;
