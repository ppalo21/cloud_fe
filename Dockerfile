FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/skuska/ /usr/share/nginx/html/
