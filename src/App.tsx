import React from 'react';
import ThemeProvider from '@providers/ThemeProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GlobalStyles, { Wrapper } from './GlobalStyles';
import Home from '@pages/Home';
import Timeline from '@pages/Timeline';
import Banks from '@pages/Banks';
import Contacts from '@pages/Contacts';

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
	return (
		<ThemeProvider>
			<Wrapper>
				<GlobalStyles />
				<RouterProvider router={router} />
			</Wrapper>
		</ThemeProvider>
	);
}
