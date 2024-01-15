interface IBank {
	bankName: string;
	coordinates: number[];
}

export interface IBankWithCurrency extends IBank {
	currencies: string[];
}

export default function filterBanks(
	banksWithCurrencies: IBankWithCurrency[],
	currencyInput: string
): IBankWithCurrency[] {
	return currencyInput === ''
		? banksWithCurrencies
		: banksWithCurrencies.filter((bank) =>
				bank.currencies.includes(currencyInput)
			);
}
