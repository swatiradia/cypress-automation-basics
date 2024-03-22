describe('Mouse Hover handling', function(){

    it('Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // invoke method is used to invoke JQuery methods
        cy.get('.mouse-hover-content').invoke('show')

        // Cypress can look through invisible elements and click it using click({force : true})
        // cy.contains('Top').click({force : true})
        cy.contains('Top').click()
        cy.url().should('include','top')
      
     })    
})

