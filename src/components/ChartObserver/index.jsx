class ChartObserver {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		const index = this.observers.indexOf(observer);
		if (index !== -1) {
			this.observers.splice(index, 1);
		}
	}

	notify() {
		this.observers.forEach((observer) => {
			observer.update();
		});
	}
}

const chartObserver = new ChartObserver();

export default chartObserver;
