#!/usr/bin/env sh

ROOT=$(pwd)

yarn build

cd applets/app1 && yarn && yarn build --dest $ROOT/dist/applets/app1
cd $ROOT

cd applets/app2 && yarn && yarn build --dest $ROOT/dist/applets/app2
cd $ROOT
