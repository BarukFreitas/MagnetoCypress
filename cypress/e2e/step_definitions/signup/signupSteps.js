import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { faker } from '@faker-js/faker';

Given("estou na tela principal", () => {
    cy.visit('https://magento.softwaretestingboard.com/')
});

And("clico em criar uma nova conta", () => {
    cy.scrollTo('top');
    cy.wait(1000);
    cy.clickCreateAccount();
});

And("preencho os campos com nome válido", () =>{
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    cy.typeFirstnameForm(firstname);
    cy.typeLastnameForm(lastname);
})

And("preencho os campos com um email válido", () =>{
    const email = faker.internet.email().toLowerCase();
    cy.typeEmailForm(email);
})

And("preencho os campos com uma senha válida", () =>{
    const password = faker.internet.password(12, true, /\w/, 'P@ss');
    cy.typePasswordForm(password);
    cy.typeConfirmPasswordForm(password)
})

And("preencho os campos com um email inválido", () =>{
    cy.fixture('signupData').then((data) =>{
        const user = data.invalidAccount;
        cy.typeEmailForm(user.email);
    })
})

And("preencho os campos com uma senha inválida", () =>{
    cy.fixture('signupData').then((data) =>{
        const user = data.invalidAccount;
        cy.typePasswordForm(user.password);
        cy.typeConfirmPasswordForm(user.password)
    })
})

And("preencho os campos com dados de uma conta existente", () => {
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

Then("recebo uma mensagem de erro, indicando email inválido", () => {
    cy.emailError()
});

Then("recebo uma mensagem de erro, indicando senha inválida", () => {
    cy.passwordError()
});

Then("serei encaminhado para página de cadastro concluído", () => {
    cy.registerComplete()
});