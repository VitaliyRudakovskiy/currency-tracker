import React from 'react';
import { HomeContainer } from './styled';
import PulsatingCircle from '@components/UI-Kit/PulsatingCircle';
import CurrencyList from '@components/CurrencyList';

export default function Home() {
	return (
		<HomeContainer>
			<PulsatingCircle />
			<CurrencyList />
		</HomeContainer>
	);
}
