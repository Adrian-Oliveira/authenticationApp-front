describe('e2e', () => {

  it('Login', () => {

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
          bio:"bio",
          createdAt:"1743116094402"
        },
      }
    )


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

    cy.url().should('match', /profile/)

    
  })

  it('Profile',()=>{

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
          bio:"bio",
          createdAt:1743116094402
        },
      }
    )

    cy.visit(Cypress.env('frontEndUrl')+'/profile')

    cy.url().should('match', /profile/)

    cy.get('[data-test-id="profile-navbar"]').should('exist')
    
    cy.get('[data-test-id="profile-image"]').should('exist')

    cy.get('[data-test-id="profile-name"]')
    .should('exist')
    .and('contain.text',"name" ) 

    cy.get('[data-test-id="profile-bio"]')
    .should('exist')
    .and('contain.text',"bio" ) 
    
    cy.get('[data-test-id="profile-phone"]')
    .should('exist')
    .and('contain.text',"999999999999" ) 
    
    cy.get('[data-test-id="profile-email"]')
    .should('exist')
    .and('contain.text',"email@email.com" ) 
    
    cy.get('[data-test-id="profile-createAt"]')
    .should('exist')

    cy.get('[data-test-id="profile-edit-button"]')
    .should('exist')
    .click()

    cy.url().should('match', /edit/i)
  })

  it.only("Edit page", ()=>{

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
          bio:"bio",
          createdAt:1743116094402
        },
      }
    )
    
    cy.visit(Cypress.env('frontEndUrl')+'/editProfile')
    
/*     cy.wait(5000)
 */

    cy.get('[data-test-id="edit-name"]')
    .should('exist')
    .and('contain.value',"name" ) 

    cy.get('[data-test-id="edit-bio"]')
    .should('exist')
    .and('contain.text',"bio" ) 
    
    cy.get('[data-test-id="edit-phone"]')
    .should('exist')
    .and('contain.value',"999999999999" ) 
    
/*     cy.fixture('profileImage.jpg')
    .then((fileContent) => {
      cy.get('[data-test-id="edit-photo"]').selectFile(fileContent)
    }) */
  })

})