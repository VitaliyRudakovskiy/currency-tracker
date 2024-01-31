import styled from 'styled-components';

const RightContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: ${({ theme }) => theme.valueInPx.px10};
	color: ${({ theme }) => theme.mainTextColor};
`;

export default RightContainer;
