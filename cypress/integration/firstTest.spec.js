///<reference types="cypress"/>
describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    //by tag name
    cy.get("input");

    //by ID
    cy.get("#inputEmail1");

    //by classname
    cy.get(".input-full-width");

    //by attribute name
    cy.get("[placeholder]");

    //by attribute name and value
    cy.get('[placeholder="Email"]');

    //by class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    //by tagname and attribute with value
    cy.get('input[placeholder="Email"]');

    //by two different attributes
    cy.get('[placeholder="Email"][fullwidth]');
    // or cy.get('[placeholder="Email"][type="email"]')

    //by tag name, Attribute with value,ID and Class name
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

    //The most recommend way by Cypress
    cy.get('[data-cy="imputEmail1"]');
  });
});
