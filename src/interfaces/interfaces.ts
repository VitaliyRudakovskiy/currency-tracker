export interface ICurrency {
	code: string;
	value: number;
}

export interface ExchangeRateData {
	rate_close: number;
	rate_high: number;
	rate_low: number;
	rate_open: number;
	time_close: string;
	time_open: string;
	time_period_end: string;
	time_period_start: string;
}

export type HistoryEntry = [
	string,
	string | number,
	string | number,
	string | number,
	string | number,
];

export type CurrencyHistoryData = [...HistoryEntry][];

export interface IFormData {
	newHighRate: string;
	newLowRate: string;
	newOpenRate: string;
	newCloseRate: string;
}

export interface IBank {
	bankName: string;
	coordinates: number[];
}
