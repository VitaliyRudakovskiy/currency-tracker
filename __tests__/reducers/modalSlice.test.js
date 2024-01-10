import modalSlice, { toggleModal } from '@store/reducers/modalSlice';

describe('modal slice', () => {
	it('should handle initial state', () => {
		expect(modalSlice(undefined, {})).toEqual({
			isOpened: false,
		});
	});

	it('should handle toggleModal', () => {
		const actual = modalSlice({ isOpened: false }, toggleModal(true));
		expect(actual.isOpened).toEqual(true);
	});
});
