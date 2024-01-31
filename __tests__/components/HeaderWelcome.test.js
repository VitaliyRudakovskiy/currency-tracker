import HeaderWelcome from '@components/HeaderWelcome';
import store from '@store/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

test('renders Welcome component', () => {
	const { getByText, getByTestId } = render(
		<Provider store={store}>
			<HeaderWelcome />
		</Provider>
	);

	expect(getByTestId('header-welcome')).toBeInTheDocument();

	expect(getByText('Modsen Currency')).toBeInTheDocument();
	expect(getByText('Tracker')).toBeInTheDocument();
	expect(getByText('Quotes for the dollar and other international currencies.')).toBeInTheDocument();
});
