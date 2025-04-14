Feature: Login

Background:
    Given estou na tela principal
    And clico em logar

Scenario: Fazer login com uma conta válida
    When insiro os dados de login válidos
    And confirmo login
    Then meu nome irá aparecer no header

Scenario: Tentar logar com uma conta não existente
    When insiro os dados de login inválidos
    And confirmo login
    Then irei receber uma mensagem de erro, indicando falha no login

Scenario: Tentar logar sem inserir email
    When insiro a senha
    And confirmo login
    Then irei receber uma mensagem de erro, indicando falha no login

Scenario: Tentar logar sem inserir senha
    When insiro o email
    And confirmo login
    Then irei receber uma mensagem de erro, indicando falha no login