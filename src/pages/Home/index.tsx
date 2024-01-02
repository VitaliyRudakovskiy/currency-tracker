import React from 'react';
import { HomeContainer } from './styled';
import PulsatingCircle from '@components/UI-Kit/PulsatingCircle';
import CurrencyList from '@components/CurrencyList';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<HomeContainer>
				<PulsatingCircle />
				<CurrencyList />
			</HomeContainer>
			<Footer />
		</>
	);
}
