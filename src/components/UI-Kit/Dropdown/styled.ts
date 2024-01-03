import styled from 'styled-components';

export const Dropdown = styled.select`
	background-color: #363636;
	color: #fff;
	padding: 8px;
	border: none;
	border-radius: 0 4px 4px 0;
	outline: none;
	width: 4.5rem;
	cursor: pointer;
	font-size: 1rem;

	&:hover {
		box-shadow: 0 0 8px rgba(0, 188, 212, 0.5);
		border-color: #00bcd4;
	}

	&::-ms-expand {
		display: none;
	}

	option {
		background-color: #363636;
		color: #fff;
	}
`;
