import React from 'react';
import { createRoot } from 'react-dom/client';
import BlogListing from './components/BlogListing';
import SoftSignupForm from './components/SoftSignupForm';

// Initialize React components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize BlogListing component if the element exists
  const blogListingContainer = document.getElementById('react-blog-listing');
  if (blogListingContainer) {
    const root = createRoot(blogListingContainer);
    root.render(<BlogListing />);
  }

  // Initialize SoftSignupForm component if the element exists
  const formContainer = document.getElementById('react-signup-form');
  if (formContainer) {
    const formId = formContainer.dataset.formId;
    const root = createRoot(formContainer);
    root.render(<SoftSignupForm formId={formId} />);
  }
});