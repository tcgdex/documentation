---
title: The Set object
description: Reference of a Pokemon TCG Set
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
| cardCount.reverse  | Number                                      |          | The amount of cards in this set that can be found in reverse holo                |
| cardCount.holo     | Number                                      |          | The amount of cards in this set that can be found in holo                        |
| cardCount.firstEd  | Number                                      |          | The amount of cards in this set that can be found with the firstEdition Tag      |
| serie              | [SerieBrief](/reference/serie-brief)        |          | Informations about the serie                                                     |
| tcgOnline          | String                                      | Yes      | Pokémon TCG Online Set code                                                      |
| releaseDate        | String                                      |          | The set release date in the form yyyy-mm-dd                                      |
| legal              | Object                                      |          | Set usability in competitions                                                    |
| legal.standard     | Boolean                                     |          | Ability to use this set in standard competitions                                 |
| legal.expanded     | Boolean                                     |          | Ability to use this set in Expanded competitions                                 |
| cards              | Array of [CardBrief](/reference/card-brief) |          | List of cards in this set                                                        |

## Example

```json
{
	"cardCount": {
		"firstEd": 0,
		"holo": 64,
		"normal": 137,
		"official": 189,
		"reverse": 155,
		"total": 201
	},
	"cards": [
		{
			"id": "swsh3-1",
			"image": "https://assets.tcgdex.net/en/swsh/swsh3/1",
			"localId": "1",
			"name": "Butterfree V"
		},
		// ...
		{
			"id": "swsh3-136",
			"image": "https://assets.tcgdex.net/en/swsh/swsh3/136",
			"localId": "136",
			"name": "Furret"
		},
		// ...
		{
			"id": "swsh3-201",
			"image": "https://assets.tcgdex.net/en/swsh/swsh3/201",
			"localId": "201",
			"name": "Capture Energy"
		}
	],
	"id": "swsh3",
	"legal": {
		"expanded": true,
		"standard": false
	},
	"logo": "https://assets.tcgdex.net/en/swsh/swsh3/logo",
	"name": "Darkness Ablaze",
	"releaseDate": "2020-08-14",
	"serie": {
		"id": "swsh",
		"name": "Sword & Shield"
	},
	"symbol": "https://assets.tcgdex.net/univ/swsh/swsh3/symbol"
}
```
