import React from 'react';
import Banks from '@pages/Banks';
import Contacts from '@pages/Contacts';
import Home from '@pages/Home';
import Timeline from '@pages/Timeline';

const router = [
	{
		path: '/',
		element: <Home />,
		name: 'Home',
	},
	{
		path: '/timeline',
		element: <Timeline />,
		name: 'Timeline',
	},
	{
		path: '/banks',
		element: <Banks />,
		name: 'Bank Card',
	},
	{
		path: '/contacts',
		element: <Contacts />,
		name: 'Contacts',
	},
];

export default router;
