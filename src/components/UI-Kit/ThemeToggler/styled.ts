import { darkTheme, lightTheme, sliderColor } from '@constants/colors';
import styled from 'styled-components';

export const ToggleContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	width: 4rem;
`;

interface IThemeProps {
	theme: 'dark' | 'light';
}

export const Label = styled.label<IThemeProps>`
	position: absolute;
	width: 100%;
	height: 2rem;
	background-color: ${(props) =>
		props.theme === 'dark'
			? darkTheme.toggleBackground
			: lightTheme.toggleBackground};
	border-radius: 2rem;
	cursor: pointer;
`;

export const Slider = styled.span`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 2rem;
	transition: 0.3s;

	&::before {
		content: '';
		position: absolute;
		top: 0.3rem;
		left: 0.3rem;
		width: 1.4rem;
		height: 1.4rem;
		border-radius: 50%;
		box-shadow: inset 8px -3px 0px 0px yellow;
		transition: 0.3s;
	}
`;

export const Input = styled.input`
	position: absolute;
	display: none;

	&:checked ~ ${Slider}::before {
		transform: translateX(2rem);
		background-color: ${sliderColor};
		box-shadow: none;
	}
`;
