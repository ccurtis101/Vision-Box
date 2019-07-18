describe('Test3', function() {
    it('Verifies Cookie data', function() {

      cy.visit('https://www.vision-box.com/')
      cy.getCookies()
      
    })
  })