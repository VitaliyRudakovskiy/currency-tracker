import React from 'react';
import {
	WelcomeContainer,
	WelcomeTitle,
	WelcomeSubtitle,
	WelcomeText,
	TextSection,
} from './styled';
import BigLogo from '@assets/big-logo.png';

export default function Welcome() {
	return (
		<WelcomeContainer>
			<TextSection>
				<WelcomeSubtitle>
					Modsen Currency
					<WelcomeTitle>Tracker</WelcomeTitle>
				</WelcomeSubtitle>

				<WelcomeText>
					Quotes for the dollar and other international currencies.
				</WelcomeText>
			</TextSection>

			<img src={BigLogo} alt="Big Site Logo" width="170px" height="170px" />
		</WelcomeContainer>
	);
}
