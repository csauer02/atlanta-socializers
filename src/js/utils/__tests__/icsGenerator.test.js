import { generateIcs } from '../icsGenerator';

describe('ICS Generator', () => {
  it('generates valid ICS content', () => {
    const title = 'Test Event';
    const start = '2025-04-24T18:30:00';
    const end = '2025-04-24T21:30:00';
    const location = 'Larakin, Atlanta';
    const description = 'A test event';
    
    const ics = generateIcs(title, start, end, location, description);
    
    expect(ics).toContain('BEGIN:VCALENDAR');
    expect(ics).toContain('VERSION:2.0');
    expect(ics).toContain('BEGIN:VEVENT');
    expect(ics).toContain('SUMMARY:Test Event');
    expect(ics).toContain('LOCATION:Larakin, Atlanta');
    expect(ics).toContain('END:VEVENT');
    expect(ics).toContain('END:VCALENDAR');
  });
});