describe("Practising Locators Test", function(){
    
    it("To test UI Elements" , function(){

// To check radio buttons

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value','option3')
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option1'])

// To check static dropdowns      

        cy.get('select').select('option2').should('have.value','option2')

// To check dynamic dropdowns

        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if($e1.text() === 'India'){
                cy.wrap($e1).click()
            }
        })

        cy.get('#autocomplete').should('have.value','India')


        // To check visible and invisible elements
        
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


//      To check radio button

        cy.get('input[value="radio2"]').check().should('be.checked')
    })   
})