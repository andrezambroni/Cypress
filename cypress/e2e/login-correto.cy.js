describe("Página de cadastro", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.get('[data-test="login-button"]').click()
  })
  it("Deve preencher os campos do login corretamente e autenticar o usuario na pagina", () => {
    cy.get('[data-test="input-loginEmail"]').type("andre@email.com")
    cy.get('[data-test="input-loginPassword"]').type("Senha123")
    cy.get('[data-test="submit-button"]').click()
  })
})
