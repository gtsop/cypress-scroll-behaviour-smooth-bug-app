describe('Bug', () => {

  it('should be able to find and click the link', () => {
    cy.visit('/')

    cy.get('a')
      .contains('test link')
      .click()
  })
})
