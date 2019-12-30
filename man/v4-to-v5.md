# 从 v4 升级到 v5

## 对于使用 Redis 的用户

我们移除了从「资源配置」中开启或关闭 Redis 的功能。
因此如果您有在使用 Redis，并且曾经在「资源配置」页面中选择了「启用 Redis」，请您修改 `.env` 文件：

```
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_DRIVER=redis
```

当然，您也可以单独控制上述三项是否使用 Redis。

## 对于使用 Universal Skin API 的用户

我们从核心中移除了 Universal Skin API 的功能，因此如果您希望继续使用此功能，可从插件市场中下载并安装「Universal Skin API」插件。

## 对于使用传统皮肤加载方式的用户

我们从核心中移除了「传统加载方式」的功能，因此如果您希望继续使用此功能，可从插件市场中下载并安装「传统皮肤加载方式」插件。
