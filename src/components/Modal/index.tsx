import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '@store/reducers/inputSlice';
import { toggleModal } from '@store/reducers/modalSlice';
import { selectTheme } from '@store/reducers/themeSlice';
import Input from '../UI-Kit/Input';
import DropdownModal from '../UI-Kit/Dropdown';
import ModalList from '../ModalList';
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
		dispatch(setInputValue(''));
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

				<ModalList />
			</ModalContainer>
		</ModalOverlay>,

		document.body
	);
}
