describe('Login Page', () => {
  beforeEach(()=>{
    cy.intercept(
      'POST',
      `${Cypress.env('backEndUrl')}/user/login`,
      {
        statusCode: 200,
        body: {
          message: "Success login"
        },
      }
    )
    cy.intercept(
      'GET',
      `${Cypress.env('backEndUrl')}/user/logged`,
      {
        statusCode: 200,
      }
    )

    cy.intercept(
      'GET',
      `${Cypress.env('backEndUrl')}/user/profile`,
      {
        statusCode: 200,
        body: {
          name:"name",
          email:"email@email.com",
          phone:"999999999999",
          bio:"lorem asdfaaaaaaaaaaaaaaaaaaaaa",
          createdAt:"1743116094402"
        },
      }
    )
  })

  it('passes', () => {
    cy.visit(Cypress.env('frontEndUrl')+'/login')
    
    //check if it has a email input
    //type a email in the input
    cy.get('[data-test-id="login-mail"]').should('exist')
    cy.get('[data-test-id="login-mail"]').type('email@email.com').should('have.value','email@email.com')

    //check if it has a password input
    //type a password in the input
    cy.get('[data-test-id="login-password"]').should('exist')
    cy.get('[data-test-id="login-password"]').type('weakPassword').should('have.value', 'weakPassword')
    
    //check if it has a totp input
    //type a totp in the input
    cy.get('[data-test-id="login-totp"]').should('exist')
    cy.get('[data-test-id="login-totp"]').type('123456').should('have.value', '123456')

    //submit the login 
    cy.get('[data-test-id="login-button"]').should('exist')
    cy.get('[data-test-id="login-button"]').click()

    // check for loading element
    cy.get('[data-test-id="loading-element"]').should('exist').should('be.visible')


    //check for success message
     cy.get('html').contains(/success/i) 

    
    // In the profile page


    // check url
    cy.url().should('match', /profile/)

    // check nav bar
    cy.get('[data-test-id="profile-navbar"]').should('exist')
    
    //check if it has a image component and the right value 
    cy.get('[data-test-id="profile-image"]').should('exist')
    /* .should('have.value', '123456') */

    //check if it has a image component and the right value 
    cy.get('[data-test-id="profile-name"]').should('exist')
    
    //check if it has a image component and the right value 
    cy.get('[data-test-id="profile-bio"]').should('exist')
    
    //check if it has a image component and the right value 
    cy.get('[data-test-id="profile-phone"]').should('exist')
    
    //check if it has a image component and the right value 
    cy.get('[data-test-id="profile-email"]').should('exist')
    
    //check if it has a image component and the right value 
    cy.get('[data-test-id="profile-createAt"]').should('exist')
    
  })
})