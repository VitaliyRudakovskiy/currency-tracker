import banksSlice, {
	setBanksInputValue,
	setBanksWithCurrencies,
} from '@store/reducers/banksSlice';

describe('banks slice', () => {
	it('should handle initial state', () => {
		expect(banksSlice(undefined, {})).toEqual({
			banksInputValue: '',
			banksWithCurrencies: [],
		});
	});

	it('should handle setBanksInputValue', () => {
		const actual = banksSlice(
			{ banksInputValue: '', banksWithCurrencies: [] },
			setBanksInputValue('test input')
		);
		expect(actual.banksInputValue).toEqual('test input');
	});

	it('should handle setBanksWithCurrencies', () => {
		const newBanksWithCurrencies = [
			{ bankName: 'Alfa Test Bank', currencies: ['USD', 'EUR', 'RUB'] },
		];
		const actual = banksSlice(
			{ banksInputValue: '', banksWithCurrencies: [] },
			setBanksWithCurrencies(newBanksWithCurrencies)
		);
		expect(actual.banksWithCurrencies).toEqual(newBanksWithCurrencies);
	});
});
