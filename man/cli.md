# CLI 用途

Blessing Skin 允许您可以通过命令行对皮肤站进行一些操作。

## 开启插件

通过以下命令可以开启一个插件：

```
$ php artisan plugin:enable <name>
```

其中 `name` 参数是必须的，为插件的标识符，如 `mojang-verification`。

## 关闭插件

通过以下命令可以关闭一个插件：

```
$ php artisan plugin:disable <name>
```

其中 `name` 参数是必须的，为插件的标识符，如 `mojang-verification`。

## 缓存站点选项

此命令没有参数，用法如下：

```
$ php artisan options:cache
```

执行此命令后，Blessing Skin 将在 `storage/options` 目录下生成一个 `cache.php` 文件。
此文件即为缓存。

以后每次访问站点时，Blessing Skin 都会从这里加载所有的站点选项，而不读取数据库。
因此，对任何选项的更改均不会起任何作用，仅保存在数据库。

如果在更改选项后希望新设置生效，重新执行这条命令就可以更新缓存。如果希望停止缓存，直接删除 `storage/options/cache.php` 文件即可。
