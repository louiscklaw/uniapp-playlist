#!/usr/bin/env bash

set -ex

# npx @dcloudio/uvm

# inside docker
rm -rf /root/.npm
rm -rf ./node_modules
rm -rf ./package-lock.json

node -v

npm i -D
npm i --save html-webpack-plugin
npm i --save cssnano

npm run build

node -v
