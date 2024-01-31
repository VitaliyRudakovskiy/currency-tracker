import React, { ChangeEvent, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DIGIT_REG_EXP from '@constants/inputReg';
import { selectInputValue, setInputValue } from '@store/reducers/inputSlice';

import { IInput } from './interfaces';
import InputContainer from './styled';

function Input({ placeholder = 'Input sum of money' }: IInput): JSX.Element {
	const inputValue: string = useSelector(selectInputValue);

	const dispatch = useDispatch();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const filteredValue = e.target.value.replace(DIGIT_REG_EXP, '');
		dispatch(setInputValue(filteredValue));
	};

	return <InputContainer data-cy="input-modal" type="text" placeholder={placeholder} value={inputValue} onChange={handleInputChange} />;
}

export default memo(Input);
