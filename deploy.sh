#!/bin/bash

# Build the project
npm run build

# Create .nojekyll file
touch out/.nojekyll

# Initialize gh-pages branch
git checkout --orphan gh-pages
git reset --hard
git add out/* -f
git mv out/* .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

# Return to main branch
git checkout main 