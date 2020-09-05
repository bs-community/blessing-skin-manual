# FAQ

Before reporting problems, please check if your problem is mentioned at this list.

::: tip

Use <kbd>Ctrl</kbd>+<kbd>F</kbd> to search your problems.

:::

[[toc]]

## Where is `.env` file?

It's at the root of the application, and this file can be a symbolic link (aka. symlink).

## I received an error with message "No application encryption key has been specified.".

You didn't generate app key. Go to the root of Blessing Skin, and run this command:

```shell
php artisan key:generate
```

## There isn't a directory called `setup`. How can I visit it?

We use URL rewrite. What you need to do is to configure URL rewrite correctly. You can read [here](./setup.md) to get more information about configuring this.

## I received an error and it told me `vendor` directory is missing.

Two solutions:

1. Download release from our releases page, then read installation guide.
2. Run Composer by yourself. (for advanced users only)

## I got "500 Internal Server Error".

Go to `storage/logs` directory and check the logs. If there aren't log files, you should grant write permission to that directory.

Then, edit your `.env` file. Set `APP_DEBUG` to `true`. You will get more information.

::: warning

Once your problem is addressed, don't forget to disable debug mode by setting `APP_DEBUG` to `false`. Otherwise, some information will be exposed.

:::

## I got "404 Not Found".

If you can access home page, you need to re-configure URL rewrite.

Otherwise, your web server isn't configured correctly. For example, web server root directory is incorrect.

## require: open_basedir restriction in effect. File is not within the allow path(s).

Open your `php.ini` file, and search for `open_basedir`. Add the absolute path to your Blessing Skin application after the `=` sign. Save this file.

Don't forget to restart php-fpm service if you're using Nginx.

## xxx() has been disabled for security reasons

Some PHP functions have been disabled. You need to enable them by editing `php.ini` file.

Open your `php.ini` file and search for `disable_functions`. Delete all characters after the `=` sign. Save this file.

Don't forget to restart php-fpm service if you're using Nginx.

## Deprecated $HTTP_RAW_POST_DATA

If you received an error likes this:

```
Deprecated: Automatically populating $HTTP_RAW_POST_DATA is deprecated and will be removed in a future version. To avoid this warning set 'always_populate_raw_post_data' to '-1' in php.ini and use the php://input stream instead. in Unknown on line 0
```

![error screenshot](https://i.loli.net/2018/02/10/5a7eb109a7b43.png)

Open your `php.ini` file and search for `always_populate_raw_post_data`. Update its value to `-1`. If it's already `-1`, delete the semicolon at the head of line. Save this file.

Don't forget to restart php-fpm service if you're using Nginx.

## Maximum function nesting level of '100' reached

If you received an error like this:

```
PHP Fatal error: Maximum function nesting level of '100' reached, aborting! in /opt/app-root/src/vendor/composer/ClassLoader.php on line 344, referer: http://domain.com/setup/info
```

Please disable XDebug.

## getdate(): It is not safe to rely on the system's timezone settings

If you received an error like this:

```
Warning: getdate(): It is not safe to rely on the system's timezone settings. You are *required* to use the date.timezone setting or the date_default_timezone_set() function. In case you used any of those methods and you are still getting this warning, you most likely misspelled the timezone identifier. We selected the timezone 'UTC' for now, but please set date.timezone to select your timezone.
```

Open your `php.ini` file and search for `date.timezone`. Update its value according to your preferred timezone. Also, if this line starts with a semicolon, delete the semicolon.

## Some pictures can't be loaded.

If you're using Nginx, check the Nginx configuration file. Search the file and check if it contains something like this:

```nginx
location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|flv|ico)$ {
    expires 30d;
    access_log off;
}
```

Delete this part. Save the file and restart Nginx service.

## How to integrate with AuthMe?

Just download "AuthMe Integration" plugin from Plugins Market and configure it.

## Where are uploaded textures?

All the textures are stored at `storage/textures`. Their file names are hashes without file extension. You can use picture viewer to open them.

## I can't see my skin in game!

::: tip

We only discuss about using Skin Mod. Yggdrasil API is off-topic.

:::

### Verify whether skin server works or not.

Visit `http://{your.domain.name}/{PlayerName}.json`. If you can see something like this:

```json
{
  "username": "621sama",
  "skins": {
​    "default": "834cbd848f0a29008bf5b1d59d02ecb1cf25dfd21fc88be1c183c9261f5fdd69",
​    "slim": "3d82f454ceeb30f2546283e08ab060a45d450dc6042c9077f638f10ca51205d4"
  },
  "cape": "2911438e8282d40e6d64fbefd076eef0a901cb90d3deae4057fec60c66eb93d2"
}
```

Copy the very very long code, then visit `http://{your.domain.name}/textures/{long code}`, you should be able to see your skin or cape.

### Verify whether your skin mod is installed or not.

Skin mod should be located at `.minecraft/mods` directory.

### Verify configuration of skin mod.

Read [here](./mod.md).

### Debug with logs.

For example, log files of CustomSkinLoader are located at `.minecraft/CustomSkinLoader/CustomSkinLoader.log`. They are just text files. Read it and you may know the problems.

### How about Elytra?

Draw it on a cape. However, our online previewer doesn't support Elytra currently.

## I forgot my password.

Use "Forgot My Password" function in log-in page.

Another solution is only for administrators. Register a new user, then open the database and replace the hashed password of old user with the hashed password of new user. Now, log-in the old user with new password. Once finished, just delete the new user.

## How can I use third-party comment service?

Check out it at Plugins Market. That plugin will allow you to insert a code snippet to each texture detail page.

## How can I enable another super administrator?

Open the database, update permission value of the user you want to hoist to `2`.

## Target class [App\Services\Cipher\xxx] does not exist.

Password hashing algorithm is incorrect. Make sure you're using an algorithm which Blessing Skin supports. And validate the name (case-sensitive).

## MySQL error code: 2054

If MySQL raised an error like this: `SQLSTATE[HY000] [2054] The server requested authentication method unknown to the client`, you may using MySQL 8 and `caching_sha2_password` in MySQL. You should create a MySQL user with `mysql_native_password` then grant it to the database, or change the existing user to `mysql_native_password`.

## No style (CSS) on page.

If the URL you visited contains `index.php`, delete `index.php`.

## 503 error occurred when upgrading.

There are two solutions:

1. Open terminal, and run this command:

   ```shell
   php artisan update
   ```

2. When this error occurred, you will find a "Log-In" button at page. Click it and log in your administrator account as usual. Then, continue the upgrade wizard.

## I can't open Web CLI.

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

## MySQL reports "Specified key was too long..."

This problem usually occurs on Windows.

The best solution is using Linux as the operating system for your server. This not only solves this problem, but also avoids some other weird problems which only occur on Windows.

However, you may want to solve this problem temporarily. You can modify configuration file of MySQL. Open `my.ini`, then find `[mysql]` section, and append two lines below:

```ini
innodb_large_prefix=ON
innodb_file_format=Barracuda
```

Save the file and restart MySQL service.

## Setup reports "Table 'notifications' already exists" when installing or upgrading

Just open your database and delete the table `notifications`.
