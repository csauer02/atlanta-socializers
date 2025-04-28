# HubSpot Deployment Guide

## Authentication Issues

We've encountered authentication issues with the HubSpot CLI. This is a common issue that can happen when:
1. The personal access key is invalid or has expired
2. The API has changed or there are permission issues
3. There are conflicting configuration files

## Steps to Deploy to HubSpot

### Option 1: Try re-authenticating with the CLI

1. First, clear all existing config files:
   ```bash
   rm -f hubspot.config.yml ~/.hscli/config.yml .hubspot/hubspot.config.yml
   ```

2. Initialize a new configuration:
   ```bash
   hs init
   ```
   
3. When prompted, enter your Portal ID (242637285 for dev sandbox or 242409507 for production)

4. The HubSpot CLI will open a browser window where you need to log in and authorize the CLI

5. Once authenticated, try uploading again:
   ```bash
   hs upload .
   ```

### Option 2: Use HubSpot Developer Tools

If the CLI continues to have issues, you can use the HubSpot Developer Tools in your browser:

1. Package your theme:
   ```bash
   cd /Users/chrissauer/Code/Socializers/atlanta-socializers
   zip -r atlanta-socializers-theme.zip templates/ modules/ images/ src/ fields.json theme.json
   ```

2. Log in to your HubSpot account:
   - Dev Sandbox: https://app.hubspot.com/login/242637285
   - Production: https://app.hubspot.com/login/242409507

3. Navigate to:
   - Marketing > Website > Website Pages
   - Click on "Design Tools" in the left sidebar

4. Upload your theme:
   - Click on "Themes" tab
   - Click "Create" > "Upload a theme"
   - Upload the zip file you created

### Option 3: Use the HubSpot Developer Migration Tool

HubSpot has a migration tool specifically for developers:

1. Log in to your HubSpot account
2. Go to https://app.hubspot.com/developer-migrate/242637285
3. Follow the prompts to upload your theme files

## After Deploying Your Theme

Once your theme is uploaded, you'll need to:

1. **Create Website Pages**:
   - Go to Marketing > Website > Website Pages
   - Click "Create" > "Website Page"
   - Select your "Atlanta Socializers Club" theme
   - Choose the appropriate template for each page

2. **Set Up Forms**:
   - Go to Marketing > Lead Capture > Forms
   - Create the RSVP and Newsletter forms
   - Update your templates to use the correct form IDs

3. **Set Up the Events Blog**:
   - Go to Marketing > Website > Blog
   - Create a new "Events" blog
   - Configure it with the custom properties defined in the specification

4. **Configure Workflows**:
   - Go to Automation > Workflows
   - Create workflows for RSVP confirmations and newsletter preferences

## Updating Your Theme

After making changes to your theme locally, you'll need to:

1. Re-package your theme:
   ```bash
   zip -r atlanta-socializers-theme.zip templates/ modules/ images/ src/ fields.json theme.json
   ```

2. Upload the updated theme:
   - Go to Design Tools > Themes
   - Find your theme
   - Click "More" > "Upload theme update"
   - Upload the new zip file