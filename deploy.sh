git push origin master &&

git checkout gh-pages &&

GIT_MERGE_AUTOEDIT=no git merge master &&

rm -rf dist &&

npm run build &&

git push origin gh-pages &&

git checkout master