import React, { Component } from 'react';
import Chart from '@components/Chart';
import ChartButtons from '@components/ChartButtons';
import Footer from '@components/Footer';
import Header from '@components/Header';
import ChartDataProvider from '@providers/ChartDataProvider';

import TimelineWrapper from './styled';

class Timeline extends Component {
	render(): React.ReactNode {
		return (
			<TimelineWrapper data-cy="timeline-wrapper">
				<ChartDataProvider>
					<Header />
					<ChartButtons />
					<Chart />
					<Footer />
				</ChartDataProvider>
			</TimelineWrapper>
		);
	}
}

export default Timeline;
