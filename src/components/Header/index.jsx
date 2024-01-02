import React from 'react';
import Navbar from '../Navbar';
import Welcome from '../HeaderWelcome';
import { HeaderContainer } from './styled';

export default function Header() {
	return (
		<HeaderContainer>
			<Navbar />
			<Welcome />
		</HeaderContainer>
	);
}
