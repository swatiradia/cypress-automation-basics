// cypress spec file
/// <reference types="Cypress" />

describe("My First Cypress Test", function(){

    it("My First Test Case", function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
            
            const veggieName = $e1.find('h4.product-name').text()
            if (veggieName.includes('Cashews')){
                cy.wrap($e1).find('button').click()
                }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

        // Complete the dropdown page 

    })
})