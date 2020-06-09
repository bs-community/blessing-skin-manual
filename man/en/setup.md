# Installation Guide

## Environment Requirements

Requirements are listed [here](https://github.com/bs-community/blessing-skin-server/blob/master/README_EN.md#requirements).

Blessing Skin will check your environment before setup. If you encountered some errors prefixed with `[Error]`, it means your environment doesn't match our requirements.

::: tip Suggestion

We don't recommend you to use Windows Server. Using Windows Server will impact the performance of Blessing Skin, and some strange errors which never appeared in Linux will be occurred.

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

Make sure that the root of your web server must point to the `public` directory of the whole application. Also, `mod_rewrite` must be enabled.

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

## Enter Setup Wizard

Open your website with `https://example.com/setup`. If you encountered "404 Not Found", you should configure URL rewrite correctly.

If everything goes well, you will see the welcome page. Just follow the wizard to finish the setup.

## Complete

You've finished the installation. Enjoy it!