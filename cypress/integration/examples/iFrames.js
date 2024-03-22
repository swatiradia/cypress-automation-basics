// Frames are html dicument that are embedded inside another html document.
// iframe plugin needs to be installed first - npm install -D cypress-iframe, and then import it.
import 'cypress-iframe' 

describe('Testing frames', () => {
    it('First test', () =>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*= "mentorship"]').eq(0).click().wait(1000)
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
        
    })
})