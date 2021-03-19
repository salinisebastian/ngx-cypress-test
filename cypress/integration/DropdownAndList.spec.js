//<reference types="cypress"/>
describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.get("nav nb-select").click();
    cy.get(".options-list").contains("Dark").click();
    cy.get("nav nb-select").should("contain", "Dark");
    cy.get("nb-layout").should(
      "have.css",
      "background-color",
      "rgb(21, 26, 48)"
    );
  });
  it.only("Another Method", () => {
    cy.visit("/");
    cy.get("nav nb-select").then((dropdown) => {
      cy.wrap(dropdown).click();

      cy.get(".options-list nb-option").each((Itemlist, index) => {
        const text = Itemlist.text().trim();
        cy.wrap(Itemlist).click();
        cy.wrap(dropdown).should("contain", text);
        const colors = {
          Light: "rgb(255, 255, 255)",
          Dark: "rgb(34, 43, 69)",
          Cosmic: "rgb(50, 50, 89)",
          Corporate: "rgb(255, 255, 255)",
        };
        // console.log("abcd", colors[text]);
        cy.get("nb-layout-header nav").should(
          "have.css",
          "background-color",
          colors[text]
        );
        if (index < 3) {
          cy.wrap(dropdown).click();
        }
      });
    });
  });
});
