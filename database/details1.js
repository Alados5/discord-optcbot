//Copied from the optc-db.github.io database files. All credit goes to them.

var db1 = {
    1: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
        specialName: "Spinning Gum Punch"
    },
    2: {
        special: "Deals 7x character's ATK in [STR] damage to one enemy",
        specialName: "Gum-Gum Pistol",
        captain: "Boosts ATK of all characters by 1.5x"
    },
    3: {
        special: "Deals 15x character's ATK in [STR] damage to one enemy",
        specialName: "Gum-Gum Bazooka",
        captain: "Boosts ATK of all characters by 1.5x"
    },
    4: {
        captain: "Boosts ATK of [STR] characters by 2x and ATK of all others by 1.5x",
        special: "Deals 25x character's ATK in [STR] damage to one enemy",
        sailor: {
            "base": "None",
            "level1": "Boosts own base ATK by 100 if this character is the last in the chain to attack",
            "level2": "Makes [QCK] orbs \"beneficial\" for this unit"
        },
        sailorNotes: "#{beneficial}",
        specialName: "Gum-Gum Twin Jet Pistol",
        limit: [
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts own base ATK by 100 if this character is the last in the chain to attack" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 2 turns",
                    "Level 4: Reduces No Healing duration by 3 turns",
                    "Level 5: Reduces No Healing duration by 4 turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    5: {
        special: "Deals 7x character's ATK in [DEX] damage to one enemy",
        specialName: "Oni Giri",
        captain: "Boosts ATK of [DEX] characters by 1.5x"
    },
    6: {
        special: "Deals 10x character's ATK in [DEX] damage to all enemies",
        specialName: "Three Thousand Worlds",
        captain: "Boosts ATK of [DEX] characters by 1.5x"
    },
    7: {
        special: "Deals 10x character's ATK in [DEX] damage to all enemies",
        specialName: "108 Pound Phoenix",
        captain: "Boosts ATK of [DEX] characters by 1.5x"
    },
    8: {
        special: "Deals 15x character's ATK in [DEX] damage to all enemies",
        specialName: "Ashura Ichibugin",
        captain: "Boosts ATK and HP of [DEX] characters by 2x",
        sailor: {
            "base": "None",
            "level1": "Restores his own special by 1 turn when it is rewinded",
            "level2": "Boosts base ATK of [DEX] characters by 40"
        },
        sailorNotes: "#{rewind : 1}",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Sailor Ability 1: Restores his own special by 1 turn when it is rewinded" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of [DEX] characters by 40" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 4%",
                    "Level 5: Reduce damage taken from [QCK] characters by 5%"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ]
    },
    9: {
        special: "Recovers 1,000 HP",
        specialName: "Cat Burglar",
        captain: "Reduces damage received from [INT] enemies by 20%"
    },
    10: {
        special: "Deals 15x character's ATK in [INT] damage to one enemy",
        specialName: "Tornado Tempo",
        captain: "Boosts ATK of [INT] characters by 1.5x"
    },
    11: {
        special: "Reduces damage received from [INT] enemies by 100% for 1 turn",
        specialName: "Mirage Tempo",
        captain: "Boosts ATK of [INT] characters by 1.5x"
    },
    12: {
        special: "Deals 15x character's ATK in [INT] damage to all enemies",
        specialName: "Thunderbolt Tempo",
        captain: "Boosts ATK and HP of [INT] characters by 1.5x",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] orbs \"beneficial\" for [INT] characters",
            "level2": "Boosts base ATK, HP and RCV of [INT] characters by 50"
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for [INT] characters" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV of [INT] characters by 50" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ]
    },
    13: {
        special: "Delays all enemies for 1 turn",
        specialName: "Liar",
        captain: "Boosts ATK of Shooter characters by 1.2x"
    },
    14: {
        special: "Delays all enemies for 2 turns",
        specialName: "Tabasco Star",
        captain: "Boosts ATK of [PSY] characters by 1.5x"
    },
    15: {
        special: "Delays all enemies for 3 turns",
        specialName: "Usopp Golden Pound",
        captain: "Boosts ATK of [PSY] characters by 1.5x"
    },
    16: {
        special: "Delays all enemies for 3 turns, deals 15x character's ATK in [PSY] damage to all enemies",
        specialName: "Fire Bird Star",
        captain: "Boosts ATK and HP of [PSY] characters by 1.5x",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Shooter characters by 20",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Shooter characters by 20" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: If there are 6 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 2: If there are 5 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 3: If there are 4 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 4: If there are 4 Shooter characters in your crew, reduces No Healing duration by 2 turns",
                    "Level 5: If there are 4 Shooter characters in your crew, reduces No Healing duration by 3 turns"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    17: {
        special: "Recovers 10x character's RCV in HP",
        specialName: "Special Fried Rice",
        captain: "Boosts ATK of [QCK] characters by 1.5x"
    },
    18: {
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Plastic Surgery Shot",
        captain: "Boosts HP of [QCK] characters by 1.5x"
    },
    19: {
        special: "Recovers 10x character's RCV in HP",
        specialName: "Hot Rock Stew",
        captain: "Boosts ATK of [QCK] characters by 1.5x"
    },
    20: {
        special: "Deals 5,000 fixed damage to all enemies",
        specialName: "Diable Jambe",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of [QCK] characters by 1.5x",
        sailor: {
            "base": "None",
            "level1": "Makes RCV orbs \"beneficial\" for all characters",
            "level2": "Boosts base ATK, HP and RCV of all characters by 40",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Sailor Ability 1: Makes RCV orbs \"beneficial\" for all characters" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV of all characters by 40" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    21: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "Hearty Yell",
        captain: "Boosts RCV of [PSY] characters by 1.2x"
    },
    22: {
        special: "Deals 15x character's ATK in [PSY] damage to one enemy",
        specialName: "Heavy Gong",
        captain: "Boosts RCV of [PSY] characters by 1.5x",
        sailor: {
            "base": "None",
            "level1": "Makes [TND] orbs \"beneficial\" for this unit",
            "level2": "Boosts base ATK, HP and RCV of all characters by 30",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV of all characters by 30" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    23: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "Scope",
        captain: "Boosts RCV of [INT] characters by 1.5x"
    },
    24: {
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Hoofprint Roseo",
        captain: "Boosts RCV of [STR] characters by 1.5x"
    },
    25: {
        special: "Deals 7x character's ATK in [QCK] damage to all enemies",
        specialName: "Horn Point Roseo Colonnade",
        captain: "Boosts RCV of [QCK] characters by 1.5x"
    },
    26: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "Guard Point",
        captain: "Boosts RCV of [DEX] characters by 1.5x"
    },
    27: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash",
        captain: "Boosts HP of [QCK] characters by 1.2x"
    },
    28: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight",
        captain: "Boosts ATK of Fighter characters by 1.2x"
    },
    29: {
        special: "Deals 7x character's ATK in [STR] damage to one enemy",
        specialName: "Iron Mace Beauty",
        captain: "Reduces damage received from [STR] enemies by 30%"
    },
    30: {
        special: "Reduces damage received by 80% for 1 turn",
        specialName: "Slip-Slip Tracks",
        captain: "Reduces damage received from [STR] enemies by 50%"
    },
    31: {
        captain: "Recovers 2x character's RCV in HP at the end of each turn"
    },
    32: {
        special: "Changes [RCV] orbs into [TND] orbs",
        specialName: "Shooting Spree",
        captain: "Recovers 2x character's RCV in HP at the end of each turn"
    },
    33: {
        captain: "Reduces damage received from [INT] enemies by 30%"
    },
    34: {
        special: "Reduces the defense of all enemies by 100% for 1 turn",
        specialName: "Straw Doll Of Resentment",
        captain: "Reduces damage received from [INT] enemies by 30%"
    },
    35: {
        special: "Deals 5x character's ATK in [STR] damage to one enemy",
        specialName: "Execution Axe-Hand",
        captain: "Boosts HP of Slasher characters by 1.2x"
    },
    36: {
        special: "Deals 5x character's ATK in [PSY] damage to one enemy",
        specialName: "Fierce Bite",
        captain: "Boosts ATK of [PSY] characters by 1.5x"
    },
    37: {
        special: "Deals 5x character's ATK in [DEX] damage to one enemy",
        specialName: "The Dance Of A Hundred Kamikaze Tops",
        captain: "Boosts ATK of [DEX] characters by 1.5x"
    },
    38: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "Chop-Chop Festival",
        captain: "Boosts ATK of [INT] characters by 1.5x"
    },
    39: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "Chop-Chop Festival",
        captain: "Boosts ATK of [INT] characters by 2x"
    },
    40: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm",
        captain: "Reduces damage received from Shooter enemies by 30%"
    },
    41: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "Cat Snatch",
        captain: "Boosts RCV of [INT] characters by 1.2x"
    },
    42: {
        special: "Deals 3x character's ATK in [STR] damage to all enemies",
        specialName: "Cat-A-Pult Cat-Astrophe",
        captain: "Boosts ATK of [STR] characters by 1.2x"
    },
    43: {
        special: "Changes [RCV] orbs into [DEX] orbs",
        specialName: "One, Two, Django",
        captain: "Reduces damage received by 10%"
    },
    44: {
        special: "Changes [RCV] orbs into [DEX] orbs",
        specialName: "Dance Heaven",
        captain: "Reduces damage received by 10%"
    },
    45: {
        special: "Deals 5x character's ATK in [QCK] damage to all enemies",
        specialName: "Death Scoop",
        captain: "Boosts ATK of [QCK] characters by 1.2x"
    },
    46: {
        special: "Deals 5x character's ATK in [QCK] damage to all enemies",
        specialName: "Death Scoop",
        captain: "Boosts ATK of [QCK] characters by 1.5x"
    },
    47: {
        special: "Changes [TND] orbs into [RCV] orbs",
        specialName: "[TND] Slot Change [RCV]"
    },
    48: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm"
    },
    49: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight",
        captain: "Boosts ATK of [STR] characters by 1.5x"
    },
    50: {
        special: "Deals 5x character's ATK in [STR] damage to one enemy",
        specialName: "The Meatball Of Doom",
        captain: "Recovers 3x character's RCV in HP at the end of each turn"
    },
    51: {
        captain: "Recovers 3x character's RCV in HP at the end of each turn"
    },
    52: {
        special: "Changes [STR] orbs into [DEX] orbs",
        specialName: "Chef Drop",
        captain: "Boosts ATK of Fighter characters by 2.5x"
    },
    53: {
        captain: "Reduces damage received from [QCK] enemies by 30%"
    },
    54: {
        special: "Deals 7x character's ATK in [QCK] damage to one enemy",
        specialName: "Demonic Dance",
        captain: "Reduces damage received from [QCK] enemies by 50%"
    },
    55: {
        captain: "Reduces damage received from [STR] enemies by 30%"
    },
    56: {
        special: "Changes [RCV] orbs into [STR] orbs",
        specialName: "Fire Pearl Privilege",
        captain: "Reduces damage received from [STR] enemies by 50%"
    },
    57: {
        special: "Deals 7x character's ATK in [INT] damage to one enemy",
        specialName: "Chain Hammer",
        captain: "Reduces damage received by 10%"
    },
    58: {
        special: "Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "MH5",
        captain: "Reduces damage received by 20%"
    },
    59: {
        special: "Changes [PSY] orbs into [INT] orbs",
        specialName: "[PSY] Slot Change [INT]",
        captain: "Boosts ATK of [INT] characters by 1.2x"
    },
    60: {
        special: "Changes [TND] orbs into [STR] orbs",
        specialName: "[TND] Slot Change [STR]",
        captain: "Boosts ATK of [STR] characters by 1.5x"
    },
    61: {
        special: "Deals 5x character's ATK in [INT] damage to all enemies",
        specialName: "Lip-O-Cannon",
        captain: "Boosts HP of Shooter characters by 1.5x"
    },
    62: {
        special: "Deals 7x character's ATK in [STR] damage to one enemy",
        specialName: "Guffaw Palm Bomb",
        captain: "Boosts HP of Fighter characters by 1.5x"
    },
    63: {
        captain: "Reduces damage received from [DEX] enemies by 30%"
    },
    64: {
        special: "Deals 10x character's ATK in [DEX] damage to all enemies",
        specialName: "New Year's Open Body Slam",
        captain: "Reduces damage received from [DEX] enemies by 50%"
    },
    65: {
        special: "Deals 7x character's ATK in [STR] damage to one enemy",
        specialName: "Shark On Darts",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    66: {
        special: "Deals 15x character's ATK in [STR] damage to one enemy",
        specialName: "Shark On Tooth",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    67: {
        special: "Deals 25x character's ATK in [QCK] damage to one enemy",
        specialName: "Quick Draw",
        captain: "Boosts RCV of Slasher characters by 1.5x"
    },
    68: {
        special: "Deals 25x character's ATK in [QCK] damage to one enemy",
        specialName: "Quick Draw",
        captain: "Boosts RCV of Slasher characters by 2x"
    },
    69: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "White Out",
        captain: "Reduces damage received by 20%"
    },
    70: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "White Out",
        captain: "Reduces damage received by 20%"
    },
    71: {
        special: "Reduces damage received by 50% for 1 turn",
        specialName: "Enchanting Vertigo Dance",
        captain: "Recovers 2x character's RCV in HP at the end of each turn"
    },
    72: {
        special: "Randomizes all orbs",
        specialName: "Charge! Supersonic Duck Squadron!",
        captain: "Recovers 3x character's RCV in HP at the end of each turn"
    },
    73: {
        special: "Randomizes all orbs",
        specialName: "Charge! Supersonic Duck Squadron!",
        captain: "Recovers 5x character's RCV in HP at the end of each turn",
        sailor: {
            "base": "None",
            "level1": "Reduces Paralysis duration by 1 turn",
            "level2": "Makes [INT] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 100" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis duration by 1 turn" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 200" },
            { "description": "Boosts base ATK by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Makes [INT] orbs \"beneficial\" for this unit" },
            { "description": "Acquire Potential 2: [PSY] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 4%",
                    "Level 5: Reduce damage taken from [PSY] characters by 5%"
                ]
            },
        ]
    },
    74: {
        special: "Deals 25x character's ATK in [QCK] damage to one enemy",
        specialName: "Flame Fist",
        captain: "Boosts ATK of [QCK] characters by 2x"
    },
    75: {
        special: "Deals 25x character's ATK in [QCK] damage to all enemies",
        specialName: "Flame Mirror",
        captain: {
            "base": "Boosts ATK of [QCK] characters by 2.5x",
            "level1": "Boosts ATK of [QCK] characters by 2.5x and their HP by 1.5x",
        },
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of [QCK] characters by 50",
            "level2": "Makes [DEX] orbs \"beneficial\" for [QCK] characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 100" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 100" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of [QCK] characters by 50" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire new Captain Ability: Boosts ATK of [QCK] characters by 2.5x and their HP by 1.5x" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs \"beneficial\" for [QCK] characters" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    76: {
        special: "Deals 15x character's ATK in [PSY] damage to all enemies",
        specialName: "Conqueror's Haki",
        captain: "Boosts ATK of [PSY] characters by 2x"
    },
    77: {
        special: "Deals 15x character's ATK in [PSY] damage to all enemies",
        specialName: "Conqueror's Haki",
        captain: "Boosts ATK of [PSY] characters by 2.5x",
        captain: {
            "base": "Boosts ATK of [PSY] characters by 2.5x",
            "level1": "Boosts ATK of [PSY] characters by 2.75x and their RCV by 1.2x",
        },
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of [PSY] characters by 75",
        },
        limit: [
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 250" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 200" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of [PSY] characters by 2.75x and their RCV by 1.2x" },
            { "description": "Boosts base HP by 400" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of [PSY] characters by 75" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 60% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 70% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 80% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    119: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    120: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    121: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    122: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    123: {
        special: "Changes [STR] orbs into [DEX] orbs",
        specialName: "[STR] Slot Change [DEX]"
    },
    124: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    125: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    126: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    127: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    128: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        specialName: "[QCK] Slot Change [DEX]"
    },
    129: {
        special: "Changes [INT] orbs into [PSY] orbs",
        specialName: "[INT] Slot Change [PSY]"
    },
    130: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    131: {
        special: "Changes [RCV] orbs into [STR] orbs",
        specialName: "[RCV] Slot Change [STR]"
    },
    132: {
        special: "Changes [DEX] orbs into [QCK] orbs",
        specialName: "[DEX] Slot Change [QCK]"
    },
    133: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        specialName: "[QCK] Slot Change [DEX]"
    },
    134: {
        special: "Changes [QCK] orbs into [RCV] orbs",
        specialName: "[QCK] Slot Change [RCV]"
    },
    135: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Spiral"
    },
    136: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    137: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    138: {
        special: "Changes [DEX] orbs into [RCV] orbs",
        specialName: "[DEX] Slot Change [RCV]"
    },
    139: {
        special: "Changes [PSY] orbs into [RCV] orbs",
        specialName: "[PSY] Slot Change [RCV]"
    },
    140: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    141: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    142: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    143: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    144: {
        special: "Changes [STR] orbs into [DEX] orbs",
        specialName: "[STR] Slot Change [DEX]"
    },
    145: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    146: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    147: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    148: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    149: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        specialName: "[QCK] Slot Change [DEX]"
    },
    150: {
        special: "Changes [INT] orbs into [PSY] orbs",
        specialName: "[INT] Slot Change [PSY]"
    },
    151: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    152: {
        special: "Changes [RCV] orbs into [STR] orbs",
        specialName: "[RCV] Slot Change [STR]"
    },
    153: {
        special: "Changes [DEX] orbs into [QCK] orbs",
        specialName: "[DEX] Slot Change [QCK]"
    },
    154: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        specialName: "[QCK] Slot Change [DEX]"
    },
    155: {
        special: "Changes [QCK] orbs into [RCV] orbs",
        specialName: "[QCK] Slot Change [RCV]"
    },
    156: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Spiral"
    },
    157: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    158: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    159: {
        special: "Changes [DEX] orbs into [RCV] orbs",
        specialName: "[DEX] Slot Change [RCV]"
    },
    160: {
        special: "Changes [PSY] orbs into [RCV] orbs",
        specialName: "[PSY] Slot Change [RCV]"
    },
    161: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    162: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    163: {
        special: "Changes [DEX] orbs into [TND] orbs",
        specialName: "[DEX] Slot Change [TND]"
    },
    164: {
        special: "Changes [QCK] orbs into [TND] orbs",
        specialName: "[QCK] Slot Change [TND]"
    },
    165: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    166: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    167: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    168: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    169: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    170: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    171: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    172: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    173: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    174: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    175: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    176: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    177: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Spiral"
    },
    178: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    179: {
        special: "Changes [QCK] orbs into [STR] orbs",
        specialName: "[QCK] Slot Change [STR]"
    },
    180: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    181: {
        special: "Changes [STR] orbs into [QCK] orbs",
        specialName: "[STR] Slot Change [QCK]"
    },
    182: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    183: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "[RCV] Slot Change [INT]"
    },
    184: {
        special: "Changes [QCK] orbs into [STR] orbs",
        specialName: "[QCK] Slot Change [STR]"
    },
    185: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    186: {
        special: "Changes [STR] orbs into [QCK] orbs",
        specialName: "[STR] Slot Change [QCK]"
    },
    187: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    188: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "[RCV] Slot Change [INT]"
    },
    194: {
        special: "Changes [QCK] orbs into [STR] orbs",
        specialName: "[QCK] Slot Change [STR]",
        captain: "Boosts ATK of [STR] characters by 1.5x"
    },
    195: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing",
        captain: "Boosts RCV of [DEX] characters by 1.5x"
    },
    196: {
        special: "Changes [STR] orbs into [QCK] orbs",
        specialName: "[STR] Slot Change [QCK]",
        captain: "Boosts ATK of [QCK] characters by 1.5x"
    },
    197: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing",
        captain: "Reduces damage received from [PSY] enemies by 20%"
    },
    198: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "[RCV] Slot Change [INT]",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    199: {
        special: "Deals 15x character's ATK in [STR] damage to one enemy",
        specialName: "Nez-Palm Cannon",
        captain: "Boosts ATK of [STR] characters by 1.5x"
    },
    200: {
        special: "Deals 20x character's ATK in [STR] damage to one enemy",
        specialName: "Breeze Breath Bomb",
        captain: "Boosts ATK of [STR] characters by 2x"
    },
    201: {
        captain: "Boosts HP of Fighter characters by 1.5x"
    },
    202: {
        special: "Changes [RCV] orbs into [QCK] orbs",
        specialName: "10,000 Kill-O-Guillotine",
        captain: "Boosts HP of Fighter characters by 2x"
    },
    203: {
        captain: "Reduces damage received from [INT] enemies by 10%"
    },
    204: {
        special: "Delays all enemies for 1 turn",
        specialName: "Extra Special Candelabra",
        captain: "Reduces damage received from [INT] enemies by 10%"
    },
    205: {
        captain: "Boosts HP and RCV of [DEX] characters by 1.2x"
    },
    206: {
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Colors Trap: Calming Green",
        captain: "Boosts HP and RCV of [DEX] characters by 1.2x"
    },
    207: {
        captain: "Reduces damage received from [PSY] enemies by 10%"
    },
    208: {
        special: "Changes [RCV] orbs into [PSY] orbs",
        specialName: "Bombardier Arabesque",
        captain: "Reduces damage received from [PSY] enemies by 20%"
    },
    209: {
        special: "Boosts ATK of [INT] characters by 1.5x for 1 turn",
        specialName: "Dieciseis Fleur",
        captain: "Boosts RCV of [INT] characters by 1.5x"
    },
    210: {
        special: "Boosts ATK of [INT] characters by 2x for 1 turn",
        specialName: "Cien Fleur",
        captain: "Boosts RCV of [INT] characters by 2x",
        sailor: {
            "base": "None",
            "level1": "Makes [PSY] orbs \"beneficial\" for this unit",
            "level2": "When HP is below ??% at the start of the turn, boosts own base ATK by 250",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 2: When HP is below ??% at the start of the turn, boosts own base ATK by 250" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by ? turns on this character"
                ]
            },
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    211: {
        captain: "Boosts ATK of Striker characters by 1.2x"
    },
    212: {
        special: "Deals 5x character's ATK in [QCK] damage to one enemy",
        specialName: "Hot Blooded Bat",
        captain: "Boosts ATK of Striker characters by 1.5x"
    },
    213: {
        special: "Deals 20x character's ATK in [STR] damage to all enemies",
        specialName: "Sorrowful Charge",
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}"
    },
    214: {
        special: "Deals 20x character's ATK in [STR] damage to all enemies",
        specialName: "Sorrowful Charge",
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}"
    },
    215: {
        special: "Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Ink",
        captain: "Boosts HP of Striker characters by 1.5x"
    },
    216: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "Gum-Gum Balloon",
        captain: "Reduces damage received by 20%"
    },
    217: {
        special: "Deals 15x character's ATK in [STR] damage to all enemies",
        specialName: "Gum-Gum Giant Rifle",
        captain: "Boosts ATK of all characters by 3.5x after scoring 3 PERFECTs in a row",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] and [TND] orbs \"beneficial\" for this unit",
            "level2": "Boosts own base ATK by 200 if this character is the last in the chain to attack",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 60" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire Sailor Ability 2: Boosts own base ATK by 200 if this character is the last in the chain to attack" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 25% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 30% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 40% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 40% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    218: {
        special: "Reduces damage received from [STR] enemies by 100% for 1 turn",
        specialName: "Streaming Wolf Swords",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn"
    },
    219: {
        special: "Deals 25x character's ATK in [DEX] damage to one enemy",
        specialName: "Lion's Song",
        captain: {
            "base": "Reduces damage received by 80% if HP is above 99% at the start of the turn",
            "level1": "Boosts ATK of all characters by 1.5x and reduces damage received by 80% if HP is above 99% at the start of the turn",
        },
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Slasher and Driven characters by 50",
            "level2": "Makes [STR] orbs \"beneficial\" for Slasher and Driven characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 100" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Slasher and Driven characters by 50" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 100" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Boosts base ATK by 200" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters by 1.5x and reduces damage received by 80% if HP is above 99% at the start of the turn" },
            { "description": "Acquire Sailor Ability 2: Makes [STR] orbs \"beneficial\" for Slasher and Driven characters" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    220: {
        special: "Changes [PSY] orbs into [INT] orbs",
        specialName: "Fine Tempo",
        captain: "Boosts ATK of [INT] characters by 2x"
    },
    221: {
        special: "Changes [PSY] orbs into [INT] orbs",
        specialName: "Happiness Punch",
        captain: {
            "base": "Boosts ATK of [INT] characters by 2.5x",
            "level1": "Boosts ATK of [INT] characters by 2.5x and their RCV by 1.2x",
        },
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of [INT] characters by 30",
            "level2": "Makes [TND] orbs \"beneficial\" for [INT] characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire new Captain Ability: Boosts ATK of [INT] characters by 2.5x and their RCV by 1.2x" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of [INT] characters by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire Sailor Ability 2: Makes [TND] orbs \"beneficial\" for [INT] characters" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: [PSY] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 4%",
                    "Level 5: Reduce damage taken from [PSY] characters by 5%"
                ]
            },
        ]
    },
    222: {
        special: "Boosts ATK of [PSY] characters by 1.5x for 1 turn",
        specialName: "Usopp Hammer",
        captain: "Boosts ATK of [PSY] characters by 1.2x"
    },
    223: {
        special: "Boosts ATK of [PSY] characters by 2x for 1 turn",
        specialName: "Impact",
        captain: "Boosts ATK of [PSY] characters by 1.5x"
    },
    224: {
        special: "Deals 15x character's ATK in [QCK] damage to one enemy",
        specialName: "Mutton Shot",
        captain: "Boosts ATK of all characters by 2x after scoring 2 PERFECTs in a row"
    },
    225: {
        special: "Deals 20x character's ATK in [QCK] damage to one enemy",
        specialName: "Veau Shot",
        captain: "Boosts ATK of all characters by 2.5x after scoring 2 PERFECTs in a row"
    },
    226: {
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Black Blade Ship Cutter",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    227: {
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Black Blade Ship Cutter",
        captain: {
            "base": "Boosts ATK of Slasher characters by 2.5x",
            "level1": "Boosts ATK of Slasher characters by 2.5x and their HP by 1.3x",
        },
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] and [TND] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Slasher characters by 2.5x and their HP by 1.3x" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
        ]
    },
    228: {
        special: "Reduces Bind duration by 2 turns",
        specialName: "Escapee Axe-Hand",
        captain: "Boosts HP of Slasher characters by 1.5x"
    },
    229: {
        special: "Changes [INT] orbs into [PSY] orbs",
        specialName: "Double Cross Dance",
        captain: "Reduces damage received by 10%"
    },
    230: {
        special: "Deals 200 fixed damage to one enemy",
        specialName: "Double Hyper Straight",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of [STR] characters by 1.5x"
    },
    231: {
        special: "Locks all orbs for 1 turn",
        specialName: "Kimono Sleeve Cage",
        captain: "Boosts ATK of [QCK] characters by 2x"
    },
    232: {
        special: "Locks all orbs for 1 turn",
        specialName: "Kimono Sleeve Cage",
        captain: "Boosts ATK of [QCK] characters by 2x"
    },
    233: {
        captain: "Boosts HP of [PSY] characters by 1.5x"
    },
    234: {
        special: "Deals 5x character's ATK in [PSY] damage to all enemies",
        specialName: "Igarappapa",
        captain: "Boosts HP of [PSY] characters by 2x"
    },
    235: {
        captain: "Boosts ATK of Fighter characters by 1.2x"
    },
    236: {
        special: "Deals 20x character's ATK in [STR] damage to one enemy",
        specialName: "Superhuman Brass Knuckles",
        captain: "Boosts ATK of Fighter characters by 1.5x"
    },
    237: {
        special: "Changes [DEX] orbs into [STR] orbs",
        specialName: "[DEX] Slot Change [STR]"
    },
    238: {
        special: "Changes [TND] orbs into [DEX] orbs",
        specialName: "[TND] Slot Change [DEX]"
    },
    239: {
        special: "Changes [TND] orbs into [QCK] orbs",
        specialName: "[TND] Slot Change [QCK]"
    },
    240: {
        special: "Changes [STR] orbs into [PSY] orbs",
        specialName: "[STR] Slot Change [PSY]"
    },
    241: {
        special: "Changes [QCK] orbs into [INT] orbs",
        specialName: "[QCK] Slot Change [INT]"
    },
    242: {
        special: "Changes [DEX] orbs into [STR] orbs",
        specialName: "[DEX] Slot Change [STR]"
    },
    243: {
        special: "Changes [TND] orbs into [DEX] orbs",
        specialName: "[TND] Slot Change [DEX]"
    },
    244: {
        special: "Changes [TND] orbs into [QCK] orbs",
        specialName: "[TND] Slot Change [QCK]"
    },
    245: {
        special: "Changes [STR] orbs into [PSY] orbs",
        specialName: "[STR] Slot Change [PSY]"
    },
    246: {
        special: "Changes [QCK] orbs into [INT] orbs",
        specialName: "[QCK] Slot Change [INT]"
    },
    247: {
        special: "Recovers 1,224 HP",
        specialName: "Kyuun Spark",
        captain: "Reduces damage received by 10%"
    },
    248: {
        special: "Deals random [STR] damage to one enemy",
        specialName: "Rampage",
        specialNotes: "#{random : 2,000 : 200,000}",
        captain: "Boosts ATK of [STR] characters by 2.5x and reduces their HP by 60%"
    },
    249: {
        special: "Deals random [STR] damage to one enemy",
        specialName: "Rampage",
        specialNotes: "#{random : 2,000 : 200,000}",
        captain: "Boosts ATK of [STR] characters by 3x and reduces their HP by 60%",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of all characters by 50",
        },
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of all characters by 50" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    250: {
        special: "Recovers all missing HP",
        specialName: "Blue Flame Rebirth",
        captain: "Boosts ATK of [PSY] characters by 3x if HP is above 99% at the start of the turn"
    },
    251: {
        special: "Recovers all missing HP",
        specialName: "Blue Flame Rebirth",
        captain: "Boosts ATK of [PSY] characters by 3x if HP is above 99% at the start of the turn",
        sailor: {
            "base": "None",
            "level1": "Reduces Paralysis duration for 5 turns for himself",
        },
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis duration for 5 turns for himself" },
            { "description": "Acquire Potential 2: [PSY] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 4%",
                    "Level 5: Reduce damage taken from [PSY] characters by 5%"
                ]
            },
        ]
    },
    252: {
        special: "Reduces damage received from [DEX] enemies by 100% for 1 turn",
        specialName: "Brilliant Punk",
        captain: "Boosts ATK and HP of [QCK] characters by 2x"
    },
    253: {
        special: "Reduces damage received from [DEX] enemies by 100% for 1 turn",
        specialName: "Brilliant Punk",
        captain: "Boosts ATK and HP of [QCK] characters by 2x",
        sailor: {
            "base": "None",
            "level1": "Cannot be Blown Away",
            "level2": "Boosts base HP of Fighter characters by 100",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Acquire Sailor Ability 1: Cannot be Blown Away" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Acquire Sailor Ability 2: Boosts base HP of Fighter characters by 100" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    254: {
        special: "Deals 5,000 fixed damage to all enemies",
        specialName: "Rose Rondo",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of [INT] characters by 2x"
    },
    255: {
        special: "Deals 5,000 fixed damage to all enemies",
        specialName: "Rose Rondo",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of [INT] characters by 2x",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of [INT] characters by 30",
            "level2": "If this character has an [INT] orb and you hit a PERFECT with him, keep his [INT] orb for the next turn",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of [INT] characters by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Sailor Ability 2: If this character has an [INT] orb and you hit a PERFECT with him, keep his [INT] orb for the next turn" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 4%",
                    "Level 5: Reduce damage taken from [PSY] characters by 5%"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 80% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ]
    },
    256: {
        special: "Changes [STR] and [QCK] orbs into [DEX] orbs",
        specialName: "Beautiful Dual Flintlocks",
        captain: "Boosts ATK and RCV of [DEX] characters by 2x"
    },
    257: {
        special: "Changes [STR] and [QCK] orbs into [DEX] orbs",
        specialName: "Beautiful Dual Flintlocks",
        captain: {
            "base": "Boosts ATK and RCV of [DEX] characters by 2x",
            "level1": "Boosts ATK and RCV of [DEX] characters by 2x and boosts ATK of Shooter characters by 1.2x",
        },
        captainNotes: "Attack boost stacks, so a [DEX] Shooter character has a 2.4x ATK",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of [DEX] characters by 50",
            "level2": "Boosts base ATK of Shooter characters by 50",
        },
        limit: [
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of [DEX] characters by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 150" },
            { "description": "Acquire new Captain Ability: Boosts ATK and RCV of [DEX] characters by 2x and boosts ATK of Shooter characters by 1.2x" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of Shooter characters by 50" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
        ]
    },
    258: {
        special: "Changes [DEX] and [QCK] orbs into [STR] orbs",
        specialName: "Pocket Mallet",
        captain: "Boosts ATK and RCV of [STR] characters by 2x"
    },
    259: {
        special: "Changes [DEX] and [QCK] orbs into [STR] orbs",
        specialName: "Pocket Mallet",
        captain: "Boosts ATK and RCV of [STR] characters by 2x",
        sailor: {
            "base": "None",
            "level1": "Makes [PSY] orbs \"beneficial\" for this unit",
            "level2": "Makes [INT] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for this unit" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 2: Makes [INT] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: [DEX] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 4%",
                    "Level 5: Reduce damage taken from [QCK] characters by 5%"
                ]
            },
            {
                "Name": "[DEX] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by 2%",
                    "Level 3: Reduce damage taken from [DEX] characters by 3%",
                    "Level 4: Reduce damage taken from [DEX] characters by 4%",
                    "Level 5: Reduce damage taken from [DEX] characters by 5%"
                ]
            },
        ]
    },
    260: {
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Seaquake",
        captain: "Boosts ATK of all characters by 3x if HP is below 30% at the start of the turn"
    },
    261: {
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Seaquake",
        captain: "Boosts ATK of all characters by 3x if HP is below 30% at the start of the turn",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Striker and Powerhouse characters by 60",
            "level2": "Completely resists Paralysis on this character",
        },
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Striker and Powerhouse characters by 60" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 2: Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Enrage" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [DEX] characters by 2%",
                    "Level 2: Reduce damage taken from [DEX] characters by 3%",
                    "Level 3: Reduce damage taken from [DEX] characters by 4%",
                    "Level 4: Reduce damage taken from [DEX] characters by 5%",
                    "Level 5: Reduce damage taken from [DEX] characters by 7%"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 25",
                    "Level 2: Boosts base ATK by 50",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    262: {
        captain: "Recovers 2x character's RCV in HP at the end of each turn"
    },
    263: {
        special: "Amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Shave",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    264: {
        captain: "Reduces damage received from [INT] enemies by 30%"
    },
    265: {
        special: "Reduces Bind duration by 3 turns",
        specialName: "Tempered Kukris",
        captain: "Boosts ATK and HP of Slasher characters by 1.5x"
    },
    267: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher",
        captain: "Boosts ATK of all characters by 1.5x"
    },
    268: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "White Out",
        captain: "Reduces damage received by 25%"
    },
    269: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    270: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    271: {
        special: "Changes [STR] orbs into [DEX] orbs",
        specialName: "[STR] Slot Change [DEX]"
    },
    272: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    273: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight"
    },
    274: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    275: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    276: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        specialName: "[QCK] Slot Change [DEX]"
    },
    277: {
        special: "Changes [INT] orbs into [PSY] orbs",
        specialName: "[INT] Slot Change [PSY]"
    },
    278: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash"
    },
    279: {
        special: "Changes [RCV] orbs into [STR] orbs",
        specialName: "[RCV] Slot Change [STR]"
    },
    280: {
        special: "Changes [DEX] orbs into [QCK] orbs",
        specialName: "[DEX] Slot Change [QCK]"
    },
    281: {
        special: "Changes [QCK] orbs into [DEX] orbs",
        specialName: "[QCK] Slot Change [DEX]"
    },
    282: {
        special: "Changes [QCK] orbs into [RCV] orbs",
        specialName: "[QCK] Slot Change [RCV]"
    },
    283: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Spiral"
    },
    284: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    285: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    286: {
        special: "Changes [DEX] orbs into [RCV] orbs",
        specialName: "[DEX] Slot Change [RCV]"
    },
    287: {
        special: "Changes [PSY] orbs into [RCV] orbs",
        specialName: "[PSY] Slot Change [RCV]"
    },
    288: {
        special: "Deals 5x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Shot"
    },
    289: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    290: {
        special: "Deals 25x character's ATK in [INT] damage to one enemy",
        specialName: "Judgment Bomb",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    291: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm",
        captain: "Reduces damage received from [INT] enemies by 50%"
    },
    292: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm",
        captain: "Reduces damage received from [PSY] enemies by 50%"
    },
    293: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield",
        captain: "Boosts HP of [QCK] characters by 2x"
    },
    294: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight",
        captain: "Boosts HP of [STR] characters by 2x"
    },
    295: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher",
        captain: "Boosts HP of [DEX] characters by 2x"
    },
    296: {
        special: "Recovers 2,000 HP, randomizes all orbs",
        specialName: "Cleansing Wash",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    297: {
        special: "Recovers 2,000 HP, randomizes all orbs",
        specialName: "Cleansing Wash",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    298: {
        special: "Deals 25x character's ATK in [PSY] damage to one enemy",
        specialName: "Moonwalk",
        captain: "Boosts HP of [PSY] characters by 2x"
    },
    299: {
        special: "Cuts the current HP of each enemy by 10%",
        specialName: "8-Sword Style Onigumo",
        captain: "Boosts ATK of [DEX] characters by 2x"
    },
    305: {
        special: "Randomizes all orbs into either [PSY] or [RCV] orbs",
        specialName: "Meteor Fist Shower",
        captain: "Boosts ATK and HP of [PSY] characters by 1.5x"
    },
    306: {
        special: "Randomizes all orbs into either [PSY] or [RCV] orbs",
        specialName: "Meteor Fist Shower",
        captain: "Boosts ATK and HP of [PSY] characters by 2x",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] orbs \"beneficial\" for this unit",
            "level2": "Boosts base ATK of [PSY] characters by 65",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for this unit" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of [PSY] characters by 65" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 120"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    307: {
        special: "Randomizes all orbs other than [DEX] into either [DEX], [RCV] or [TND] orbs",
        specialName: "ROOM – Chambres",
        captain: "Boosts ATK of [DEX] characters by 2.5x"
    },
    308: {
        special: "Randomizes all orbs other than [DEX] into either [DEX], [RCV] or [TND] orbs",
        specialName: "ROOM – Chambres",
        captain: "Boosts ATK of [DEX] characters by 2.5x",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] orbs \"beneficial\" for [DEX] characters",
            "level2": "Makes [TND] orbs \"beneficial\" for [DEX] characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for [DEX] characters" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 80" },
            { "description": "Acquire Sailor Ability 2: Makes [TND] orbs \"beneficial\" for [DEX] characters" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
        ]
    },
    309: {
        special: "Cuts the current HP of each enemy by 10%, reduces the defense of all enemies by 50% for 3 turns",
        specialName: "Demon Face",
        captain: "Reduces RCV of all characters by 90%, reduces damage received by 40%"
    },
    310: {
        special: "Cuts the current HP of each enemy by 10%, reduces the defense of all enemies by 50% for 3 turns",
        specialName: "Demon Face",
        captain: {
            "base": "Reduces RCV of all characters by 90%, reduces damage received by 40%",
            "level1": "Boosts ATK of all characters by 1.25x and reduces damage received by 40%",
        },
        sailor: {
            "base": "None",
            "level1": "Makes [PSY] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters by 1.25x and reduces damage received by 40%" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: [PSY] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 4%",
                    "Level 5: Reduce damage taken from [PSY] characters by 5%"
                ]
            },
        ]
    },
    311: {
        special: "Deals 100x character's ATK in fixed damage to one enemy, reduces crew's HP to 1",
        specialName: "Massacre Soldier",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of all characters by 3.5x after scoring 3 hits below Good in a row",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK of Cerebral characters by 50"
    },
    312: {
        special: "Deals 100x character's ATK in fixed damage to one enemy, reduces crew's HP to 1",
        specialName: "Massacre Soldier",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of all characters by 3.5x after scoring 3 hits below Good in a row",
        sailor: {
            "base": "When HP is below 30% at the start of the turn, boosts ATK of Cerebral characters by 50",
            "level1": "When HP is below ??% at the start of the turn, boosts own base ATK by 200",
        },
        limit: [
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 100" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire Sailor Ability 1: When HP is below ??% at the start of the turn, boosts own base ATK by 200" },
            { "description": "Reduce base Special Cooldown by 6 turns" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by ? turn at the start of the fight"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    313: {
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn, deals 25x character's ATK in [PSY] damage to one enemy",
        specialName: "Karmic Punishment",
        captain: "Boosts ATK of Striker characters by 2x and their HP by 1.5x"
    },
    314: {
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn, deals 25x character's ATK in [PSY] damage to one enemy",
        specialName: "Karmic Punishment",
        captain: {
            "base": "Boosts ATK of Striker characters by 2x and their HP by 1.5x",
            "level1": "Boosts ATK of all Striker characters proportionally to the crew's current HP, by 3x at 1 HP and their HP by 1.5x",
        },
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Striker characters by 30",
        },
        limit: [
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all Striker characters proportionally to the crew's current HP, by 3x at 1 HP and their HP by 1.5x" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Striker characters by 30" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    315: {
        special: "Changes [PSY] and [INT] orbs into [STR] orbs, empties slots with [DEX] and [QCK] orbs",
        specialName: "Aye Aye, Captain!",
        captain: "Boosts ATK, HP and RCV of Fighter characters by 1.5x",
        sailor: "Reduces Paralysis for 2 turns for himself"
    },
    316: {
        special: "Changes [PSY] and [INT] orbs into [STR] orbs, empties slots with [DEX] and [QCK] orbs",
        specialName: "Aye Aye, Captain!",
        captain: "Boosts ATK, HP and RCV of Fighter characters by 1.5x",
        sailor: {
            "base": "Reduces Paralysis for 2 turns for himself",
            "level1": "Makes [QCK] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by 2%",
                    "Level 3: Reduce damage taken from [DEX] characters by 3%",
                    "Level 4: Reduce damage taken from [DEX] characters by 4%",
                    "Level 5: Reduce damage taken from [DEX] characters by 5%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turn",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
        ]
    },
    317: {
        special: "Randomizes all orbs into either [DEX] or [STR] orbs, deals random [DEX] damage to all enemies",
        specialName: "Beautiful Secretary's Job",
        specialNotes: "#{random : 1 : 15,000}",
        captain: "Recovers 500 HP at end of each turn, reduces damage received by 10%"
    },
    318: {
        special: "Randomizes all orbs into either [DEX] or [STR] orbs, deals random [DEX] damage to all enemies",
        specialName: "Beautiful Secretary's Job",
        specialNotes: "#{random : 1 : 15,000}",
        captain: "Recovers 1,000 HP at end of each turn, reduces damage received by 15%"
    },
    319: {
        special: "Locks all orbs for 1 turn",
        specialName: "Hook, Line and Sinker",
        captain: "Boosts ATK of Striker characters by 1.5x"
    },
    320: {
        special: "Locks all orbs for 1 turn",
        specialName: "Hook, Line and Sinker",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    321: {
        special: "Deals 25x character's ATK in [QCK] damage to one enemy",
        specialName: "Taciturn Combo",
        captain: "Boosts ATK of [QCK] type characters by 2x"
    },
    322: {
        special: "Deals 25x character's ATK in [QCK] damage to one enemy",
        specialName: "Taciturn Combo",
        captain: "Boosts ATK of [QCK] type characters by 2x"
    },
    323: {
        special: "Amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Mountain Wind",
        captain: "Boosts HP and RCV of [QCK] characters by 1.5x"
    },
    324: {
        special: "Amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Mountain Wind",
        captain: "Boosts HP and RCV of [QCK] characters by 1.5x"
    },
    325: {
        special: "Changes [TND] orbs into [RCV] orbs, changes [RCV] orbs into [QCK] orbs",
        specialName: "Red-Hot Shipwright Soul"
    },
    326: {
        special: "Empties all slots, deals 25x character's ATK in [STR] damage to one enemy",
        specialName: "Munch-Munch Tongue Cannon",
        captain: "Recovers 10x character's RCV in HP at the end of each turn"
    },
    327: {
        special: "Empties all slots, deals 25x character's ATK in [STR] damage to one enemy",
        specialName: "Munch-Munch Tongue Cannon",
        captain: "Recovers 10x character's RCV in HP at the end of each turn"
    },
    328: {
        special: "Deals 20x character's ATK in [QCK] damage to all enemies",
        specialName: "Fiddle Banff",
        captain: "Boosts RCV of all characters by 5x if HP is below 30% at the start of the turn"
    },
    329: {
        special: "Deals 20x character's ATK in [QCK] damage to all enemies",
        specialName: "Fiddle Banff",
        captain: "Boosts RCV of all characters by 5x if HP is below 30% at the start of the turn"
    },
    332: {
        special: "Changes [STR] orbs into [RCV] orbs, changes [RCV] orbs into [DEX] orbs",
        specialName: "Snow-Slicing Blade",
        captain: "Boosts ATK, HP and RCV of Striker characters by 1.2x"
    },
    333: {
        special: "Recovers a random amount of HP",
        specialName: "Doctor Stop",
        specialNotes: "#{randomHeal : 2,000 : 5,000}",
        captain: "Boosts ATK and RCV of [PSY] and [INT] characters by 1.5x"
    },
    334: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    335: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing"
    },
    336: {
        special: "Switches orbs between slots twice",
        specialName: "Franky Centaur",
        captain: "Reduces damage received by 10% if HP is above 50% at the start of the turn, boosts ATK of [PSY] characters by 2x and reduces ATK of every other character by 20% if HP is above 50% at the start of the turn"
    },
    337: {
        special: "Switches orbs between slots twice",
        specialName: "Franky Centaur",
        captain: "Reduces damage received by 10% if HP is above 50% at the start of the turn, boosts ATK of [PSY] characters by 2.5x and reduces ATK of every other character by 20% if HP is above 50% at the start of the turn"
    },
    338: {
        special: "Changes [QCK] orbs into [PSY] orbs",
        specialName: "Wavy Square Hair"
    },
    339: {
        special: "Changes [INT] orbs into [TND] orbs",
        specialName: "Straight Square Hair"
    },
    340: {
        special: "Randomizes all orbs into either [STR] or [QCK] orbs, deals random [STR] damage to all enemies",
        specialName: "Kraken Tentacle Crush",
        specialNotes: "#{random : 1 : 15,000}",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    341: {
        special: "Randomizes all orbs into either [STR] or [QCK] orbs, deals random [STR] damage to all enemies",
        specialName: "Kraken Tentacle Crush",
        specialNotes: "#{random : 1 : 15,000}",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    352: {
        special: "Boosts ATK of Shooter characters by 1.75x for 2 turns",
        specialName: "Smash Buster",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    353: {
        special: "Boosts ATK of Shooter characters by 1.75x for 2 turns",
        specialName: "Smash Buster",
        captain: {
            "base": "Boosts ATK of Shooter characters by 2.5x",
            "level1": "Boosts ATK of Shooter characters by 2.5x and their HP by 1.2x and recovers 300 HP at end of each turn",
        },
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Shooter characters by 20",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Shooter characters by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Shooter characters by 2.5x and their HP by 1.2x and recovers 300 HP at end of each turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    354: {
        special: "Reduces Bind and Despair duration by 3 turns",
        specialName: "Two-Sword Dance"
    },
    355: {
        special: "Reduces Bind and Despair duration by 3 turns",
        specialName: "Two-Sword Dance"
    },
    356: {
        special: "Changes own orb into [STR], deals 9x character's ATK in [STR] damage to all enemies",
        specialName: "Steel Magnetic Arm",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    357: {
        special: "Changes own orb into [STR], deals 9x character's ATK in [STR] damage to all enemies",
        specialName: "Steel Magnetic Arm",
        captain: {
            "base": "Boosts ATK of Striker characters by 2.5x",
            "level1": "Boosts ATK of Striker characters by 2.5x and reduces damage received by 7%",
        },
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Striker characters by 75",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Striker characters by 2.5x and reduces damage received by 7%" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Striker characters by 75" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by 2%",
                    "Level 3: Reduce damage taken from [DEX] characters by 3%",
                    "Level 4: Reduce damage taken from [DEX] characters by 4%",
                    "Level 5: Reduce damage taken from [DEX] characters by 5%"
                ]
            },
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    358: {
        special: "Changes [TND] and [RCV] orbs into [DEX] orbs, deals random [DEX] damage to all enemies",
        specialName: "Scratch Body",
        captain: "Boosts ATK of [DEX] characters by 2.5x if HP is above 99% at the start of the turn",
        specialNotes: "#{random : 5,000 : 20,000}"
    },
    359: {
        special: "Changes [TND] and [RCV] orbs into [DEX] orbs, deals random [DEX] damage to all enemies",
        specialName: "Scratch Body",
        specialNotes: "#{random : 5,000 : 20,000}",
        captain: {
            "base": "Boosts ATK of [DEX] characters by 3x if HP is above 99% at the start of the turn",
            "level1": "Boosts ATK of [DEX] characters by 3x if HP is above 99% at the start of the turn, 2x otherwise",
        },
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of [DEX] characters by 30",
            "level2": "Boosts base ATK of Shooter characters by 50",
        },
        limit: [
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of [DEX] characters by 30" },
            { "description": "Boosts base HP by 150" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of Shooter characters by 50" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of [DEX] characters by 3x if HP is above 99% at the start of the turn, 2x otherwise" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    360: {
        special: "Deals 10x character's ATK in [INT] damage to all enemies, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Prehistoric Power",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK of [INT] characters by 3x if HP is below 30% at the start of the turn",
        sailor: "Boosts base HP of Powerhouse characters by 100"
    },
    361: {
        special: "Deals 10x character's ATK in [INT] damage to all enemies, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Prehistoric Power",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK of [INT] characters by 3x if HP is below 30% at the start of the turn",
        sailor: "Boosts base HP of Powerhouse characters by 100"
    },
    362: {
        special: "For 2 turns, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Big Eater",
        captain: "Boosts ATK and RCV of [PSY] characters by 2x"
    },
    363: {
        special: "For 2 turns, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Big Eater",
        captain: "Boosts ATK and RCV of [PSY] characters by 2x"
    },
    364: {
        special: "Changes [STR] and [DEX] orbs into [QCK] orbs",
        specialName: "Gang Fortress",
        captain: "Boosts ATK and RCV of [QCK] characters by 2x",
        sailor: "Boosts base RCV of all characters by 10"
    },
    365: {
        special: "Changes [STR] and [DEX] orbs into [QCK] orbs",
        specialName: "Gang Fortress",
        captain: "Boosts ATK and RCV of [QCK] characters by 2x",
        sailor: "Boosts base RCV of all characters by 10"
    },
    366: {
        special: "Deals 20x character's ATK in [INT] damage to all enemies, reduces Bind duration by 5 turns",
        specialName: "Dark King's Aura",
        captain: "Boosts chain multiplier by 4x"
    },
    367: {
        special: "Deals 20x character's ATK in [INT] damage to all enemies, reduces Bind duration by 5 turns",
        specialName: "Dark King's Aura",
        captain: "Boosts chain multiplier by 4x"
    },
    368: {
        special: "Reduces damage received from [DEX] enemies by 50% for 1 turn",
        specialName: "Crystal Shield DEX"
    },
    369: {
        special: "Reduces damage received from [STR] enemies by 50% for 1 turn",
        specialName: "Crystal Shield STR"
    },
    370: {
        special: "Reduces damage received from [QCK] enemies by 50% for 1 turn",
        specialName: "Crystal Shield QCK"
    },
    371: {
        special: "Reduces damage received from [INT] enemies by 50% for 1 turn",
        specialName: "Crystal Shield INT"
    },
    372: {
        special: "Reduces damage received from [PSY] enemies by 50% for 1 turn",
        specialName: "Crystal Shield PSY"
    },
    373: {
        special: "Reduces damage received from [DEX] enemies by 50% for 1 turn",
        specialName: "Crystal Shield DEX",
        captain: "Boosts ATK of Slasher characters by 1.5x"
    },
    374: {
        special: "Reduces damage received from [STR] enemies by 50% for 1 turn",
        specialName: "Crystal Shield STR",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    375: {
        special: "Reduces damage received from [QCK] enemies by 50% for 1 turn",
        specialName: "Crystal Shield QCK",
        captain: "Boosts HP of Striker characters by 1.5x"
    },
    376: {
        special: "Reduces damage received from [INT] enemies by 50% for 1 turn",
        specialName: "Crystal Shield INT",
        captain: "Boosts ATK of Fighter characters by 1.5x"
    },
    377: {
        special: "Reduces damage received from [PSY] enemies by 50% for 1 turn",
        specialName: "Crystal Shield PSY",
        captain: "Boosts ATK of Striker characters by 1.5x"
    },
    378: {
        special: "Recovers 3x character's RCV in HP",
        specialName: "Quick Healing",
        captain: "Boosts RCV of all characters by 1.5x"
    },
    379: {
        special: "Removes Poison",
        specialName: "Dugong Kung Fu Fist of Healing"
    },
    380: {
        special: "Removes Poison",
        specialName: "Dugong Kung Fu Fist of Healing",
        captain: "Boosts ATK and RCV of [STR] characters by 1.5x"
    },
    381: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield"
    },
    382: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher"
    },
    383: {
        special: "Strongly Poisons one enemy",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn",
        specialName: "Poison Needle",
        captain: "Reduces damage received by 10%, boosts ATK of [INT] characters by 2x"
    },
    384: {
        special: "Strongly Poisons one enemy",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn",
        specialName: "Poison Needle",
        captain: "Reduces damage received by 20%, boosts ATK of [INT] characters by 2x"
    },
    385: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Fighter characters by 1.25x for 1 turn",
        specialName: "Zombie Marionette Operation",
        captain: "Boosts ATK of [INT] characters by 2x"
    },
    386: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Fighter characters by 1.25x for 1 turn",
        specialName: "Zombie Marionette Operation",
        captain: "Boosts ATK of [INT] characters by 2x"
    },
    387: {
        special: "Randomizes all orbs into either [PSY] or [INT] orbs, deals random [PSY] damage to all enemies",
        specialName: "Square Plate Sword",
        specialNotes: "#{random : 1 : 10,000}",
        captain: "Boosts RCV of [PSY] characters by 1.5x"
    },
    388: {
        special: "Randomizes all orbs into either [PSY] or [INT] orbs, deals random [PSY] damage to all enemies",
        specialName: "Square Plate Sword",
        specialNotes: "#{random : 1 : 10,000}",
        captain: "Boosts RCV of [PSY] characters by 1.5x"
    },
    389: {
        special: "Randomizes all orbs into either [RCV], [STR], [DEX] or [QCK] orbs and changes own orb into [QCK]",
        specialName: "Hell Wink",
        captain: "Boosts ATK of all characters by 2.25x following a chain of [DEX] > [INT] > [QCK] attacks no lower than Good"
    },
    390: {
        special: "Randomizes all orbs into either [RCV], [STR], [DEX] or [QCK] orbs and changes own orb into [QCK]",
        specialName: "Hell Wink",
        captain: "Boosts ATK of all characters by 2.75x following a chain of [DEX] > [INT] > [QCK] attacks no lower than Good",
        sailor: {
            "base": "None",
            "level1": "Makes [STR], [DEX] and [RCV] orbs \"beneficial\" for this unit",
            "level2": "When any other character uses a special, reduces own cooldown by 1 turn",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [STR], [DEX] and [RCV] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: When any other character uses a special, reduces own cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by ? turn at the start of the fight"
                ]
            },
        ]
    },
    391: {
        special: "Reduces damage received by 90% for 1 turn, reduces the defense of all enemies by 80% for 1 turn, Poisons enemies for 1,000 damage for a single turn",
        specialName: "Negative Hollow",
        specialNotes: "Poison damage deals 1,000 damage exactly and will ignore enemy armor at the end of your turn",
        captain: "Boosts RCV of [DEX] characters by 1.5x"
    },
    392: {
        special: "Reduces damage received by 90% for 1 turn, reduces the defense of all enemies by 80% for 1 turn, Poisons enemies for 1,000 damage for a single turn",
        specialName: "Negative Hollow",
        specialNotes: "Poison damage deals 1,000 damage exactly and will ignore enemy armor at the end of your turn",
        captain: "Boosts RCV of [DEX] characters by 2x"
    },
    393: {
        special: "Deals 35x character's ATK in [STR] damage to one enemy",
        specialName: "Kumacy Knuckle"
    },
    394: {
        special: "Deals 500 fixed damage to all enemies",
        specialName: "The Tempest Called Love",
        specialNotes: "#{fixed}"
    },
    395: {
        special: "Empties adjacent slots, amplifies the effect of orbs by 1.25x for 1 turn",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Mole Banana",
        captain: "Boosts ATK and RCV of [QCK] characters by 1.2x"
    },
    396: {
        special: "Empties adjacent slots, amplifies the effect of orbs by 1.25x for 1 turn",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Mole Banana",
        captain: "Boosts ATK and RCV of [QCK] characters by 1.2x"
    },
    397: {
        special: "Changes [EMPTY] orbs into [STR] orbs with a 50% probability, deals 15x character's ATK in damage to all enemies",
        specialName: "Four Hundred Base Hits",
        captain: "Boosts ATK of all characters by 3x after scoring 5 PERFECTs in a row"
    },
    398: {
        special: "Changes [EMPTY] orbs into [STR] orbs with a 50% probability, deals 15x character's ATK in damage to all enemies",
        specialName: "Four Hundred Base Hits",
        captain: "Boosts ATK of all characters by 4x after scoring 5 PERFECTs in a row"
    },
    399: {
        special: "Boosts ATK of [DEX] characters by 1.5x for 1 turn",
        specialName: "Spike-U-Puncture",
        captain: "Boosts HP of Striker characters by 1.5x"
    },
    400: {
        special: "Boosts ATK of [DEX] characters by 1.5x for 1 turn",
        specialName: "Spike-U-Puncture",
        captain: "Boosts HP of Striker characters by 2x"
    },
    401: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Slasher characters by 1.25x for 1 turn",
        specialName: "Iron Guard",
        captain: "Reduces damage received by 10%, boosts ATK of Slasher characters by 1.5x"
    },
    402: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Slasher characters by 1.25x for 1 turn",
        specialName: "Iron Guard",
        captain: "Reduces damage received by 10%, boosts ATK of Slasher characters by 2x"
    },
    403: {
        special: "Deals several times the character's ATK in [QCK] damage to all enemies",
        specialNotes: "#{specialProportional : lower : 150 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Backwater Sword Dance",
        captain: "Reduces damage received by 50% and boosts RCV of all characters by 3x when HP is low"
    },
    404: {
        special: "Reduces damage received by 50% for 2 turns, boosts RCV of all characters by 2x for 2 turns",
        specialName: "Clear-Clear Fruit",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    405: {
        special: "Reduces damage received by 50% for 2 turns, boosts RCV of all characters by 2x for 2 turns",
        specialName: "Clear-Clear Fruit",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    406: {
        special: "Reduces crew's HP to 1, deals 1,000 fixed damage to all enemies, boosts ATK of all characters by 1.2x for 1 turn",
        specialName: "Skills of the Ancient Warriors",
        specialNotes: "#{fixed}"
    },
    407: {
        special: "Randomizes all orbs, deals 7x character's ATK in [DEX] damage to all enemies",
        specialName: "Zombie-Style 36-Pound Phoenix"
    },
    408: {
        special: "Randomizes all orbs and changes own orb into [INT], deals 15x character's ATK in [INT] damage to all enemies",
        specialName: "Ground Death",
        captain: "Reduces damage received by 20%, boosts ATK of Slasher characters by 2x"
    },
    409: {
        special: "Changes own orb into [QCK], deals 13x character's ATK in [QCK] damage to one enemy",
        specialName: "Ocean Current Shoulder Throw",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    410: {
        special: "Changes own orb into [QCK], deals 13x character's ATK in [QCK] damage to one enemy",
        specialName: "Ocean Current Shoulder Throw",
        captain: {
            "base": "Boosts ATK of Fighter characters by 2.5x",
            "level1": "Boosts ATK of Fighter characters by 2.75x",
        },
        sailor: {
            "base": "None",
            "level1": "Makes [QCK] orbs \"beneficial\" for Fighter characters",
            "level2": "Boosts base ATK and HP of Fighter characters by 100",
        },
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for Fighter characters" },
            { "description": "Boosts base ATK by 80" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK and HP of Fighter characters by 100" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Fighter characters by 2.75x" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by ? turns on this character"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    411: {
        special: "Changes adjacent orbs into [STR] orbs, deals 1,000 fixed damage to all enemies",
        specialName: "Ursa Shock",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of [STR] characters by 2x"
    },
    412: {
        special: "Changes adjacent orbs into [STR] orbs, deals 1,000 fixed damage to all enemies",
        specialName: "Ursa Shock",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of [STR] characters by 2x"
    },
    413: {
        special: "Changes [STR] and [DEX] orbs into [INT] orbs",
        specialName: "Doppelman",
        captain: "Boosts ATK of [INT] characters by 2.5x if HP is above 99% at the start of the turn"
    },
    414: {
        special: "Changes [STR] and [DEX] orbs into [INT] orbs",
        specialName: "Doppelman",
        captain: "Boosts ATK of [INT] characters by 3x if HP is above 99% at the start of the turn",
        sailor: {
            "base": "None",
            "level1": "Makes [PSY] orbs \"beneficial\" for this unit",
            "level2": "Makes [QCK] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 80" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 210" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire Sailor Ability 2: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Acquire Potential 2: [INT] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by ?%",
                    "Level 3: Reduce damage taken from [PSY] characters by ?%",
                    "Level 4: Reduce damage taken from [PSY] characters by ?%",
                    "Level 5: Reduce damage taken from [PSY] characters by ?%"
                ]
            },
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by ?%",
                    "Level 3: Reduce damage taken from [INT] characters by ?%",
                    "Level 4: Reduce damage taken from [INT] characters by ?%",
                    "Level 5: Reduce damage taken from [INT] characters by ?%"
                ]
            },
        ]
    },
    415: {
        special: "Recovers 15x character's RCV in HP, delays all enemies for 1 turn",
        specialName: "Love-Love Mellow",
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2.75x and their RCV by 1.5x if HP is above 70% at the start of the turn"
    },
    416: {
        special: "Recovers 15x character's RCV in HP, delays all enemies for 1 turn",
        specialName: "Love-Love Mellow",
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2.75x and their RCV by 1.5x if HP is above 70% at the start of the turn",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of [QCK] and [PSY] characters by 30",
            "level2": "Boosts base ATK of [QCK] and [PSY] characters by 75",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of [QCK] and [PSY] characters by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of [QCK] and [PSY] characters by 75" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 3: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 5%",
                    "Level 5: Reduce damage taken from [INT] characters by 7%"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by ? turn at the start of the fight"
                ]
            },
        ]
    },
    417: {
        special: "Switches orbs between slots twice, amplifies the effect of orbs by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        specialName: "Overheat",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    418: {
        special: "Switches orbs between slots twice, amplifies the effect of orbs by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        specialName: "Overheat",
        captain: "Boosts ATK and HP of Slasher characters by 2x",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Slasher characters by 30",
            "level2": "Boosts base HP of Slasher characters by 60",
        },
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Slasher characters by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 2: Boosts base HP of Slasher characters by 60" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 80% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ]
    },
    419: {
        special: "Reduces the defense of all enemies by 50% for 2 turns, randomizes all orbs",
        specialName: "Parage Shot: The Storm",
        captain: "Boosts ATK of [QCK] characters by 2x"
    },
    420: {
        special: "Reduces Despair duration by 3 turns, deals 15x character's ATK in [STR] damage to one enemy",
        specialName: "Gum-Gum Bazooka: Supremacy",
        captain: "Boosts ATK, HP and RCV of [STR] characters by 1.5x"
    },
    421: {
        special: "Reduces Bind duration by 2 turns, deals 10x character's ATK in [DEX] damage to all enemies",
        specialName: "Three Thousand Worlds: The Final Stroke",
        captain: "Boosts ATK, HP and RCV of [DEX] characters by 1.5x"
    },
    422: {
        special: "Reduces damage received from [INT] enemies by 100% for 1 turn, recovers a random amount of HP",
        specialName: "Mirage Tempo: The Heavens",
        specialNotes: "#{randomHeal : 1,000 : 3,000}",
        captain: "Boosts ATK, HP and RCV of [INT] characters by 1.5x"
    },
    423: {
        special: "Recovers 4,343 HP, reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Lullaby Parry",
        captain: "Protects from defeat as long as HP is above 70%",
        captainNotes: "#{zombie}"
    },
    424: {
        special: "Recovers 4,343 HP, reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Lullaby Parry",
        captain: "Boosts ATK of the whole crew by 1.5x and protects from defeat as long as HP is above 70%",
        captainNotes: "#{zombie}"
    },
    425: {
        special: "Deals random [PSY] damage to all enemies",
        specialName: "Shusui: Three Verse Arrow Notch Slash",
        specialNotes: "#{random : 1 : 100,000}",
        captain: "Boosts ATK and HP of Slasher characters by 1.5x"
    },
    426: {
        special: "Boosts ATK of [STR] characters by 1.05x for 5 turns",
        specialName: "Barco Grabber Breath",
        captain: "Boosts HP of [STR] characters by 2x"
    },
    427: {
        special: "Reduces Bind and Despair duration by 2 turns",
        specialName: "Havoc Sonar",
        captain: "Boosts HP of [DEX] characters by 2x"
    },
    428: {
        special: "Reduces damage received by 50% for 2 turns",
        specialName: "Last Boss – Deep Dive of Dreams",
        captain: "Boosts ATK of [PSY] characters by 2x"
    },
    429: {
        special: "Deals 7x character's ATK in [DEX] damage to all enemies, reduces the defense of all enemies by 50% for 1 turn",
        specialName: "South Bird's Fearless Smile"
    },
    430: {
        special: "Amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Spring Hopper",
        captain: "Boosts ATK of [DEX] characters by 1.5x"
    },
    431: {
        special: "Amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Spring Hopper",
        captain: "Boosts ATK and HP of [DEX] characters by 1.5x"
    },
    432: {
        special: "Deals 20x character's ATK in [QCK] damage to one enemy",
        specialName: "Big Chop"
    },
    433: {
        special: "Reduces Bind and Despair duration by 1 turn",
        specialName: "New Kama Seduction",
        captain: "Boosts ATK of all characters by 2x following a chain of [QCK] > [STR] > [DEX] attacks no lower than Good"
    },
    434: {
        special: "Amplifies the effect of orbs by 1.25x for 3 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "New Kama Karate Maiden's Awakening",
        captain: "Boosts ATK of all characters by 2x following a chain of [PSY] > [INT] > [INT] attacks no lower than Good"
    },
    435: {
        special: "Randomizes [RCV], [STR] and [DEX] orbs into either [STR] or [QCK] orbs",
        specialName: "Maiden's Bloom",
        captain: "Boosts ATK of all characters by 2x following a chain of [INT] > [PSY] > [QCK] attacks no lower than Good"
    },
    436: {
        special: "Randomizes [RCV], [STR] and [DEX] orbs into either [STR] or [QCK] orbs",
        specialName: "Maiden's Bloom",
        captain: "Boosts ATK of all characters by 2.25x following a chain of [INT] > [PSY] > [QCK] attacks no lower than Good"
    },
    437: {
        special: "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 turn, Poisons enemies for 1,000 for a single turn",
        specialName: "Negative Horo \"Sweet\"",
        specialNotes: "Poison damage deals 1,000 damage exactly and will ignore enemy armor at the end of your turn",
        captain: "Boosts RCV of [DEX] characters by 3x if HP is below 30% at the start of the turn"
    },
    438: {
        special: "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 turn, Poisons enemies for 1,000 for a single turn",
        specialName: "Negative Horo \"Sweet\"",
        specialNotes: "Poison damage deals 1,000 damage exactly and will ignore enemy armor at the end of your turn",
        captain: "Boosts RCV of [DEX] characters by 5x if HP is below 30% at the start of the turn"
    },
    439: {
        special: "Changes adjacent orbs into [RCV] and randomizes every other orb",
        specialName: "Charge! Supersonic Duck Squadron! \"Love\"",
        captain: "Recovers 5x character's RCV in HP at the end of each turn"
    },
    440: {
        special: "Changes adjacent orbs into [RCV] and randomizes every other orb",
        specialName: "Charge! Supersonic Duck Squadron! \"Love\"",
        captain: "Recovers 7x character's RCV in HP at the end of each turn"
    },
    444: {
        captain: "Boosts ATK of Evolver and Booster characters by 2x if HP is above 50% at the start of the turn"
    },
    445: {
        special: "Randomizes all orbs into either [STR], [DEX], [QCK], [PSY] or [INT] orbs, switches orbs between slots 3 times",
        specialName: "Support Incoming! Supersonic Duck Squadron!",
        captain: "Boosts ATK of Evolver and Booster characters by 2.5x if HP is above 50% at the start of the turn"
    },
    446: {
        special: "Deals 10 times the damage received in the previous turn in typeless damage to all enemies",
        specialName: "Black Hole",
        captain: "Increases damage received by 2x, boosts ATK of [STR] characters by 2x and their HP by 1.5x"
    },
    447: {
        special: "Deals 10 times the damage received in the previous turn in typeless damage to all enemies",
        specialName: "Black Hole",
        captain: "Increases damage received by 2x, boosts ATK of [STR] characters by 2.5x and their HP by 2.25x",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of [STR] characters by 120",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of [STR] characters by 120" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    448: {
        special: "Boosts chances of getting [QCK] orbs for 3 turns",
        specialName: "Pirate King's Sword",
        captain: "Boosts ATK of [QCK] characters by 3x if HP is above 99% at the start of the turn"
    },
    449: {
        special: "Boosts chances of getting [QCK] orbs for 3 turns",
        specialName: "Pirate King's Sword",
        captain: "Boosts ATK of [QCK] characters by 3x if HP is above 99% at the start of the turn",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of all characters by 20",
            "level2": "Makes [DEX] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of all characters by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs \"beneficial\" for this unit" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by ? turns on this character"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by ? turn at the start of the fight"
                ]
            },
        ]
    },
    450: {
        special: "Boosts ATK of Fighter characters by 1.5x for 1 turn, deals 25x character's ATK in [DEX] damage to one enemy",
        specialName: "Number Eight's One Hit",
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.5x",
        sailor: "Boosts base ATK of Fighter characters by 20"
    },
    451: {
        special: "Boosts ATK of Fighter characters by 1.5x for 1 turn, deals 25x character's ATK in [DEX] damage to one enemy",
        specialName: "Number Eight's One Hit",
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.5x",
        sailor: {
            "base": "Boosts base ATK of Fighter characters by 20",
            "level1": "When any other character uses a special, reduces own cooldown by 2 turns",
        },
        limit: [
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 55" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base ATK by 80" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire Sailor Ability 1: When any other character uses a special, reduces own cooldown by 2 turns" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by ? turn at the start of the fight"
                ]
            },
        ]
    },
    452: {
        special: "Changes own orb and the captain's orb into [PSY]",
        specialName: "Dread Morning Star",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Striker characters by 2x"
    },
    453: {
        special: "Changes own orb and the captain's orb into [PSY]",
        specialName: "Dread Morning Star",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Striker characters by 2x",
        sailor: {
            "base": "None",
            "level1": "Makes [PSY] orbs \"beneficial\" for Striker characters",
            "level2": "Restores his own special by 5 turn when it is rewinded",
        },
        sailorNotes: "#{beneficial} <br> #{rewind : 5}",
        limit: [
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for Striker characters" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 90" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire Sailor Ability 2: Restores his own special by 5 turn when it is rewinded" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by ?%",
                    "Level 3: Reduce damage taken from [INT] characters by ?%",
                    "Level 4: Reduce damage taken from [INT] characters by ?%",
                    "Level 5: Reduce damage taken from [INT] characters by ?%"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by ? turns at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by ? turns at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by ? turns at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by ? turns at the start of the fight"
                ]
            },
        ]
    },
    454: {
        special: "Boosts ATK of [STR] characters by 1.5x for 1 turn, deals 15x character's ATK in [STR] damage to all enemies",
        specialName: "Manly Flaming Sword",
        captain: "Boosts ATK of [STR] characters by 2x, boosts damage of [STR] specials by 2x",
        captainNotes: "#{noFixedPerc}"
    },
    455: {
        special: "Boosts ATK of [STR] characters by 1.5x for 1 turn, deals 15x character's ATK in [STR] damage to all enemies",
        specialName: "Manly Flaming Sword",
        captain: {
            "base": "Boosts ATK of [STR] characters by 2x, boosts damage of [STR] specials by 2x",
            "level1": "Boosts ATK of [STR] characters by 2.25x and their HP by 1.2x and boosts damage of [STR] specials by 2x",
        },
        captainNotes: "#{noFixedPerc}",
        sailor: {
            "base": "None",
            "level1": "When any other [STR] character uses a special, reduces own cooldown by 1 turn",
            "level2": "Boosts base ATK of [STR] characters by 50",
        },
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 1: When any other [STR] character uses a special, reduces own cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of [STR] characters by 2.25x and their HP by 1.2x and boosts damage of [STR] specials by 2x" },
            { "description": "Boosts base HP by 140" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of [STR] characters by 50" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    456: {
        special: "Randomizes the orbs in the middle row into either [STR] or [DEX] orbs, the orbs in the lower row into either [PSY] or [INT] orbs, switches orbs between slots once",
        specialName: "Double Cannon",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    457: {
        special: "Randomizes the orbs in the middle row into either [STR] or [DEX] orbs, the orbs in the lower row into either [PSY] or [INT] orbs, switches orbs between slots once",
        specialName: "Double Cannon",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    458: {
        special: "Deals random [PSY] damage to all enemies, boosts ATK of all characters by 1.5x for 1 turn",
        specialName: "Zen Shockwave",
        specialNotes: "#{random : 30,000 : 150,000}",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of characters with cost 20 or less by 3x"
    },
    459: {
        special: "Deals random [PSY] damage to all enemies, boosts ATK of all characters by 1.5x for 1 turn",
        specialName: "Zen Shockwave",
        specialNotes: "#{random : 30,000 : 150,000}",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of characters with cost 20 or less or 54 cost exactly by 3x",
        captainNotes: "His captain ability also affects his evolved forms, his base form will NOT receive the boost. All evolved and plus evolved Sengoku characters in the team are included in the bonus."
    },
    460: {
        special: "Recovers 33 HP after the end of each turn for 999 turns, delays all enemies for 1 turn",
        specialName: "Extra Large Candle Service Set",
        captain: "Reduces damage received by 10%"
    },
    461: {
        special: "Randomizes all orbs and changes own orb into [DEX], boosts ATK of Fighter characters by 1.25x for 2 turns",
        specialName: "Escape Dance: White Swan Arabesque",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    462: {
        special: "Randomizes all orbs and changes own orb into [DEX], boosts ATK of Fighter characters by 1.25x for 2 turns",
        specialName: "Escape Dance: White Swan Arabesque",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    463: {
        special: "Empties all slots, deals 25x character's ATK in [PSY] damage to one enemy",
        specialName: "Surprise Ball Dragon",
        captain: "Boosts HP of [PSY] characters by 2x"
    },
    464: {
        special: "Deals 20x character's ATK in [INT] damage to all enemies",
        specialName: "Roc Rider Fuza's Flame",
        captain: "Boosts ATK and HP of Striker characters by 1.5x"
    },
    465: {
        special: "Deals 20x character's ATK in [QCK] damage to one enemy, amplifies the effect of orbs by 1.25x for 2 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Jet Punch",
        captain: "Boosts ATK of all characters by 3x after scoring 4 hits below Good in a row"
    },
    466: {
        special: "Delays all enemies for 1 turn",
        specialName: "Double Flash Gun",
        captain: "Boosts ATK and HP of Shooter characters by 1.5x"
    },
    467: {
        special: "Changes [RCV] orbs into [STR] orbs",
        specialName: "Mountain Belly",
        captain: "Boosts ATK and RCV of [STR] characters by 1.5x"
    },
    468: {
        special: "Boosts RCV of all characters by 1.5x for 1 turn",
        specialName: "Healing Power"
    },
    469: {
        special: "Switches orbs between slots once",
        specialName: "Quick Change"
    },
    470: {
        special: "Boosts RCV of all characters by 1.5x for 1 turn",
        specialName: "Healing Power",
        captain: "Boosts RCV of [PSY] characters by 1.5x"
    },
    471: {
        special: "Switches orbs between slots once",
        specialName: "Quick Change"
    },
    472: {
        special: "Deals 20x character's ATK in [STR] damage to one enemy",
        specialName: "Milky Power Axe"
    },
    473: {
        special: "Deals 10x character's ATK in [QCK] damage to one enemy",
        specialName: "Milky Quick Axe"
    },
    474: {
        special: "Deals 5x character's ATK in [DEX] damage to all enemies, reduces Bind duration by 1 turn",
        specialName: "Milky Technique Axe"
    },
    475: {
        special: "Deals 5x character's ATK in [STR] damage to all enemies, recovers 500 HP",
        specialName: "Milky Mind Axe"
    },
    476: {
        special: "Deals 1,000 fixed damage to one enemy",
        specialName: "Milky Intelligence Axe",
        specialNotes: "#{fixed}"
    },
    477: {
        special: "Changes [DEX] orbs into [STR] orbs",
        specialName: "[DEX] Slot Change [STR]"
    },
    478: {
        special: "Changes [PSY] orbs into [QCK] orbs",
        specialName: "[PSY] Slot Change [QCK]"
    },
    479: {
        special: "Changes [INT] orbs into [DEX] orbs",
        specialName: "[INT] Slot Change [DEX]"
    },
    480: {
        special: "Changes [TND] orbs into [PSY] orbs",
        specialName: "[TND] Slot Change [PSY]"
    },
    481: {
        special: "Changes [DEX] orbs into [INT] orbs",
        specialName: "[DEX] Slot Change [INT]"
    },
    482: {
        special: "Changes [DEX] orbs into [STR] orbs",
        specialName: "[DEX] Slot Change [STR]",
        captain: "Boosts HP of Striker characters by 1.5x"
    },
    483: {
        special: "Changes [PSY] orbs into [QCK] orbs",
        specialName: "[PSY] Slot Change [QCK]",
        captain: "Boosts ATK and RCV of [QCK] characters by 1.2x"
    },
    484: {
        special: "Changes [INT] orbs into [DEX] orbs",
        specialName: "[INT] Slot Change [DEX]",
        captain: "Reduces damage received by 10%"
    },
    485: {
        special: "Changes [TND] orbs into [PSY] orbs",
        specialName: "[TND] Slot Change [PSY]",
        captain: "Boosts HP and RCV of [PSY] characters by 1.2x"
    },
    486: {
        special: "Changes [DEX] orbs into [INT] orbs",
        specialName: "[DEX] Slot Change [INT]",
        captain: "Boosts ATK of Striker characters by 1.5x"
    },
    487: {
        special: "Boosts ATK of [STR] characters by 1.2x for 1 turn",
        specialName: "Attack Boost STR"
    },
    488: {
        special: "Boosts ATK of [QCK] characters by 1.2x for 1 turn",
        specialName: "Attack Boost QCK"
    },
    489: {
        special: "Boosts ATK of [DEX] characters by 1.2x for 1 turn",
        specialName: "Attack Boost DEX"
    },
    490: {
        special: "Boosts ATK of [STR] characters by 1.2x for 1 turn",
        specialName: "Attack Boost STR",
        captain: "Boosts ATK and HP of Striker characters by 1.2x"
    },
    491: {
        special: "Boosts ATK of [QCK] characters by 1.2x for 1 turn",
        specialName: "Attack Boost QCK",
        captain: "Boosts RCV of Striker characters by 1.5x"
    },
    492: {
        special: "Boosts ATK of [DEX] characters by 1.2x for 1 turn",
        specialName: "Attack Boost DEX",
        captain: "Boosts ATK of [DEX] characters by 1.2x"
    },
    493: {
        special: "Recovers 7x character's RCV in HP",
        specialName: "Moderate Healing"
    },
    494: {
        special: "Deals 3x character's ATK in [INT] damage to all enemies, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Attack"
    },
    495: {
        special: "Recovers 7x character's RCV in HP",
        specialName: "Moderate Healing",
        captain: "Recovers 500 HP at the end of each turn"
    },
    496: {
        special: "Deals 3x character's ATK in [INT] damage to all enemies, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Attack",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    497: {
        special: "Reduces Bind duration by 4 turns, deals 3x character's ATK in [QCK] damage to one enemy",
        specialName: "Cheeky Punk Kid Kick",
        captain: "Boosts ATK of [QCK] characters by 1.5x"
    },
    498: {
        special: "Reduces Bind duration by 4 turns, deals 3x character's ATK in [QCK] damage to one enemy",
        specialName: "Cheeky Punk Kid Kick",
        captain: "Boosts ATK of [QCK] characters by 1.5x"
    },
    499: {
        special: "Delays all enemies by 1 turn",
        specialName: "Women Are Courageous!",
        captain: "Boosts RCV of Shooter characters by 1.5x"
    },
    500: {
        special: "Delays all enemies by 1 turn",
        specialName: "Women Are Courageous!",
        captain: "Boosts RCV of Shooter characters by 2x"
    },

};

module.exports.db1 = db1;
