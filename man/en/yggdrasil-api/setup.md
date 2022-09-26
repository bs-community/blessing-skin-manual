# 安装与配置

## 安装 Blessing Skin 皮肤站

首先请参照 [快速安装向导](/setup.md) 正确安装 Blessing Skin 皮肤站。

如果您在安装过程中遇到了问题，请仔细阅读 [这个页面](/faq.md) 以排除问题。

确保您正确安装了皮肤站后再继续阅读。

## 安装 Yggdrasil API 插件

请在插件市场里找到 Yggdrasil API 插件，下载安装并启用。

## 正确配置 Yggdrasil API 插件

从 Blessing Skin 页面的左侧菜单栏可以进入本插件的配置页面。

要想本插件正确运行，您需要配置一个 **正确的，PEM 格式的，长度至少为 4096bit 的 RSA 私钥**。不过不用担心，v2.1.0 或更高版本的 Yggdrasil API 插件已经搭载了自动生成私钥的功能。一般来说安装后就会自动生成一个符合条件的私钥，可以直接使用。您也可以使用左下角的按钮重新生成一个私钥。

如果需要自定义插件数字签名使用的私钥，请参阅 [签名密钥对](https://github.com/yushijinhun/authlib-injector/wiki/%E7%AD%BE%E5%90%8D%E5%AF%86%E9%92%A5%E5%AF%B9) 生成并提交保存。

![screenshot](https://i.imgur.com/R01OulB.png)

至于其它配置项，如果您不清楚他们是干什么用的，就不要随意改动。

## 插件配置完成

现在访问 `https://您的皮肤站地址/api/yggdrasil`，看到类似这样的页面就表示您已经配置正确了。

::: warning
请注意，Yggdrasil API 的用户邮箱、密码等信息均为明文传输，请为您的服务器启用 HTTPS 以确保安全。

如果使用 Let's Encrypt 的 SSL 证书，Java 版本要求最低为 `8u101`。
:::

![Snipaste_2018-02-21_21-31-40.png](https://i.loli.net/2018/02/21/5a8d74e4cbd0f.png)
