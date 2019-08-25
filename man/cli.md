# CLI 用途

Blessing Skin 允许您可以通过命令行对皮肤站进行一些操作。

## 启用插件

通过以下命令可以启用一个插件：

```
$ php artisan plugin:enable <name>
```

其中 `name` 参数是必须的，为插件的唯一标识符（即插件信息中的 `name` 字段），如 `mojang-verification`。

## 禁用插件

通过以下命令可以禁用一个插件：

```
$ php artisan plugin:disable <name>
```

其中 `name` 参数是必须的，为插件的唯一标识符（即插件信息中的 `name` 字段），如 `mojang-verification`。

## 缓存站点选项

此命令没有参数，用法如下：

```
$ php artisan options:cache
```

执行此命令后，Blessing Skin 将在 `storage/options` 目录下生成一个 `cache.php` 文件。
此文件即为缓存。

以后每次访问站点时，Blessing Skin 都会从这里加载所有的站点选项，而不读取数据库。

当然，在这之后，你在站点管理面板中对任何设置进行的一切修改都不会生效（因为它们是写进数据库的）。

如果在更改设置后希望新设置生效，重新执行这条命令就可以更新缓存。如果希望停止缓存，直接删除 `storage/options/cache.php` 文件即可。
