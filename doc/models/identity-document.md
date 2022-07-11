
# Identity Document

## Structure

`IdentityDocument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`TypeEnum \| undefined`](../../doc/models/type-enum.md) | Optional | - |
| `country` | `string \| undefined` | Optional | Issuing country (code ISO-3166) |
| `frontFile` | `string \| undefined` | Optional | image of the front document available through a signed URL (15 minutes expiry) |
| `backFile` | `string \| undefined` | Optional | image of the back document available through a signed URL (15 minutes expiry) |

## Example (as JSON)

```json
{
  "type": null,
  "country": null,
  "front_file": null,
  "back_file": null
}
```

