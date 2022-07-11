# Phone

```ts
const phoneController = new PhoneController(client);
```

## Class Name

`PhoneController`

## Methods

* [Phone Send POST](../../doc/controllers/phone.md#phone-send-post)
* [Phone Confirm POST](../../doc/controllers/phone.md#phone-confirm-post)
* [Phone Details GET](../../doc/controllers/phone.md#phone-details-get)


# Phone Send POST

Send verification code by SMS or Call

```ts
async phoneSendPOST(
  clientId: string,
  sessionId: string,
  phoneNumber: string,
  countryCode: string,
  method: MethodEnum,
  stepId?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Header, Required | Client id |
| `sessionId` | `string` | Header, Required | Initialised Session-Id |
| `phoneNumber` | `string` | Form, Required | Phone number |
| `countryCode` | `string` | Form, Required | Phone Country Code (cf. Country Calling Code Page) (e.g. for France send +33 as country_code value) |
| `method` | [`MethodEnum`](../../doc/models/method-enum.md) | Form, Required | call - by call  sms - by text message |
| `stepId` | `string \| undefined` | Query, Optional | Step Id of the current identity step you want to submit |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const clientId = 'Client-Id6';
const sessionId = 'Session-Id4';
const phoneNumber = 'phone_number2';
const countryCode = 'country_code0';
const method = 'sms';
try {
  const { result, ...httpResponse } = await phoneController.phoneSendPOST(clientId, sessionId, phoneNumber, countryCode, method);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Phone Confirm POST

Confirm phone number using previously sent authentication codel

```ts
async phoneConfirmPOST(
  clientId: string,
  stepId: string,
  sessionId: string,
  code: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Header, Required | Client id |
| `stepId` | `string` | Query, Required | Step Id of the current identity step you want to submit |
| `sessionId` | `string` | Header, Required | Initialised Session-Id |
| `code` | `string` | Form, Required | authentication code |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const clientId = 'Client-Id6';
const stepId = 'step_id4';
const sessionId = 'Session-Id4';
const code = 'code8';
try {
  const { result, ...httpResponse } = await phoneController.phoneConfirmPOST(clientId, stepId, sessionId, code);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Phone Details GET

All information about identity verification details

```ts
async phoneDetailsGET(
  clientId: string,
  stepId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PhoneVerificationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Header, Required | Client id |
| `stepId` | `string` | Query, Required | All information about phone verification details |
| `sessionId` | `string` | Header, Required | Initialised Session-Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PhoneVerificationResponse`](../../doc/models/phone-verification-response.md)

## Example Usage

```ts
const clientId = 'Client-Id6';
const stepId = 'step_id4';
const sessionId = 'Session-Id4';
try {
  const { result, ...httpResponse } = await phoneController.phoneDetailsGET(clientId, stepId, sessionId);
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

