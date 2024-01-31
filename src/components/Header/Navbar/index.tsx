import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '@assets/logo.png';
import router from '@router/index';

import { LogoContainer, Nav, NavItem, NavLink, NavList } from './styled';
import ThemeToggler from './ThemeToggler';

export default function Navbar(): JSX.Element {
	const location = useLocation();

	return (
		<Nav data-cy="navbar">
			<LogoContainer src={Logo} alt="site-logo" />

			<NavList>
				{router.map(({ path, name }) => (
					<NavLink key={path} to={path} className={location.pathname === path ? 'active' : ''}>
						<NavItem>{name}</NavItem>
					</NavLink>
				))}
			</NavList>

			<ThemeToggler />
		</Nav>
	);
}
