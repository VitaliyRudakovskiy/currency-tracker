import RightSection from '@components/FooterRight';
import { darkTheme } from '@constants/colors';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

describe('RightSection', () => {
	it('renders the footer lists', () => {
		render(
			<Router>
				<ThemeProvider theme={darkTheme}>
					<RightSection />
				</ThemeProvider>
			</Router>
		);

		const generalTitle = screen.getByText('General');
		expect(generalTitle).toBeInTheDocument();
		expect(screen.getByText('Market')).toBeInTheDocument();
		expect(screen.getByText('Service')).toBeInTheDocument();

		const productTitle = screen.getByText('Product');
		expect(productTitle).toBeInTheDocument();
		expect(screen.getByText('Sparks')).toBeInTheDocument();
		expect(screen.getByText('Snaps')).toBeInTheDocument();

		const communityTitle = screen.getByText('Community');
		expect(communityTitle).toBeInTheDocument();
		expect(screen.getByText('Ideas')).toBeInTheDocument();
		expect(screen.getByText('Streams')).toBeInTheDocument();
	});
});
