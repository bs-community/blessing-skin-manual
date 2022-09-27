# Introduction

This is a plugin for [Blessing Skin](https://github.com/bs-community/blessing-skin-server).

By installing this plugin you can add Yggdrasil API support to your Blessing Skin, Skin Station. With [authlib-injector](https://github.com/yushijinhun/authlib-injector), you can achieve a user experience like a genuine login for Minecraft.

Specifically, you can implement these functions:

- Players can register an account on the skin station webpage and log in to the game with the account password of the skin station
- After logging into the launcher, you can directly enter the server without entering commands such as `/login` after entering the server
- Only users logged in in the launcher can access the server
- No need to install any skin mods to display the skins set by the player in the skin station
- Anti-dummy stress test
- Web player management system

And all other Blessing Skin features (including docking forums, etc.).

If you want to know how it works, you can also check out this blog post:
[Another Minecraft external login solution: Implement the Yggdrasil API yourself](https://blessing.studio/minecraft-yggdrasil-api-third-party-implementation/)