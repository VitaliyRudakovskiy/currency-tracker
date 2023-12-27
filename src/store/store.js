import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './reducers/currencyReducer';

const store = configureStore({
	reducer: {
		currency: currencyReducer,
	},
});

export default store;
