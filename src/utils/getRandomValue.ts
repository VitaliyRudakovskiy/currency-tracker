const getRandomValue = (): [number, number, number, number] => {
	const smallestValue = Math.floor(Math.random() * 10);
	const largestValue = Math.floor(Math.random() * (100 - smallestValue)) + smallestValue;
	const randomValue1 = Math.floor(Math.random() * (largestValue - smallestValue - 1)) + smallestValue + 1;
	const randomValue2 = Math.floor(Math.random() * (largestValue - smallestValue - 1)) + smallestValue + 1;

	return [smallestValue, randomValue1, randomValue2, largestValue];
};

export default getRandomValue;
