// cypress spec file
/// <reference types="Cypress" />

describe("My First Cypress Test", function(){

    it("My First Test Case", function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        // This console.log prints as soon as the program runs as it is asynchronous in nature
        console.log("Promise not handled")

        // Cypress aliasing to reduce repeated locating of elements
        cy.get('.products').as('productLocator')
       
        // cy.get('.product:visible').should('have.length',4)
         // Parent child chaining - .product class is inside .products class
        //  should() is a chai assertion type
        cy.get('@productLocator').find('.product').should('have.length',4)

        // get (), find(), eq(), contains(), click()
        // Here the Promise has been handled so the console.log runs synchronously
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function(){
            console.log('Promise handled')
        })


        // finding a specific product based on the Name of the product in a list
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {

            const veggieName = $e1.find('h4.product-name').text()
            if (veggieName.includes('Cashews')){
                cy.wrap($e1).find('button').click()
            }
        }) 
        
        // Assertion - should is used which is a chai assertion library.
        cy.get('.greenLogo').should('have.text','GREENKART')
        cy.get('.greenLogo').then(function(logo){
            cy.log(logo.text())
        })

        
    })
}) 