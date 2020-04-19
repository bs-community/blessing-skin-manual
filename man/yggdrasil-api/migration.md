# 迁移

如果您原来在使用 Authme 之类的游戏内登录插件，并且现在想要切换到本项目的话，您可能需要注意一下 UUID 的问题。

## 概述

现在的 Minecraft（1.7.6+）都是使用 UUID 来唯一性地标识玩家的。当您在使用 Mojang 官方的正版登录时，一个玩家的 UUID 是从 Mojang 的认证服务器那边拿到的；同样地，当您在使用本方案时，玩家的 UUID 是从皮肤站那边拿到的。

而在离线模式中（`online-mode=false`，也就是盗版服），玩家的 UUID 一般是基于玩家名称生成的。

那么当您在一个原本是离线模式的服务器使用本外置登录方案时，由于设定了 `online-mode=true`，服务器会从皮肤站的 Yggdrasil API 插件那边获取玩家的 UUID。显然，服务器从皮肤站那边拿到的 UUID 和之前使用离线模式时生成的 UUID 肯定是不同的，这就造成这样的情况：

- 玩家位置、出生点被重置
- 玩家物品栏、末影箱被清空
- 所有根据 UUID 认人的 Mod 都不认得您了

诸如此类。

## 修改皮肤站的 UUID 生成算法

为了最大限度与离线模式兼容，皮肤站提供了修改 UUID 生成算法的选项。

![screenshot](https://i.loli.net/2018/07/09/5b4316adcc533.png)

选择 `Version 3` 即可让皮肤站使用离线模式下的 UUID 生成算法。这样的好处是您可以随时将您的服务器切换回离线模式，弃用 authlib-injector 外置登录方案不会对您的服务器造成太大影响。

同时，如果您使用 BungeeCord 同时提供「外置登录」与「盗版 + 插件登录」两种进服方式的话，也请使用 `Version 3` 以防止出现各子服务器中玩家 UUID 不一致的情况。

如果您原来的服务器是处于离线模式（`online-mode=false`，也就是盗版服）的话，那么到这里您就已经完成迁移工作了。

一般情况下，您并不需要继续往下阅读。下面两种导入 UUID 的方法，仅在以下情况下可能有用：

- 您的服务器原先是正版服
- 您的服务器原先使用的是其他的 Yggdrasil 认证服务器，并且原 Yggdrasil 认证服务器使用的 UUID 生成算法与离线模式下的不同（比如早期的「统一通行证」，或是其他使用随机生成 UUID 的 BS 实例）
- 您就是不想使用离线模式的那一套 UUID 生成算法

**注意：导入错误的 UUID 可能造成无法预知的问题，请谨慎操作。**

## 参考链接（英语）

- https://www.reddit.com/r/feedthebeast/comments/6jvjzt/how_do_you_transfer_an_offline_server_to_online/
- https://www.minecraftforum.net/forums/support/server-support/2254587-player-data-migration-between-offline-and-online
