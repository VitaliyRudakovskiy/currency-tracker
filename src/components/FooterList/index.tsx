import React, { memo } from 'react';
import { ListValue, ListTitle, FooterLink } from './styled';

interface FooterListProps {
	title: string;
	values: string[];
}

function FooterList({ title, values }: FooterListProps) {
	return (
		<div>
			<ListTitle>{title}</ListTitle>
			{values.map((item) => (
				<FooterLink to="/contacts" key={item} data-cy="footer-link">
					<ListValue>{item}</ListValue>
				</FooterLink>
			))}
		</div>
	);
}

export default memo(FooterList);
