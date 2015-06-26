# Dockerfile
FROM quay.io/aptible/autobuild

WORKDIR /app

RUN . .aptible.env && ./node_modules/grunt-cli/bin/grunt build

EXPOSE 2000
