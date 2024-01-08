import { banks } from '@constants/banks';
import { IBank } from '@interfaces/interfaces';

interface IBankWithCurrency extends IBank {
	currencies: string[];
}

function bindCurrenciesToBanks(
	codes: string[],
	countOfCurrencies: number
): IBankWithCurrency[] {
	return banks.map((bank) => {
		const currencies = [];
		for (let i = 0; i < countOfCurrencies; i += 1) {
			const randomIndex = Math.floor(Math.random() * codes.length);
			currencies.push(codes[randomIndex]);
		}
		return {
			...bank,
			currencies,
		};
	});
}

export default bindCurrenciesToBanks;
