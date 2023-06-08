//<reference types='cypress'/>
const locators = require('../fixtures/locators.json');
import {faker} from "@faker-js/faker"
import { registerPage} from '../page-ojects/registerPage'
import { registerPagePOM } from "../page_objects/jregisterPagePOM";
//const password = "pokusavam100";
//const faker =  require('@faker-js/faker');
//let firstName = faker.person.firstName();
//console.log("Upisi ime" + firstName);
var firstName
var lastName
var email

var password
var confirmationPassword
before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
})
before(() => {
    cy.visit("");
})
after(() => {
})
afterEach(() => {
})
describe("Register", ()=> {
 it("Check all elements on the web page", ()=> {
    cy.visit("register");
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    email = faker.internet.email();
    password = faker.internet.password();
    confirmationPassword = faker.internet.password();
    cy.get(locators.registerPage.firstNameInputField).type(firstName);
    cy.get(locators.registerPage.lastNameInputField).type(lastName);
    cy.get(locators.registerPage.emailInputField).type(email);
    cy.get(locators.registerPage.passwordInputField).type(password);
    cy.get(locators.registerPage.passwordConfirmationInputField).type(confirmationPassword);
    cy.get(locators.registerPage.checkbox).click();
    cy.get(locators.registerPage.checkLabel);
    cy.get(locators.registerPage.submitButton).click();
    cy.wait(2000);
 })
})
describe("Register page", () => {
    it("Wmail - Empty field", () => {
      cy.visit("register");
      
      registerPagePOM.firstNameInputField.type('dejan');
      registerPagePOM.lastNameInputField.type('cvetinovic');
      //cy.get(locators.registerPage.emailInputField).type(email);
      //cy.get(locators.registerPage.passwordInputField).type(password);
      //cy.get(locators.registerPage.passwordConfirmationInputField).type(confirmationPassword);
      //cy.get(locators.registerPage.checkbox).type("checkbox");
      //cy.get(locators.registerPage.checkLabel);
      //cy.get(locators.registerPage.submitButton).click();
      cy.wait(3000);
    })
  });













