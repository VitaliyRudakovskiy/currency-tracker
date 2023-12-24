import React from 'react';
import { ToggleContainer, Label, Input, Slider } from './styled';

export default function ThemeToggler() {
	return (
		<ToggleContainer>
			<Label>
				<Input type="checkbox" />
				<Slider />
			</Label>
		</ToggleContainer>
	);
}
