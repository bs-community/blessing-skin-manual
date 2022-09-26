# migrate

If you were using an in-game login plugin like Authme and want to switch to this project, you may want to be aware of the UUID issue.

## Overview

Minecraft (1.7.6+) now uses UUIDs to uniquely identify players. When you log in with the official Mojang version, a player's UUID is obtained from Mojang's authentication server; similarly, when you use this solution, a player's UUID is obtained from the skin station .

In offline mode (`online-mode=false`, i.e. pirated server), the player's UUID is generally generated based on the player's name.

Then when you use this external login solution on a server that is originally in offline mode, since `online-mode=true` is set, the server will get the player's UUID from the Yggdrasil API plugin on the skin station. Obviously, the UUID obtained by the server from the skin station is definitely different from the UUID generated when using offline mode before, which causes the following situation:

- Player position and spawn point are reset
- Player inventory and ender chests are emptied
- All mods that recognize people by UUID don't recognize you anymore

and so on.

## Modify the UUID generation algorithm of the skin station

For maximum compatibility with offline mode, the skin station provides the option to modify the UUID generation algorithm.

![screenshot](https://i.loli.net/2018/07/09/5b4316adcc533.png)

Select `Version 3` to have the skin station use the UUID generation algorithm in offline mode. The benefit of this is that you can switch your server back to offline mode at any time, and deprecating the authlib-injector external login scheme won't affect your server too much.

At the same time, if you use BungeeCord to provide both "external login" and "piracy + plug-in login", please also use `Version 3` to prevent the inconsistency of player UUIDs in each sub-server.

If your original server is in offline mode (`online-mode=false`, that is, a pirated server), then you have completed the migration work here.

Under normal circumstances, you do not need to continue reading. The following two methods of importing UUIDs may only be useful in the following cases:

- Your server was originally a genuine server
- Your server was originally using another Yggdrasil authentication server, and the original Yggdrasil authentication server used a different UUID generation algorithm than in offline mode (such as the earlier "unified pass", or other BS instances that used randomly generated UUIDs)
- You just don't want to use the set of UUID generation algorithms in offline mode

**Note: Importing the wrong UUID may cause unpredictable problems, please proceed with caution. **

## Reference link (English)

- https://www.reddit.com/r/feedthebeast/comments/6jvjzt/how_do_you_transfer_an_offline_server_to_online/
- https://www.minecraftforum.net/forums/support/server-support/2254587-player-data-migration-between-offline-and-online