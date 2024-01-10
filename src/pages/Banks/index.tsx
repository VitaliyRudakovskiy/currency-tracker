import React, { Component } from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import BanksInput from '@components/BanksInput';
import MapChart from '@components/MapChart';
import { BanksWrapper, BanksContainer } from './styled';

class Banks extends Component {
	render(): React.ReactNode {
		return (
			<BanksWrapper data-cy="banks-wrapper">
				<Header />
				<BanksContainer>
					<BanksInput />
					<MapChart />
				</BanksContainer>
				<Footer />
			</BanksWrapper>
		);
	}
}

export default Banks;
