
# Residency Verification Document

## Structure

`ResidencyVerificationDocument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `document` | [`ResidencyDocument \| undefined`](../../doc/models/residency-document.md) | Optional | - |
| `isAccomodation` | `boolean \| undefined` | Optional | true if accomodation proof false if no accomodation proof |
| `state` | [`State1Enum \| undefined`](../../doc/models/state-1-enum.md) | Optional | Verification state |
| `info` | [`ResidencyInfo \| undefined`](../../doc/models/residency-info.md) | Optional | - |

## Example (as JSON)

```json
{
  "document": null,
  "is_accomodation": null,
  "state": null,
  "info": null
}
```

