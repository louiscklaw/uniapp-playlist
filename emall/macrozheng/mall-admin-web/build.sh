#!/usr/bin/env bash

set -ex

rm -rf package-lock.json
rm -rf node_modules

# npm install -g --unsafe-perm node-sass
npm i -D

npm run build
