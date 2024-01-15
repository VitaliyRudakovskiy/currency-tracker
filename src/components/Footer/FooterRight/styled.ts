import { getPx, getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const px10 = getPx('px10');
const mainTextColor = getValue('mainTextColor');

const RightContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: ${px10};
	color: ${mainTextColor};
`;

export default RightContainer;
