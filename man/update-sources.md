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

:::tip 提示：
更新源的排序不分先后。
:::

### bs-cdn.yecdn.com

地址: `https://bs-cdn.yecdn.com/update.json`

![](https://blessing-skin-manual.vercel.app/api/update?url=https://bs-cdn.yecdn.com/update.json)

如果您在使用过程中遇到了问题，欢迎通过 Telegram 联系: [@ZoharWang](https://t.me/ZoharWang)

### bs-cdn.paperjun.xyz

地址：`https://bs-cdn.paperjun.xyz/update.php`

![](https://blessing-skin-manual.vercel.app/api/update?url=https://bs-cdn.paperjun.xyz/update.php)

更多信息：[从我们的社交网站上获得信息](https://social.paperjun.xyz/cgi-bin/bs-helper/20200925202010)

### cdn.monika.love

地址：`https://cdn.monika.love/bs/update.json`

![](https://blessing-skin-manual.vercel.app/api/update?url=https://cdn.monika.love/bs/update.json)

### bs-cdn-d0.crabapi.cn

地址：`https://bs-cdn-d0.crabapi.cn/update.json`

![](https://blessing-skin-manual.vercel.app/api/update?url=https://bs-cdn-d0.crabapi.cn/update.json)
