# Certification

## Log in

Log in to the skin site as a JWT. Currently, login by role name is not supported, that is, only email addresses can be submitted.

The returned token will be used for subsequent requests. When using, you need to put the token in the HTTP header: `Authorization: Bearer <token>`.

```
POST /api/auth/login
```

### parameter

|Name|Type|Description|
|-|-|-|
|`email`|`string`|User Email|
|`password`|`string`|password|

### Response

```json
Status: 200

{
  "token": "<JWT token>"
}
```

## Sign out

```
POST /api/auth/logout
```

### Parameter

None.

### Response

```json
Status: 204
```

## Refresh token

When refreshing the token, you need to carry the original token in the HTTP header.

```
POST /api/auth/refresh
```

### Parameter

None.

### Response

```json
Status: 200

{
  "token": "<JWT token>"
}
```
