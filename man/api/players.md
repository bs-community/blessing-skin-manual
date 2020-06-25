# 角色

## 获取所有角色

返回包含所有角色的列表。

```
GET /api/players
```

### 参数

无。

### 响应

```json
Status: 200

[
  {
    "pid": 1,
    "uid": 1,
    "name": "my player",
    "tid_skin": 0,
    "tid_cape": 0,
    "last_modified": "2020-01-01 00:00:00"
  }
]
```

## 添加角色

添加一个新的角色。

```
POST /api/players
```

### 参数

| 名称   | 类型     | 描述               |
| ------ | -------- | ------------------ |
| `name` | `string` | **必需。** 角色名。 |

### 响应

```json
Status: 200

{
  "code": 0,
  "message": "<human-readable message>",
  "data": {
    "pid": 1,
    "uid": 1,
    "name": "my player",
    "tid_skin": 0,
    "tid_cape": 0,
    "last_modified": "2020-01-01 00:00:00"
  }
}
```

## 删除角色

删除一个角色。

```json
DELETE /api/players/{pid}
```

### 参数

无。

### 响应

```json
Status: 200

{
  "code": 0,
  "message": "<human-readable message>"
}
```

## 更改角色名

更改角色的名称。

```
PUT /api/players/{pid}/name
```

### 参数

| 名称   | 类型     | 描述               |
| ------ | -------- | ------------------ |
| `name` | `string` | **必需。** 角色名。 |

### 响应

```json
Status: 200

{
  "code": 0,
  "message": "<human-readable message>",
  "data": {
    "pid": 1,
    "uid": 1,
    "name": "my player",
    "tid_skin": 0,
    "tid_cape": 0,
    "last_modified": "2020-01-01 00:00:00"
  }
}
```

## 更改角色材质

可以单独更改角色的皮肤，也可以单独更改角色的披风，还可以同时更改皮肤和披风。

```
PUT /api/players/{pid}/textures
```

### 参数

| 名称   | 类型      | 描述                           |
| ------ | --------- | ------------------------------ |
| `skin` | `integer` | 希望应用到角色皮肤的材质 TID。 |
| `cape` | `integer` | 希望应用到角色披风的材质 TID。 |

需要注意的是，`skin` 参数和 `cape` 参数可以同时出现，也可以不同时出现，但至少存在其中的一个。

### 响应

```json
Status: 200

{
  "code": 0,
  "message": "<human-readable message>",
  "data": {
    "pid": 1,
    "uid": 1,
    "name": "my player",
    "tid_skin": 1,
    "tid_cape": 2,
    "last_modified": "2020-01-01 00:00:00"
  }
}
```

## 重置角色材质

重置角色的材质，可以单独重置皮肤或披风，也可以同时重置皮肤和披风。

```
DELETE /api/players/{pid}/textures
```

### 参数

支持两个格式：

| 名称   | 类型                 | 描述                                                         |
| ------ | -------------------- | ------------------------------------------------------------ |
| `type` | 包含 `string` 的数组 | **必需。** 数组中的字符串只能为 `skin` 或 `cape`。数组必须包含 1 至 2 个元素。 |

或

| 名称   | 类型  | 描述                     |
| ------ | ----- | ------------------------ |
| `skin` | `any` | 使用此参数将会重置皮肤。 |
| `cape` | `any` | 使用此参数将会重置披风。 |
