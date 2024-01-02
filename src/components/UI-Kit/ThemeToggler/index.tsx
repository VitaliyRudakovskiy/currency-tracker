import React from 'react';
import { ToggleContainer, Label, Input, Slider } from './styled';
import { useSelector } from 'react-redux';
import { useTheme } from '@providers/ThemeProvider';
import { selectTheme } from '@store/reducers/themeSlice';

function ThemeToggler() {
	const theme = useSelector(selectTheme);
	const { toggleTheme } = useTheme();

	return (
		<ToggleContainer>
			<Label>
				<Input
					type="checkbox"
					checked={theme === 'light'}
					onChange={toggleTheme}
				/>
				<Slider />
			</Label>
		</ToggleContainer>
	);
}

export default ThemeToggler;
