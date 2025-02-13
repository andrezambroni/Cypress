describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.contains("a", "Cadastrar").click()
    cy.get('input[name="nome"]').type("Andre Zambroni")
    cy.get('input[name="email"]').type("andre@email.com")
    cy.get('input[name="password"]').type("Senha123")
    cy.get('input[name="confirm_password"]').type("Senha123")
    cy.contains("button", "Cadastrar").click()
  })
})