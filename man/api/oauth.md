# OAuth2 认证

假定：皮肤站的地址为 `https://example.com/`。

客户端在首次向用户请求授权时，应该让用户访问 `https://example.com/oauth/authorize?client_id={客户端 ID}&redirect_uri={回调 URL}&response_type=code&scope=` （最好是客户端能主动调用浏览器）。

此时浏览器会显示一个让用户选择是否允许授权给客户端的页面。如果用户允许，用户将被重定向到回调 URL，并带有一个含 `code` 字段的 query string。

客户端要取回这个 `code` 的值。

接下来，客户端用自己的 HTTP 库以 `POST` 方法访问（即，无需用户干预）此 URL：`https://example.com/oauth/token`，同时附带上以下表单参数：

|key|value|
|-|-|
|grant_type|authorization_code|
|client_id|（客户端 ID）|
|client_secret|（客户端的 secret 值）|
|redirect_uri|（回调 URL）|
|code|（刚刚获取到的 `code` 值）|

如果成功，返回的 JSON 响应中会包含 `access_token` 、`refresh_token` 和 `expires_in` 属性。`expires_in` 属性包含访问令牌的有效期（单位：秒）。

获取到 `access_token` 后以 GET 方法请求 URL：`https://example.com/api/user`，并携带以下请求头：

|key|value|
|-|-|
|Authorization|Bearer <access_token>|

如果令牌正确，那么将返回用户信息。
