# Manual Deployment Instructions

Since we're encountering issues with the HubSpot CLI authentication, here are manual steps to deploy the website:

## Deploying to HubSpot Manually

1. **Go to HubSpot Design Tools**:
   - Log in to your HubSpot account (Dev Sandbox: 242637285)
   - Navigate to Marketing > Website > Website Pages
   - Click on "Design Tools" in the left sidebar

2. **Create a New Theme**:
   - Click on "Themes" tab
   - Click "Create" > "Upload a theme"
   - Zip the following folders and files from your project:
     ```
     templates/
     modules/
     images/
     src/
     fields.json
     theme.json
     ```
   - Use the zip command: 
     ```
     cd /Users/chrissauer/Code/Socializers/atlanta-socializers
     zip -r atlanta-socializers-theme.zip templates/ modules/ images/ src/ fields.json theme.json
     ```
   - Upload the resulting zip file to HubSpot

3. **Create Website Pages**:
   - After the theme is uploaded, go to Marketing > Website > Website Pages
   - Click "Create" > "Website Page"
   - Select your uploaded "Atlanta Socializers Club" theme
   - Choose the appropriate template (e.g., "Home" for the homepage)
   - Edit and publish the page

4. **Set Up Forms**:
   - Go to Marketing > Lead Capture > Forms
   - Create the forms as specified in the project requirements:
     - Event RSVP Form
     - Newsletter Preferences Form

5. **Set Up Events Blog**:
   - Go to Marketing > Website > Blog
   - Create a new "Events" blog
   - Customize properties as specified in the project requirements

## After Deployment

Once deployed, you'll need to connect the components:

1. Update the form IDs in your templates to match the actual HubSpot form IDs
2. Configure workflows in HubSpot for RSVP confirmation and newsletter preferences
3. Set up social media integrations
4. Create sample events in your events blog

This manual approach should work regardless of any CLI authentication issues you're experiencing.