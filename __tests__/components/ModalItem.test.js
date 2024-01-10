import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@store/store';
import ModalItem from '@components/ModalItem';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@constants/colors';

test('renders ModalItem', () => {
	const item = {
		code: 'USD',
		value: 1,
	};

	const { getByTestId } = render(
		<Provider store={store}>
			<ThemeProvider theme={darkTheme}>
				<ModalItem item={item} />
			</ThemeProvider>
		</Provider>
	);

	expect(getByTestId('modal-item')).toBeInTheDocument();
});
