import { configureStore } from '@reduxjs/toolkit';
import themeReducer, { selectTheme,toggleTheme } from '@store/reducers/themeSlice';

describe('theme slice', () => {
	const store = configureStore({ reducer: { theme: themeReducer } });

	it('should handle initial state', () => {
		expect(selectTheme(store.getState())).toEqual('dark');
	});

	it('should handle theme toggle', () => {
		store.dispatch(toggleTheme());
		expect(selectTheme(store.getState())).toEqual('light');
		store.dispatch(toggleTheme());
		expect(selectTheme(store.getState())).toEqual('dark');
	});
});
