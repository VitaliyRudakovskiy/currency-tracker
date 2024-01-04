import React, { Component, ReactNode, createContext, useContext } from 'react';
import { CurrencyHistoryData } from '@interfaces/interfaces';
import generateRandomHistory from '@utils/generateRandomHistory';

interface ChartObserver {
	update: (newData: CurrencyHistoryData) => void;
}

export interface ChartSubjectInterface {
	addObserver: (observer: ChartObserver) => void;
	removeObserver: (observer: ChartObserver) => void;
	notifyObservers: () => void;
	updateData: (newData: CurrencyHistoryData) => void;
	getData: () => CurrencyHistoryData;
}

class ChartSubject implements ChartSubjectInterface {
	private observers: ChartObserver[] = [];
	private chartData: CurrencyHistoryData = generateRandomHistory();

	addObserver(observer: ChartObserver) {
		this.observers.push(observer);
	}

	removeObserver(observer: ChartObserver) {
		this.observers = this.observers.filter((obs) => obs !== observer);
	}

	notifyObservers() {
		this.observers.forEach((observer) => {
			observer.update(this.chartData);
		});
	}

	updateData(newData: CurrencyHistoryData) {
		this.chartData = newData;
		this.notifyObservers();
	}

	getData() {
		return this.chartData;
	}
}

interface ChartDataContextProps {
	children: ReactNode;
}

interface ChartDataContextState {
	updateData: (newData: CurrencyHistoryData) => void;
	addObserver: (observer: ChartObserver) => void;
	removeObserver: (observer: ChartObserver) => void;
	notifyObservers: () => void;
	getData: () => CurrencyHistoryData;
}

const ChartDataContext = createContext<ChartDataContextState | undefined>(
	undefined
);

export const useChartDataContext = () => {
	const context = useContext(ChartDataContext);
	if (!context) {
		throw new Error(
			'useChartDataContext must be used within a ChartDataProvider'
		);
	}
	return context;
};

// export class ChartDataProvider extends Component<
// 	ChartDataContextProps,
// 	ChartDataContextState
// > {
// 	constructor(props: ChartDataContextProps) {
// 		super(props);
// 		this.state = {
// 			chartData: [['Day', '', '', '', '']],
// 			updateData: this.updateData.bind(this),
// 		};
// 	}

// 	updateData(newData: CurrencyHistoryData) {
// 		this.setState({ chartData: newData });
// 	}

// 	render() {
// 		const { children } = this.props;
// 		return (
// 			<ChartDataContext.Provider value={this.state}>
// 				{children}
// 			</ChartDataContext.Provider>
// 		);
// 	}
// }

const ChartDataProvider: React.FC<ChartDataContextProps> = ({ children }) => {
	const chartSubject = new ChartSubject();

	return (
		<ChartDataContext.Provider value={chartSubject}>
			{children}
		</ChartDataContext.Provider>
	);
};

export default ChartDataProvider;
