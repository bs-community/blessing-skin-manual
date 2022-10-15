# 错误排查

如果您遇到了问题，在求助之前请务必检查以下几个项目：

## 您所使用的皮肤站插件是否是最新版本

很有可能您遇到的问题已经在最新版本中修复过了。

同理，请检查您的启动器是否是最新版本。

## 启动器是否配置正确

如果您无法正常登录并启动游戏，请参阅 [配置启动器](./authlib-injector.md#配置启动器) 检查您的配置。

## 游戏本体是否正确加载 authlib-injector

如果您正在使用 HMCL3，那么为 Minecraft 游戏本体加载 authlib-injector 的工作是由启动器自动完成的，所以只要您正确配置了 HMCL3，此步骤一般不会出现问题。

如果您正在使用其他启动器，请您打开该启动器的「查看日志 / 显示日志」选项后再重新启动游戏（`.minecraft/logs/latest.log` 中是不会有这部分的日志的，还请注意），观察启动日志中是否出现如下字样：

```
[authlib-injector] launched from premain
[authlib-injector] api root: https://skin.test/api/yggdrasil
[authlib-injector] fetching metadata
[authlib-injector] transform [https://sessionserver.mojang.com/session/minecraft/profile/] to [https://skin.test/api/yggdrasil/sessionserver/session/minecraft/profile/]
[authlib-injector] transform [https://sessionserver.mojang.com/session/minecraft/join] to [https://skin.test/api/yggdrasil/sessionserver/session/minecraft/join]
[authlib-injector] transform [https://sessionserver.mojang.com/session/minecraft/hasJoined] to [https://skin.test/api/yggdrasil/sessionserver/session/minecraft/hasJoined]
```

如果有，就说明您已经正确加载了 authlib-injector。如果没有，请重新配置您启动器中的 JVM 参数。

![Snipaste_2018-02-21_23-09-00.png](https://i.loli.net/2018/02/21/5a8d8ba9eb94e.png)

这时候您应该可以进入单人游戏，可以看到自己在皮肤站所设置的皮肤正确加载。

## 服务端是否配置正确

同上，如果服务端正确加载了 authlib-injector 的话，您应该可以在控制台看到如下输出：

```
[authlib-injector] launched from premain
[authlib-injector] api root: https://skin.test/api/yggdrasil
[authlib-injector] fetching metadata
[22:56:36] [main/INFO]: [STDERR]: [authlib-injector] transform [https://sessionserver.mojang.com/session/minecraft/profile/] to [https://skin.test/api/yggdrasil/sessionserver/session/minecraft/profile/]
[22:56:36] [main/INFO]: [STDERR]: [authlib-injector] transform [https://sessionserver.mojang.com/session/minecraft/join] to [https://skin.test/api/yggdrasil/sessionserver/session/minecraft/join]
[22:56:36] [main/INFO]: [STDERR]: [authlib-injector] transform [https://sessionserver.mojang.com/session/minecraft/hasJoined] to [https://skin.test/api/yggdrasil/sessionserver/session/minecraft/hasJoined]
```

如果没有，请参照 [为游戏服务端加载 authlib-injector](./authlib-injector.md#为游戏服务端加载-authlib-injector) 重新进行配置。

这时候您应该可以进入服务器，看到自己和别人的皮肤正确加载。

如果您无法进入服务器，请继续往下看。

## 常见问题

### Server returned HTTP response code: 403

如果您在加载 authlib-injector 时看到如下报错：

```
unable to fetch metadata: java.io.IOException: Server returned HTTP response code: 403 for URL: xxx
```

这说明您的服务器屏蔽了可疑 User Agent 或是可疑 HTTP Header 的访问。请检查您的 Web 服务器或者 CDN 配置中是否提供了类似的选项。

在 CloudFlare 中，此选项被称为 Browser Integrity Check（位于 `Firewall > Web Application Firewall > Browser Integrity Check`），请关闭它。其它 CDN 服务商也有可能默认启用了类似的规则，请检查。

### 皮肤无法加载

如果您能够进入游戏却无法加载皮肤的话，请检查：

- 皮肤站后台「插件配置」中皮肤域名白名单是否正确
- 材质数字签名是否正确（插件配置中的密钥对配置）
- 您的皮肤站服务器或 CDN 是否屏蔽了对材质图片的请求
- 客户端到皮肤站的网络是否畅通

一般情况下，客户端日志中也会有相应的报错，请查阅以寻找可能的原因。

注意，此方法不支持「高清皮肤 / 披风」，如确实有需要，请使用 CSL 等皮肤 Mod。

### 无法进入服务器

一般来说这说明您游戏客户端、游戏服务端或者皮肤站的 Yggdrasil API 出现了问题。为了快速定位问题、减少排查所需的时间，您可以使用我们提供的「样例 Yggdrasil 认证服务器」来确认您遇到的问题是出现在启动器、游戏客户端，或者是游戏服务端上。

使用方法：

1. 使用 `https://auth-demo.yushi.moe` 作为 API Root 填入启动器、客户端以及游戏服务端的配置中（也就是把之前您配置中的 `https://皮肤站地址/api/yggdrasil` 修改为 `https://auth-demo.yushi.moe`）；
2. 使用以下邮箱和密码进行登录：

|邮箱|密码|
|--|--|
|test1@example.com|111111|
|test2@example.com|222222|
|test3@example.com|333333|
|deadmau5@example.com|123456|
3. 启动游戏；
4. 尝试进入服务器。

如果您将原本皮肤站的 API Root 修改为上面提供的「样例 Yggdrasil API」后可以正常进入游戏、加载皮肤、加入服务器的话，那就说明您遇到的问题出在 **皮肤站** 上，请联系我们排查错误。如果使用了样例 API 后问题依然存在，即说明您的问题是启动器、客户端或是游戏服务端的错误配置导致的，请参照本文档的配置教程重新进行相关的配置。

![2018-07-06_21.40.19.png](https://i.loli.net/2018/07/07/5b3f99f2e9128.png)

*另一个可用的样例 API 是 `https://mcskin.littleservice.cn/api/yggdrasil`，您可以使用 [LittleSkin]() 的账号进行登录测试。*

## 寻求帮助

如果您完成了上述的检查后依然无法确定问题，那么您可以联系我们寻求帮助。
