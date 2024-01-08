import { useDispatch } from 'react-redux';
import getCurrenciesCodes from './getCurrenciesCodes';
import { useEffect } from 'react';
import bindCurrenciesToBanks from './bindCurrenciesToBanks';
import { setBanksWithCurrencies } from '@store/reducers/banksSlice';

const useBanksWithCurrencies = () => {
	const codes = getCurrenciesCodes();

	const dispatch = useDispatch();

	useEffect(() => {
		const banksWithCurrencies = bindCurrenciesToBanks(codes, 40);
		dispatch(setBanksWithCurrencies(banksWithCurrencies));
	}, []);
};

export default useBanksWithCurrencies;
