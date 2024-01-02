import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '@store/reducers/themeSlice';
import { Nav, NavList, NavItem } from './styled';
import Logo from '@assets/logo.png';
import ThemeToggler from '../UI-Kit/ThemeToggler';

export default function Navbar(): JSX.Element {
	const theme = useSelector(selectTheme);

	return (
		<Nav theme={theme}>
			<img src={Logo} alt="site-logo" />

			<NavList theme={theme}>
				<NavItem>Home</NavItem>
				<NavItem>Timeline</NavItem>
				<NavItem>Bank Card</NavItem>
				<NavItem>Contacts</NavItem>
			</NavList>

			<ThemeToggler />
		</Nav>
	);
}
