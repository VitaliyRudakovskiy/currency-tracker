import inputSlice, { clearInputValue,setInputValue } from '@store/reducers/inputSlice';

describe('input slice', () => {
	it('should handle initial state', () => {
		expect(inputSlice(undefined, {})).toEqual({
			inputValue: '',
		});
	});

	it('should handle setInputValue', () => {
		const actual = inputSlice({ inputValue: '' }, setInputValue('test input'));
		expect(actual.inputValue).toEqual('test input');
	});

	it('should handle clearInputValue', () => {
		const actual = inputSlice({ inputValue: 'test input' }, clearInputValue());
		expect(actual.inputValue).toEqual('');
	});
});
