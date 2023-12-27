import React from 'react';
import GlobalStyles, { Wrapper } from './GlobalStyles';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

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
