import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	activeCurrencyRedux,
	currenciesRedux,
	setActiveCurrency,
} from '@store/reducers/currencySlice';
import { ICurrency } from '@interfaces/interfaces';
import { Dropdown } from './styled';

const DropdownModal: React.FC = () => {
	const activeCurrency: ICurrency = useSelector(activeCurrencyRedux);
	const currencies: ICurrency[] = useSelector(currenciesRedux);

	const [selectedValue, setSelectedValue] = useState<string>(
		activeCurrency.code
	);

	const dispatch = useDispatch();

	const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newActiveCurrency = e.target.value;

		const activeCurrToStore: ICurrency = currencies.find(
			(item) => item.code === newActiveCurrency
		);

		setSelectedValue(newActiveCurrency);
		dispatch(setActiveCurrency(activeCurrToStore));
	};

	return (
		<Dropdown value={selectedValue} onChange={handleDropdownChange}>
			{currencies.map((item) => (
				<option key={item.code} value={item.code}>
					{item.code}
				</option>
			))}
		</Dropdown>
	);
};

export default DropdownModal;
