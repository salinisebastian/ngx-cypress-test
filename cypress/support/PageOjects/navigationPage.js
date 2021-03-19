function clickGroup(groupName) {
  cy.contains("a", groupName).then((menu) => {
    cy.wrap(menu)
      .find(".expand-state g g")
      .invoke("attr", "data-name")
      .then((attr) => {
        if (attr.includes("left")) {
          cy.wrap(menu).click();
        }
      });
  });
}
export class navigationPage {
  formLayoutPage() {
    //cy.contains("Forms").click();
    clickGroup("Forms");
    cy.contains("Form Layouts").click();
  }

  formDatePickerPage() {
    // cy.contains("Forms").click();
    clickGroup("Forms");
    cy.contains("Datepicker").click({ force: true });
  }

  tablesAndDataPage() {
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
  }
}

export const navigateTo = new navigationPage();
