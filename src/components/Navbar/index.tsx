import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectTheme } from '@store/reducers/themeSlice';
import Logo from '@assets/logo.png';
import ThemeToggler from '../UI-Kit/ThemeToggler';
import { Nav, NavList, NavItem, NavLink, LogoContainer } from './styled';

export default function Navbar(): JSX.Element {
	const theme = useSelector(selectTheme);
	const location = useLocation();

	return (
		<Nav theme={theme}>
			<LogoContainer src={Logo} alt="site-logo" />

			<NavList theme={theme}>
				<NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
					<NavItem>Home</NavItem>
				</NavLink>
				<NavLink
					to="/timeline"
					className={location.pathname === '/timeline' ? 'active' : ''}
				>
					<NavItem>Timeline</NavItem>
				</NavLink>
				<NavLink
					to="/banks"
					className={location.pathname === '/banks' ? 'active' : ''}
				>
					<NavItem>Bank Card</NavItem>
				</NavLink>
				<NavLink
					to="/contacts"
					className={location.pathname === '/contacts' ? 'active' : ''}
				>
					<NavItem>Contacts</NavItem>
				</NavLink>
			</NavList>

			<ThemeToggler />
		</Nav>
	);
}
