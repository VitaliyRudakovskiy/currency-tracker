import {
	getPercent,
	getPx,
	getRem,
	getValue,
	getZIndex,
} from '@utils/themeHelper';
import styled from 'styled-components';

interface IProps {
	isShown: boolean;
}

const rem1 = getRem('rem1');
const rem07 = getRem('rem0_7');
const perc10 = getPercent('perc10');
const perc50 = getPercent('perc50');
const px5 = getPx('px5');
const px380 = getPx('px380');
const z100 = getZIndex('z100');
const chartButtonTextColor = getValue('chartButtonTextColor');
const chartButtonBackgroundColor = getValue('chartButtonBackgroundColor');

const NotificationContainer = styled.div<IProps>`
	position: fixed;
	top: ${(props) => (props.isShown ? '10px' : '-50px')};
	left: ${perc50};
	transform: translateX(-${perc50});
	background-color: ${chartButtonBackgroundColor};
	color: ${chartButtonTextColor};
	padding: ${rem1};
	border-radius: ${px5};
	transition:
		top 0.1s ease-out,
		opacity 0.5s ease-in-out;
	opacity: ${(props) => (props.isShown ? '1' : '0')};
	z-index: ${z100};

	@media (max-width: ${px380}) {
		left: ${perc10};
		transform: translateX(-5%);
		padding: ${rem07};
		text-align: center;
	}
`;

export default NotificationContainer;
