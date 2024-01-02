import React, { ChangeEvent, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputContainer } from './styled';
import { selectInputValue, setInputValue } from '@store/reducers/inputSlice';

const Input: React.FC = () => {
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
};

export default Input;
