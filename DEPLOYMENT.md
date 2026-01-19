# Cloudflare Pages Deployment Guide

This guide explains how to deploy your Vite React application to Cloudflare Pages using the automated deployment script.

## Prerequisites

1. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate with Cloudflare**
   ```bash
   wrangler auth login
   ```

3. **Verify Authentication**
   ```bash
   wrangler whoami
   ```

## Quick Start

### Deploy to Production
```bash
npm run deploy
```

### Deploy to Preview
```bash
npm run deploy:preview
```

### Deploy to Custom Branch
```bash
npm run deploy:branch feature-branch
```

## Available Scripts

- `npm run deploy` - Deploy to production (main branch)
- `npm run deploy:preview` - Deploy to preview environment
- `npm run deploy:branch <branch-name>` - Deploy to specific branch

## Configuration Files

### `wrangler.toml`
Contains Cloudflare Pages project configuration including:
- Project name and environments
- Build settings
- Environment variables
- KV namespaces, D1 databases, R2 buckets (if needed)

### `.env.example`
Template for environment variables. Copy to `.env.local` for local development.

### `deploy-cloudflare.js`
Automated deployment script that:
- Checks prerequisites (Wrangler installation, authentication)
- Builds the project
- Deploys to Cloudflare Pages
- Provides deployment URLs

## Environment Variables

### Local Development
1. Copy `.env.example` to `.env.local`
2. Update variables as needed
3. Variables are automatically loaded during build

### Production
Set environment variables in Cloudflare Dashboard:
1. Go to Cloudflare Pages dashboard
2. Select your project
3. Go to Settings → Environment variables
4. Add your variables

Or via Wrangler CLI:
```bash
wrangler secret put VITE_API_URL
```

## Custom Domain Setup

1. **Update `wrangler.toml`**
   ```toml
   [env.production]
   routes = [
     { pattern = "your-domain.com/*", zone_name = "your-domain.com" }
   ]
   ```

2. **Add Custom Domain in Cloudflare Dashboard**
   - Go to Pages → Your project → Custom domains
   - Add your domain

3. **Update DNS**
   - Add CNAME record pointing to your Pages project

## Advanced Configuration

### KV Namespaces
For key-value storage:
```toml
[[kv_namespaces]]
binding = "MY_KV_NAMESPACE"
id = "your-kv-namespace-id"
preview_id = "your-preview-kv-namespace-id"
```

### D1 Databases
For SQL databases:
```toml
[[d1_databases]]
binding = "DB"
database_name = "my-database"
database_id = "your-database-id"
```

### R2 Buckets
For object storage:
```toml
[[r2_buckets]]
binding = "MY_BUCKET"
bucket_name = "my-bucket"
```

## Troubleshooting

### Common Issues

1. **Authentication Error**
   ```bash
   wrangler auth login
   ```

2. **Build Failures**
   - Check `npm run build` locally first
   - Verify all dependencies are installed
   - Check for environment variable issues

3. **Deployment Timeout**
   - Increase build timeout in `wrangler.toml`
   - Optimize build process

### Debug Mode
Run the script with additional logging:
```bash
DEBUG=* node deploy-cloudflare.js
```

## CI/CD Integration

### GitHub Actions
```yaml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Deploy to Cloudflare Pages
        run: npm run deploy
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
```

### GitLab CI
```yaml
deploy:
  stage: deploy
  script:
    - npm ci
    - npm run deploy
  only:
    - main
```

## Best Practices

1. **Always test locally** before deploying
2. **Use preview deployments** for testing changes
3. **Keep environment variables** out of version control
4. **Monitor deployment logs** for issues
5. **Use semantic versioning** for releases

## Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Vite Documentation](https://vitejs.dev/)
