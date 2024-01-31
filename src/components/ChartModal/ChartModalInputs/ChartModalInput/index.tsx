import React, { ChangeEvent, PureComponent } from 'react';

import { ChartInput, ChartInputContainer } from './styled';

interface IPChartModalInputrops {
	label: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class ChartModalInput extends PureComponent<IPChartModalInputrops> {
	render() {
		const { label, value, onChange } = this.props;
		return (
			<ChartInputContainer>
				<p>{label}</p>
				<ChartInput placeholder="Input new low rate" value={value} onChange={onChange} />
			</ChartInputContainer>
		);
	}
}

export default ChartModalInput;
