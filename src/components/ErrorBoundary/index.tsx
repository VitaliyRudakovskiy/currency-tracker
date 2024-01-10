import React, { Component, ReactNode } from 'react';
import errorImage from '@assets/page_not_found.png';
import {
	ErrorBoundaryMessage,
	ErrorBoundaryWrapper,
	ErrorBoundaryImage,
} from './styled';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
		};
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return {
			hasError: true,
			error,
		};
	}

	render() {
		const { hasError, error } = this.state;

		if (hasError) {
			return (
				<ErrorBoundaryWrapper>
					<ErrorBoundaryMessage>
						<h1>Oops! It seems you have a mistake</h1>
						<h2>An error occurred</h2>
						<p>{error && error.toString()}</p>
						<ErrorBoundaryImage src={errorImage} alt="error occured" />
					</ErrorBoundaryMessage>
				</ErrorBoundaryWrapper>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
