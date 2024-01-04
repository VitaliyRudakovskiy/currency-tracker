import React from 'react';
import { DNA } from 'react-loader-spinner';

export default function Loader(): JSX.Element {
	return (
		<DNA visible={true} height="250" width="250" ariaLabel="dna-loading" />
	);
}
