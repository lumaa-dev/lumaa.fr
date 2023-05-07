#!/usr/bin/env sh

# abort on errors
set -e
npm run build

git init
git add -A
git commit -m 'new deploy dude'

git push -f git@github.com:lumaa-dev/lumaa-dev.github.io.git main

cd -