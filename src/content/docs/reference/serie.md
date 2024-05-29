---
title: The Serie object
description: Reference of a Pokemon TCG Serie/Era
---

## Fields

| Name | Type                                       | Nullable | Description                                                              |
| ---- | ------------------------------------------ | -------- | ------------------------------------------------------------------------ |
| id   | String                                     |          | Serie Unique ID                                                          |
| name | String                                     |          | Serie Name                                                               |
| logo | String ([Asset](/assets))                  | Yes      | Serie logo (you can add .(`webp`, `png`, `jpg`) to customize the format) |
| sets | Array of [Set Brief](/reference/set-brief) |          | The list of sets linked to this serie                                    |

## Example

```json
{
	"id": "swsh",
	"logo": "https://assets.tcgdex.net/en/swsh/swshp/logo",
	"name": "Sword & Shield",
	"sets": [
		{
			"cardCount": {
				"official": 107,
				"total": 166
			},
			"id": "swshp",
			"logo": "https://assets.tcgdex.net/en/swsh/swshp/logo",
			"name": "SWSH Black Star Promos",
			"symbol": "https://assets.tcgdex.net/univ/swsh/swshp/symbol"
		},
		// ...
		{
			"cardCount": {
				"official": 159,
				"total": 230
			},
			"id": "swsh12.5",
			"logo": "https://assets.tcgdex.net/en/swsh/swsh12.5/logo",
			"name": "Crown Zenith"
		}
	]
}
```
