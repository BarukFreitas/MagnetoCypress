Cypress.Commands.add('clickSignIn', () =>{
    cy.get('.panel > .header > .authorization-link > a').click()
});

Cypress.Commands.add('typeEmailForm', (email) =>{
    cy.get('#email').type(email)
});

Cypress.Commands.add('typePasswordForm', (password) =>{
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
});

Cypress.Commands.add('clickSignInForm', () =>{
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
});

Cypress.Commands.add('loginError', () =>{
    cy.get('.message-error').should('be.visible')
    cy.get('.message-error > div').should('contain', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
});

Cypress.Commands.add('loggedAccount', () =>{
    cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')
    cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome, test account!')
});
