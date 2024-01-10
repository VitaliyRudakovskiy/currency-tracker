import { render, screen } from '@testing-library/react';
import ErrorBoundary from '@components/ErrorBoundary';

const ComponentWithError = () => {
	throw new Error('TestError');
};

test('renders error message when child component throws an error', () => {
	render(
		<ErrorBoundary>
			<ComponentWithError />
		</ErrorBoundary>
	);

	expect(
		screen.getByText('Oops! It seems you have a mistake')
	).toBeInTheDocument();
	expect(screen.getByText('An error occurred')).toBeInTheDocument();
});
