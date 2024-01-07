import React, { Component } from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import ChartComponent from '@components/Chart';
import ChartDataProvider from '@providers/ChartDataProvider';
import ChartButtons from '@components/ChartButtons';
import TimelineContainer from './styled';

class Timeline extends Component {
	render(): React.ReactNode {
		return (
			<TimelineContainer>
				<ChartDataProvider>
					<Header />
					<ChartButtons />
					<ChartComponent />
					<Footer />
				</ChartDataProvider>
			</TimelineContainer>
		);
	}
}

export default Timeline;
