# 衣柜

## 获取衣柜列表

返回包含衣柜物品的列表。

```
GET /api/closet
```

可在 URL 中添加 `page` 参数来获取分页后不同页码的结果，如 `?page=1`。

### 参数

| 名称       | 类型     | 描述                                  |
| ---------- | -------- | ------------------------------------- |
| `category` | `string` | 物品分类，值只能为 `skin` 或 `cape`。 |

### 响应

```json
Status: 200

{
  "per_page": 6,
  "from": 1,
  "to": 1,
  "total": 1,
  "current_page": 1,
  "last_page": 1,
  "data": [
    {
      "tid": 1,
      "name": "<texture name>",
      "type": "steve",
      "hash": "<texture file hash>",
      "size": 5,
      "uploader": 2,
      "public": true,
      "upload_at": "2020-01-01 00:00:00",
      "likes": 2,
      "pivot": {
        "item_name": "<closet item name>"
      }
    }
  ]
}
```

## 添加材质

向衣柜中添加一个材质。

```
POST /api/closet
```

### 参数

| 名称   | 类型      | 描述                                        |
| ------ | --------- | ------------------------------------------- |
| `tid`  | `integer` | **必需。** 要添加的材质的 TID。             |
| `name` | `string`  | **必需。** 衣柜物品名称，不必与材质名相同。 |

### 响应

```json
Status: 200

{
  "code": 0,
  "message": "<human-readable message>"
}
```

## 更改名称

更改衣柜物品的名称。

```
PUT /api/closet/{tid}
```

### 参数

| 名称   | 类型     | 描述                          |
| ------ | -------- | ----------------------------- |
| `name` | `string` | **必需。** 衣柜物品的新名称。 |

### 响应

```json
Status: 200

{
  "code": 0,
  "message": "<human-readable message>"
}
```

## 删除物品

删除衣柜中的物品。

```
DELETE /api/closet/{tid}
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
