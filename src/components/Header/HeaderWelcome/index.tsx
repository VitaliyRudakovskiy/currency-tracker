import React from 'react';
import bigLogo from '@assets/big-logo.png';

import {
	TextSection,
	WelcomeContainer,
	WelcomeImage,
	WelcomeSubtitle,
	WelcomeText,
	WelcomeTitle,
} from './styled';

export default function Welcome(): JSX.Element {
	return (
		<WelcomeContainer data-cy="header-welcome" data-testid="header-welcome">
			<TextSection>
				<WelcomeSubtitle>
					Modsen Currency
					<WelcomeTitle>Tracker</WelcomeTitle>
				</WelcomeSubtitle>

				<WelcomeText>
					Quotes for the dollar and other international currencies.
				</WelcomeText>
			</TextSection>

			<WelcomeImage src={bigLogo} alt="Big Site Logo" />
		</WelcomeContainer>
	);
}
