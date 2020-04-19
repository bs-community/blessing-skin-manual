# 介绍

这是一个适用于 [Blessing Skin](https://github.com/bs-community/blessing-skin-server) 的插件。

通过安装此插件，您可以为您的 Blessing Skin 皮肤站添加 Yggdrasil API 支持。配合 [authlib-injector](https://github.com/yushijinhun/authlib-injector)，您可以在 Minecraft 中实现宛如正版登录一般的用户体验。

具体来讲，您可以实现这些功能：

- 玩家可以在皮肤站网页中注册账号，并使用皮肤站的账号密码登录游戏
- 在启动器中登录后可以直接进入服务器，不需要进服后输入 `/login` 等命令
- 只有在启动器中登录过的用户才能进入服务器
- 不需要安装任何皮肤 Mod 即可显示皮肤站中玩家设定的皮肤
- 防假人压测
- 网页端玩家管理系统

以及其他所有 Blessing Skin 皮肤站的功能（包括对接论坛等）。

如果您想知道其实现原理，您也可以看看这篇博文：
[又是一种 Minecraft 外置登录解决方案：自行实现 Yggdrasil API](https://blessing.studio/minecraft-yggdrasil-api-third-party-implementation/)
