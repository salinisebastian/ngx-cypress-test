//<reference types="cypress"/>
describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.contains('[status="primary"]', "Sign in");
    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .parents("form")
      .find("nb-checkbox")
      .click();

    cy.contains("nb-card", "Horizontal form").find('[type="email"]');
  });
  it("then and wrap", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.contains("nb-card", "Using the Grid")
      .find('[for="inputEmail1"]')
      .should("contain", "Email");
    cy.contains("nb-card", "Using the Grid")
      .find('[for="inputPassword2"]')
      .should("contain", "Password");
    cy.contains("nb-card", "Basic form")
      .find('[for="exampleInputEmail1"]')
      .should("contain", "Email address");
    cy.contains("nb-card", "Basic form")
      .find('[for="exampleInputPassword1"]')
      .should("contain", "Password");

    cy.contains("nb-card", "Using the Grid").then((firstform) => {
      const textEmail = firstform.find('[for="inputEmail1"]').text();
      const textPassword = firstform.find('[for="inputPassword2"]').text();
      expect(textEmail).to.equal("Email");
      expect(textPassword).to.equal("Password");
      cy.contains("nb-card", "Basic form").then((SecondForm) => {
        const textEmail2 = SecondForm.find('[for="exampleInputEmail1"]').text();
        const textPassword2 = SecondForm.find(
          '[for="exampleInputPassword1"]'
        ).text();
        expect(textPassword).to.equal(textPassword2);
        cy.wrap(SecondForm)
          .find('[for="exampleInputPassword1"]')
          .should("contain", "Password");
      });
    });
  });

  it("s", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    //#1
    cy.get('[for="inputEmail1"]').then((value) => {
      expect(value.text()).to.equal("Email");
    });
    //#2
    cy.get('[for="inputEmail1"]')
      .invoke("text")
      .then((value) => {
        expect(value).to.equal("Email");
      });
  });
  it.only("p", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "Basic form")
      .find("nb-checkbox")
      .click()
      .find(".custom-checkbox")
      .invoke("attr", "class")
      // .should("contain", "checked");
      .then((value) => {
        expect(value).to.contains("checked");
      });
  });
});
