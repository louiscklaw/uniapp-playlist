#!/usr/bin/env bash

set -x

# wait for mall-portal
./wait-for-it.sh 192.168.10.232:8085

yarn -D

yarn dev:h5
