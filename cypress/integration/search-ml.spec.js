context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.mercadolibre.com.uy/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    cy.searchBy('autos')
    cy.get('.breadcrumb__title').should('contain', 'autos')
    cy.getCarName()
    cy.getCarLinks()
    
  })
})
  