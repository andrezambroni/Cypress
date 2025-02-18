// Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.   


describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.get('[data-test="login-button"]').click()
  })

  it("Deve verificar se o título 'AdoPet' está presente no HTML", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.title().should("include", "AdoPet")
  })
})


