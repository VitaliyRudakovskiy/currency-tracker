import React, { Component } from 'react';
import chartOptions from '@constants/chartOptions';
import { Chart } from 'react-google-charts';
import { ChartDataContext } from '@providers/ChartDataProvider';
import {
	ChartObserver,
	ChartSubjectInterface,
	CurrencyHistoryData,
} from '@interfaces/interfaces';
import Notification from '@components/Notification';
import Loader from '@components/Loader';
import ChartContainer from './styled';

interface IState {
	chartData: CurrencyHistoryData;
	showNotification: boolean;
}

type IProps = Record<string, never>;

class ChartComponent extends Component<IProps, IState> {
	static contextType = ChartDataContext;

	context!: ChartSubjectInterface;

	observer!: ChartObserver;

	constructor(props: IProps) {
		super(props);
		this.state = {
			chartData: [],
			showNotification: false,
		};
	}

	componentDidMount() {
		this.observer = {
			update: (newData: CurrencyHistoryData) => {
				this.setState({ chartData: newData });

				if (newData.length > 30) {
					this.setState({ showNotification: true });
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
		this.setState({ showNotification: false });
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
				<Notification
					show={this.state.showNotification}
					onHide={this.hideNotification}
				/>
			</ChartContainer>
		);
	}
}

export default ChartComponent;
