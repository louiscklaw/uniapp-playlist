#!/usr/bin/env bash

set -x

# sudo npm install -g @vue/cli

rm -rf hello-uni-app-tryout


# vue create -p dcloudio/uni-preset-vue hello-uni-app-tryout
# npx degit dcloudio/uni-preset-vue#vite my-vue3-project
vue create -p dcloudio/uni-preset-vue hello-uni-app-tryout

pushd hello-uni-app-tryout
  npm run dev:h5