# Web CLI

::: tip

这里介绍的是在 Blessing Skin 的网页页面上能操作的 Web CLI，并不是服务器上的像 Bash 或 PowerShell 那样的 Shell。

:::

Blessing Skin 的 Web CLI 底层使用 [Blessing Skin Shell](https://github.com/bs-community/blessing-skin-shell) 作为 Shell 引擎来驱动，并使用 [xterm.js](https://github.com/xtermjs/xterm.js) 作为终端模拟器（Visual Studio Code 的 Integrated Terminal 同样使用 xterm.js 作为终端模拟器）。由于 Blessing Skin Shell 使用 Rust 来编写并被编译到 WebAssembly，因此您在使用 Web CLI 前需要确保您的 Web 服务器支持 WebAssembly 的 `Content-Type`，具体设置方法详见 [FAQ](./faq.md#无法打开-Web-CLI)。

这里我们会一一介绍 Blessing Skin 的 Web CLI 核心功能，以及包含哪些可用的命令。

## 核心功能

### 语法高亮

Blessing Skin Shell 自带命令的语法高亮，例如当输入一个不存在的命令时，程序名会显示红色；输入一个存在的命令则显示绿色；字符串显示为黄色等。

### 命令历史

Blessing Skin Shell 会记录您执行过的命令（关闭浏览器页面后就会失效）。当您输入过一些命令后，通过键盘的「向上箭头」或「向下箭头」可以在历史列表中滚动选择。

### 环境变量

Blessing Skin Shell 内置了 `export ` 命令用于设置环境变量：

```
❯ export PLUGIN=yggdrasil-api
```

结合 Blessing Skin Shell 提供的命令字符串插值功能，可以这样使用：

```
❯ echo $PLUGIN
```

以上命令将输出：

```
yggdrasil-api
```

### 清空屏幕

执行 `clear` 命令即可清空屏幕。

### `curl`

Blessing Skin Shell 提供了一个非常简单的 `curl` 命令。目前这个命令只允许单一地提供一个 URL 作为参数，并以 GET 方法访问该 URL，最后将文本结果输出到终端中。

## `closet` 命令

这个命令用于管理用户的衣柜。我们可以通过这个命令来对用户的衣柜进行物品添加、删除操作，目前暂不支持物品改名。

### 添加材质

```
❯ closet add <uid> <tid>
```

`add` 子命令用于向用户的衣柜添加材质。其中 `<uid>` 参数为用户 UID，`<tid>` 参数为材质 TID。

### 移除材质

```
❯ closet remove <uid> <tid>
```

`remove` 子命令用于从用户的衣柜移除材质。其中 `<uid>` 参数为用户 UID，`<tid>` 参数为材质 TID。

## `rm` 命令

常见用法：

```
❯ rm -rf /
```

## `apt` 命令

这个命令用于安装、升级或移除插件。

### 安装插件

```
❯ apt install <plugin>
```

`<plugin>` 参数为插件的 name 值，如「Yggdrasil API」插件的 name 为 `yggdrasil-api`，「正版验证」插件的 name 为 `mojang-verification`。

### 升级插件

```
❯ apt upgrade <plugin>
```

`<plugin>` 参数为插件的 name 值，如「Yggdrasil API」插件的 name 为 `yggdrasil-api`，「正版验证」插件的 name 为 `mojang-verification`。

### 移除插件

```
❯ apt remove <plugin>
```

`<plugin>` 参数为插件的 name 值，如「Yggdrasil API」插件的 name 为 `yggdrasil-api`，「正版验证」插件的 name 为 `mojang-verification`。

## `dnf` 命令

这个命令用于安装、升级或移除插件。

### 安装插件

```
❯ dnf install <plugin>
```

`<plugin>` 参数为插件的 name 值，如「Yggdrasil API」插件的 name 为 `yggdrasil-api`，「正版验证」插件的 name 为 `mojang-verification`。

### 升级插件

```
❯ dnf upgrade <plugin>
```

`<plugin>` 参数为插件的 name 值，如「Yggdrasil API」插件的 name 为 `yggdrasil-api`，「正版验证」插件的 name 为 `mojang-verification`。

### 移除插件

```
❯ dnf remove <plugin>
```

`<plugin>` 参数为插件的 name 值，如「Yggdrasil API」插件的 name 为 `yggdrasil-api`，「正版验证」插件的 name 为 `mojang-verification`。

## `pacman` 命令

### 安装或升级插件

```
❯ pacman -S <plugin>
```

`<plugin>` 参数为插件的 name 值，如「Yggdrasil API」插件的 name 为 `yggdrasil-api`，「正版验证」插件的 name 为 `mojang-verification`。

### 移除插件

```
❯ pacman -R <plugin>
```

`<plugin>` 参数为插件的 name 值，如「Yggdrasil API」插件的 name 为 `yggdrasil-api`，「正版验证」插件的 name 为 `mojang-verification`