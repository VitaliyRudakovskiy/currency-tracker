import React from 'react';
import { PulseCircle } from './styled';
import { useSelector } from 'react-redux';
import { updateTimeSelector } from '@store/reducers/currencySlice';
import { dateOptions } from '@constants/dateOptions';

export default function PulsatingCircle() {
	const lastUpdate = useSelector(updateTimeSelector);
	const formattedDate = new Date(lastUpdate).toLocaleDateString(
		'en-US',
		dateOptions
	);

	return (
		<>
			<PulseCircle />
			<p>Last updated at {formattedDate}</p>
		</>
	);
}
