# Artisan CLI

Blessing Skin allows you to do some things with the skin station via the command line.

::: tip

The CLI here refers to the real shell on the server, not the Blessing Skin Shell (ie Web CLI).

:::

## Enable Plugin

A plugin can be enabled with the following command:

````
$ php artisan plugin:enable <name>
````

The `name` parameter is required, which is the unique identifier of the plugin (that is, the `name` field in the plugin information), such as `mojang-verification`.

## Disable Plugin

A plugin can be disabled with the following command:

````
$ php artisan plugin:disable <name>
````

The `name` parameter is required, which is the unique identifier of the plugin (that is, the `name` field in the plugin information), such as `mojang-verification`.

## Cache Site Options

This command has no parameters and is used as follows:

````
$ php artisan options:cache
````

After executing this command, Blessing Skin will generate an `options.php` file in the `storage` directory. This file is the cache.

Every time you visit the site in the future, Blessing Skin will load all site options from here without reading the database.

::: tip:
After the cache is generated, any changes you make to any settings in the site admin panel will not take effect (as they are written to the database). If you want the new settings to take effect after changing the settings, re-execute this command to update the cache.
:::

If you want to stop caching, just delete the `storage/options.php` file.

## Regenerate APP_KEY

`APP_KEY` is used to encrypt the user's Session and other data, so it is required.

Before installing Blessing Skin for the first time, you should execute the following command to generate `APP_KEY`:

````
$ php artisan key:generate
````

If the above command is executed on an existing site, the `APP_KEY` will be regenerated, but be aware that the user login status will be invalidated. (password will not be affected)

## Regenerate salt

If the password encryption algorithm you are using uses a salt, you can generate a new salt with the following command:

````
$ php artisan salt:random
````

## Install Blessing Skin

You can install Blessing Skin from the command line. It should be noted that before performing the installation, please manually configure the `.env` file, including database connection and other information.

The command usage is as follows:

````
$ php artisan bs:install <email> <password> <nickname>
````

This will automatically complete the installation of Blessing Skin and create a super administrator based on your given email, password and nickname.