import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { toggleModal } from '@store/reducers/modalSlice';
import Input from '../UI-Kit/Input';
import {
	ModalContainer,
	ModalOverlay,
	CloseButton,
	ModalName,
	InputContainer,
} from './styled';
import DropdownModal from '../UI-Kit/Dropdown';
import CurrenciesListModal from '../CurrenciesListModal';

const ConvertingModal: React.FC = () => {
	const dispatch = useDispatch();

	const onCloseModal = () => {
		dispatch(toggleModal(false));
		document.body.style.overflowY = 'auto';
	};

	return ReactDOM.createPortal(
		<ModalOverlay>
			<ModalContainer>
				<CloseButton onClick={onCloseModal}>&times;</CloseButton>
				<ModalName>Converter</ModalName>

				<InputContainer>
					<Input />
					<DropdownModal />
				</InputContainer>

				<CurrenciesListModal />
			</ModalContainer>
		</ModalOverlay>,

		document.body
	);
};

export default ConvertingModal;
