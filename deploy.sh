git push origin master &&

git checkout gh-pages &&

git merge -m master &&

rm -rf dist &&

npm run build &&

git add . && git commit -m "new build" && git push origin gh-pages &&

git checkout master