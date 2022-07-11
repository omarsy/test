
# Identity Verification Response

## Structure

`IdentityVerificationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `document` | [`IdentityVerificationDocument \| undefined`](../../doc/models/identity-verification-document.md) | Optional | - |
| `duplicate` | [`IdentityDuplicate \| undefined`](../../doc/models/identity-duplicate.md) | Optional | - |
| `facematch` | [`IdentityFacematch \| undefined`](../../doc/models/identity-facematch.md) | Optional | - |
| `history` | [`IdentityHistory[] \| undefined`](../../doc/models/identity-history.md) | Optional | - |
| `state` | [`State1Enum \| undefined`](../../doc/models/state-1-enum.md) | Optional | Verification state |

## Example (as JSON)

```json
{
  "document": null,
  "duplicate": null,
  "facematch": null,
  "history": null,
  "state": null
}
```

