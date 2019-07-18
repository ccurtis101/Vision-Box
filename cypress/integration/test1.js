describe('Test1', function() {
    it('Verifies Home Page links', function() {
      //expect(true).to.equal(false)
      cy.visit('https://www.vision-box.com/')
      cy.getCookies().log
    
        cy.contains('Solutions').click()
        cy.contains('Services').click()
        cy.contains('Pressroom').click()
        cy.contains('About').click()
        cy.contains('Contact us').click()
        cy.contains('We are Hiring').click()
    })
  })