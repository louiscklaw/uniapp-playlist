#!/usr/bin/env bash

set -x

# npx @dcloudio/uvm

npm run build:h5

rm -rf ../docs/hello-uni-app-tryout
mkdir ../docs/hello-uni-app-tryout

cp -r dist/build/h5/* ../docs/hello-uni-app-tryout

pushd ../docs

npm run deploy
