
# Liveness Verification Response

## Structure

`LivenessVerificationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attempts` | `number \| undefined` | Optional | number of liveness attempts |
| `enrollmentDate` | `string \| undefined` | Optional | Successful enrollment date Datetime format : YYYY-MM-DD hh:ii:ss |
| `face` | `string \| undefined` | Optional | image of the user's face available through a signed URL (15 minutes expiry) |
| `state` | [`State1Enum \| undefined`](../../doc/models/state-1-enum.md) | Optional | Verification state |

## Example (as JSON)

```json
{
  "attempts": null,
  "enrollment_date": null,
  "face": null,
  "state": null
}
```

