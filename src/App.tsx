import React from 'react';
import GlobalStyles, { Wrapper } from './GlobalStyles';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Home from '@pages/Home';

export default function App() {
	return (
		<Wrapper>
			<GlobalStyles />
			<Header />
			<Home />
			<Footer />
		</Wrapper>
	);
}
