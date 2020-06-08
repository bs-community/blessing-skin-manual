# 认证

## 登录

以 JWT 的方式登录皮肤站。目前不支持以角色名的方式登录，即只能提交邮箱。

返回的 token 将用于后续的请求。使用时，需要将 token 放在 HTTP 头部中：`Authorization: Bearer <token>`。

```
POST /api/auth/login
```

### 参数

|名称|类型|描述|
|-|-|-|
|`email`|`string`|用户邮箱|
|`password`|`string`|密码|

### 响应

```json
Status: 200

{
  "token": "<JWT token>"
}
```

## 登出

```
POST /api/auth/logout
```

### 参数

无。

### 响应

```json
Status: 204
```

## 刷新 token

刷新 token 时，需要在 HTTP 头部中携带原来的 token。

```
POST /api/auth/refresh
```

### 参数

无。

### 响应

```json
Status: 200

{
  "token": "<JWT token>"
}
```
