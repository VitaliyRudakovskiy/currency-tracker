import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBanksWithCurrencies } from '@store/reducers/banksSlice';

import bindCurrenciesToBanks from './bindCurrenciesToBanks';
import getCurrenciesCodes from './getCurrenciesCodes';

const useBanksWithCurrencies = () => {
	const codes = getCurrenciesCodes();

	const dispatch = useDispatch();

	useEffect(() => {
		const banksWithCurrencies = bindCurrenciesToBanks(codes, 40);
		dispatch(setBanksWithCurrencies(banksWithCurrencies));
	}, []);
};

export default useBanksWithCurrencies;
