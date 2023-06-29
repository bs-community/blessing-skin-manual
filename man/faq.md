# 常见问题解答

提问之前请先看看您的问题是否在以下列表中：

::: tip 提示：
请善用浏览器的 <kbd>Ctrl</kbd> + <kbd>F</kbd> 页内查找功能。
:::

[[toc]]

## 配置文件 `.env` 在哪？

请仔细阅读 [配置文件介绍](/env.md)

## 出现 "No application encryption key has been specified."

请在 Blessing Skin 根目录下（不是 Web 根目录）下执行以下命令：

```
php artisan key:generate
```

## 目录下没有 `setup` 这个文件夹啊，怎么访问？

Blessing Skin 使用了 URL 重写来实现路由功能。

一般来说，只要您按照 [安装指南](/setup.md#配置-url-重写规则（伪静态）) 正确配置了 URL 重写之后，您就能正常安装和使用 Blessing Skin。

## 提示「根目录下没有 `vendor` 文件夹」？

有两种解决方法：

1. 给我认认真真地再看一遍 [安装指南](/setup.md)
2. 自己使用 Composer 安装依赖库

## 出现 500 Internal Server Error

如果服务器报错 500，且页面上没有任何 Blessing Skin 字样，请查看 `storage/logs` 目录下是否有日志文件，如果没有，说明是您文件权限设置错误，请设置正确的文件权限。

如果有，请编辑 `.env` 文件，将 `APP_DEBUG` 这一项的值改为 `true`，保存退出后再次打开皮肤站就能看到更详细的调试信息，读一读页面最顶上的报错应该就知道是什么问题了。

::: warning
解决报错后，请再次编辑 `.env` 文件，将 `APP_DEBUG` 这一项的值改为 `false`，否则可能泄露重要机密信息。
:::

## 404 Not Found

如果您可以访问首页，其他页面都是 404，请检查您的 URL 重写（伪静态）规则 **是否生效**。

如果所有页面（包括 `/index.php`）都是 404，请检查您自己的 Web 服务器配置。

## require: open_basedir restriction in effect. File is not within the allow path(s).

如果您的站点出现了如下错误：

```
require: open_basedir restriction in effect. File is not within the allow path(s).
```

1. 打开您的 php.ini 文件；
2. 搜索 `open_basedir` 字样并在 `=` 等于符号后面加上您的皮肤站根目录的**完整的绝对路径**，然后保存并退出编辑；
4. 如果您使用的是 Nginx，请重启 php-fpm。

## XXX() has been disabled for security reasons

如果您的遇到了类似如下的错误：

```
XXX() has been disabled for security reasons
```

看到这条报错说明 Blessing Skin 所使用的一些函数在您的 PHP 中被禁用了，您需要在 php.ini 文件中解除这些函数的禁用。

1. 打开您的 php.ini 文件；
2. 搜索 `disable_functions` 字样；
3. 找到之后，把 `=` 等于符号右边一长串字母和逗号组成的字符串里的 `XXX,` 字样删除并保存；
5. Nginx 用户请重启 php-fpm。


## Deprecated $HTTP_RAW_POST_DATA

如果您的站点出现了如下错误（一般只会发生在您点了某个按钮之后）：

```
Deprecated: Automatically populating $HTTP_RAW_POST_DATA is deprecated and will be removed in a future version. To avoid this warning set 'always_populate_raw_post_data' to '-1' in php.ini and use the php://input stream instead. in Unknown on line 0
```

![error screenshot](https://i.loli.net/2018/02/10/5a7eb109a7b43.png)

1. 打开 php.ini 文件；
2. 搜索 `always_populate_raw_post_data` 字样；
3. 找到之后，把 `=` 等于符号右边的数字设置为 `-1`（如果已经是 `-1` 了，请把行首的分号 `;` 删掉）；
4. 如果您用的是 Nginx，请重启 php-fpm。

## Maximum function nesting level of '100' reached

如果出现了类似这样的错误信息：

```
PHP Fatal error: Maximum function nesting level of '100' reached, aborting! in /opt/app-root/src/vendor/composer/ClassLoader.php on line 344, referer: http://domain.com/setup/info
```

请修改 PHP 配置，关闭 XDebug 或修改其设置。

## getdate(): It is not safe to rely on the system's timezone settings

如果出现了类似这样的错误信息：

```
Warning: getdate(): It is not safe to rely on the system's timezone settings. You are *required* to use the date.timezone setting or the date_default_timezone_set() function. In case you used any of those methods and you are still getting this warning, you most likely misspelled the timezone identifier. We selected the timezone 'UTC' for now, but please set date.timezone to select your timezone.
```

请打开您的 php.ini 文件，找到 `date.timezone` 项的值并设置为 `Asia/Shanghai`。

如果 `date.timezone` 这一项的最前面有一个半角分号 `;` 的话，请务必去掉。

## 只有图片无法显示，其他都正常

请参考：[printempw/blessing-skin-server#46 - 图片无法显示](https://github.com/printempw/blessing-skin-server/issues/46)

## 如何对接 AuthMe / CrazyLogin / Discuz？

AuthMe / Discuz：请在插件市场中下载数据对接插件。

CrazyLogin：自 Blessing Skin Server v4 起，CrazyLogin 数据对接不受 Blessing Skin Community 支持。如果您想对接 CrazyLogin，请自行编写插件，或者使用 v3 及以下版本的 Blessing Skin Server。

## 上传的皮肤跑哪里去了？

皮肤文件都被重命名为文件的 SHA256 Hash 并保存至 `/storage/textures` 文件夹下。您可以直接使用图片查看软件打开它们。

## 游戏中不显示皮肤？

::: warning 注意
这里只讨论使用 _皮肤 Mod_ 时的问题。使用自定义 Yggdrasil API 外置登录系统出现的皮肤不加载问题不在讨论范围之内。
:::

### 检查皮肤站是否配置正确

怎么检查？访问 `http://您的皮肤站地址/您的游戏角色名.json`（此处以 CSL API 为例，USM 也差不多），如果一切正常，您会得到类似这样的内容：

```json
{
  "username": "621sama",
  "skins": {
    "default": "834cbd848f0a29008bf5b1d59d02ecb1cf25dfd21fc88be1c183c9261f5fdd69",
    "slim": "3d82f454ceeb30f2546283e08ab060a45d450dc6042c9077f638f10ca51205d4"
  },
  "cape": "2911438e8282d40e6d64fbefd076eef0a901cb90d3deae4057fec60c66eb93d2"
}
```

然后把那几串长长的字符串复制出来，分别访问 `http://您的皮肤站地址/textures/那一串字符串`，如果一切正常，您会看到您的皮肤图片：

![screenshot](https://i.loli.net/2018/02/09/5a7d81e639473.png)

确保这一步一切正常后，您可以继续往下排查了。

### 检查皮肤 Mod 是否正确加载

去看看您游戏主菜单中 Forge Mod List 里有没有正确加载皮肤 Mod（CustomSkinLoader、UniSkinMod 之类）。

### 检查皮肤 Mod 是否配置正确

请参阅 [配置皮肤 Mod](/mod.md)，再检查一遍您有没有配置出错的地方。

### 查看皮肤 Mod 的日志

- CSL 的日志位于 `.minecraft/CustomSkinLoader/CustomSkinLoader.log`
- USM 的日志直接输出至游戏日志中

在日志里看看有没有什么 `ERROR` 开头的记录，把错误信息拿去翻译一下基本上就能知道原因了。

## 如何上传 鞘翅/翅膀/Elytra 的材质？

鞘翅的材质是画在披风上的，自己设置一个带鞘翅材质的披风就可以了。

![Snipaste_2018-02-22_11-27-15.png](https://i.loli.net/2018/02/22/5a8e38fe9adfa.png)

具体请参考 Minecraft Wiki：

- https://minecraft.fandom.com/zh/wiki/%E9%9E%98%E7%BF%85
- https://minecraft.fandom.com/zh/wiki/%E6%8A%AB%E9%A3%8E

### 如何在皮肤库中查看一个披风是否带有鞘翅材质？

访问 `/raw/{tid}.png` 或者 `/textures/{hash}` 查看披风原图。

## 忘了密码怎么办

1. 使用皮肤站自带的「找回密码功能」
2. 使用一个「新密码」注册一个新用户，然后在数据库 `users` 表中用新注册用户的 `password` 字段内容替换掉您原来那个用户的 `password` 字段。替换完成后您就可以使用「新密码」登录您原来的账户了。

## 如何开启皮肤库评论区？

请安装「嵌入第三方评论」插件并在插件配置中填入您的评论代码即可。

## 如何设置第二个超级管理员？

去皮肤站数据库 `users` 表那个用户记录的 `permission` 字段设置为 `2`。

## Target class [App\Services\Cipher\xxx] does not exist.

站点的密码算法设置不正确，请确保使用 Blessing Skin 支持的算法并且算法名没有拼写错误（区分大小写）。

如果您有安装并开启「密码算法转换」插件并且遇到了这个错误，请先认真阅读该插件的 Readme 并正确配置该插件。

## MySQL 错误码：2054

出错消息会像这样：无法连接至 MySQL/MariaDB 服务器，请检查您的配置。服务器返回的信息：SQLSTATE[HY000] [2054] The server requested authentication method unknown to the client

MySQL 8 默认使用了新的密码验证插件：caching_sha2_password，而之前的 PHP 版本中所带的 mysqlnd 无法支持这种验证。

解决方法：新建一个使用 mysql_native_password 方式的账户，并给予权限；或将现有账户验证方式改为 mysql_native_password 。

## 页面的样式失效

请检查您的浏览器地址栏中是否包含 `index.php`，如果有，请去掉。

## 升级的时候出现 503 错误

有两种解决方法：

### 使用命令行

打开终端，进入到皮肤站所在目录，输入 `php artisan update` 即可完成升级。

### 在 503 页面登录

当出现 503 错误页面时，页面中会有一个「登录」按钮。点击打开登录页面然后像往常一样进行登录。

在登录之后，如果刚才登录的是管理员账号，那么这个升级过程就可以继续进行。

## 无法打开 Web CLI

请根据以下步骤修改 Web Server 的配置。

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

## MySQL 提示「Specified key was too long...」

这往往发生在 Windows 系统上。

最彻底的解决办法是使用 Linux 作为服务器的操作系统（但请不要使用宝塔之类的面板软件），这不仅能解决这个问题，还可以避免其它只会出现在 Windows 中的问题。

临时的解决办法是修改 MySQL 的配置文件。打开 `my.ini` 文件，在 `[mysqld]` 下面加两行：

```ini
innodb_large_prefix=ON
innodb_file_format=Barracuda
```

保存并重新启动 MySQL。

## 安装或升级时遇到「Table 'notifications' already exists」

打开数据库，将 `notifications` 表删除即可。

## 插件市场打不开

这是一个已知问题：[插件市场无法打开 / Unable to load plugin market / Undefined array key "packages" · Issue #454 · bs-community/blessing-skin-server](https://github.com/bs-community/blessing-skin-server/issues/454)

临时解决方案：在 [bs-community/plugins-dist](https://github.com/bs-community/plugins-dist) 下载所需所需插件，并通过 *插件管理* 页面上传 `.zip` 文件安装。
