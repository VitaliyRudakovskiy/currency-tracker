import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '@store/reducers/inputSlice';
import { toggleModal } from '@store/reducers/modalSlice';
import { selectTheme } from '@store/reducers/themeSlice';
import { activeCurrencyRedux } from '@store/reducers/currencySlice';
import ModalItem from '@components/ModalItem';
import Input from '../UI-Kit/Input';
import DropdownModal from '../UI-Kit/Dropdown';
import {
	ModalContainer,
	ModalOverlay,
	CloseButton,
	ModalName,
	InputContainer,
	InputActiveCode,
	ResultContainer,
} from './styled';

export default function ConvertingModal(): JSX.Element {
	const theme = useSelector(selectTheme);
	const activeCurrency = useSelector(activeCurrencyRedux);

	const dispatch = useDispatch();

	const onCloseModal = () => {
		dispatch(toggleModal(false));
		dispatch(setInputValue(''));
		document.body.style.overflowY = 'auto';
	};

	return ReactDOM.createPortal(
		<ModalOverlay>
			<ModalContainer theme={theme} data-cy="modal">
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
