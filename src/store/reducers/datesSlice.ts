import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DatesState } from '@interfaces/interfaces';

const initialState: DatesState = {
	beginDate: '',
	endDate: '',
};

const datedSlice = createSlice({
	name: 'dates',
	initialState,
	reducers: {
		setBeginDate: (state, action: PayloadAction<string>) => {
			state.beginDate = action.payload;
		},
		setEndDate: (state, action: PayloadAction<string>) => {
			state.endDate = action.payload;
		},
	},
});

export const { setBeginDate, setEndDate } = datedSlice.actions;

export const selectBeginDate = (state: { dates: DatesState }): string =>
	state.dates.beginDate;
export const selectEndDate = (state: { dates: DatesState }): string =>
	state.dates.endDate;

export default datedSlice.reducer;
