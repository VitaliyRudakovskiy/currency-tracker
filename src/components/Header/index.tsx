import React from 'react';

import Welcome from './HeaderWelcome';
import Navbar from './Navbar';
import HeaderContainer from './styled';

export default function Header(): JSX.Element {
	return (
		<HeaderContainer>
			<Navbar />
			<Welcome />
		</HeaderContainer>
	);
}
