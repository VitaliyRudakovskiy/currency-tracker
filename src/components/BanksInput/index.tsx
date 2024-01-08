import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectBanksInputValue,
	setBanksInputValue,
} from '@store/reducers/banksSlice';
import getCurrenciesCodes from '@utils/getCurrenciesCodes';
import {
	MapInput,
	MapInputContainer,
	MapTooltip,
	MapTooltipsContainer,
} from './styled';

export default function BanksInput() {
	const banksInput = useSelector(selectBanksInputValue);
	const codes = getCurrenciesCodes();

	const dispatch = useDispatch();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setBanksInputValue(e.target.value.toUpperCase()));
	};

	const handleButtonClick = (value: string) => {
		dispatch(setBanksInputValue(value));
	};

	const filteredValues = codes.filter((code) => code.includes(banksInput));

	return (
		<MapInputContainer>
			<MapInput
				type="text"
				placeholder="Input currency to search for"
				value={banksInput}
				onChange={handleChange}
			/>
			<MapTooltipsContainer>
				{filteredValues.map((value) => (
					<MapTooltip key={value} onClick={() => handleButtonClick(value)}>
						{value}
					</MapTooltip>
				))}
			</MapTooltipsContainer>
		</MapInputContainer>
	);
}
