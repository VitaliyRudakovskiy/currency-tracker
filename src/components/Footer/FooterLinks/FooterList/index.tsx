import React, { memo } from 'react';

import { FooterListProps } from './interfaces';
import { FooterLink, ListTitle, ListValue } from './styled';

function FooterList({ title, values, path }: FooterListProps) {
	return (
		<div>
			<ListTitle>{title}</ListTitle>
			{values.map((item) => (
				<FooterLink to={path} key={item} data-cy="footer-link">
					<ListValue>{item}</ListValue>
				</FooterLink>
			))}
		</div>
	);
}

export default memo(FooterList);
