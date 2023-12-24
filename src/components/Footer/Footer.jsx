import React from 'react';
import { Copyright, FooterContainer, FooterInfo } from './styled';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';

export default function Footer() {
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
