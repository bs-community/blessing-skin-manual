# 更新源列表

本页面列出了我们已知的，且其维护者愿意公开的 Blessing Skin 的可用更新源及其镜像。

请在 `.env` 中通过 `UPDATE_SOURCE` 字段指定更新源。即在配置文件最后添加一行：`UPDATE_SOURCE = https://example.com/update.json`

如有意向维护第三方更新源请提交 Issue。

::: tip 提示：
如果你想维护第三方更新源，你可以直接 Clone 这个仓库：[https://dev.azure.com/blessing-skin/%5Fgit/Blessing%20Skin%20Server](https://dev.azure.com/blessing-skin/%5Fgit/Blessing%20Skin%20Server)。其中的 JSON 文件包含了最新版本的更新信息，ZIP 压缩包为完整压缩包。
:::
## 官方更新源

```
https://dev.azure.com/blessing-skin/51010f6d-9f99-40f1-a262-0a67f788df32/_apis/git/repositories/a9ff8df7-6dc3-4ff8-bb22-4871d3a43936/Items?path=%2Fupdate_2.json
```

官方更新源位于 Azure DevOps。你不需要手动添加官方更新源，默认情况下即是从官方更新源获取更新。

## 第三方更新源

::: danger 小心！
我们无法 100% 保证第三方更新源的安全。请谨慎使用，防止恶意代码的注入。
:::

:::tip 提示：
更新源的排序不分先后。
:::

### LittleSkin

```
https://littleskin.cn/bs-update/update.php
```

由 Honoka Tech LTD 运营的 LittleSkin 提供的 Blessing Skin Server 更新源，使用腾讯云 CDN 分发资源。与官方源实时同步，有更新时，第一个使用这个更新源更新 Blessing Skin Server 的站点将会从官方源下载更新包（也有可能直接从这个源下载更新包，取决于服务器拉取更新包的速度），从第二个站点开始将会直接从这个更新源下载更新包。

这个更新源是 [更新源服务端](https://github.com/bs-community/update-source-server) 的一个示例站点。

### MintTang-BS-UP

```
https://bs-cdn.minttang.cn/update.php
```

### Uranium's Mirror
```
https://bs-mirror.r9mc.com/update.json
```

这个更新源由又拍云提供 CDN 支持。
