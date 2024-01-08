import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputValue, setInputValue } from '@store/reducers/inputSlice';
import InputContainer from './styled';

interface IInput {
	placeholder?: string;
}

export default function Input({ placeholder }: IInput): JSX.Element {
	const inputValue: string = useSelector(selectInputValue);

	const dispatch = useDispatch();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const digitRegExp = /[^0-9]/g;
		const filteredValue = e.target.value.replace(digitRegExp, '');
		dispatch(setInputValue(filteredValue));
	};

	return (
		<InputContainer
			type="text"
			placeholder={placeholder}
			value={inputValue}
			onChange={handleInputChange}
		/>
	);
}

Input.defaultProps = {
	placeholder: 'Input sum of money',
};
