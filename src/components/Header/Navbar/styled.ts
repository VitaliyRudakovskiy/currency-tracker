import { Link } from 'react-router-dom';
import {
	getFlex,
	getPercent,
	getPx,
	getRem,
	getValue,
	getZIndex,
} from '@utils/themeHelper';
import styled from 'styled-components';

const rem0 = getRem('rem0');
const rem03 = getRem('rem0_3');
const rem04 = getRem('rem0_4');
const rem06 = getRem('rem0_6');
const rem07 = getRem('rem0_7');
const rem08 = getRem('rem0_8');
const rem1 = getRem('rem1');
const rem25 = getRem('rem2_5');
const rem3 = getRem('rem3');
const wFull = getPercent('w-full');
const z2 = getZIndex('z2');
const px528 = getPx('px528');
const px768 = getPx('px768');
const navBackground = getValue('navbarBackground');
const navItemHoverColor = getValue('navItemHoverColor');
const navItemClickColor = getValue('navItemClickColor');
const mainTextColor = getValue('mainTextColor');
const transition = getValue('defaultTransition');
const flexBetween = getFlex('between');
const flexCenter = getFlex('center');

export const Nav = styled.nav`
	position: fixed;
	${flexBetween};
	width: ${wFull};
	z-index: ${z2};
	background-color: ${navBackground};
	padding: ${rem03} ${rem3};

	@media (max-width: ${px768}) {
		padding: ${rem03} ${rem08};
	}
`;

export const LogoContainer = styled.img`
	width: ${rem25};

	@media (max-width: ${px768}) {
		width: ${rem1};
	}
`;

export const NavList = styled.ul`
	list-style: none;
	${flexCenter};
	gap: ${rem3};

	@media (max-width: ${px768}) {
		gap: ${rem1};
	}

	@media (max-width: ${px528}) {
		gap: ${rem0};
	}
`;

export const NavItem = styled.li`
	padding: ${rem07};
	font-size: ${rem1};

	@media (max-width: ${px528}) {
		padding: ${rem04} ${rem03};
		font-size: ${rem06};
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	${transition};
	color: ${mainTextColor};

	&:hover {
		color: ${navItemHoverColor};
	}

	&:active {
		transform: translateY(2px);
		color: ${navItemClickColor};
	}

	&.active {
		color: ${navItemClickColor};
	}
`;
