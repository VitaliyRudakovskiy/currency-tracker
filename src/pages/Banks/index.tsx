import React from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import BanksInput from '@components/BanksInput';
// import MapChart from '@components/MapChart';

export default function Banks(): JSX.Element {
	return (
		<>
			<Header />
			<p>I am banks</p>
			<BanksInput />
			{/* <MapChart /> */}
			<Footer />
		</>
	);
}
