import getCurrenciesCodes from '@utils/getCurrenciesCodes';
import React, { ChangeEvent, useState } from 'react';

export default function BanksInput() {
	const [input, setInput] = useState('');
	const codes = getCurrenciesCodes();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value.toUpperCase());
	};

	const filteredValues = codes.filter((code) => code.includes(input));

	return (
		<div>
			<input type="text" value={input} onChange={handleChange} />
			{filteredValues.map((value) => (
				<button onClick={() => setInput(value)}>{value}</button>
			))}
		</div>
	);
}
