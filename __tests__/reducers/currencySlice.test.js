import currencySlice, {
	setExchangeRate,
	setUpdateTime,
	setCurrenciesToStore,
	setHistoryUSD,
	setHistoryEUR,
} from '@store/reducers/currencySlice';

describe('currency slice', () => {
	it('should handle initial state', () => {
		expect(currencySlice(undefined, {})).toEqual({
			exchangeRate: 0,
			updateTime: '',
			currencies: [],
			historyUSD: [['', '', '', '', '']],
			historyEUR: [['', '', '', '', '']],
		});
	});

	it('should handle setExchangeRate', () => {
		const actual = currencySlice(
			{ exchangeRate: 0 },
			setExchangeRate(1.241242)
		);
		expect(actual.exchangeRate).toEqual(1.241242);
	});

	it('should handle setUpdateTime', () => {
		const actual = currencySlice(
			{ updateTime: '' },
			setUpdateTime('2024-01-12, 23:59:59')
		);
		expect(actual.updateTime).toEqual('2024-01-12, 23:59:59');
	});

	it('should handle setCurrenciesToStore', () => {
		const actual = currencySlice(
			{ currencies: [] },
			setCurrenciesToStore([
				{ code: 'RUB', value: 91.241 },
				{ code: 'BYN', value: 3.03123 },
			])
		);
		expect(actual.currencies).toEqual([
			{ code: 'RUB', value: 91.241 },
			{ code: 'BYN', value: 3.03123 },
		]);
	});

	it('should handle setHistoryUSD', () => {
		const actual = currencySlice(
			{ historyUSD: [['', '', '', '', '']] },
			setHistoryUSD([
				[
					'2024-01-12',
					'91.234234',
					'92.127515732',
					'92.1576287356',
					'93.120492',
				],
			])
		);
		expect(actual.historyUSD).toEqual([
			['2024-01-12', '91.234234', '92.127515732', '92.1576287356', '93.120492'],
		]);
	});

	it('should handle setHistoryEUR', () => {
		const actual = currencySlice(
			{ historyEUR: [['', '', '', '', '']] },
			setHistoryEUR([
				[
					'2024-01-12',
					'91.234234',
					'92.127515732',
					'92.1576287356',
					'93.120492',
				],
			])
		);
		expect(actual.historyEUR).toEqual([
			['2024-01-12', '91.234234', '92.127515732', '92.1576287356', '93.120492'],
		]);
	});
});
