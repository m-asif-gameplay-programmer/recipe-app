FROM node:18-alpine
WORKDIR /app

# Install backend deps
COPY Backend/package*.json ./Backend/
RUN cd Backend && npm install --production

# Copy both Backend and Frontend
COPY . .

WORKDIR /app/Backend

EXPOSE 4000

CMD ["node", "server.js"]
