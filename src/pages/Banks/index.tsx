import React, { Component } from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import BanksInput from '@components/BanksInput';
import MapChart from '@components/MapChart';
import BanksContainer from './styled';

class Banks extends Component {
	render(): React.ReactNode {
		return (
			<>
				<Header />
				<BanksContainer>
					<BanksInput />
					<MapChart />
				</BanksContainer>
				<Footer />
			</>
		);
	}
}

export default Banks;
