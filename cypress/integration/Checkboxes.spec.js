//<reference types="cypress"/>
describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.contains("nb-card", "Using the Grid")
      .find("[type='radio']")
      .then((radiobuttons) => {
        cy.wrap(radiobuttons)
          .first()
          .check({ force: true })
          .should("be.checked");
        cy.wrap(radiobuttons).eq(1).check({ force: true });
        cy.wrap(radiobuttons).first().should("not.be.checked");
        cy.wrap(radiobuttons)
          .eq(2)
          .check({ force: true })
          .should("be.disabled");
      });
  });
  it.only("Second test", () => {
    cy.visit("/");
    cy.contains("Modal & Overlays").click();
    cy.contains("Toastr").click();
    //check can be used to check multiple checkboxes
    //check cannot be used to uncheck
    cy.get('[type="checkbox"]').check({ force: true });
    cy.get('[type="checkbox"]').eq(0).click({ force: true });
  });
});
