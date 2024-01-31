import getCurrenciesCodes from './getCurrenciesCodes';

const codes = getCurrenciesCodes();

function getFilteredValues(input: string): string[] {
	return codes.filter((code) => code.includes(input));
}

export default getFilteredValues;
