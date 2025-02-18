// Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.describe("Verificar texto na página principal", () => {
describe("Verificar texto na página principal", () => {
  it("Deve verificar se o texto 'Quem ama adota!' está presente no HTML", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.contains("Quem ama adota!").should("be.visible")
  })
})

// contains = procura um elemento que contém o texto especificado
// should("be.visible") verifica se o elemento encontrado está visível na página.