import React from 'react';
import Navbar from './Navbar/Navbar';
import Welcome from './Welcome/Welcome';
import { HeaderContainer } from './styled';

export default function Header() {
	return (
		<HeaderContainer>
			<Navbar />
			<Welcome />
		</HeaderContainer>
	);
}
