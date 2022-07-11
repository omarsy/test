
# Residency History

## Structure

`ResidencyHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userReason` | `string \| undefined` | Optional | User reason is a reason that you should display to your end-user |
| `customeReason` | `string \| undefined` | Optional | Customer reason is an internal reason and it should not be displayed to your end-user |
| `rejectionCode` | `string \| undefined` | Optional | Synaps rejection code |
| `submittedAt` | `string \| undefined` | Optional | Datetime format YYYY-MM-DD hh:ii:ss |
| `verifiedAt` | `string \| undefined` | Optional | Datetime format YYYY-MM-DD hh:ii:ss |
| `state` | [`State1Enum \| undefined`](../../doc/models/state-1-enum.md) | Optional | Verification state |

## Example (as JSON)

```json
{
  "user_reason": null,
  "custome_reason": null,
  "rejection_code": null,
  "submitted_at": null,
  "verified_at": null,
  "state": null
}
```

