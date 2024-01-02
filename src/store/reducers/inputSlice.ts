import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputState {
	inputValue: string;
}

const initialState: InputState = {
	inputValue: '',
};

const inputSlice = createSlice({
	name: 'input',
	initialState,
	reducers: {
		setInputValue: (state, action: PayloadAction<string>) => {
			state.inputValue = action.payload;
		},
		clearInputValue: (state) => {
			state.inputValue = '';
		},
	},
});

export const { setInputValue, clearInputValue } = inputSlice.actions;

export const selectInputValue = (state: { input: InputState }): string =>
	state.input.inputValue;

export default inputSlice.reducer;
