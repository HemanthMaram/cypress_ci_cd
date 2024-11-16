describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.title()

    console.log('hi')
  })
})