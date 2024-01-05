import React, { Component } from 'react';
import { Input, InputsContainer } from './styled';
import { IFormData } from '@interfaces/interfaces';

interface IChartInputsProps {
	formData: IFormData;
	setFormData: (data: IFormData) => void;
}

class ChartModalInputs extends Component<IChartInputsProps> {
	handleInputChange =
		(fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
			this.props.setFormData({
				...this.props.formData,
				[fieldName]: event.target.value,
			});
		};

	render() {
		return (
			<InputsContainer>
				<Input
					placeholder="Input new low rate"
					value={this.props.formData.newLowRate}
					onChange={this.handleInputChange('newLowRate')}
				/>
				<Input
					placeholder="Input new high rate"
					value={this.props.formData.newHighRate}
					onChange={this.handleInputChange('newHighRate')}
				/>
				<Input
					placeholder="Input new open rate"
					value={this.props.formData.newOpenRate}
					onChange={this.handleInputChange('newOpenRate')}
				/>
				<Input
					placeholder="Input new close rate"
					value={this.props.formData.newCloseRate}
					onChange={this.handleInputChange('newCloseRate')}
				/>
			</InputsContainer>
		);
	}
}

export default ChartModalInputs;
