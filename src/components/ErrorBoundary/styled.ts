import { getFlex, getPercent, getPx } from '@utils/themeHelper';
import styled from 'styled-components';

const flexCenter = getFlex('center');
const px280 = getPx('px280');
const vh95 = getPercent('vh95');

export const ErrorBoundaryWrapper = styled.section`
	${flexCenter};
	text-align: center;
	height: ${vh95};
	color: black;
`;

export const ErrorBoundaryMessage = styled.div`
	${flexCenter};
	flex-direction: column;
`;

export const ErrorBoundaryImage = styled.img`
	width: ${px280};
`;
