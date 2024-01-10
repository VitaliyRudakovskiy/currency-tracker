import {
	ChartObserver,
	ChartSubjectInterface,
	CurrencyHistoryData,
} from '@interfaces/interfaces';
import generateRandomHistory from '@utils/generateRandomHistory';

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
