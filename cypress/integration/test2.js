describe('Test2', function() {
    it('Verifies UI Viewports with ScreenShot', function() {
      //expect(true).to.equal(false)
      cy.visit('https://www.vision-box.com/')
      cy.viewport('iphone-6')
     cy.screenshot('IPHONE-6 Screenshot')
     cy.visit('https://www.vision-box.com/')
     cy.viewport('iphone-5')
     cy.screenshot('IPHONE-5 Screenshot')
     cy.visit('https://www.vision-box.com/')
     cy.viewport('ipad-mini')
     cy.screenshot('IPAD-MINI Screenshot')

    

    })
  })