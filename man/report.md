# 报告问题的正确姿势

任何事物都不可能永远尽善尽美，Blessing Skin 也是如此。

因此，当你在使用 Blessing Skin 的途中遇到问题时（包括但不限于：你自己无法解决的报错、BUG、安全漏洞），不要气急败坏，请遵守下述规则向开发者提交错误报告。

## 我遇到了问题，我应该怎么做？

首先，你应该确定这到底是不是 Blessing Skin 的锅：机器宕机、网络问题、甚至是你的浏览器出错都会导致你无法正常使用。因此，在向开发者报告问题之前，你应该先以自己的经验判断一下，这到底是不是 Blessing Skin 的锅。如果你自己判断不了，就在互联网上搜索一下吧，_Google is your friend_。

其次，你应该好好阅读一遍 [常见问题解答](/faq.md)，并确保你的问题不在此列。很多情况下你遇到的问题也曾经坑过不少人，并且他们已经总结出了解决方法：那你为什么不看一看呢？

确认你遇到的问题不在其中后，你可以着手准备错误报告了。

:::tip
**推荐阅读：[《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md)**

充分理解这篇文章可以帮助你更好地提问并更快地收到回复和正确的解答（不论何时何地）。但请注意，《提问的智慧》的创作团队仅是提供这一篇文章来指导你如何正确提问，他们并不提供针对任何问题的任何技术支持。**不要做白痴。**
:::

## 开发者不是神

开发者是没法仅通过你的只言片语就定位问题的！

所以，报告问题的时候不要再直接一句「皮肤站不能用了」丢过来然后就再也没有下文了。在没有日志、报错截图等信息的辅助下，我 **不可能** 知道你发生了什么。

## 我应该提供什么信息给开发者以帮助调试？

这也要根据具体情况而定，我这里说几个通用的吧。

### 报错截图

如果是 Blessing Skin 程序的问题，应该会有错误信息提示，请把这个提示截图发给我。

::: tip 提示：
反馈之前请先将 `.env` 配置文件中的 `APP_DEBUG` 的值设置为 `true`，这样可以显示更多的调试信息。
:::

### 日志

错误日志是开发者的好朋友，所以报告问题时请带上这些日志：

1. 皮肤站日志（位于 `storage/logs/laravel.log`）；

如果是游戏内皮肤无法显示等问题，你还需要带上你的皮肤 Mod 日志。例如，CustomSkinLoader 的日志（位于 `.minecraft/CustomSkinLoader/CustomSkinLoader.log`）。

如果是 Yggdrasil 外置登录的问题：

- 游戏服务器从启动开始的所有日志
- 游戏客户端从启动开始的所有日志

### 你的运行环境信息

- 你的 PHP 版本是多少？
- 你用的是什么 Web 服务器？Nginx/Apache？
- 你用的什么数据库？版本是多少？
- 你用什么浏览器访问程序时出现了问题？
- 出现问题时浏览器地址栏上的 URL 是什么？

等等……

## 我该如何联系开发者？

- GitHub Issues
- 加入 Telegram 群组 [@blessing_skin](https://t.me/blessing_skin)

<iframe src="https://discord.com/widget?id=761226550921658380&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
