import ModalItem from '@components/ModalItem';
import { darkTheme } from '@constants/colors';
import store from '@store/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

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
