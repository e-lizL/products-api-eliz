const productApiUrl = 'http://localhost:3000/';

describe('checks main features of site are displayed', () => {

  beforeEach(() => {
    cy.visit(productApiUrl)
  })

  it('should load the App main page', () => {

    // listing / product order
    cy.get('[data-test="choose-order-section"]').should('be.visible');
    cy.get('[data-test="choose-order-label"]').should('have.text', 'List products by:')
        
    // choose category
    cy.get('[data-test="choose-category-section"]').should('be.visible');
    cy.get('[data-test="choose-category-label"]').should('have.text', 'Choose a product by category:')
    cy.get('[data-test="category-button"]').click({force: true})

    // search
    cy.get('[data-test="search-section"]').should('be.visible');
    cy.get('[data-test="search-label"]').should('have.text', 'Search for a product:')
    cy.get('[data-test="search-button"]').click({force: true})

    // available products
    cy.get('[data-test="product-cards-section"]').should('be.visible');
    cy.get('[data-test="product-cards-title"]').should('have.text', 'Available products:')

  })

})

