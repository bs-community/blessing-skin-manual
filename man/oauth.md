# 第三方登录

从 Blessing Skin v5 起，我们提供了基于 OAuth2 的第三方登录功能，并以插件的形式实现。借助这些插件，您的用户不需要注册，也不需要输入密码登录，而是利用他们在其它网站或平台上的账号即可直接访问皮肤站。

## 基本

首先要在插件市场安装「OAuth 客户端核心」插件，所有的第三方登录功能都依赖于这个插件。

## Microsoft Live

### 注册应用

打开 [Microsoft Azure](https://portal.azure.com/)，点击「更多服务」：

![Screenshot_20200713_143515.png](https://i.loli.net/2020/07/13/IkhcFadqiUrfYPQ.png)

随后搜索「应用注册」，并点击进入：

![Screenshot_20200713_143629.png](https://i.loli.net/2020/07/13/HeAyG3sv89MR1Wo.png)

点击页面中的「注册应用程序」：

![Screenshot_20200713_143909.png](https://i.loli.net/2020/07/13/lrxyMtE7Qob3Jc2.png)

然后填写「名称」和「重定向 URI」：

![Screenshot_20200713_144118.png](https://i.loli.net/2020/07/13/9ngb7k3wtrDT5zc.png)

其中「名称」可以填写为您的皮肤站名称；「重定向 URI」则根据您的皮肤站地址相应地修改域名，但后面的 `/auth/login/live/callback` 不需要改变。

在添加「品牌打造和属性」的页面有一个「验证发布者域」的东西，需要在 Web 服务器中创建 `/.well-known/microsoft-identity-association.json` 文件。对于 Apache 用户，要注意 `public/.htaccess` 文件声明了禁止对 `.` 开头的目录或文件的访问。因此需要编辑这个文件，在 `RewriteRule (^\.|/\.) - [F]` 上面加一行 `RewriteRule ^\.well-known/microsoft-identity-association\.json$ - [L]`：

```diff
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # You may need to uncomment the following line for some hosting environments,
    # if you have installed to a subdirectory, enter the name here also.
    #
    # RewriteBase /

    # Black list protected files
+   RewriteRule ^\.well-known/microsoft-identity-association\.json$ - [L]
    RewriteRule (^\.|/\.) - [F]
    RewriteRule ^storage/.* - [F]

    # 后面省略……
```

填写完成后点击页面下方的「注册」按钮，并稍等片刻。注册完成后，将得到「应用程序（客户端）ID」，将它复制下来。

![Screenshot_20200713_150328.png](https://i.loli.net/2020/07/13/BPEOTpHVNb1WLus.png)

### 创建密码

在随后出现的页面中，选择页面左侧的「证书和密码」，并点击「+ 新客户端密码」。

![Screenshot_20200713_144850.png](https://i.loli.net/2020/07/13/2i3G8MmSK97JhoY.png)

在表单中将「截止期限」设置为「从不」，「说明」可以填写也可以不填：

![Screenshot_20200713_144921.png](https://i.loli.net/2020/07/13/ZET6qkRWObvmlFu.png)

接着点击「添加」。此时将得到「客户端密码」：

![Screenshot_20200713_150805.png](https://i.loli.net/2020/07/13/OtTxNumLY91cpnb.png)

**注意**：这个密码只会出现一次，所以必须把它复制下来。

### 安装插件

进入 Blessing Skin 的插件市场，下载安装并开启「使用 Microsoft Live 登录」插件。

### 配置插件

插件的配置通过修改 `.env` 文件来进行。在 `.env` 文件中添加以下三项配置：

- `LIVE_KEY` - 应用程序（客户端）ID（注册时由 Azure 自动生成）

- `LIVE_SECRET` - 客户端密码（我们已经在前面添加过一个）

- `LIVE_REDIRECT_URI` - 与我们在注册应用程序时填写的「重定向 URI」相同

根据我们在前面操作的结果，可以像这样填写：（请根据您的实际情况进行修改）

```
LIVE_KEY=f53c3e81-5973-408d-80cd-e603c91caa34
LIVE_SECRET=uC00c-GnlIF199Nw34-K_A~T6sWQmQnW-S
LIVE_REDIRECT_URI=https://localhost/auth/login/live/callback
```

### 完成

用户在注册或登录时，即可选择「Microsoft Live」来登录：

![Screenshot_20200713_151132.png](https://i.loli.net/2020/07/13/F3TQZ1tGVsImgWD.png)

![Screenshot_20200713_151158.png](https://i.loli.net/2020/07/13/xAXh3JLmZwnv1cz.png)

## LittleSkin

### 创建应用

在「用户中心」点击「高级功能」菜单下的「OAuth2 应用」：

![Screenshot_20200713_152743.png](https://i.loli.net/2020/07/13/AoHYj1ngkGzVMdu.png)

点击「创建应用」按钮，并填写表单：

![Screenshot_20200713_152904.png](https://i.loli.net/2020/07/13/4GphFc7WC6rwn8U.png)

其中「应用名」可以填写为您的皮肤站名称；「回调 URL」则根据您的皮肤站地址相应地修改域名，但后面的 `/auth/login/littleskin/callback` 不需要改变。

点击「确定」，随后可以看到刚刚创建的应用：

![Screenshot_20200713_153303.png](https://i.loli.net/2020/07/13/edpgfMz9CnqLJGy.png)

### 安装插件

进入 Blessing Skin 的插件市场，下载安装并开启「使用 LittleSkin 登录」插件。

### 配置插件

插件的配置通过修改 `.env` 文件来进行。在 `.env` 文件中添加以下三项配置：

- `LITTLESKIN_KEY` - 客户端 ID
- `LITTLESKIN_SECRET` - 客户端 Secret
- `LITTLESKIN_REDIRECT_URI` - 回调 URL

根据我们在前面操作的结果，可以像这样填写：（请根据您的实际情况进行修改）

```
LITTLESKIN_KEY=53
LITTLESKIN_SECRET=bgkA4FJy8biGPX33XYMhbbhAIgXHwNhUNvFg6whU
LITTLESKIN_REDIRECT_URI=https://localhost/auth/login/littleskin/callback
```

### 完成

用户在注册或登录时，即可选择「LittleSkin」来登录：

![Screenshot_20200713_174959.png](https://i.loli.net/2020/07/13/esklFQ3MngJVEpa.png)

![Screenshot_20200713_175019.png](https://i.loli.net/2020/07/13/WqEN9c34yXZbCrL.png)

## GitHub

### 注册应用

打开 GitHub，进入设置页面，然后点击左侧栏中的「Developer settings」：

![Screenshot_20200713_180312.png](https://i.loli.net/2020/07/13/XadcJiyp9TlvC8R.png)

在随后的页面中点击左侧栏的「OAuth Apps」：

![Screenshot_20200713_180406.png](https://i.loli.net/2020/07/13/fNKvULY1ijC7dZ2.png)

点击「Register a new application」，并填写表单：

![Screenshot_20200713_180644.png](https://i.loli.net/2020/07/13/t5KRSWIvjw4gu3n.png)

其中，「Application name」填写为您的皮肤站名称；「Homepage URL」为您的皮肤站首页 URL；「Authorization callback URL」则根据您的皮肤站地址相应地修改域名，但后面的 `/auth/login/github/callback` 不需要改变。

点击「Register application」并继续。此时将获得 Client ID 和 Client Secret：

![Screenshot_20200713_180923.png](https://i.loli.net/2020/07/13/jxz5ZYhiIPfvgqe.png)

### 安装插件

进入 Blessing Skin 的插件市场，下载安装并开启「使用 GitHub 登录」插件。

### 配置插件

插件的配置通过修改 `.env` 文件来进行。在 `.env` 文件中添加以下三项配置：

- `GITHUB_KEY` - 对应 GitHub 提供的「Client ID」
- `GITHUB_SECRET` - 对应 GitHub 提供的「Client Secret」
- `GITHUB_REDIRECT_URI` - 对应我们刚刚填写的「Authorization callback URL」

根据我们在前面操作的结果，可以像这样填写：（请根据您的实际情况进行修改）

```
GITHUB_KEY=44551e99fbe2ad35d411
GITHUB_SECRET=65409736106e5fb47eace316dc1b62309f580e47
GITHUB_REDIRECT_URI=https://localhost/auth/login/github/callback
```

### 完成

用户在注册或登录时，即可选择「GitHub」来登录：

![Screenshot_20200713_181510.png](https://i.loli.net/2020/07/13/HG4d6oacFrk5hgD.png)

![Screenshot_20200713_183554.png](https://i.loli.net/2020/07/13/Ci8qelT3cUFOZKm.png)
