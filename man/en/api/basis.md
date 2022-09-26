# Base

## API rate limit

To prevent API abuse, Blessing Skin has a default limit of 60 API calls in 1 minute.

For convenience, Blessing Skin adds the following fields to each HTTP response header:

- `X-RateLimit-Limit` indicates the total limit times
- `X-RateLimit-Remaining` indicates the remaining available times

When the rate limit is exceeded, the following fields are added:

- `Retry-After` indicates how long before the limit is lifted (unit: seconds)
- `X-RateLimit-Reset` indicates when the limit will be lifted, the value is a UNIX timestamp

## HTTP request headers

For each request, the client SHOULD send `Accept` with a value of `application/json` to make it clear that the response content must be JSON.

By default, the text of the message will be in the language specified in the Blessing Skin configuration (default is `en` which is English). If you need to return Chinese, please add `Accept-Language` in the HTTP request header with the value `zh-CN`.

## root

Use this API to get some basic information about the current skin station.

````
GET /api
````

### Parameters

none.

### Response

````json
{
  "blessing_skin": "<version of Blessing Skin>",
  "spec": 0,
  "copyright": "<copyright text>",
  "site_name": "My Skin Server"
}
````