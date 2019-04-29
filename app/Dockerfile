FROM node:10
MAINTAINER Alex Torres  alex_torres@outlook.com alex@ideaup.cl

#Alex: environment variables received in build-time
ARG ARG_NODE_ENV
ARG ARG_PORT_EXPOSE
ARG ARG_PORT_CONTAINER
ARG ARG_PORT_HOST
ARG ARG_PORT_DEBUG_CONTAINER
ARG ARG_PORT_DEBUG_HOST
ARG ARG_WORKING_DIR
ARG ARG_CONTAINER_NAME
ARG ARG_CONTAINER_IMAGE_ID
ARG ARG_VOLUME_HOST
ARG ARG_VOLUME_CONTAINER
ARG ARG_SENTRY
ARG ARG_TOKEN_AUDIENCE
ARG ARG_TOKEN_SUBJECT
ARG ARG_TOKEN_ISSUER
ARG ARG_TOKEN_TTL
ARG ARG_TOKEN_ALGORITHM
ARG ARG_TOKEN_SECRET

ENV NODE_ENV ${ARG_NODE_ENV}
ENV PORT_EXPOSE ${ARG_PORT_EXPOSE}
ENV PORT_CONTAINER ${ARG_PORT_CONTAINER}
ENV PORT_HOST ${ARG_PORT_HOST}
ENV PORT_DEBUG_CONTAINER ${ARG_PORT_DEBUG_CONTAINER}
ENV PORT_DEBUG_HOST ${ARG_PORT_DEBUG_HOST}
ENV WORKING_DIR ${ARG_WORKING_DIR}
ENV CONTAINER_NAME ${ARG_CONTAINER_NAME}
ENV CONTAINER_IMAGE_ID ${ARG_CONTAINER_IMAGE_ID}
ENV VOLUME_HOST ${ARG_VOLUME_HOST}
ENV VOLUME_CONTAINER ${ARG_VOLUME_CONTAINER}
ENV SENTRY ${ARG_SENTRY}
ENV TOKEN_AUDIENCE ${ARG_TOKEN_AUDIENCE}
ENV TOKEN_SUBJECT ${ARG_TOKEN_SUBJECT}
ENV TOKEN_ISSUER ${ARG_TOKEN_ISSUER}
ENV TOKEN_TTL ${ARG_TOKEN_TTL}
ENV TOKEN_ALGORITHM ${ARG_TOKEN_ALGORITHM}
ENV TOKEN_SECRET ${ARG_TOKEN_SECRET}

#ALex: keep this API running with a non root user.
RUN groupadd -r nodejs \
   && useradd -m -r -g nodejs nodejs
USER root
RUN npm install -g nodemon
RUN apt-get update && apt-get install -y vim

#ALex: Warning! for permissions issues! use the same approach as linux, motherfucker!
#Alex: All the microservices should be delivered in the following path: /opt/microservice/ideap/{applicationId}/{logic}/{apiName}
RUN mkdir -p /opt/microservice/ideaup/apiname/
#RUN chown nodejs /opt/microservice/ideaup/tupromoalpaso/auth/signup/
#USER nodejs
WORKDIR /opt/microservice/ideaup/apiname/

#Copy json package and then, install all node dependencies.
COPY package.json /opt/microservice/ideaup/apiname/
COPY server.js /opt/microservice/ideaup/apiname/a

#Copy core API files and bundle app.
COPY ./lib /opt/microservice/ideaup/apiname/

RUN npm install --production
RUN npm cache clean --force

RUN ls -al -R

EXPOSE 3001
#CMD ["node", "server.js"]


