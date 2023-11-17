
# 電商系統

## requirement
  - java : open jdk 11
  - maven : `dnf install maven`

## useful notes
  - /workspace/uniapp-playlist/emall/macrozheng/mall/document/reference/dev_flow.md

## page hierchy

### 首页
- 仪表盘
- 学习教程
- 视频教程

### 商品

- 商品列表
- 添加商品
- 商品分类
- 商品类型
- 品牌管理

### 订单

- 订单列表
- 订单设置
- 退货申请处理
- 退货原因设置

### 营销

- 秒杀活动列表
- 优惠券列表
- 品牌推荐
- 新品推荐
- 人气推荐
- 专题推荐
- 广告列表

### 权限

- 用户列表
- 角色列表
- 菜单列表
- 资源列表


## Main website
  - https://www.macrozheng.com
  - demo
    - 小程序: https://www.macrozheng.com/app

## setup procedure
  - setup rabbitmq
    - website: http://192.168.10.232:15672
    - user: mall
    - pass: mall
    - virtualhost: mall

  - setup  MinIO
    - website: http://192.168.10.232:9090
    - minioadmin:minioadmin

    - config path: /workspace/uniapp-playlist/emall/macrozheng/mall/mall-admin/src/main/resources/application-prod.yml

  - elastic search
    - `sysctl -w vm.max_map_count=262144`

  - profile selection:
    - /workspace/uniapp-playlist/emall/macrozheng/mall/pom.xml
      - Dspring.profiles.active=dev

  - kibana
    - management address: http://localhost:5601/app/home

## Repository
  - https://gitee.com/macrozheng/mall
  - https://github.com/YunaiV/ruoyi-vue-pro
    - https://doc.iocoder.cn/feature/

  - 使用Maven插件为SpringBoot应用构建Docker镜像 
    - https://juejin.cn/post/6844903870603198472

  - admin
    - http://localhost:8090
      - username: admin
      - password: macro123

  - portal (mall-app-web)
    - 


## Backend
  - Spring root

## Frontend
  - Vue


hello default 
  - minimum using node 18

source code of mall 
  - minimum using node ??
    - node-sass (node14 confirmed working in other project)
  

uniapp and scss
  - uniapp wants nodejs 20
  - node-scss wants nodejs 14
  
  - nodejs 20
    - not working
      - blame: Error: Cannot find module 'node-sass'

  - nodejs 18
    - not working
  - nodejs 16
  - nodejs 14
    - cannot run uniapp, but it should be possible to run node-sass
    - ERROR  TypeError: Cannot convert undefined or null to object
  - nodejs 12


# References:
  - [/workspace/uniapp-playlist/emall/macrozheng/notes.md](/workspace/uniapp-playlist/emall/macrozheng/notes.md)
