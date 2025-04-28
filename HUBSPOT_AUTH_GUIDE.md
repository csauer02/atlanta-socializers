# HubSpot Authentication Guide

To authenticate your HubSpot CLI with both your production and sandbox accounts, follow these steps:

## Step 1: Generate Personal Access Keys

1. Go to your HubSpot account settings:
   - Production account (242409507): https://app.hubspot.com/personal-access-key/242409507
   - Dev Sandbox account (242637285): https://app.hubspot.com/personal-access-key/242637285

2. For each account, click "Create personal access key"
3. Give each key a name (e.g., "CLI Access - Production" and "CLI Access - Dev Sandbox")
4. Select the necessary scopes (at minimum you'll need "Content" scopes for CMS operations)
5. Click "Create key" and copy the generated keys to a secure location

## Step 2: Configure HubSpot CLI

### Option 1: Using the CLI commands

Run these commands to authenticate both accounts:

```bash
# Authenticate with your production account
hs auth --account=242409507
# When prompted, paste your production account personal access key

# Then add your sandbox account
hs auth --account=242637285 --name=dev-sandbox
# When prompted, paste your sandbox account personal access key
```

### Option 2: Manual configuration file setup

1. Create a file at `.hubspot/hubspot.config.yml` with the following content:

```yaml
defaultPortal: production
portals:
  - name: production
    portalId: 242409507
    authType: personalaccesskey
    personalAccessKey: YOUR_PRODUCTION_PERSONAL_ACCESS_KEY_HERE
  - name: dev-sandbox
    portalId: 242637285
    authType: personalaccesskey
    personalAccessKey: YOUR_SANDBOX_PERSONAL_ACCESS_KEY_HERE
```

2. Replace the placeholder values with your actual personal access keys

## Step 3: Verify Configuration

To confirm your configuration is working:

```bash
hs account list
```

You should see both accounts listed, with the production account marked as default.

## Using Different Accounts for Commands

To use a specific account for a command, use the `--account` flag:

```bash
# Deploy to production
hs upload atlanta-socializers --account=production

# Deploy to sandbox
hs upload atlanta-socializers --account=dev-sandbox
```

Or use the shorthand script commands in package.json:

```bash
# Deploy to production
npm run deploy

# Deploy to sandbox
npm run deploy:staging
```