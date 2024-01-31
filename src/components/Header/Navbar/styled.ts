import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	position: fixed;
	${({ theme }) => theme.flex.between};
	width: ${({ theme }) => theme.valueInPercent.wFull};
	z-index: ${({ theme }) => theme.zIndex.z2};
	background-color: ${({ theme }) => theme.navbarBackground};
	padding: ${({ theme }) => theme.valueInRem.rem0_3} ${({ theme }) => theme.valueInRem.rem3};

	@media (max-width: ${({ theme }) => theme.valueInPx.px768}) {
		padding: ${({ theme }) => theme.valueInRem.rem0_3} ${({ theme }) => theme.valueInRem.rem0_8};
	}
`;

export const LogoContainer = styled.img`
	width: ${({ theme }) => theme.valueInRem.rem2_5};

	@media (max-width: ${({ theme }) => theme.valueInPx.px768}) {
		width: ${({ theme }) => theme.valueInRem.rem1};
	}
`;

export const NavList = styled.ul`
	${({ theme }) => theme.flex.center};
	list-style: none;
	gap: ${({ theme }) => theme.valueInRem.rem3};

	@media (max-width: ${({ theme }) => theme.valueInPx.px768}) {
		gap: ${({ theme }) => theme.valueInRem.rem1};
	}

	@media (max-width: ${({ theme }) => theme.valueInPx.px528}) {
		gap: ${({ theme }) => theme.valueInRem.rem0};
	}
`;

export const NavItem = styled.li`
	padding: ${({ theme }) => theme.valueInRem.rem0_7};
	font-size: ${({ theme }) => theme.valueInRem.rem1};

	@media (max-width: ${({ theme }) => theme.valueInPx.px528}) {
		padding: ${({ theme }) => theme.valueInRem.rem0_4} ${({ theme }) => theme.valueInRem.rem0_3};
		font-size: ${({ theme }) => theme.valueInRem.rem0_6};
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.mainTextColor};
	transition: all 0.3s;

	&:hover {
		color: ${({ theme }) => theme.navItemHoverColor};
	}

	&:active {
		transform: translateY(2px);
		color: ${({ theme }) => theme.navItemClickColor};
	}

	&.active {
		color: ${({ theme }) => theme.navItemClickColor};
	}
`;
