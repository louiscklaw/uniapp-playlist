#!/usr/bin/env bash

set -x

# sudo npm install -g @vue/cli

rm -rf helloworld-project


# vue create -p dcloudio/uni-preset-vue helloworld-project
# npx degit dcloudio/uni-preset-vue#vite my-vue3-project
vue create -p dcloudio/uni-preset-vue helloworld-project

pushd helloworld-project
  npm run dev:h5