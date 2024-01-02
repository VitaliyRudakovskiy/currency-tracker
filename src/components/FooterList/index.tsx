import React from 'react';
import { ListValue, ListTitle } from './styled';

interface FooterListProps {
	title: string;
	values: string[];
}

const FooterList: React.FC<FooterListProps> = React.memo(
	({ title, values }) => {
		return (
			<div>
				<ListTitle>{title}</ListTitle>
				{values.map((item) => (
					<ListValue key={item}>{item}</ListValue>
				))}
			</div>
		);
	}
);

export default FooterList;
