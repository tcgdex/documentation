---
title: The Set Brief object
description: Reference of a Set Brief object
---

## Fields

| Name               | Type                                        | Nullable | Description                                                                      |
| ------------------ | ------------------------------------------- | -------- | -------------------------------------------------------------------------------- |
| id                 | String                                      |          | Set Unique ID                                                                    |
| name               | String                                      |          | Set Name                                                                         |
| logo               | String [Asset](/assets)                     | Yes      | Set logo (you can add .(webp\|png\|jpg) to customize the format)                 |
| symbol             | String [Asset](/assets)                     | Yes      | Set Symbol (you can add .(webp\|png\|jpg) to customize the format                |
| cardCount          | Object                                      |          | Contain information about the number of cards in the set                         |
| cardCount.total    | Number                                      |          | The total amount of cards in this set (including hidden)                         |
| cardCount.official | Number                                      |          | The amount of cards in this set (displayed on the bottom left/right of the card) |

## Example

```json
{
	"id": "swsh3",
	"name": "Darkness Ablaze",
	"logo": "https://assets.tcgdex.net/en/swsh/swsh3/logo",
	"symbol": "https://assets.tcgdex.net/univ/swsh/swsh3/symbol",
	"cardCount": {
		"total": 201,
		"official": 189
	}
}
```
