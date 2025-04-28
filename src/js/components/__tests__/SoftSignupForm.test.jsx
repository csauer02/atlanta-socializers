import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SoftSignupForm from '../SoftSignupForm';

describe('SoftSignupForm Component', () => {
  beforeEach(() => {
    // Mock the window.addEventListener
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
  });
  
  it('renders the form container', () => {
    render(<SoftSignupForm formId="test-form-id" />);
    
    expect(screen.getByText('RSVP for this Event')).toBeInTheDocument();
    expect(screen.getByClassName('rsvp-form')).toBeInTheDocument();
  });
  
  it('shows success message when form is submitted', () => {
    render(<SoftSignupForm formId="test-form-id" />);
    
    // Simulate the message event from the HubSpot form iframe
    const mockMessageEvent = {
      data: {
        type: 'hsFormCallback',
        eventName: 'onFormSubmit'
      }
    };
    
    // Find the event listener callback
    const eventListenerCallback = window.addEventListener.mock.calls[0][1];
    
    // Call the callback with our mock event
    eventListenerCallback(mockMessageEvent);
    
    // Check that success message is shown
    expect(screen.getByText('Thank you for your RSVP!')).toBeInTheDocument();
    expect(screen.getByText('We\'ve sent you a confirmation email with event details.')).toBeInTheDocument();
    expect(screen.getByText('Looking forward to seeing you there!')).toBeInTheDocument();
  });
});