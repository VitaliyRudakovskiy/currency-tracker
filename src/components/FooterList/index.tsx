import React, { memo } from 'react';
import { ListValue, ListTitle } from './styled';

interface FooterListProps {
	title: string;
	values: string[];
}

function FooterList({ title, values }: FooterListProps) {
	return (
		<div>
			<ListTitle>{title}</ListTitle>
			{values.map((item) => (
				<ListValue key={item}>{item}</ListValue>
			))}
		</div>
	);
}

export default memo(FooterList);
