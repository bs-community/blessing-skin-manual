# Setup And Configuration

## Install Blessing Skin Station

First, please refer to the [Quick Setup Guide](/en/setup.md) to install Blessing Skin correctly.

If you encounter problems during installation, please read the [FAQ](/en/faq.md) carefully to troubleshoot the problem.

Make sure you have the Skin Station installed correctly before continuing.

## Install Yggdrasil API plugin

Please find the Yggdrasil API plugin in the plugin market, download, install and enable it.

## Properly configure Yggdrasil API plugin

From the left menu bar of the Blessing Skin page, you can enter the configuration page of this plugin.

For this plugin to work correctly, you need to configure a **correct, PEM formatted RSA private key** of at least 4096bit in length. But don't worry, v2.1.0 or later of the Yggdrasil API plugin already comes with the ability to automatically generate private keys. Generally speaking, a qualified private key will be automatically generated after installation and can be used directly. You can also regenerate a private key using the button in the lower left corner.

If you need to customize the private key used by the plug-in digital signature, please refer to [Signature Key Pair (Chinese)](https://github.com/yushijinhun/authlib-injector/wiki/%E7%AD%BE%E5%90%8D%E5%AF%86%E9%92%A5%E5%AF%B9) Generate and submit for saving.

![screenshot](https://i.imgur.com/R01OulB.png)

As for other configuration items, if you don't know what they are used for, don't change them at will.

## Plugin configuration complete

Now visit `https://your skin site address/api/yggdrasil`, if you see a page like this, it means you have configured it correctly.

::: warning
Please note that the user email, password and other information of the Yggdrasil API are transmitted in clear text, please enable HTTPS for your server to ensure security.

If using a Let's Encrypt SSL certificate, the minimum Java version is `8u101`.
:::

![Snipaste_2018-02-21_21-31-40.png](https://i.loli.net/2018/02/21/5a8d74e4cbd0f.png)