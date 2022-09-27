# Update Sources

This page lists available update sources and mirrors for the Blessing Skin that we know of and whose maintainers are willing to make public.

Please specify the update source in `.env` via the `UPDATE_SOURCE` field. That is, add a line at the end of the configuration file: `UPDATE_SOURCE = https://example.com/update.json`

If you intend to maintain a third-party update source, please submit an Issue.

::: tip:
If you want to maintain a third-party update source, you can clone this repository directly: [https://dev.azure.com/blessing-skin/%5Fgit/Blessing%20Skin%20Server](https://dev.azure.com /blessing-skin/%5Fgit/Blessing%20Skin%20Server). The JSON file contains the update information of the latest version, and the ZIP archive is a complete archive.
:::

## Official update source

````
https://dev.azure.com/blessing-skin/51010f6d-9f99-40f1-a262-0a67f788df32/_apis/git/repositories/a9ff8df7-6dc3-4ff8-bb22-4871d3a43936/Items?path=%2Fupdate.json
````

The official update source is at Azure DevOps. You don't need to manually add the official update source, by default it gets updates from the official update source.

## Third-party update sources

::: danger Be careful!
We cannot 100% guarantee the security of third-party update sources. Please use it with caution to prevent malicious code injection.
:::

::: tip:
The ordering of the update sources is in no particular order.
:::

::: tip Update source maintainer please see

We will occasionally check the availability of each third-party update source and clean up the unavailable update sources.

If you find that an update source you have added here does not exist, please check if your update source is available and let us know when processing is complete.

:::

### bs-cdn.yecdn.com

Address: `https://bs-cdn.yecdn.com/update.json`

![](https://blessing-skin-manual.vercel.app/api/update?url=https://bs-cdn.yecdn.com/update.json)

If you encounter problems during use, please contact via Telegram: [@ZoharWang](https://t.me/ZoharWang)

###update.mojy.xyz

Latest version: `https://update.mojy.xyz/blessing-skin/update/update.json`

![](https://blessing-skin-manual.vercel.app/api/update?url=https://update.mojy.xyz/blessing-skin/update/update.json)

Specify version: `https://update.mojy.xyz/blessing-skin/update/{version}/update.json`

Currently available version: stable ![](https://blessing-skin-manual.vercel.app/api/update?url=https://update.mojy.xyz/blessing-skin/update/stable/update. json),
beta ![](https://blessing-skin-manual.vercel.app/api/update?url=https://update.mojy.xyz/blessing-skin/update/beta/update.json),
rc ![](https://blessing-skin-manual.vercel.app/api/update?url=https://update.mojy.xyz/blessing-skin/update/rc/update.json),
alpha ![](https://blessing-skin-manual.vercel.app/api/update?url=https://update.mojy.xyz/blessing-skin/update/alpha/update.json)

If you encounter problems during use, please email me: [@SANYIMOE](mailto:abcd2890000456@126.com)

### cdn.monika.love

Address: `https://cdn.monika.love/bs/update.json`

![](https://blessing-skin-manual.vercel.app/api/update?url=https://cdn.monika.love/bs/update.json)

### static-cdn.zerodream.net

Address: `https://static-cdn.zerodream.net/bss/`

![](https://blessing-skin-manual.vercel.app/api/update?url=https://static-cdn.zerodream.net/bss/)

The address takes optional parameters:

````
https://static-cdn.zerodream.net/bss/{channel}/{version}/{subversion}/{build}
````

Among them optional parameters (without any parameters, the default is to build the latest version of the stable build):

1. channel update channel, can be stable, rc, beta, alpha
2. version The main version number, currently there are 4, 5, 6
3. Subversion detailed version number, such as 5.2.0
4. build build number, such as 1, corresponds to the last digit in 6.0.0-rc.1

The update source server code has been open sourced at [kasuganosoras/bss-update](https://github.com/kasuganosoras/bss-update).

### cdn.mc9y.com

Latest version: `https://cdn.mc9y.com/bs/update.json`

![](https://blessing-skin-manual.vercel.app/api/update?url=https://cdn.mc9y.com/bs/update.json)

Specify the version: `https://cdn.mc9y.com/bs/{version}/update.json`