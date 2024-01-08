import React, { Component } from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import ChartComponent from '@components/Chart';
import ChartDataProvider from '@providers/ChartDataProvider';
import ChartButtons from '@components/ChartButtons';
import TimelineWrapper from './styled';

class Timeline extends Component {
	render(): React.ReactNode {
		return (
			<TimelineWrapper>
				<ChartDataProvider>
					<Header />
					<ChartButtons />
					<ChartComponent />
					<Footer />
				</ChartDataProvider>
			</TimelineWrapper>
		);
	}
}

export default Timeline;
