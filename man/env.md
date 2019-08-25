# 配置文件介绍

## 什么是 `.env`？

`.env` 是一个文件，其中保存了 Blessing Skin 最基础的配置信息（数据库信息、密码安全、邮件发送配置等）。

::: tip
如果您使用 4.0.0 或以上版本，您在大多数情况下不需要手动配置 `.env` 文件——在安装的时候，我们会在浏览器中要求您填写数据库连接信息。
:::

## 如何创建 `.env` 文件？

安装包中默认包含了一个 `.env.example` 配置模板文件，直接把它重命名为 `.env` 即可。

::: tip
如果看不到 `.env.example` 这个文件，请打开你文件浏览器的「显示隐藏文件（以 `.` 开头的文件）」的选项。
:::

重命名之前你也可以创建一个副本作为备份。

--------------

**对于 Windows 用户**，请遵循如下步骤：

1. 右键 `.env.example` 文件并点击「重命名」；
2. 在输入框中将该文件重命名为 `.env.`（**注意**，最后有一个点符号 `.`）；
3. 按下回车确认，文件名最后的 `.` 将会自动消失；
4. 你已完成重命名操作（是的，Windows 就是这么神秘）。

--------------

Linux / macOS 用户直接 `cp .env.example .env` 就好了。

## 配置文件字段详解

为了支持国际化，我们把 `.env` 的注释换成通用的英文了，但是似乎很多用户都云里雾里的，所以下面介绍一下各个字段的含义。

### 调试开关

#### `APP_DEBUG`

请务必在生产环境（线上环境）下关闭 `APP_DEBUG`（即设置为 `false`），不然你的数据库信息可能被泄露。
相反，如果遇到什么错误要报告的话请开启这个选项以获得报错的详细堆栈信息。

#### `APP_ENV`

生产环境下，请将 `APP_ENV` 设置为 `production`。仅在开发 Blessing Skin 时（如，您正在为 Blessing Skin 做贡献），才可将该配置项设为 `development`。（当 `APP_ENV` 为 `development` 时，所有前端资源均从 `webpack-dev-server` 中加载）

### 数据库相关

- `DB_CONNECTION` 数据库的连接类型，目前支持 `mysql`、`sqlite`、`pgsql`，即分别为 MySQL、SQLite 和 PostgreSQL。
- `DB_HOST` 数据库主机，一般为 `localhost`
- `DB_PORT` 数据库端口
- `DB_DATABASE` 数据库名，自行修改
- `DB_USERNAME` 数据库用户名
- `DB_PASSWORD` 数据库用户密码
- `DB_PREFIX` 数据表前缀，当你有在一个数据库中安装多个皮肤站的需求时，请为每个皮肤站设置不同的数据表前缀

### 安全相关

1. `PWD_METHOD` 用户密码加密方式，可选的值有：
	- `PHP_PASSWORD_HASH`（默认的，也是安全性最高的）
    - `MD5`
	- `SALTED2MD5`（加盐与不加的区别，下同）
    - `SHA256`
	- `SALTED2SHA256`
    - `SHA512`
	- `SALTED2SHA512`
2. `SALT` 盐用于 Token 和密码加密
3. `APP_KEY` 用于框架内各种东西的加密，格式为 `"base64:".base64_encode(random_bytes(32))`

**请注意，皮肤站安装好后请勿随意更改这些安全设置，否则会导致原有的用户无法登录。**

`SALT` 和 `APP_KEY` 都可以选择在安装时自动随机生成，您也可以选择在命令行中重新生成：

```
# 重新生成盐
php artisan salt:random

# 重新生成 APP_KEY
php artisan key:generate
```

### 邮件相关

邮件配置主要用用户邮箱验证与发送密码重置邮件。

如果你使用 SMTP，请添加以下字段（内容自行修改）：

