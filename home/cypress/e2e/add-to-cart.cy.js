describe("My First E2E Test ", () => {
  it("Should add item to the cart", () => {
    cy.visit('http://localhost:3000/');
    cy.get('#showlogin').click();
    cy.get('#loginbtn').click();
    cy.get('#showcart').click();
    cy.get('#clearcart').click();
    cy.get('#addtocart_1').click();
    cy.get('#addtocart_2').click();
    cy.get('#addtocart_3').click();
    cy.get('#addtocart_5').click();
    cy.get('a:nth-child(3)').click();
    cy.get("#grand_total").should("contain", "$30.96")
  })
})