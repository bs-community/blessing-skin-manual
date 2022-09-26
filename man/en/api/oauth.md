# OAuth2 authentication

Assumption: The address of the skin site is `https://example.com/`.

When the client first requests authorization from the user, it should let the user access `https://example.com/oauth/authorize?client_id={client ID}&redirect_uri={callback URL}&response_type=code&scope=` (preferably the client The client can actively call the browser).

At this point the browser displays a page that allows the user to choose whether to allow authorization to the client. If allowed by the user, the user will be redirected to the callback URL with a query string with a `code` field.

The client wants to retrieve the value of this `code`.

Next, the client uses its own HTTP library to access (ie, without user intervention) this URL with the `POST` method: `https://example.com/oauth/token`, with the following form parameters:

|key|value|
|-|-|
|grant_type|authorization_code|
|client_id| (Client ID)|
|client_secret| (client secret value)|
|redirect_uri| (callback URL)|
|code| (the `code` value just obtained)|

If successful, the returned JSON response will contain the `access_token` , `refresh_token` and `expires_in` properties. The `expires_in` attribute contains the expiry date of the access token in seconds.