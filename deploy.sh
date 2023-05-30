
set -e
npm run build

today=$(date +'%d/%m/%Y - %T')

git add -A
git commit -m "Build from ${today}"

git push origin main
exit