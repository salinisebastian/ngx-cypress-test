//<reference types="cypress"/>
describe("Our first suite", () => {
  it("first test", () => {
    function datepick(day) {
      let date = new Date();
      date.setDate(date.getDate() + day);
      let futureDay = date.getDate();
      console.log("helllllllllllllllll", futureDay);
      let futureMonth = date.toLocaleString("default", { month: "short" });
      console.log(futureMonth);
      let dateassert =
        futureMonth + " " + futureDay + ", " + date.getFullYear();

      cy.get("nb-card-body nb-calendar-pageable-navigation")
        .invoke("attr", "ng-reflect-date")
        .then((attribute) => {
          console.log("efrv", attribute);
          if (attribute.includes(futureMonth)) {
            cy.get("nb-calendar-day-picker [class='day-cell ng-star-inserted']")
              .contains(futureDay)
              .click();
          } else {
            cy.get('[data-name="chevron-right"]').click();
            datepick(350);
          }
        });
      return dateassert;
    }

    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Datepicker").click();

    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
      });

    let dateassert = datepick(350);
    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).invoke("prop", "value").should("contain", dateassert);
        cy.wrap(input).should("have.value", dateassert);
      });
  });
});
