# 常见问题

提问之前请先看看你的问题是否在以下列表中：

::: tip
请善用浏览器的 Ctrl + F 页内查找功能。
:::

[[toc]]

## 配置文件 `.env` 在哪？

请仔细阅读 [配置文件介绍](/env.md)

## 目录下没有 `setup` 这个文件夹啊，怎么访问？

Blessing Skin 使用了 URL 重写来实现路由功能（即俗称的伪静态），具体请自行搜索。

一般来说，只要你按照 [安装指南](/setup.md#配置-url-重写规则（伪静态）) 正确配置了 URL 重写之后，你就能正常安装和使用 Blessing Skin。

## 提示「根目录下没有 `vendor` 文件夹」？

嗯，有两种解决方法：

1. 给我认认真真地再看一遍 [安装指南](/setup.md)
2. 自己使用 Composer 安装依赖库

## 500 Internal Server Error

**如果服务器报错 500，且页面上没有任何 Blessing Skin 字样：**

请查看 `/storage/logs` 目录下是否有日志文件，如果没有，说明是你文件权限设置错误。

::: tip 解决方法：
请在皮肤站根目录下运行 `chown -R www ./`。（`www` 换成你的服务器上相应的用户，如 `apache` 等）
:::

如果有，就不会只显示 500 错误了，除非你自行修改了文件。

## 404 Not Found

如果你可以访问首页，其他页面都是 404，请检查你的 URL 重写（伪静态）规则 **是否生效**。

如果所有页面（包括 `/index.php`）都是 404，请检查你自己的 Web 服务器配置。

## require: open_basedir restriction in effect. File is not within the allow path(s).

如果你的站点出现了如下错误：

```
require: open_basedir restriction in effect. File is not within the allow path(s).
```

**这是你的 PHP 设置出了问题，需要修改 php.ini 文件。**

基本上你搜索一下就能找到解决方案。这里再复述一遍：

1. 打开你的 php.ini 文件（不知道 php.ini 文件在哪儿？随便去哪里下载个 PHP 探针（搜索引擎是你的好朋友），打开 `phpinfo()` 就可以看到你目前的 php.ini 配置文件所在目录了）；
2. 搜索 `open_basedir` 字样；
3. 找到了吗？
   1. 如果找到了，在 `=` 等于符号后面加上你的皮肤站根目录下的 `public` 目录的**完整的绝对路径**，然后保存并退出编辑；。
      - 多个路径中间用 `:` 英文半角分号隔开。
   2. 如果没找到，那么抱歉爱莫能助。
4. 如果你使用的是 Nginx，请重启 PHP-FPM，Apache 用户一般不用再做什么了；
5. 如果一切运转正常，你应该可以正常使用 Blessing Skin 了。

## XXX() has been disabled for security reasons

如果你的遇到了类似如下的错误：

```
XXX() has been disabled for security reasons
```

看到这条报错说明 Blessing Skin 所使用的一些函数在你的 PHP 中被禁用了，你需要在 php.ini 文件中解除这些函数的禁用。

基本上你搜索一下就能找到很详细的解决方案（所以说在提问前先自己搜索一遍是多么有必要）。这里再复述一遍：

1. 打开你的 php.ini 文件（不知道你的 php.ini 文件在哪儿？看上一条）；
2. 搜索 `disable_functions` 字样；
3. 找到之后，把 `=` 等于符号右边一长串字母和逗号组成的字符串里的 `XXX,` 字样删除；
4. 记得在退出编辑前要保存！
5. Nginx 用户请重启 PHP-FPM，Apache 用户应该不需要再做什么了；
6. 好了，你可以正常使用 Blessing Skin 了。


## Deprecated $HTTP_RAW_POST_DATA

如果你的站点出现了如下错误（一般只会发生在你点了某个按钮之后）：

```text
Deprecated: Automatically populating $HTTP_RAW_POST_DATA is deprecated and will be removed in a future version. To avoid this warning set 'always_populate_raw_post_data' to '-1' in php.ini and use the php://input stream instead. in Unknown on line 0
```

![error screenshot](https://i.loli.net/2018/02/10/5a7eb109a7b43.png)

**这是你 PHP 设置出了问题，需要修改 php.ini 文件。**

基本上你把这个报错拿去翻译一下，就可以很清晰地知道如何操作了。我这里再复述一遍：

1. 打开 php.ini 文件（不知道 php.ini 文件在哪儿？看上一条）；
2. 搜索 `always_populate_raw_post_data` 字样；
3. 找到之后，把 `=` 等于符号右边的数字设置为 `-1`（如果已经是 `-1` 了，请把行首的分号 `;` 删掉）；
4. 如果你用的是 Nginx，请重启 php-fpm，Apache 用户一般不用做什么；
5. 只要命运的齿轮没有出差错，你不会再看到类似的报错了。

## Maximum function nesting level of '100' reached

如果出现了类似这样的错误信息：

```text
PHP Fatal error: Maximum function nesting level of '100' reached, aborting! in /opt/app-root/src/vendor/composer/ClassLoader.php on line 344, referer: http://domain.com/setup/info
```

请修改 PHP 配置，关闭 XDebug 或修改其设置（具体操作请自行搜索）。

## getdate(): It is not safe to rely on the system's timezone settings

如果出现了类似这样的错误信息：

```text
Warning: getdate(): It is not safe to rely on the system's timezone settings. You are *required* to use the date.timezone setting or the date_default_timezone_set() function. In case you used any of those methods and you are still getting this warning, you most likely misspelled the timezone identifier. We selected the timezone 'UTC' for now, but please set date.timezone to select your timezone.
```

请打开你的 php.ini 文件（不知道在哪的话请看上上条），找到 `date.timezone` 项的值并设置为 `Asia/Shanghai`。

如果 `date.timezone` 这一项的最前面有一个半角分号 `;` 的话，请务必去掉。

## 只有图片无法显示，其他都正常

请参考：[printempw/blessing-skin-server#46 - 图片无法显示](https://github.com/printempw/blessing-skin-server/issues/46)

## 如何对接 AuthMe / CrazyLogin / Discuz？

AuthMe / Discuz：请在插件市场中下载数据对接插件。

CrazyLogin：自 Blessing Skin Server v4 起，CrazyLogin 数据对接不受 Blessing Skin Community 支持。如果你想对接 CrazyLogin，请自行编写插件，或者使用 v3 及以下版本的 Blessing Skin Server。

## 上传的皮肤跑哪里去了？

皮肤文件都被重命名为文件的 SHA256 Hash 并保存至 `/storage/textures` 文件夹下。你可以直接使用图片查看软件打开它们。

## 我要怎么直接访问皮肤文件？

皮肤站提供了各种 API 让你能够获取指定的皮肤文件。当然如果你只是想要在游戏内显示皮肤的话，直接给 Mod 提供一个 JSON Profile 的地址即可，其他操作 Mod 会替你自动完成：[配置皮肤 Mod](/mod.md)

```
# 获取指定角色的皮肤/披风
example.com/{skin|cape}/{username}.png
# 获取指定角色的头像
example.com/avatar/{size}/{username}.png
# 通过材质 ID 获取皮肤
example.com/raw/{tid}.png
# 通过材质 Hash 获取皮肤
example.com/textures/{hash}
```

## 游戏中不显示皮肤？

::: warning 注意：
这里只讨论使用 _皮肤 Mod_ 时的问题。使用自定义 Yggdrasil API 外置登录系统出现的皮肤不加载问题不在本文的讨论范围之内。
:::

### 检查皮肤站是否配置正确

怎么检查？访问 `http://你的皮肤站地址/你的游戏角色名.json`（此处以 CSL API 为例，USM 也差不多），如果一切正常，你会得到类似这样的内容：

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

然后把那几串长长的字符串复制出来，分别访问 `http://你的皮肤站地址/textures/那一串字符串`，如果一切正常，你会看到你的皮肤图片：

![screenshot](https://i.loli.net/2018/02/09/5a7d81e639473.png)

确保这一步一切正常后，你可以继续往下排查了。

### 检查皮肤 Mod 是否正确加载

去看看你游戏主菜单中 Forge Mod List 里有没有正确加载皮肤 Mod（CustomSkinLoader、UniSkinMod 之类）。

### 检查皮肤 Mod 是否配置正确

请参阅 [配置皮肤 Mod](/mod.md)，再检查一遍你有没有配置出错的地方。

### 查看皮肤 Mod 的日志

日志是开发者的好朋友，有了它可以快速定位问题原因。

- CSL 的日志位于 `.minecraft/CustomSkinLoader/CustomSkinLoader.log`
- USM 的日志直接输出至游戏日志中

在日志里看看有没有什么 `ERROR` 打头的记录，把错误信息拿去翻译一下基本上就能知道原因了。

## 如何上传 鞘翅/翅膀/Elytra 的材质？

鞘翅的材质是画在披风上的，自己设置一个带鞘翅材质的披风就可以了。

![Snipaste_2018-02-22_11-27-15.png](https://i.loli.net/2018/02/22/5a8e38fe9adfa.png)

具体请参考 Minecraft Wiki：

- https://minecraft-zh.gamepedia.com/index.php?title=%E9%9E%98%E7%BF%85&variant=zh
- https://minecraft-zh.gamepedia.com/index.php?title=%E6%8A%AB%E9%A3%8E&variant=zh

### 如何在皮肤库中查看一个披风是否带有鞘翅材质？

访问 `/raw/{tid}.png` 或者 `/textures/{hash}` 查看披风原图。

## 忘了密码咋办

1. 使用皮肤站自带的「找回密码功能」
2. 使用一个「新密码」注册一个新用户，然后在数据库 `users` 表中用新注册用户的 `password` 字段内容替换掉你原来那个用户的 `password` 字段。替换完成后你就可以使用「新密码」登录你原来的账户了。

## 手贱开了邮箱验证咋办？

1. 删除 `plugins` 目录下的 `register-email-validation` 文件夹
2. 清空或按需修改数据库 `options` 表中的 `plugins_enabled` 的值

## 如何开启皮肤库评论区？

在【站点配置 > 评论代码】中填入你的评论代码即可。

你问我评论代码是什么？敬请搜索「第三方评论系统」。

## 如何设置第二个超级管理员？

去皮肤站数据库 `users` 表那个用户记录的 `permission` 字段设置为 `2`。

:::tip Permission 字段说明：
0： 正常  
-1：封禁  
1：管理员  
2：超级管理员
:::

## 如何同时对接论坛和登录插件？

皮肤站对接至论坛，登录插件也对接至论坛即可。

## 启用数据对接后如何修改玩家角色名？

第一步：打开 `users` 数据表，找到你要修改的用户记录，修改这一条记录的 `username` 字段（注意，不是 `nickname`）为你想要修改的【新角色名】；

![users](https://img.blessing.studio/images/2017/06/29/snipaste_20170629_151335.png)

第二步：打开 `players` 数据表，找到【原来的角色名】对应的数据记录，将该记录的 `name` 字段修改为【新角色名】

![players](https://img.blessing.studio/images/2017/06/29/snipaste_20170629_151613.png)

完成。

**注意**，如果你对接的是 Discuz、Phpwind 等论坛程序，而且在「数据对接」插件配置页面中将「重复处理」选项配置为「用目标程序上的用户数据覆盖皮肤站」的话，那么【皮肤站】上用户的【昵称】与【绑定的角色名】会被自动同步为该用户在【目标程序（论坛）】上具有【相同邮箱】账户的【用户名】。不愿意这样的话，请同时更改数据对接【目标程序】上的用户名或修改数据对接插件的「重复处理」配置项。

参考链接：[printempw/blessing-skin-server#61 - 启用数据对接后就无法再后台更改玩家角色的用户名与昵称？](https://github.com/printempw/blessing-skin-server/issues/61)
