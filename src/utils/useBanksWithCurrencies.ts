import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBanksWithCurrencies } from '@store/reducers/banksSlice';
import getCurrenciesCodes from './getCurrenciesCodes';
import bindCurrenciesToBanks from './bindCurrenciesToBanks';

const useBanksWithCurrencies = () => {
	const codes = getCurrenciesCodes();

	const dispatch = useDispatch();

	useEffect(() => {
		const banksWithCurrencies = bindCurrenciesToBanks(codes, 40);
		dispatch(setBanksWithCurrencies(banksWithCurrencies));
	}, []);
};

export default useBanksWithCurrencies;
