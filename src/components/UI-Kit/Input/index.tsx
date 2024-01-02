import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputValue, setInputValue } from '@store/reducers/inputSlice';
import { InputContainer } from './styled';

export default function Input(): JSX.Element {
	const inputValue: string = useSelector(selectInputValue);

	const dispatch = useDispatch();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const digitRegExp = new RegExp(/[^0-9]/g);
		const filteredValue = e.target.value.replace(digitRegExp, '');
		dispatch(setInputValue(filteredValue));
	};

	return (
		<InputContainer
			type="text"
			placeholder="Input sum of money"
			value={inputValue}
			onChange={handleInputChange}
		/>
	);
}
