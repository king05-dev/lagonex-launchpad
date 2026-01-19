#!/usr/bin/env node

/**
 * Cloudflare Pages Deployment Script
 * 
 * This script automates the deployment of your Vite React application to Cloudflare Pages.
 * 
 * Prerequisites:
 * 1. Install Wrangler CLI: npm install -g wrangler
 * 2. Login to Cloudflare: wrangler auth login
 * 
 * Usage:
 * - Deploy to production: node deploy-cloudflare.js
 * - Deploy to preview: node deploy-cloudflare.js --preview
 * - Custom branch: node deploy-cloudflare.js --branch feature-branch
 */

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
const isPreview = args.includes('--preview');
const branchIndex = args.indexOf('--branch');
const customBranch = branchIndex !== -1 ? args[branchIndex + 1] : null;

// Configuration
const packageJson = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf8'));
const projectName = packageJson.name || 'vite-react-app';

function log(message, type = 'info') {
  const timestamp = new Date().toLocaleTimeString();
  const prefix = {
    info: '📋',
    success: '✅',
    warning: '⚠️',
    error: '❌'
  }[type];
  
  console.log(`[${timestamp}] ${prefix} ${message}`);
}

function runCommand(command, description) {
  log(`Running: ${description}`);
  try {
    const result = execSync(command, { 
      stdio: 'inherit', 
      cwd: __dirname 
    });
    return result;
  } catch (error) {
    log(`Command failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

function checkPrerequisites() {
  log('Checking prerequisites...');
  
  try {
    runCommand('wrangler --version', 'Checking Wrangler CLI');
    log('Wrangler CLI is installed', 'success');
  } catch (error) {
    log('Wrangler CLI not found. Installing...', 'warning');
    runCommand('npm install -g wrangler', 'Installing Wrangler CLI');
  }
  
  try {
    runCommand('wrangler whoami', 'Checking authentication');
    log('Authenticated with Cloudflare', 'success');
  } catch (error) {
    log('Not authenticated with Cloudflare. Please run: wrangler auth login', 'error');
    process.exit(1);
  }
}

function buildProject() {
  log('Building project for production...');
  runCommand('npm run build', 'Building Vite application');
  log('Build completed successfully', 'success');
}

function deployToCloudflare() {
  const branch = customBranch || (isPreview ? 'preview' : 'main');
  const deploymentType = isPreview ? 'preview' : 'production';
  
  log(`Deploying to ${deploymentType} (branch: ${branch})...`);
  
  const deployCommand = `wrangler pages deploy dist --project-name=${projectName} --branch=${branch}`;
  
  if (isPreview) {
    runCommand(`${deployCommand} --preview`, 'Deploying to preview');
  } else {
    runCommand(deployCommand, 'Deploying to production');
  }
  
  log('Deployment completed successfully!', 'success');
}

function getDeploymentUrl() {
  try {
    const result = execSync(`wrangler pages project list --format=json`, { 
      encoding: 'utf8', 
      cwd: __dirname 
    });
    const projects = JSON.parse(result);
    const project = projects.find(p => p.name === projectName);
    
    if (project) {
      log(`Project URL: https://${project.subdomain}.pages.dev`);
      if (isPreview) {
        log(`Preview deployments available at: https://${project.subdomain}.pages.dev`);
      }
    }
  } catch (error) {
    log('Could not retrieve project URL', 'warning');
  }
}

// Main deployment process
function main() {
  log('Starting Cloudflare Pages deployment...');
  log(`Project: ${projectName}`);
  log(`Mode: ${isPreview ? 'Preview' : 'Production'}`);
  if (customBranch) log(`Branch: ${customBranch}`);
  
  try {
    checkPrerequisites();
    buildProject();
    deployToCloudflare();
    getDeploymentUrl();
    
    log('Deployment process completed! 🚀', 'success');
  } catch (error) {
    log(`Deployment failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Handle process interruption
process.on('SIGINT', () => {
  log('Deployment interrupted by user', 'warning');
  process.exit(0);
});

// Run the deployment
main();
