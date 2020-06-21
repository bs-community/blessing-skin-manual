# 从 v4 升级到 v5

## 对于使用 Redis 的用户

我们移除了从「资源配置」中开启或关闭 Redis 的功能。
因此如果您有在使用 Redis，并且曾经在「资源配置」页面中选择了「启用 Redis」，请您修改 `.env` 文件：

```
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_DRIVER=redis
```

当然，您也可以单独控制上述三项是否使用 Redis。

另外，默认的 Redis 客户端已经改为 PhpRedis，请您安装好 PhpRedis 这个 PHP 扩展。如果您因为某些原因不能安装此扩展，请从插件市场下载并安装「Predis」插件。

## 邮件发送相关

请把 .env 文件中的 `MAIL_DRIVER`  改为 `MAIL_MAILER` 。

## 对于使用 Universal Skin API 的用户

我们从核心中移除了 Universal Skin API 的功能，因此如果您希望继续使用此功能，可从插件市场中下载并安装「Universal Skin API」插件。

## 对于使用传统皮肤加载方式的用户

我们从核心中移除了「传统加载方式」的功能，因此如果您希望继续使用此功能，可从插件市场中下载并安装「传统皮肤加载方式」插件。

## 使用 Blessing Skin Shell

如果您想使用 Blessing Skin Shell，请根据以下步骤修改 Web Server 的配置。

### Nginx

修改 `/etc/nginx/mime.types` 文件，添加以下一行内容：

```
application/wasm  wasm;
```

然后重新启动 Web Server。

### Apache

我们已经在 `.htaccess` 进行了配置，如果对您不起作用，可以考虑以下方法。

一种方法是修改 `/etc/mime.types`，在这个文件中添加以下一行：

```
application/wasm  wasm
```

还有一种方法是修改您的 Apache 配置文件，添加以下一行：

```
AddType application/wasm .wasm
```

## 「关闭注册」功能

如果您关闭了皮肤站的注册功能（即不允许任何新用户进行注册），那么您需要在插件市场中下载「关闭注册功能」插件，因为该功能已从核心中被移除。

