import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '@store/reducers/modalSlice';
import Input from '../UI-Kit/Input';
import DropdownModal from '../UI-Kit/Dropdown';
import CurrenciesListModal from '../CurrenciesListModal';
import { selectTheme } from '@store/reducers/themeSlice';
import {
	ModalContainer,
	ModalOverlay,
	CloseButton,
	ModalName,
	InputContainer,
} from './styled';

export default function ConvertingModal(): JSX.Element {
	const theme = useSelector(selectTheme);
	const dispatch = useDispatch();

	const onCloseModal = () => {
		dispatch(toggleModal(false));
		document.body.style.overflowY = 'auto';
	};

	return ReactDOM.createPortal(
		<ModalOverlay>
			<ModalContainer theme={theme}>
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
}
