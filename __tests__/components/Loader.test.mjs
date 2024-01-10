import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from '@components/Loader';

describe('Loader', () => {
	it('renders the DNA loader', () => {
		render(<Loader />);
		const loader = screen.getByLabelText('dna-loading');
		expect(loader).toBeInTheDocument();
	});
});
