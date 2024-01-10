describe('Timeline Page E2E Test', () => {
	it('should open timeline in browser', () => {
		cy.visit('http://localhost:5000/timeline');
	});

	beforeEach(() => {
		cy.wait(500);
		cy.visit('http://localhost:5000/timeline');
	});

	it('should display all the elements of Timeline Page', () => {
		cy.get('[data-cy=navbar]').should('be.visible');
		cy.get('[data-cy=header-welcome]').should('be.visible');
		cy.get('[data-cy=chart]').should('be.visible');
		cy.get('[data-cy=chart-buttons]').should('be.visible');
		cy.get('[data-cy=footer]').should('be.visible');
	});

	it('should open modal by clicking button "Change Value" and close it', () => {
		cy.contains('button', 'Change value').click();
		cy.get('[data-cy=chart-modal]').should('be.visible');
		cy.get('[data-cy=chart-modal-close]').click();
	});

	it('should show notification when the chart is build', () => {
		cy.contains('button', 'Change value').click();
		cy.get('[data-cy=chart-modal]').should('be.visible');
		cy.contains('button', 'Save').click();
		cy.wait(500);
		cy.get('[data-cy=notification]').should('be.visible');
	});

	it('should be able change theme', () => {
		cy.get('[data-cy=theme-toggler]').should('be.visible');
		cy.get('[data-cy=timeline-wrapper]').should('be.visible');
		cy.get('[data-cy=timeline-wrapper]').should(
			'have.css',
			'background-color',
			'rgb(4, 4, 4)'
		);
		cy.get('[data-cy=theme-toggler]').click();
		cy.get('[data-cy=timeline-wrapper]').should(
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
