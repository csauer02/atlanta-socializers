import React, { useState, useEffect } from 'react';

const BlogListing = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/cms/v3/blogs/posts?published=true&slugPrefix=events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data.results);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>Error loading events: {error}</div>;

  return (
    <div className="event-cards-container">
      {events.map(event => (
        <div key={event.id} className="event-card">
          {event.featuredImage && (
            <div className="event-image-container">
              <img 
                src={event.featuredImage} 
                alt={event.name} 
                className="event-image"
                loading="lazy"
              />
              <span className="event-category">{event.category}</span>
            </div>
          )}
          
          <div className="event-details">
            <h3 className="event-title">{event.name}</h3>
            <div className="event-meta">
              <span className="event-date">
                {new Date(event.publishDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="event-time">{event.time}</span>
              <span className="event-venue">{event.venue}</span>
            </div>
            <div className="event-description" 
              dangerouslySetInnerHTML={{ 
                __html: event.postBody.substring(0, 100) + '...' 
              }} 
            />
            <a href={event.url} className="event-rsvp-button">RSVP</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogListing;