# v5 Release Note

::: tip

详细的更新内容可阅读 [Change Log](https://github.com/bs-community/blessing-skin-server/blob/dev/resources/misc/changelogs/zh_CN/5.0.0.md)。

:::

5.0.0 版本是 4.4.0 版本之后一次大更新。来看看 5.0.0 版本都有哪些变化。

[[toc]]

## 新 UI 风格

得益于 AdminLTE 和 Bootstrap 的更新，Blessing Skin 迎来了新的 UI：

![Screenshot_20200707_095136.png](https://i.loli.net/2020/07/07/mtLUuMNwWGrAPsz.png)

此外，我们还基于新版的 AdminLTE 调整了皮肤库等的页面：

![Screenshot_20200707_095807.png](https://i.loli.net/2020/07/07/XfIW29ASv43zhTu.png)

此外，Blessing Skin 现在还支持更多种的 UI 主题色选择：

![Screenshot_20200707_103219.png](https://i.loli.net/2020/07/07/QCHAm21bwPvtqzN.png)

## 新「举报管理」页面

我们重新设计了「管理面板」中的「举报管理」页面，取代了原来的纯列表页面：

![Screenshot_20200707_100204.png](https://i.loli.net/2020/07/07/42gZmEHb9lpJPRQ.png)

在新的「举报管理」页面中，我们可以更直观地查看被举报的材质，以便更快速地判断举报情况。单击左侧的某个材质，即可在右边进行 3D 预览。举报信息被收纳在卡片的底部；点击「齿轮」图标则可以对举报进行处理。另外，我们还用不同颜色的标签来表示举报的状态，在有较多的举报时能一目了然：

![Screenshot_20200707_100931.png](https://i.loli.net/2020/07/07/iqrgs6A7TFuzCEk.png)

在默认情况下，「举报管理」页面只显示需要被处理的举报，并按举报的时间降序排序。如需要显示所有的举报，清除上方筛选器的筛选条件然后点击「搜索」即可。

## 新增「运行状态」页面

我们增加了「运行状态」页面。利用这个页面我们可以查看当前 Blessing Skin 相关的运行信息。当在使用 Blessing Skin 时如果遇到错误，可以将此页面的信息发送给开发者以帮助解决问题。

![Screenshot_20200707_101623.png](https://i.loli.net/2020/07/07/rPgIE9T2BAO3546.png)

## 新「插件管理」页面

我们借鉴了 Flarum，重新设计了「插件管理」页面：

![Screenshot_20200707_102457.png](https://i.loli.net/2020/07/07/igzsZ7k9oaHYfEn.png)

这些图标基于 Font Awesome，图标的背景颜色种类由 AdminLTE 提供。插件的作者如果希望插件能在管理页面显示图标，需要在 `package.json` 文件中定义好；如果没有定义，Blessing Skin 将使用默认的图标和背景颜色，如上图中的「修复 v4 更新」插件。

## 新的插件安装方式

除了从「插件市场」下载并安装插件，现在您还可以在「插件管理」页面中通过手工上传插件 zip 压缩包或指定插件 zip 文件的 URL 来安装插件。

![Screenshot_20200707_103045.png](https://i.loli.net/2020/07/07/WsJ6PSO8XtdFr2B.png)

## UX 改善

### 搜索角色

现在用户可以在角色列表中搜索角色：

![Screenshot_20200707_103531.png](https://i.loli.net/2020/07/07/mdoTBE2DnrIX7qY.png)

### 新的静态材质预览

我们采用了新的预览生成算法，效果如下：

![2.png](https://i.loli.net/2020/07/07/QnZHJXu24daFwWG.png)

### 增强的 3D 材质预览器

现在，3D 材质预览器可以应用不同的背景，例如可以设置灰色背景或黑色背景。我们还提供了几张 Minecraft 截图作为图片背景，通过预览器底部的绿色「左箭头」和「右箭头」按钮可以切换不同的图片背景。

![Screenshot_20200707_104413.png](https://i.loli.net/2020/07/07/zHlTQCWSjFt7U1o.png)

![Screenshot_20200707_104453.png](https://i.loli.net/2020/07/07/PvkY17VU8z2CJcG.png)

![Screenshot_20200707_104518.png](https://i.loli.net/2020/07/07/3mkTMZc2J6CNY8P.png)

### 改进的「将材质应用到角色」的对话框

我们对「将材质应用到角色」对话框重新进行了设计。新的对话框中，我们不仅可以搜索角色，还可以看到每个角色对应的头像：

![Screenshot_20200707_105124.png](https://i.loli.net/2020/07/07/VkcRKein35xLgZo.png)

### 查看某个材质的上传者的其它上传

现在，我们可以在皮肤库中，通过点击某个材质卡片底部的上传者昵称来查看该上传者的其它上传。

![Screenshot_20200707_105426.png](https://i.loli.net/2020/07/07/Klfa8bAvSnQrtLU.png)

### 带有自动补全的邮箱输入框

现在，在登录页面和注册页面，邮箱输入框将带有自动补全。这将能方便用户输入邮箱，同时也能在一定程度上减少用户输错邮箱地址的可能性。

![Screenshot_20200707_105909.png](https://i.loli.net/2020/07/07/BSAmpXnUfCN2ylL.png)

这个补全中的邮箱域名还可以在插件中使用 JavaScript 来修改。

### 材质详情页中的信息栏

我们对材质详情页中的信息栏进行了调整，同时显示该材质上传者的 badges。

![Screenshot_20200709_105515.png](https://i.loli.net/2020/07/09/QEvlCM28G51kjXR.png)

### 对移动端友好的管理界面

我们对「用户管理」页面和「角色管理」页面进行了增强，使其在移动端和在屏幕尺寸较大的环境下显示两种不同的布局。例如在 PC 中访问，会显示数据表格；而在移动端则将每条数据以卡片的形式呈现：

![Screenshot_20200714_112332.png](https://i.loli.net/2020/07/14/odnShmC648Ki3FE.png)

并且两种布局可以随时切换。

## 语言与文本

### 自定义 UI 文本

有时候您可能希望能修改 Blessing Skin 中的 UI 文本，但在 v5 之前只能以通过编写 YAML 文件的方式来覆盖，这是很麻烦的。

v5 里我们带来了直观的文本修改方式。我们在「管理面板」中增加了「多语言」页面，在这个页面中我们可以自定义 UI 文本。详细的使用方法可参见本手册中的 [自定义 UI 文本](./ui-text.md)。

### 国际化

得益于社区的贡献，v5 现在增加了西班牙语翻译。感谢 [@poopingpenis](https://github.com/poopingpenis)。

同时我们也欢迎各位能加入我们的 [Crowdin 项目](https://crowdin.com/project/blessing-skin) 来为我们提供其它语言的翻译。

## Web CLI

Web CLI 是一个仅对管理员可见的一个在线命令行工具。管理员进入到「管理面板」，点击页面右上方的用户菜单，可以在下拉菜单中找到「Web CLI」一项。点击将会弹出一个终端模拟器，并可在其中输入并执行命令。

![Screenshot_20200709_113439.png](https://i.loli.net/2020/07/09/pFwgrcCjsohWqHK.png)

这是一个允许我们以命令行的方式来管理 Blessing Skin 的工具，内部使用 [Blessing Skin Shell](https://github.com/bs-community/blessing-skin-shell) 作为引擎。目前可以进行管理用户衣柜、安装或删除插件操作。本手册中的 [Web CLI](./web-cli.md) 有详细介绍。

## 其它

### 第三方登录

我们以插件的形式增加了第三方登录的功能。现在，您可以让您的用户使用他们的 GitHub 账号或 Microsoft Live 账号或 LittleSkin 账号或 Google 账号来直接登录 Blessing Skin，而不需要注册、不需要输入密码登录。具体使用方法可阅读本手册的 [第三方登录](./oauth.md) 一文。

![Screenshot_20200714_111131.png](https://i.loli.net/2020/07/14/ymQshrNnB4pAq7g.png)

### 新的密码哈希算法

我们增加了新的密码哈希算法 Argon2i。不过，默认的算法仍然是 Bcrypt，因此如果要使用就需要修改 `.env` 文件。

### 角色名规则放宽

在开启「角色名允许使用 CJK」的选项后，角色名现在可以包含「§」字符。这个字符通常被用于在 Minecraft 中进行颜色控制。

### 自定义材质存储目录

通过配置 `.env` 文件中的 `TEXTURE_DIR` 选项（默认没有，需要手动添加），可以修改材质的存储目录。

### 数据库调整

`users` 表的 `ip` 字段的长度已被更改以便支持 IPv6。

MySQL/MariaDB 现在也默认使用 `utf8mb4` 编码以支持 Emoji。

### 头像与材质预览图

头像与材质预览图的格式现已更改为 WebP 格式。某些服务器的 GD 扩展可能未包含 WebP 支持，Blessing Skin 将自动降级使用 PNG 格式。此外，浏览器也应该更新到较新版本以支持 WebP 格式。（特别是 Safari 用户）

另一个和头像、材质预览图有关的重要变更是 API 发生了变化。新的 API 使用方法可参见本手册中的 [头像与预览图 API](./api/avatars-and-previews.md)。

## 代码库与工程

### Laravel

Laravel 已被更新到 7.x，您可以在「运行状态」页面中查看当前的 Laravel 版本。

### 前端

前端已经过基于 React 的完全重写，所有的前端代码均使用 TypeScript 进行编写，并在 CI 中执行类型检查。webpack 的构建过程中也不再包含 Babel。

## 最后

v5 的正式版距 4.4.0 的发布已有近一年的时间，其间我们发布了 9 个 beta 版本和 5 个 RC 版本，并收到了很多反馈。感谢各位参与使用 v5 测试版和开发版的用户。