// cypress spec file
/// <reference types="Cypress" />

describe("Testing Pop up scenarios", function(){

    it("My First Test Case", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
          // window.alert event will be triggered 
        cy.get('[value="Confirm"]').click()
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        cy.on('window:confirm', (str) =>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})