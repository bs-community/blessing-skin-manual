# Installation Guide

## Environment Requirements

### Basic Requirements

Blessing Skin supports Nginx, Apache and Caddy, however it doesn't support IIS. PHP version must be 8.0.2 or above.

### Required PHP Extensions

Make sure the extensions below are installed and enabled correctly:

- OpenSSL >= 1.1.1 (TLS 1.3)
- PDO
- Mbstring
- Tokenizer
- GD
- XML
- Ctype
- JSON
- fileinfo
- zip

 ### Required Functions

These functions below can't be disabled. Please check your `php.ini` before installation:

- `symlink`
- `readlink`
- `putenv`
- `realpath`

### Other

Blessing Skin will check your environment before setup. If you encountered some errors prefixed with `[Error]`, it means your environment doesn't match our requirements.

::: tip Suggestion

We don't recommend you to use Windows Server. Using Windows Server will impact the performance of Blessing Skin, and some strange errors which never appear in Linux will be occurred.

:::

## Download

Archives can be downloaded at [GitHub Releases](https://github.com/bs-community/blessing-skin-server/releases).

::: tip Tip

The file you will download should be `blessing-skin-server-xxx.zip`, not `Source Code`.

:::

## Extract

Extract the Zip file you've downloaded at the previous step to somewhere. Make sure that the root of your web server must point to the `public` directory of the directory you extracted before.

## Copy Configuration File

For Windows user, copy `.env.example` file as `.env.` file. Please note that it suffixes with a dot and Windows will strip it automatically. For Linux and macOS, run `cp .env.example .env`.

## Generate App Key

App key will be used to encrypt session. Run the command below to generate it:

```
php artisan key:generate
```

If you don't generate a key, you will receive an error with message "No application encryption key has been specified.".

## Configure URL Rewrite

### Apache

Make sure that the root of your web server must point to the `public` directory of the whole application. Also, `mod_rewrite` must be enabled. Also don't forget to open your Apache configuration file and check the value of `AllowOverride`. If it's `None`, please change it to `FileInfo`.

`.htaccess` is bundled with Blessing Skin, so you don't need to configure rewrite rules.

### Nginx

Open your Nginx configuration file, add snippet below to `server {}` block:

```nginx
root /path/to/your/blessing-skin/public;

location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

Please note that the root of your web server must point to the `public` directory of the whole application.

### Caddy

Open your Caddy configuration file (usually named as `Caddyfile`), and edit it with the snippet below in your site's block:

```
root * /path/to/your/blessing-skin/public
file_server

try_files {path} {path}/ /index.php?{query}
```

This is only part of Caddy's configuration, you will need to complete the rest of the basic configuration for your site to make it work properly.

## Enter Setup Wizard

Open your website with `https://example.com/setup`. If you encountered "404 Not Found", you should go back to previous step and  configure URL rewrite correctly.

If everything goes well, you will see the welcome page like this:

![Screenshot_20200707_085516.png](https://i.loli.net/2020/07/07/AtLzUwGhc4vp6fg.png)

Then, just follow the wizard.

## Complete

You've finished the installation. Enjoy it!