import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
	name: 'currency',
	initialState: {
		exchangeRate: 0,
	},
	reducers: {
		setExchangeRate: (state, action) => {
			state.exchangeRate = action.payload;
		},
	},
});

export const { setExchangeRate } = currencySlice.actions;
export default currencySlice.reducer;
