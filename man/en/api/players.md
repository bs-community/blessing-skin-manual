# Players

::: tip

Players are commonly refered to as Roles or players throughout Blessing Skin due to translation.

:::

## Get All Players

Returns a list with all players.

````
GET /api/players
````

### No Parameters

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

## Create Player

Create a new player.

````
POST /api/players
````

### Parameters

| Name | Type | Description |
| ------ | -------- | ------------------ |
| `name` | `string` | **Required. ** player name. |

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

## Delete Player

Delete a player.

````json
DELETE /api/players/{pid}
````

### No Parameters

### Response

````json
Status: 200

{
  "code": 0,
  "message": "<human-readable message>"
}
````

## Change Player Name

Change the name of a player.

````
PUT /api/players/{pid}/name
````

### Parameters

| Name | Type | Description |
| ------ | -------- | ------------------ |
| `name` | `string` | **Required. ** player name. |

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

## Change Player Textures

The player's skin can be changed individually, the player's cape can also be changed individually, or both the skin and the cape can be changed at the same time.

````
PUT /api/players/{pid}/textures
````

### Parameters

| Name | Type | Description |
| ------ | --------- | ------------------------------ |
| `skin` | `integer` | The TID of the texture you wish to apply to the player's skin. |
| `cape` | `integer` | The TID of the texture you wish to apply to the player's cape. |

It should be noted that the `skin` parameter and the `cape` parameter can appear at the same time or individually but one of them must be present.

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

## Reset Player Textures

To reset the texture of the player. 
You can reset the skin or the cape individually, or both the skin and the cape at the same time.

````
DELETE /api/players/{pid}/textures
````

### Parameters

Two formats are supported:

| Name | Type | Description |
| ------ | -------------------- | ------------------------------------------------------------ |
| `type` | array containing `string` | **Required. ** Strings in the array can only be `skin` or `cape`. The array must contain 1 to 2 elements. |

or

| Name | Type | Description |
| ------ | ----- | ------------------------ |
| `skin` | `any` | Using this parameter will reset the skin. |
| `cape` | `any` | Using this parameter will reset the cape. |