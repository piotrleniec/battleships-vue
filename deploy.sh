yarn build
mv dist ../dist
cd ..
git clone https://github.com/piotrleniec/battleships-vue-preview.git
cd battleships-vue-preview
git checkout gh-pages
mv ../dist/* .
git add -A
git config user.email 'leniec.piotr@gmail.com'
git config user.name 'Piotr Leniec'
git commit -m 'Deployment'
git push origin gh-pages
