describe('Home Page E2E Test', () => {
	it('should open in browser', () => {
		cy.visit('http://localhost:5000');
	});

	beforeEach(() => {
		cy.visit('http://localhost:5000');
	});

	it('should display all the elements of Home Page', () => {
		cy.get('[data-cy=navbar]').should('be.visible');
		cy.get('[data-cy=header-welcome]').should('be.visible');
		cy.get('[data-cy=pulsating-circle]').should('be.visible');
		cy.get('[data-cy=currency-list]').should('be.visible');
		cy.get('[data-cy=footer]').should('be.visible');
	});

	it('should open and close modal on card click', () => {
		cy.get('[data-cy=card]').should('be.visible');
		cy.get('[data-cy=card]').eq(3).click();
		cy.get('[data-cy=modal]').should('be.visible');
		cy.get('[data-cy=close-modal]').click();
	});

	it('should be able to select a different dropdown value', () => {
		cy.get('[data-cy=card]').should('be.visible');
		cy.get('[data-cy=card]').eq(1).click();
		cy.get('[data-cy=dropdown-modal]').should('be.visible');
		cy.get('[data-cy=dropdown-modal]').select('RUB');
	});

	it('should be able to input value to input and to get 9 currency outputs', () => {
		cy.get('[data-cy=card]').should('be.visible');
		cy.get('[data-cy=card]').eq(1).click();
		cy.get('[data-cy=input-modal]').should('be.visible');
		cy.get('[data-cy=input-modal]').type('51264').should('have.value', 51264);
		cy.get('[data-cy=modal-item]').should('have.length', 1);
	});

	it('should be able change theme', () => {
		cy.get('[data-cy=theme-toggler]').should('be.visible');
		cy.get('[data-cy=home-wrapper]').should('be.visible');
		cy.get('[data-cy=home-wrapper]').should(
			'have.css',
			'background-color',
			'rgb(4, 4, 4)'
		);
		cy.get('[data-cy=theme-toggler]').click();
		cy.get('[data-cy=home-wrapper]').should(
			'have.css',
			'background-color',
			'rgb(244, 255, 244)'
		);
	});

	it('should render footer list and navigate to contacts by footer links clicks', () => {
		cy.get('[data-cy=footer-link]').should('have.length', 6);
		cy.get('[data-cy=footer-link]').eq(1).click();
		cy.url().should('include', '/contacts');
	});
});
