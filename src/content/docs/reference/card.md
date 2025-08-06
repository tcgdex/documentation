---
title: The Card object
description: A comprehensive guide to Pokémon TCG card objects in the API
---

The Card object is the core data structure used throughout the TCGdx API. It represents a single Pokémon Trading Card Game card with all its properties, variants, and associated metadata.

## Card Types

All cards share common properties, with additional fields specific to their category:

- **[Pokémon Cards](#pokémon-cards)** - Battle creatures with HP, attacks, and abilities
- **[Trainer Cards](#trainer-cards)** - Support cards with various effects and types
- **[Energy Cards](#energy-cards)** - Resource cards needed to power Pokémon attacks

## Common Properties

Properties shared by all cards regardless of category:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | String | ✓ | Unique identifier for the card (e.g., "swsh3-136") |
| `localId` | String or Number | ✓ | Card number within its set |
| `name` | String | ✓ | Official card name |
| `image` | String | | Card image URL (see [Assets](/assets)) |
| `category` | String | ✓ | Card type: "Pokemon", "Energy", or "Trainer" |
| `illustrator` | String | | Artist who illustrated the card |
| `rarity` | String | | Card rarity (Common, Uncommon, Rare, etc.) |
| `set` | [SetBrief](/reference/set-brief) | ✓ | Set information (see [Sets API](/rest/set)) |
| `variants` | [Object](#variants) | ✓ | Available card variants |
| `boosters` | [Array](#boosters) | | Booster packs containing this card (null if available in all boosters) |
| `pricing` | [Object](#pricing) | | Market pricing information |

### Variants

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `variants.normal` | Boolean | ✓ | Standard non-foil version available |
| `variants.reverse` | Boolean | ✓ | Reverse holofoil version available |
| `variants.holo` | Boolean | ✓ | Holofoil version available |
| `variants.firstEdition` | Boolean | ✓ | First edition printing available |

### Boosters

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `boosters[].id` | String | ✓ | Unique booster identifier |
| `boosters[].name` | String | ✓ | Localized booster name |
| `boosters[].logo` | String | | Booster pack logo image |
| `boosters[].artwork_front` | String | | Front artwork image |
| `boosters[].artwork_back` | String | | Back artwork image |

## Pricing

Market pricing information from multiple sources:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `pricing.tcgplayer` | [Object](#tcgplayer-pricing) | | TCGPlayer marketplace data |
| `pricing.cardmarket` | [Object](#cardmarket-pricing) | | Cardmarket pricing data |

### TCGPlayer Pricing

TCGPlayer data is organized by card variant. Each variant may contain:

| Property | Type | Description |
|----------|------|-------------|
| `lowPrice` | Number | Lowest available price |
| `midPrice` | Number | Median market price |
| `highPrice` | Number | Highest available price |
| `marketPrice` | Number | Current market price |
| `directLowPrice` | Number | Lowest direct seller price |

**Available variants:**
- `pricing.tcgplayer.normal` - Standard non-foil cards
- `pricing.tcgplayer.holofoil` - Holofoil finish cards
- `pricing.tcgplayer.reverse-holofoil` - Reverse holofoil cards
- `pricing.tcgplayer.1st-edition` - First edition cards
- `pricing.tcgplayer.1st-edition-holofoil` - First edition holofoil cards
- `pricing.tcgplayer.unlimited` - Unlimited edition cards
- `pricing.tcgplayer.unlimited-holofoil` - Unlimited holofoil cards

### Cardmarket Pricing

European market data with separate pricing for foil and non-foil variants:

| Property | Type | Description |
|----------|------|-------------|
| `pricing.cardmarket.avg` | Number | Average selling price (non-foil) |
| `pricing.cardmarket.low` | Number | Lowest market price (non-foil) |
| `pricing.cardmarket.trend` | Number | Trend price from charts (non-foil) |
| `pricing.cardmarket.avg1` | Number | Average price (last 24 hours) |
| `pricing.cardmarket.avg7` | Number | Average price (last 7 days) |
| `pricing.cardmarket.avg30` | Number | Average price (last 30 days) |
| `pricing.cardmarket.avg-holo` | Number | Average selling price (foil) |
| `pricing.cardmarket.low-holo` | Number | Lowest market price (foil) |
| `pricing.cardmarket.trend-holo` | Number | Trend price from charts (foil) |
| `pricing.cardmarket.avg1-holo` | Number | Average price (last 24 hours, foil) |
| `pricing.cardmarket.avg7-holo` | Number | Average price (last 7 days, foil) |
| `pricing.cardmarket.avg30-holo` | Number | Average price (last 30 days, foil) |

## Pokémon Cards

Additional properties for Pokémon cards (includes all [common properties](#common-properties)):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `category` | "Pokemon" | ✓ | Always "Pokemon" for these cards |
| `dexId` | Array of Number | | National Pokédex ID(s) of the Pokémon |
| `hp` | Number | | Hit Points of the Pokémon |
| `types` | Array of String | | Pokémon types (Fire, Water, Grass, etc.) |
| `evolveFrom` | String | | Name of the Pokémon it evolves from |
| `description` | String | | Flavor text description |
| `level` | String | | Pokémon level (for LV.X cards, level is X) |
| `stage` | String | | Evolution stage (Basic, Stage1, Stage2) |
| `suffix` | String | | Additional card identifiers |

### Pokémon Items

Some Pokémon cards feature held items:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `item` | Object | | Held item information |
| `item.name` | String | ✓ | Item name |
| `item.effect` | String | ✓ | Item effect description |

## Trainer Cards

Additional properties for Trainer cards (includes all [common properties](#common-properties)):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `category` | "Trainer" | ✓ | Always "Trainer" for these cards |
| `effect` | String | ✓ | Card effect text |
| `trainerType` | String | ✓ | Type of trainer card |

## Energy Cards

Additional properties for Energy cards (includes all [common properties](#common-properties)):

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `category` | "Energy" | ✓ | Always "Energy" for these cards |
| `effect` | String | ✓ | Card effect text |
| `energyType` | String | ✓ | Type of energy card |

### Energy Types

| Type | Description |
|------|-------------|
| `Basic` | Standard single-type energy |
| `Special` | Multi-type or special effect energy |

## Example

Complete Pokémon card response:

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

## API Usage

To fetch a card:

```
GET https://api.tcgdex.net/v2/en/cards/{card-id}
```

_[see the REST endpoint](/rest/card)_

Replace `{card-id}` with the card's unique identifier (e.g., "swsh3-136").

## Related Resources

- [Sets API](/rest/set) - Information about card sets
- [SetBrief Object](/reference/set-brief) - Simplified set information
- [Assets Documentation](/assets) - Card image and asset handling
