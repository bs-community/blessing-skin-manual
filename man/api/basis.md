# 基础

## API 速率限制

为防止 API 的滥用，Blessing Skin 默认带有 1 分钟内最多 60 次的 API 调用限制。

为了方便，Blessing Skin 会在每个 HTTP 响应头部添加以下字段：

- `X-RateLimit-Limit` 指示总的限制次数
- `X-RateLimit-Remaining` 指示剩余可用的次数

当超过速率限制之后，会额外增加以下字段：

- `Retry-After` 指示还有多长时间后解除限制（单位：秒）
- `X-RateLimit-Reset` 指示什么时候将解除限制，该值是一个 UNIX 时间戳

## HTTP 请求头部

对于每个请求，客户端都应该发送 `Accept` 且值为 `application/json` 以便明确响应内容必须为 JSON。

在默认情况下，消息的文本将是 Blessing Skin 配置中指定的语言（默认为 `en` 即英语）。如果需要返回中文，请在 HTTP 请求头部中添加 `Accept-Language` 且值为 `zh-CN`。

## 根

使用这个 API 可以获取关于当前皮肤站的一些基本信息。

```
GET /api
```

### 参数

无。

### 响应

```json
{
  "blessing_skin": "<version of Blessing Skin>",
  "spec": 0,
  "copyright": "<copyright text>",
  "site_name": "My Skin Server"
}
```
