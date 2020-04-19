# 从 v3 升级到 v4

::: warning 注意：
请务必按步骤执行！否则可能会出现意料之外的情况，甚至损坏整个皮肤站。
:::

::: tip 提示：
不建议从 v3 直接升级到 v4 的最新版本。你应该先升级到 4.0.1，然后再从 4.0.1 逐步升级到最新版本（但不是从 4.0.1 直接升级到最新版本）。

在更新到 v4 的某些小版本时可能需要在终端中执行一些 PHP Artisan 指令，请按照升级页面的提示执行。
:::

## 1. 更改您的 Web 服务器的根目录

将根目录位置改为原位置下的 `public` 目录。

修改完配置，别忘了重新启动 Web 服务使配置生效。

### Apache 用户

编辑您的 `httpd.conf` 文件，找到 `DocumentRoot` 和 `Directory` 配置项。假设旧的配置是这样的（忽略配置文件中的其它部分）：

```apacheconf
DocumentRoot "E:/Apps/xampp/htdocs"
<Directory "E:/Apps/xampp/htdocs">
```

则改为：

```apacheconf
DocumentRoot "E:/Apps/xampp/htdocs/public"
<Directory "E:/Apps/xampp/htdocs/public">
```

### Nginx 用户

修改您的 `nginx.conf` 文件。修改 `server` 块下的 `root` 项。例如，假设原来的配置是这样的（忽略配置文件中的其它部分）：

```nginx
server {
    root /var/www;
}
```

则改为：

```nginx
server {
    root /var/www/public;
}
```

### IIS 用户

请自行搜索相关文档。

## 2. 备份数据库以及站点文件

这很重要！千万别偷懒。

您需要将您的站点数据库导出备份，以防在更新过程中意外丢失数据。您还需要备份位于站点根目录下的 `.env` 文件，这个文件中包含了数据库连接信息以及密码加密方式等站点关键信息，您应该知道这些信息有多重要。

如果条件允许的话，最好将材质存储目录一并备份。材质存储目录默认位于 `storage/textures`。

## 3. 删除以下目录、文件

- `.htaccess` 文件
- `app` 目录
- `artisan` 文件
- `bootstrap` 目录
- `config` 目录
- `database` 目录（如果您使用 SQLite 并且数据库文件保存于此，**务必备份！**）
- `index.php` 文件
- `plugins` 目录（您需要事先记录您安装过哪些插件，并在升级完成后重新在市场上下载并安装它们）
- `resources` 目录（如果您曾经自定义过视图或/和语言文件，也应该备份它们）
- `routes` 目录
- `storage/patches` 目录
- `vendor` 目录
- `web.config` 文件

## 4. 下载新版的 Blessing Skin Server，并解压到原网站的目录中

注意是原网站的目录，不是 `public` 目录。

## 5. 在终端或 PowerShell 中依次执行以下命令

```sh
php artisan cache:clear
php artisan view:clear
php artisan migrate --force
php artisan bs:migrate-v4:players-table
php artisan bs:migrate-v4:closet
```

如果您是从 3.5.0 直接升级到 4.4.0（不建议这么做），还需要执行以下命令：

```sh
php artisan jwt:secret
php artisan passport:keys
php artisan bs:migrate-v4:likes
```

执行以上命令可能会花较长时间（取决于您的网站有多少用户），请耐心等待。

## 6. 打开浏览器并访问您的网站

此时页面会提示您进行更新，直接点击「下一步」即可。

## 7. 完成！

原来的登录状态可能会失效，重新登录即可。
