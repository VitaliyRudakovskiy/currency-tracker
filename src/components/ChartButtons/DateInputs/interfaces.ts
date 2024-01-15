interface ICurrency {
	code: string;
	value: number;
}

type HistoryEntry = [
	string,
	string | number,
	string | number,
	string | number,
	string | number,
];

type CurrencyHistoryData = [...HistoryEntry][];

interface CurrencyState {
	exchangeRate: number;
	updateTime: string;
	activeCurrency: ICurrency;
	currencyToConvert: ICurrency;
	currencies: ICurrency[];
	historyUSD: CurrencyHistoryData;
	historyEUR: CurrencyHistoryData;
}

interface DatesState {
	beginDate: string;
	endDate: string;
}

export interface DateInputProps {
	historyUSD: CurrencyHistoryData;
	setBeginDate: (date: string) => void;
	setEndDate: (date: string) => void;
	[key: string]: string | CurrencyHistoryData | ((date: string) => void);
}

export interface DateInputState {
	dates: string[];
}

export interface StateRedux {
	currency: CurrencyState;
	dates: DatesState;
}
