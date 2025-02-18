// Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. 
// Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.

describe("Verificar texto na página principal", () => {
  it("Deve verificar se o texto 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!' está presente no HTML", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.contains(
      "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"
    ).should("be.visible")
  })
})