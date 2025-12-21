FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# 🔑 IMPORTANT: install ALL deps (including dev)
RUN npm install

# Copy prisma schema
COPY prisma ./prisma/

# Generate Prisma Client (NO DB connection needed)
RUN npx prisma generate

# Copy source code
COPY . .

# Build TypeScript (needs @types/node)
RUN npm run build

# Now set production mode (AFTER build)
ENV NODE_ENV=production

# Install PM2
RUN npm install -g pm2

EXPOSE 3000

# Start app
CMD ["pm2-runtime", "ecosystem.config.cjs"]
