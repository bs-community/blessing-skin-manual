# v5 Release Note

::: tip

The detailed update content can be read [Change Log](https://github.com/bs-community/blessing-skin-server/blob/dev/resources/misc/changelogs/zh_CN/5.0.0.md).

:::

Version 5.0.0 is a major update after version 4.4.0. Let's take a look at what's changed in version 5.0.0.

[[toc]]

## New UI style

Thanks to the AdminLTE and Bootstrap updates, the Blessing Skin has a new UI:

![Screenshot_20200707_095136.png](https://i.loli.net/2020/07/07/mtLUuMNwWGrAPsz.png)

In addition, we also adjusted the pages of the skin library etc. based on the new version of AdminLTE:

![Screenshot_20200707_095807.png](https://i.loli.net/2020/07/07/XfIW29ASv43zhTu.png)

In addition, Blessing Skin now supports more UI theme color options:

![Screenshot_20200707_103219.png](https://i.loli.net/2020/07/07/QCHAm21bwPvtqzN.png)

## New "Report Management" page

We have redesigned the "Report Management" page in the "Admin Panel", replacing the original pure list page:

![Screenshot_20200707_100204.png](https://i.loli.net/2020/07/07/42gZmEHb9lpJPRQ.png)

In the new "Report Management" page, we can view the reported materials more intuitively, so as to judge the reporting situation more quickly. Click on a material on the left for a 3D preview on the right. Report information is included at the bottom of the card; click the "gear" icon to handle the report. In addition, we also use labels of different colors to indicate the status of reports, which can be seen at a glance when there are many reports:

![Screenshot_20200707_100931.png](https://i.loli.net/2020/07/07/iqrgs6A7TFuzCEk.png)

By default, the Report Management page only displays reports that need to be processed, sorted by the time of the report in descending order. To display all reports, clear the filter conditions in the filter above and click "Search".

## Added "Running Status" page

We have added a "Running Status" page. Using this page, we can view the running information related to the current Blessing Skin. If you encounter an error while using the Blessing Skin, you can send the information on this page to the developer to help solve the problem.

![Screenshot_20200707_101623.png](https://i.loli.net/2020/07/07/rPgIE9T2BAO3546.png)

## New "Plugin Management" page

We borrowed from Flarum and redesigned the "Plugin Management" page:

![Screenshot_20200707_102457.png](https://i.loli.net/2020/07/07/igzsZ7k9oaHYfEn.png)

These icons are based on Font Awesome, and the background colors of the icons are provided by AdminLTE. If the plugin author wants the plugin to display the icon on the management page, it needs to be defined in the `package.json` file; if not defined, the Blessing Skin will use the default icon and background color, as shown in the "Fix v4 Update" plugin in the above figure .

## New plugin installation method

In addition to downloading and installing plugins from the Plugin Marketplace, you can now install plugins from the Plugin Management page by manually uploading the plugin zip archive or specifying the URL of the plugin zip file.

![Screenshot_20200707_103045.png](https://i.loli.net/2020/07/07/WsJ6PSO8XtdFr2B.png)

## UX improvements

### Search for roles

Now users can search for roles in the role list:

![Screenshot_20200707_103531.png](https://i.loli.net/2020/07/07/mdoTBE2DnrIX7qY.png)

### New static material preview

We adopted a new preview generation algorithm, the effect is as follows:

![2.png](https://i.loli.net/2020/07/07/QnZHJXu24daFwWG.png)

### Enhanced 3D Material Previewer

The 3D material previewer can now apply a different background, for example a gray background or a black background can be set. We also provide several Minecraft screenshots as image backgrounds. You can switch between different image backgrounds through the green "Left Arrow" and "Right Arrow" buttons at the bottom of the previewer.

![Screenshot_20200707_104413.png](https://i.loli.net/2020/07/07/zHlTQCWSjFt7U1o.png)

![Screenshot_20200707_104453.png](https://i.loli.net/2020/07/07/PvkY17VU8z2CJcG.png)

![Screenshot_20200707_104518.png](https://i.loli.net/2020/07/07/3mkTMZc2J6CNY8P.png)

### Improved "Apply Material to Character" dialog

We have redesigned the Apply Material to Character dialog. In the new dialog, we can not only search for characters, but also see the avatar corresponding to each character:

![Screenshot_20200707_105124.png](https://i.loli.net/2020/07/07/VkcRKein35xLgZo.png)

### View other uploads by the uploader of a material

We can now view other uploads by that uploader by clicking on the uploader's nickname at the bottom of a texture card in the skin library.

![Screenshot_20200707_105426.png](https://i.loli.net/2020/07/07/Klfa8bAvSnQrtLU.png)

### Email input box with auto-completion

Now, on the login and registration pages, the email input box will have autocompletion. This will make it easier for users to enter their email addresses, and at the same time reduce the possibility of users entering wrong email addresses to a certain extent.

![Screenshot_20200707_105909.png](https://i.loli.net/2020/07/07/BSAmpXnUfCN2ylL.png)

The email domains in this completion can also be modified using JavaScript in the plugin.

### Information bar in material details page

We have adjusted the information bar in the material details page to also display the badges of the uploader of the material.

![Screenshot_20200709_105515.png](https://i.loli.net/2020/07/09/QEvlCM28G51kjXR.png)

### Mobile friendly management interface

We've enhanced the User Management page and the Role Management page to display two different layouts on mobile and on larger screen sizes. For example, when accessing on a PC, the data table will be displayed; on the mobile terminal, each piece of data will be presented in the form of a card:

![Screenshot_20200714_112332.png](https://i.loli.net/2020/07/14/odnShmC648Ki3FE.png)

And the two layouts can be switched at any time.

## Language and text

### Custom UI text

Sometimes you may want to be able to modify UI text in Blessing Skin, but prior to v5 it was only possible to override it by writing a YAML file, which was cumbersome.

In v5 we brought an intuitive way to modify text. We have added a "Multilingual" page to the "Admin Panel", where we can customize the UI text. For detailed usage, please refer to [Custom UI Text](./ui-text.md) in this manual.

### globalization

Thanks to community contributions, v5 now has a Spanish translation. Thanks to [@poopingpenis](https://github.com/poopingpenis).

We also welcome you to join our [Crowdin Project](https://crowdin.com/project/blessing-skin) to provide us with translations in other languages.

## Web CLI

The Web CLI is an online command line tool only visible to administrators. The administrator enters the "Admin Panel", clicks the user menu at the top right of the page, and you can find the "Web CLI" item in the drop-down menu. Clicking will bring up a terminal emulator where you can enter and execute commands.

![Screenshot_20200709_113439.png](https://i.loli.net/2020/07/09/pFwgrcCjsohWqHK.png)

This is a tool that allows us to manage Blessing Skin from the command line, using [Blessing Skin Shell](https://github.com/bs-community/blessing-skin-shell) internally as the engine. Currently, you can manage user wardrobes, install or delete plug-ins. [Web CLI](./web-cli.md) in this manual is described in detail.

## other

### worth mentioning

We have added third-party login functionality in the form of a plugin. Now, you can let your users log in directly to Blessing Skin using their GitHub account or Microsoft Live account or LittleSkin account or Google account without registration and without entering a password to log in. For specific usage, please read the [Third Party Login](./oauth.md) article in this manual.

![Screenshot_20200714_111131.png](https://i.loli.net/2020/07/14/ymQshrNnB4pAq7g.png)

### New password hashing algorithm

We have added Argon2i, a new password hashing algorithm. However, the default algorithm is still Bcrypt, so you need to modify the `.env` file if you want to use it.

### Character name rules relaxed

Character names can now contain '§' characters when the "Allow CJK in character names" option is turned on. This character is often used for color control in Minecraft.

### Custom material storage directory

By configuring the `TEXTURE_DIR` option in the `.env` file (not by default, you need to add it manually), you can modify the storage directory of materials.

### Database tuning

The length of the `ip` field of the `users` table has been changed to support IPv6.

MySQL/MariaDB now also uses `utf8mb4` encoding by default to support Emoji.

### Avatar and material preview

The format of avatars and texture previews has now been changed to WebP format. Some servers' GD extensions may not include WebP support, and Blessing Skin will automatically downgrade to PNG format. Also, browsers should be updated to newer versions to support the WebP format. (especially Safari users)

Another important change related to avatars and texture previews is a change to the API. For the usage of the new API, please refer to [Avatar and Preview API](./api/avatars-and-previews.md) in this manual.

## Codebase and Project

###Laravel

Laravel has been updated to 7.x, you can check the current Laravel version in the Running Status page.

### front end

The frontend has been completely rewritten based on React, all frontend code is written in TypeScript and typechecked in CI. Babel is also no longer included in the webpack build process.

## at last

The official version of v5 has been nearly a year since the release of 4.4.0, during which we issued Published 9 beta versions and 5 RC versions and received a lot of feedback. Thank you to everyone who participated in the beta and development versions of v5.