# Role

## Get all characters

Returns a list with all roles.

````
GET /api/players
````

### Parameters

none.

### Response

````json
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
````

## add roles

Add a new character.

````
POST /api/players
````

### Parameters

| Name | Type | Description |
| ------ | -------- | ------------------ |
| `name` | `string` | **Required. ** character name. |

### Response

````json
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
````

## delete role

Delete a role.

````json
DELETE /api/players/{pid}
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

## Change character name

Change the name of the role.

````
PUT /api/players/{pid}/name
````

### Parameters

| Name | Type | Description |
| ------ | -------- | ------------------ |
| `name` | `string` | **Required. ** character name. |

### Response

````json
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
````

## Change character material

The character's skin can be changed individually, the character's cape can also be changed individually, or both the skin and the cape can be changed at the same time.

````
PUT /api/players/{pid}/textures
````

### Parameters

| Name | Type | Description |
| ------ | --------- | ------------------------------ |
| `skin` | `integer` | The TID of the material you wish to apply to the character's skin. |
| `cape` | `integer` | The TID of the texture you wish to apply to the character's cape. |

It should be noted that the `skin` parameter and the `cape` parameter can appear at the same time or not at the same time, but at least one of them is present.

### Response

````json
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
````

## reset character texture

To reset the material of the character, you can reset the skin or the cape individually, or both the skin and the cape at the same time.

````
DELETE /api/players/{pid}/textures
````

### Parameters

Two formats are supported:

| Name | Type | Description |
| ------ | -------------------- | --------------------- --------------------------------------- |
| `type` | array containing `string` | **Required. ** Strings in the array can only be `skin` or `cape`. The array must contain 1 to 2 elements. |

or

| Name | Type | Description |
| ------ | ----- | ------------------------ |
| `skin` | `any` | Using this parameter will reset the skin. |
| `cape` | `any` | Using this parameter will reset the cape. |