import { navigateTo } from "./navigationPage";

function datepick(day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  let futureDay = date.getDate();

  let futureMonth = date.toLocaleString("default", { month: "short" });

  let dateassert = futureMonth + " " + futureDay + ", " + date.getFullYear();

  cy.get("nb-card-body nb-calendar-pageable-navigation")
    .invoke("attr", "ng-reflect-date")
    .then((attribute) => {
      if (attribute.includes(futureMonth)) {
        cy.get(".day-cell").not(".bounding-month").contains(futureDay).click();
      } else {
        cy.get('[data-name="chevron-right"]').click();
        datepick(350);
      }
    });
  return dateassert;
}

export class onDatePickerPage {
  CommonDatepicker(dayFromToday) {
    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
      });

    let dateassert = datepick(dayFromToday);
    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).invoke("prop", "value").should("contain", dateassert);
        cy.wrap(input).should("have.value", dateassert);
      });
  }

  DatepickerWithRange(Firstday, Secondday) {
    cy.contains("nb-card", "Datepicker With Range")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
      });

    let dateassertFirst = datepick(Firstday);
    let dateassertSecond = datepick(Secondday);
    let FinalDay = dateassertFirst + " - " + dateassertSecond;
    cy.contains("nb-card", "Datepicker With Range")
      .find("input")
      .then((input) => {
        cy.wrap(input).invoke("prop", "value").should("contain", FinalDay);
        cy.wrap(input).should("have.value", FinalDay);
      });
  }
}

export const GoTo = new onDatePickerPage();
