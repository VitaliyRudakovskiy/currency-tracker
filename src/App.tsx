import React from 'react';
import ThemeProvider from '@providers/ThemeProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '@pages/Home';
import Timeline from '@pages/Timeline';
import Banks from '@pages/Banks';
import Contacts from '@pages/Contacts';
import useCurrencyData from '@utils/useCurrencyData';
import useCurrencyHistory from '@utils/useCurrencyHistory';
import GlobalStyles, { Wrapper } from './GlobalStyles';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},

	{
		path: '/banks',
		element: <Banks />,
	},
	{
		path: '/contacts',
		element: <Contacts />,
	},
	{
		path: '/timeline',
		element: <Timeline />,
	},
]);

export default function App() {
	useCurrencyData();
	useCurrencyHistory();

	return (
		<ThemeProvider>
			<Wrapper>
				<GlobalStyles />
				<RouterProvider router={router} />
			</Wrapper>
		</ThemeProvider>
	);
}
