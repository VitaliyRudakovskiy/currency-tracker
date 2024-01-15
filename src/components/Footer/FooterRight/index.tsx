import React from 'react';

import FooterList from './FooterList';
import RightContainer from './styled';

export default function RightSection(): JSX.Element {
	return (
		<RightContainer>
			<FooterList title="General" values={['Market', 'Service']} />
			<FooterList title="Product" values={['Sparks', 'Snaps']} />
			<FooterList title="Community" values={['Ideas', 'Streams']} />
		</RightContainer>
	);
}
