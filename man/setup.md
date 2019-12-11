# 安装指南

虽然不会图文并茂，但我们会尽量用通俗的语言写详细点，希望你能看懂。

::: tip 提示：
如果你在安装过程中遇到任何问题，请先查阅 [常见问题解答](/faq.md)，确认你遇到的问题不在此列后，再依照 [报告问题的正确姿势](/report.md) 中的要求联系开发者。
:::

## 检查你的机器是否符合安装需求

流畅运行 Blessing Skin 对你的服务器的配置的要求非常低（除非你运营的是一个巨型皮肤站）。你需要检查的是你的运行环境。

具体请查看 [README - 环境要求](https://github.com/bs-community/blessing-skin-server/blob/master/README.md#%E7%8E%AF%E5%A2%83%E8%A6%81%E6%B1%82)。

Blessing Skin 有自带一些运行时环境检查（报错以 `[Error]` 开头），遇到这种情况就说明你的环境不符合需求。

## 下载安装包

首先你要明白，我们提供的安装包是由两个部分组成的：

- Blessing Skin 本体的源码
- 依赖库以及前端构建文件

直接从 GitHub 上拉取或者下载的代码是无法直接使用的，因为其中只包含了本体源码，而没有包含依赖库等其他必须的文件。所以，你必须 **下载完整安装包** 或者 [自行构建](build.md)（不是所有人都会）。

为了关爱星际选手，我再念三遍：

<font size=3>👉你必须下载完整安装包！👈</font>

<font size=4>👉你必须下载完整安装包！!👈</font>

<font size=5>👉你必须下载完整安装包！！！👈</font>

各版本的完整安装包可以在这里找到：[GitHub Releases](https://github.com/bs-community/blessing-skin-server/releases)

::: tip 提示：
你应该下载文件名类似 `blessing-skin-server-xxx.zip` 的文件，而不是下载 `Source Code`。
:::

## 解压安装包

把安装包解压到你喜欢的地方去，必须保证 `index.php` 在网站根目录下的 `public` 目录下。

## 生成 app key

`APP_KEY` 被用于加密 Session 等数据，对 Blessing Skin 来说是不可缺少的。执行以下命令生成 app key：

```
php artisan key:generate
```

如果没有生成 app key，访问页面时会出现「No application encryption key has been specified.」的错误提示。

## 配置 URL 重写规则（伪静态）

### Apache 用户

请将站点根目录设置为网站根目录下的 `public` 目录（而不是根目录），并确保你安装好并启用了 URL Rewrite 模块。

Blessing Skin 自带开箱即用的 `.htaccess`，所以你无需额外配置 URL 重写规则，直接进入下一步即可。

### Nginx 用户

1. 找到你的 Nginx 站点配置文件（也就是你这个域名的 `server {}` 块）
   不知道你的 Nginx 站点配置文件在哪儿？建议更换 Apache。

2. 在 `server {}` 块中适当的地方添加如下规则：

```nginx
root /path/to/your/blessing-skin/public;

location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

注意上面的 `root` 配置项，务必使它指向皮肤站的 `public` 目录。

::: tip 提示：
如果你用的是 LNMP 一键包、某某面板之类的东西添加的站点配置，请阅读 [printempw/blessing-skin-server#46](https://github.com/printempw/blessing-skin-server/issues/46) 并查看你的配置文件中是不是也有类似的东西，否则可能导致无法正常显示图片。
:::

## 测试伪静态是否生效

打开你的浏览器，访问 `http://你的皮肤站地址/setup`。

如果显示 404 且页面上没有任何 `Blessing Skin` 字样，就说明伪静态没生效，请根据前面的指导重新检查。

如果正确显示了安装界面，就可以继续了。

## 运行安装向导

现在访问皮肤站可以看到欢迎页面了：

![Welcome Page](https://i.loli.net/2018/02/08/5a7c1b7f4ab66.png)

跟着安装向导填写必要信息即可快速完成安装。

## 安装完成

不出意外的话，你已经完成了 Blessing Skin 的安装，尽情使用吧。
