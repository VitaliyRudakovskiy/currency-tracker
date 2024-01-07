import getCurrenciesCodes from '@utils/getCurrenciesCodes';
import React, { ChangeEvent, useState } from 'react';
import {
	MapInput,
	MapInputContainer,
	MapTooltip,
	MapTooltipsContainer,
} from './styled';

export default function BanksInput() {
	const [input, setInput] = useState('');
	const codes = getCurrenciesCodes();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value.toUpperCase());
	};

	const handleButtonClick = (value: string) => {
		setInput(value);
	};

	const filteredValues = codes.filter((code) => code.includes(input));

	return (
		<MapInputContainer>
			<MapInput
				type="text"
				placeholder="Input currency to search for"
				value={input}
				onChange={handleChange}
			/>
			<MapTooltipsContainer>
				{filteredValues.map((value) => (
					<MapTooltip key={value} onClick={handleButtonClick.bind(null, value)}>
						{value}
					</MapTooltip>
				))}
			</MapTooltipsContainer>
		</MapInputContainer>
	);
}
