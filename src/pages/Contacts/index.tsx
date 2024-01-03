import React from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { MainContent } from './styled';

export default function Contacts(): JSX.Element {
	return (
		<>
			<Header />
			<MainContent>I am contacts</MainContent>
			<Footer />
		</>
	);
}
