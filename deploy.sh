yarn build
mv dist ../dist
cd ..
git clone https://github.com/piotrleniec/battleships-vue-preview.git
cd battleships-vue-preview
git checkout gh-pages
rm -rf *
mv ../dist/* .
git add -A
git config user.email 'leniec.piotr@gmail.com'
git config user.name 'Piotr Leniec'
git commit -m "Build #${CIRCLE_BUILD_NUM}"
git push origin gh-pages
