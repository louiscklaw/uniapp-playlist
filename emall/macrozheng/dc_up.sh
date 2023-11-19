#!/usr/bin/env bash

set -ex

# for elastic search
sudo sysctl -w vm.max_map_count=262144

pushd mall
  ./scripts/dc_up.sh
popd

docker compose pull
docker compose build

docker compose kill
docker compose down

docker compose up -d --force-recreate

# docker compose logs -f mall-app-web

cd mall
  docker compose logs -f mall-search elasticsearch
