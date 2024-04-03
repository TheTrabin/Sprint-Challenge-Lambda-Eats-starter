/// <reference types="cypress" />

describe("FORM TEST!!!!", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000");
    });
    it("The Test", () => {
        //Access the FORM
        cy.get('[data-cy=pizza]').click();
        //test for adding text to box
        cy.get('[name="inst"]')
          .type("Something")
          .should("have.value", "Something");
        //Meats
        cy.get('[name="pep"]')
            .check()
            .should("checked");
        cy.get('[name="saus"]')
        .check()
            .should("checked");
        cy.get('[name="bacon"]')
        .check()
            .should("checked");
        cy.get('[name="chx"]')
        .check()
            .should("checked");
        //Veggies
        cy.get('[name="pepper"]')
        .check()
            .should("checked");
        cy.get('[name="olives"]')
        .check()
            .should("checked");
        cy.get('[name="jala"]')
        .check()
            .should("checked");
        cy.get('[name="oni"]')
        .check()
            .should("checked");
        //test that form can be submitted
        cy.get('[name="name"]')
            .type("Mike");
        cy.get('[name="size"]')
            .select("Large");
        cy.get("form").submit();
        // cy.get('.Submit').click()
        cy.get('[data-cy=home]').click();
        
        
    });
    it("The Test 2", () => {
        //Access the FORM
        cy.get('.sc-AxhUy').click();
        //test for adding text to box
        cy.get('[name="inst"]')
          .type("Something")
          .should("have.value", "Something");
        //Meats
        cy.get('[name="pep"]')
            .check()
            .should("checked");
        cy.get('[name="saus"]')
        .check()
            .should("checked");
        cy.get('[name="bacon"]')
        .check()
            .should("checked");
        cy.get('[name="chx"]')
        .check()
            .should("checked");
        //Veggies
        cy.get('[name="pepper"]')
        .check()
            .should("checked");
        cy.get('[name="olives"]')
        .check()
            .should("checked");
        cy.get('[name="jala"]')
        .check()
            .should("checked");
        cy.get('[name="oni"]')
        .check()
            .should("checked");
        cy.get('[name="chx"]')
            .uncheck()
            .should("not.be.checked");
        cy.get('[name="jala"]')
            .uncheck()
                .should("not.be.checked");
        //test that form can be submitted
        cy.get('[name="name"]')
            .type("Mike");
        cy.get('[name="size"]')
            .select("Medium");
        
        cy.get("form").submit();
        // cy.get('.Submit').click()
        cy.get('[data-cy=home]').click();
}); 