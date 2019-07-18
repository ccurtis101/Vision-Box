describe('Test2', function() {
    it('Verifies UI Viewports with ScreenShot', function() {
      //expect(true).to.equal(false)
      cy.visit('https://www.vision-box.com/')
      cy.viewport('iphone-6')
     cy.screenshot()
      
    })
  })