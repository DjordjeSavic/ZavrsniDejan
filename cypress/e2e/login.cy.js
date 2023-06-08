/// <reference types='cypress'/>

describe("Title=add new board", () => {
    it("Check all elements on the login page", () => {
      cy.visitTitle=("https://cypress.vivifyscrum-stage.com/");
      cy.visitTitle=("Add New Board")
      cy.visitTitle=("My organiation")
      cy.visitTitle=("uspesnost bez predaje");
      cy.get("[name='email']").type("dejka123@gmail.com");
      cy.get("[type='password']").type("dejkasabac09031976");
      cy.get("button[type='submit']").click();
      cy.wait(2000);
    });


   


  });

  
