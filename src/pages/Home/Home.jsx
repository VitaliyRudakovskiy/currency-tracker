import React from 'react';
import { HomeContainer } from './styled';
import CurrencyList from '../../components/CurrencyList/CurrencyList';
import PulsatingCircle from '../../components/UI-Kit/PulsatingCircle/PulsatingCircle';

export default function Home() {
	return (
		<HomeContainer>
			<PulsatingCircle />
			<CurrencyList />
		</HomeContainer>
	);
}
