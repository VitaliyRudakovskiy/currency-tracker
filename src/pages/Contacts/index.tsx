import React from 'react';
import pageNotFound from '@assets/page_not_found.png';
import Footer from '@components/Footer';
import Header from '@components/Header';

import { ContactsHeader, ContactsText, ContactsWrapper, MainContent } from './styled';

export default function Contacts(): JSX.Element {
	return (
		<ContactsWrapper data-cy="contacts-wrapper">
			<Header />
			<MainContent data-cy="contacts-info">
				<ContactsHeader>Page Under Construction</ContactsHeader>
				<ContactsText>Sorry, the page you are looking for is still under development</ContactsText>
				<img src={pageNotFound} alt="Page not found" width="200px" />
			</MainContent>
			<Footer />
		</ContactsWrapper>
	);
}
