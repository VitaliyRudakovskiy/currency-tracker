import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import ErrorBoundary from '@components/ErrorBoundary';
import store from '@store/store';

import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<ErrorBoundary>
		<Provider store={store}>
			<App />
		</Provider>
	</ErrorBoundary>
);
