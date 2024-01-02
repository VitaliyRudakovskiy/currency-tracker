import React from 'react';
import { useSelector } from 'react-redux';
import { updateTimeSelector } from '@store/reducers/currencySlice';
import { dateOptions } from '@constants/dateOptions';
import { PulseCircle, PulseContainer } from './styled';

export default function PulsatingCircle(): JSX.Element {
	const lastUpdate = useSelector(updateTimeSelector);
	const formattedDate = new Date(lastUpdate).toLocaleDateString(
		'en-US',
		dateOptions
	);

	return (
		<PulseContainer>
			<PulseCircle />
			<p>Last updated at {formattedDate}</p>
		</PulseContainer>
	);
}
