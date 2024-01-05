import React, { Component, ReactNode, createContext } from 'react';
import { CurrencyHistoryData } from '@interfaces/interfaces';
import generateRandomHistory from '@utils/generateRandomHistory';

export interface ChartObserver {
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

export const ChartDataContext = createContext<
	ChartSubjectInterface | undefined
>(undefined);

class ChartDataProvider extends Component<ChartDataContextProps> {
	chartSubject = new ChartSubject();

	render() {
		return (
			<ChartDataContext.Provider value={this.chartSubject}>
				{this.props.children}
			</ChartDataContext.Provider>
		);
	}
}

export default ChartDataProvider;
