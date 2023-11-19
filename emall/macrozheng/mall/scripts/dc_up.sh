#!/usr/bin/env bash

# sudo chmod 777 -R ./mydata
# rm -rf ./mydata/mysql/data/*

#mkdir -p ./mydata/logstash/logstash.conf
#chmod 777 -R ./mydata/logstash/logstash.conf

mkdir -p ./mydata/elasticsearch
sudo chmod 777 -R ./mydata/elasticsearch
rm -rf /workspace/uniapp-playlist/emall/macrozheng/mall/mydata/elasticsearch/data/*


mkdir -p ./mydata/minio
sudo chmod 777 -R ./mydata/minio

mkdir -p ./mydata/mongo
sudo chmod 777 -R ./mydata/mongo

mkdir -p ./mydata/mysql
sudo chmod 777 -R ./mydata/mysql

mkdir -p ./mydata/nginx
sudo chmod 777 -R ./mydata/nginx

# rabbotmq
# rm -rf ./mydata/rabbitmq/data
# mkdir -p ./mydata/rabbitmq/data
# chmod 777 -R ./mydata/rabbitmq/data

mkdir -p ./mydata/redis/data
# chmod 777 -R ./mydata/redis/data

# ln -s docker-compose-env.yml docker-compose.yml
docker compose -f docker-compose-env.yml pull

docker compose -f docker-compose-env.yml build

docker compose -f docker-compose-env.yml up -d --force-recreate --remove-orphans
# docker compose -f docker-compose-env.yml up -d mysql
# docker compose logs -f  mall-portal
# docker compose logs -f  elasticsearch
# mall-search
# docker compose logs -f  elasticsearch kibana logstash

# mall-search 
 
# sleep 1

# docker cp document/sql/tbl*.sql mysql:/
# docker cp ./document/sql/tbl_cms.sql mysql:/
# docker cp ./document/sql/tbl_oms.sql mysql:/
# docker cp ./document/sql/tbl_pms.sql mysql:/
# docker cp ./document/sql/tbl_sms.sql mysql:/
# docker cp ./document/sql/tbl_ums.sql mysql:/

# docker compose exec -it mysql /bin/bash
# docker compose logs -f mysql

# #进入mysql容器
# docker compose exec -it mysql /bin/bash

# #连接到mysql服务
# mysql -uroot -proot --default-character-set=utf8

# #创建远程访问用户
# CREATE USER 'reader'@'%' IDENTIFIED WITH authentication_plugin BY '123456';

# grant all privileges on *.* to 'reader'@'%';
# #创建mall数据库
# create database mall character set utf8;

# #使用mall数据库
# use mall;

# #导入mall.sql脚本
# source /mall.sql; (abonded)
# source /tbl_cms.sql;
# source /tbl_oms.sql;
# source /tbl_pms.sql;
# source /tbl_sms.sql;
# source /tbl_ums.sql;
