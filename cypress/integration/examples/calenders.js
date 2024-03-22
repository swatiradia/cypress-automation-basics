// Click on the date filed and select 6/15/2027 and assert that it is correctly selected.
describe('Testing calenders', () => {
    it('Verify Date Selection', () =>{

        const Day = "15"
        const Month = "6"
        const Year = "2027"
        const expectedDate = [Month, Day, Year]
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__calendar-button__icon').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.contains('button', Year).click()
        cy.get('.react-calendar__tile').eq(Number(Month)-1).click()
        cy.contains('abbr',Day).click()

        // cy.get('.react-calendar__tile').each(($e1, index, $list) => {
        //     if($e1.text() === Year){
        //         cy.wrap($e1).click()
        //     }
        // })
        // cy.get('.react-calendar__tile').each(($e1, index, $list) => {
        //     if($e1.text() === Day){
        //             cy.wrap($e1).click()
        //     }
        // })

        // Assertion
        cy.get('.react-date-picker__inputGroup input').should('have.value','2027-06-15')
        cy.get('.react-date-picker__inputGroup__input').each(($e1, index) => {
            cy.wrap($e1).invoke('val').should('eq', expectedDate[index])
        })
    })
})

