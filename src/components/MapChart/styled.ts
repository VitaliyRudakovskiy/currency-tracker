import styled from 'styled-components';

const MapContainer = styled.div`
	${({ theme }) => theme.flex.center};
	width: ${({ theme }) => theme.valueInPercent.wFull};
	padding: ${({ theme }) => theme.valueInRem.rem0_3};
	flex-direction: column;
`;

export default MapContainer;
