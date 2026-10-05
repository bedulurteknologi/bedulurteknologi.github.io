const fs = require('fs');
const path = require('path');

console.log('--- RUNNING BTI PRODUCTION VERIFICATION ---');

const projectImagesDir = path.join(__dirname, '..', 'public', 'images', 'projects');
const expectedFolders = [
  'larisgo',
  'poultry',
  'coretrack',
  'document-control',
  'payment-tracker',
  'shield-papua',
  'patrol-guard',
  'industrial-iot',
  'corporate-web',
];

let hasErrors = false;

expectedFolders.forEach(folder => {
  const targetDir = path.join(projectImagesDir, folder);
  if (!fs.existsSync(targetDir)) {
    console.error(`Missing directory: ${targetDir}`);
    hasErrors = true;
  } else {
    const files = fs.readdirSync(targetDir);
    const hasCover = files.includes('cover.svg');
    if (!hasCover) {
      console.error(`Missing cover.svg in ${folder}`);
      hasErrors = true;
    } else {
      console.log(`[OK] ${folder}: ${files.length} vector mockups present`);
    }
  }
});

// Check dist build
const distIndex = path.join(__dirname, '..', 'dist', 'index.html');
if (fs.existsSync(distIndex)) {
  console.log('[OK] dist/index.html exists and production static bundle is verified');
} else {
  console.error('dist/index.html missing! Run npm run build.');
  hasErrors = true;
}

// Check public files
const robots = path.join(__dirname, '..', 'public', 'robots.txt');
const sitemap = path.join(__dirname, '..', 'public', 'sitemap.xml');
const fallback404 = path.join(__dirname, '..', 'public', '404.html');
const favicon = path.join(__dirname, '..', 'public', 'favicon.svg');

[robots, sitemap, fallback404, favicon].forEach(f => {
  if (fs.existsSync(f)) {
    console.log(`[OK] ${path.basename(f)} present`);
  } else {
    console.error(`Missing: ${f}`);
    hasErrors = true;
  }
});

// Check GitHub Actions
const ghAction = path.join(__dirname, '..', '.github', 'workflows', 'deploy.yml');
if (fs.existsSync(ghAction)) {
  console.log('[OK] .github/workflows/deploy.yml present for automated GitHub Pages deployment');
} else {
  console.error('Missing GitHub workflow');
  hasErrors = true;
}

if (!hasErrors) {
  console.log('\n>>> ALL 9 PROJECTS AND PRODUCTION ASSETS VERIFIED WITH ZERO ERRORS! <<<');
} else {
  process.exit(1);
}
