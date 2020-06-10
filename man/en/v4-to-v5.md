# Migrate from v4 to v5

## Redis users

We've removed the option for enabling or disabling Redis at "Resource Option" page. If you're using Redis and you've enabled Redis via "Resource Option" page, please edit your `.env` file like this:

```
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_DRIVER=redis
```

Of course, you can configure the three options above separately, which depends on you.

Note that the default Redis client has been changed to PhpRedis. Please install this PHP extension if you're using Redis. If you aren't able to install it, please download and install "Predis" plugin from Plugins Market.

## Email

Please change `MAIL_DRIVER` to `MAIL_MAILER` at your `.env` file.

## Universal Skin API

We've removed Universal Skin API support from core. Please install "Universal Skin API" plugin from Plugins Market if you need it.

## Legacy Skin Loading

We've removed Legacy Skin Loading support from core. Please install "Legacy Skin Loading" plugin from Plugins Market if you need it.

## Blessing Skin Shell

If you want to use Blessing Skin Shell, you're required to configure your web server.

### Nginx

Edit `/etc/nginx/mime.types` file, and append a new line as below:

```
application/wasm  wasm;
```

Then, restart Nginx.

### Apache

We've configure `.htaccess` file for you. If it doesn't work, try solutions below.

One solution is to edit `/etc/mime.types`, and append a new line as below:

```
application/wasm  wasm
```

Another solution is modify your Apache configuration file, and append a new line as below:

```
AddType application/wasm .wasm
```
