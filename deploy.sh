git push origin master &&

git checkout -b gh-pages &&

git merge master &&

rm -rf dist &&

npm run build &&

git add . && git commit -m "new build" && git push origin gh-pages

git checkout master