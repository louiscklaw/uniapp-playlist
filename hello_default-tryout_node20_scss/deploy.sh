#!/usr/bin/env bash

set -x

# npx @dcloudio/uvm

npm run build:h5

rm -rf ../docs/hello_default-tryout
mkdir ../docs/hello_default-tryout

cp -r dist/build/h5/* ../docs/hello_default-tryout

pushd ../docs

npm run deploy
