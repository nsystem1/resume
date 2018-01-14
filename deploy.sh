git push origin master &&

git checkout gh-pages &&

GIT_MERGE_AUTOEDIT=no git merge master &&

rm -rf dist && rm -rf resume.pdf &&

npm run build && babel-node make-pdf.js &&

git add . && git commit -m "new build" && git push origin gh-pages &&

git checkout master