import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BanksState, IBanksWithCurrencies } from './types';

const initialState: BanksState = {
	banksInputValue: '',
	banksWithCurrencies: [],
};

const banksSlice = createSlice({
	name: 'banks',
	initialState,
	reducers: {
		setBanksInputValue: (state, action: PayloadAction<string>) => {
			state.banksInputValue = action.payload;
		},
		setBanksWithCurrencies: (state, action: PayloadAction<IBanksWithCurrencies[]>) => {
			state.banksWithCurrencies = action.payload;
		},
	},
});

export const { setBanksInputValue, setBanksWithCurrencies } = banksSlice.actions;

export const selectBanksInputValue = (state: { banks: BanksState }): string => state.banks.banksInputValue;
export const selectBanksWithCurrencies = (state: { banks: BanksState }): IBanksWithCurrencies[] => state.banks.banksWithCurrencies;

export default banksSlice.reducer;
