import React from 'react';
import propTypes from 'prop-types';
import nextId from 'react-id-generator';
import { ListValue, ListTitle } from './styled';

export default function FooterList({ title, values }) {
	return (
		<div>
			<ListTitle>{title}</ListTitle>
			{values.map((item) => (
				<ListValue key={nextId()}>{item}</ListValue>
			))}
		</div>
	);
}

FooterList.propTypes = {
	title: propTypes.string.isRequired,
	values: propTypes.arrayOf(propTypes.string).isRequired,
};
