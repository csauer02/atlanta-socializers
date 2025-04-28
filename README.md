# Atlanta Socializers Club Website

This repository contains the HubSpot CMS implementation for the Atlanta Socializers Club website.

## GitHub Repository Setup

To set up this project on GitHub:

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `atlanta-socializers`
   - Description: "HubSpot CMS website for Atlanta Socializers Club"
   - Make it Public
   - Click "Create repository"

2. Push existing code to the repository:
   ```bash
   git remote add origin https://github.com/csauer02/atlanta-socializers.git
   git branch -M main
   git push -u origin main
   ```

## Project Background

The Atlanta Socializers Club was founded in June 2021 by Roger Rutkowski to create a safe space for LGBT+ and Allies to interact. The club has grown to 4.5k members with 150-300 attendees at monthly events. They also organize events at venues including the Atlanta Opera, The Intercontinental Hotel, The Kimpton Hotel, and various theaters. The club raises money for Lost and Found Youth charity, contributing over $6k in 2023 and helping secure an additional $20k in funding.

## HubSpot Deployment

For HubSpot deployment instructions, see [HUBSPOT_DEPLOYMENT_GUIDE.md](./HUBSPOT_DEPLOYMENT_GUIDE.md).

## Development

### Prerequisites

- Node.js (v14 or higher)
- HubSpot CLI

### Getting Started

1. Clone this repository:
```bash
git clone https://github.com/csauer02/atlanta-socializers.git
cd atlanta-socializers
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env`:
  ```bash
  cp .env.example .env
  ```
- Edit `.env` and add your HubSpot personal access keys:
  ```
  HUBSPOT_PROD_ACCESS_KEY=your_production_key_here
  HUBSPOT_DEV_ACCESS_KEY=your_development_key_here
  ```

4. Set up HubSpot CLI:
```bash
hs auth
```

### Running the Development Server

To start the local development server:

```bash
npm run watch
```

### Building for Production

To build the project for production:

```bash
npm run build
```

### Deploying

To deploy to the staging environment:

```bash
npm run deploy:staging
```

To deploy to the production environment:

```bash
npm run deploy
```

## Testing

### Running Tests

To run all tests:

```bash
npm test
```

### End-to-End Testing

To run Cypress E2E tests:

```bash
npm run cypress
```

### Accessibility Testing

To run accessibility tests:

```bash
npm run a11y
```

## Project Structure

- `/templates/layouts`: Contains layout templates
- `/templates/pages`: Contains page templates
- `/modules`: Contains HubSpot modules
- `/src/css`: Contains CSS files
- `/src/js`: Contains JavaScript files
- `/src/js/components`: Contains React components

## Forms

The project includes two main forms:

1. **Event RSVP Form**: For RSVPing to events
2. **Newsletter Preferences Form**: For managing newsletter preferences

## Events System

Events are implemented using HubSpot Blog functionality with custom properties:
- Time (text)
- Venue (text)
- Category (dropdown: #Socializers, #RedHat, #Midtown)
- Capacity (number)
- RSVPCount (number, calculated)