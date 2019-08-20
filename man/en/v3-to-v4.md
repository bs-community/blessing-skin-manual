# Migrate from v3 to v4

**Please follow us step by step!**

## 1. Modify the root directory of your web server.

Change the root directory location to the `public` directory under the original location.

Don't forget to restart your web service to take new effect after updated the configuration.

### For Apache

Open your  `httpd.conf` file and find `DocumentRoot` and `Directory` item. Suppose your original configuration is like this (other parts of the configuration are omitted):

```config
DocumentRoot "E:/Apps/xampp/htdocs"
<Directory "E:/Apps/xampp/htdocs">
```

Update it as:

```config
DocumentRoot "E:/Apps/xampp/htdocs/public"
<Directory "E:/Apps/xampp/htdocs/public">
```

### For Nginx

Open `nginx.conf` and modify the `root` configuration item of the `server` block. Suppose your original configuration is like this (other parts of the configuration are omitted):

```config
server {
    root /var/www;
}
```

Update it as:

```config
server {
    root /var/www/public;
}
```

### For IIS

You can search some documentations about IIS.

## 2. Backup your database and the `.env` file. It's recommended to backup the directory of textures storage, as well. (Default is located at `storage/textures`)

DON'T BE TOO LAZY TO DO IT.

## 3. Remove directories and files listed below.

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

## 4. Download the latest Blessing Skin Server and extract it to original directory.

Please note that it is the original website directory, not `public` directory.

## 5. Open terminal or PowerShell and run commands below.

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

## 6. Open browser and visit your website.

You'll be asked to update and you just need to click "Next".

## 7. Complete!

Old authentication state will be invalidated. Just need to login again.
