import React from 'react';
import { FooterText, FooterTitle, LogoSection } from './styled';
import logo from '@assets/logo.png';

export default function LeftSection() {
	return (
		<div>
			<LogoSection>
				<img src={logo} alt="site-logo" width="15px" />
				<FooterTitle>Modsen Currency Tracker</FooterTitle>
			</LogoSection>
			<FooterText>
				Since then, the company has grown organically to. Starsup is the
				world&apos;s largest trading platform, with $12 billion worth of
				currency trading and 500,000 tickets sold daily to tens of thousands of
				traders worldwide.
			</FooterText>
		</div>
	);
}
