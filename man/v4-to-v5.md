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
