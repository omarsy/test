# Session

```ts
const sessionController = new SessionController(client);
```

## Class Name

`SessionController`

## Methods

* [Session Init POST](../../doc/controllers/session.md#session-init-post)
* [Session Info GET](../../doc/controllers/session.md#session-info-get)
* [Session Alias GET](../../doc/controllers/session.md#session-alias-get)
* [Session List by State GET](../../doc/controllers/session.md#session-list-by-state-get)


# Session Init POST

Initialize a new session to start a new verification process

```ts
async sessionInitPOST(
  clientId: string,
  alias?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SessionCreated>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Header, Required | Client id |
| `alias` | `string \| undefined` | Query, Optional | Custom alias that will be available in session list |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SessionCreated`](../../doc/models/session-created.md)

## Example Usage

```ts
const clientId = 'Client-Id6';
try {
  const { result, ...httpResponse } = await sessionController.sessionInitPOST(clientId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Api Key | `ApiError` |


# Session Info GET

Get information about an initially created session

```ts
async sessionInfoGET(
  sessionId: string,
  clientId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SessionInfo>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sessionId` | `string` | Header, Required | Session-Id that you want retrieve info |
| `clientId` | `string` | Header, Required | Client id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SessionInfo`](../../doc/models/session-info.md)

## Example Usage

```ts
const sessionId = 'Session-Id4';
const clientId = 'Client-Id6';
try {
  const { result, ...httpResponse } = await sessionController.sessionInfoGET(sessionId, clientId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Api Key | `ApiError` |


# Session Alias GET

List sessions with their alias

```ts
async sessionAliasGET(
  alias: string,
  clientId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SessionInfo[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `alias` | `string` | Query, Required | List sessions with their alias |
| `clientId` | `string` | Header, Required | Client id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SessionInfo[]`](../../doc/models/session-info.md)

## Example Usage

```ts
const alias = 'alias2';
const clientId = 'Client-Id6';
try {
  const { result, ...httpResponse } = await sessionController.sessionAliasGET(alias, clientId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Api Key | `ApiError` |


# Session List by State GET

List sessions with their state and alias if needed

```ts
async sessionListByStateGET(
  state: State10Enum,
  clientId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SessionAlias[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `state` | [`State10Enum`](../../doc/models/state-10-enum.md) | Template, Required | PENDING - When all the steps of the verification flow are not completed yet FINISHED - When all the steps of the verification are completed and VALIDATED CANCELLED - When a session is cancelled |
| `clientId` | `string` | Header, Required | Client id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SessionAlias[]`](../../doc/models/session-alias.md)

## Example Usage

```ts
const state = 'CANCELLED';
const clientId = 'Client-Id6';
try {
  const { result, ...httpResponse } = await sessionController.sessionListByStateGET(state, clientId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid Api Key | `ApiError` |

