import React from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer, ModalOverlay } from './styled';

export default function ConvertingModal() {
	return ReactDOM.createPortal(
		<ModalOverlay>
			<ModalContainer>
				<h2>Test</h2>
			</ModalContainer>
		</ModalOverlay>,

		document.body
	);
}