```
MAIL_DRIVER = smtp
# 邮件主机地址
MAIL_HOST = smtp.example.com
# 邮件主机端口
MAIL_PORT = 465
# 邮件发送人（填完整邮箱地址）
MAIL_USERNAME = test@example.com
# 密码
MAIL_PASSWORD = secret
# 加密方式，一般为 tls 或者 ssl
MAIL_ENCRYPTION = tls
```

**如果你使用 Mailgun，请添加以下字段：**

```
MAIL_DRIVER = mailgun
MAIL_USERNAME = test@example.com
MAILGUN_DOMAIN = example.com
MAILGUN_SECRET = api-key
```

**如果你使用 sendmail，请添加以下字段：**

```
MAIL_DRIVER = sendmail
SENDMAIL_COMMAND = '/usr/sbin/sendmail -bs' #注意用引号包起来
```

将 `MAIL_DRIVER` 设置为 `null` 即可停用所有邮件相关的功能。

### 驱动相关

#### `CACHE_DRIVER`

此项配置与缓存有关，默认为 `file`。可使用 `file`、 `memcached`、 `redis` 其中的一项。如果您打算使用 Redis，可直接在管理面板中「资源配置」页面直接启用 Redis 而无需手动修改此项配置。

#### `SESSION_DRIVER`

此项配置与 Web 中的 Session（会话）有关，默认为 `file`。可使用 `file`、 `memcached`、 `cookie`、`redis` 其中的一项。。如果您打算使用 Redis，可直接在管理面板中「资源配置」页面直接启用 Redis 而无需手动修改此项配置。

#### `QUEUE_DRIVER`

默认情况下，Blessing Skin 将以同步的方式发送通知。如果您的站点有较多的用户，当向全部用户发送通知时，站点将会变慢甚至请求超时。为此，您需要在此配置队列以提高性能。

这个配置项默认为 `sync`，即不使用任何队列。您可以根据需要将此配置项设为 `database`，此时队列信息将存储在数据库中；如果您有 Redis，推荐将此项设为 `redis`。

除了 `sync` 以外，不管使用哪种其它的队列，您都需要单独执行一个进程以保证队列正常运行。方法是：执行 `php artisan queue:work`，请保持这个命令的运行，不要退出。

### Redis 相关

如果条件允许，请为您的站点使用 Redis。Redis 作为内存数据库，能在一定程度上提升站点的性能。

当您配置好下面提到的 Redis 配置项后，请只需要打开管理面板中「资源配置」页面并勾选「启用 Redis」，剩下的工作将由 Blessing Skin 自动完成。

1. `REDIS_HOST` Redis 数据库的主机地址，通常为 127.0.0.1，请根据您的实际情况进行修改。
2. `REDIS_PASSWORD` Redis 数据库密码。默认为 `null`，如果您有为 Redis 设置密码，请相应地修改此项。
3. `REDIS_PORT` Redis 数据库端口，默认为 6379。

如果您使用 unix socket 与 Redis 连接，那么还要这样修改：

1. `REDIS_SCHEME` 修改为 `unix`，如果 `.env` 文件中没有这一项，请手动加上去。
2. `REDIS_SOCKET_PATH` 要填写为 unix socket 路径。如果 `.env` 文件中没有这一项，请手动加上去。

### 插件相关

通常您不需要修改这部分配置。

`PLUGINS_DIR` 此配置项会影响插件的存放位置，Blessing Skin 中的插件市场会把插件安装在此处，并从这个目录中读取并加载插件。请确保这个目录有可读写权限。保留 `null` 以使用默认值。从 5.0.0 起，您可以定义多个不同的插件目录，用英文状态下的逗号分开不同的路径即可。

`PLUGINS_URL` 此配置项会影响插件中的前端资源文件 URL。建议保留 `null` 以使用默认值。

### 其它

`UPDATE_SOURCE` 修改此项配置可更改 Blessing Skin 的更新源。（即，告诉 Blessing Skin 将从哪里获取新版本信息）如果您觉得默认的更新源速度慢，可更换为第三方源。（可用的第三方更新源见 [此处](/update-sources.md)）
