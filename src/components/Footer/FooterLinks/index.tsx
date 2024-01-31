import React from 'react';

import FooterList from './FooterList';
import RightContainer from './styled';

export default function RightSection(): JSX.Element {
	return (
		<RightContainer>
			<FooterList title="General" values={['Market', 'Service']} path="/contacts" />
			<FooterList title="Product" values={['Sparks', 'Snaps']} path="/contacts" />
			<FooterList title="Community" values={['Ideas', 'Streams']} path="/contacts" />
		</RightContainer>
	);
}
