export const CURRENCIES_LOCAL_STORAGE = 'currencyData';

interface CurrencyNames {
	[code: string]: string;
}

export const currencyNames: CurrencyNames = {
	USD: 'Commercial Dollar',
	ARS: 'Argentine Peso',
	CAD: 'Canadian Dollar',
	JPY: 'Japanese Yen',
	AUD: 'Australian Dollar',
	CNY: 'Chinese Yuan',
	EUR: 'Euro',
	BTC: 'Bitcoin',
	TRY: 'Turkish Lira',
	RUB: 'Russian Ruble',
};
