import { configureStore } from '@reduxjs/toolkit';
import banksInputSlice from './reducers/banksSlice';
import currencyReducer from './reducers/currencySlice';
import datesSlice from './reducers/datesSlice';
import inputReducer from './reducers/inputSlice';
import modalReducer from './reducers/modalSlice';
import themeReducer from './reducers/themeSlice';

const store = configureStore({
	reducer: {
		banks: banksInputSlice,
		currency: currencyReducer,
		dates: datesSlice,
		input: inputReducer,
		modal: modalReducer,
		theme: themeReducer,
	},
});

export default store;
