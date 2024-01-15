import React from 'react';
import { useSelector } from 'react-redux';
import dateOptions from '@constants/dateOptions';
import { updateTimeSelector } from '@store/reducers/currencySlice';

import { PulseCircle, PulseContainer, UpdateString } from './styled';

export default function PulsatingCircle(): JSX.Element {
	const lastUpdate = useSelector(updateTimeSelector);
	const formattedDate = new Date(lastUpdate).toLocaleDateString(
		'en-US',
		dateOptions
	);

	return (
		<PulseContainer data-cy="pulsating-circle">
			<PulseCircle />
			<UpdateString>Last updated at {formattedDate}</UpdateString>
		</PulseContainer>
	);
}
