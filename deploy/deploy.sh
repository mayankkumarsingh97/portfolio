#!/bin/bash

git init
git remote add origin https://github.com/mayankkumarsingh97/portfolio.git
git checkout -b gh-pages
git add .
git commit -m "Deploy React build"
git push -f origin gh-pages
