# Dockerfile
FROM quay.io/aptible/autobuild

RUN \
  apt-get update && \
  apt-get install -y ruby ruby-dev ruby-bundler

EXPOSE 4000
