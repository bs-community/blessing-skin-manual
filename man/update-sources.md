# 更新源列表

本页面列出了我们已知的，且其维护者愿意公开的 Blessing Skin 的可用更新源及其镜像。

请在 `.env` 中通过 `UPDATE_SOURCE` 字段指定更新源。即在配置文件最后添加一行：`UPDATE_SOURCE = https://example.com/update.json`

如有意向维护第三方更新源请提交 Issue。

::: tip 提示：
如果你想维护第三方更新源，你可以直接 Clone 这个仓库：[https://dev.azure.com/blessing-skin/%5Fgit/Blessing%20Skin%20Server](https://dev.azure.com/blessing-skin/%5Fgit/Blessing%20Skin%20Server)。其中的 JSON 文件包含了最新版本的更新信息，ZIP 压缩包为完整压缩包。
:::

## 官方更新源

```
https://dev.azure.com/blessing-skin/51010f6d-9f99-40f1-a262-0a67f788df32/_apis/git/repositories/a9ff8df7-6dc3-4ff8-bb22-4871d3a43936/Items?path=%2Fupdate.json
```

官方更新源位于 Azure DevOps。你不需要手动添加官方更新源，默认情况下即是从官方更新源获取更新。

## 第三方更新源

::: danger 小心！
我们无法 100% 保证第三方更新源的安全。请谨慎使用，防止恶意代码的注入。
:::

::: tip 提示：
更新源的排序不分先后。
:::

::: 更新源维护者请看

我们会不定期检查各个第三方更新源的可用情况，并清理其中不可用的更新源。

如果您发现您曾经在此添加过的更新源不存在，请检查您的更新源是否可用，并在处理完成后告知我们。

:::

### bs-cdn.yecdn.com

地址: `https://bs-cdn.yecdn.com/update.json`

![](https://blessing-skin-manual.vercel.app/api/update?url=https://bs-cdn.yecdn.com/update.json)

如果您在使用过程中遇到了问题，欢迎通过 Telegram 联系: [@ZoharWang](https://t.me/ZoharWang)

### update.snowflake.moe

最新版: `https://update.snowflake.moe/blessing-skin/update/update.json`
![](https://blessing-skin-manual.vercel.app/api/update?url=https://update.snowflake.moe/blessing-skin/update/update.json)

正式版: `https://update.snowflake.moe/blessing-skin/update/update-official.json`
![](https://blessing-skin-manual.vercel.app/api/update?url=https://update.snowflake.moe/blessing-skin/update/update-official.json)

BETA版: `https://update.snowflake.moe/blessing-skin/update/update-beta.json`
![](https://blessing-skin-manual.vercel.app/api/update?url=https://update.snowflake.moe/blessing-skin/update/update-beta.json)

RC版: `https://update.snowflake.moe/blessing-skin/update/update-dev.json`
![](https://blessing-skin-manual.vercel.app/api/update?url=https://update.snowflake.moe/blessing-skin/update/update-dev.json)

如果您在使用过程中遇到了问题，欢迎给我发邮件联系: [@SANYIMOE](mailto:abcd2890000456@126.com)

### cdn.monika.love

地址：`https://cdn.monika.love/bs/update.json`

![](https://blessing-skin-manual.vercel.app/api/update?url=https://cdn.monika.love/bs/update.json)

### static-cdn.zerodream.net

地址：`https://static-cdn.zerodream.net/bss/`
![](https://blessing-skin-manual.vercel.app/api/update?url=https://static-cdn.zerodream.net/bss/)

该地址带可选参数：

```
https://static-cdn.zerodream.net/bss/{channel}/{version}/{subversion}/{build}
```

其中可选参数（不带任何参数则默认是稳定构建最新版）：

1. channel 更新通道，可以是 stable，rc，beta, alpha
2. version 主要版本号，目前有 4，5，6
3. subversion 详细版本号，例如 5.2.0
4. build 构建编号，例如 1，对应的就是 6.0.0-rc.1 中的最后一位

更新源服务器代码已开源在 [kasuganosoras/bss-update](https://github.com/kasuganosoras/bss-update)。
