
set -e
npm run build

git add -A
git commit -m 'New deploy'

git push origin main