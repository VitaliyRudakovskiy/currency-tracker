import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '@store/store';
import ThemeToggler from '@components/UI-Kit/ThemeToggler';

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
});
