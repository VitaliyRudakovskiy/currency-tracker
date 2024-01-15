declare module '*.png';
declare module '*.svg';

declare namespace Cypress {
	interface Chainable<Subject> {
		checkFooter(): Chainable<any>;
	}
}
