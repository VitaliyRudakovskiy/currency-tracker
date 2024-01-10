import React from 'react';
import PulsatingCircle from '@components/UI-Kit/PulsatingCircle';
import CurrencyList from '@components/CurrencyList';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { HomeContainer, HomeWrapper } from './styled';

export default function Home() {
	return (
		<HomeWrapper data-cy="home-wrapper" data-testid="home-wrapper">
			<Header />
			<HomeContainer>
				<PulsatingCircle />
				<CurrencyList />
			</HomeContainer>
			<Footer />
		</HomeWrapper>
	);
}
