describe('RSVP Process', () => {
  it('allows a user to RSVP for an event', () => {
    cy.visit('/events/test-event');
    
    // Fill out the RSVP form
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="add_to_calendar"]').check();
    cy.get('input[name="newsletter_consent"]').check();
    
    // Submit the form
    cy.get('form').submit();
    
    // Verify success message
    cy.get('.form-success').should('contain', 'Thank you for your RSVP');
    
    // Verify redirect to confirmation page
    cy.url().should('include', '/rsvp-confirmation');
  });
});