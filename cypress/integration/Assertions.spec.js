//<reference types="cypress"/>
describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.contains("nb-card", "Using the Grid")
      .find('[for="inputEmail1"]')
      .should("have.class", "label")
      .and("have.text", "Email");
    cy.get('[for="inputEmail1"]').then((value) => {
      expect(value.text()).to.equal("Email");
      expect(value).to.have.class("label");
      expect(value).to.have.text("Email");
    });
  });
});
