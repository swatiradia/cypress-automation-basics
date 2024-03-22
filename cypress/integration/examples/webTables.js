describe('Web Tables handling', function(){

    it('Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.table-display tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if(text.includes('Python')){
                // next() method can only be applied to cy.get, therefore rewrite the same cy.get and use eq(2) to get the same index where the course name is written, on that use next() method
                cy.get('.table-display tr td:nth-child(2)').eq(index).next().then(function (price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                }) 
                console.log(text)

            }
        })       
     })    
})