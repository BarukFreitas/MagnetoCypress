Cypress.Commands.add('clickCreateAccount', () =>{
    cy.get('.panel > .header > :nth-child(3) > a').click()
});

Cypress.Commands.add('typeFirstnameForm', (firstname) =>{
    cy.get('#firstname').type(firstname)
});

Cypress.Commands.add('typeLastnameForm', (lastname) =>{
    cy.get('#lastname').type(lastname)
});

Cypress.Commands.add('typeEmailForm', (email) =>{
    cy.get('#email_address').type(email)
});

Cypress.Commands.add('typePasswordForm', (password) =>{
    cy.get('#password').type(password)
});

Cypress.Commands.add('typeConfirmPasswordForm', (password) =>{
    cy.get('#password-confirmation').type(password)
});

Cypress.Commands.add('clickCreateAccountForm', () =>{
    cy.get('#form-validate > div > div.primary > button').click()
});

Cypress.Commands.add('verifyAccount', () => {
    cy.get('.message-error').should('be.visible')
    cy.get('.message-error > div').should('contain', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
})

Cypress.Commands.add('emailError', () => {
    cy.get('#email_address-error').should('be.visible')
    cy.get('#email_address-error').should('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).')
})

Cypress.Commands.add('passwordError', () => {
    cy.get('#password-error').should('be.visible')
    cy.get('#password-error').should('contain', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
})