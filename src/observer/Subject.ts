import { CurrencyHistoryData } from '@interfaces/interfaces';
import Observer from './Observer';

interface ISubject {
	observers: Observer[];
	chartData: CurrencyHistoryData;
	addObserver(observer: Observer): void;
	deleteObserver(observer: Observer): void;
	notifyObservers(message: string): void;
}

class Subject implements ISubject {
	public observers: Observer[] = [];
	public chartData: CurrencyHistoryData = [];

	public addObserver(observer: Observer): void {
		this.observers.push(observer);
	}

	public deleteObserver(observer: Observer): void {
		const n: number = this.observers.indexOf(observer);
		n != -1 && this.observers.splice(n, 1);
	}

	public notifyObservers(message: string): void {
		this.observers.forEach((observer) => observer.notify(message));
	}
}

export default Subject;
