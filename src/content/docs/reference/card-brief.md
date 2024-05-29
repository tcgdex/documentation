---
title: The Card brief object
description: A brief Pokémon TCG card (used in lists)
---

## Fields

| Property | Type                      | Nullable | Details                   |
| -------- | ------------------------- | -------- | ------------------------- |
| id       | String                    |          | The unique ID of the card |
| localId  | String or Number          |          | Card Local ID             |
| name     | String                    |          | Card Name                 |
| image    | String ([Asset](/assets)) | Yes      | Card Image (see Assets)   |

## Example

```json
{
	"id": "swsh3-136",
	"localId": "136",
	"name": "Furret",
	"image": "https://assets.tcgdex.net/en/swsh/swsh3/136"
}
```
