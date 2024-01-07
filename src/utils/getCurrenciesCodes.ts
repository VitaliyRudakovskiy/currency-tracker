import { CURRENCIES_LOCAL_STORAGE } from '@constants/currencies';
import { ICurrency } from '@interfaces/interfaces';

interface ICurrencies {
	meta: any;
	data: Data;
}

interface Data {
	[code: string]: ICurrency;
}

export default function getCurrenciesCodes() {
	const currencies = localStorage.getItem(CURRENCIES_LOCAL_STORAGE);

	if (currencies === null) return [];

	const currenciesCodes: ICurrencies = JSON.parse(currencies);

	if (currenciesCodes && currenciesCodes.data) {
		try {
			return Object.keys(currenciesCodes.data);
		} catch {
			return [];
		}
	} else {
		return [];
	}
}
