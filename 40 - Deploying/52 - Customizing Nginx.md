# Customizing Nginx for Static Buildpack

Standard: **Deploy separate client-server applications with CORS (Elective) (<a href="#">W0051-V1</a>)**

## Objectives

By the end of this lesson you will:

1. Add an nginx config file with the appropriate rewrite rules

## Rationale

If you deploy to a host that uses the static buildpack (based off of Heroku's) then you'll need to tweak your own Nginx config.

## #1 - Create the nginx config

To use the static buildpacks, do the following:

```
touch Staticfile
```

To make Angular Routes work in HTML5Mode add the following `nginx.conf` file to your app:

```
worker_processes 1;
daemon off;

error_log <%= ENV["APP_ROOT"] %>/nginx/logs/error.log;
events { worker_connections 1024; }

http {
  log_format cloudfoundry '$http_x_forwarded_for - $http_referer - [$time_local] "$request" $status $body_bytes_sent';
  access_log <%= ENV["APP_ROOT"] %>/nginx/logs/access.log cloudfoundry;
  default_type application/octet-stream;
  include mime.types;
  sendfile on;

  gzip on;
  gzip_disable "msie6";
  gzip_comp_level 6;
  gzip_min_length 1100;
  gzip_buffers 16 8k;
  gzip_proxied any;
  gzip_types text/plain text/css text/js text/xml text/javascript application/javascript application/x-javascript application/json application/xml application/xml+rss;

  tcp_nopush on;
  keepalive_timeout 30;
  port_in_redirect off; # Ensure that redirects don't include the internal container PORT - <%= ENV["PORT"] %>
  server_tokens off;

  server {
    listen <%= ENV["PORT"] %>;
    server_name localhost;

    location / {
      root <%= ENV["APP_ROOT"] %>/public;
      index index.html index.htm Default.htm;
      try_files $uri $uri/ /index.html?$args;
    }
  }
}

```

## Resources

- http://spiegela.com/2015/08/10/angular-apps-in-cloud-foundry/
- https://solutionizeit.files.wordpress.com/2014/03/cf-arch.png
- https://www.cloudfoundry.org/learn/features/
