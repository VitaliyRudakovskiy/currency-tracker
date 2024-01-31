import styled from 'styled-components';

export const ModalOverlay = styled.div`
	${({ theme }) => theme.flex.center};
	position: fixed;
	top: 0;
	left: 0;
	width: ${({ theme }) => theme.valueInPercent.wFull};
	height: ${({ theme }) => theme.valueInPercent.wFull};
	background: transparent;
	z-index: ${({ theme }) => theme.zIndex.z10};
`;

export const ModalContainer = styled.div`
	${({ theme }) => theme.flex.center};
	position: relative;
	background: ${({ theme }) => theme.modalBackground};
	border-radius: ${({ theme }) => theme.valueInPx.px8};
	padding: ${({ theme }) => theme.valueInRem.rem0_3} ${({ theme }) => theme.valueInRem.rem1_5} ${({ theme }) => theme.valueInRem.rem1_2};
	max-width: ${({ theme }) => theme.valueInRem.rem30};
	box-shadow: 0 0 ${({ theme }) => theme.valueInPx.px10} rgba(0, 0, 0, 0.2);
	flex-direction: column;

	@media (max-width: ${({ theme }) => theme.valueInPx.px380}) {
		padding: ${({ theme }) => theme.valueInRem.rem0_5};
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: ${({ theme }) => theme.valueInRem.rem0_2};
	right: ${({ theme }) => theme.valueInRem.rem0_8};
	font-size: ${({ theme }) => theme.valueInRem.rem3};
	background: none;
	border: none;
	color: red;
	cursor: pointer;

	@media (max-width: ${({ theme }) => theme.valueInPx.px380}) {
		top: ${({ theme }) => theme.valueInRem.rem0};
		right: ${({ theme }) => theme.valueInRem.rem0_8};
	}
`;

export const ModalName = styled.h3`
	text-align: center;
	font-size: ${({ theme }) => theme.valueInRem.rem2};
	margin-bottom: ${({ theme }) => theme.valueInRem.rem1};
	color: #acde1d;

	@media (max-width: ${({ theme }) => theme.valueInPx.px380}) {
		font-size: ${({ theme }) => theme.valueInRem.rem1_5};
	}
`;

export const InputContainer = styled.div`
	${({ theme }) => theme.flex.center};
	margin-bottom: ${({ theme }) => theme.valueInRem.rem1};
`;

export const InputActiveCode = styled.p`
	background-color: ${({ theme }) => theme.modalElementBackground};
	color: ${({ theme }) => theme.mainTextColor};
	padding: ${({ theme }) => theme.valueInRem.rem0_35} ${({ theme }) => theme.valueInRem.rem0_5};
	border-radius: 0 ${({ theme }) => theme.valueInPx.px4} ${({ theme }) => theme.valueInPx.px4} 0;
`;

export const ResultContainer = styled.div`
	${({ theme }) => theme.flex.center};
	gap: ${({ theme }) => theme.valueInRem.rem1};
`;
