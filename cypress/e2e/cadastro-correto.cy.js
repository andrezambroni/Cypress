describe("Página de cadastro", () => {
  it("Preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.contains("a", "Cadastrar").click()
    cy.get('[data-test="input-name"]').type("Andre Zambroni")
    cy.get('input[name="email"]').type("andre@email.com")
    cy.get('input[name="password"]').type("Senha123")
    cy.get('input[name="confirm_password"]').type("Senha123")
    cy.contains("button", "Cadastrar").click()
  })
})

// describe("Página de cadastro", () => {
//   it("Deve preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
//     cy.visit("https://adopet-frontend-cypress.vercel.app/")
//     cy.get('[data-test="register-button"]').click()
//     cy.get('[data-test="input-name"]').type("Ana de Jesus")
//     cy.get('[data-test="input-email"]').type("ana@email.com")
//     cy.get('[data-test="input-password"]').type("Senha123")
//     cy.get('[data-test="input-confirm-password"]').type("Senha123")
//     cy.get('[data-test="submit-button"]').click()
//   })
// })

// describe("", () => {
//   it("deve carregar a página corretamente e clicar no botão ‘Ver pets disponíveis para adoção”", () => {
//     cy.visit("https://adopet-frontend-cypress.vercel.app/")
//     cy.get(".button").click()
//   })
// })

// describe("", () => {
//   it("Visita a página de principal do AdoPet e testa os botão de home", () => {
//     cy.visit("https://adopet-frontend-cypress.vercel.app/")
//     cy.get(".header__home").click()
//   })
// })

// describe("", () => {
//   it("Visita a página de /login do Adopet", () => {
//     cy.visit("https://adopet-frontend-cypress.vercel.app/login")
//   })
// })

// describe("", () => {
//   it("Visita a página de /home do Adopet", () => {
//     cy.visit("https://adopet-frontend-cypress.vercel.app/home")
//   })
// })

// describe("", () => {
//   it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", () => {
//     cy.visit("https://adopet-frontend-cypress.vercel.app/home")
//     cy.get(".header__message").click()
//   })
// })

// describe("", () => {
//   it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", () => {
//     cy.visit("https://adopet-frontend-cypress.vercel.app/home")
//     cy.get(".header__message").click()
//   })
// })
