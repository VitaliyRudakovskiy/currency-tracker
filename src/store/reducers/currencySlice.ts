import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrency } from '@interfaces/interfaces';

interface CurrencyState {
	exchangeRate: number;
	updateTime: string;
	activeCurrency: ICurrency;
	currencies: ICurrency[];
}

const initialState: CurrencyState = {
	exchangeRate: 0,
	updateTime: '',
	activeCurrency: { code: '', value: 0 },
	currencies: [],
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

		setCurrenciesToStore: (state, action: PayloadAction<ICurrency[]>) => {
			state.currencies.push(...action.payload);
		},
	},
});

export const {
	setExchangeRate,
	setUpdateTime,
	setActiveCurrency,
	setCurrenciesToStore,
} = currencySlice.actions;

export const activeCurrencyRedux = (state: { currency: CurrencyState }) =>
	state.currency.activeCurrency;
export const updateTimeSelector = (state: { currency: CurrencyState }) =>
	state.currency.updateTime;
export const exchangeRateRedux = (state: { currency: CurrencyState }) =>
	state.currency.exchangeRate;
export const currenciesRedux = (state: { currency: CurrencyState }) =>
	state.currency.currencies;

export default currencySlice.reducer;
