#!/usr/bin/env bash

set -x

# npx @dcloudio/uvm

npm run build:h5

rm -rf ../docs/hello_login-tryout
mkdir ../docs/hello_login-tryout

cp -r dist/build/h5/* ../docs/hello_login-tryout

pushd ../docs

npm run deploy
