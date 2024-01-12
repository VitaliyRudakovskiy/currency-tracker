import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	currenciesRedux,
	currencyToConvertRedux,
	setCurrencyToConvert,
} from '@store/reducers/currencySlice';
import { ICurrency } from '@interfaces/interfaces';
import Dropdown from './styled';

export default function DropdownModal(): JSX.Element {
	const currencyToConvert: ICurrency = useSelector(currencyToConvertRedux);
	const currencies: ICurrency[] = useSelector(currenciesRedux);

	const dispatch = useDispatch();

	const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newActiveCurrency = e.target.value;

		const currToConvertStore: ICurrency | undefined = currencies.find(
			(item) => item.code === newActiveCurrency
		);

		if (currToConvertStore) {
			dispatch(setCurrencyToConvert(currToConvertStore));
		}
	};

	return (
		<Dropdown
			value={currencyToConvert.code}
			onChange={handleDropdownChange}
			data-cy="dropdown-modal"
		>
			{currencies.map(({ code }) => (
				<option key={code} value={code}>
					{code}
				</option>
			))}
		</Dropdown>
	);
}
