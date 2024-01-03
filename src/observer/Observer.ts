interface IObserver {
	notify(message: string): void;
}

class Observer implements IObserver {
	constructor(private name: string) {}

	notify(message: string): void {
		console.warn(`"Сообщение: ${message}" было отправлено ${this.name}.`);
	}
}

export default Observer;
