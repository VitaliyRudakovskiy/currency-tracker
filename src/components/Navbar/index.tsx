import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '@store/reducers/themeSlice';
import { Nav, NavList, NavItem, NavLink } from './styled';
import Logo from '@assets/logo.png';
import ThemeToggler from '../UI-Kit/ThemeToggler';

export default function Navbar(): JSX.Element {
	const theme = useSelector(selectTheme);

	return (
		<Nav theme={theme}>
			<img src={Logo} alt="site-logo" />

			<NavList theme={theme}>
				<NavLink to="/">
					<NavItem>Home</NavItem>
				</NavLink>
				<NavLink to="/timeline">
					<NavItem>Timeline</NavItem>
				</NavLink>
				<NavLink to="/banks">
					<NavItem>Bank Card</NavItem>
				</NavLink>
				<NavLink to="/contacts">
					<NavItem>Contacts</NavItem>
				</NavLink>
			</NavList>

			<ThemeToggler />
		</Nav>
	);
}
