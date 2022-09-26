# Configuration file introduction

## What is `.env`?

`.env` is a file that saves the most basic configuration information of Blessing Skin (database information, password security, email sending configuration, etc.).

::: tip:
If you're using version 4.0.0 or above, you won't need to configure the `.env` file manually in most cases - during installation, we will ask you to fill in the database connection information in your browser.
:::

## How to create a `.env` file?

The installation package contains a `.env.example` configuration template file by default, just rename it to `.env`.

::: tip:
If you don't see the `.env.example` file, turn on the "Show hidden files (files starting with `.`)" option in your file browser.
:::

You can also create a copy as a backup before renaming.

--------------

**For Windows users**, follow these steps:

1. Right-click the `.env.example` file and click "Rename";
2. Rename the file to `.env.` in the input box (**NOTE**, there is a dot symbol `.` at the end);
3. Press Enter to confirm, the `.` at the end of the file name will disappear automatically;
4. You're done renaming (yes, Windows is so mysterious).

Of course you can also do `Rename-Item .env.example .env` in PowerShell or `copy .env.example .env` in CMD.

--------------

Linux or macOS users can simply `cp .env.example .env` just fine.

## Configuration file field details

In order to support internationalization, we have replaced the `.env` comments with general English, but for the convenience of Chinese users, the meaning of each field is described below.

### Apply basic options

#### `APP_DEBUG`

Please be sure to turn off `APP_DEBUG` (ie set to `false`) in the production environment (online environment), otherwise your database information may be leaked.
Conversely, if you encounter any errors to report, turn on this option to get detailed stack information about the errors.

#### `APP_ENV`

In production environment, please set `APP_ENV` to `production`. Set this configuration item to `development` only when developing a Blessing Skin (e.g. you are contributing to a Blessing Skin). (When `WEBPACK_ENV` is `development`, all frontend assets are loaded from `webpack-dev-server`)

#### `APP_FALLBACK_LOCALE`

Downgrade language settings. If Blessing Skin cannot detect from the browser and client which language the user is using, Blessing Skin will use the value specified by this option as the language, which defaults to `en` which is English.

### Database related

- `DB_CONNECTION` database connection type, currently supports `mysql`, `sqlite`, `pgsql`, namely MySQL (or MariaDB), SQLite and PostgreSQL respectively.
- `DB_HOST` database host, usually `localhost`
- `DB_PORT` database port
- `DB_DATABASE` database name, modify it yourself
- `DB_USERNAME` database username
- `DB_PASSWORD` database user password
- `DB_PREFIX` data table prefix, when you need to install multiple skin stations in one database, please set a different data table prefix for each skin station

### Security related

- `PWD_METHOD` user password encryption method, optional values ​​are:
- `BCRYPT` (default)
  - `ARGON2I` (requires Blessing Skin v5 or higher)
  - `PHP_PASSWORD_HASH`
  - `MD5`
- `SALTED2MD5` (the difference between adding salt and not adding salt, the same below)
  - `SHA256`
- `SALTED2SHA256`
  - `SHA512`
- `SALTED2SHA512`
- `SALT` salt for token and password encryption
- `APP_KEY` is used to encrypt various things in the framework, the format is `"base64:".base64_encode(random_bytes(32))`

**Please note that after the skin station is installed, please do not change these security settings at will, otherwise the original users will not be able to log in. **

Both `SALT` and `APP_KEY` can optionally be randomly generated at install time, or you can choose to regenerate them on the command line:

````
# regenerate salt
php artisan salt:random

# Regenerate APP_KEY
php artisan key:generate
````

### Email related

Email configuration mainly uses user mailboxes to verify and send password reset emails.

#### If you use SMTP, please add the following fields (modify the content yourself):

- `MAIL_MAILER` is `smtp` (v4 and previous users, this item should be `MAIL_DRIVER`)
- `MAIL_HOST` is the mail server address
- `MAIL_PORT` is the mail server port, default is 465
- `MAIL_USERNAME` is the username required for mail server authentication
- `MAIL_PASSWORD` password required for mail server authentication
- `MAIL_ENCRYPTION` is the encryption method
- `MAIL_FROM_ADDRESS` is the sender's email address
- `MAIL_FROM_NAME` is the sender's name, the default is empty, it can be filled in as the site name

#### If you use SendGrid:

Please fill in the API Key in `MAIL_USERNAME` and the sender's information in `MAIL_FROM_ADDRESS` and `MAIL_FROM_NAME`.

#### If you are using Mailgun, add the following fields:

````
MAIL_DRIVER=mailgun
MAIL_USERNAME=test@example.com
MAILGUN_DOMAIN=example.com
MAILGUN_SECRET=api-key
````

#### If you are using sendmail, add the following fields:

````
MAIL_DRIVER=sendmail
SENDMAIL_COMMAND='/usr/sbin/sendmail -bs' #Be careful to wrap it in quotation marks
````

Set `MAIL_DRIVER` to `null` to disable all mail related features.

### Driver related

- `CACHE_DRIVER`

This configuration is related to caching and defaults to `file`. One of `file`, `memcached`, `redis` can be used.

- `SESSION_DRIVER`

This configuration is related to the Session in the web and defaults to `file`. One of `file`, `memcached`, `cookie`, `redis` can be used.

- `QUEUE_CONNECTION`

By default, Blessing Skin will send notifications synchronously. If your site has a large number of users, the site will slow down or even time out requests when sending notifications to all users. To do this, you need to configure the queue here to improve performance.

This configuration item defaults to `sync`, which means no queue is used. You can set this configuration item to `database` as needed, and the queue information will be stored in the database; if you have Redis, it is recommended to set this item to `redis`.

With the exception of `sync`, whichever other queues are used, you need to execute a separate process to keep the queues running properly. The method is: execute `php artisan queue:work`, please keep this command running and do not exit.

### Redis related

If possible, use Redis for your site. As an in-memory database, Redis can improve site performance to a certain extent.

- The value of `REDIS_CLIENT` can only be `phpredis` or `predis`. If your site is using Redis, install the Redis extension for PHP and change this value to `phpredis`.
- `REDIS_HOST` The host address of the Redis database, usually 127.0.0.1, please modify it according to your actual situation.
- `REDIS_PASSWORD` Redis database password. Defaults to `null`, if you have a password set for Redis, please modify this accordingly.
- `REDIS_PORT` Redis database port, default is 6379.

### Plugin related

Usually you do not need to modify this part of the configuration.

- `PLUGINS_DIR` This configuration item affects the storage location of the plugin, the plugin market in Blessing Skin will install the plugin here, and read and load the plugin from this directory. Make sure this directory has read and write permissions. Leave `null` to use the default value. From 5.0.0 onwards, you can define multiple different plugin directories by separating different paths with commas in English.

- `PLUGINS_URL` This configuration item affects the frontend resource file URL in the plugin. It is recommended to keep `null` to use the default value.

### Other

- `UPDATE_SOURCE` Modify this configuration to change the update source of Blessing Skin. (ie, tell Blessing Skin where to get the new version information) If you find the default update source slow, you can switch to a third-party source. (See [here](/update-sources.md) for available third-party update sources)