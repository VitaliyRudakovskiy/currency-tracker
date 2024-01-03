import styled from 'styled-components';

export const NotificationWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: green;
	color: black;
	padding: 10px;
	text-align: center;
	font-size: 10px;
	transition: transform 0.3s ease-in-out;
	transform: translateY(${(props) => (props.show ? '0' : '-100%')});
	z-index: 999;
`;
