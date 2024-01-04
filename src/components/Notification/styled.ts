import styled from 'styled-components';

interface IProps {
	show: boolean;
}

const NotificationContainer = styled.div<IProps>`
	position: fixed;
	top: ${(props) => (props.show ? '10px' : '-50px')};
	left: 50%;
	transform: translateX(-50%);
	background-color: #4caf50;
	color: #ffffff;
	padding: 1rem;
	border-radius: 5px;
	transition:
		top 0.1s ease-out,
		opacity 0.5s ease-in-out;
	opacity: ${(props) => (props.show ? '1' : '0')};
	z-index: 100;
`;

export default NotificationContainer;
