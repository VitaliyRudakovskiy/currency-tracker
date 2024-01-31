import styled from 'styled-components';

import { IProps } from './types';

const NotificationContainer = styled.div<IProps>`
	position: fixed;
	top: ${(props) => (props.isShown ? '10px' : '-50px')};
	left: ${({ theme }) => theme.valueInPercent.perc50};
	transform: translateX(-${({ theme }) => theme.valueInPercent.perc50});
	background-color: ${({ theme }) => theme.chartButtonBackgroundColor};
	color: ${({ theme }) => theme.chartButtonTextColor};
	padding: ${({ theme }) => theme.valueInRem.rem1};
	border-radius: ${({ theme }) => theme.valueInPx.px5};
	transition:
		top 0.1s ease-out,
		opacity 0.5s ease-in-out;
	opacity: ${(props) => (props.isShown ? '1' : '0')};
	z-index: ${({ theme }) => theme.zIndex.z100};

	@media (max-width: ${({ theme }) => theme.valueInPx.px380}) {
		left: ${({ theme }) => theme.valueInPercent.perc10};
		transform: translateX(-5%);
		padding: ${({ theme }) => theme.valueInRem.rem0_7};
		text-align: center;
	}
`;

export default NotificationContainer;
