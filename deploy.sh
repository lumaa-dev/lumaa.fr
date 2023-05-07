#!/usr/bin/env sh

# abort on errors
set -e
npm run build

git add -A
git commit -m 'new deploy dude'

git push

cd -