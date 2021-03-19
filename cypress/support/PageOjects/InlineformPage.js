import { copyFileSync } from "fs";
import { createYield } from "typescript";

export class InlineformPage {
  submitInlineformwithNameAndEmail(name, email) {
    cy.contains("nb-card", "Inline form")
      .find("form")
      .then((form) => {
        cy.wrap(form).find('[placeholder="Jane Doe"]').type(name);
        cy.wrap(form).find('[placeholder="Email"]').type(email);
        cy.wrap(form).find('[type="checkbox"]').check({ force: true });
        cy.wrap(form).submit();
      });
  }

  submitBasicFormWithNameAndPassword(email, password) {
    cy.contains("nb-card", "Basic form")
      .find("form")
      .then((form) => {
        cy.wrap(form).find('[placeholder="Email"]').type(email);
        cy.wrap(form).find('[placeholder="Password"]').type(password);
        cy.wrap(form).find('[type="checkbox"]').check({ force: true });
        cy.wrap(form).submit();
      });
  }
}
export const onFormLayoutPage = new InlineformPage();
