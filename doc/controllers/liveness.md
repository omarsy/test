# Liveness

```ts
const livenessController = new LivenessController(client);
```

## Class Name

`LivenessController`

## Methods

* [Liveness Init POST](../../doc/controllers/liveness.md#liveness-init-post)
* [Liveness Verify POST](../../doc/controllers/liveness.md#liveness-verify-post)
* [Liveness Details GET](../../doc/controllers/liveness.md#liveness-details-get)


# Liveness Init POST

Verify if the person in front of his camera is alive

```ts
async livenessInitPOST(
  clientId: string,
  stepId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LivenessInitResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Header, Required | Client id |
| `stepId` | `string` | Query, Required | Step Id of the current identity step you want to submit |
| `sessionId` | `string` | Header, Required | Initialised Session-Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LivenessInitResponse`](../../doc/models/liveness-init-response.md)

## Example Usage

```ts
const clientId = 'Client-Id6';
const stepId = 'step_id4';
const sessionId = 'Session-Id4';
try {
  const { result, ...httpResponse } = await livenessController.livenessInitPOST(clientId, stepId, sessionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Liveness Verify POST

Verify if the person in front of his camera is alive

```ts
async livenessVerifyPOST(
  clientId: string,
  stepId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LivenessVerifyResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Header, Required | Client id |
| `stepId` | `string` | Query, Required | Step Id of the current identity step you want to submit |
| `sessionId` | `string` | Header, Required | Initialised Session-Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LivenessVerifyResponse`](../../doc/models/liveness-verify-response.md)

## Example Usage

```ts
const clientId = 'Client-Id6';
const stepId = 'step_id4';
const sessionId = 'Session-Id4';
try {
  const { result, ...httpResponse } = await livenessController.livenessVerifyPOST(clientId, stepId, sessionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Liveness Details GET

All information about liveness verification details

```ts
async livenessDetailsGET(
  clientId: string,
  stepId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LivenessVerificationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Header, Required | Client id |
| `stepId` | `string` | Query, Required | All information about phone verification details |
| `sessionId` | `string` | Header, Required | Initialised Session-Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LivenessVerificationResponse`](../../doc/models/liveness-verification-response.md)

## Example Usage

```ts
const clientId = 'Client-Id6';
const stepId = 'step_id4';
const sessionId = 'Session-Id4';
try {
  const { result, ...httpResponse } = await livenessController.livenessDetailsGET(clientId, stepId, sessionId);
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

