import generateRandomHistory from '@utils/generateRandomHistory';

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

export default ChartSubject;
