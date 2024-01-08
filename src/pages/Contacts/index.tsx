import React from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { MainContent, ContactsWrapper } from './styled';

export default function Contacts(): JSX.Element {
	return (
		<ContactsWrapper>
			<Header />
			<MainContent>I am contacts</MainContent>
			<Footer />
		</ContactsWrapper>
	);
}
