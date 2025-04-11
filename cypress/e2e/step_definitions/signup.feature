Feature: Cadastro

Background:
    Given estou na tela principal
    And clico em criar uma nova conta

Scenario: Realizar cadastro com sucesso
    And preencho os campos com nome válido
    And preencho os campos com um email válido
    And preencho os campos com uma senha válida
    When eu clico no botão de cadastrar
    Then serei encaminhado para página de cadastro concluído

Scenario: Tentar fazer um cadastro que já está registrado
    And preencho os campos com dados de uma conta existente
    When eu clico no botão de cadastrar
    Then recebo uma mensagem de erro, indicando que a conta já existe

Scenario: Tentar fazer um cadastro com email e senha inválidos
    And preencho os campos com nome válido
    And preencho os campos com um email e senha inválidos
    When eu clico no botão de cadastrar
    Then recebo uma mensagem de erro, indicando email e senha inválidos

Scenario: Tentar fazer um cadastro com email inválido e senha válida
    And preencho os campos com nome válido
    And preencho os campos com um email inválido
    And preencho os campos com uma senha válida
    When eu clico no botão de cadastrar
    Then recebo uma mensagem de erro, indicando email inválido

Scenario: Tentar fazer um cadastro com email válido e senha inválida
    And preencho os campos com nome válido
    And preencho os campos com um email válido
    And preencho os campos com uma senha inválida
    When eu clico no botão de cadastrar
    Then recebo uma mensagem de erro, indicando senha inválida