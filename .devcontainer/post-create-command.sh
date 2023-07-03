#!/usr/bin/env bash

set -ex

npm install gulp-cli yo @microsoft/generator-sharepoint --global
pnpm install
# git config --global --add safe.directory ${containerWorkspaceFolder}