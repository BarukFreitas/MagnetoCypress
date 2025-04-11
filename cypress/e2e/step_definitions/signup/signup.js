import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("estou na tela principal", () => {
    cy.visit('https://magento.softwaretestingboard.com/')
});

And("clico em criar uma nova conta", () => {
    cy.scrollTo('top');
    cy.clickCreateAccount();
});

And("preencho os campos com um email e senha válidos de uma conta existente", () => {
    cy.fixture('signupData').then((data) =>{
        const user = data.existingAccount;
        cy.typeFirstnameForm(user.firstname);
        cy.typeLastnameForm(user.lastname)
        cy.typeEmailForm(user.email);
        cy.typePasswordForm(user.password);
        cy.typeConfirmPasswordForm(user.password);
    })
});

And("preencho os campos com um email e senha inválidos", () => {
    cy.fixture('signupData').then((data) =>{
        const user = data.invalidAccount;
        cy.typeFirstnameForm(user.firstname);
        cy.typeLastnameForm(user.lastname)
        cy.typeEmailForm(user.email);
        cy.typePasswordForm(user.password);
        cy.typeConfirmPasswordForm(user.password);
    })
});

When("eu clico no botão de cadastrar", () => {
    cy.clickCreateAccountForm();
});

Then("recebo uma mensagem de erro, indicando que a conta já existe", () => {
    cy.verifyAccount()
});

Then("recebo uma mensagem de erro, indicando email e senha inválidos", () => {
    cy.emailError()
    cy.passwordError()
});