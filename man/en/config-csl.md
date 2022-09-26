# Modify the CustomSkinLoader configuration file

If you want to load materials from a skin station other than the CustomSkinLoader's default load list, you will need to modify the configuration file.

The configuration file for CustomSkinLoader is located in the `.minecraft/CustomSkinLoader/` directory with the file name `CustomSkinLoader.json` (if version isolation is enabled, in the `.minecraft/versions/{version}/CustomSkinLoader/` directory, where `{version}` is the corresponding version).

##ExtraList

ExtraList is a feature introduced in CustomSkinLoader 14.4 that provides a quick and easy way to add skin stations.

For normal users, just put the ExtraList files provided by the skin station in the `.minecraft/CustomSkinLoader/ExtraList/` directory (similarly, if version isolation is enabled, in `.minecraft/versions/{version} /CustomSkinLoader/ExtraList/` directory) and start the game.

When adding skin stations using ExtraList, if you need to add multiple skin stations at a time and you need to sort the skin stations, you need to rename the ExtraList file to the corresponding order.

After launching the game, the ExtraList file will be deleted, this is normal. The skin station has now been added to the very top of the load list.

If you want to know how to write an ExtraList file, please check: https://github.com/xfl03/CustomSkinLoaderAPI/blob/master/ExtraList/ExtraList-en_US.md

## Modify the configuration file online

You can modify configuration files online using the CustomSkinLoade GUI. It provides a graphical interface to allow you to adjust the CustomSkinLoader's configuration file. Just visit [https://mc-csl.netlify.app/](https://mc-csl.netlify.app/]) directly.

## Manually modify the configuration file

We recommend using a professional code editor (such as [Notepad++](https://notepad-plus-plus.org), [Visual Studio Code](https://code.visualstudio.com), [Sublime Text](https ://www.sublimetext.com/)) to modify the configuration file.

The configuration file of CustomSkinLoader uses JSON format and has strict requirements on the format. If the configuration file is formatted incorrectly, it will reset to the default configuration file. After modifying the configuration file, you can use [BeJSON](https://www.bejson.com/) to format and verify the content of the configuration file.

**It is not recommended for Xiaobai with no relevant experience to manually modify the configuration file. **

The configuration file contains the following configuration items:

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

The values ​​of configuration items except `version`, `loadlist`, `threadPoolSize` and `cacheExpiry` should be boolean values ​​(`true` or `false`, respectively "enable" and "disable").

Depending on the version of CustomSkinLoader, the applicable configuration items may be different. Not all configuration items must be filled in.

### `version`

This configuration item represents the version of CustomSkinLoader. **Please do not modify this! **

### `enable`

This configuration item indicates whether to enable CustomSkinLoader.

### `loadlist`

This configuration item is the loading list, and the content and order determine the skin source and loading order. CustomSkinLoader will try to get skins in top-to-bottom order. The meanings of the sub-configuration items are as follows:

#### `name`

This configuration item indicates the name of the skin station.

#### `type`

This configuration item represents the API type of the skin station. Optional values ​​are:

- `MojangAPI`
- `CustomSkinAPI`
- `UniSkinAPI`
- `Elyby`
- `GlitchlessAPI`
- `Legacy`

Please choose the correct value according to the API implementation of the skin station. Different APIs have different meanings, and the corresponding remaining configuration items and values ​​are also different.

At the same time, all APIs except `MojangAPI` can specify User-Agent, just set the value of `userAgent` configuration item to the User-Agent you want to specify.

##### `MojangAPI`

Load materials using the Yggdrasil API. The following two configuration items need to be configured:

- `apiRoot`: the root address of the Yggdrasil API;
- `sessionRoot`: The address of the Session Server of the Yggdrasil API.

##### `CustomSkinAPI`

Load materials using CustomSkinAPI. Only one configuration item needs to be configured: `root`, which represents the root address of the CustomSkinAPI of the skin station.

##### `UniSkinAPI`

Load materials using UniSkinAPI. Only one configuration item needs to be configured: `root`, which represents the root (Root) address of the UniSkinAPI of the skin station.

##### `Elyby`

Load materials from [Ely.By](https://ely.by). No other configuration items need to be configured.

##### `GlitchlessAPI`

Load materials using the Glitchless API. Only one configuration item needs to be configured: `root`, which represents the root address of the GlitchlessAPI of the skin station.

##### `Legacy`

Load skins in the traditional way. The following configuration items need to be configured:

- `checkPNG`: Check if the format of the image file is PNG, the value is a boolean value;
- `skin`: skin file address;
- `model`: skin model, optional values ​​are:
    - `default`: the default model, the Steve model;
    - `slim`: Slim model, the Alex model, only supported by Minecraft 1.8 and above;
    - `auto`: automatically determine the material model;
- `cape`: cape file address;
- `elytra`: elytra file address, only supported by Minecraft 1.9+.

The `skin`, `cape` and `elytra` configuration items can use `{USERNAME}` or `{UUID}` placeholders to represent the player's name or UUID.

### `enableSkull`

Indicates whether head loading is enabled. Enabled by default.

### `enableDynamicSkull`

Indicates whether dynamic heads are allowed. Enabled by default.

### `enableTransparentSkin`

Indicates whether transparent skin is allowed. Enabled by default.

### `ignoreHttpsCertificate`

Indicates whether to ignore the HTTPS certificate check result. Disabled by default.

When enabled, skins will still be loaded from the skin site even if the skin site's HTTPS certificate is invalid.

It is generally not recommended to enable this option, otherwise it may bring certain security risks.

### `forceLoadAllTextures`

Indicates whether to force loading of all textures for a player. That is, whether the skin is loaded and the cape is loaded before it stops loading. Disabled by default.

When disabled, once the player successfully loads a texture (skin or cape) from a skin station in the loadlist, it will stop loading; when enabled, if the player fails to load all the materials from a skin station textures, it will continue to try to load textures from the remaining skin stations in the loadlist until all textures are successfully loaded or there are no more skin stations in the loadlist.

### `enableCape`

Indicates whether to allow capes to be loaded. Enabled by default.

### `threadPoolSize`

Indicates the thread pool size for loading skins and heads. Defaults to `1`, the recommended range of values ​​is `1` to `16`.

When playing a server with a large number of online users, the value of this item can be appropriately increased, but please do not set it too high.

### `cacheExpiry`

Indicates the expiration time of the player information cache, in seconds. Defaults to `30`.

> The player info cache contains the address of the player's texture, but not the texture file.

Setting it to `-5` or lower is equivalent to turning off the player info cache. Setting too small or too large is not recommended.

### `enableUpdateSkull`

Indicates whether to enable head update. Disabled by default.

Head updates can easily cause lag, so it is not recommended to enable this.

### `enableLocalProfileCache`

Indicates whether to enable the local skin cache (not the player info cache mentioned in the `cacheExpiry` setting above). Disabled by default.

Enable to continue using cached skins without internet connection. It is not recommended to turn it on when the network status is stable (such as a desktop computer that can always access the network).

### `enableCacheAutoClean`

Indicates whether to automatically clear **all** player info caches when Minecraft starts. Disabled by default.

If local skin caching is enabled, this item will be forced to be disabled.