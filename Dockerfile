FROM circleci/node:14.16.0
COPY project/ project/
USER root

RUN apt-get install vim

WORKDIR /project/
RUN yarn install
