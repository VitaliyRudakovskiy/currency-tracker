import {
	getFlex,
	getPercent,
	getPx,
	getRem,
	getValue,
} from '@utils/themeHelper';
import styled from 'styled-components';

const rem02 = getRem('rem0_2');
const rem03 = getRem('rem0_3');
const rem1and1 = getRem('rem1_1');
const rem1and3 = getRem('rem1_3');
const rem1and4 = getRem('rem1_4');
const rem1and5 = getRem('rem1_5');
const rem2 = getRem('rem2');
const rem3 = getRem('rem3');
const rem4 = getRem('rem4');
const px728 = getPx('px728');
const px768 = getPx('px768');
const fullScreen = getPercent('w-full');
const toggleBackground = getValue('toggleBackground');
const toggleSliderColor = getValue('toggleSliderColor');
const flexCenter = getFlex('center');

export const ToggleContainer = styled.div`
	position: relative;
	${flexCenter};
	width: ${rem4};
	height: ${rem2};

	@media (max-width: ${px728}) {
		width: ${rem3};
		height: ${rem1and5};
	}
`;

export const Label = styled.label`
	position: absolute;
	width: ${fullScreen};
	height: ${fullScreen};
	background-color: ${toggleBackground};
	border-radius: ${rem2};
	cursor: pointer;
`;

export const Slider = styled.span`
	position: absolute;
	width: ${fullScreen};
	height: ${fullScreen};
	border-radius: ${rem2};
	transition: 0.3s;

	&::before {
		content: '';
		position: absolute;
		top: ${rem03};
		left: ${rem03};
		width: ${rem1and4};
		height: ${rem1and4};
		border-radius: 50%;
		box-shadow: inset 8px -3px 0px 0px yellow;
		transition: 0.3s;
	}

	@media (max-width: ${px768}) {
		&::before {
			top: ${rem02};
			width: ${rem1and1};
			height: ${rem1and1};
		}
	}
`;

export const Input = styled.input`
	position: absolute;
	display: none;

	&:checked ~ ${Slider}::before {
		transform: translateX(${rem2});
		background-color: ${toggleSliderColor};
		box-shadow: none;
	}

	@media (max-width: ${px768}) {
		&:checked ~ ${Slider}::before {
			transform: translateX(${rem1and3});
		}
	}
`;
