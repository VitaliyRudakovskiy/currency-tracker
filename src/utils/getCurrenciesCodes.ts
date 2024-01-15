import { CURRENCIES_LOCAL_STORAGE } from '@constants/currencies';

interface ICurrency {
	code: string;
	value: number;
}

interface IData {
	[code: string]: ICurrency;
}

interface IMeta {
	[code: string]: string;
}

interface ICurrencies {
	meta: IMeta;
	data: IData;
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
