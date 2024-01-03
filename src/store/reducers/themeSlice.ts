import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
	currentTheme: 'dark' | 'light';
}

const initialState: ThemeState = {
	currentTheme: 'dark',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: { theme: ThemeState }): 'dark' | 'light' =>
	state.theme.currentTheme;

export default themeSlice.reducer;
