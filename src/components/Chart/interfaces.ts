type HistoryEntry = [string, string | number, string | number, string | number, string | number];

export type CurrencyHistoryData = [...HistoryEntry][];

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

export interface IState {
	chartData: CurrencyHistoryData;
	isShown: boolean;
}

export type IProps = Record<string, never>;
