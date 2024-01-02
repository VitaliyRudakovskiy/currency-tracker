export const targetCurrencies = [
	'USD',
	'ARS',
	'CAD',
	'JPY',
	'AUD',
	'CNY',
	'EUR',
	'BTC',
	'TRY',
	'RUB',
];

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
