//<reference types="cypress"/>
describe("Our first suite", () => {
  it("Tooltip", () => {
    cy.visit("/");
    cy.contains("Modal & Overlays").click();
    cy.contains("Tooltip").click();
    cy.contains("nb-card", "Colored Tooltips").contains("Default").click();
    cy.get("nb-tooltip").should("contain", "This is a tooltip");
  });

  it("Dialog Box", () => {
    cy.visit("/");
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();

    //1

    /*cy.get("tbody tr").first().find('[class="nb-trash"]').click();
    cy.on("window:confirm", (confirm) => {
      expect(confirm).to.equal("Are you sure you want to delete?");
     
    });
    //2
    How to select cancel for the dialog box
    cy.get("tbody tr").first().find('[class="nb-trash"]').click();
    cy.on("window:confirm", (confirm) => false)*/

    //3

    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get("tbody tr")
      .first()
      .find('[class="nb-trash"]')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          "Are you sure you want to delete?"
        );
      });
  });
});
