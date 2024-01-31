import styled from 'styled-components';

const TimelineWrapper = styled.section`
	display: flex;
	flex-direction: column;
	min-height: ${({ theme }) => theme.valueInPercent.vh100};
	background-color: ${({ theme }) => theme.primaryBackground};
`;

export default TimelineWrapper;
