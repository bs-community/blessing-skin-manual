# Troubleshooting

If you're having trouble, be sure to check the following items before asking for help:

## Whether the skin station plugin you are using is the latest version

Most likely the problem you are experiencing has been fixed in the latest version.

Likewise, please check that your launcher is the latest version.

## Whether the launcher is configured correctly

If you are unable to log in and start the game normally, please refer to [Configuration Launcher](./authlib-injector.md#Configuration Launcher) to check your configuration.

## Whether the game itself loads authlib-injector correctly

If you're using HMCL3, loading the authlib-injector for the base Minecraft game is done automatically by the launcher, so as long as you have HMCL3 configured correctly, this step is generally not a problem.

If you are using another launcher, please turn on the "view log/show log" option of the launcher and restart the game (`.minecraft/logs/latest.log` will not have this part of the log, Note also) and observe if the following words appear in the startup log:

````
[authlib-injector] launched from premain
[authlib-injector] api root: https://skin.test/api/yggdrasil
[authlib-injector] fetching metadata
[authlib-injector] transform [https://sessionserver.mojang.com/session/minecraft/profile/] to [https://skin.test/api/yggdrasil/sessionserver/session/minecraft/profile/]
[authlib-injector] transform [https://sessionserver.mojang.com/session/minecraft/join] to [https://skin.test/api/yggdrasil/sessionserver/session/minecraft/join]
[authlib-injector] transform [https://sessionserver.mojang.com/session/minecraft/hasJoined] to [https://skin.test/api/yggdrasil/sessionserver/session/minecraft/hasJoined]
````

If so, you have authlib-injector loaded correctly. If not, reconfigure the JVM parameters in your launcher.

![Snipaste_2018-02-21_23-09-00.png](https://i.loli.net/2018/02/21/5a8d8ba9eb94e.png)

At this point you should be able to enter the single player game and see that the skin you set in the skin station is loaded correctly.

## Whether the server is configured correctly

Same as above, if the server loads authlib-injector correctly, you should see the following output in the console:

````
[authlib-injector] launched from premain
[authlib-injector] api root: https://skin.test/api/yggdrasil
[authlib-injector] fetching metadata
[22:56:36] [main/INFO]: [STDERR]: [authlib-injector] transform [https://sessionserver.mojang.com/session/minecraft/profile/] to [https://skin.test /api/yggdrasil/sessionserver/session/minecraft/profile/]
[22:56:36] [main/INFO]: [STDERR]: [authlib-injector] transform [https://sessionserver.mojang.com/session/minecraft/join] to [https://skin.test/ api/yggdrasil/sessionserver/session/minecraft/join]
[22:56:36] [main/INFO]: [STDERR]: [authlib-injector] transform [https://sessionserver.mojang.com/session/minecraft/hasJoined] to [https://skin.test/ api/yggdrasil/sessionserver/session/minecraft/hasJoined]
````

If not, please refer to [Load authlib-injector for game server](./authlib-injector.md#Load-authlib-injector for game server) to configure again.

At this point you should be able to log into the server and see your own and others' skins load correctly.

If you can't get into the server, keep reading.

## common problem

### Server returned HTTP response code: 403

If you see the following error when loading authlib-injector:

````
unable to fetch metadata: java.io.IOException: Server returned HTTP response code: 403 for URL: xxx
````

This means that your server blocks access to suspicious User Agents or suspicious HTTP headers. Please check if a similar option is available in your web server or CDN configuration.

In CloudFlare, this option is called Browser Integrity Check (located in `Firewall > Web Application Firewall > Browser Integrity Check`), please turn it off. Other CDN service providers may have similar rules enabled by default, please check.

### Skin cannot be loaded

If you are able to enter the game but cannot load the skin, please check:

- Whether the whitelist of the skin domain name in the "Plugin Configuration" in the background of the skin station is correct
- Whether the material digital signature is correct (key pair configuration in plugin configuration)
- Whether your skin site server or CDN blocks requests for texture images
- Whether the network from the client to the skin station is unblocked

Under normal circumstances, there will also be corresponding errors in the client log, please refer to the possible causes.

Note that this method does not support "HD skins / capes", if you really need it, please use skin mods such as CSL.

### Unable to enter server

Generally speaking, this means that there is a problem with the Yggdrasil API of your game client, game server or skin station. In order to quickly locate the problem and reduce the time required for troubleshooting, you can use the "Sample Yggdrasil Authentication Server" we provide to confirm that the problem you encounter is on the launcher, game client, or game server.

Instructions:

1. Use `https://auth-demo.yushi.moe/` as the API Root to fill in the configuration of the launcher, client and game server (that is, put the `https://skin site address/ in your previous configuration) api/yggdrasil` is modified to `https://auth-demo.yushi.moe`);
2. Use email `test2@example.com` and password `222222` to log in and start the game;
3. Attempt to enter the server.

If you modify the API Root of the original skin station to the "Sample Yggdrasil API" provided above, you can enter the game, load the skin, and join the server normally, then it means that the problem you encountered is on the **skin station** , please contact us to troubleshoot errors. If the problem still exists after using the sample API, it means that your problem is caused by the wrong configuration of the launcher, client or game server. Please refer to the configuration tutorial in this document to reconfigure the relevant configuration.

![2018-07-06_21.40.19.png](https://i.loli.net/2018/07/07/5b3f99f2e9128.png)

Another available sample API is `https://mcskin.littleservice.cn/api/yggdrasil`, you can use LittleSkin account for login test.

## ask for help

If you are still unable to identify the problem after completing the above checks, you can contact us for assistance.