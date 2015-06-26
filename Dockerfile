# Dockerfile
FROM quay.io/aptible/autobuild

RUN ./node_modules/grunt-cli/bin/grunt build

EXPOSE 2000
