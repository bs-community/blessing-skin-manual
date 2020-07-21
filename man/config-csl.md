# 修改 CustomSkinLoader 配置文件

如果你想从 CustomSkinLoader 的默认加载列表之外的皮肤站加载材质，你需要修改配置文件。

在阅读本文档后，智力正常的玩家应当都可以正确修改配置文件。

CustomSkinLoader 的配置文件位于 `.minecraft/CustomSkinLoader/` 目录下，文件名为 `CustomSkinLoader.json`（如果启用了版本隔离，则是在 `.minecraft/versions/{version}/CustomSkinLoader/` 目录下，其中 `{version}` 为对应的版本）。

## ExtraList

ExtraList 是 CustomSkinLoader 14.4 引入的一项特性，提供了快捷的添加皮肤站的功能。

对于一般用户来说，只需要将皮肤站提供的 ExtraList 文件放入 `.minecraft/CustomSkinLoader/ExtraList/` 目录下（同样的，如果启用了版本隔离，则是在 `.minecraft/versions/{version}/CustomSkinLoader/ExtraList/` 目录下）并启动游戏即可。

在使用 ExtraList 添加皮肤站时，如果需要一次添加多个皮肤站且需要对皮肤站进行排序，则需要将 ExtraList 文件重命名至对应的顺序。

启动游戏后，ExtraList 文件将会被删除，这是正常现象。此时皮肤站即已被添加进加载列表中的最顶端。

如果想要了解如何编写 ExtraList 文件，请查看：https://github.com/xfl03/CustomSkinLoaderAPI/blob/master/ExtraList/ExtraList-zh_CN.md

## 在线修改配置文件

你可以使用 CustomSkinLoade GUI 在线修改配置文件。

