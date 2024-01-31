interface ICurrency {
	code: string;
	value: number;
}

export default function calculateConvertedSum(inputValue: string, currencyToConvert: ICurrency, activeCurrency: ICurrency): string {
	return ((parseFloat(inputValue) * currencyToConvert.value) / activeCurrency.value).toPrecision(5);
}
