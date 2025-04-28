describe('Mobile Responsiveness', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
  });
  
  it('displays the mobile menu correctly', () => {
    cy.visit('/');
    cy.get('.desktop-menu').should('not.be.visible');
    cy.get('.mobile-menu-toggle').should('be.visible');
    
    // Test hamburger menu functionality
    cy.get('.mobile-menu').should('not.be.visible');
    cy.get('.mobile-menu-toggle').click();
    cy.get('.mobile-menu').should('be.visible');
  });
  
  it('has touch-friendly button sizes', () => {
    cy.visit('/events');
    cy.get('.event-rsvp-button').then(($btn) => {
      const rect = $btn[0].getBoundingClientRect();
      expect(rect.width).to.be.at.least(44);
      expect(rect.height).to.be.at.least(44);
    });
  });
});