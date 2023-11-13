#!/usr/bin/env bash

set -x

# npx @dcloudio/uvm

npm run build:h5

rm -rf ../docs/hello_news-tryout
mkdir ../docs/hello_news-tryout

cp -r dist/build/h5/* ../docs/hello_news-tryout

pushd ../docs

npm run deploy
