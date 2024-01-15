import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalItem from '@components/Modal/ModalItem';
import { activeCurrencyRedux } from '@store/reducers/currencySlice';
import { clearInputValue } from '@store/reducers/inputSlice';
import { toggleModal } from '@store/reducers/modalSlice';

import DropdownModal from './ModalDropdown';
import Input from './ModalInput';
import {
	CloseButton,
	InputActiveCode,
	InputContainer,
	ModalContainer,
	ModalName,
	ModalOverlay,
	ResultContainer,
} from './styled';

export default function ConvertingModal(): JSX.Element {
	const activeCurrency = useSelector(activeCurrencyRedux);

	const dispatch = useDispatch();

	const onCloseModal = () => {
		dispatch(toggleModal(false));
		dispatch(clearInputValue());
	};

	return ReactDOM.createPortal(
		<ModalOverlay>
			<ModalContainer data-cy="modal">
				<CloseButton onClick={onCloseModal} data-cy="close-modal">
					&times;
				</CloseButton>
				<ModalName>Converter</ModalName>

				<InputContainer>
					<Input />
					<InputActiveCode>{activeCurrency.code}</InputActiveCode>
				</InputContainer>

				<ResultContainer>
					<ModalItem />
					<DropdownModal />
				</ResultContainer>
			</ModalContainer>
		</ModalOverlay>,

		document.body
	);
}
