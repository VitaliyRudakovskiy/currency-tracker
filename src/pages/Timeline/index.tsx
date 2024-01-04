import React from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import ChartComponent from '@components/Chart';
import ChartDataProvider from '@providers/ChartDataProvider';
import ChartButtons from '@components/ChartButtons';

export default function Timeline(): JSX.Element {
	return (
		<ChartDataProvider>
			<Header />
			<ChartButtons />
			<ChartComponent />
			<Footer />
		</ChartDataProvider>
	);
}
