describe('Banks Page E2E Test', () => {
	it('should open banks in browser', () => {
		cy.visit('http://localhost:5000/banks');
	});

	beforeEach(() => {
		cy.visit('http://localhost:5000/banks');
	});

	it('should display all the elements of Banks Page', () => {
		cy.get('[data-cy=navbar]').should('be.visible');
		cy.get('[data-cy=header-welcome]').should('be.visible');
		cy.get('[data-cy=banks-input]').should('be.visible');
		cy.get('[data-cy=map]').should('be.visible');
		cy.get('[data-cy=footer]').should('be.visible');
	});

	it('should correctly give tooltips', () => {
		cy.get('[data-cy=banks-input]').should('be.visible');
		cy.get('[data-cy=banks-input]').type('US');
		cy.get('[data-cy=banks-button]').should('have.length', 4);
	});

	it('should set to input the value of a button', () => {
		cy.get('[data-cy=banks-input]').type('US');
		cy.contains('button', 'USDT').click();
		cy.get('[data-cy=banks-button]').should('have.length', 1);
		cy.get('[data-cy=banks-input]').should('have.value', 'USDT');
	});

	it('should be able change theme', () => {
		cy.get('[data-cy=theme-toggler]').should('be.visible');
		cy.get('[data-cy=banks-wrapper]').should('be.visible');
		cy.get('[data-cy=banks-wrapper]').should(
			'have.css',
			'background-color',
			'rgb(4, 4, 4)'
		);
		cy.get('[data-cy=theme-toggler]').click();
		cy.get('[data-cy=banks-wrapper]').should(
			'have.css',
			'background-color',
			'rgb(244, 255, 244)'
		);
	});

	it('should render footer list and navigate to contacts by footer links clicks', () => {
		cy.get('[data-cy=footer-link]').should('have.length', 6);
		cy.get('[data-cy=footer-link]').eq(1).click();
		cy.url().should('include', '/contacts');
		cy.visit('http://localhost:5000/timeline');
	});
});
