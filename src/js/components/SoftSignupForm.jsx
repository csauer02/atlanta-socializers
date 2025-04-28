import React, { useState, useEffect } from 'react';

const SoftSignupForm = ({ formId }) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Handle form iframe messaging
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
        setSubmitted(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Thank you for your RSVP!</h3>
        <p>We've sent you a confirmation email with event details.</p>
        <p>Looking forward to seeing you there!</p>
      </div>
    );
  }

  return (
    <div className="rsvp-form-container">
      <h2>RSVP for this Event</h2>
      <div 
        className="rsvp-form"
        dangerouslySetInnerHTML={{ 
          __html: `<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
          <script>
            hbspt.forms.create({
              region: "na1",
              portalId: "${process.env.HUBSPOT_PORTAL_ID}",
              formId: "${formId}"
            });
          </script>` 
        }}
      />
    </div>
  );
};

export default SoftSignupForm;