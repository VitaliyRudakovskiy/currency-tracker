import React from 'react';
import BigLogo from '@assets/big-logo.png';
import {
	WelcomeContainer,
	WelcomeTitle,
	WelcomeSubtitle,
	WelcomeText,
	TextSection,
} from './styled';
import { useSelector } from 'react-redux';
import { selectTheme } from '@store/reducers/themeSlice';

export default function Welcome(): JSX.Element {
	const theme = useSelector(selectTheme);

	return (
		<WelcomeContainer theme={theme}>
			<TextSection>
				<WelcomeSubtitle>
					Modsen Currency
					<WelcomeTitle>Tracker</WelcomeTitle>
				</WelcomeSubtitle>

				<WelcomeText theme={theme}>
					Quotes for the dollar and other international currencies.
				</WelcomeText>
			</TextSection>

			<img src={BigLogo} alt="Big Site Logo" width="170px" height="170px" />
		</WelcomeContainer>
	);
}
