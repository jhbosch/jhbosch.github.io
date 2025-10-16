# GitHub Pages Deployment Guide

## Setup Instructions

### 1. Update Repository Name
In `next.config.mjs`, replace `'your-repo-name'` with your actual GitHub repository name:
\`\`\`javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-actual-repo-name' : '',
\`\`\`

For example, if your repository is `https://github.com/username/portfolio`, use:
\`\`\`javascript
basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
\`\`\`

**Note:** If you're deploying to a user/organization site (e.g., `username.github.io`), set basePath to an empty string:
\`\`\`javascript
basePath: '',
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Deploy to GitHub Pages
\`\`\`bash
npm run deploy
\`\`\`

This command will:
- Build your Next.js app as a static export
- Create an `out` directory with all static files
- Push the contents to the `gh-pages` branch

### 4. Configure GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select the `gh-pages` branch
4. Click **Save**

Your site will be available at: `https://username.github.io/your-repo-name/`

## Local Development

To run the site locally:
\`\`\`bash
npm run dev
\`\`\`

The site will be available at `http://localhost:3000`

## Troubleshooting

### Assets not loading
- Make sure you've updated the `basePath` in `next.config.mjs` with your correct repository name
- Verify that the `gh-pages` branch was created successfully

### 404 errors
- Ensure GitHub Pages is configured to use the `gh-pages` branch
- Wait a few minutes after deployment for changes to propagate

### Build errors
- Check that all dependencies are installed: `npm install`
- Verify that your Node.js version is compatible (v18 or higher recommended)
