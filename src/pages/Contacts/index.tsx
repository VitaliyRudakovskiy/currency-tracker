import React from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import pageNotFound from '@assets/page_not_found.png';
import {
	MainContent,
	ContactsWrapper,
	ContactsHeader,
	ContactsText,
} from './styled';

export default function Contacts(): JSX.Element {
	return (
		<ContactsWrapper>
			<Header />
			<MainContent>
				<ContactsHeader>Page Under Construction</ContactsHeader>
				<ContactsText>
					Sorry, the page you are looking for is still under development
				</ContactsText>
				<img src={pageNotFound} alt="Page not found" width="200px" />
			</MainContent>
			<Footer />
		</ContactsWrapper>
	);
}
