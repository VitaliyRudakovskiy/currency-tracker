import styled from 'styled-components';

const ConvertedSumContainer = styled.div`
	${({ theme }) => theme.flex.center};
	font-size: ${({ theme }) => theme.valueInRem.rem1_2};
	font-weight: 600;
	color: ${({ theme }) => theme.mainTextColor};
`;

export default ConvertedSumContainer;
