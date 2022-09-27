# Avatar And Texture Previews

::: tip

This part of the API does not require the HTTP Authorization Header.

:::

::: tip

Textures are commonly refered to as Materials throughout Blessing Skin due to translation.

:::

## Get Avatar From Player/Role Name

You can get the avatar corresponding to the skin used by a player/role.

````
GET /avatar/player/{name}
````

The `{name}` parameter is the player/role name.

### Parameters

| Name | Type | Description |
| ------ | --------- | ------------------------------------------------------------ |
| `size` | `integer` | Avatar size. Note that this is not the final image size. |
| `3d` | `any` | When this parameter is present, a "3D"-like avatar will be generated instead of a front view of the avatar. |
| `png` | `any` | When this parameter exists, it will return the image in PNG format; otherwise, it will return in WebP format. (but still returns PNG if the server's GD extension does not support WebP) |

### Response

Returns 404 if the character does not exist; returns 404 if the texture does not exist; returns 200 normally.

The image format can be determined by the `Content-Type` field of the response header.

## Get Avatar From User ID (UID)

You can get an avatar from a user.

````
GET /avatar/user/{uid}
````

Where the `{uid}` parameter is the user UID.

### Parameters

| Name | Type | Description |
| ------ | --------- | ------------------------------------------------------------ |
| `size` | `integer` | Avatar size. Note that this is not the final image size. |
| `3d` | `any` | When this parameter is present, a "3D"-like avatar will be generated instead of a front view of the avatar. |
| `png` | `any` | When this parameter exists, it will return the image in PNG format; otherwise, it will return in WebP format. (but still returns PNG if the server's GD extension does not support WebP) |

### Response

If the user does not exist, return a default avatar (HTTP status code is 200); if the texture does not exist, return 404; return 200 normally.

The image format can be determined by the `Content-Type` field of the response header.

## Generate Avatar From Texture ID (TID)

An avatar image corresponding a texture can be generated and returned.

````
GET /avatar/{tid}
````

Where the `{tid}` parameter is the texture TID.

### Parameters

| Name | Type | Description |
| ------ | --------- | ------------------------------------------------------------ |
| `size` | `integer` | Avatar size. Note that this is not the final image size. |
| `3d` | `any` | When this parameter is present, a "3D"-like avatar will be generated instead of a front view of the avatar. |
| `png` | `any` | When this parameter exists, it will return the image in PNG format; otherwise, it will return in WebP format. (but still returns PNG if the server's GD extension does not support WebP) |

### Response

Returns 404 if the texture does not exist; returns 200 normally.

The image format can be determined by the `Content-Type` field of the response header.

## Generate Avatar From Texture File Hash

An avatar image corresponding to a texture can be generated and returned without knowing the TID of the texture in advance.

````
GET /avatar/hash/{hash}
````

The `{hash}` parameter is the hash value of the texture file.

### Parameters

| Name | Type | Description |
| ------ | --------- | ------------------------------------------------------------ |
| `size` | `integer` | Avatar size. Note that this is not the final image size. |
| `3d` | `any` | When this parameter is present, a "3D"-like avatar will be generated instead of a front view of the avatar. |
| `png` | `any` | When this parameter exists, it will return the image in PNG format; otherwise, it will return in WebP format. (but still returns PNG if the server's GD extension does not support WebP) |

### Response

Returns 404 if the texture does not exist; returns 200 normally.

The image format can be determined by the `Content-Type` field of the response header.

## Generate Texture Preview From Texture ID (TID)

Generates and returns a preview of the front and back of the texture.

````
GET /preview/{tid}
````

Where the `{tid}` parameter is the texture TID.

### Parameters

| Name | Type | Description |
| ------ | --------- | ------------------------------------------------------------ |
| `png` | `any` | When this parameter exists, it will return the image in PNG format; otherwise, it will return in WebP format. (but still returns PNG if the server's GD extension does not support WebP) |

### Response

Returns 404 if the texture does not exist; returns 200 normally.

The image format can be determined by the `Content-Type` field of the response header.

## Generate Texture Preview From The Texture File Hash

Generates and returns a preview of the front and back of a texture without prior knowledge of the texture's TID.

````
GET /preview/hash/{hash}
````

The `{hash}` parameter is the hash value of the texture file.

### Parameters

| Name | Type | Description |
| ----- | ----- | ------------------------------------------------------------ |
| `png` | `any` | When this parameter exists, it will return the image in PNG format; otherwise, it will return in WebP format. (but still returns PNG if the server's GD extension does not support WebP) |

### Response

Returns 404 if the texture does not exist; returns 200 normally.

The image format can be determined by the `Content-Type` field of the response header.