describe('Login Page', () => {
  it('passes', () => {
    cy.visit(Cypress.env('frontEndUrl')+'/login')
    cy.get('[data-test-id="login-mail"]').type('email@email.com')
    cy.get('[data-test-id="login-password"]').type('weakPassword')
    cy.get('[data-test-id="login-totp"]').type('123456')
  })
})