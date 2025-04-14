import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("estou na tela principal", () => {
    cy.visit('https://magento.softwaretestingboard.com/')
});

And("clico em logar", () => {
    cy.scrollTo('top');
    cy.wait(1000);
    cy.clickSignIn();
});

When("insiro os dados de login inválidos", () => {
    cy.fixture('signinData').then((data) =>{
        const user = data.invalidAccount;
        cy.typeEmailForm(user.email);
        cy.typePasswordForm(user.password);
    })
})

When("insiro os dados de login válidos", () => {
    cy.fixture('signinData').then((data) =>{
        const user = data.validAccount;
        cy.typeEmailForm(user.email);
        cy.typePasswordForm(user.password);
    })
})

When("insiro o email", () => {
    cy.fixture('signinData').then((data) =>{
        const user = data.validAccount;
        cy.typeEmailForm(user.email);
    })
})

When("insiro a senha", () => {
    cy.fixture('signinData').then((data) =>{
        const user = data.validAccount;
        cy.typeEmailForm(user.password);
    })
})

And("confirmo login", () => {
    cy.clickSignInForm();
})

Then("irei receber uma mensagem de erro, indicando falha no login", () => {
    cy.loginError();
})

Then("meu nome irá aparecer no header", () => {
    cy.loggedAccount();
})