# Wardrobe

## Get the wardrobe list

Returns a list containing wardrobe items.

````
GET /api/closet
````

You can add the `page` parameter to the URL to get results with different page numbers after pagination, such as `?page=1`.

### Parameters

| Name | Type | Description |
| ---------- | -------- | ----------------------------- -------- |
| `category` | `string` | Item category, value can only be `skin` or `cape`. |

### Response

````json
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
````

## add material

Add a material to the wardrobe.

````
POST /api/closet
````

### Parameters

| Name | Type | Description |
| ------ | --------- | -------------------------------- ------------- |
| `tid` | `integer` | **Required. ** The TID of the material to add. |
| `name` | `string` | **Required. ** Wardrobe item name, does not have to be the same as the material name. |

### Response

````json
Status: 200

{
  "code": 0,
  "message": "<human-readable message>"
}
````

## change name

Change the names of wardrobe items.

````
PUT /api/closet/{tid}
````

### Parameters

| Name | Type | Description |
| ------ | -------- | ----------------------------- |
| `name` | `string` | **Required. ** New names for wardrobe items. |

### Response

````json
Status: 200

{
  "code": 0,
  "message": "<human-readable message>"
}
````

## delete item

Delete items from the closet.

````
DELETE /api/closet/{tid}
````

### Parameters

none.

### Response

````json
Status: 200

{
  "code": 0,
  "message": "<human-readable message>"
}
````