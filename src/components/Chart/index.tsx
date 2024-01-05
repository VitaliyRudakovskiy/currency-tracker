import React, { Component } from 'react';
import chartOptions from '@constants/chartOptions';
import { Chart } from 'react-google-charts';
import {
	ChartDataContext,
	ChartSubjectInterface,
	ChartObserver,
} from '@providers/ChartDataProvider';
import { CurrencyHistoryData } from '@interfaces/interfaces';
import Notification from '@components/Notification';
import Loader from '@components/Loader';
import ChartContainer from './styled';

interface IState {
	chartData: CurrencyHistoryData;
	showNotification: boolean;
}

interface IProps {}

class ChartComponent extends Component<IProps, IState> {
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
		const { addObserver, getData } = this.context;

		this.observer = {
			update: (newData: CurrencyHistoryData) => {
				this.setState({ chartData: newData });

				if (newData.length > 30) {
					this.setState({ showNotification: true });
				}
			},
		};
		addObserver(this.observer);

		const initialData = getData();
		this.setState({ chartData: initialData });
	}

	componentWillUnmount() {
		const { removeObserver } = this.context;
		removeObserver(this.observer);
	}

	hideNotification = () => {
		this.setState({ showNotification: false });
	};

	render() {
		const { chartData, showNotification } = this.state;
		return (
			<ChartContainer>
				<Chart
					chartType="CandlestickChart"
					width="100%"
					height="400px"
					data={chartData}
					options={chartOptions}
					style={{ width: '100vw', height: '70vh' }}
					loader={<Loader />}
				/>
				<Notification show={showNotification} onHide={this.hideNotification} />
			</ChartContainer>
		);
	}
}

ChartComponent.contextType = ChartDataContext;

export default ChartComponent;
