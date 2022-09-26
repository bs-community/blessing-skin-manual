# users

## Get basic information

In the returned user information, the `permission` field contains 4 possible values:

| value | meaning |
| --- | ----- |
| -1 | Banned |
| 0 | Ordinary users |
| 1 | Administrator |
| 2 | Super Administrator |

````
GET /api/user
````

### Parameters

none.

### Response

````json
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
````

## Get notification list

Gets all unread notifications.

````
GET /api/user/notifications
````

### Parameters

none.

### Response

````json
Status: 200

[
  {
    "id": "<uuid>",
    "title": "notification title"
  }
]
````

## Read a single notification

Get the title and content of a single notification and mark the notification as "read".

````
POST /api/user/notifications/{id}
````

### Parameters

none.

### Response

````json
Status: 200

{
  "title": "notification title",
  "content": "HTML content",
  "time": "2020-01-01 00:00:00"
}
````