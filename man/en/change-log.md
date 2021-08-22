# Change Log

## Unreleased

### Added

- Dark mode.
- New player name rule: allow valid UTF-8 string.
- Russian translations. (Thanks [translators](https://github.com/bs-community/blessing-skin-server/pull/319))

### Changed

- PHP version requirement increased to 7.4.0.
- Disallow to upload single-layer Alex skin.
- Use a "Lock" icon to indicate a private texture in skin library.

### Fixed

- Don't render avatar for non-skin texture.
- Fixed panic on empty notification content.
- Fixed wrong order of loading front-end localization file.
- Fixed category changed when clicking current category tab in closet.
- Fixed page isn't updated when switching category in closet.
- Fixed no checks for capes size.
- Fixed resolving report with non-existing user.
- Fixed duplicated logout modal at home page.

### Removed

- Removed authentication with JWT.

## 5.2.0

### Added

- Support `.well-known/change-password`

### Changed

- Relaxed check of "disabled functions".
- Require submitting email when verifying email.
- Improved UX of forms.

### Fixed

- Fixed missing UI text.
- Fixed that super administrator can delete self.

## 5.1.1

### Fixed

- Fixed calling `route` function when using IPv6.
- Fixed re-enabling an enabled plugin.
- Fixed that front-end i18n files of plugins can't be updated.
- Fixed that default value isn't used when calling `option_localized` function.
- Fixed that texture is missing from uploader's closet when it's set to be private.

## 5.1.0

### Added

- Added API of fetching avatar and preview by texture hash.

### Changed

- Select text automatically when click the hash text at texture detail page.

### Fixed

- Fixed duplicated route names.
- Fixed duplication of private textures.
- Fixed that previews and avatars cannot be indivdually cached by image format.
- Fixed that message for private textures doesn't match with HTTP status code.
- Fixed that texture isn't checked if it's existed in closet when being applied to player.
- Fixed that private texture can be used as avatar.

## 5.0.0

### Added

- Plugin system: `config.blade.php` as default config file name.
- Plugin system: Allow to registering service providers automatically.
- Plugin system: Added Filters API.
- Allow to enable a plugin by running `php artisan plugin:enable {name}`.
- Allow to disable a plugin by running `php artisan plugin:disable {name}`.
- Allow to cache options by running `php artisan options:cache`.
- Support multiple plugins directories. (Splited by comma in ".env" file.)
- Added "Status" page.
- Added support of customizing UI text.
- Spanish support (Greatly thanks [@poopingpenis](https://github.com/poopingpenis))
- Brand new website theme color settings.
- Detect Readme file of plugin automatically.
- Added badge "STAFF" for administrators.
- Added badges at texture detail page.
- Added FAQ link at error page.
- Added login with 3rd-party services. (GitHub and Microsoft Live are supported currently.)
- Added support of character "§" for player name. (Under CJK mode.)
- New password hash algorithm: Argon2i.
- Support searching players when applying textures.
- Support customizing textures storage directory.
- Support searching players at players page.
- Added Blessing Skin Shell.
- Support specifying "from" email address and name when sending email.
- 3D skin viewer can be with background now.
- Added support of installing plugin by uploading archive.
- Added support of installing plugin by submitting remote URL.
- Added support of clicking on the uploader's nickname in skin library to view other uploads of that user.
- Added `php artisan update` command for updating by CLI.
- Allowed to customize fallback locale.

### Changed

- Tweaked policy of retrieve CA cert for GuzzleHttp.
- Refactor account system.
- PHP version requirement is increased to 7.2.5.
- Use `install.lock` file to detect status of installation.
- Load front end i18n text from `lang/front-end.yml` of a plugin automatically.
- Upgraded AdminLTE to v3.
- Lengthened `ip` field in order to support IPv6.
- Optimized performance of validating player name.
- Changed method of retrieving IP.
- Use `utf8mb4` encoding in MySQL/MariaDB.
- Respond with unformatted Profile JSON to reduce bytes.
- Switched to a new PHP texture renderer.
- Display 3D avatar of player when applying texture to player.
- New "Plugins Management" page.
- "Choose Player" Dialog won't be showed if no texture is selected at closet page.
- Make "CSRF token mismatched" error friendly.
- Reduced times of sending verification email.
- Changed icon of "Walking/Running" button of skin viewer.
- Changed API of retrieving all players.
- Changed format of avatar and 2D preview to WebP.
- Reduced some unnecessary SQL queries.
- Improved email input control.
- Extended valid time of Cookie `locale`.

### Fixed

- Some fields at administration panel shouldn't be sortable.
- Add missing l10n text.
- Fixed that model was reset after resetting skin previewing.
- Fixed that error stack doesn't show paths from plugins when AJAX has an error.
- Fixed that error page doesn't display when using an unsupported hash algorithm.
- Fixed fallback when unknown locale is detected.
- Fixed compatibility with PHP 7.4.
- Fixed the display problem for too long texture name.
- Fixed that dependencies and conflicts haven't been checked before installing plugin.
- Fixed retrieving search keyword from query string in skin library.
- Fixed that `lang` attribute of HTML can't be configured correctly.
- Fixed that avatar can't be resized when requesting an non-existed user.
- Fixed that the same texture files with different models were treated as different textures.
- Fixed when uploading duplicated texture, alert is missing.
- Fixed that "score cost per closet item" isn't calculated at "texture upload" page.
- Fixed that administrator can't add private texture to his/her closet.
- Fixed that button "See My Upload" existed when user isn't authenticated.
- Fixed potential "Invalid Signature" issue.
- Fixed that duplicated player name is not detected when updating player name in administration panel.
- Fixed that normal administrator can set other user as administrator.
- Fixed that texture file won't be deleted when deleting texture in reports management.
- Fixed that score calculation at upload page isn't consistent with that at back-end.
- Fixed that new texture name isn't checked when texture is renamed.
- Fixed that player isn't updated after closet item was removed.
- Fixed that number of label of chart in administration didn't rendered as integer.

### Removed

- Removed Artisan command `php artisan key:random`.
- Removed Artisan commands of migration for v3 to v4.
- Dropped support of IIS.
- Removed package `swiggles/memcache`.
- Removed `commit` property from `blessing` global.
- Removed Element UI.
- Removed restriction of texture name and nickname.
- Removed settings of "Method of Retrieving IP".
- Removed "3rd-party comment", and please install separated plugin if you need it.
- Removed enabling or disabling Redis via Web UI.
- Removed Legacy API from core. (Install plugin if you need it.)
- Removed Universal Skin API from core. (Install plugin if you need it.)
- Removed auto update check.
- Removed cache for Profile JSON.
- Removed cache for existence of player.
- Removed settings of "Respond 204 for unexisted players". (Install plugin if you need it.)
- Removed breadcrumb of skin library.

### Internal Changes

- Upgraded Laravel to v7.
- Rewritten almost templates with Twig.
- Rewritten front-end code with React.

## 4.4.0

### Added

- Added experimental Laradock (Docker) support.
- Added option for hiding introduction of home page. (Like 2.x)
- Added option for fixed background.

### Tweaked

- Push notifications to queue for performance.
- Optimized exception stack of Ajax error.
- Optimized validating forms of pages like logining and registering.

### Fixed

- Fixed renaming item in closet.
- Fixed Font Awesome of bottom of home page.
- Fixed loading front-end i18n texts of plugins.
- Fixed redirecting without URL query string after logged in.

## 4.3.6

### Added

- Supported Chrome's `theme-color`.
- Allowed to customize HTTP status code for rejecting accessing private texture.
- Added configurable "Explore" menu.
- Custom `PLUGINS_DIR` with relative path is allowed.
- Added link for editing announcement.
- New plugin API: [`Hook::addUserBadge`](https://bs-plugin.netlify.com/guide/bootstrap.html#%E6%98%BE%E7%A4%BA%E7%94%A8%E6%88%B7-badge).
- New feature: Notifications.
- New plugin API: [`Hook::sendNotification`](https://bs-plugin.netlify.com/guide/bootstrap.html#%E5%8F%91%E9%80%81%E9%80%9A%E7%9F%A5)
- New plugin API: [`Hook::pushMiddleware`](https://bs-plugin.netlify.com/guide/bootstrap.html#%E6%B3%A8%E5%86%8C%E4%B8%AD%E9%97%B4%E4%BB%B6)

### Tweaked

- Tweaked style of chart at administration panel.
- Optimized panel of changing theme color.
- Tweaked some links at closet page.
- Limited that only super administrators can visit update pages.
- Update source specification version has been changed to `2`.

### Fixed

- Fixed that possible duplicated signings.
- Fixed that OAuth tables not created at installation.
- Fixed occasion of `mounted` event of plugins system.

## 4.2.1

### Fixed

- Fixed that the player may not be rendered in the proper model.
- Fixed that "Operations Panel" in "Texture Details" page is shown even if current user is not privileged.
- Fixed that banning the texture uploader will in fact ban the reporter.
- Fixed that an error will occur when handling a report whose texture has been deleted.
- Fixed that user without verified email can access OAuth.

## 4.2.0

### Added

- Chart at administration panel will show today's data.
- New event for plugins: `TextureDeleting`.

### Tweaked

- Preview the player automatically if a user has only one player.
- Allowed to process report more than once.

### Fixed

- Fixed resetting options of "Customize" page.
- Fixed that dashboard of user center cannot be centered. (Thanks @outtimes)
- Fixed data consistency when deleting texture.
- Fixed that model can't walk after resetting model in skin previewer.
- Fixed that state of skin library page can't be saved.

## 4.1.4

### Added

- Detect type automatically when uploading texture.

### Tweaked

- Tweaked UI text.
- Appended commit information at build time.

### Fixed

- Fixed dropdown menu of skin library for mobile users.
- Fixed previewing alex textures.
- Fixed sorting textures in skin library.

## 4.1.3

### Fixed

- Fixed an error when updating.

## 4.1.2

### Fixed

- Fixed possible error on update page.
- Fixed style of language menu.
- Fixed pagination of closet.

## 4.1.1

### Fixed

- Fixed update script

## 4.1.0

### Added

- Allowed to add multiple plugin marketplace registries.
- Supported JWT-based authentication for API.
- Supported OAuth2-based authentication for API.
- Introduced HTTP-based Blessing Skin API. (Experimental and there will be breaking changes.)
- New front end event `i18nLoaded` for plugins.

### Tweaked

- Rejected Internet Explorer users.
- Optimized chart at administration panel.

### Fixed

- Fixed an error when disabling plugin in some cases.
- Fixed that navigation bar would turn transparent when scrolling even transparent bar was disabled.
- Fixed style error of language switch for mobile users.
- Truncated too long texture name at skin library. This just affected UI, not actually modified texture name.

## 4.0.0

### Notable Changes

- Laravel was updated to 5.8, which will give us better support of PHP 7.2 and above. This requires PHP 7.1.8 or above.
- Application entry was changed from `index.php` to `public/index.php`. So you need to modify the root directory of your web server to the `public` directory under the original directory.
- The concept "preference" of player was no longer existed. And, this causes the structure of Table `player` has been changed. You're required to execute `php artisan bs:migrate-v4:players-table` to update.
- We've rewrited functionality of closet. You're required to execute `php artisan bs:migrate-v4:closet`.
- Authentication system has been refactored.
- Browsers compatibility: Dropped support of Internet Explorer.
- The PHP extension `fileinfo` now is required.
- Open-source license has been changed to MIT.

### Added

- Nickname of super administrator is required in installation wizard.
- You can fill in the database information in installation wizard instead of modifying `.env` file.
- Avatars of players will be shown when applying textures to players.
- Possible score consumption will be noticed before uploading texture.
- Button "Apply texture to player" has been added in skin library.
- Button "Download texture" has been added in skin library.
- New available HTTP API: Fetch `/avatar/player/{size}/{name}.png` and you will retrieve avatar corresponding to the player. You need to replace `{size}` with actual size you want and replace `{name}` with actual player name you want. (You can use this feature in your self-made game launcher.)
- Added option about CDN of front end assets.
- Options about HTML `meta` tag were added for SEO.
- Open a skin detail page in skin library and set it as avatar is allowed, no need to add it to closet.
- Resetting avatar is allowed.
- Redis support was shipped natively.
- You can allow users to gain more scores if they share textures.
- Added more configuration items about cache.
- You can install Blessing Skin in CLI without any interaction now. (Web installation is still available.)
- reCAPTCHA support was shipped natively. (Thanks @tnqzh123 )
- You can report textures now.
- "Content Policy" option was added. This option let you show a piece of text to user in skin upload page.
- New password encryption algorithm Bcrypt was added. This is the default algorithm of newly installed Blessing Skin. For installed before Blessing Skin, there won't be anything to do. However, if you're using `PHP_PASSWORD_HASH`, you can change to use this new algorithm and it don't cause any side effects to old users.

### Tweaked

- Font of logo at the left top corner was changed to "Minecraft Font", while previously it was "Ubuntu Font".
- Simplified choices of texture type when uploading texture.
- Move UI component of filtering and searching of skin library to the main box.
- Font Awesome was upgraded to v5.
- Merge two operations "Set as Administrator" and "Ban" to one.
- Removed Toastr and SweetAlert2. Now we're using ElementUI.
- Beautified dashboard of user center.
- Beautified dashboard of administration panel.
- Avoid unnecessary checks after installed Blessing Skin successfully.
- New DataTables library was shipped.
- Texture name instead of Texture ID will be noticed if it's duplicated when modifying texture name in skin library.
- Optimized database performance of visiting dashboard of administration panel.
- Improved UX of creating player in closet.
- Improved UX of applying texture to player in skin library.
- Defer update checks.
- Hide comment box if comment is disabled.
- By default the top navigation bar of home page won'be transparent, but this can be tweaked in settings.

### Fixed

- Fixed that permission wasn't checked at back end when deleting account.
- Fixed that CSS class `item-selected` of choosen item wasn't been removed if selected textures were reset at closet page.
- Fixed dislocation of update notice for Firefox.
- Fixed dislocation of options in administration panel for mobile users.
- Fixed length of input box of "Player Name" in administration panel when text is too long.
- Fixed that specified size was ignored when generating avatars.

### Removed

- Text "Search result of ..." in skin library was removed.
- Removed PHP class `App\Services\Utils`.
- Removed front end library: iCheck.