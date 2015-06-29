# Dockerfile
FROM quay.io/aptible/autobuild

WORKDIR /app

env PATH /app/.heroku/node/bin:$PATH
env PATH /app/.heroku/ruby/bin:$PATH
RUN ./node_modules/grunt-cli/bin/grunt build

EXPOSE 2000
