#!/usr/bin/env bash

set -x

# sudo npm install -g @vue/cli

#   默认模板 
#   默认模板(TypeScript) 
#   Hello uni-app 
#   前后一体登录模板 
#   看图模板 
# ❯ 新闻/资讯类模板 
#   自定义模板 

rm -rf hello_news-tryout


# vue create -p dcloudio/uni-preset-vue hello_news-tryout
# npx degit dcloudio/uni-preset-vue#vite my-vue3-project
vue create -p dcloudio/uni-preset-vue hello_news-tryout

pushd hello_news-tryout
  npm run dev:h5