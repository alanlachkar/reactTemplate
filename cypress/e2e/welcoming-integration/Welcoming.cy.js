/// <reference types="cypress" />

describe('Welcoming flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check charset in the document', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  });

  it("Check tab's title", () => {
    cy.title().should('include', 'Query React App template');
  });

  it('Check what contain the page', () => {
    cy.get('[data-testid="template-select-value"]').should('be.visible');
    cy.get('[data-testid="template-select-value"]').contains('topNav');
  });

  it('Change select option and chack the value', () => {
    cy.get('select').select('Top fixed navigation');
    cy.get('[data-testid="template-select-value"]').contains('topFixedNav');
  });
});
