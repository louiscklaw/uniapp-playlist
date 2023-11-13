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

rm -rf hello_default-tryout

# vue create -p dcloudio/uni-preset-vue hello_default-tryout
# npx degit dcloudio/uni-preset-vue#vite my-vue3-project
vue create -p dcloudio/uni-preset-vue hello_default-tryout

pushd hello_default-tryout
  npm run dev:h5
  