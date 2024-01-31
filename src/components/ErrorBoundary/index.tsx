import React, { Component } from 'react';
import errorImage from '@assets/page_not_found.png';

import { ErrorBoundaryProps, ErrorBoundaryState } from './interfaces';
import { ErrorBoundaryImage, ErrorBoundaryMessage, ErrorBoundaryWrapper } from './styled';

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
