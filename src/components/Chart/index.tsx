import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import Loader from '@components/Loader';
import Notification from '@components/Notification';
import chartOptions from '@constants/chartOptions';
import { ChartDataContext } from '@providers/ChartDataProvider';

import { ChartObserver, ChartSubjectInterface, CurrencyHistoryData, IProps, IState } from './interfaces';
import ChartContainer from './styled';

class ChartComponent extends Component<IProps, IState> {
	static contextType = ChartDataContext;

	context!: ChartSubjectInterface;

	observer!: ChartObserver;

	constructor(props: IProps) {
		super(props);
		this.state = {
			chartData: [],
			isShown: false,
		};
	}

	componentDidMount() {
		this.observer = {
			update: (newData: CurrencyHistoryData) => {
				this.setState({ chartData: newData });

				if (newData.length > 30) {
					this.setState({ isShown: true });
				}
			},
		};
		this.context.addObserver(this.observer);

		const initialData = this.context.getData();
		this.setState({ chartData: initialData });
	}

	componentWillUnmount() {
		this.context.removeObserver(this.observer);
	}

	hideNotification = () => {
		this.setState({ isShown: false });
	};

	render() {
		return (
			<ChartContainer data-cy="chart">
				<Chart
					chartType="CandlestickChart"
					data={this.state.chartData}
					options={{ ...chartOptions, backgroundColor: 'transparent' }}
					style={{
						width: '100vw',
						height: '70vh',
					}}
					loader={<Loader />}
				/>
				<Notification isShown={this.state.isShown} onHide={this.hideNotification} />
			</ChartContainer>
		);
	}
}

export default ChartComponent;
