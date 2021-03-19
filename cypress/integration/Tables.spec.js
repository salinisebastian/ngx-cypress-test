//<reference types="cypress"/>
describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
    cy.contains("tr", "Larry").then((tableRow) => {
      cy.wrap(tableRow).find(".nb-edit").click();
      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type("25");
      cy.wrap(tableRow).find(".nb-checkmark").click();
      cy.wrap(tableRow).find("td").eq(6).should("contain", "25");
    });
  });
  it.only("second test", () => {
    cy.visit("/");
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
    cy.get("thead").find(".nb-plus").click();
    cy.get("thead")
      .find("tr")
      .eq(2)
      .then((firstRow) => {
        cy.wrap(firstRow).find('[ng-reflect-name="firstName"]').type("Salini");
        cy.wrap(firstRow)
          .find('[ng-reflect-name="lastName"]')
          .type("Sebastian");
        cy.wrap(firstRow).find(".nb-checkmark").click();
      });
    cy.get("tbody tr")
      .first()
      .find("td")
      .then((newRow) => {
        cy.wrap(newRow).eq(2).should("contain", "Salini");
        cy.wrap(newRow).eq(3).should("contain", "Sebastian");
      });

    const age = [20, 30, 40, 200];
    cy.wrap(age).each((age) => {
      cy.get('[placeholder="Age"]').clear().type(age);
      cy.wait(2000);

      cy.get("tbody tr").each((ageCell) => {
        if (age == 200) {
          cy.wrap(ageCell).find("td").should("contain", "No data found");
        } else {
          cy.wrap(ageCell).find("td").eq(6).should("contain", age);
        }
      });
    });
  });
});
