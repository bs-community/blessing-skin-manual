# Skin Station CDN Configuration

Use the "Front-end resource file CDN" on the "Resource Configuration" page, and use the CDN service built by yourself or others. All the static files (CSS/JS) of the skin station will be requested from the CDN, which can reduce the burden on the origin site.

## How to build a skin station CDN?

Copy all the files in the `/public` directory of the skin site (must be compiled, directly from the source code on GitHub) to a place you like on your CDN server, and ensure that they can be accessed by the outside world.

Fill in the "Front-end resource file CDN" according to your specific situation. If you put the resource files in a subdirectory on the CDN server, the "CDN address" should also include that subdirectory.

Don't know how to fill it out? Visit `{the address you should fill in}/app/manifest.json`, if it is displayed normally, then it's ok.

## Currently available public CDNs

Maintained by a third-party, select one of the addresses and fill in the "Static File CDN" plugin configuration page.

::: danger Be careful!
Note that we cannot guarantee the security of third-party CDNs 100%. Please use it with caution to prevent malicious code injection.
:::

### hempflower

> This CDN is provided by [OreCraft](http://www.orecraft.cn). If this CDN is helpful to you, you can give a reward through [Afdian](https://afdian.net/@hempflower).
>
> If you don't find what you need in the version supported by CDN, you can contact QQ 1993996310 for update.

Address: `https://bs-mirror.i-creator.cn/:version/public`

![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=bs-mirror.i-creator.cn/:version/public)
![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=bs-mirror.i-creator.cn/:version/public&version=4.4.0)

where `:version` is replaced with the BS version. The replaced address should be similar to: `https://bs-mirror.i-creator.cn/4.0.4/public`

### [bairuo.top](https://blog.bairuo.top)

Address: `https://bs-mirrors.bairou.top/:version/public`

All versions v4 are supported.

![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=bs-mirrors.bairuo.top/:version/public)
![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=bs-mirrors.bairuo.top/:version/public&version=4.4.0)

Provided by Bai Yan.

QQ: 3337980633, indicate Blessing Skin when adding.

Love Power Generation: [@TheBaiRuo](https://afdian.net/@TheBaiRuo)

### s1.pangdidi.cn

CDN is CloudFlare's Enterprise plan, and opens the Chinese network, with nodes all over the world.

Address: https://s1.pangdidi.cn/CDN/blessing-skin-server/:version/public

![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=s1.pangdidi.cn/CDN/blessing-skin-server/:version/public)
![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=s1.pangdidi.cn/CDN/blessing-skin-server/:version/public&version=4.4.0)

Please replace `:version` in the address with the version currently used by the skin site. [Click here to view supported versions](https://s1.pangdidi.cn/CDN/blessing-skin-server/versions.json).

If you encounter problems in the process of using this CDN, please contact QQ 14907471.

Contributed by [FeiYuab](https://github.com/FeiYuab).

### bs-cdn.yecdn.com

Address: `https://bs-cdn.yecdn.com/:version/public`

![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=bs-cdn.yecdn.com/:version/public)
![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=bs-cdn.yecdn.com/:version/public&version=4.4.0)

Please replace `:version` in the address with the version currently used by the skin site. [Click to view currently supported versions](https://bs-cdn.yecdn.com/versions)

If you have any problems using this CDN, please contact me via Telegram: [@ZoharWang](https://t.me/ZoharWang)

### cdn.paperjun.xyz

Resource link: `https://cdn.paperjun.xyz/blessingskin-cdn/:version`

![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=cdn.paperjun.xyz/blessingskin-cdn/:version)
![](https://blessing-skin-manual.vercel.app/api/cdn?cdn=cdn.paperjun.xyz/blessingskin-cdn/:version&version=4.4.0)

Complete usage: [https://blog.paperjun.xyz/knowledgebase_blessingskin_cdn_config.html](https://blog.paperjun.xyz/knowledgebase_blessingskin_cdn_config.html)

::: tip Want to submit a new public CDN?
Please raise an issue under [bs-community/blessing-skin-manual](https://github.com/bs-community/blessing-skin-manual) or directly initiate a Pull Request.
:::