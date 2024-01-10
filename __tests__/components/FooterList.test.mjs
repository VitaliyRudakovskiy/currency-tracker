import React from 'react';
import { render, screen } from '@testing-library/react';
import FooterList from '@components/FooterList';

describe('FooterList', () => {
	it('renders the FooterList correctly', () => {
		const title = 'Test Footer List Title';
		const values = ['Value 1', 'Value 2', 'Value 3', 'Value 4'];

		render(<FooterList title={title} values={values} />);

		const renderedTitle = screen.getByText(title);
		expect(renderedTitle).toBeInTheDocument();

		values.forEach((value) => {
			const listItem = screen.getByText(value);
			expect(listItem).toBeInTheDocument();
		});
	});
});
