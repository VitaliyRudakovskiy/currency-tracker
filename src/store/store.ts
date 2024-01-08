import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './reducers/currencySlice';
import themeReducer from './reducers/themeSlice';
import inputReducer from './reducers/inputSlice';
import modalReducer from './reducers/modalSlice';
import dropsownSlice from './reducers/dropsownSlice';
import banksInputSlice from './reducers/banksSlice';

const store = configureStore({
	reducer: {
		banks: banksInputSlice,
		dropdown: dropsownSlice,
		currency: currencyReducer,
		input: inputReducer,
		modal: modalReducer,
		theme: themeReducer,
	},
});

export default store;
