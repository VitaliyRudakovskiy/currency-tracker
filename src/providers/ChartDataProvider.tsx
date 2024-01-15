import React, { createContext, PureComponent, ReactNode } from 'react';

import ChartSubject from './ChartSubject';

type HistoryEntry = [
	string,
	string | number,
	string | number,
	string | number,
	string | number,
];

type CurrencyHistoryData = [...HistoryEntry][];

interface ChartObserver {
	update: (newData: CurrencyHistoryData) => void;
}

interface ChartSubjectInterface {
	addObserver: (observer: ChartObserver) => void;
	removeObserver: (observer: ChartObserver) => void;
	notifyObservers: () => void;
	updateData: (newData: CurrencyHistoryData) => void;
	getData: () => CurrencyHistoryData;
}

interface ChartDataContextProps {
	children: ReactNode;
}

export const ChartDataContext = createContext<
	ChartSubjectInterface | undefined
>(undefined);

class ChartDataProvider extends PureComponent<ChartDataContextProps> {
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
