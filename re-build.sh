#!/bin/bash

npm cache verify && npm ci || npm install && npm run build
