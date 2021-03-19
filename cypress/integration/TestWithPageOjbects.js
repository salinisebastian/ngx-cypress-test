const { createYield } = require("typescript");
import { onFormLayoutPage } from "../support/PageOjects/InlineformPage";
import { navigateTo } from "../support/PageOjects/navigationPage";
import { GoTo } from "../support/PageOjects/DatePicker";
import { onTableAndDataPage } from "../support/PageOjects/tablesAndDataPage";

describe("Test with Page Objects", () => {
  beforeEach("open Application", () => {
    cy.openHomePage();
  });
  it("Verify navigations across the pages", () => {
    navigateTo.formLayoutPage();
    navigateTo.formDatePickerPage();
  });
  it("Submit form", () => {
    navigateTo.formLayoutPage();
    onFormLayoutPage.submitInlineformwithNameAndEmail(
      "salini",
      "jan123@gmail.com"
    );
    onFormLayoutPage.submitBasicFormWithNameAndPassword(
      "feb123@gmail.com",
      "1234"
    );
    navigateTo.formDatePickerPage();
    GoTo.CommonDatepicker(1);
    GoTo.DatepickerWithRange(1, 2);
  });

  it.only("Tables&Datas", () => {
    navigateTo.tablesAndDataPage();
    onTableAndDataPage.UpdateAgeByFirstName("Jack", "18");
    onTableAndDataPage.addNewRecordWithFirstAndLastName("Amal", "Joy");
    onTableAndDataPage.deleteRowByIndex(3);
  });
});
