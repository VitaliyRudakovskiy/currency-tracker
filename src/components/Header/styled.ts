import { getValue } from '@utils/themeHelper';
import styled from 'styled-components';

const vw100 = getValue('vw100');

const HeaderContainer = styled.header`
	width: ${vw100};
`;

export default HeaderContainer;
