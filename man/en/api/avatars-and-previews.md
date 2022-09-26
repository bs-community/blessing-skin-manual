# Avatar and material preview

::: tip

This part of the API does not require user login and authentication.

:::

## Get the avatar based on the character name

Through this API, you can get the avatar corresponding to the skin used by the character.

````
GET /avatar/player/{name}
````

The `{name}` parameter is the role name.

### Parameters

| Name | Type | Description |
| ------ | --------- | -------------------------------- ---------------------------- |
| `size` | `integer` | Avatar size. Note that this is not the final image size. |
| `3d` | `any` | When this parameter is present, a "3D"-like avatar will be generated instead of a front view of the avatar. |
| `png` | `any` | When this parameter exists, it will return the image in PNG format; otherwise, it will return in WebP format. (but still returns PNG if the server's GD extension does not support WebP) |

### Response

Returns 404 if the character does not exist; returns 404 if the material does not exist; returns 200 normally.

The image format can be determined by the `Content-Type` field of the response header.

## Get avatar based on user UID

Through this API, you can get the avatar set by the user.

````
GET /avatar/user/{uid}
````

Where the `{uid}` parameter is the user UID.

### Parameters

| Name | Type | Description |
| ------ | --------- | -------------------------------- ---------------------------- |
| `size` | `integer` | Avatar size. Note that this is not the final image size. |
| `3d` | `any` | When this parameter is present, a "3D"-like avatar will be generated instead of a front view of the avatar. |
| `png` | `any` | When this parameter exists, it will return the image in PNG format; otherwise, it will return in WebP format. (but still returns PNG if the server's GD extension does not support WebP) |

### Response

If the user does not exist, return a default avatar (HTTP status code is 200); if the material does not exist, return 404; return 200 normally.

The image format can be determined by the `Content-Type` field of the response header.

## Generate avatar based on material TID

Through this API, the avatar image corresponding to the material can be generated and returned.

````
GET /avatar/{tid}
````

where the `{tid}` parameter is the material TID.

### Parameters

| Name | Type | Description |
| ------ | --------- | -------------------------------- ---------------------------- |
| `size` | `integer` | Avatar size. Note that this is not the final image size. |
| `3d` | `any` | When this parameter is present, a "3D"-like avatar will be generated instead of a front view of the avatar. |
| `png` | `any` | When this parameter exists, it will return the image in PNG format; otherwise, it will return in WebP format. (but still returns PNG if the server's GD extension does not support WebP) |

### Response

Returns 404 if the material does not exist; returns 200 normally.

The image format can be determined by the `Content-Type` field of the response header.

## Generate avatar according to the material file hash

Through this API, the avatar image corresponding to the material can be generated and returned without knowing the TID of the material in advance.

````
GET /avatar/hash/{hash}
````

The `{hash}` parameter is the hash value of the material file.

### Parameters

| Name | Type | Description |
| ------ | --------- | -------------------------------- ---------------------------- |
| `size` | `integer` | Avatar size. Note that this is not the final image size. |
| `3d` | `any` | When this parameter is present, a "3D"-like avatar will be generated instead of a front view of the avatar. |
| `png` | `any` | When this parameter exists, it will return the image in PNG format; otherwise, it will return in WebP format. (but still returns PNG if the server's GD extension does not support WebP) |

### Response

Returns 404 if the material does not exist; returns 200 normally.

The image format can be determined by the `Content-Type` field of the response header.

## Generate material preview based on material TID

Generates and returns a preview of the front and back of the material.

````
GET /preview/{tid}
````

Where the `{tid}` parameter is the material TID.

### Parameters

| Name | Type | Description |
| ------ | --------- | -------------------------------- ---------------------------- |
| `png` | `any` | When this parameter exists, it will return the image in PNG format; otherwise, it will return in WebP format. (but still returns PNG if the server's GD extension does not support WebP) |

### Response

Returns 404 if the material does not exist; returns 200 normally.

The image format can be determined by the `Content-Type` field of the response header.

## Generate a material preview image based on the material file hash

Generates and returns a preview of the front and back of a material without prior knowledge of the material's TID.

````
GET /preview/hash/{hash}
````

The `{hash}` parameter is the hash value of the material file.

### Parameters

| Name | Type | Description |
| ----- | ----- | ------------------------------------- ----------------------- |
| `png` | `any` | When this parameter exists, it will return the image in PNG format; otherwise, it will return in WebP format. (but still returns PNG if the server's GD extension does not support WebP) |

### Response

Returns 404 if the material does not exist; returns 200 normally.

The image format can be determined by the `Content-Type` field of the response header.