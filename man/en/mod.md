# Mod Configuration

::: tip

We recommend you to open "Plugins Marketplace" and install "Config Generator" plugin, and this plugin will provide a friendly UI to help you generate JSON configuration.

:::

Blessing Skin Server only implements the API which is defined by skin mod and provides friendly web pages to manage skins in an easier way.

To show your skins in game, you have to configure your skin mod correctly as uploading your skins to skin server.

There the mod we supported are: [CustomSkinLoader](http://www.mcbbs.net/thread-269807-1-1.html) and Universal Skin Mod (This mod isn't under maintained.).

## For CustomSkinLoader 13.1 and higher (recommended)

The configuration is located in `.minecraft/CustomSkinLoader/CustomSkinLoader.json`, and it is just like this:

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

And you need to do is to add the root URL of your skin server to the `loadlist` dictionary:

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

The field `type` should be same with your API configured in the options of skin server.

## For CustomSkinLoader 12.9 and lower

::: tip

Since Blessing Skin v5, you're required to install and enable the "Legacy Skin Loading" plugin from Plugins Market.

:::

Add your URL to the configuration file located in `.minecraft/CustomSkinLoader/skinurls.txt`:

```
# Notice: You should put your url on the top to make it be loaded first
http://example.com/skin/*.png
http://skins.minecraft.net/MinecraftSkins/*.png
http://minecrack.fr.nf/mc/skinsminecrackd/*.png
http://www.skinme.cc/MinecraftSkins/*.png
```

Also add it in `.minecraft/CustomSkinLoader/capeurls.txt`:

```
https://example.com/cape/*.png
```

## UniSkinMod 1.4 and higher

::: tip

Since Blessing Skin v5, you're required to install and enable the "Universal Skin Mod API" plugin from Plugins Market.

:::

::: tip

It isn't recommended to use this mod, because it isn't under maintained.

:::

The configuration file is located in `.minecraft/config/UniSkinMod/UniSkinMod.json`.

You should modify it from:

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

to this:

```json
{
  "rootURIs": [
    "http://www.skinme.cc/uniskin",
    "https://skin.prinzeugen.net",
    "http://example.com"
  ],
  "legacySkinURIs": [],
  "legacyCapeURIs": []
}
```

which means adding your URL of skin server to the `rootURIs` array.

There is a documentation for USM 1.4+, check it [here](https://github.com/RecursiveG/UniSkinMod/blob/1.9/README.md).

## UniSkinMod 1.2 & 1.3

Put your root URL to `.minecraft/config/UniSkinMod.cfg`:

```
# SkinMe Default
Root: http://www.skinme.cc/uniskin
# Your Server
Root: http://example.com
```

## UniSkinMod 1.2 and lower

The configuration file is also located in `.minecraft/config/UniSkinMod.cfg`, but you should add the legacy links in instead of root URL:

```
Skin: http://skins.minecraft.net/MinecraftSkins/%s.png
Cape: http://skins.minecraft.net/MinecraftCloaks/%s.png
# Your Server
Skin: http://example.com/skin/%s.png
Cape: http://example.com/cape/%s.png
```
