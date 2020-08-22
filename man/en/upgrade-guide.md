# Upgrade Guide

## From v4 To v5

### Redis users

We've removed the option for enabling or disabling Redis at "Resource Option" page. If you're using Redis and you've enabled Redis via "Resource Option" page, please edit your `.env` file like this:

```
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_DRIVER=redis
```

Of course, you can configure the three options above separately, which depends on you.

Note that the default Redis client has been changed to PhpRedis. Please install this PHP extension if you're using Redis. If you aren't able to install it, please download and install "Predis" plugin from Plugins Market.

### Email

Please change `MAIL_DRIVER` to `MAIL_MAILER` at your `.env` file.

### Universal Skin API

We've removed Universal Skin API support from core. Please install "Universal Skin API" plugin from Plugins Market if you need it.

### Legacy Skin Loading

We've removed Legacy Skin Loading support from core. Please install "Legacy Skin Loading" plugin from Plugins Market if you need it.

### Blessing Skin Shell

If you want to use Blessing Skin Shell, you're required to configure your web server.

#### Nginx

Edit `/etc/nginx/mime.types` file, and append a new line as below:

```
application/wasm  wasm;
```

Then, restart Nginx.

#### Apache

We've configure `.htaccess` file for you. If it doesn't work, try solutions below.

One solution is to edit `/etc/mime.types`, and append a new line as below:

```
application/wasm  wasm
```

Another solution is modify your Apache configuration file, and append a new line as below:

```
AddType application/wasm .wasm
```

### Disabling registration

If you have disabled registration (disallow any users to register), you may need to install "Disable Registration" plugin from Plugins Market, since we've extracted this function from core.

### Changes of Avatar API

Avatar API has been changed. More details can be checked at [API Documentation](../api/avatars-and-previews.md).

## From v3 To v4

**Please follow us step by step!**

### 1. Modify the root directory of your web server.

Change the root directory location to the `public` directory under the original location.

Don't forget to restart your web service to take new effect after updated the configuration.

#### For Apache

Open your  `httpd.conf` file and find `DocumentRoot` and `Directory` item. Suppose your original configuration is like this (other parts of the configuration are omitted):

```apacheconf
DocumentRoot "E:/Apps/xampp/htdocs"
<Directory "E:/Apps/xampp/htdocs">
```

Update it as:

```apacheconf
DocumentRoot "E:/Apps/xampp/htdocs/public"
<Directory "E:/Apps/xampp/htdocs/public">
```

#### For Nginx

Open `nginx.conf` and modify the `root` configuration item of the `server` block. Suppose your original configuration is like this (other parts of the configuration are omitted):

```nginx
server {
    root /var/www;
}
```

Update it as:

```nginx
server {
    root /var/www/public;
}
```

#### For IIS

You can search some documentations about IIS.

### 2. Backup your database and the `.env` file. It's recommended to backup the directory of textures storage, as well. (Default is located at `storage/textures`)

DON'T BE TOO LAZY TO DO IT.

### 3. Remove directories and files listed below.

- `.htaccess` (File)
- `app` (Directory)
- `artisan` (File)
- `bootstrap` (Directory)
- `config` (Directory)
- `database` (Directory) (If you're using SQLite and the database file is stored here, **backup it**.)
- `index.php` (File)
- `plugins` (Directory) (You may remember which plugins you've installed and install them again through the marketplace after you upgraded successfully.)
- `resources` (Directory) (You may backup them if you have overrided and customized views and/or languange files.)
- `routes` (Directory)
- `storage/patches` (Directory)
- `vendor` (Directory)
- `web.config` (File)

### 4. Download the latest Blessing Skin Server and extract it to original directory.

Please note that it is the original website directory, not `public` directory.

### 5. Open terminal or PowerShell and run commands below.

```sh
php artisan cache:clear
php artisan view:clear
php artisan migrate --force
php artisan bs:migrate-v4:players-table
php artisan bs:migrate-v4:closet
```

If you're upgrading from 3.5.0 to 4.4.0 directly, you should run the commands below additionally:

```sh
php artisan jwt:secret
php artisan passport:keys
php artisan bs:migrate-v4:likes
```

It will take several minutes to finish. (Depends on the scale of your website.)

### 6. Open browser and visit your website.

You'll be asked to update and you just need to click "Next".

### 7. Complete!

Previous authentication state will be invalidated. Just need to login again.