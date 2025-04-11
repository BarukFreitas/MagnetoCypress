Feature: Cadastro

Background:
    Given estou na tela principal
    And clico em criar uma nova conta

Scenario: Tentar fazer um cadastro que já está registrado
    And preencho os campos com um email e senha válidos de uma conta existente
    When eu clico no botão de cadastrar
    Then recebo uma mensagem de erro, indicando que a conta já existe

Scenario: Tentar fazer um cadastro com email e senha inválidos
    And preencho os campos com um email e senha inválidos
    When eu clico no botão de cadastrar
    Then recebo uma mensagem de erro, indicando email e senha inválidos
