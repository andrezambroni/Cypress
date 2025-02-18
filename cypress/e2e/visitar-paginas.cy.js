describe("Página de cadastro", () => {
  it("Deve preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.contains("a", "Cadastrar").click()
    cy.get('[data-test="register-button"]').click()
    cy.get('[data-test="input-name"]').type("Ana de Jesus")
    cy.get('[data-test="input-email"]').type("ana@email.com")
    cy.get('[data-test="input-password"]').type("Senha123")
    cy.get('[data-test="input-confirm-password"]').type("Senha123")
    cy.get('[data-test="submit-button"]').click()
  })

  it("Deve visitar a página principal e clicar no botão 'Ver pets disponíveis para adoção'", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.get(".button").click()
  })

  it("Deve visitar a página principal e testar os botões do header", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.get(".header__home").click()
    cy.get(".header__message").click()
  })

  it("Deve visitar a página de /login do Adopet", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/login")
  })

  it("Deve visitar a página de /home do Adopet", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/home")
  })

  it("Deve visitar a página de /home do AdoPet e clicar no botão 'Falar com o responsável'", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/home")
    cy.get(".header__message").click()
  })
})
