
# Identity Info

## Structure

`IdentityInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | name of the field |
| `documentSide` | `string \| undefined` | Optional | document side where the info is FRONT / BACK |
| `slug` | `string \| undefined` | Optional | unique info identifier |
| `crossCheckable` | `boolean \| undefined` | Optional | crosscheckable if there is a MRZ with a value to crosscheck |
| `crossChecked` | `boolean \| undefined` | Optional | crosschecked with MRZ if any |
| `value` | `string \| undefined` | Optional | value of the info |

## Example (as JSON)

```json
{
  "name": null,
  "document_side": null,
  "slug": null,
  "cross_checkable": null,
  "cross_checked": null,
  "value": null
}
```

