import React, { PureComponent } from 'react';
import chartModalInputs from '@constants/chartModalnputs';

import ChartModalInput from './ChartModalInput';
import { IFormData } from './interfaces';
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

		return (
			<ChartInputsContainer>
				{chartModalInputs.map((input) => (
					<ChartModalInput
						key={input.value}
						label={input.label}
						value={formData[input.value]}
						onChange={this.handleInputChange(input.value)}
					/>
				))}
			</ChartInputsContainer>
		);
	}
}

export default ChartModalInputs;
