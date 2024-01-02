import React from 'react';
import LeftSection from '../FooterLeft';
import RightSection from '../FooterRight';
import { Copyright, FooterContainer, FooterInfo } from './styled';

function Footer() {
	return (
		<FooterContainer>
			<FooterInfo>
				<LeftSection />
				<RightSection />
			</FooterInfo>

			<Copyright>Startsup © 2023-2024, All Rights Reserved</Copyright>
		</FooterContainer>
	);
}

export default Footer;
