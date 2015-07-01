# Dockerfile
FROMCACHE webapp-essential-pb-support
FROM quay.io/aptible/webapp-essential

ADD . /opt/pb-support
WORKDIR /opt/pb-support

RUN bundle install --without development test
RUN npm install
RUN npm install -g bower
RUN bower cache clean --allow-root && bower install --allow-root
RUN npm install -g grunt-cli
RUN grunt build

EXPOSE 2000
