import React from 'react';
import { PulseCircle } from './styled';

export default function PulsatingCircle() {
	return (
		<>
			<PulseCircle />
			<p>Last time updated = {Date.now().toLocaleString()}</p>
		</>
	);
}
