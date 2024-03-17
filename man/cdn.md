# 皮肤站 CDN 配置

在「资源配置」页面使用「前端资源文件 CDN」，并使用自建或他人搭建好的 CDN 服务，皮肤站所有的静态文件（CSS/JS）都会从 CDN 请求，可减轻源站的负担。

## 如何自建皮肤站 CDN？

将皮肤站（必须是编译后的，直接从 GitHub 上下的源码不行） `/public` 目录下的文件全部复制到你的 CDN 服务器的某个你喜欢的地方，并保证它们能被外界访问到。

按照你的具体情况，填写「前端资源文件 CDN」。如果你把资源文件放在 CDN 服务器上的某个子目录中的话，「CDN 地址」里也要带上那个子目录。

不知道怎么填写才对？访问 `{你应该填写的地址}/app/manifest.json`，如果正常显示，那就可以了。

## 目前可用的公共 CDN

由第三方维护，选择其中一个地址填入「静态文件 CDN」插件配置页面中即可。

::: danger 小心！
注意，我们无法 100% 保证第三方 CDN 的安全。请谨慎使用，防止恶意代码的注入。
:::

### hempflower

> 此 CDN 由 [OreCraft](http://www.orecraft.cn) 提供。 如果此 CDN 对您有帮助，可以通过 [爱发电](https://afdian.net/@hempflower) 打赏。
>
> 如果在 CDN 支持的版本中没有找到您需要的，您可以联系 QQ 1993996310 更新。

地址：`https://bs-mirror.i-creator.cn/:version/public`

![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=bs-mirror.i-creator.cn/:version/public)
![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=bs-mirror.i-creator.cn/:version/public&version=4.4.0)

其中 `:version` 替换成 BS 版本。替换后的地址应类似于：`https://bs-mirror.i-creator.cn/4.0.4/public`

### [bairuo.top](https://blog.bairuo.top)

地址：`https://bs-mirrors.bairuo.top/:version/public`

支持 v4 所有版本。

![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=bs-mirrors.bairuo.top/:version/public)
![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=bs-mirrors.bairuo.top/:version/public&version=4.4.0)

由白渃提供。

QQ：3337980633，添加时注明 Blessing Skin。

爱发电：[@TheBaiRuo](https://afdian.net/@TheBaiRuo)

### s1.pangdidi.cn

CDN 是 CloudFlare 的 Enterprise 套餐，并开启中国网络，全球都有节点。

地址: https://s1.pangdidi.cn/CDN/blessing-skin-server/:version/public

![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=s1.pangdidi.cn/CDN/blessing-skin-server/:version/public)
![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=s1.pangdidi.cn/CDN/blessing-skin-server/:version/public&version=4.4.0)

请将地址中的 `:version` 替换为皮肤站当前所使用的版本。[点击这里可查看支持的版本](https://s1.pangdidi.cn/CDN/blessing-skin-server/versions.json)。

如果您在使用本 CDN 的过程中遇到了问题，请联系 QQ 14907471。

由 [FeiYuab](https://github.com/FeiYuab) 提供。

### bs-cdn.yecdn.com

地址: `https://bs-cdn.yecdn.com/:version/public`

![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=bs-cdn.yecdn.com/:version/public)
![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=bs-cdn.yecdn.com/:version/public&version=4.4.0)

请将地址中的 `:version` 替换为皮肤站当前所使用的版本。[点击查看当前支持的版本](https://bs-cdn.yecdn.com/versions)

如果您在使用本 CDN 的过程中遇到了问题，欢迎通过 Telegram 联系我: [@ZoharWang](https://t.me/ZoharWang)

### cdn.paperjun.xyz

资源链接：`https://cdn.paperjun.xyz/blessingskin-cdn/:version`

![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=cdn.paperjun.xyz/blessingskin-cdn/:version)
![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=cdn.paperjun.xyz/blessingskin-cdn/:version&version=4.4.0)

完整的使用方法：[https://blog.paperjun.xyz/knowledgebase_blessingskin_cdn_config.html](https://blog.paperjun.xyz/knowledgebase_blessingskin_cdn_config.html)

### mecdn.mcserverx.com

资源链接: `https://mecdn.mcserverx.com/gh/bs-community/blessing-skin-server/:version/public`

由 FiveCDN 提供，境内使用 火山引擎 + 白山云 CDN ，境外使用 Cloudflare CDN。
支持所有 Github 官方仓库的所有 Tags / Branches 作为 :version 的值。

如果您在使用本 CDN 的过程中遇到了问题，请联系 Mail:[im#aehxy.com](mailto:im@aehxy.com)。

::: tip 想要提交新的公共 CDN？
请在 [bs-community/blessing-skin-manual](https://github.com/bs-community/blessing-skin-manual) 下提一个 Issue 或直接发起 Pull Request。
:::
