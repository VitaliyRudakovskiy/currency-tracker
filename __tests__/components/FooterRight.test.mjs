import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import RightSection from '@components/FooterRight';
import { darkTheme } from '@constants/colors';

describe('RightSection', () => {
	it('renders the footer lists', () => {
		render(
			<ThemeProvider theme={darkTheme}>
				<RightSection />
			</ThemeProvider>
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
