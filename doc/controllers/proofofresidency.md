# Proofofresidency

```ts
const proofofresidencyController = new ProofofresidencyController(client);
```

## Class Name

`ProofofresidencyController`

## Methods

* [Residency Submit POST](../../doc/controllers/proofofresidency.md#residency-submit-post)
* [Residency Details GET](../../doc/controllers/proofofresidency.md#residency-details-get)


# Residency Submit POST

Send a residency document to verification

```ts
async residencySubmitPOST(
  clientId: string,
  stepId: string,
  sessionId: string,
  document: FileWrapper,
  address: string,
  city: string,
  documentType: DocumentType1Enum,
  country: string,
  hostIdBackDocument?: FileWrapper,
  hostIdFrontDocument?: FileWrapper,
  accomodationProof?: FileWrapper,
  zipCode?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Header, Required | Client id |
| `stepId` | `string` | Query, Required | Step Id of the current identity step you want to submit |
| `sessionId` | `string` | Header, Required | Initialised Session-Id |
| `document` | `FileWrapper` | Form, Required | must be a valid file (image/jpg, image/jpeg, image/png, application/pdf) max 4MB |
| `address` | `string` | Form, Required | Full postal address |
| `city` | `string` | Form, Required | City of residence |
| `documentType` | [`DocumentType1Enum`](../../doc/models/document-type-1-enum.md) | Form, Required | - |
| `country` | `string` | Form, Required | Country of document in alpha 3 code (ISO-3166) (e.g. for France send FRA as country value |
| `hostIdBackDocument` | `FileWrapper \| undefined` | Form, Optional | Back Host ID document (image/jpg, image/jpeg, image/png) |
| `hostIdFrontDocument` | `FileWrapper \| undefined` | Form, Optional | Front Host ID document (image/jpg, image/jpeg, image/png) |
| `accomodationProof` | `FileWrapper \| undefined` | Form, Optional | Must be a valid file (application/pdf) max 4MB |
| `zipCode` | `string \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const clientId = 'Client-Id6';
const stepId = 'step_id4';
const sessionId = 'Session-Id4';
const document = new FileWrapper(fs.createReadStream('dummy_file'));
const address = 'address6';
const city = 'city0';
const documentType = 'ELECTRICITY_BILL';
const country = 'country4';
try {
  const { result, ...httpResponse } = await proofOfResidencyController.residencySubmitPOST(clientId, stepId, sessionId, document, address, city, documentType, country);
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


# Residency Details GET

All information about identity verification details

```ts
async residencyDetailsGET(
  clientId: string,
  stepId: string,
  sessionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResidencyVerificationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Header, Required | Client id |
| `stepId` | `string` | Query, Required | Step Id of the current identity step you want to submit |
| `sessionId` | `string` | Header, Required | Initialised Session-Id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ResidencyVerificationResponse`](../../doc/models/residency-verification-response.md)

## Example Usage

```ts
const clientId = 'Client-Id6';
const stepId = 'step_id4';
const sessionId = 'Session-Id4';
try {
  const { result, ...httpResponse } = await proofOfResidencyController.residencyDetailsGET(clientId, stepId, sessionId);
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

