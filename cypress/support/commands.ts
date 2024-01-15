/// <reference types="cypress" />

Cypress.Commands.add('checkFooter', () => {
	cy.get('[data-cy=footer-link]').should('have.length', 6);
	cy.get('[data-cy=footer-link]').eq(1).click();
	cy.url().should('include', '/contacts');
	cy.visit('http://localhost:5000/timeline');
});
