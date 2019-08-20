# 安装指南

虽然不会图文并茂，但我会尽量写详细点，希望你能看懂。

::: tip
如果你在安装过程中遇到任何问题，请先查阅 [常见问题](/faq.md)！
:::

## 检查你的机器是否符合安装需求

具体请查看 [README - 环境需求](https://github.com/bs-community/blessing-skin-server/blob/master/README.md#%E7%8E%AF%E5%A2%83%E8%A6%81%E6%B1%82)。

Blessing Skin 有自带运行时环境检查（报错以 `[Error]` 开头），遇到这种情况就说明你的环境不符合需求。

## 下载安装包

首先你要明白，我提供的安装包是由两个部分组成的：

- Blessing Skin 皮肤站本体的源码
- 依赖库以及前端构建文件

如果你直接从 GitHub 上拉取代码是无法直接使用的，因为其中只包含了本体源码，而没有包含依赖库等其他必须的文件。所以，你必须 **下载完整安装包** 或者 [自行构建](https://github.com/bs-community/blessing-skin-server/blob/master/README.md#%E8%87%AA%E8%A1%8C%E6%9E%84%E5%BB%BA)（不是所有人都会）。

所以，如果你没有相应的技术基础，请下载完整安装包。

各版本的完整安装包可以在这里找到：[GitHub Releases](https://github.com/bs-community/blessing-skin-server/releases)

注意，你应该下载类似 `blessing-skin-server-xxx.zip` 的文件，而不是下载 `Source Code`。

## 解压安装包

解压到你喜欢的地方去，必须保证 `public/index.php` 在网站根目录下。

## 配置 URL 重写规则（伪静态）

大多数虚拟主机用户的 Web Server 都是 Apache，本程序自带开箱即用的 `.htaccess`，所以这些用户无需进行任何操作（前提是安装好并开启 URL 重写模块），直接进入下一步即可。

如果你使用的是 Nginx 或者其他 Web Server，你需要手动配置 URL 重写规则。

下面以 Nginx 为例：

1. 找到你的 Nginx 站点配置文件（也就是你这个域名的 `server {}` 块）
2. 在 `server {}` 块中适当的地方添加如下规则：

```nginx
root /path/to/your/blessing-skin/public;

location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

注意上面的 `root` 配置项，务必使它指向皮肤站的 `public` 目录。

> 如果你用的是 lnmp 一键包、某某面板之类的东西添加的站点配置，请阅读 [Issue #46 - 图片无法显示](https://github.com/printempw/blessing-skin-server/issues/46) 并查看你的配置文件中是不是也有类似的东西。

什么？你不知道你的 `nginx.conf` 在哪，也不知道该把这一段加在哪里？

换 Apache 吧。

## 测试伪静态是否生效

打开你的浏览器，访问 `http://你的皮肤站地址/setup`。

如果显示 404 且页面上没有任何 `Blessing Skin` 字样，就说明伪静态没生效，请根据前面的指导重新检查。

如果正确显示了安装界面，就可以继续了。

## 运行安装向导

如果上个步骤中你配置的数据库连接信息没出错的话，现在访问皮肤站就可以看到欢迎页面了：

![Welcome Page](https://i.loli.net/2018/02/08/5a7c1b7f4ab66.png)

跟着安装向导填写必要信息即可快速完成安装。

## 安装完成

不出意外的话，你已经完成了 Blessing Skin 的安装，尽情使用吧。

**如果你在安装过程中遇到任何问题，请先查阅 [常见问题](/faq.md)，确认你遇到的问题不在此列后，再依照 [报告问题的正确姿势](/report.md) 中的要求联系开发者。**
