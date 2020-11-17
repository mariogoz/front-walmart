FROM node:alpine AS my-app-build
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --prod
ENV PORT=80

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/dist/front-walmart /usr/share/nginx/html
EXPOSE 80