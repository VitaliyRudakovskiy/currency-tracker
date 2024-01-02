import React from 'react';
import { Nav, NavList, NavItem } from './styled';
import Logo from '@assets/logo.png';
import ThemeToggler from '@components/UI-Kit/ThemeToggler';

export default function Navbar() {
	return (
		<Nav>
			<img src={Logo} alt="site-logo" />

			<NavList>
				<NavItem>Home</NavItem>
				<NavItem>Timeline</NavItem>
				<NavItem>Bank Card</NavItem>
				<NavItem>Contacts</NavItem>
			</NavList>

			<ThemeToggler />
		</Nav>
	);
}
