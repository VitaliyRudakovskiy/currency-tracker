import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrencyHistoryData, ICurrency } from '@interfaces/interfaces';

export interface CurrencyState {
	exchangeRate: number;
	updateTime: string;
	activeCurrency: ICurrency;
	currencyToConvert: ICurrency;
	currencies: ICurrency[];
	historyUSD: CurrencyHistoryData;
	historyEUR: CurrencyHistoryData;
}

const initialState: CurrencyState = {
	exchangeRate: 0,
	updateTime: '',
	activeCurrency: { code: '', value: 0 },
	currencyToConvert: { code: 'USD', value: 1 },
	currencies: [],
	historyUSD: [['', '', '', '', '']],
	historyEUR: [['', '', '', '', '']],
};

const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		setExchangeRate: (state, action: PayloadAction<number>) => {
			state.exchangeRate = action.payload;
		},

		setUpdateTime: (state, action: PayloadAction<string>) => {
			state.updateTime = action.payload;
		},

		setActiveCurrency: (state, action: PayloadAction<ICurrency>) => {
			state.activeCurrency = action.payload;
		},

		setCurrencyToConvert: (state, action: PayloadAction<ICurrency>) => {
			state.currencyToConvert = action.payload;
		},

		setCurrenciesToStore: (state, action: PayloadAction<ICurrency[]>) => {
			state.currencies.push(...action.payload);
		},

		setHistoryUSD: (state, action: PayloadAction<CurrencyHistoryData>) => {
			state.historyUSD = action.payload;
		},

		setHistoryEUR: (state, action: PayloadAction<CurrencyHistoryData>) => {
			state.historyEUR = action.payload;
		},
	},
});

export const {
	setExchangeRate,
	setUpdateTime,
	setActiveCurrency,
	setCurrencyToConvert,
	setCurrenciesToStore,
	setHistoryUSD,
	setHistoryEUR,
} = currencySlice.actions;

export const activeCurrencyRedux = (state: { currency: CurrencyState }) =>
	state.currency.activeCurrency;
export const currencyToConvertRedux = (state: { currency: CurrencyState }) =>
	state.currency.currencyToConvert;
export const updateTimeSelector = (state: { currency: CurrencyState }) =>
	state.currency.updateTime;
export const exchangeRateRedux = (state: { currency: CurrencyState }) =>
	state.currency.exchangeRate;
export const currenciesRedux = (state: { currency: CurrencyState }) =>
	state.currency.currencies;
export const historyUSDRedux = (state: { currency: CurrencyState }) =>
	state.currency.historyUSD;
export const historyEURRedux = (state: { currency: CurrencyState }) =>
	state.currency.historyEUR;

export default currencySlice.reducer;
