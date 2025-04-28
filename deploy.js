#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Portal IDs are safe to commit, but access keys should be kept private
const PROD_PORTAL_ID = '242409507';
const DEV_PORTAL_ID = '242637285';

// Use environment variables for secrets instead of hardcoding them
// You'll need to set these environment variables before running the script
// Example: export HUBSPOT_PROD_ACCESS_KEY="your-key-here"
const PROD_ACCESS_KEY = process.env.HUBSPOT_PROD_ACCESS_KEY || '';
const DEV_ACCESS_KEY = process.env.HUBSPOT_DEV_ACCESS_KEY || '';

// Parse command line arguments
const args = process.argv.slice(2);
const isDev = args.includes('--dev') || args.includes('-d');
const portalId = isDev ? DEV_PORTAL_ID : PROD_PORTAL_ID;
const accessKey = isDev ? DEV_ACCESS_KEY : PROD_ACCESS_KEY;
const environment = isDev ? 'Development Sandbox' : 'Production';

console.log(`Deploying to ${environment} environment (Portal ID: ${portalId})...`);

// Check for existing config files and remove them
const configPaths = [
  path.join(__dirname, 'hubspot.config.yml'),
  path.join(__dirname, '.hubspot', 'hubspot.config.yml'),
  path.join(__dirname, 'temp-hubspot.config.yml')
];

for (const configPath of configPaths) {
  if (fs.existsSync(configPath)) {
    console.log(`Removing existing config file at ${configPath}`);
    fs.unlinkSync(configPath);
  }
}

// Create temporary config file
try {
  // Check if access key is available
  if (!accessKey) {
    console.error(`Error: HubSpot access key for ${environment} is not set.`);
    console.error(`Please set the ${isDev ? 'HUBSPOT_DEV_ACCESS_KEY' : 'HUBSPOT_PROD_ACCESS_KEY'} environment variable.`);
    console.error('Example: export HUBSPOT_DEV_ACCESS_KEY="your-key-here"');
    process.exit(1);
  }

  // Use a temporary config file
  const tempConfigFile = path.join(__dirname, '.hubspot-temp.yml');
  const configContent = `
defaultPortal: temp
portals:
  - name: temp
    portalId: ${portalId}
    authType: personalaccesskey
    personalAccessKey: ${accessKey}
`;

  fs.writeFileSync(tempConfigFile, configContent);
  console.log(`Created temporary config file at ${tempConfigFile}`);

  // Execute the upload command
  const uploadDir = path.resolve(__dirname);
  console.log(`Uploading files from ${uploadDir}`);
  
  const command = `cd "${__dirname}" && hs upload . atlantasocializers --config=${tempConfigFile}`;
  console.log(`Executing upload command...`);
  
  const result = execSync(command, {
    stdio: 'inherit'
  });
  
  console.log('Deployment completed successfully!');
  
  // Clean up temp file
  fs.unlinkSync(tempConfigFile);
} catch (error) {
  console.error('Deployment failed:', error.message);
  
  // Clean up temp file in case of error
  const tempConfigFile = path.join(__dirname, '.hubspot-temp.yml');
  if (fs.existsSync(tempConfigFile)) {
    fs.unlinkSync(tempConfigFile);
  }
}