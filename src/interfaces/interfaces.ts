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
