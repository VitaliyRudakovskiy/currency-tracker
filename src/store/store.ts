import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './reducers/currencySlice';
import themeReducer from './reducers/themeSlice';
import inputReducer from './reducers/inputSlice';
import modalReducer from './reducers/modalSlice';

const store = configureStore({
	reducer: {
		currency: currencyReducer,
		theme: themeReducer,
		input: inputReducer,
		modal: modalReducer,
	},
});

export default store;
