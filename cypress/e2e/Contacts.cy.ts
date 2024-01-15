describe('Contacts Page E2E Test', () => {
	it('should open in browser', () => {
		cy.visit('http://localhost:5000/contacts');
	});

	beforeEach(() => {
		cy.visit('http://localhost:5000/contacts');
	});

	it('should display all the elements of Contacts Page', () => {
		cy.get('[data-cy=navbar]').should('be.visible');
		cy.get('[data-cy=header-welcome]').should('be.visible');
		cy.get('[data-cy=contacts-info]').should('be.visible');
		cy.get('[data-cy=footer]').should('be.visible');
	});

	it('should be able change theme', () => {
		cy.get('[data-cy=theme-toggler]').should('be.visible');
		cy.get('[data-cy=contacts-wrapper]').should('be.visible');
		cy.get('[data-cy=contacts-wrapper]').should(
			'have.css',
			'background-color',
			'rgb(4, 4, 4)'
		);
		cy.get('[data-cy=theme-toggler]').click();
		cy.get('[data-cy=contacts-wrapper]').should(
			'have.css',
			'background-color',
			'rgb(244, 255, 244)'
		);
	});

	it('should render footer list and navigate to contacts by footer links clicks', () => {
		cy.checkFooter();
	});
});
