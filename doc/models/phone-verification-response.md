
# Phone Verification Response

## Structure

`PhoneVerificationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneCountry` | `string \| undefined` | Optional | country calling code |
| `phoneNumber` | `string \| undefined` | Optional | phone number |
| `carrier` | [`PhoneVerificationCarrier \| undefined`](../../doc/models/phone-verification-carrier.md) | Optional | - |
| `attempts` | [`PhoneVerificationAttempt[] \| undefined`](../../doc/models/phone-verification-attempt.md) | Optional | - |
| `state` | [`State1Enum \| undefined`](../../doc/models/state-1-enum.md) | Optional | Verification state |

## Example (as JSON)

```json
{
  "phone_country": null,
  "phone_number": null,
  "carrier": null,
  "attempts": null,
  "state": null
}
```

