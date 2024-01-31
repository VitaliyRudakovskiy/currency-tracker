import Loader from '@components/Loader';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Loader', () => {
	it('renders the DNA loader', () => {
		render(<Loader />);
		const loader = screen.getByLabelText('dna-loading');
		expect(loader).toBeInTheDocument();
	});
});
