// Teste o login com um fluxo diferente: Visite a página principal do Adopet,
//  clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.

describe("Teste de login com fluxo diferente", () => {
  it("Deve visitar a página principal, clicar no ícone de mensagem e fazer login com credenciais válidas", () => {
    // Visita a página principal do AdoPet
    cy.visit("https://adopet-frontend-cypress.vercel.app/")

    // Clica no botão de ícone de mensagem no header
    cy.get(".header__message").click()

    // Preenche o campo de email
    cy.get('input[name="email"]').type("andre@email.com")

    // Preenche o campo de senha
    cy.get('input[name="password"]').type("Senha123")

    // Clica no botão de login
    cy.get('[data-test="submit-button"]').click()
  })
})