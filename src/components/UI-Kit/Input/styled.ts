import styled from 'styled-components';

export const InputContainer = styled.input`
	background-color: #363636;
	color: #fff;
	padding: 8px;
	border: none;
	border-radius: 4px 0 0 4px;
	outline: none;
	width: 13rem;
	font-size: 1.05rem;
	text-align: right;

	&:hover,
	&:focus {
		box-shadow: 0 0 8px #00bcd480;
		border-color: #00bcd4;
	}
`;
