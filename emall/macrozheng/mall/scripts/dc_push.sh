#!/usr/bin/env bash

set -ex

docker tag mall/mall-admin:1.0-SNAPSHOT 192.168.10.61:5000/mall/mall-admin:1.0-SNAPSHOT
docker push 192.168.10.61:5000/mall/mall-admin:1.0-SNAPSHOT


docker tag mall/mall-portal:1.0-SNAPSHOT 192.168.10.61:5000/mall/mall-portal:1.0-SNAPSHOT
docker push 192.168.10.61:5000/mall/mall-portal:1.0-SNAPSHOT &


docker tag mall/mall-search:1.0-SNAPSHOT 192.168.10.61:5000/mall/mall-search:1.0-SNAPSHOT
docker push 192.168.10.61:5000/mall/mall-search:1.0-SNAPSHOT &

wait 