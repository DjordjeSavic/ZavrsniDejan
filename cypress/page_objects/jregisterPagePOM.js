class RegisterPage {

    get firstNameInputField() {
        return cy.get('#firstName')
    }
    get lastNameInputField() {
        return cy.get('#last-name')
    }
    get emailInputField() {
        return cy.get('#email')
    }
    get passwordInputield() {
        return cy.get('#password')
    }

}

export const registerPagePOM = new RegisterPage();
