import FooterList from '@components/FooterList';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('FooterList', () => {
	it('renders the FooterList correctly', () => {
		const title = 'Test Footer List Title';
		const values = ['Value 1', 'Value 2', 'Value 3', 'Value 4'];

		render(
			<Router>
				<FooterList title={title} values={values} />
			</Router>
		);

		const renderedTitle = screen.getByText(title);
		expect(renderedTitle).toBeInTheDocument();

		values.forEach((value) => {
			const listItem = screen.getByText(value);
			expect(listItem).toBeInTheDocument();
		});
	});
});
