---
sidebarDepth: 2
---

# 配置皮肤 Mod

::: tip 提示：
推荐您直接前往「插件市场」安装「配置生成」插件，这个插件提供了一个友好的界面帮助您生成 JSON 配置。
:::

Blessing Skin 只是一个皮肤站程序，仅仅是提供了上传、存储、检索、分享玩家皮肤的功能。想要在 Minecraft 游戏中显示您之前在皮肤站中上传的皮肤的话，您还需要「自定义皮肤 Mod」的帮助。

目前 Blessing Skin 支持的皮肤 Mod 有：
- [CustomSkinLoader](http://www.mcbbs.net/thread-269807-1-1.html) - 万用皮肤补丁
- [UniSkinMod](http://www.mcbbs.net/thread-358932-1-4.html) - Universal Skin Mod（不推荐，因为该 Mod 已停止更新）

具体配置方法请继续阅读。

## CustomSkinLoader

### 13.1 及以上版本（推荐）

CustomSkinLoader 13.1 经过作者的完全重写，支持了 CSL API，并且使用了高端洋气的 JSON 配置文件。

配置文件位于 `.minecraft/CustomSkinLoader/CustomSkinLoader.json`，您需要在 `loadlist` 数组最顶端加入您的皮肤站配置。

例如，原来的 JSON 文件像这样：

```json
{
    "enable": true,
    "loadlist": [
        {
            "name": "Mojang",
            "type": "MojangAPI"
        },
        {
            "name": "SkinMe",
            "type": "UniSkinAPI",
            "root": "http://www.skinme.cc/uniskin/"
        }
    ]
}
```

您需要将其修改成像这样：

```json
{
    "enable": true,
    "loadlist": [
        {
            "name": "YourSkinServer",
            "type": "CustomSkinAPI",
            "root": "http://example.com/"
        },
        {
            "name": "Mojang",
            "type": "MojangAPI"
        },
        {
            "name": "SkinMe",
            "type": "UniSkinAPI",
            "root": "http://www.skinme.cc/uniskin/"
        }
    ]
}
```

`"type"` 字段按照您的后台中配置的首选 API 来填（`CustomSkinAPI` 或 `UniSkinAPI`），CSL 13.1 及以上版本支持三种加载方式。

如果还是不会填的话，请查看 CSL 的 [MCBBS 发布贴](http://www.mcbbs.net/thread-269807-1-1.html)。

### 12.9 及以下版本

::: tip
从 Blessing Skin v5 起，如果想使用这种方式，您需要在插件市场中安装「传统加载方式」插件。
:::

在 `.minecraft/CustomSkinLoader/skinurls.txt` 中添加您的皮肤站地址：

```
http://example.com/skin/*.png
http://skins.minecraft.net/MinecraftSkins/*.png
http://minecrack.fr.nf/mc/skinsminecrackd/*.png
http://www.skinme.cc/MinecraftSkins/*.png
```

注意您需要将您的皮肤站地址放在配置文件最上方以优先加载。

同理在 `.minecraft/CustomSkinLoader/capeurls.txt` 中加入：

```
http://example.com/cape/*.png
```

## UniSkinMod

::: tip
从 Blessing Skin v5 起，如果想使用 Universal Skin API，您需要在插件市场中安装「Universal Skin Mod API」插件。
:::

::: tip

Universal Skin Mod 已停止更新，因此我们不推荐使用。

:::

### 1.4 及以上版本

配置文件位于 `.minecraft/config/UniSkinMod/UniSkinMod.json`。

例如，原来的 JSON 文件像这样：

```json
{
  "rootURIs": [
    "http://www.skinme.cc/uniskin",
    "https://skin.prinzeugen.net"
  ],
  "legacySkinURIs": [],
  "legacyCapeURIs": []
}
```

您需要在 `rootURIs` 字典中加入您的皮肤站的地址：

```json
{
  "rootURIs": [
    "http://www.skinme.cc/uniskin",
    "https://skin.prinzeugen.net",
    "http://example.com/usm"
  ],
  "legacySkinURIs": [],
  "legacyCapeURIs": []
}
```

配置 `rootURIs` 后，`legacySkinURIs` 和 `legacyCapeURIs` 可以不用配置。详见[文档](https://github.com/RecursiveG/UniSkinMod/blob/1.9/README.md)。

### 1.3 版本

在您 Minecraft 客户端的 `.minecraft/config/UniSkinMod.cfg` 中加入您的皮肤站根地址：

```
# SkinMe Default
Root: http://www.skinme.cc/uniskin
# Your Server
Root: http://example.com
```

### 1.2 及以下版本

同样是在 `.minecraft/config/UniSkinMod.cfg` 中配置您的皮肤站地址，但是稍有点不一样。旧版的 UniSkinMod 是不支持 JSON API 的，而是使用了传统图片链接的方式：

```
Skin: http://skins.minecraft.net/MinecraftSkins/%s.png
Cape: http://skins.minecraft.net/MinecraftCloaks/%s.png
# Your Server
Skin: http://example.com/skin/%s.png
Cape: http://example.com/cape/%s.png
```

## 游戏中不显示皮肤？

请参阅 [常见问题解答](/faq.md#游戏中不显示皮肤？)。
