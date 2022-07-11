
# Liveness Verify Response

## Structure

`LivenessVerifyResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean \| undefined` | Optional | true if challenge is passed false if challenge is failed |
| `reason` | `string \| undefined` | Optional | empty if success is true Failure reason challenge failed |

## Example (as JSON)

```json
{
  "success": null,
  "reason": null
}
```

