#!/usr/bin/env bash

set -ex

sudo chown 1000:1000 -R . 

find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