![CSL GUI](https://cdn.jsdelivr.net/gh/bs-community/blessing-skin-manual@master/man/csl-gui.png) 

地址：https://bs-community.github.io/customskinloader-gui-react

点击右上角的「打开配置文件」按钮即可打开现有的 CustomSkinLoader 配置文件并编辑。但因其年久失修，可能不支持一些新版本 CustomSkinLoader 才支持的特性。

如果你有意接手维护，请联系：[Pig Fang](https://github.com/g-plane)

## 手动修改配置文件

我们推荐使用专业的代码编辑器（如 [Notepad++](https://notepad-plus-plus.org)、[Visual Studio Code](https://code.visualstudio.com)、[Sublime Text](https://www.sublimetext.com/)）修改配置文件。

CustomSkinLoader 的配置文件使用 JSON 格式，并对格式有着严格的要求。如果配置文件的格式有误，则会重置到默认配置文件。修改完配置文件后，可以使用 [BeJSON](https://www.bejson.com/) 对配置文件内容进行格式化校验。

**不建议没有相关经验的小白手动修改配置文件。**

配置文件中有以下几个配置项：

- `version`
- `enable`
- `loadlist`
    - `name`
    - `type`
    - `root`
    - `checkPNG`
    - `skin`
    - `model`
    - `cape`
    - `elytra`
    - `apiRoot`
    - `sessionRoot`
    - `userAgent`
- `enableSkull`
- `enableDynamicSkull`
- `enableTransparentSkin`
- `ignoreHttpsCertificate`
- `forceLoadAllTextures`
- `enableCape`
- `threadPoolSize`
- `cacheExpiry`
- `enableUpdateSkull`
- `enableLocalProfileCache`
- `enableCacheAutoClean`

其中除 `version`、`loadlist`、`threadPoolSize` 和 `cacheExpiry` 外的配置项的值均应为布尔值（`true` 或 `false`，分别表示「启用」和「禁用」）。

根据 CustomSkinLoader 版本不同，适用的配置项也有可能不同。不是所有的配置项都必须填写。

### `version`

该配置项表示 CustomSkinLoader 的版本。**请不要修改此项！**

### `enable`

该配置项表示是否启用 CustomSkinLoader。

### `loadlist`

该配置项即加载列表，内容与顺序决定了皮肤来源与加载顺序。CustomSkinLoader 会以上到下的顺序尝试获取皮肤。其中子配置项的意义请见下方：

#### `name`

该配置项表示皮肤站名称。

#### `type`

该配置项表示皮肤站的 API 类型。可选的值有：

- `MojangAPI`
- `CustomSkinAPI`
- `UniSkinAPI`
- `Elyby`
- `GlitchlessAPI`
- `Legacy`

请根据皮肤站的 API 实现来选择正确的值。不同 API 的意义不同，其对应的剩余的配置项和值也不同。

同时，除 `MojangAPI` 外的所有 API 均可指定 User-Agent，将 `userAgent` 配置项的值设为你想指定的 User-Agent 即可。

##### `MojangAPI`

使用 Yggdrasil API 加载材质。需要配置以下两个配置项：

- `apiRoot`：Yggdrasil API 的根（Root）地址；
- `sessionRoot`：Yggdrasil API 的会话服务器（Session Server）的地址。

##### `CustomSkinAPI`

使用 CustomSkinAPI 加载材质。仅需要配置一个配置项：`root`，表示皮肤站的 CustomSkinAPI 的根（Root）地址。

##### `UniSkinAPI`

使用 UniSkinAPI 加载材质。仅需要配置一个配置项：`root`，表示皮肤站的 UniSkinAPI 的根（Root）地址。

##### `Elyby`

从 [Ely.By](https://ely.by) 加载材质。无需配置其它配置项。

##### `GlitchlessAPI`

使用 GlitchlessAPI 加载材质。仅需要配置一个配置项：`root`，表示皮肤站的 GlitchlessAPI 的根（Root）地址。

##### `Legacy`

使用传统方式加载皮肤。需要配置以下几个配置项：

- `checkPNG`：检查图像文件的格式是否为 PNG，值为布尔值；
- `skin`：皮肤文件地址；
- `model`：皮肤模型，可选值的有：
    - `default`：默认模型，即 Steve 模型；
    - `slim`：纤细模型，即 Alex 模型，仅 1.8 及以上的 Minecraft 支持；
    - `auto`：自动判断材质模型；
- `cape`：披风文件地址；
- `elytra`：鞘翅文件地址，仅 1.9 以上的 Minecraft 支持。

其中 `skin`、`cape` 和 `elytra` 配置项的值中，可使用 `{USERNAME}` 或 `{UUID}` 占位符来表示玩家的名称或 UUID。

### `enableSkull`

表示是否启用头颅加载。默认启用。

### `enableDynamicSkull`

表示是否允许动态头颅。默认启用。

### `enableTransparentSkin`

表示是否允许透明皮肤。默认启用。

### `ignoreHttpsCertificate`

表示是否忽略 HTTPS 证书检查结果。默认禁用。

启用此项后，即使皮肤站的 HTTPS 证书无效，仍会从该皮肤站加载皮肤。

通常情况下不建议启用此项，否则可能会带来一定的安全隐患。

### `forceLoadAllTextures`

表示是否强制加载一个玩家的所有材质。即，是否加载皮肤又加载披风后才停止加载。默认禁用。

禁用此项时，一旦玩家成功从加载列表内的某一皮肤站成功加载某一材质（皮肤或披风），即会停止继续加载；启用此项时，若玩家未能从某一皮肤站加载所有材质，则会继续尝试从加载列表内剩余的皮肤站加载材质，直到成功加载所有材质或加载列表内无更多皮肤站。

### `enableCape`

表示是否允许加载披风。默认启用。

### `threadPoolSize`

表示加载皮肤和头颅的线程池大小。默认为 `1`，推荐的值的范围为 `1` 到 `16`。

游玩在线人数较多的服务器时，可以适当增大该项的值，但也请不要设置得太高。

### `cacheExpiry`

表示玩家信息缓存的过期时间，单位为秒。默认为 `30`。

>  玩家信息缓存中包含了玩家的材质的地址，但不包含材质文件。

设置为 `-5` 或更低即相当于关闭玩家信息缓存。不建议设置得太小或太大。

### `enableUpdateSkull`

表示是否开启头颅更新。默认禁用。

头颅更新容易引起卡顿，不建议启用此项。

### `enableLocalProfileCache`

表示是否启用本地皮肤缓存（不是上面 `cacheExpiry` 设置项中提到的玩家信息缓存）。默认禁用。

启用此项后可在无网络时继续使用缓存的皮肤。不建议在网络状态稳定（例如能一直接入网络的台式机）时仍然开启。

### `enableCacheAutoClean`

表示是否在 Minecraft 启动时自动清理 **所有** 玩家信息缓存。默认禁用。

如果启用了本地皮肤缓存，则本项将被强制禁用。