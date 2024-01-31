import ThemeToggler from '@components/UI-Kit/ThemeToggler';
import store from '@store/store';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

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
