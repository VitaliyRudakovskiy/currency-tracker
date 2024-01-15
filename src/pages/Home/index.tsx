import React from 'react';
import CurrencyList from '@components/CurrencyList';
import Footer from '@components/Footer';
import Header from '@components/Header';
import PulsatingCircle from '@components/PulsatingCircle';

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
