# GitHub Repository Guide

This guide explains how to work with the GitHub repository for the Atlanta Socializers Club website.

## Repository Information

- **Repository URL**: https://github.com/csauer02/atlanta-socializers
- **Branch**: main

## Working with the Repository

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/csauer02/atlanta-socializers.git
   cd atlanta-socializers
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` and add your HubSpot personal access keys

3. Install dependencies:
   ```bash
   npm install
   ```

### Common Git Commands

- Check status of your local changes:
  ```bash
  git status
  ```

- Add changes to staging:
  ```bash
  git add .
  ```

- Create a commit:
  ```bash
  git commit -m "Your commit message"
  ```

- Push changes to GitHub:
  ```bash
  git push
  ```

- Pull latest changes from GitHub:
  ```bash
  git pull
  ```

### Branching Strategy

For new features or bug fixes, create a new branch:

1. Create and switch to a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "Add your feature"
   ```

3. Push the branch to GitHub:
   ```bash
   git push -u origin feature/your-feature-name
   ```

4. Create a pull request on GitHub to merge your changes into the main branch.

## Security Best Practices

- **Never commit sensitive information** such as API keys, passwords, or tokens
- Always use environment variables for sensitive data
- Check your code for secrets before committing
- Add any new environment variables to `.env.example` (without real values)
- Make sure any new configuration files with sensitive data are listed in `.gitignore`

## Continuous Integration/Deployment

Currently, the project is manually deployed to HubSpot using the deploy script. To deploy:

1. Set the required environment variables:
   ```bash
   export HUBSPOT_DEV_ACCESS_KEY="your-dev-key"
   export HUBSPOT_PROD_ACCESS_KEY="your-prod-key"
   ```

2. Run the deployment script:
   - For development environment:
     ```bash
     node deploy.js --dev
     ```
   - For production environment:
     ```bash
     node deploy.js
     ```