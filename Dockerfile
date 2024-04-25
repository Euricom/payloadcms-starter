FROM node:20-slim AS base

FROM base as builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /home/node/app
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN corepack enable

COPY . .
RUN pnpm install
RUN pnpm build
pnpm install --save-dev eslint
FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./
COPY pnpm-lock.yaml ./
RUN corepack enable

RUN pnpm install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000
