import React from 'react';
import LeftSection from '../FooterLeft';
import RightSection from '../FooterRight';
import { Copyright, FooterContainer, FooterInfo } from './styled';

export default function Footer(): JSX.Element {
	return (
		<FooterContainer data-cy="footer">
			<FooterInfo>
				<LeftSection />
				<RightSection />
			</FooterInfo>

			<Copyright>Startsup © 2023-2024, All Rights Reserved</Copyright>
		</FooterContainer>
	);
}
