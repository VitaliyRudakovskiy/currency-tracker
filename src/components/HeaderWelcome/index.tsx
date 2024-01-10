import React from 'react';
import { useSelector } from 'react-redux';
import bigLogo from '@assets/big-logo.png';
import { selectTheme } from '@store/reducers/themeSlice';
import {
	WelcomeContainer,
	WelcomeTitle,
	WelcomeSubtitle,
	WelcomeText,
	TextSection,
	WelcomeImage,
} from './styled';

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

			<WelcomeImage src={bigLogo} alt="Big Site Logo" />
		</WelcomeContainer>
	);
}
