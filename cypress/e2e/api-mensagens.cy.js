describe("API Adopet", () => {
  const tempoEsperado = Math.random() * 1000


  it("Mensagens da API", () => {
    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/mensagem/9a823cf1-90ce-4528-bfb0-86a91a8e0ada",
      headers: Cypress.env()
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property("msg")
      expect(res.duration).to.be.lte(tempoEsperado)
    })
  })
})
