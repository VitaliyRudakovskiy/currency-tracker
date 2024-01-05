import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './reducers/currencySlice';
import themeReducer from './reducers/themeSlice';
import inputReducer from './reducers/inputSlice';
import modalReducer from './reducers/modalSlice';
import dropsownSlice from './reducers/dropsownSlice';

const store = configureStore({
	reducer: {
		currency: currencyReducer,
		theme: themeReducer,
		input: inputReducer,
		modal: modalReducer,
		dropdown: dropsownSlice,
	},
});

export default store;
