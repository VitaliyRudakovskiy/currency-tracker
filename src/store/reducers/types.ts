export interface IBank {
	bankName: string;
	coordinates: number[];
}

export interface IBanksWithCurrencies extends IBank {
	currencies: string[];
}

export interface BanksState {
	banksInputValue: string;
	banksWithCurrencies: IBanksWithCurrencies[];
}

export interface ICurrency {
	code: string;
	value: number;
}

export type HistoryEntry = [string, string | number, string | number, string | number, string | number];

export type CurrencyHistoryData = [...HistoryEntry][];

export interface CurrencyState {
	exchangeRate: number;
	updateTime: string;
	activeCurrency: ICurrency;
	currencyToConvert: ICurrency;
	currencies: ICurrency[];
	historyUSD: CurrencyHistoryData;
	historyEUR: CurrencyHistoryData;
}

export interface DatesState {
	beginDate: string;
	endDate: string;
}

export interface InputState {
	inputValue: string;
}

export interface ModalSlice {
	isOpened: boolean;
}

export interface ThemeState {
	currentTheme: 'dark' | 'light';
}
