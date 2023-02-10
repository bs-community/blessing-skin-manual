# 安装指南

虽然不会图文并茂，但我们会尽量用通俗的语言写详细点，希望你能看懂。

::: tip 提示
如果你在安装过程中遇到任何问题，请先查阅 [常见问题解答](/faq.md)，确认你遇到的问题不在此列后，再依照 [报告问题的正确姿势](/report.md) 中的要求联系开发者。
:::

## 检查你的机器是否符合安装需求

### 基本要求

流畅运行 Blessing Skin 对你的服务器的配置的要求非常低（除非你运营的是一个巨型皮肤站）。你需要检查的是你的运行环境。

Blessing Skin 支持 Nginx 或 Apache 以及 Caddy 作为 Web 服务器，不支持 IIS。PHP 版本必须为 8.0.2 或以上。

### 必需的 PHP 扩展

请确保这些扩展已经安装并开启：

- OpenSSL >= 1.1.1 (TLS 1.3)
- PDO
- Mbstring
- Tokenizer
- GD
- XML
- Ctype
- JSON
- fileinfo
- zip

 ### 必须开启的函数

这些函数不能被禁用，请在安装前检查您的 `php.ini`：

- `symlink`
- `readlink`
- `putenv`
- `realpath`

### 其它

Blessing Skin 有自带一些运行时环境检查（报错以 `[Error]` 开头），遇到这种情况就说明你的环境不符合需求。

::: tip 建议

除非有特别需要，我们不建议使用 Windows 作为服务器的操作系统。使用 Windows 不仅会影响皮肤站的运行效率，还有可能会产生一些不会在 Linux 上出现的奇怪问题。

:::

::: warning 针对使用宝塔面板的用户

如果您在使用宝塔面板，请取消所有被禁用的函数（若安装有多个 PHP，需要对所有的版本进行同样的操作），并关闭防跨站安全设置。

当然，我们建议您最好不要使用此类面板软件。

:::

## 下载安装包

各版本的完整安装包可以在这里找到：[GitHub Releases](https://github.com/bs-community/blessing-skin-server/releases)

::: tip 提示
你应该下载文件名类似 `blessing-skin-server-xxx.zip` 的文件，而不是下载 `Source Code`。
:::

## 解压安装包

把安装包解压到你喜欢的地方去，必须保证 `index.php` 在网站根目录下的 `public` 目录下。

## 复制配置文件

对于 Windows 用户，请将 `.env.example` 文件重命名为 `.env.`（注意末尾有一个小数点），此时 Windows 会自动把末尾的小数点去掉；其它操作系统的用户通过命令行 `cp .env.example .env` 即可。

## 生成 app key

`APP_KEY` 被用于加密 Session 等数据，对 Blessing Skin 来说是不可缺少的。执行以下命令生成 app key：

```
php artisan key:generate
```

如果没有生成 app key，访问页面时会出现「No application encryption key has been specified.」的错误提示。

## 配置 URL 重写规则（伪静态）

### Apache 用户

请将站点根目录设置为网站根目录下的 `public` 目录（而不是根目录），并确保你安装好并启用了 URL Rewrite 模块。同时请检查 Apache 的配置文件中 `AllowOverride` 的值，如果值为 `None` 请把它改成 `All`。

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

### Caddy 用户

1. 找到你的 Caddy 站点配置文件，文件名通常会是 `Caddyfile`。

2. 在属于你的站点的配置块中配置如下内容：

```
root * /path/to/your/blessing-skin/public
file_server

try_files {path} {path}/ /index.php?{query}
```

这只是 Caddy 配置的一部分，你需要为你的站点完成其它的基础配置才能使其正常工作。

## 测试伪静态是否生效

打开你的浏览器，访问 `http://你的皮肤站地址/setup`。

如果显示 404 且页面上没有任何 `Blessing Skin` 字样，就说明伪静态没生效，请根据前面的指导重新检查。

如果正确显示了安装界面，就可以继续了。

## 运行安装向导

现在访问皮肤站可以看到欢迎页面了：

![Screenshot_20200707_085439.png](https://i.loli.net/2020/07/07/WGu1oVlTF6AJOw9.png)

跟着安装向导填写必要信息即可快速完成安装。

## 安装完成

不出意外的话，你已经完成了 Blessing Skin 的安装，尽情使用吧。
