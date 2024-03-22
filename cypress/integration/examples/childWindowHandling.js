describe('Testing child window handling', function(){

    it('Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // Using JQuery method, invoke to remove the target attribute which has a value of blank.
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        // when a button has a link to open in a new tab, it has a tag called target= _blank.

        // Cypress can not go to completely different domain(url) from it origin, it will fail saying cross origin.
        // cy.origin is used to fix this issue.
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('#navbarSupportedContent a[href*="about"]').click()
            cy.get('.mt-50 h2').should('contain','Welcome to QAClick Academy')
            
        })
        
    })
})