# 用户

## 获取基本信息

在返回的用户信息中，`permission` 字段包含 4 种可能的值：

| 值   | 含义    |
| --- | ----- |
| -1  | 封禁    |
| 0   | 普通用户  |
| 1   | 管理员   |
| 2   | 超级管理员 |

```
GET /api/user
```

### 参数

无。

### 响应

```json
Status: 200

{
  "uid": 1,
  "email": "example@example.com",
  "nickname": "name",
  "avatar": 0,
  "score": 1000,
  "permission": 0,
  "last_sign_at": "2020-01-01 00:00:00",
  "register_at": "2020-01-01 00:00:00",
  "verified": true
}
```

## 获取通知列表

可获取所有未读取的通知。

```
GET /api/user/notifications
```

### 参数

无。

### 响应

```json
Status: 200

[
  {
    "id": "<uuid>",
    "title": "notification title"
  }
]
```

## 读取单个通知

获取单个通知的标题和内容，并将该通知标记为「已读」。

```
POST /api/user/notifications/{id}
```

### 参数

无。

### 响应

```json
Status: 200

{
  "title": "notification title",
  "content": "HTML content",
  "time": "2020-01-01 00:00:00"
}
```

