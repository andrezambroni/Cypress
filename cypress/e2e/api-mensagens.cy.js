describe("API Adopet", () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YTgyM2NmMS05MGNlLTQ1MjgtYmZiMC04NmE5MWE4ZTBhZGEiLCJhZG9wdGVyTmFtZSI6IkFuZHLDqSBCb3JnZXMiLCJpYXQiOjE3Mzk4MTkxNTgsImV4cCI6MTc0MDA3ODM1OH0.HhUmVrJgpvFKm8gdeohVa-eIUBn-SDtIgvTZMYwXNN0`

  it("Mensagens da API", () => {
    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/mensagem/9a823cf1-90ce-4528-bfb0-86a91a8e0ada",
      headers: {
        authorization: authorization,
      },
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property("msg")
    })
  })
})
