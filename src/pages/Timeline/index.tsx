import React from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import ChartComponent from '@components/Chart';

export default function Timeline(): JSX.Element {
	return (
		<>
			<Header />
			<ChartComponent />
			<Footer />
		</>
	);
}
