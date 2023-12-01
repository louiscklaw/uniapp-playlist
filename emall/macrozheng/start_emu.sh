#!/usr/bin/env bash

set -ex

# http://192.168.10.232:8088/uniapp-playlist/hello_default-tryout/

# ./Android/Sdk/emulator/emulator
pushd ~/Android/Sdk/emulator
  ./emulator -avd Pixel_6a_API_30
popd
