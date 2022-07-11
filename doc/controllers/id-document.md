# ID Document

```ts
const iDDocumentController = new IDDocumentController(client);
```

## Class Name

`IDDocumentController`

## Methods

* [Identity Submit POST](../../doc/controllers/id-document.md#identity-submit-post)
* [Identity Details GET](../../doc/controllers/id-document.md#identity-details-get)


# Identity Submit POST

Submit Identity document

```ts
async identitySubmitPOST(
  clientId: string,
  stepId: string,
  sessionId: string,
  backDocument: FileWrapper,
  frontDocument: FileWrapper,
  documentType: DocumentTypeEnum,
  country: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SessionInfo[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Header, Required | Client id |
| `stepId` | `string` | Query, Required | Step Id of the current identity step you want to submit |
| `sessionId` | `string` | Header, Required | Initialised Session-Id |
| `backDocument` | `FileWrapper` | Form, Required | Back Host ID document (image/jpg, image/jpeg, image/png) |
| `frontDocument` | `FileWrapper` | Form, Required | Front Host ID document (image/jpg, image/jpeg, image/png) |
| `documentType` | [`DocumentTypeEnum`](../../doc/models/document-type-enum.md) | Form, Required | - |
| `country` | `string` | Form, Required | Country of document in alpha 3 code (ISO-3166) (e.g. for France send FRA as country value |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SessionInfo[]`](../../doc/models/session-info.md)

## Example Usage

```ts
const clientId = 'Client-Id6';
const stepId = 'step_id4';
const sessionId = 'Session-Id4';
const backDocument = new FileWrapper(fs.createReadStream('dummy_file'));
const frontDocument = new FileWrapper(fs.createReadStream('dummy_file'));
const documentType = 'PASSPORT';
const country = 'country4';
try {
  const { result, ...httpResponse } = await iDDocumentController.identitySubmitPOST(clientId, stepId, sessionId, backDocument, frontDocument, documentType, country);
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


# Identity Details GET

All information about identity verification details

```ts
async identityDetailsGET(
  clientId: string,
  stepId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IdentityVerificationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Header, Required | Client id |
| `stepId` | `string` | Query, Required | Step Id of the current identity step you want to submit |
| `sessionId` | `string` | Header, Required | Initialised Session-Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`IdentityVerificationResponse`](../../doc/models/identity-verification-response.md)

## Example Usage

```ts
const clientId = 'Client-Id6';
const stepId = 'step_id4';
const sessionId = 'Session-Id4';
try {
  const { result, ...httpResponse } = await iDDocumentController.identityDetailsGET(clientId, stepId, sessionId);
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
| 400 | Invalid Session ID | `ApiError` |

