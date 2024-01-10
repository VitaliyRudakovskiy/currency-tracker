import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ThemeToggler from '@components/UI-Kit/ThemeToggler';
import { Provider } from 'react-redux';
import store from '@store/store';
import * as ThemeProvider from '@providers/ThemeProvider';

describe('ThemeToggler', () => {
	it('should render a checkbox input', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<ThemeToggler />
			</Provider>
		);

		const checkbox = getByTestId('theme-toggler');

		expect(checkbox).toBeInstanceOf(HTMLInputElement);
		expect(checkbox.type).toBe('checkbox');
	});

	// it('should call toggleTheme when the checkbox is clicked', () => {
	// 	const toggleThemeMock = jest.spyOn(ThemeProvider, 'useTheme');
	// 	toggleThemeMock.mockReturnValue({
	// 		theme: 'dark',
	// 		toggleTheme: jest.fn(),
	// 	});

	// 	const { getByTestId } = render(
	// 		<Provider store={store}>
	// 			<ThemeProvider.ThemeProvider>
	// 				<ThemeToggler />
	// 			</ThemeProvider.ThemeProvider>
	// 		</Provider>
	// 	);

	// 	const checkbox = getByTestId('theme-toggler');

	// 	fireEvent.click(checkbox);

	// 	expect(toggleThemeMock).toHaveBeenCalled();
	// });
});
