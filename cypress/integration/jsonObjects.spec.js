import { createYield } from "typescript";

/// <reference> types="cypress" />

it("JSON objects", () => {
  cy.openHomePage();

  const simpleObjects = { key: "value", key2: "value2" };

  const simpleArrayOfValues = ["one", "two", "three"];

  const arrayOfOjects = [
    { key: "value" },
    { key2: "value2" },
    { key3: "value3" },
  ];

  const typesOfData = { string: "this is a string", number: 10 };

  const mix = {
    firstName: "Artem",
    lastName: "Bondar",
    Age: 35,
    Students: [
      {
        firstName: "Sara",
        lastName: "Conor",
      },
      {
        firstName: "Bruce",
        lastName: "Willis",
      },
    ],
  };

  console.log(simpleObjects.key2);
  console.log(simpleObjects["key2"]);
  console.log(simpleArrayOfValues[1]);
  console.log(arrayOfOjects[2].key3);
  console.log(mix.Students[1].lastName);

  const lastNameOfSecondStudent = mix.Students[1].lastName;
});
