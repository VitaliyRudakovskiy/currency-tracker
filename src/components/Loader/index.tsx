import React from 'react';

import { LoaderContainer, RingLoader, RingPart } from './styled';

export default function Loader(): JSX.Element {
	return (
		<LoaderContainer>
			<RingLoader>
				<RingPart />
				<RingPart />
				<RingPart />
				<RingPart />
			</RingLoader>
		</LoaderContainer>
	);
}
