import { createSlice,PayloadAction } from '@reduxjs/toolkit';

interface ModalSlice {
	isOpened: boolean;
}

const initialState: ModalSlice = {
	isOpened: false,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		toggleModal: (state: ModalSlice, action: PayloadAction<boolean>) => {
			state.isOpened = action.payload;
		},
	},
});

export const { toggleModal } = modalSlice.actions;

export const selectModalOpened = (state: { modal: ModalSlice }): boolean =>
	state.modal.isOpened;

export default modalSlice.reducer;
