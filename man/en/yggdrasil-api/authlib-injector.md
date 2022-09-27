# Authlib Injector

This plugin is only based on the original user system of the Blessing Skin skin station, and fully implements a set of APIs that conform to the Yggdrasil API specification (this set of specifications is the official Mojang API for authentic Minecraft login authentication), and we must use [authlib-injector](https://github.com/yushijinhun/authlib-injector) This program replaces the "Mojang genuine login API address" in the game with the "Yggdrasil API address provided by the skin station" at runtime, thereby Implement an external login system.

## Configure Launcher

If you or the skin station you are using has the "Mojang Verification" plug-in installed, and your account has been authenticated, you can use **any launcher** (only need to allow custom JVM parameters), and then in Modify the JVM parameters in the launcher settings to make the game client load authlib-injector.

Take HMCL3 as an example:

![hmcl3-tutorial](https://i.imgur.com/YC47PWh.png)

Take MCCL as an example:

![mccl-tutorial](https://i.imgur.com/uvRNC6U.png)

## Setup Authlib-Injector for Server

::: tip
To use this external login scheme, you must set `online-mode` to `true` in `server.properties`.

If you are using BungeeCord, authlib-injector needs to be loaded on all servers, but only BungeeCord should have `online-mode` turned on, other servers should have `online-mode` turned off.
:::

How to modify the server startup parameters, please refer to [Using authlib-injector on the Minecraft server](https://github.com/yushijinhun/authlib-injector/wiki/%E5%9C%A8-Minecraft-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%BD%BF%E7%94%A8-authlib-injector).

Example:

The script used to start the Minecraft server generally looks something like this (users using `.bat` files should use a text editor to open and modify. Your startup command may be slightly different from the example, this is normal. In your own The part similar to `-jar xxx.jar` can be found in the startup command):

````
java -Xmx1024M -Xms1024M -jar minecraft_server.1.12.2.jar nogui
````

Next please insert [`-javaagent`](https://github.com/yushijinhun/authlib-injector/wiki/%E5%90%AF%E5%8A%A8%E5%99%A8%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83#%E6%B7%BB%E5%8A%A0-jvm-%E5%8F%82%E6%95%B0) in the **correct place** (before `-jar xxx.jar`) in the startup command) parameter.

Suppose:

- You downloaded a file named `authlib-injector-1.1.18-daa6fb4.jar`
- and put it in the same directory as the server core `minecraft_server.1.12.2.jar`
- Your Yggdrasil server API Root is `https://example.com/api/yggdrasil`

Then you should modify the example startup command above to this:

````
java -Xmx1024M -Xms1024M -javaagent:authlib-injector-1.1.18-daa6fb4.jar=https://example.com/api/yggdrasil -jar minecraft_server.1.12.2.jar nogui
````

## Setup Authlib-Injector for Client

It should be noted that authlib-injector implements runtime bytecode substitution through the JVM's `-javaagent` parameter, so you must ensure that:

- Launcher supports authentication using custom Yggdrasil API
- Minecraft game base correctly loads authlib-injector
- Minecraft server loaded with authlib-injector (must be `online-mode=true`)

**The above three must use the same Yggdrasil API. **

Otherwise it will appear:

- can not log in
- Doesn't show skins or shows clutter
- Unable to enter server

and so on.

## Congratulations!

If the Gears of Fortune did not go wrong, you should already be able to **login normally, enter the server normally, and see your skin**.

![Snipaste_2018-02-21_22-58-37.png](https://i.loli.net/2018/02/21/5a8d89606b803.png)

If not, unfortunately, see [Troubleshooting](./troubleshooting.md) to rule out possible causes of the error.