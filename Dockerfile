FROM node:22-alpine

WORKDIR /app

RUN npm i pnpm tsx -g

# COPY package.json pnpm-lock.yaml tsconfig.json ./
COPY . .

RUN pnpm i

EXPOSE 8008

CMD ["pnpm", "start"]