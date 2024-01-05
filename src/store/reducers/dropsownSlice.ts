import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DropdownState {
	dropdownValue: string;
}

const initialState: DropdownState = {
	dropdownValue: '',
};

const dropdownSlice = createSlice({
	name: 'dropdown',
	initialState,
	reducers: {
		setDropdownValue: (state, action: PayloadAction<string>) => {
			state.dropdownValue = action.payload;
		},
		clearDropdownValue: (state) => {
			state.dropdownValue = '';
		},
	},
});

export const { setDropdownValue, clearDropdownValue } = dropdownSlice.actions;

export const selectDropdownValue = (state: { input: DropdownState }): string =>
	state.input.dropdownValue;

export default dropdownSlice.reducer;
