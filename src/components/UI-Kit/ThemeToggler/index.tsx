import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@providers/ThemeProvider';
import { selectTheme } from '@store/reducers/themeSlice';
import { ToggleContainer, Label, Input, Slider } from './styled';

export default function ThemeToggler(): JSX.Element {
	const theme = useSelector(selectTheme);
	const { toggleTheme } = useTheme();

	return (
		<ToggleContainer data-cy="theme-toggler">
			<Label theme={theme}>
				<Input
					data-testid="theme-toggler"
					type="checkbox"
					checked={theme === 'light'}
					onChange={toggleTheme}
				/>
				<Slider />
			</Label>
		</ToggleContainer>
	);
}
