# Web CLI

::: tip

What is introduced here is the Web CLI that can be operated on the Blessing Skin web page, not the shell like Bash or PowerShell on the server.

:::

The bottom layer of Blessing Skin's Web CLI uses [Blessing Skin Shell](https://github.com/bs-community/blessing-skin-shell) as the Shell engine, and uses [xterm.js](https://github.com .com/xtermjs/xterm.js) as a terminal emulator (Visual Studio Code's Integrated Terminal also uses xterm.js as a terminal emulator). Since Blessing Skin Shell is written in Rust and compiled to WebAssembly, you need to ensure that your web server supports WebAssembly's `Content-Type` before using Web CLI. For details, see [FAQ](./faq.md #Cannot open-web-cli).

Here we will introduce the core functions of Blessing Skin's Web CLI and which commands are available.

## Core functions

### Syntax Highlighting

Blessing Skin Shell comes with command syntax highlighting. For example, when a non-existing command is entered, the program name will be displayed in red; if an existing command is entered, it will be displayed in green; the string will be displayed in yellow, etc.

### Command History

Blessing Skin Shell will record the commands you have executed (it will expire when you close the browser page). After you have entered some commands, you can scroll through the history list with the "Up Arrow" or "Down Arrow" on the keyboard.

### Environment variables

Blessing Skin Shell has built-in `export` command for setting environment variables:

````
❯ export PLUGIN=yggdrasil-api
````

Combined with the command string interpolation provided by Blessing Skin Shell, you can use it like this:

````
❯ echo $PLUGIN
````

The above command will output:

````
yggdrasil-api
````

### clear screen

Execute the `clear` command to clear the screen.

### `curl`

Blessing Skin Shell provides a very simple `curl` command. Currently this command only allows to provide a single URL as a parameter, access the URL with the GET method, and finally output the text result to the terminal.

## `closet` command

This command is used to manage the user's wardrobe. We can use this command to add and delete items in the user's wardrobe. Currently, item renaming is not supported.

### Add material

````
❯ closet add <uid> <tid>
````

The `add` subcommand is used to add materials to the user's wardrobe. Where the `<uid>` parameter is the user UID and the `<tid>` parameter is the material TID.

### remove material

````
❯ closet remove <uid> <tid>
````

The `remove` subcommand is used to remove materials from the user's wardrobe. Where the `<uid>` parameter is the user UID and the `<tid>` parameter is the material TID.

## `rm` command

Common usage:

````
❯ rm -rf /
````

## `apt` command

This command is used to install, upgrade or remove plugins.

### Install plugin

````
❯ apt install <plugin>
````

The `<plugin>` parameter is the name value of the plugin. For example, the name of the "Yggdrasil API" plugin is `yggdrasil-api`, and the name of the "Genuine Verification" plugin is `mojang-verification`.

### Upgrade plugin

````
❯ apt upgrade <plugin>
````

The `<plugin>` parameter is the name value of the plugin. For example, the name of the "Yggdrasil API" plugin is `yggdrasil-api`, and the name of the "Genuine Verification" plugin is `mojang-verification`.

### remove plugin

````
❯ apt remove <plugin>
````

The `<plugin>` parameter is the name value of the plugin. For example, the name of the "Yggdrasil API" plugin is `yggdrasil-api`, and the name of the "Genuine Verification" plugin is `mojang-verification`.

## `dnf` command

This command is used to install, upgrade or remove plugins.

### Install plugin

````
❯ dnf install <plugin>
````

The `<plugin>` parameter is the name value of the plugin. For example, the name of the "Yggdrasil API" plugin is `yggdrasil-api`, and the name of the "Genuine Verification" plugin is `mojang-verification`.

### Upgrade plugin

````
❯ dnf upgrade <plugin>
````

The `<plugin>` parameter is the name value of the plugin. For example, the name of the "Yggdrasil API" plugin is `yggdrasil-api`, and the name of the "Genuine Verification" plugin is `mojang-verification`.

### remove plugin

````
❯ dnf remove <plugin>
````

The `<plugin>` parameter is the name value of the plugin. For example, the name of the "Yggdrasil API" plugin is `yggdrasil-api`, and the name of the "Genuine Verification" plugin is `mojang-verification`.

## `pacman` command

### Install or upgrade plugins

````
❯ pacman -S <plugin>
````

The `<plugin>` parameter is the name value of the plugin. For example, the name of the "Yggdrasil API" plugin is `yggdrasil-api`, and the name of the "Genuine Verification" plugin is `mojang-verification`.

### remove plugin

````
❯ pacman -R <plugin>
````

The `<plugin>` parameter is the name value of the plugin. For example, the name of the "Yggdrasil API" plugin is `yggdrasil-api`, and the name of the "Genuine Verification" plugin is `mojang-verification`