type HistoryEntry = [string, string | number, string | number, string | number, string | number];

export type CurrencyHistoryData = [...HistoryEntry][];

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

export interface IStateRedux {
	currency: ChartButtonsProps;
	dates: DatesProps;
}

export interface ChartButtonsProps {
	historyUSD: CurrencyHistoryData;
	historyEUR: CurrencyHistoryData;
}

export interface DatesProps {
	beginDate: string;
	endDate: string;
}

export type CommonProps = ChartButtonsProps & DatesProps;

export interface ChartButtonsState {
	isOpened: boolean;
	isErrorWithDates: boolean;
}
