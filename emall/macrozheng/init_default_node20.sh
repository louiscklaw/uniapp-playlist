#!/usr/bin/env bash

set -x

# sudo npm install -g @vue/cli

# ❯ 默认模板 
#   默认模板(TypeScript) 
#   Hello uni-app 
#   前后一体登录模板 
#   看图模板 
#   新闻/资讯类模板 
#   自定义模板 

rm -rf app-test-migrate

# vue create -p dcloudio/uni-preset-vue app-test-migrate
# npx degit dcloudio/uni-preset-vue#vite my-vue3-project
vue create -p dcloudio/uni-preset-vue app-test-migrate

chown 1000:1000 -R app-test-migrate

pushd app-test-migrate
  # npm i --save-dev node-sass@^4
  npm run dev:h5
  