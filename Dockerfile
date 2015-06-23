# Dockerfile
FROM quay.io/aptible/autobuild

# install ruby dependencies
RUN apt-get update && apt-get install -y \
      build-essential \
      zlib1g-dev \
      libssl-dev \
      libreadline6-dev \
      libyaml-dev

# install ruby from source and cleanup afterward (from murielsalvan/ruby)
ADD http://cache.ruby-lang.org/pub/ruby/2.1/ruby-2.1.5.tar.gz /tmp/
RUN cd /tmp && \
      tar -xzf ruby-2.1.5.tar.gz && \
      cd ruby-2.1.5 && \
      ./configure && \
      make && \
      make install && \
      cd .. && \
      rm -rf ruby-2.1.5 && \
      rm -f ruby-2.1.5.tar.gz

EXPOSE 4000
