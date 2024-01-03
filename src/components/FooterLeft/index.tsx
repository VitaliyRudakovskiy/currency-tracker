import React from 'react';
import logo from '@assets/logo.png';
import { FooterText, FooterTitle, LogoSection } from './styled';

export default function LeftSection(): JSX.Element {
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
