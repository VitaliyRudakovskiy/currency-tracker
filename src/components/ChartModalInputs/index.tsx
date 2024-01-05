import React, { Component } from 'react';
import { IFormData } from '@interfaces/interfaces';
import { Input, InputsContainer } from './styled';

interface IChartInputsProps {
	formData: IFormData;
	setFormData: (data: IFormData) => void;
}

class ChartModalInputs extends Component<IChartInputsProps> {
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
			<InputsContainer>
				<Input
					placeholder="Input new low rate"
					value={newLowRate}
					onChange={this.handleInputChange('newLowRate')}
				/>
				<Input
					placeholder="Input new high rate"
					value={newHighRate}
					onChange={this.handleInputChange('newHighRate')}
				/>
				<Input
					placeholder="Input new open rate"
					value={newOpenRate}
					onChange={this.handleInputChange('newOpenRate')}
				/>
				<Input
					placeholder="Input new close rate"
					value={newCloseRate}
					onChange={this.handleInputChange('newCloseRate')}
				/>
			</InputsContainer>
		);
	}
}

export default ChartModalInputs;
