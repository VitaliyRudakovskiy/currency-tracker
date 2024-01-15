import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeProvider from '@providers/ThemeProvider';
import useBanksWithCurrencies from '@utils/useBanksWithCurrencies';
import useCurrencyData from '@utils/useCurrencyData';
import useCurrencyHistory from '@utils/useCurrencyHistory';

import GlobalStyles, { Wrapper } from './GlobalStyles';
import router from './router';

const browserRouter = createBrowserRouter(router);

export default function App() {
	useCurrencyData();
	useCurrencyHistory();
	useBanksWithCurrencies();

	return (
		<ThemeProvider>
			<Wrapper>
				<GlobalStyles />
				<RouterProvider router={browserRouter} />
			</Wrapper>
		</ThemeProvider>
	);
}
