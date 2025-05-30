---
title: The Card object
description: A Pokémon TCG card
---

The main object used through the API

## Common Fields

Fields that are used by each cards

| Property                 | Type                             | Nullable | Details                                                                                   |
| ------------------------ | -------------------------------- | -------- | ----------------------------------------------------------------------------------------- |
| id                       | String                           |          | The unique ID of the card                                                                 |
| localId                  | String or Number                 |          | Card Local ID                                                                             |
| name                     | String                           |          | Card Name                                                                                 |
| image                    | String ([Asset](/assets))        | Yes      | Card Image (see Assets)                                                                   |
| category                 | String                           |          | Card category (Pokemon, Energy, Trainer)                                                  |
| illustrator              | String                           | Yes      | Card illustrator                                                                          |
| rarity                   | String                           | Yes      | Card rarity                                                                               |
| variants                 | Object                           |          | The possible variants of this card (see below)                                            |
| variants.normal          | Boolean                          |          | Card available without any shines                                                         |
| variants.reverse         | Boolean                          |          | Card available in Reverse (colored background is shining)                                 |
| variants.holo            | Boolean                          |          | Card available in Holo (picture is shining)                                               |
| variants.firstEdition    | Boolean                          |          | Card has a small 1st edition in the middle left                                           |
| boosters                 | Array                            | Yes      | Indicate in which booster(s) the card is available in (null if available in all boosters) |
| boosters[].id            | String                           |          | the unique ID of the booster                                                              |
| boosters[].name          | String                           |          | The localized name of the booster                                                         |
| boosters[].logo          | String                           | Yes      | the Booster logo                                                                          |
| boosters[].artwork_front | String                           | Yes      | The front of the booster                                                                  |
| boosters[].artwork_back  | String                           | Yes      | The back of the booster                                                                   |
| set                      | [SetBrief](/reference/set-brief) |          | Basic informations about the card set                                                     |

## Pokemon Card

_Include everything from [Common Fields](#common-fields)_

| Property    | Type            | Nullable | Details                                              |
| ----------- | --------------- | -------- | ---------------------------------------------------- |
| category    | "Pokemon"       |          | Card category (Pokemon, Energy, Trainer)             |
| dexId       | Array of Number | Yes      | The National Pokedex ID of the pokémons on the card  |
| hp          | Number          | Yes      | The Pokémon HP                                       |
| types       | Array of String | Yes      | The types of the Pokémon                             |
| evolveFrom  | String          | Yes      | The Pokémon name it evolve from                      |
| description | String          | Yes      | the card description (generally in the bottom right) |
| level       | String          | Yes      | The Pokémon Level (if it's a lv.X the level is X)    |
| stage       | String          | Yes      | The Pokémon Stage                                    |
| suffix      | String          | Yes      | The Card suffix                                      |
| item        | Object          | Yes      | The Pokémon Item                                     |
| item.name   | String          |          | The Item name                                        |
| item.effect | String          |          | The Item effect                                      |

## Trainer Card

| Property    | Type      | Nullable | Details                                                                                                                                                 |
| ----------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| category    | "Trainer" |          | Card category (Pokemon, Energy, Trainer)                                                                                                                |
| effect      | String    |          | The trainer card effect                                                                                                                                 |
| trainerType | String    |          | The type of trainer card ('Supporter', 'Item', 'Stadium', 'Tool', 'Ace Spec', 'Technical Machine', 'Goldenrod Game Corner', 'Rocket\'s Secret Machine') |


## Energy Card

| Property   | Type     | Nullable | Details                                   |
| ---------- | -------- | -------- | ----------------------------------------- |
| category   | "Energy" |          | Card category (Pokemon, Energy, Trainer)  |
| effect     | String   |          | The trainer card effect                   |
| energyType | String   |          | The type of trainer card (Basic, Special) |

## Example

```curl
https://api.tcgdex.net/v2/en/cards/swsh3-136
```

```json
{
	"category": "Pokemon",
	"id": "swsh3-136",
	"illustrator": "tetsuya koizumi",
	"image": "https://assets.tcgdex.net/en/swsh/swsh3/136",
	"localId": "136",
	"name": "Furret",
	"rarity": "Uncommon",
	"set": {
		"cardCount": {
			"official": 189,
			"total": 201
		},
		"id": "swsh3",
		"logo": "https://assets.tcgdex.net/en/swsh/swsh3/logo",
		"name": "Darkness Ablaze",
		"symbol": "https://assets.tcgdex.net/univ/swsh/swsh3/symbol"
	},
	"variants": {
		"firstEdition": false,
		"holo": false,
		"normal": true,
		"reverse": true,
		"wPromo": false
	},
	"hp": 110,
	"types": [
		"Colorless"
	],
	"evolveFrom": "Sentret",
	"description": "It makes a nest to suit its long and skinny body. The nest is impossible for other Pokémon to enter.",
	"stage": "Stage1",
	"attacks": [
		{
			"cost": [
				"Colorless"
			],
			"name": "Feelin' Fine",
			"effect": "Draw 3 cards."
		},
		{
			"cost": [
				"Colorless"
			],
			"name": "Tail Smash",
			"effect": "Flip a coin. If tails, this attack does nothing.",
			"damage": 90
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"retreat": 1,
	"regulationMark": "D",
	"legal": {
		"standard": false,
		"expanded": true
	}
}
```
