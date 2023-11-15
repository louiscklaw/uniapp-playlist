#!/usr/bin/env bash

set -ex

# yarn add node-sass@^4
rm -rf ./node_modules

yarn -D

yarn dev:h5
