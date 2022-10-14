# Authlib Injector

本插件只是基于 Blessing Skin 皮肤站原有的用户系统，完整实现了一套符合 Yggdrasil API 规范的 API（这一套规范就是 Mojang 官方用于 Minecraft 正版登录鉴权的 API），而我们必须使用 [authlib-injector](https://github.com/yushijinhun/authlib-injector) 这个程序，以在运行时将游戏内的「Mojang 正版登录的 API 地址」替换成「皮肤站提供的 Yggdrasil API 地址」，从而实现外置登录系统。

## 配置启动器

如果您或您所使用的皮肤站安装有「正版验证」插件，并且您的账号经过了正版验证，则可以使用 **任意一款启动器**（只需要允许自定义 JVM 参数），然后在启动器的设置中修改 JVM 参数以使游戏客户端加载 authlib-injector 即可。

以 HMCL3 为例：

![hmcl3-tutorial](https://gitcode.net/chearlai/f/-/raw/master/HMCL.png)

以 MCCL 为例：

![mccl-tutorial](https://gitcode.net/chearlai/f/-/raw/master/MCCL.png)

## 为游戏服务端加载 authlib-injector

::: tip
使用本外置登录方案，您必须在 `server.properties` 中将 `online-mode` 设置为 `true`。

如果您正在使用 BungeeCord，那么在所有服务端上都需要加载 authlib-injector，但应只有 BungeeCord 打开 `online-mode`，其它服务端应关闭 `online-mode`。
:::

如何修改服务器启动参数请参照 [在 Minecraft 服务端使用 authlib-injector](https://github.com/yushijinhun/authlib-injector/wiki/%E5%9C%A8-Minecraft-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%BD%BF%E7%94%A8-authlib-injector)。

示例：

用于启动 Minecraft 服务端的脚本一般来说是长这样的（使用 `.bat` 文件的用户请使用文本编辑器打开修改。您的启动命令可能与示例有些不同，这是正常的。在您自己的启动命令中能找到类似 `-jar xxx.jar` 的部分即可）：

```
java -Xmx1024M -Xms1024M -jar minecraft_server.1.12.2.jar nogui
```

接下来请在启动命令中 **正确的位置**（`-jar xxx.jar` 之前）插入 [`-javaagent`](https://github.com/yushijinhun/authlib-injector/wiki/%E5%90%AF%E5%8A%A8%E5%99%A8%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#%E6%B7%BB%E5%8A%A0-jvm-%E5%8F%82%E6%95%B0) 参数。

假设：

- 您下载到了文件名为 `authlib-injector-1.1.18-daa6fb4.jar` 的文件
- 并将其放到了与服务端核心 `minecraft_server.1.12.2.jar` 相同的目录下
- 您的 Yggdrasil 服务器 API Root 为 `https://example.com/api/yggdrasil`

那么您应该将上面的示例启动命令修改为这样：

```
java -Xmx1024M -Xms1024M -javaagent:authlib-injector-1.1.18-daa6fb4.jar=https://example.com/api/yggdrasil -jar minecraft_server.1.12.2.jar nogui
```

## 正确加载 authlib-injector

需要注意的是，authlib-injector 是通过 JVM 的 `-javaagent` 参数来实现运行时字节码替换的，所以您必须保证：

- 启动器支持使用自定义 Yggdrasil API 进行认证
- Minecraft 游戏本体正确加载了 authlib-injector
- Minecraft 服务端加载了 authlib-injector（必须 `online-mode=true`）

**以上三者必须使用同一个 Yggdrasil API。**

否则会出现：

- 无法登录
- 不显示皮肤或显示错乱
- 无法进入服务器

等情况。

## 恭喜！

如果命运的齿轮没有出差错，您应该已经可以 **正常登录、正常进入服务器并看到自己的皮肤** 了。

![Snipaste_2018-02-21_22-58-37.png](https://i.loli.net/2018/02/21/5a8d89606b803.png)

如果没有，那很遗憾，请参阅 [错误排查](./troubleshooting.md) 来排除可能的错误原因。
