var db1 = {
    1: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
        specialName: "Spinning Gum Punch"
    },
    2: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Pistol",
        captain: "Boosts ATK of all characters by 1.5x"
    },
    3: {
        special: "Deals 15x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Bazooka",
        captain: "Boosts ATK of all characters by 1.5x"
    },
    4: {
        captain: "Boosts ATK of STR characters by 2x, and ATK of all others by 1.5x",
        special: "Deals 25x character's ATK in STR damage to one enemy",
        sailor: {
            "base": "None",
            "level1": "Boosts own base ATK by 100 if this character is the last in the chain to attack",
            "level2": "Makes [QCK] orbs \"beneficial\" for this unit"
        },
        specialName: "Gum-Gum Twin Jet Pistol",
        limit: [
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Sailor Ability 1: Boosts own base ATK by 100 if this character is the last in the chain to attack" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Sailor Ability 2: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
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
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    5: {
        special: "Deals 7x character's ATK in DEX damage to one enemy",
        specialName: "Oni Giri",
        captain: "Boosts ATK of DEX characters by 1.5x"
    },
    6: {
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        specialName: "Three Thousand Worlds",
        captain: "Boosts ATK of DEX characters by 1.5x"
    },
    7: {
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        specialName: "108 Pound Phoenix",
        captain: "Boosts ATK of DEX characters by 1.5x"
    },
    8: {
        special: "Deals 15x character's ATK in DEX damage to all enemies",
        specialName: "Ashura Ichibugin",
        captain: "Boosts ATK and HP of DEX characters by 2x",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Sailor Ability 1: Restores his own special by 1 turn when it is rewinded" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK of [DEX] characters by 40" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Critical Hit" },
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
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ]
    },
    9: {
        special: "Recovers 1,000 HP",
        specialName: "Cat Burglar",
        captain: "Reduces damage received from INT enemies by 20%"
    },
    10: {
        special: "Deals 15x character's ATK in INT damage to one enemy",
        specialName: "Tornado Tempo",
        captain: "Boosts ATK of INT characters by 1.5x"
    },
    11: {
        special: "Reduces damage received from INT enemies by 100% for 1 turn",
        specialName: "Mirage Tempo",
        captain: "Boosts ATK of INT characters by 1.5x"
    },
    12: {
        special: "Deals 15x character's ATK in INT damage to all enemies",
        specialName: "Thunderbolt Tempo",
        captain: "Boosts ATK and HP of INT characters by 1.5x",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for [INT] characters" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK, HP and RCV of [INT] characters by 50" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
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
        captain: "Boosts ATK of PSY characters by 1.5x"
    },
    15: {
        special: "Delays all enemies for 3 turns",
        specialName: "Usopp Golden Pound",
        captain: "Boosts ATK of PSY characters by 1.5x"
    },
    16: {
        special: "Delays all enemies for 3 turns, deals 15x character's ATK in PSY damage to all enemies",
        specialName: "Fire Bird Star",
        captain: "Boosts ATK and HP of PSY characters by 1.5x",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Shooter characters by 20" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: If there are 6 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 2: If there are ? Shooter characters in your crew, reduces No Healing duration by ? turn",
                    "Level 3: If there are ? Shooter characters in your crew, reduces No Healing duration by ? turn",
                    "Level 4: If there are ? Shooter characters in your crew, reduces No Healing duration by ? turns",
                    "Level 5: If there are ? Shooter characters in your crew, reduces No Healing duration by ? turns"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above ??%",
                    "Level 3: This character's attack will ignore barriers if HP is above ??%",
                    "Level 4: This character's attack will ignore barriers if HP is above ??%",
                    "Level 5: This character's attack will ignore barriers if HP is above ??%"
                ]
            },
        ]
    },
    17: {
        special: "Recovers 10x character's RCV in HP",
        specialName: "Special Fried Rice",
        captain: "Boosts ATK of QCK characters by 1.5x"
    },
    18: {
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Plastic Surgery Shot",
        captain: "Boosts HP of QCK characters by 1.5x"
    },
    19: {
        special: "Recovers 10x character's RCV in HP",
        specialName: "Hot Rock Stew",
        captain: "Boosts ATK of QCK characters by 1.5x"
    },
    20: {
        special: "Deals 5,000 fixed damage to all enemies",
        specialName: "Diable Jambe",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of QCK characters by 1.5x",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Aquire Sailor Ability 1: Makes RCV orbs \"beneficial\" for all characters" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK, HP and RCV of all characters by 40" },
            { "description": "Aquire Potential 2: Pinch Healing" },
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
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    21: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "Hearty Yell",
        captain: "Boosts RCV of PSY characters by 1.2x"
    },
    22: {
        special: "Deals 15x character's ATK in PSY damage to one enemy",
        specialName: "Heavy Gong",
        captain: "Boosts RCV of PSY characters by 1.5x"
    },
    23: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "Scope",
        captain: "Boosts RCV of INT characters by 1.5x"
    },
    24: {
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Hoofprint Roseo",
        captain: "Boosts RCV of STR characters by 1.5x"
    },
    25: {
        special: "Deals 7x character's ATK in QCK damage to all enemies",
        specialName: "Horn Point Roseo Colonnade",
        captain: "Boosts RCV of QCK characters by 1.5x"
    },
    26: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "Guard Point",
        captain: "Boosts RCV of DEX characters by 1.5x"
    },
    27: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Slash",
        captain: "Boosts HP of QCK characters by 1.2x"
    },
    28: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight",
        captain: "Boosts ATK of Fighter characters by 1.2x"
    },
    29: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        specialName: "Iron Mace Beauty",
        captain: "Reduces damage received from STR enemies by 30%"
    },
    30: {
        special: "Reduces damage received by 80% for 1 turn",
        specialName: "Slip-Slip Tracks",
        captain: "Reduces damage received from STR enemies by 50%"
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
        captain: "Reduces damage received from INT enemies by 30%"
    },
    34: {
        special: "Reduces the defense of all enemies by 100% for 1 turn",
        specialName: "Straw Doll Of Resentment",
        captain: "Reduces damage received from INT enemies by 30%"
    },
    35: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
        specialName: "Execution Axe-Hand",
        captain: "Boosts HP of Slasher characters by 1.2x"
    },
    36: {
        special: "Deals 5x character's ATK in PSY damage to one enemy",
        specialName: "Fierce Bite",
        captain: "Boosts ATK of PSY characters by 1.5x"
    },
    37: {
        special: "Deals 5x character's ATK in DEX damage to one enemy",
        specialName: "The Dance Of A Hundred Kamikaze Tops",
        captain: "Boosts ATK of DEX characters by 1.5x"
    },
    38: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "Chop-Chop Festival",
        captain: "Boosts ATK of INT characters by 1.5x"
    },
    39: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "Chop-Chop Festival",
        captain: "Boosts ATK of INT characters by 2x"
    },
    40: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm",
        captain: "Reduces damage received from Shooter enemies by 30%"
    },
    41: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "Cat Snatch",
        captain: "Boosts RCV of INT characters by 1.2x"
    },
    42: {
        special: "Deals 3x character's ATK in STR damage to all enemies",
        specialName: "Cat-A-Pult Cat-Astrophe",
        captain: "Boosts ATK of STR characters by 1.2x"
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
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        specialName: "Death Scoop",
        captain: "Boosts ATK of QCK characters by 1.2x"
    },
    46: {
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        specialName: "Death Scoop",
        captain: "Boosts ATK of QCK characters by 1.5x"
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
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    50: {
        special: "Deals 5x character's ATK in STR damage to one enemy",
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
        captain: "Reduces damage received from QCK enemies by 30%"
    },
    54: {
        special: "Deals 7x character's ATK in QCK damage to one enemy",
        specialName: "Demonic Dance",
        captain: "Reduces damage received from QCK enemies by 50%"
    },
    55: {
        captain: "Reduces damage received from STR enemies by 30%"
    },
    56: {
        special: "Changes [RCV] orbs into [STR] orbs",
        specialName: "Fire Pearl Privilege",
        captain: "Reduces damage received from STR enemies by 50%"
    },
    57: {
        special: "Deals 7x character's ATK in INT damage to one enemy",
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
        captain: "Boosts ATK of INT characters by 1.2x"
    },
    60: {
        special: "Changes [TND] orbs into [STR] orbs",
        specialName: "[TND] Slot Change [STR]",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    61: {
        special: "Deals 5x character's ATK in INT damage to all enemies",
        specialName: "Lip-O-Cannon",
        captain: "Boosts HP of Shooter characters by 1.5x"
    },
    62: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        specialName: "Guffaw Palm Bomb",
        captain: "Boosts HP of Fighter characters by 1.5x"
    },
    63: {
        captain: "Reduces damage received from DEX enemies by 30%"
    },
    64: {
        special: "Deals 10x character's ATK in DEX damage to all enemies",
        specialName: "New Year's Open Body Slam",
        captain: "Reduces damage received from DEX enemies by 50%"
    },
    65: {
        special: "Deals 7x character's ATK in STR damage to one enemy",
        specialName: "Shark On Darts",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    66: {
        special: "Deals 15x character's ATK in STR damage to one enemy",
        specialName: "Shark On Tooth",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    67: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        specialName: "Quick Draw",
        captain: "Boosts RCV of Slasher characters by 1.5x"
    },
    68: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
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
        captain: "Recovers 5x character's RCV in HP at the end of each turn"
    },
    74: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        specialName: "Flame Fist",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    75: {
        special: "Deals 15x character's ATK in QCK to all enemies",
        specialName: "Flame Mirror",
        captain: "Boosts ATK of QCK characters by 2.5x"
    },
    76: {
        special: "Deals 15x character's ATK in PSY damage to all enemies",
        specialName: "Conqueror's Haki",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    77: {
        special: "Deals 15x character's ATK in PSY damage to all enemies",
        specialName: "Conqueror's Haki",
        captain: "Boosts ATK of PSY characters by 2.5x",
        limit: [
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 250" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 200" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Aquire new Captain Ability: Boosts ATK of [PSY] characters by 2.75x and their RCV by 1.2x" },
            { "description": "Boosts base HP by 400" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of [PSY] characters by 75" },
            { "description": "Aquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    195: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing",
        captain: "Boosts RCV of DEX characters by 1.5x"
    },
    196: {
        special: "Changes [STR] orbs into [QCK] orbs",
        specialName: "[STR] Slot Change [QCK]",
        captain: "Boosts ATK of QCK characters by 1.5x"
    },
    197: {
        special: "Recovers 5x character's RCV in HP",
        specialName: "Light Healing",
        captain: "Reduces damage received from PSY enemies by 20%"
    },
    198: {
        special: "Changes [RCV] orbs into [INT] orbs",
        specialName: "[RCV] Slot Change [INT]",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    199: {
        special: "Deals 15x character's ATK in STR damage to one enemy",
        specialName: "Nez-Palm Cannon",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    200: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        specialName: "Breeze Breath Bomb",
        captain: "Boosts ATK of STR characters by 2x"
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
        captain: "Reduces damage received from INT enemies by 10%"
    },
    204: {
        special: "Delays all enemies for 1 turn",
        specialName: "Extra Special Candelabra",
        captain: "Reduces damage received from INT enemies by 10%"
    },
    205: {
        captain: "Boosts HP and RCV of DEX characters by 1.2x"
    },
    206: {
        special: "Reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Colors Trap: Calming Green",
        captain: "Boosts HP and RCV of DEX characters by 1.2x"
    },
    207: {
        captain: "Reduces damage received from PSY enemies by 10%"
    },
    208: {
        special: "Changes [RCV] orbs into [PSY] orbs",
        specialName: "Bombardier Arabesque",
        captain: "Reduces damage received from PSY enemies by 20%"
    },
    209: {
        special: "Boosts ATK of INT characters by 1.5x for 1 turn",
        specialName: "Dieciseis Fleur",
        captain: "Boosts RCV of INT characters by 1.5x"
    },
    210: {
        special: "Boosts ATK of INT characters by 2x for 1 turn",
        specialName: "Cien Fleur",
        captain: "Boosts RCV of INT characters by 2x"
    },
    211: {
        captain: "Boosts ATK of Striker characters by 1.2x"
    },
    212: {
        special: "Deals 5x character's ATK in QCK damage to one enemy",
        specialName: "Hot Blooded Bat",
        captain: "Boosts ATK of Striker characters by 1.5x"
    },
    213: {
        special: "Deals 20x character's ATK in STR damage to all enemies",
        specialName: "Sorrowful Charge",
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}"
    },
    214: {
        special: "Deals 20x character's ATK in STR damage to all enemies",
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
        special: "Deals 15x character's ATK in STR damage to all enemies",
        specialName: "Gum-Gum Giant Rifle",
        captain: "Boosts ATK by 3.5x after scoring 3 Perfects in a row"
    },
    218: {
        special: "Reduces damage received from STR enemies by 100% for 1 turn",
        specialName: "Streaming Wolf Swords",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn"
    },
    219: {
        special: "Deals 25x character's ATK in DEX damage to one enemy",
        specialName: "Lion's Song",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        limit: [
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 100" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Slasher and Driven characters by 50" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 100" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Boosts base ATK by 200" },
            { "description": "Aquire new Captain Ability: Boosts ATK of all characters by 1.5x and reduces damage received by 80% if HP is above 99% at the start of the turn" },
            { "description": "Aquire Sailor Ability 2: 	Makes [STR] orbs \"beneficial\" for Slasher and Driven characters" },
            { "description": "Aquire Potential 2: Critical Hit" },
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
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    220: {
        special: "Changes [PSY] orbs into [INT] orbs",
        specialName: "Fine Tempo",
        captain: "Boosts ATK of INT characters by 2x"
    },
    221: {
        special: "Changes [PSY] orbs into [INT] orbs",
        specialName: "Happiness Punch",
        captain: "Boosts ATK of INT characters by 2.5x",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire new Captain Ability: Boosts ATK of [INT] characters by 2.5x and their RCV by 1.2x" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of [INT] characters by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 2: Makes [TND] orbs \"beneficial\" for [INT] characters" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [PSY] Damage Reduction" },
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
        special: "Boosts ATK of PSY characters by 1.5x for 1 turn",
        specialName: "Usopp Hammer",
        captain: "Boosts ATK of PSY characters by 1.2x"
    },
    223: {
        special: "Boosts ATK of PSY characters by 2x for 1 turn",
        specialName: "Impact",
        captain: "Boosts ATK of PSY characters by 1.5x"
    },
    224: {
        special: "Deals 15x character's ATK in QCK damage to one enemy",
        specialName: "Mutton Shot",
        captain: "Boosts ATK by 2x after scoring 2 Perfects in a row"
    },
    225: {
        special: "Deals 20x character's ATK in QCK damage to one enemy",
        specialName: "Veau Shot",
        captain: "Boosts ATK by 2.5x after scoring 2 Perfects in a row"
    },
    226: {
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Black Blade Ship Cutter",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    227: {
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Black Blade Ship Cutter",
        captain: "Boosts ATK of Slasher characters by 2.5x",
        limit: [
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Slasher characters by 2.5x and their HP by 1.3x" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
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
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    231: {
        special: "Locks all orbs for 1 turn",
        specialName: "Kimono Sleeve Cage",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    232: {
        special: "Locks all orbs for 1 turn",
        specialName: "Kimono Sleeve Cage",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    233: {
        captain: "Boosts HP of PSY characters by 1.5x"
    },
    234: {
        special: "Deals 5x character's ATK in PSY damage to all enemies",
        specialName: "Igarappapa",
        captain: "Boosts HP of PSY characters by 2x"
    },
    235: {
        captain: "Boosts ATK of Fighter characters by 1.2x"
    },
    236: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
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
        special: "Deals random STR damage to one enemy",
        specialName: "Rampage",
        specialNotes: "#{random : 2,000 : 200,000}",
        captain: "Boosts ATK of STR characters by 2.5x and reduces their HP by 60%"
    },
    249: {
        special: "Deals random STR damage to one enemy",
        specialName: "Rampage",
        specialNotes: "#{random : 2,000 : 200,000}",
        captain: "Boosts ATK of STR characters by 3x and reduces their HP by 60%",
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of all characters by 50" },
            { "description": "Aquire Potential 2: Critical Hit" },
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
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    250: {
        special: "Recovers all missing HP",
        specialName: "Blue Flame Rebirth",
        captain: "Boosts ATK of PSY characters by 3x if HP is above 99% at the start of the turn"
    },
    251: {
        special: "Recovers all missing HP",
        specialName: "Blue Flame Rebirth",
        captain: "Boosts ATK of PSY characters by 3x if HP is above 99% at the start of the turn",
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Aquire Sailor Ability 1: Reduces Paralysis duration for 5 turns for himself" },
            { "description": "Aquire Potential 2: [PSY] Damage Reduction" },
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
        special: "Reduces damage received from DEX enemies by 100% for 1 turn",
        specialName: "Brilliant Punk",
        captain: "Boosts ATK and HP of QCK characters by 2x"
    },
    253: {
        special: "Reduces damage received from DEX enemies by 100% for 1 turn",
        specialName: "Brilliant Punk",
        captain: "Boosts ATK and HP of QCK characters by 2x",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Aquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Aquire Sailor Ability 1: Cannot be Blown Away" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Aquire Sailor Ability 2: Boosts base HP of Fighter characters by 100" },
            { "description": "Aquire Potential 2: Enrage" },
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
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    254: {
        special: "Deals 5,000 fixed damage to all enemies",
        specialName: "Rose Rondo",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of INT characters by 2x"
    },
    255: {
        special: "Deals 5,000 fixed damage to all enemies",
        specialName: "Rose Rondo",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of INT characters by 2x",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of [INT] characters by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire Sailor Ability 2: If this character has an [INT] orb and you hit a Perfect with him, keep his [INT] orb for the next turn" },
            { "description": "Aquire Potential 2: Critical Hit" },
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
        captain: "Boosts ATK and RCV of DEX characters by 2x"
    },
    257: {
        special: "Changes [STR] and [QCK] orbs into [DEX] orbs",
        specialName: "Beautiful Dual Flintlocks",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        limit: [
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of [DEX] characters by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 150" },
            { "description": "Aquire new Captain Ability: Boosts ATK and RCV of DEX characters by 2x and boosts ATK of Shooter characters by 1.2x" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK of Shooter characters by 50" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        limitnotes: "Captain boosts stack, so [DEX] and Shooter character's ATK will be boosted by 2.4x",
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
        captain: "Boosts ATK and RCV of STR characters by 2x"
    },
    259: {
        special: "Changes [DEX] and [QCK] orbs into [STR] orbs",
        specialName: "Pocket Mallet",
        captain: "Boosts ATK and RCV of STR characters by 2x",
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for this unit" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Sailor Ability 2: Makes [INT] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [DEX] Damage Reduction" },
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
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Striker and Powerhouse characters by 60" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 2: Critical Hit" },
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
            { "description": "Aquire Sailor Ability 2: 	Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Potential 3: Enrage" },
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
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 25",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
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
        captain: "Reduces damage received from INT enemies by 30%"
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
        special: "Deals 25x character's ATK in INT damage to one enemy",
        specialName: "Judgment Bomb",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    291: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm",
        captain: "Reduces damage received from INT enemies by 50%"
    },
    292: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm",
        captain: "Reduces damage received from PSY enemies by 50%"
    },
    293: {
        special: "Reduces damage received by 20% for 1 turn",
        specialName: "Iron Shield",
        captain: "Boosts HP of QCK characters by 2x"
    },
    294: {
        special: "Deals 10x character's ATK in character's type damage to one enemy",
        specialName: "Hyper Straight",
        captain: "Boosts HP of STR characters by 2x"
    },
    295: {
        special: "Reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Shield Crusher",
        captain: "Boosts HP of DEX characters by 2x"
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
        special: "Deals 25x character's ATK in PSY damage to one enemy",
        specialName: "Moonwalk",
        captain: "Boosts HP of PSY characters by 2x"
    },
    299: {
        special: "Cuts the current HP of each enemy by 10%",
        specialName: "8-Sword Style Onigumo",
        captain: "Boosts ATK of DEX characters by 2x"
    },
    305: {
        special: "Randomly changes all orbs into either [PSY] or [RCV] orbs",
        specialName: "Meteor Fist Shower",
        captain: "Boosts ATK and HP of PSY characters by 1.5x"
    },
    306: {
        special: "Randomly changes all orbs into either [PSY] or [RCV] orbs",
        specialName: "Meteor Fist Shower",
        captain: "Boosts ATK and HP of PSY characters by 2x",
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for this unit" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK of [PSY] characters by 65" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
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
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    307: {
        special: "Randomly changes all orbs other than [DEX] into either [DEX], [RCV] or [TND] orbs",
        specialName: "ROOM – Chambres",
        captain: "Boosts ATK of DEX characters by 2.5x"
    },
    308: {
        special: "Randomly changes all orbs other than [DEX] into either [DEX], [RCV] or [TND] orbs",
        specialName: "ROOM – Chambres",
        captain: "Boosts ATK of DEX characters by 2.5x",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for [DEX] characters" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 80" },
            { "description": "Aquire Sailor Ability 2: Makes [TND] orbs \"beneficial\" for [DEX] characters" },
            { "description": "Aquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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
        captain: "Reduces RCV of all characters by 90%, reduces damage received by 40%",
        limit: [
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Aquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire new Captain Ability: Boosts ATK of all characters by 1.25x and reduces damage received by 40%" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [PSY] Damage Reduction" },
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
        captain: "Boosts ATK by 3.5x after scoring 3 hits below Good in a row",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK of Cerebral characters by 50"
    },
    312: {
        special: "Deals 100x character's ATK in fixed damage to one enemy, reduces crew's HP to 1",
        specialName: "Massacre Soldier",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK by 3.5x after scoring 3 hits below Good in a row",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK of Cerebral characters by 50"
    },
    313: {
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn, deals 25x character's ATK in PSY damage to one enemy",
        specialName: "Karmic Punishment",
        captain: "Boosts ATK of Striker characters by 2x and their HP by 1.5x"
    },
    314: {
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn, deals 25x character's ATK in PSY damage to one enemy",
        specialName: "Karmic Punishment",
        captain: "Boosts ATK of Striker characters by 2x and their HP by 1.5x",
        limit: [
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Aquire new Captain Ability: Boosts ATK of all Striker characters proportionally to the crew's current HP and their HP by 1.5x" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Striker characters by 30" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Enrage" },
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
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
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
        sailor: "Reduces Paralysis for 2 turns for himself",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire Sailor Ability 1:  Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
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
        special: "Randomly changes all orbs into either [DEX] or [STR] orbs, deals random DEX damage to all enemies",
        specialName: "Beautiful Secretary's Job",
        specialNotes: "#{random : 1 : 15,000}",
        captain: "Recovers 500 HP at end of each turn, reduces damage received by 10%"
    },
    318: {
        special: "Randomly changes all orbs into either [DEX] or [STR] orbs, deals random DEX damage to all enemies",
        specialName: "Beautiful Secretary's Job",
        specialNotes: "#{random : 1 : 15,000}",
        captain: "Recovers 1,000 HP at end of each turn, reduces damage received by 15%"
    },
    319: {
        special: "Locks all orbs for 1 turn",
        specialName: "Hook, Line, and Sinker",
        captain: "Boosts ATK of Striker characters by 1.5x"
    },
    320: {
        special: "Locks all orbs for 1 turn",
        specialName: "Hook, Line, and Sinker",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    321: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        specialName: "Taciturn Combo",
        captain: "Boosts ATK of QCK type characters by 2x"
    },
    322: {
        special: "Deals 25x character's ATK in QCK damage to one enemy",
        specialName: "Taciturn Combo",
        captain: "Boosts ATK of QCK type characters by 2x"
    },
    323: {
        special: "Amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Mountain Wind",
        captain: "Boosts HP and RCV of QCK characters by 1.5x"
    },
    324: {
        special: "Amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Mountain Wind",
        captain: "Boosts HP and RCV of QCK characters by 1.5x"
    },
    325: {
        special: "Changes [TND] orbs into [RCV] orbs, changes [RCV] orbs into [QCK] orbs",
        specialName: "Red-Hot Shipwright Soul"
    },
    326: {
        special: "Empties all slots, deals 25x character's ATK in STR damage to one enemy",
        specialName: "Munch-Munch Tongue Cannon",
        captain: "Recovers 10x character's RCV in HP at the end of each turn"
    },
    327: {
        special: "Empties all slots, deals 25x character's ATK in STR damage to one enemy",
        specialName: "Munch-Munch Tongue Cannon",
        captain: "Recovers 10x character's RCV in HP at the end of each turn"
    },
    328: {
        special: "Deals 20x character's ATK in QCK damage to all enemies",
        specialName: "Fiddle Banff",
        captain: "Boosts RCV of all characters by 5x if HP is below 30% at the start of the turn"
    },
    329: {
        special: "Deals 20x character's ATK in QCK damage to all enemies",
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
        captain: "Boosts ATK and RCV of PSY and INT characters by 1.5x"
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
        captain: "Reduces damage received by 10% if HP is above 50% at the start of the turn, boosts ATK of PSY characters by 2x and reduces ATK of every other character by 20% if HP is above 50% at the start of the turn"
    },
    337: {
        special: "Switches orbs between slots twice",
        specialName: "Franky Centaur",
        captain: "Reduces damage received by 10% if HP is above 50% at the start of the turn, boosts ATK of PSY characters by 2.5x and reduces ATK of every other character by 20% if HP is above 50% at the start of the turn"
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
        special: "Randomly changes all orbs into either [STR] or [QCK] orbs, deals random STR damage to all enemies",
        specialName: "Kraken Tentacle Crush",
        specialNotes: "#{random : 1 : 15,000}",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    341: {
        special: "Randomly changes all orbs into either [STR] or [QCK] orbs, deals random STR damage to all enemies",
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
        captain: "Boosts ATK of Shooter characters by 2.5x",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Shooter characters by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Shooter characters by 2.5x and their HP by 1.2x and recovers 300 HP at end of each turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
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
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
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
        special: "Changes own orb into [STR], deals 9x character's ATK in STR damage to all enemies",
        specialName: "Steel Magnetic Arm",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    357: {
        special: "Changes own orb into [STR], deals 9x character's ATK in STR damage to all enemies",
        specialName: "Steel Magnetic Arm",
        captain: "Boosts ATK of Striker characters by 2.5x",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Striker characters by 2.5x and reduces damage received by 7%" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Striker characters by 75" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Enrage" },
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
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    358: {
        special: "Changes [TND] and [RCV] orbs into [DEX] orbs, deals random DEX damage to all enemies",
        specialName: "Scratch Body",
        captain: "Boosts ATK of DEX characters by 2.5x if HP is above 99% at the start of the turn",
        specialNotes: "#{random : 5,000 : 20,000}"
    },
    359: {
        special: "Changes [TND] and [RCV] orbs into [DEX] orbs, deals random DEX damage to all enemies",
        specialName: "Scratch Body",
        specialNotes: "#{random : 5,000 : 20,000}",
        captain: "Boosts ATK of DEX characters by 3x if HP is above 99% at the start of the turn",
        limit: [
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of [DEX] characters by 30" },
            { "description": "Boosts base HP by 150" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK of Shooter characters by 50" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire new Captain Ability: Boosts ATK of [DEX] characters by 3x if HP is above 99% at the start of the turn, 2x otherwise" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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
        special: "Deals 10x character's ATK in INT damage to all enemies, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Prehistoric Power",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK of INT characters by 3x if HP is below 30% at the start of the turn",
        sailor: "Boosts base HP of Powerhouse characters by 100"
    },
    361: {
        special: "Deals 10x character's ATK in INT damage to all enemies, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Prehistoric Power",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK of INT characters by 3x if HP is below 30% at the start of the turn",
        sailor: "Boosts base HP of Powerhouse characters by 100"
    },
    362: {
        special: "For 2 turns, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Big Eater",
        captain: "Boosts ATK and RCV of PSY characters by 2x"
    },
    363: {
        special: "For 2 turns, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Big Eater",
        captain: "Boosts ATK and RCV of PSY characters by 2x"
    },
    364: {
        special: "Changes [STR] and [DEX] orbs into [QCK] orbs",
        specialName: "Gang Fortress",
        captain: "Boosts ATK and RCV of QCK characters by 2x",
        sailor: "Boosts base RCV of all characters by 10"
    },
    365: {
        special: "Changes [STR] and [DEX] orbs into [QCK] orbs",
        specialName: "Gang Fortress",
        captain: "Boosts ATK and RCV of QCK characters by 2x",
        sailor: "Boosts base RCV of all characters by 10"
    },
    366: {
        special: "Deals 20x character's ATK in INT damage to all enemies, reduces Bind duration by 5 turns",
        specialName: "Dark King's Aura",
        captain: "Boosts chain multiplier by 4x"
    },
    367: {
        special: "Deals 20x character's ATK in INT damage to all enemies, reduces Bind duration by 5 turns",
        specialName: "Dark King's Aura",
        captain: "Boosts chain multiplier by 4x"
    },
    368: {
        special: "Reduces damage received from DEX enemies by 50% for 1 turn",
        specialName: "Crystal Shield DEX"
    },
    369: {
        special: "Reduces damage received from STR enemies by 50% for 1 turn",
        specialName: "Crystal Shield STR"
    },
    370: {
        special: "Reduces damage received from QCK enemies by 50% for 1 turn",
        specialName: "Crystal Shield QCK"
    },
    371: {
        special: "Reduces damage received from INT enemies by 50% for 1 turn",
        specialName: "Crystal Shield INT"
    },
    372: {
        special: "Reduces damage received from PSY enemies by 50% for 1 turn",
        specialName: "Crystal Shield PSY"
    },
    373: {
        special: "Reduces damage received from DEX enemies by 50% for 1 turn",
        specialName: "Crystal Shield DEX",
        captain: "Boosts ATK of Slasher characters by 1.5x"
    },
    374: {
        special: "Reduces damage received from STR enemies by 50% for 1 turn",
        specialName: "Crystal Shield STR",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    375: {
        special: "Reduces damage received from QCK enemies by 50% for 1 turn",
        specialName: "Crystal Shield QCK",
        captain: "Boosts HP of Striker characters by 1.5x"
    },
    376: {
        special: "Reduces damage received from INT enemies by 50% for 1 turn",
        specialName: "Crystal Shield INT",
        captain: "Boosts ATK of Fighter characters by 1.5x"
    },
    377: {
        special: "Reduces damage received from PSY enemies by 50% for 1 turn",
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
        captain: "Boosts ATK and RCV of STR characters by 1.5x"
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
        captain: "Reduces damage received by 10%, boosts ATK of INT characters by 2x"
    },
    384: {
        special: "Strongly Poisons one enemy",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn",
        specialName: "Poison Needle",
        captain: "Reduces damage received by 20%, boosts ATK of INT characters by 2x"
    },
    385: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Fighter characters by 1.25x for 1 turn",
        specialName: "Zombie Marionette Operation",
        captain: "Boosts ATK of INT characters by 2x"
    },
    386: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Fighter characters by 1.25x for 1 turn",
        specialName: "Zombie Marionette Operation",
        captain: "Boosts ATK of INT characters by 2x"
    },
    387: {
        special: "Randomly changes all orbs into either [PSY] or [INT] orbs, deals random PSY damage to all enemies",
        specialName: "Square Plate Sword",
        specialNotes: "#{random : 1 : 10,000}",
        captain: "Boosts RCV of PSY characters by 1.5x"
    },
    388: {
        special: "Randomly changes all orbs into either [PSY] or [INT] orbs, deals random PSY damage to all enemies",
        specialName: "Square Plate Sword",
        specialNotes: "#{random : 1 : 10,000}",
        captain: "Boosts RCV of PSY characters by 1.5x"
    },
    389: {
        special: "Randomly changes all orbs into either [RCV], [STR], [DEX] or [QCK] orbs and changes own orb into [QCK]",
        specialName: "Hell Wink",
        captain: "Boosts ATK by 2.25x following a chain of DEX > INT > QCK attacks no lower than Good"
    },
    390: {
        special: "Randomly changes all orbs into either [RCV], [STR], [DEX] or [QCK] orbs and changes own orb into [QCK]",
        specialName: "Hell Wink",
        captain: "Boosts ATK by 2.75x following a chain of DEX > INT > QCK attacks no lower than Good"
    },
    391: {
        special: "Reduces damage received by 90% for 1 turn, reduces the defense of all enemies by 80% for 1 turn, Poisons enemies for 1,000 damage for a single turn",
        specialName: "Negative Hollow",
        specialNotes: "Poison damage deals 1,000 damage exactly and will ignore enemy armor at the end of your turn",
        captain: "Boosts RCV of DEX characters by 1.5x"
    },
    392: {
        special: "Reduces damage received by 90% for 1 turn, reduces the defense of all enemies by 80% for 1 turn, Poisons enemies for 1,000 damage for a single turn",
        specialName: "Negative Hollow",
        specialNotes: "Poison damage deals 1,000 damage exactly and will ignore enemy armor at the end of your turn",
        captain: "Boosts RCV of DEX characters by 2x"
    },
    393: {
        special: "Deals 35x character's ATK in STR damage to one enemy",
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
        captain: "Boosts ATK and RCV of QCK characters by 1.2x"
    },
    396: {
        special: "Empties adjacent slots, amplifies the effect of orbs by 1.25x for 1 turn",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Mole Banana",
        captain: "Boosts ATK and RCV of QCK characters by 1.2x"
    },
    397: {
        special: "Changes [EMPTY] orbs into [STR] orbs with a 50% probability, deals 15x character's ATK in damage to all enemies",
        specialName: "Four Hundred Base Hits",
        captain: "Boosts ATK by 3x after scoring 5 Perfects in a row"
    },
    398: {
        special: "Changes [EMPTY] orbs into [STR] orbs with a 50% probability, deals 15x character's ATK in damage to all enemies",
        specialName: "Four Hundred Base Hits",
        captain: "Boosts ATK by 4x after scoring 5 Perfects in a row"
    },
    399: {
        special: "Boosts ATK of DEX characters by 1.5x for 1 turn",
        specialName: "Spike-U-Puncture",
        captain: "Boosts HP of Striker characters by 1.5x"
    },
    400: {
        special: "Boosts ATK of DEX characters by 1.5x for 1 turn",
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
        special: "Deals several times the character's ATK in QCK damage to all enemies",
        specialNotes: "#{specialProportional : lower : 150 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Backwater Sword Dance",
        captain: "Reduces damage received by 50% if HP is low, boosts RCV of all characters by 3x if HP is low"
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
        special: "Changes own orb into [QCK], deals 13x character's ATK in QCK damage to one enemy",
        specialName: "Ocean Current Shoulder Throw",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    410: {
        special: "Changes own orb into [QCK], deals 13x character's ATK in QCK damage to one enemy",
        specialName: "Ocean Current Shoulder Throw",
        captain: "Boosts ATK of Fighter characters by 2.5x"
    },
    411: {
        special: "Changes adjacent orbs into [STR] orbs, deals 1,000 fixed damage to all enemies",
        specialName: "Ursa Shock",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of STR characters by 2x"
    },
    412: {
        special: "Changes adjacent orbs into [STR] orbs, deals 1,000 fixed damage to all enemies",
        specialName: "Ursa Shock",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK and HP of STR characters by 2x"
    },
    413: {
        special: "Changes [STR] and [DEX] orbs into [INT] orbs",
        specialName: "Doppelman",
        captain: "Boosts ATK of INT characters by 2.5x if HP is above 99% at the start of the turn"
    },
    414: {
        special: "Changes [STR] and [DEX] orbs into [INT] orbs",
        specialName: "Doppelman",
        captain: "Boosts ATK of INT characters by 3x if HP is above 99% at the start of the turn"
    },
    415: {
        special: "Recovers 15x character's RCV in HP, delays all enemies for 1 turn",
        specialName: "Love-Love Mellow",
        captain: "Boosts ATK of QCK and PSY characters by 2.75x and their RCV by 1.5x if HP is above 70% at the start of the turn"
    },
    416: {
        special: "Recovers 15x character's RCV in HP, delays all enemies for 1 turn",
        specialName: "Love-Love Mellow",
        captain: "Boosts ATK of QCK and PSY characters by 2.75x and their RCV by 1.5x if HP is above 70% at the start of the turn"
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
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Slasher characters by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 2: Boosts base HP of Slasher characters by 60" },
            { "description": "Aquire Potential 2: Critical Hit" },
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
        captain: "Boosts ATK of QCK characters by 2x"
    },
    420: {
        special: "Reduces Despair duration by 3 turns, deals 15x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Bazooka: Supremacy",
        captain: "Boosts ATK, HP and RCV of STR characters by 1.5x"
    },
    421: {
        special: "Reduces Bind duration by 2 turns, deals 10x character's ATK in DEX damage to all enemies",
        specialName: "Three Thousand Worlds: The Final Stroke",
        captain: "Boosts ATK, HP and RCV of DEX characters by 1.5x"
    },
    422: {
        special: "Reduces damage received from INT enemies by 100% for 1 turn, recovers a random amount of HP",
        specialName: "Mirage Tempo: The Heavens",
        specialNotes: "#{randomHeal : 1,000 : 3,000}",
        captain: "Boosts ATK, HP and RCV of INT characters by 1.5x"
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
        special: "Deals random PSY damage to all enemies",
        specialName: "Shusui: Three Verse Arrow Notch Slash",
        specialNotes: "#{random : 1 : 100,000}",
        captain: "Boosts ATK and HP of Slasher characters by 1.5x"
    },
    426: {
        special: "Boosts ATK of STR characters by 1.05x for 5 turns",
        specialName: "Barco Grabber Breath",
        captain: "Boosts HP of STR characters by 2x"
    },
    427: {
        special: "Reduces Bind and Despair duration by 2 turns",
        specialName: "Havoc Sonar",
        captain: "Boosts HP of DEX characters by 2x"
    },
    428: {
        special: "Reduces damage received by 50% for 2 turns",
        specialName: "Last Boss – Deep Dive of Dreams",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    429: {
        special: "Deals 7x character's ATK in DEX damage to all enemies, reduces the defense of all enemies by 50% for 1 turn",
        specialName: "South Bird's Fearless Smile"
    },
    430: {
        special: "Amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Spring Hopper",
        captain: "Boosts ATK of DEX characters by 1.5x"
    },
    431: {
        special: "Amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Spring Hopper",
        captain: "Boosts ATK and HP of DEX characters by 1.5x"
    },
    432: {
        special: "Deals 20x character's ATK in QCK damage to one enemy",
        specialName: "Big Chop"
    },
    433: {
        special: "Reduces Bind and Despair duration by 1 turn",
        specialName: "New Kama Seduction",
        captain: "Boosts ATK by 2x following a chain of QCK > STR > DEX attacks no lower than Good"
    },
    434: {
        special: "Amplifies the effect of orbs by 1.25x for 3 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "New Kama Karate Maiden's Awakening",
        captain: "Boosts ATK by 2x following a chain of PSY > INT > INT attacks no lower than Good"
    },
    435: {
        special: "Randomly changes [RCV], [STR] and [DEX] orbs into either [STR] or [QCK] orbs",
        specialName: "Maiden's Bloom",
        captain: "Boosts ATK by 2x following a chain of INT > PSY > QCK attacks no lower than Good"
    },
    436: {
        special: "Randomly changes [RCV], [STR] and [DEX] orbs into either [STR] or [QCK] orbs",
        specialName: "Maiden's Bloom",
        captain: "Boosts ATK by 2.25x following a chain of INT > PSY > QCK attacks no lower than Good"
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
        special: "Randomly changes all orbs into either [STR], [DEX], [QCK], [PSY] or [INT] orbs, switches orbs between slots 3 times",
        specialName: "Support Incoming! Supersonic Duck Squadron!",
        captain: "Boosts ATK of Evolver and Booster characters by 2.5x if HP is above 50% at the start of the turn"
    },
    446: {
        special: "Deals 10 times the damage received in the previous turn in typeless damage to all enemies",
        specialName: "Black Hole",
        captain: "Increases damage received by 2x, boosts ATK of STR characters by 2x and their HP by 1.5x"
    },
    447: {
        special: "Deals 10 times the damage received in the previous turn in typeless damage to all enemies",
        specialName: "Black Hole",
        captain: "Increases damage received by 2x, boosts ATK of STR characters by 2.5x and their HP by 2.25x",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts base HP of [STR] characters by 120" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
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
        captain: "Boosts ATK of QCK characters by 3x if HP is above 99% at the start of the turn"
    },
    449: {
        special: "Boosts chances of getting [QCK] orbs for 3 turns",
        specialName: "Pirate King's Sword",
        captain: "Boosts ATK of QCK characters by 3x if HP is above 99% at the start of the turn"
    },
    450: {
        special: "Boosts ATK of Fighter characters by 1.5x for 1 turn, deals 25x character's ATK in DEX damage to one enemy",
        specialName: "Number Eight's One Hit",
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.5x",
        sailor: "Boosts base ATK of Fighter characters by 20"
    },
    451: {
        special: "Boosts ATK of Fighter characters by 1.5x for 1 turn, deals 25x character's ATK in DEX damage to one enemy",
        specialName: "Number Eight's One Hit",
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.5x",
        sailor: "Boosts base ATK of Fighter characters by 20"
    },
    452: {
        special: "Changes own orb and the captain's orb into [PSY]",
        specialName: "Dread Morning Star",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Striker characters by 2x"
    },
    453: {
        special: "Changes own orb and the captain's orb into [PSY]",
        specialName: "Dread Morning Star",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Striker characters by 2x"
    },
    454: {
        special: "Boosts ATK of STR characters by 1.5x for 1 turn, deals 15x character's ATK in STR damage to all enemies",
        specialName: "Manly Flaming Sword",
        captain: "Boosts ATK of STR characters by 2x, boosts damage of STR specials by 2x",
        captainNotes: "#{noFixedPerc}"
    },
    455: {
        special: "Boosts ATK of STR characters by 1.5x for 1 turn, deals 15x character's ATK in STR damage to all enemies",
        specialName: "Manly Flaming Sword",
        captain: "Boosts ATK of STR characters by 2x, boosts damage of STR specials by 2x",
        captainNotes: "#{noFixedPerc}"
    },
    456: {
        special: "Randomly changes the orbs in the middle row into either [STR] or [DEX] orbs, the orbs in the lower row into either [PSY] or [INT] orbs, switches orbs between slots once",
        specialName: "Double Cannon",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit"
    },
    457: {
        special: "Randomly changes the orbs in the middle row into either [STR] or [DEX] orbs, the orbs in the lower row into either [PSY] or [INT] orbs, switches orbs between slots once",
        specialName: "Double Cannon",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit"
    },
    458: {
        special: "Deals random PSY damage to all enemies, boosts ATK of all characters by 1.5x for 1 turn",
        specialName: "Zen Shockwave",
        specialNotes: "#{random : 30,000 : 150,000}",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of characters with cost 20 or less by 3x"
    },
    459: {
        special: "Deals random PSY damage to all enemies, boosts ATK of all characters by 1.5x for 1 turn",
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
        special: "Empties all slots, deals 25x character's ATK in PSY damage to one enemy",
        specialName: "Surprise Ball Dragon",
        captain: "Boosts HP of PSY characters by 2x"
    },
    464: {
        special: "Deals 20x character's ATK in INT damage to all enemies",
        specialName: "Roc Rider Fuza's Flame",
        captain: "Boosts ATK and HP of Striker characters by 1.5x"
    },
    465: {
        special: "Deals 20x character's ATK in QCK damage to one enemy, amplifies the effect of orbs by 1.25x for 2 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Jet Punch",
        captain: "Boosts ATK by 3x after scoring 4 hits below Good in a row"
    },
    466: {
        special: "Delays all enemies for 1 turn",
        specialName: "Double Flash Gun",
        captain: "Boosts ATK and HP of Shooter characters by 1.5x"
    },
    467: {
        special: "Changes [RCV] orbs into [STR] orbs",
        specialName: "Mountain Belly",
        captain: "Boosts ATK and RCV of STR characters by 1.5x"
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
        captain: "Boosts RCV of PSY characters by 1.5x"
    },
    471: {
        special: "Switches orbs between slots once",
        specialName: "Quick Change"
    },
    472: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        specialName: "Milky Power Axe"
    },
    473: {
        special: "Deals 10x character's ATK in QCK damage to one enemy",
        specialName: "Milky Quick Axe"
    },
    474: {
        special: "Deals 5x character's ATK in DEX damage to all enemies, reduces Bind duration by 1 turn",
        specialName: "Milky Technique Axe"
    },
    475: {
        special: "Deals 5x character's ATK in STR damage to all enemies, recovers 500 HP",
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
        captain: "Boosts ATK and RCV of QCK characters by 1.2x"
    },
    484: {
        special: "Changes [INT] orbs into [DEX] orbs",
        specialName: "[INT] Slot Change [DEX]",
        captain: "Reduces damage received by 10%"
    },
    485: {
        special: "Changes [TND] orbs into [PSY] orbs",
        specialName: "[TND] Slot Change [PSY]",
        captain: "Boosts HP and RCV of PSY characters by 1.2x"
    },
    486: {
        special: "Changes [DEX] orbs into [INT] orbs",
        specialName: "[DEX] Slot Change [INT]",
        captain: "Boosts ATK of Striker characters by 1.5x"
    },
    487: {
        special: "Boosts ATK of STR characters by 1.2x for 1 turn",
        specialName: "Attack Boost STR"
    },
    488: {
        special: "Boosts ATK of QCK characters by 1.2x for 1 turn",
        specialName: "Attack Boost QCK"
    },
    489: {
        special: "Boosts ATK of DEX characters by 1.2x for 1 turn",
        specialName: "Attack Boost DEX"
    },
    490: {
        special: "Boosts ATK of STR characters by 1.2x for 1 turn",
        specialName: "Attack Boost STR",
        captain: "Boosts ATK and HP of Striker characters by 1.2x"
    },
    491: {
        special: "Boosts ATK of QCK characters by 1.2x for 1 turn",
        specialName: "Attack Boost QCK",
        captain: "Boosts RCV of Striker characters by 1.5x"
    },
    492: {
        special: "Boosts ATK of DEX characters by 1.2x for 1 turn",
        specialName: "Attack Boost DEX",
        captain: "Boosts ATK of DEX characters by 1.2x"
    },
    493: {
        special: "Recovers 7x character's RCV in HP",
        specialName: "Moderate Healing"
    },
    494: {
        special: "Deals 3x character's ATK in INT damage to all enemies, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Attack"
    },
    495: {
        special: "Recovers 7x character's RCV in HP",
        specialName: "Moderate Healing",
        captain: "Recovers 500 HP at the end of each turn"
    },
    496: {
        special: "Deals 3x character's ATK in INT damage to all enemies, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Attack",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    497: {
        special: "Reduces Bind duration by 4 turns, deals 3x character's ATK in QCK damage to one enemy",
        specialName: "Cheeky Punk Kid Kick",
        captain: "Boosts ATK of QCK characters by 1.5x"
    },
    498: {
        special: "Reduces Bind duration by 4 turns, deals 3x character's ATK in QCK damage to one enemy",
        specialName: "Cheeky Punk Kid Kick",
        captain: "Boosts ATK of QCK characters by 1.5x"
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
    501: {
        special: "Recovers 5x character's RCV in HP at the end of each turn for 4 turns",
        specialName: "Studying Medicine",
        captain: "Boosts ATK, HP and RCV of PSY characters by 1.2x"
    },
    502: {
        special: "Recovers 5x character's RCV in HP at the end of each turn for 4 turns",
        specialName: "Studying Medicine",
        captain: "Boosts ATK, HP and RCV of PSY characters by 1.5x"
    },
    503: {
        special: "Deals 5x character's ATK in INT damage to all enemies, boosts ATK of all characters by 5% for 1 turn, reduces the defense of all enemies by 50% for 1 turn, randomizes all orbs",
        specialName: "Surprise Dial Illusion",
        captain: "Boosts HP of INT characters by 1.5x"
    },
    504: {
        special: "Deals 5x character's ATK in INT damage to all enemies, boosts ATK of all characters by 5% for 1 turn, reduces the defense of all enemies by 50% for 1 turn, randomizes all orbs",
        specialName: "Surprise Dial Illusion",
        captain: "Boosts HP of INT characters by 2x"
    },
    505: {
        special: "Boosts ATK of QCK characters by 1.25x for 3 turns",
        specialName: "Flying Claw",
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}"
    },
    506: {
        special: "Boosts ATK of QCK characters by 1.25x for 3 turns",
        specialName: "Flying Claw",
        captain: "Protects from defeat as long as HP is above 30%",
        captainNotes: "#{zombie}"
    },
    507: {
        special: "Deals 25x character's ATK in STR damage to one enemy",
        specialName: "Ringing Fang",
        captain: "Boosts ATK and HP of STR characters by 1.2x"
    },
    508: {
        special: "Deals 25x character's ATK in STR damage to one enemy",
        specialName: "Ringing Fang",
        captain: "Boosts ATK and HP of STR characters by 1.5x"
    },
    509: {
        special: "Poisons all enemies, boosts ATK of Striker characters by 1.5x for 1 turn",
        specialNotes: "#{poison}",
        specialName: "Merciless Ploy: Poison Needle",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    510: {
        special: "Poisons all enemies, boosts ATK of Striker characters by 1.5x for 1 turn",
        specialNotes: "#{poison}",
        specialName: "Merciless Ploy: Poison Needle",
        captain: "Reduces damage received by 10%, boosts ATK of Striker characters by 2x"
    },
    511: {
        special: "Reduces damage received by 30% for 2 turns, boosts ATK of Slasher characters by 1.25x for 2 turns",
        specialName: "Cruel Blade: Iron Guard",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    512: {
        special: "Boosts chances of getting [PSY] orbs and reduces chances of getting [INT] orbs for 3 turns",
        specialName: "Sneaky Punk Kid Strike",
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}"
    },
    513: {
        special: "Boosts chances of getting [PSY] orbs and reduces chances of getting [INT] orbs for 3 turns",
        specialName: "Sneaky Punk Kid Strike",
        captain: "Protects from defeat as long as HP is above 50%, boosts ATK of PSY characters by 1.5x if HP is above 50% at the start of the turn",
        captainNotes: "#{zombie}"
    },
    514: {
        special: "Boosts ATK of INT characters by 1.5x for 1 turn, reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Blooming Flower of Everlasting Summer",
        captain: "Boosts ATK of INT characters by 2x"
    },
    515: {
        special: "Changes the orbs in the left column into [INT], [PSY] and [RCV], the orbs in the right column into [STR], [DEX] and [QCK], switches orbs between slots 3 times",
        specialNotes: "The special is not based on chance, the orbs are always changed with the same pattern. Starting from the top left orb and proceeding clockwise, after the special is used the orbs will be: [INT], [STR], [DEX], [QCK], [RCV] and [PSY]",
        specialName: "Pop Green",
        captain: "Boosts ATK, HP and RCV of Shooter characters by 1.5x"
    },
    516: {
        special: "Changes the orbs in the left column into [INT], [PSY] and [RCV], the orbs in the right column into [STR], [DEX] and [QCK], switches orbs between slots 3 times",
        specialNotes: "The special is not based on chance, the orbs are always changed with the same pattern. Starting from the top left orb and proceeding clockwise, after the special is used the orbs will be: [INT], [STR], [DEX], [QCK], [RCV] and [PSY]",
        specialName: "Pop Green",
        captain: "Boosts ATK, HP and RCV of Shooter characters by 1.5x, recovers 1x character's RCV in HP at the end of each turn"
    },
    517: {
        special: "Empties all slots with [RCV] orbs, boosts ATK of all characters by 5% for 2 turns",
        specialName: "Overeat! Energy Change",
        captain: "Boosts HP of PSY characters by 1.5x"
    },
    518: {
        special: "Empties all slots with [RCV] orbs, boosts ATK of all characters by 5% for 2 turns",
        specialName: "Overeat! Energy Change",
        captain: "Boosts HP of PSY characters by 2x, boosts chances of getting [RCV] orbs"
    },
    519: {
        special: "Reduces crew's current HP by 99%, deals 25x character's ATK in fixed damage to all enemies, boosts ATK of STR characters by 2x for 1 turn",
        specialName: "Gum-Gum Gigant Thor Axe",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of STR characters by 2x"
    },
    520: {
        special: "Reduces crew's current HP by 99%, deals 25x character's ATK in fixed damage to all enemies, boosts ATK of STR characters by 2x for 1 turn",
        specialName: "Gum-Gum Gigant Thor Axe",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of STR characters by 2.5x"
    },
    521: {
        special: "Deals several times the character's ATK in INT damage to all enemies",
        specialNotes: "#{specialProportional : lower : 100 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Diable Jambe - Venaison Shot",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        sailor: "Reduces Paralysis by 3 turns for self"
    },
    522: {
        special: "Deals several times the character's ATK in INT damage to all enemies",
        specialNotes: "#{specialProportional : lower : 100 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Diable Jambe - Venaison Shot",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        sailor: "Reduces Paralysis by 3 turns for self"
    },
    523: {
        special: "Randomizes all orbs, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Billy's Electrical Discharge",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK and RCV of Striker characters by 1.5x",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit"
    },
    524: {
        special: "Randomizes all orbs, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Billy's Electrical Discharge",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK of Striker characters by 2x and their RCV by 1.5x",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit"
    },
    525: {
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        specialName: "Three-Verse Humming: Arrow-Notch Slash",
        captain: "Boosts ATK of PSY characters by 2x",
        sailor: "Boosts base RCV of PSY characters by 15"
    },
    526: {
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        specialName: "Three-Verse Humming: Arrow-Notch Slash",
        captain: "Boosts ATK of PSY characters by 2x, reduces damage received from INT enemies by 30%",
        sailor: "Boosts base RCV of PSY characters by 15",
        limit: [
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 100" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Aquire Sailor Ability 1: If this character has a [PSY] orb, and you hit a Perfect with him, keep his [PSY] orb for the next turn" },
            { "description": "Aquire Potential 2: Critical Hit" },
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
    527: {
        special: "Removes Poison, recovers 15x character's RCV in HP",
        specialName: "Devoted Healing - \"I'm Glad You are Safe\"",
        captain: "Boosts ATK and RCV of DEX characters by 1.5x",
        sailor: "When HP is below 30% at the start of the turn, boosts base RCV of himself by 50"
    },
    528: {
        special: "Removes Poison, recovers 15x character's RCV in HP",
        specialName: "Devoted Healing - \"I'm Glad You are Safe\"",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        sailor: "When HP is below 30% at the start of the turn, boosts base RCV of himself by 50"
    },
    529: {
        special: "Deals 35x character's ATK in PSY damage to all enemies, reduces the defense of all enemies by 100% for 2 turns",
        specialName: "Conqueror's Haki: Emperor",
        captain: "Boosts chances of getting [PSY] orbs, boosts ATK of PSY characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : higher : 2 + 0.75 * (remaining HP) / (total HP) : 2.75 : 2}"
    },
    530: {
        special: "Deals 35x character's ATK in PSY damage to all enemies, reduces the defense of all enemies by 100% for 2 turns",
        specialName: "Conqueror's Haki: Emperor",
        captain: "Boosts chances of getting [PSY] orbs, boosts ATK of PSY characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : higher : 2 + 0.75 * (remaining HP) / (total HP) : 2.75 : 2}"
    },
    531: {
        special: "Reduces damage received by 30% for 4 turns",
        specialName: "Veinte Fleur Calendula: Blossom",
        captain: "Reduces damage received from STR, DEX and QCK enemies by 30%"
    },
    532: {
        special: "Reduces damage received by 30% for 4 turns",
        specialName: "Veinte Fleur Calendula: Blossom",
        captain: "Reduces damage received from STR, DEX and QCK enemies by 30%"
    },
    533: {
        special: "Amplifies the effect of orbs by 1.5x for 1 turn, deals 20x character's ATK in QCK damage to one enemy",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Swallow Bond En Avant: Blossom",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    534: {
        special: "Amplifies the effect of orbs by 1.5x for 1 turn, deals 20x character's ATK in QCK damage to one enemy",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Swallow Bond En Avant: Blossom",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    535: {
        special: "Reduces damage received by 50% for 2 turns, boosts RCV of all characters by 2x for 2 turns",
        specialName: "Mirage Tempo Fata Morgana: Blossom",
        captain: "Boosts RCV of DEX characters by 1.5x"
    },
    536: {
        special: "Reduces damage received by 50% for 2 turns, boosts RCV of all characters by 2x for 2 turns",
        specialName: "Mirage Tempo Fata Morgana: Blossom",
        captain: "Boosts RCV of DEX characters by 2x"
    },
    537: {
        special: "Reduces Bind and Despair duration by 1 turn, locks all orbs for 1 turn",
        specialName: "Sea Stone Handcuffs",
        captain: "Boosts chain multiplier by 2x"
    },
    538: {
        special: "Reduces Bind and Despair duration by 1 turn, locks all orbs for 1 turn",
        specialName: "Sea Stone Handcuffs",
        captain: "Boosts chain multiplier by 2x, recovers 2x character's RCV in HP at the end of each turn"
    },
    539: {
        special: "Changes own orb into [STR], deals 25x character's ATK in STR damage to one enemy",
        specialName: "Bashful Prison Beast's Metal Rod"
    },
    540: {
        special: "Boosts chances of getting [DEX] orbs for 2 turns",
        specialName: "Deadly Glare"
    },
    541: {
        special: "Greatly reduces chances of getting [PSY], [INT], [TND] and [RCV] slots for 5 turns",
        specialName: "White Thorn Deathmatch",
        captain: "Boosts ATK of STR characters by 2.5x if HP is below 50% at the start of the turn"
    },
    542: {
        special: "Boosts RCV of all characters by 2x for 1 turn",
        specialName: "Roar of the Ruler of the Sky",
        captain: "Boosts HP of all characters by 1.5x"
    },
    543: {
        special: "Reduces crew's current HP by 50%, deals 50x character's ATK in DEX damage to one enemy",
        specialName: "Reject",
        captain: "Boosts ATK and HP of Shooter characters by 1.5x, reduces crew's RCV to 0"
    },
    544: {
        special: "Reduces crew's current HP by 50%, deals 50x character's ATK in DEX damage to one enemy",
        specialName: "Reject",
        captain: "Boosts ATK of Shooter characters by 2.25x and their HP by 1.5x, reduces crew's RCV to 0"
    },
    545: {
        special: "Deals 6,000 fixed damage to all enemies, boosts ATK of PSY characters by 1.5x for 1 turn",
        specialName: "60,000,000 Volt Jamboule",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    546: {
        special: "Deals 6,000 fixed damage to all enemies, boosts ATK of PSY characters by 1.5x for 1 turn",
        specialName: "60,000,000 Volt Jamboule",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of PSY characters by 2x, reduces damage received by 20%"
    },
    547: {
        special: "Reduces crew's current HP by 10%, deals 1x character's ATK in STR damage to one enemy, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Crazy Punk Kid Punch",
        specialNotes: "#{zombie}",
        captain: "Boosts chances of getting [RCV] orbs"
    },
    548: {
        special: "Reduces crew's current HP by 10%, deals 1x character's ATK in STR damage to one enemy, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Crazy Punk Kid Punch",
        specialNotes: "#{zombie}",
        captain: "Boosts chances of getting [RCV] orbs, boosts ATK of all characters by 1.2x"
    },
    549: {
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 3 turns",
        specialName: "Arousal Manifesto - Red Demon Whip",
        captain: "Boosts ATK by 2x after scoring 3 Perfects in a row"
    },
    550: {
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 3 turns",
        specialName: "Arousal Manifesto - Red Demon Whip",
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row"
    },
    551: {
        special: "Reduces damage received by 50% for 1 turn, deals 15x character's ATK in STR damage to one enemy",
        specialName: "Uncompromising Prison Beast's Morning Star"
    },
    552: {
        special: "Reduces the defense of all enemies by 100% for 1 turn",
        specialName: "Cursed Shout"
    },
    553: {
        special: "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
        specialName: "Ashura Ugui",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of DEX characters by 2.75x if HP is below 30% at the start of the turn",
        sailor: "Boosts base ATK of Slasher characters by 20"
    },
    554: {
        special: "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
        specialName: "Ashura Ugui",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of DEX characters by 3x if HP is below 30% at the start of the turn",
        sailor: "Boosts base ATK of Slasher characters by 20",
        limit: [
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base ATK by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire new Captain Ability: Boosts ATK of [DEX] characters by 3x if HP is below 30% at the start of the turn, by 2x otherwise" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 1: When any other character uses a special, reduces own cooldown by 1 turn" },
            { "description": "Aquire Potential 2: Critical Hit" },
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
                    "Level 5: If you hit a perfect with this character, there is a 80% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    555: {
        special: "Delays all enemies for 3 turns, cuts the current HP of each enemy by 10%",
        specialName: "Heavenly Dragon Star",
        captain: "Boosts ATK of Shooter characters by 2x",
        sailor: "Boosts base RCV of Shooter characters by 10"
    },
    556: {
        special: "Delays all enemies for 3 turns, cuts the current HP of each enemy by 10%",
        specialName: "Heavenly Dragon Star",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        sailor: "Boosts base RCV of Shooter characters by 10",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 120" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Shooter characters by 50" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
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
                    "Level 1: If there are 6 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 2: If there are 5 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 3: If there are 4 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 4: If there are 4 Shooter characters in your crew, reduces No Healing duration by 2 turns",
                    "Level 5: If there are 4 Shooter characters in your crew, reduces No Healing duration by 3 turns"
                ]
            },
        ]
    },
    557: {
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        specialName: "Ochenta Fleur - Cuatro Manus Shock",
        captain: "Boosts ATK and RCV of INT characters by 1.5x",
        sailor: "Reduces Blindness duration by 3 turns"
    },
    558: {
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        specialName: "Ochenta Fleur - Cuatro Manus Shock",
        captain: "Boosts ATK and RCV of INT characters by 2x",
        sailor: "Reduces Blindness duration by 3 turns"
    },
    559: {
        special: "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Roar! Zarley Davison",
        captain: "Boosts ATK of STR characters by 2x, deals 2x character's ATK in STR damage to all enemies at the end of each turn",
        sailor: "Boosts base ATK of Shooter characters by 20"
    },
    560: {
        special: "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Roar! Zarley Davison",
        captain: "Boosts ATK of STR characters by 2.25x, deals 2x character's ATK in STR damage to all enemies at the end of each turn",
        sailor: "Boosts base ATK of Shooter characters by 20"
    },
    561: {
        special: "Reduces crew's current HP by 40%, deals 15x the amount of HP subtracted in typeless damage to all enemies, locks all orbs for 1 turn",
        specialName: "Great Flame Commandment: Flame Emperor",
        captain: "Boosts HP of Shooter characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 2x otherwise"
    },
    562: {
        special: "Reduces crew's current HP by 40%, deals 15x the amount of HP subtracted in typeless damage to all enemies, locks all orbs for 1 turn",
        specialName: "Great Flame Commandment: Flame Emperor",
        captain: "Boosts HP of Shooter characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 2x otherwise"
    },
    563: {
        special: "Deal 3x character's ATK in PSY damage to one enemy, changes [INT] orbs into [RCV] orbs",
        specialName: "Cutie Baton"
    },
    564: {
        special: "Reduces Bind duration by 2 turns",
        specialName: "Sea Surface Split"
    },
    565: {
        special: "Deals 5,000 fixed damage to one enemy",
        specialName: "Hamburger Hammer",
        specialNotes: "#{fixed}"
    },
    566: {
        special: "Empties all slots with [BLOCK] orbs",
        specialName: "Wipeout Tackle"
    },
    567: {
        special: "Reduces Bind and Despair duration by 1 turn, deals 15x the character's ATK as STR damage to all enemies",
        specialName: "Mudfish Coaster"
    },
    568: {
        special: "Delays all enemies for 2 turns, reduces the defense of all enemies by 50% for 2 turns, switches orbs between slots twice",
        specialName: "Slow Slow Beam",
        captain: "Boosts ATK, HP and RCV of all characters by 1.25x"
    },
    569: {
        special: "Delays all enemies for 2 turns, reduces the defense of all enemies by 50% for 2 turns, switches orbs between slots twice",
        specialName: "Slow Slow Beam",
        captain: "Boosts ATK, HP and RCV of all characters by 1.5x, reduces cooldown of all specials by 1 turn at the start of the fight"
    },
    570: {
        special: "Changes [BLOCK] orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Flail",
        captain: "Boosts ATK of STR and Fighter characters by 1.5x",
        captainNotes: "The bonus is cumulative. STR Fighter characters get a 2.25x bonus."
    },
    571: {
        special: "Changes [BLOCK] orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Flail",
        captain: "Boosts ATK of STR and Fighter characters by 1.5x, reduces cooldown of all specials by 1 turn at the start of the fight",
        captainNotes: "The bonus is cumulative. STR Fighter characters get a 2.25x bonus."
    },
    572: {
        special: "Boosts ATK of Fighter characters by 2x for 1 turn, binds himself for 15 turns",
        specialName: "Roar of Mettle",
        captain: "Boosts ATK of Fighter characters by 2.5x if HP is above 99% at the start of the turn"
    },
    573: {
        special: "Reduces Despair duration by 2 turns, recovers 10x character's RCV in HP",
        specialName: "Manly Support",
        captain: "Boosts RCV of all characters by 1.2x"
    },
    574: {
        special: "Boosts ATK of Striker characters by 1.75x for 2 turns, locks all orbs for 2 turns",
        specialName: "Ice Block - Pheasant Beak",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    575: {
        special: "Boosts ATK of Striker characters by 1.75x for 2 turns, locks all orbs for 2 turns",
        specialName: "Ice Block - Pheasant Beak",
        captain: "Boosts ATK and HP of Striker characters by 2x",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Striker characters by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [PSY] Damage Reduction" },
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
                "Name": "[PSY] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by ?%",
                    "Level 3: Reduce damage taken from [PSY] characters by ?%",
                    "Level 4: Reduce damage taken from [PSY] characters by ?%",
                    "Level 5: Reduce damage taken from [PSY] characters by ?%"
                ]
            },
        ]
    },
    576: {
        special: "Changes [PSY] orbs into [INT] orbs, boosts RCV of all characters by 1.5x for 1 turn",
        specialName: "Fine Tempo - Tea Time Show",
        captain: "Boosts ATK of all characters by 1.5x, boosts RCV of all characters by 1.2x"
    },
    577: {
        special: "Deals random typeless damage to all enemies, changes own orb into [STR]",
        specialName: "Gum-Gum Jet Gatling",
        specialNotes: "#{random : 70,000 : 200,000}",
        captain: "Boosts ATK by 4x following a chain of Good > Great > Perfect hits"
    },
    578: {
        special: "Deals random typeless damage to all enemies, changes own orb into [STR]",
        specialName: "Gum-Gum Jet Gatling",
        specialNotes: "#{random : 70,000 : 200,000}",
        captain: "Boosts ATK by 4x following a chain of Good > Great > Perfect hits"
    },
    579: {
        special: "Randomly changes [BLOCK] orbs into either [QCK] or [DEX] orbs, deals 15x character's ATK in QCK damage to all enemies",
        specialName: "Dragon Twister",
        captain: "Boosts ATK of QCK and DEX characters by 1.5x"
    },
    580: {
        special: "Randomly changes [BLOCK] orbs into either [QCK] or [DEX] orbs, deals 15x character's ATK in QCK damage to all enemies",
        specialName: "Dragon Twister",
        captain: "Boosts ATK of QCK and DEX characters by 2x"
    },
    581: {
        special: "Cuts the current HP of each enemy by 7%",
        specialName: "High-Caliber Bazooka",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    582: {
        special: "Deals 10x character's ATK in QCK damage to one enemy, boosts ATK of QCK characters by 1.5x for 1 turn",
        specialName: "Burn Blade",
        captain: "Boosts ATK and HP of Striker characters by 1.5x"
    },
    583: {
        special: "Changes own orb into [INT] and the captain's orb into [DEX], boosts RCV of Shooter characters by 300 for 3 turns",
        specialName: "Disrupting Fire",
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x"
    },
    584: {
        special: "Reduces damage received from PSY enemies by 100% for 1 turn",
        specialName: "Mantra",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, reduces ATK, HP and RCV of all characters by 90%"
    },
    585: {
        special: "Changes the captain's orb into [PSY], recovers 9x character's RCV in HP",
        specialName: "The Bond Bellmere Left Us",
        captain: "Boosts RCV of PSY characters by 1.5x"
    },
    586: {
        special: "Changes the captain's orb into [PSY], recovers 9x character's RCV in HP",
        specialName: "The Bond Bellmere Left Us",
        captain: "Boosts HP and RCV of PSY characters by 1.5x"
    },
    587: {
        special: "Removes Poison, reduces Bind and Despair duration by 2 turns",
        specialName: "Merciful Painkiller",
        captain: "Recovers 3x character's RCV in HP at the end of each turn"
    },
    588: {
        special: "Removes Poison, reduces Bind and Despair duration by 2 turns",
        specialName: "Merciful Painkiller",
        captain: "Recovers 5x character's RCV in HP at the end of each turn"
    },
    589: {
        special: "Boosts ATK of Slasher characters by 1.5x for 1 turn",
        specialName: "Flag of the Rebellion",
        captain: "Boosts ATK of all characters by 1.5x, reduces HP and RCV of all characters by 80%"
    },
    590: {
        special: "Boosts ATK of Slasher characters by 1.5x for 1 turn",
        specialName: "Flag of the Rebellion",
        captain: "Boosts ATK of all characters by 2x, reduces HP and RCV of all characters by 80%"
    },
    596: {
        special: "Deals 20x character's ATK in STR damage to one enemy, reduces the defense of all enemies by 50% for 3 turns",
        specialName: "Rozeo Michelli",
        captain: "Boosts ATK of STR characters by 1.5x, recovers 500 HP at the end of each turn"
    },
    597: {
        special: "Deals 20x character's ATK in STR damage to one enemy, reduces the defense of all enemies by 50% for 3 turns",
        specialName: "Rozeo Michelli",
        captain: "Boosts ATK of STR characters by 1.75x, recovers 750 HP at the end of each turn"
    },
    598: {
        special: "Changes own orb into [INT], switches orbs between slots once",
        specialName: "Split Split Cannon",
        captain: "Boosts ATK of characters with fewer than 3 stars by 2.5x"
    },
    599: {
        special: "Changes own orb into [INT], switches orbs between slots once",
        specialName: "Split Split Cannon",
        captain: "Boosts ATK of characters with fewer than 3 stars by 3x"
    },
    600: {
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of PSY characters by 1.3x for 2 turns",
        specialName: "Sword Draw - Single Flash",
        captain: "Boosts ATK of PSY characters by 1.5x"
    },
    601: {
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of PSY characters by 1.3x for 2 turns",
        specialName: "Sword Draw - Single Flash",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    602: {
        special: "Reduces crew's current HP by 90%, deals 20,000 fixed damage to all enemies, boosts ATK of QCK characters by 2x for 1 turn",
        specialName: "200,000,000 Volt Amaru",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    603: {
        special: "Reduces crew's current HP by 90%, deals 20,000 fixed damage to all enemies, boosts ATK of QCK characters by 2x for 1 turn",
        specialName: "200,000,000 Volt Amaru",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of QCK characters by 2.25x, recovers 5x character's RCV in HP at the end of each turn",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of [QCK] characters by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Aquire Sailor Ability 2: If this character has an [QCK] orb and you hit a Perfect with him, keep his [QCK] orb for the next turn" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
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
    604: {
        special: "Cuts the current HP of each enemy by 10%, changes [QCK] orbs into [DEX] orbs",
        specialName: "Diable Jambe: Extra Hachis Hash",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    605: {
        special: "Cuts the current HP of each enemy by 10%, changes [QCK] orbs into [DEX] orbs",
        specialName: "Diable Jambe: Extra Hachis Hash",
        captain: "Boosts ATK of Fighter characters by 2x, reduces damage received by 20%"
    },
    606: {
        special: "Deals 20x character's ATK in DEX damage to one enemy, changes adjacent orbs into [RCV] orbs",
        specialName: "Red Leg Kick",
        captain: "Boosts ATK of Fighter characters by 2x if HP is above 50% at the start of the turn"
    },
    607: {
        special: "Deals 20x character's ATK in DEX damage to one enemy, changes adjacent orbs into [RCV] orbs",
        specialName: "Red Leg Kick",
        captain: "Boosts ATK of Fighter characters by 2.5x if HP is above 50% at the start of the turn"
    },
    608: {
        special: "For 1 turn, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Wicked Strength"
    },
    609: {
        special: "Changes the captain's orb into [RCV] and randomizes every other orb",
        specialName: "Wicked Spirit"
    },
    610: {
        special: "Changes [TND] orbs into [RCV] orbs",
        specialName: "[TND] Slot Change [RCV]"
    },
    611: {
        special: "Changes adjacent orbs into [RCV] orbs",
        specialName: "[RCV] Slot Storm"
    },
    612: {
        special: "Boosts ATK and RCV of all characters by 45 for 1 turn, reduces damage received by 45% for 1 turn",
        specialName: "45-Degree Joy",
        captain: "Boosts ATK of Slasher characters by 1.5x"
    },
    613: {
        special: "Boosts ATK and RCV of all characters by 45 for 1 turn, reduces damage received by 45% for 1 turn",
        specialName: "45-Degree Joy",
        captain: "Boosts ATK, HP and RCV of Slasher characters by 1.5x"
    },
    614: {
        special: "Reduces the defense of all enemies by 50% for 1 turn, deals 10x character's ATK in PSY damage to all enemies",
        specialName: "Demolisher Chop",
        captain: "Boosts ATK of characters with cost 20 or less by 2.25x if HP is below 30% at the start of the turn"
    },
    615: {
        special: "Deals random STR damage to one enemy",
        specialName: "Demolisher Axe"
    },
    616: {
        special: "Changes the captain's orb into STR",
        specialName: "Demolisher Spear"
    },
    617: {
        special: "Boosts ATK of Shooter characters by 1.2x for 1 turn",
        specialName: "Demolisher Cannon"
    },
    618: {
        special: "Deals 20x character's ATK in STR damage to one enemy",
        specialName: "Mach Punch"
    },
    619: {
        special: "Cuts the current HP of each enemy by 5%",
        specialName: "Slight Break"
    },
    620: {
        special: "Changes [INT] orbs into [QCK] orbs",
        specialName: "[INT] Slot Change [QCK]"
    },
    621: {
        special: "Changes [INT] orbs into [STR] orbs",
        specialName: "[INT] Slot Change [STR]"
    },
    622: {
        special: "Boosts RCV of all characters by 100 for 3 turns",
        specialName: "Patch Job"
    },
    623: {
        special: "Recovers 3x character's RCV in HP at the end of each turn for 5 turns",
        specialName: "Auto Repair"
    },
    624: {
        special: "Slightly boosts chances of getting [PSY] orbs for 3 turns",
        specialName: "Slot Rate Up [PSY]"
    },
    625: {
        special: "Slightly boosts chances of getting [INT] orbs for 3 turns",
        specialName: "Slot Rate Up [INT]"
    },
    626: {
        special: "Deals 13x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Burst"
    },
    627: {
        special: "Randomizes all orbs",
        specialName: "Slot Shuffle"
    },
    628: {
        special: "Deals 15,000 fixed damage to one enemy",
        specialName: "Keel Crusher",
        specialNotes: "#{fixed}"
    },
    629: {
        special: "Empties all slots including those with [BLOCK] orbs, deals random INT damage to all enemies",
        specialName: "Master Nail",
        captain: "Boosts ATK of characters with 3 or fewer stars by 2x"
    },
    630: {
        special: "Randomly changes all orbs into either [QCK] or [DEX] orbs, deals random QCK damage to all enemies",
        specialName: "Tempest Kick: Slaughter",
        specialNotes: "#{random : 5,000 : 15,000}",
        captain: "Boosts ATK of Slasher characters by 1.5x"
    },
    631: {
        special: "Randomly changes all orbs into either [QCK] or [DEX] orbs, deals random QCK damage to all enemies",
        specialName: "Tempest Kick: Slaughter",
        specialNotes: "#{random : 5,000 : 15,000}",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    632: {
        special: "Randomly changes all orbs into either [STR], [PSY] or [INT] orbs, deals random STR damage to all enemies, reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Finger Pistol: Yellow Lotus",
        captain: "Boosts ATK of Fighter characters by 1.5x",
        specialNotes: "#{random : 2,000 : 20,000}"
    },
    633: {
        special: "Randomly changes all orbs into either [STR], [PSY] or [INT] orbs, deals random STR damage to all enemies, reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Finger Pistol: Yellow Lotus",
        captain: "Boosts ATK of Fighter characters by 2x",
        specialNotes: "#{random : 2,000 : 20,000}"
    },
    634: {
        special: "Boosts chances of getting [QCK] and [PSY] orbs for 3 turns, boosts ATK of QCK and PSY characters by 1.2x for 3 turns",
        specialName: "Guiding Mermaid Voice",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK and RCV of QCK and PSY characters by 1.25x"
    },
    635: {
        special: "Boosts chances of getting [QCK] and [PSY] orbs for 3 turns, boosts ATK of QCK and PSY characters by 1.2x for 3 turns",
        specialName: "Guiding Mermaid Voice",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK and RCV of QCK and PSY characters by 1.5x"
    },
    636: {
        special: "Binds himself for 3 turns, reduces damage received by 50% for 3 turns, recovers 3.5x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Wretched Ballade",
        captain: "Boosts ATK of characters with cost 2 or less by 3x"
    },
    637: {
        special: "Cuts the current HP of each enemy by 8%, boosts ATK against enemies with increased defense by 1.3x for 1 turn",
        specialName: "Hachi Ink Jet",
        captain: "Recovers 618 HP at the end of each turn, boosts ATK of Slasher characters by 1.5x"
    },
    638: {
        special: "Changes [PSY] and [INT] orbs into [QCK] orbs, reduces Bind duration by 1 turn",
        specialName: "Bohemian Reverse Slash",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Slasher characters by 2x",
        sailor: "Restores his own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    639: {
        special: "Changes [PSY] and [INT] orbs into [QCK] orbs, reduces Bind duration by 1 turn",
        specialName: "Bohemian Reverse Slash",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Slasher characters by 2x",
        sailor: "Restores his own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    640: {
        special: "Changes own orb into [DEX], deals several times the character's ATK in DEX damage to one enemy",
        specialNotes: "#{specialProportional : lower : 50 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Pirate Brothers: Twin Strike",
        captain: "Boosts ATK of Fighter characters by 2x, deals 2x character's ATK in DEX damage to all enemies at the end of each turn",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK of Fighter characters by 100"
    },
    641: {
        special: "Changes own orb into [DEX], deals several times the character's ATK in DEX damage to one enemy",
        specialNotes: "#{specialProportional : lower : 50 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Pirate Brothers: Twin Strike",
        captain: "Boosts ATK of Fighter characters by 2.25x, deals 2x character's ATK in DEX damage to all enemies at the end of each turn",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK of Fighter characters by 100"
    },
    642: {
        special: "Reduces crew's current HP by 30%, deals 10x character's ATK in fixed damage to one enemy, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{fixed} #{orb : 1.75x}",
        specialName: "Raging Greatsword",
        captain: "Boosts ATK of PSY characters by 2.5x if HP is below 30% at the start of the turn",
        sailor: "Recovers 2 turns of Paralysis on self"
    },
    643: {
        special: "Reduces crew's current HP by 30%, deals 10x character's ATK in fixed damage to one enemy, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{fixed} #{orb : 1.75x}",
        specialName: "Raging Greatsword",
        captain: "Boosts ATK of PSY characters by 3x if HP is below 30% at the start of the turn",
        sailor: "Recovers 2 turns of Paralysis on self",
        limit: [
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Aquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 1: Reduces Blindness duration by 2 turns" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [INT] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by ?%",
                    "Level 3: Reduce damage taken from [STR] characters by ?%",
                    "Level 4: Reduce damage taken from [STR] characters by ?%",
                    "Level 5: Reduce damage taken from [STR] characters by ?%"
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
    644: {
        special: "Reduces Bind and Despair duration by 2 turns, boosts ATK against delayed enemies by 1.2x for 3 turns",
        specialName: "Witch's Icebreaker",
        captain: "Boosts ATK of INT characters by 2x",
        sailor: "Boosts base ATK and RCV of INT characters by 20"
    },
    645: {
        special: "Reduces Bind and Despair duration by 2 turns, boosts ATK against delayed enemies by 1.2x for 3 turns",
        specialName: "Witch's Icebreaker",
        captain: "Boosts ATK of INT characters by 2.5x",
        sailor: "Boosts base ATK and RCV of INT characters by 20"
    },
    646: {
        special: "Deals 20x character's ATK in STR damage to all enemies, boosts chances of getting [STR] orbs for 3 turns",
        specialName: "Vanguard Breaker",
        captain: "Boosts ATK of Shooter characters by 2.5x if HP is below 30% at the start of the turn",
        sailor: "Boosts base HP of STR characters by 30"
    },
    647: {
        special: "Deals 20x character's ATK in STR damage to all enemies, boosts chances of getting [STR] orbs for 3 turns",
        specialName: "Vanguard Breaker",
        captain: "Boosts ATK of Shooter characters by 2.75x if HP is below 30% at the start of the turn",
        sailor: "Boosts base HP of STR characters by 30"
    },
    648: {
        special: "Recovers 100x character's RCV in HP, amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Blue Flame Kick",
        captain: "Reduces damage received by 30% if HP is above 70% at the start of the turn, boosts ATK of QCK and PSY characters by 2.75x if HP is above 70% at the start the turn"
    },
    649: {
        special: "Recovers 100x character's RCV in HP, amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Blue Flame Kick",
        captain: "Reduces damage received by 30% if HP is above 70% at the start of the turn, boosts ATK of QCK and PSY characters by 2.75x if HP is above 70% at the start the turn"
    },
    650: {
        special: "Deals 5,000 fixed damage to one enemy, amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{fixed} #{orb : 1.5x}",
        specialName: "Thunder Lance Tempo",
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.5x"
    },
    651: {
        special: "Deals 5,000 fixed damage to one enemy, amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{fixed} #{orb : 1.5x}",
        specialName: "Thunder Lance Tempo",
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.5x"
    },
    652: {
        special: "Cuts the current HP of each enemy by 20%, reduces damage received by 50% for 1 turn",
        specialName: "Heart-Smashing Horn",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of DEX characters by 2x if they have matching orbs"
    },
    653: {
        special: "Cuts the current HP of each enemy by 20%, reduces damage received by 50% for 1 turn",
        specialName: "Heart-Smashing Horn",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of DEX characters by 2.25x if they have matching orbs"
    },
    654: {
        special: "Cuts the current HP of each enemy by 20%, reduces damage received by 50% for 1 turn",
        specialName: "Heart-Smashing Horn",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of DEX characters by 2.75x if they have matching orbs"
    },
    655: {
        special: "Changes [EMPTY] and [TND] orbs into [STR] orbs, deals 10x character's ATK in STR damage to one enemy, amplifies the effect of orbs by 1.25x for 2 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Tooth Gum",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    656: {
        special: "Changes [EMPTY] and [TND] orbs into [STR] orbs, deals 10x character's ATK in STR damage to one enemy, amplifies the effect of orbs by 1.25x for 2 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Tooth Gum",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of STR characters by 2x"
    },
    657: {
        special: "Randomly changes [INT] and [PSY] orbs into either [STR] or [EMPTY] orbs",
        specialName: "Forearm Sledge",
        captain: "Boosts ATK of Fighter characters by 1.5x"
    },
    658: {
        special: "Randomly changes all orbs into either [INT] or [PSY] orbs",
        specialName: "Lipowertzer",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    659: {
        special: "Reduces Bind and Despair duration by 2 turns, reduces damage received by 50% for 2 turns",
        specialName: "Gum-Gum Balloon Swim",
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row"
    },
    660: {
        special: "Delays all enemies for 2 turns, reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Atlas Comet",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    661: {
        special: "Delays all enemies for 2 turns, reduces the defense of all enemies by 50% for 2 turns",
        specialName: "Atlas Comet",
        captain: "Boosts ATK of Shooter characters by 2x, reduces cooldown of all specials by 1 turn at the start of the fight"
    },
    662: {
        special: "Deals 13x character's ATK in PSY damage to one enemy, randomizes all orbs other than [PSY]",
        specialName: "Tornado Tempo - Beach Side",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    663: {
        special: "Deals PSY damage to one enemy according to HP, recovers 5x character's RCV in HP at the end of each turn for 5 turns",
        specialNotes: "The exact damage is proportional to the crew's remaining HP and is higher the lower the HP is. The formula used is 80000 * (1 - (current HP) / (total HP))",
        specialName: "Vivi's Important Security Guard",
        captain: "Recovers 2x character's RCV in HP at the end of each turn"
    },
    664: {
        special: "Deals PSY damage to one enemy according to HP, recovers 5x character's RCV in HP at the end of each turn for 5 turns",
        specialNotes: "The exact damage is proportional to the crew's remaining HP and is higher the lower the HP is. The formula used is 80000 * (1 - (current HP) / (total HP))",
        specialName: "Vivi's Important Security Guard",
        captain: "Recovers 3x character's RCV in HP at the end of each turn"
    },
    665: {
        special: "Changes own orb into [QCK], boosts ATK against enemies with reduced defense by 1.3x for 2 turns",
        specialName: "Let's Go! Suna Suna Clan!!",
        captain: "Boosts ATK of all characters by 1.2x, reduces HP and RCV of all characters by 80%"
    },
    666: {
        special: "Changes own orb into [QCK], boosts ATK against enemies with reduced defense by 1.3x for 2 turns",
        specialName: "Let's Go! Suna Suna Clan!!",
        captain: "Boosts ATK of all characters by 1.75x, reduces HP and RCV of all characters by 80%"
    },
    667: {
        special: "Protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "King's Chopper",
        specialNotes: "#{zombie}",
        captain: "Reduces damage received by 10%, boosts ATK of all characters by 1.5x"
    },
    668: {
        special: "Boosts ATK of Free Spirit characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of Free Spirit characters by 2x in the following turn.",
        specialName: "Dragon's Claw",
        captain: "Boosts HP and RCV of all characters by 1.2x, boosts ATK of Free Spirit characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : higher : 2 + 0.75 * (remaining HP) / (total HP) : 2.75 : 2}"
    },
    669: {
        special: "Boosts ATK of Free Spirit characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of Free Spirit characters by 2x in the following turn.",
        specialName: "Dragon's Claw",
        captain: "Boosts HP and RCV of all characters by 1.2x, boosts ATK of Free Spirit characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : higher : 2 + 0.75 * (remaining HP) / (total HP) : 2.75 : 2}"
    },
    670: {
        special: "Boosts ATK of Fighter characters by 1.75x for 1 turn",
        specialName: "Fishman Karate! True Fist Thrust of the Revolutionaries",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    671: {
        special: "Boosts ATK of Fighter characters by 1.75x for 1 turn",
        specialName: "Fishman Karate! True Fist Thrust of the Revolutionaries",
        captain: "Boosts ATK of Fighter characters by 2.25x and their RCV by 1.5x"
    },
    672: {
        special: "Cuts the current HP of each enemy by 20%, changes own orb into [STR]",
        specialName: "Four Thousand Tile True Punch",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    673: {
        special: "Cuts the current HP of each enemy by 20%, changes own orb into [STR]",
        specialName: "Four Thousand Tile True Punch",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Fighter characters by 2x"
    },
    674: {
        special: "Removes Poison, reduces damage received by 50% for 2 turns, recovers 13x character's RCV in HP at the end of each turn for 2 turns",
        specialName: "Emporio Healing Hormone",
        captain: "Boosts ATK of Free Spirit characters by 2x"
    },
    675: {
        special: "Removes Poison, reduces damage received by 50% for 2 turns, recovers 13x character's RCV in HP at the end of each turn for 2 turns",
        specialName: "Emporio Healing Hormone",
        captain: "Boosts ATK of Free Spirit characters by 2.5x"
    },
    676: {
        special: "Reduces any damage received above 5,000 HP by 97% for 3 turns",
        specialNotes: "The exact formula for the damage received is: 5000 + ((total damage) - 5000) * 0.03",
        specialName: "KEEP OUT",
        captain: "Boosts ATK of Slasher characters by 1.5x, deals 5x character's ATK in QCK damage to all enemies at the end of each turn"
    },
    677: {
        special: "Reduces any damage received above 5,000 HP by 97% for 3 turns",
        specialNotes: "The exact formula for the damage received is: 5000 + ((total damage) - 5000) * 0.03",
        specialName: "KEEP OUT",
        captain: "Boosts ATK of Slasher characters by 1.5x, deals 5x character's ATK in QCK damage to all enemies at the end of each turn"
    },
    678: {
        special: "Reduces damage received by 50% for 1 turn, locks all orbs for 1 turn",
        specialName: "Cien Fleur Spider Net",
        captain: "Boosts ATK and RCV of PSY characters by 1.2x, boosts chances of getting [PSY] orbs"
    },
    679: {
        special: "Reduces damage received by 50% for 1 turn, locks all orbs for 1 turn",
        specialName: "Cien Fleur Spider Net",
        captain: "Boosts ATK and RCV of PSY characters by 1.5x, boosts chances of getting [PSY] orbs"
    },
    680: {
        special: "Recovers 5x character's RCV in HP, boosts ATK and RCV of DEX characters by 1.25x for 2 turns",
        specialName: "Midsummer Relax Time"
    },
    681: {
        special: "Recovers 5x character's RCV in HP, boosts ATK and RCV of DEX characters by 1.25x for 2 turns",
        specialName: "Midsummer Relax Time",
        captain: "Boosts ATK and RCV of Striker characters by 1.5x"
    },
    682: {
        special: "Recovers a random amount of HP, reduces damage received by 50% for 2 turns",
        specialName: "Transcendental Serenity Healing"
    },
    683: {
        special: "Recovers a random amount of HP, reduces damage received by 50% for 2 turns",
        specialName: "Transcendental Serenity Healing",
        captain: "Boosts ATK and RCV of Fighter characters by 1.5x"
    },
    684: {
        special: "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 turn",
        specialName: "Romantic Ghost"
    },
    685: {
        special: "Recovers 3x character's RCV in HP, reduces damage received by 80% for 1 turn",
        specialName: "Romantic Ghost",
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x"
    },
    686: {
        special: "Delays all enemies for 1 turn, recovers 3x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Captivating Perfume Dance - Relaxation",
        captain: "Boosts ATK and RCV of Slasher characters by 1.5x"
    },
    687: {
        special: "Deals 13x character's ATK in STR damage to all enemies, boosts ATK of Free Spirit characters by 1.3x for 1 turn",
        specialName: "First Spear of the Battle",
        captain: "Boosts ATK of Free Spirit characters by 1.5x"
    },
    688: {
        special: "Deals 13x character's ATK in STR damage to all enemies, boosts ATK of Free Spirit characters by 1.3x for 1 turn",
        specialName: "First Spear of the Battle",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Free Spirit characters by 2x"
    },
    689: {
        special: "Amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Botanist's Great Discovery",
        captain: "Boosts ATK and RCV of Slasher characters by 1.2x"
    },
    690: {
        special: "Amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Botanist's Great Discovery",
        captain: "Boosts ATK and RCV of Slasher characters by 1.5x"
    },
    691: {
        special: "Changes [PSY] orbs into [DEX] orbs",
        specialName: "[PSY] Slot Change [DEX]"
    },
    692: {
        special: "Changes [PSY] orbs into [QCK] orbs",
        specialName: "[PSY] Slot Change [QCK]"
    },
    693: {
        special: "Changes [DEX] orbs into [PSY] orbs",
        specialName: "[DEX] Slot Change [PSY]"
    },
    694: {
        special: "Deals 13x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Burst"
    },
    695: {
        special: "Cuts the current HP of each enemy by 5%",
        specialName: "Slight Break"
    },
    696: {
        special: "Changes [PSY] orbs into [DEX] orbs",
        specialName: "[PSY] Slot Change [DEX]",
        captain: "Boosts ATK of Striker characters by 1.75x"
    },
    697: {
        special: "Changes [PSY] orbs into [QCK] orbs",
        specialName: "[PSY] Slot Change [QCK]",
        captain: "Boosts ATK of Shooter characters by 1.75x"
    },
    698: {
        special: "Changes [DEX] orbs into [PSY] orbs",
        specialName: "[DEX] Slot Change [PSY]",
        captain: "Boosts ATK of Slasher characters by 1.75x"
    },
    699: {
        special: "Deals 13x character's ATK in character's type damage to all enemies",
        specialName: "Hyper Burst",
        captain: "Boosts ATK of Shooter characters by 500, reduces damage received by 10%"
    },
    700: {
        special: "Cuts the current HP of each enemy by 5%",
        specialName: "Slight Break",
        captain: "Boosts ATK of Fighter characters by 1.75x"
    },
    701: {
        special: "Deals 15x character's ATK in PSY damage to all enemies, changes own orb into [PSY]",
        specialName: "Oimo Press",
        captain: "Boosts HP of PSY characters by 2.25x"
    },
    702: {
        special: "Seals himself for 5 turns, reduces damage received by 30% for 5 turns",
        specialName: "Kashi Swing",
        captain: "Boosts HP of INT characters by 2.25x"
    },
    703: {
        special: "Deals 5x character's ATK in QCK damage to all enemies",
        specialName: "Arm Claw of the Watchdog"
    },
    704: {
        special: "Deals 9x character's ATK in STR damage to all enemies, reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Companion's Guilt"
    },
    705: {
        special: "Randomly changes [PSY], [INT], [TND], [RCV] and [EMPTY] orbs into [STR], [DEX] or [QCK] orbs",
        specialName: "Guilty Verdict - \"Slow Death Penalty\"",
        captain: "Boosts ATK and HP of STR characters, DEX characters and QCK characters by 1.25x"
    },
    706: {
        special: "Changes own orb and the captain's orb into [STR]",
        specialName: "Air Door",
        captain: "Boosts ATK of STR characters by 1.5x"
    },
    707: {
        special: "Changes own orb and the captain's orb into [STR]",
        specialName: "Air Door",
        captain: "Boosts ATK and HP of STR characters by 1.5x"
    },
    708: {
        special: "Reduces Bind and Despair duration by 3 turns",
        specialName: "Cien Fleur - Wing",
        captain: "Boosts ATK and RCV of PSY characters by 1.2x"
    },
    709: {
        special: "Reduces Bind and Despair duration by 3 turns",
        specialName: "Cien Fleur - Wing",
        captain: "Boosts ATK and RCV of PSY characters by 1.5x"
    },
    710: {
        special: "Empties all slots with [BLOCK] orbs, boosts ATK of Shooter characters by 1.25x for 3 turns, deals 15x character's ATK in PSY damage to all enemies",
        specialName: "Coup de Vent",
        captain: "Boosts ATK of Shooter characters by 1.5x"
    },
    711: {
        special: "Empties all slots with [BLOCK] orbs, boosts ATK of Shooter characters by 1.25x for 3 turns, deals 15x character's ATK in PSY damage to all enemies",
        specialName: "Coup de Vent",
        captain: "Boosts ATK of Shooter characters by 2x"
    },
    712: {
        special: "Deals 15x character's ATK in QCK damage to one enemy, boosts ATK of the characters in the top row by 1.5x for 2 turns",
        specialNotes: "The special boosts the attack of only the crew's captain and the currently selected friend captain.",
        specialName: "Sky Knight's Javelin",
        captain: "Boosts ATK of Striker characters by 2x if HP is above 50% at the start of the turn"
    },
    713: {
        special: "Deals 15x character's ATK in QCK damage to one enemy, boosts ATK of the characters in the top row by 1.5x for 2 turns",
        specialNotes: "The special boosts the attack of only the crew's captain and the currently selected friend captain.",
        specialName: "Sky Knight's Javelin",
        captain: "Boosts ATK of Striker characters by 2.5x if HP is above 50% at the start of the turn"
    },
    714: {
        special: "Randomizes slots with [STR], [QCK], [INT] or [PSY] orbs",
        specialName: "Pegasus' Neigh"
    },
    715: {
        special: "Boosts ATK and RCV of Free Spirit characters by 1.5x for 2 turns, seals herself for 3 turns",
        specialName: "Angel's Harp - Healing",
        captain: "Boosts RCV of all characters by 2x if HP is below 30% at the start of the turn"
    },
    716: {
        special: "Boosts ATK and RCV of Free Spirit characters by 1.5x for 2 turns, seals herself for 3 turns",
        specialName: "Angel's Harp - Healing",
        captain: "Boosts RCV of all characters by 5x if HP is below 30% at the start of the turn"
    },
    717: {
        special: "Deals 50% of the damage dealt in the previous turn as typeless damage to all enemies",
        specialNotes: "The special only includes the damage inflicted through normal attacks. If the enemy dies by End-Of-Turn damage, your inflicted Damage dealt last turn will be 0.",
        specialName: "Black Sword - Lightning Slash",
        captain: "Boosts ATK of Slasher characters by a variable factor between 2x and 2.75x based on the timing of the attack of the previous unit in the chain",
        captainNotes: "A hit below Good or a Miss will boost the ATK of the next unit by 2x, a Good hit by 2.25x, a Great hit by 2.5x and a Perfect hit by 2.75x. This bonus is applied only to Slasher characters."
    },
    718: {
        special: "Deals 50% of the damage dealt in the previous turn as typeless damage to all enemies",
        specialNotes: "The special only includes the damage inflicted through normal attacks. If the enemy dies by End-Of-Turn damage, your inflicted Damage dealt last turn will be 0.",
        specialName: "Black Sword - Lightning Slash",
        captain: "Boosts ATK of Slasher characters by a variable factor between 2x and 2.75x based on the timing of the attack of the previous unit in the chain",
        captainNotes: "A hit below Good or a Miss will boost the ATK of the next unit by 2x, a Good hit by 2.25x, a Great hit by 2.5x and a Perfect hit by 2.75x. This bonus is applied only to Slasher characters.",
        limit: [
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts base HP of Slasher characters by 120" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 2: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 75" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK of Slasher characters by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Aquire Potential 3: Critical Hit" },
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
                    "Level 2: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 80% chance to deal 8% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 90% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ]
    },
    719: {
        special: "Boosts ATK of Cerebral characters by 2x if HP is below 30% when the special is activated, otherwise boosts ATK of Cerebral characters by 1.5x, deals 20x character's ATK in DEX damage to all enemies",
        specialName: "Sables: Pesado",
        captain: "Boosts ATK of Cerebral characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : 1.5 + 1.75 * (1 - (remaining HP) / (total HP)) : 1.5 : 3.25}"
    },
    720: {
        special: "Boosts ATK of Cerebral characters by 2x if HP is below 30% when the special is activated, otherwise boosts ATK of Cerebral characters by 1.5x, deals 20x character's ATK in DEX damage to all enemies",
        specialName: "Sables: Pesado",
        captain: "Boosts ATK of Cerebral characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : 1.5 + 1.75 * (1 - (remaining HP) / (total HP)) : 1.5 : 3.25}"
    },
    721: {
        special: "Randomizes all orbs, including [BLOCK] orbs",
        specialName: "Screw Drop Kick",
        captain: "Boosts ATK of Fighter characters by 1.5x if HP is is above 99% at the start of the turn"
    },
    722: {
        special: "Randomizes all orbs, including [BLOCK] orbs",
        specialName: "Screw Drop Kick",
        captain: "Boosts ATK of Fighter characters by 2x if HP is is above 99% at the start of the turn"
    },
    723: {
        special: "Reduces crew's current HP by 80%, deals 5x the amount of HP subtracted in typeless damage to all enemies, reduces damage received by 90% for 1 turn",
        specialName: "Right Angle Flying Bird: Bone Phoenix",
        captain: "Boosts ATK of Slasher characters by 1.5x, recovers 1.2x character's RCV in HP at the end of each turn"
    },
    724: {
        special: "Reduces crew's current HP by 80%, deals 5x the amount of HP subtracted in typeless damage to all enemies, reduces damage received by 90% for 1 turn",
        specialName: "Right Angle Flying Bird: Bone Phoenix",
        captain: "Boosts ATK of Slasher characters by 1.75x, recovers 1.5x character's RCV in HP at the end of each turn"
    },
    725: {
        special: "Changes [TND] orbs into [QCK] orbs, switches orbs between slots twice",
        specialName: "Peacock String Slasher",
        captain: "Recovers 1,000 HP at the end of each turn"
    },
    726: {
        special: "Changes [TND] orbs into [QCK] orbs, switches orbs between slots twice",
        specialName: "Peacock String Slasher",
        captain: "Recovers 2,000 HP at the end of each turn"
    },
    727: {
        special: "Deals 10x character's ATK in DEX damage to all enemies, reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Gum-Gum Gatling",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Free Spirit and Fighter characters by 1.75x"
    },
    728: {
        special: "Randomizes all orbs, recovers 6x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Sheep Cloud Relaxing Bubbles",
        captain: "Boosts ATK and RCV of DEX characters by 1.2x, slightly boosts chances of getting [DEX] orbs"
    },
    729: {
        special: "Randomizes all orbs, recovers 6x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Sheep Cloud Relaxing Bubbles",
        captain: "Boosts ATK and RCV of DEX characters by 1.2x, boosts chances of getting [DEX] orbs"
    },
    730: {
        special: "Reduces crew's current HP by 99%, deals 2x the amount of HP subtracted in INT damage to all enemies, boosts ATK of INT characters by 1.5x for 1 turn",
        specialName: "Rankyaku - Lupus Fall",
        captain: "Boosts ATK and HP of INT characters by 1.2x, deals 9 HP as fixed damage to all enemies at the end of each turn",
        captainNotes: "#{fixed}"
    },
    731: {
        special: "Reduces crew's current HP by 99%, deals 2x the amount of HP subtracted in INT damage to all enemies, boosts ATK of INT characters by 1.5x for 1 turn",
        specialName: "Rankyaku - Lupus Fall",
        captain: "Boosts ATK and HP of INT characters by 1.5x, deals 9 HP as fixed damage to all enemies at the end of each turn",
        captainNotes: "#{fixed}"
    },
    732: {
        special: "Deals 13x character's ATK in STR damage to one enemy, reduces damage received by 50% for 1 turn",
        specialName: "Tekkai Dama",
        captain: "Boosts ATK of STR characters by 1.5x, reduces damage received by 10%"
    },
    733: {
        special: "Deals 13x character's ATK in STR damage to one enemy, reduces damage received by 50% for 1 turn",
        specialName: "Tekkai Dama",
        captain: "Boosts ATK of STR characters by 1.5x, reduces damage received by 20%"
    },
    734: {
        special: "For 1 turn, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Life Return - Digestion, Absorption",
        captain: "Boosts ATK and RCV of PSY characters by 1.2x"
    },
    735: {
        special: "For 1 turn, boosts the amount healed by RCV orbs by 1.5x, then 2x, then 2.5x from the third crew member onward",
        specialName: "Life Return - Digestion, Absorption",
        captain: "Boosts ATK and RCV of PSY characters by 1.5x"
    },
    736: {
        special: "Deals 20x character's ATK in STR damage to all enemies, changes [QCK] orbs into [STR] orbs",
        specialName: "Fierce Smash",
        captain: "Boosts ATK of Slasher characters by 2.5x if HP is above 50% at the start of the turn"
    },
    737: {
        special: "Changes [RCV] orbs into [QCK] orbs, changes adjacent orbs into [QCK] orbs",
        specialName: "Shigan - Bachi",
        captain: "Boosts ATK of Fighter characters by 2.75x if HP is below 30% at the start of the turn"
    },
    738: {
        special: "Deals 200x character's ATK in INT damage to one enemy",
        specialName: "Ivory Rush",
        captain: "Boosts ATK of characters with cost 21 or more by 2x"
    },
    739: {
        special: "Reduces Bind duration by 5 turns, randomizes all orbs",
        specialName: "Coup de Boo",
        captain: "Boosts ATK of Free Spirit characters by 2x"
    },
    740: {
        special: "Deals 10x character's ATK in QCK damage to all enemies, boosts ATK against enemies with increased defense by 1.3x for 2 turns",
        specialName: "Rankyaku - Sen",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight"
    },
    741: {
        special: "Deals 10x character's ATK in QCK damage to all enemies, boosts ATK against enemies with increased defense by 1.3x for 2 turns",
        specialName: "Rankyaku - Sen",
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight"
    },
    742: {
        special: "Amplifies the effect of orbs by 1.25x for 2 turns, reduces the defense of all enemies by 80% for 2 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Ramen Beam",
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.2x"
    },
    743: {
        special: "Amplifies the effect of orbs by 1.25x for 2 turns, reduces the defense of all enemies by 80% for 2 turns",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Ramen Beam",
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x"
    },
    744: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "Flame Fence",
        captain: "Boosts ATK of Free Spirit characters by 2x"
    },
    745: {
        special: "Reduces damage received by 50% for 3 turns",
        specialName: "Flame Fence",
        captain: "Boosts ATK of Free Spirit characters by 2.5x"
    },
    746: {
        special: "Deals 10x character's ATK in QCK damage to all enemies, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Megalo Assault!",
        specialNotes: "#{zombie}",
        captain: "Protects from defeat as long as HP is above 30%",
        captainNotes: "#{zombie}"
    },
    747: {
        special: "Deals 35x character's ATK in STR damage to one enemy, boosts chances of getting matching orbs for 3 turns",
        specialName: "Rokuougan",
        captain: "Boosts ATK of Powerhouse characters by 3x if they have a matching orb, by 2.5x otherwise, reduces crew's RCV to 0"
    },
    748: {
        special: "Deals 35x character's ATK in STR damage to one enemy, boosts chances of getting matching orbs for 3 turns",
        specialName: "Rokuougan",
        captain: "Boosts ATK of Powerhouse characters by 3x if they have a matching orb, by 2.5x otherwise, reduces crew's RCV to 0",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Powerhouse characters by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 2: Enrage" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire Sailor Ability 2: Makes [RCV] and [TND] orbs \"beneficial\" for Powerhouse characters" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by ?%",
                    "Level 3: Reduce damage taken from [DEX] characters by ?%",
                    "Level 4: Reduce damage taken from [DEX] characters by ?%",
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
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turns",
                    "Level 3: Reduces No Healing duration by ? turns",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    749: {
        special: "Deals random DEX damage to all enemies, randomizes all orbs",
        specialName: "Tempest Kick: Sky Slicer",
        specialNotes: "#{random : 10,000 : 90,000}",
        captain: "Boosts ATK of DEX characters by 1.5x, boosts damage of DEX specials by 1.5x",
        captainNotes: "#{noFixedPerc}"
    },
    750: {
        special: "Deals random DEX damage to all enemies, randomizes all orbs",
        specialName: "Tempest Kick: Sky Slicer",
        specialNotes: "#{random : 10,000 : 90,000}",
        captain: "Boosts ATK of DEX characters by 2x, boosts damage of DEX specials by 2x",
        captainNotes: "#{noFixedPerc}",
        limit: [
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 1: When any other character uses a special, reduces own cooldown by 1 turn" },
            { "description": "Aquire new Captain Ability: Boosts ATK of [DEX] characters by 2.25x and their HP by 1.25x and boosts damage of [DEX] specials by 2x" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK and HP of Slasher and Powerhouse characters by 50" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by ?%",
                    "Level 3: Reduce damage taken from [DEX] characters by ?%",
                    "Level 4: Reduce damage taken from [DEX] characters by ?%",
                    "Level 5: Reduce damage taken from [DEX] characters by ?%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turn",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ]
    },
    751: {
        special: "Reduces damage received in the next turn by 50% if the special is activated with more than 50% health remaining, by 80% if activated with less than 50% but more than 10% health remaining, by 100% if activated with less than 10% health remaining",
        specialName: "Sheep Cloud Tidal Wave",
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x"
    },
    752: {
        special: "Reduces damage received in the next turn by 50% if the special is activated with more than 50% health remaining, by 80% if activated with less than 50% but more than 10% health remaining, by 100% if activated with less than 10% health remaining",
        specialName: "Sheep Cloud Tidal Wave",
        captain: "Boosts ATK of Cerebral characters by 2.25x and their RCV by 1.5x"
    },
    753: {
        special: "Deals 15x character's ATK in QCK damage to one enemy, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{orb : 1.75x}",
        specialName: "Moonlight Ten Finger Pistol",
        captain: "Boosts ATK of Powerhouse characters by 2x"
    },
    754: {
        special: "Deals 15x character's ATK in QCK damage to one enemy, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{orb : 1.75x}",
        specialName: "Moonlight Ten Finger Pistol",
        captain: "Boosts ATK of Powerhouse characters by 2.5x",
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 1: Restores his own special by 1 turn when it is rewinded" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 2: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by ?%",
                    "Level 3: Reduce damage taken from [STR] characters by ?%",
                    "Level 4: Reduce damage taken from [STR] characters by ?%",
                    "Level 5: Reduce damage taken from [STR] characters by ?%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turn",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ]
    },
    755: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Powerhouse characters by 1.75x for 1 turn",
        specialName: "Tekkai - Rin",
        captain: "Boosts ATK of INT characters by 1.5x, reduces damage received from PSY enemies by 20%"
    },
    756: {
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Powerhouse characters by 1.75x for 1 turn",
        specialName: "Tekkai - Rin",
        captain: "Boosts ATK of INT characters by 2x, reduces damage received from PSY enemies by 30%",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 90" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Sailor Ability 1: Makes [STR] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 2: Boosts base HP of Powerhouse characters by 150" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turn",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ]
    },
    757: {
        special: "Changes [DEX] and [QCK] orbs into [PSY] orbs",
        specialName: "Solid Beast Supreme Technique: Owl Strike",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    758: {
        special: "Changes [DEX] and [QCK] orbs into [PSY] orbs",
        specialName: "Solid Beast Supreme Technique: Owl Strike",
        captain: "Boosts ATK of PSY characters by 2x, recovers 3x character's RCV in HP at the end of each turn"
    },
    759: {
        special: "Switches orbs between slots 3 times, locks all orbs for 1 turn",
        specialName: "Life Return: Shishi Finger Pistol",
        captain: "Boosts ATK of STR characters by 2.5x if HP is below 30% at the start of the turn"
    },
    760: {
        special: "Switches orbs between slots 3 times, locks all orbs for 1 turn",
        specialName: "Life Return: Shishi Finger Pistol",
        captain: "Boosts ATK of STR characters by 3x if HP is below 30% at the start of the turn",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for this unit" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Aquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by ?%",
                    "Level 3: Reduce damage taken from [DEX] characters by ?%",
                    "Level 4: Reduce damage taken from [DEX] characters by ?%",
                    "Level 5: Reduce damage taken from [DEX] characters by ?%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turn",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ]
    },
    761: {
        special: "Deals 15x character's ATK in DEX damage to one enemy, boosts ATK of all characters by 1.2x for 1 turn",
        specialName: "Gum-Gum Monster Pistol",
        captain: "Boosts ATK of Fighter characters by 2x"
    },
    762: {
        special: "Boosts ATK of PSY characters by 1.75x for 1 turn",
        specialName: "Impact Beast",
        captain: "Boosts ATK and RCV of PSY characters by 1.5x"
    },
    763: {
        special: "Changes own orb into [STR], switches orbs between slots once",
        specialName: "Franken-Franky Centaur",
        captain: "Boosts ATK of STR characters by 2x"
    },
    764: {
        special: "Recovers 3,000 HP",
        specialName: "Cat Burglar Trick",
        captain: "Boosts ATK and RCV of Striker characters by 1.5x"
    },
    765: {
        special: "Reduces Despair duration by 3 turns",
        specialName: "Scope Magic",
        captain: "Recovers 2x character's RCV in HP at the end of each turn"
    },
    766: {
        special: "Deals 7x character's ATK in QCK damage to all enemies, delays all enemies for 1 turn",
        specialName: "108 Pound Phoenix: Reaper",
        captain: "Boosts ATK of QCK characters by 2x"
    },
    767: {
        special: {
            "japan": "Changes top row orbs into [DEX] orbs, removes blindness",
            "global": "Changes top row orbs into [DEX] orbs, reduces Despair duration by 1 turn"
        },
        specialName: "Ojos Fleur: Thriller",
        captain: "Boosts ATK and RCV of DEX characters by 1.5x"
    },
    768: {
        special: "Recovers 15x character's RCV in HP, changes [TND] orbs into [RCV] orbs",
        specialName: "Hot Rock Stew: Party",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    769: {
        special: "Recovers 4,343 HP, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Lullaby Parry: Horror",
        captain: "Boosts ATK and RCV of INT characters by 1.5x"
    },
    770: {
        special: "Deals 15x character's ATK in STR damage to one enemy, boosts ATK against delayed enemies by 1.3x for 2 turns",
        specialName: "Shigan: Convergence",
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of STR characters by 2x"
    },
    771: {
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK of Cerebral characters by 1.75x for 1 turn",
        specialName: "Moonwalk: Air Walking",
        captain: "Boosts ATK of Cerebral characters by 2.5x"
    },
    772: {
        special: "Cuts the current HP of each enemy by 10%, changes [PSY] and [INT] orbs into [DEX] orbs",
        specialName: "Eight-Sword Style: Brave Warrior's Continuous Attack",
        captain: "Boosts ATK of Slasher characters by 2x, reduces damage received from QCK enemies by 20%"
    },
    773: {
        special: "Reduces any damage received above 3,000 HP by 80% for 1 turn",
        specialNotes: "The exact formula for the damage received is: 3000 + ((total damage) - 3000) * 0.2",
        specialName: "Rust-Rust Fruit",
        captain: "Reduces damage received by 20%"
    },
    774: {
        special: "Randomly changes [TND], [RCV], [EMPTY], [BLOCK] and [BOMB] orbs into either [STR], [DEX], [QCK], [PSY] or [INT] orbs, switches orbs between slots 3 times",
        specialName: "Berry-Berry Fruit",
        captain: "Boosts ATK of Free Spirit characters by 2x"
    },
    775: {
        special: "Deals several times the character's ATK in PSY damage to one enemy",
        specialNotes: "#{specialProportional : lower : 125 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Angry Headbutt",
        captain: "Boosts ATK and HP of Cerebral characters by 1.5x"
    },
    776: {
        specialName: "Boisterous Lucky Shot!!",
        special: "Recovers 5,000 HP, deals 15x character's ATK in PSY damage to one enemy, seals himself for 3 turns",
        captain: "Boosts ATK and RCV of PSY characters by 1.25x"
    },
    777: {
        special: "Recovers 5,000 HP, deals 15x character's ATK in PSY damage to one enemy, seals himself for 3 turns",
        specialName: "Boisterous Lucky Shot!!",
        captain: "Boosts ATK and RCV of PSY characters by 1.75x"
    },
    778: {
        special: "Deals several times the character's ATK in QCK damage to one enemy, changes own orb into [QCK]",
        specialNotes: "#{specialProportional : lower : 125 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Undefeated Sword Technique",
        captain: "Reduces damage received by 20%"
    },
    779: {
        special: "Deals several times the character's ATK in QCK damage to one enemy, changes own orb into [QCK]",
        specialNotes: "#{specialProportional : lower : 125 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Undefeated Sword Technique",
        captain: "Reduces damage received by 25%"
    },
    780: {
        special: "Boosts own ATK by a variable factor for 1 turn",
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated: above 50% HP, the multiplier used is 1.5x; between 20% HP and 50% HP, it's 1.75x; below 20% HP, it's 2x.",
        specialName: "Precept Deification",
        captain: "Boosts ATK of all characters by 2x if HP is below 30% at the start of the turn"
    },
    781: {
        special: "Boosts own ATK by a variable factor for 1 turn",
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated: above 50% HP, the multiplier used is 1.5x; between 20% HP and 50% HP, it's 1.75x; below 20% HP, it's 2x.",
        specialName: "Precept Deification",
        captain: "Boosts ATK of all characters by 2.5x if HP is below 30% at the start of the turn",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: Reduces Paralysis duration for 3 turns for himself" },
            { "description": "Aquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by ?%",
                    "Level 3: Reduce damage taken from [DEX] characters by ?%",
                    "Level 4: Reduce damage taken from [DEX] characters by ?%",
                    "Level 5: Reduce damage taken from [DEX] characters by ?%"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    782: {
        special: "Delays all enemies for 1 turn, recovers a small random amount of HP",
        specialName: "Smile of a Natural Beauty",
        specialNotes: "#{randomHeal : ??? : ???}",
        captain: "Boosts RCV of Slasher characters by 1.5x"
    },
    783: {
        special: "Delays all enemies for 1 turn, recovers a small random amount of HP",
        specialName: "Smile of a Natural Beauty",
        specialNotes: "#{randomHeal : ??? : ???}",
        captain: "Boosts ATK of Slasher characters by 2x and their RCV by 1.5x"
    },
    784: {
        special: "Reduces Despair duration by 2 turns, removes blindness",
        specialName: "Yelling at Lascivious Young Women"
    },
    785: {
        special: "Reduces Despair duration by 2 turns, removes blindness",
        specialName: "Yelling at Lascivious Young Women",
        captain: "Reduces damage received by 20%"
    },
    786: {
        special: "Seals himself for 10 turns, delays all enemies for 1 turn, reduces damage received by 50% for 4 turns",
        specialName: "The Resolve to Face Death! \"Open Mind\""
    },
    787: {
        special: "Seals himself for 10 turns, delays all enemies for 1 turn, reduces damage received by 50% for 4 turns",
        specialName: "The Resolve to Face Death! \"Open Mind\"",
        captain: "Reduces damage received by 50%, reduces crew's current HP by 10% at the end of each turn"
    },
    788: {
        special: "Following the activation of the special, if every unit scores a Perfect hit, boosts ATK of Slasher characters by 1.75x in the following turn",
        specialName: "Real Sword Fight with a Girl Swordsman"
    },
    789: {
        special: "Following the activation of the special, if every unit scores a Perfect hit, boosts ATK of Slasher characters by 1.75x in the following turn",
        specialName: "Real Sword Fight with a Girl Swordsman",
        captain: "Boosts ATK of Slasher characters by 1.5x"
    },
    790: {
        special: "Deals 3x character's ATK in QCK damage to one enemy, boosts ATK of STR, DEX and QCK characters by 1.2x for 3 turns",
        specialName: "March!! Usopp Pirates"
    },
    791: {
        special: "Deals 3x character's ATK in QCK damage to one enemy, boosts ATK of STR, DEX and QCK characters by 1.2x for 3 turns",
        specialName: "March!! Usopp Pirates",
        captain: "Boosts ATK, HP and RCV of STR, DEX and QCK characters by 1.25x"
    },
    792: {
        special: "Randomly changes all orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs, switches orbs between slots twice, locks all orbs for 1 turn",
        specialName: "The Entushiasm to Keep Skilled Workers in Line"
    },
    793: {
        special: "Randomly changes all orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs, switches orbs between slots twice, locks all orbs for 1 turn",
        specialName: "The Entushiasm to Keep Skilled Workers in Line",
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x"
    },
    794: {
        special: "Deals 10 hits of random INT damage to random enemies, delays all enemies for 1 turn",
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 30,000 : for each hit}",
        specialName: "Gum-Gum Storm",
        captain: "Boosts ATK of Powerhouse characters by 3x, reduces crew's current HP by 10% at the end of each turn, reduces his own ATK multiplier by 0.1x at the end of each turn",
        captainNotes: "His ATK multiplier will be 3.0x on the first turn, 2.9x on the second, 2.8x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Powerhouse characters. You will not die to the HP reduction"
    },
    795: {
        special: "Deals 10 hits of random INT damage to random enemies, delays all enemies for 1 turn",
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 30,000 : for each hit}",
        specialName: "Gum-Gum Storm",
        captain: "Boosts ATK of Powerhouse characters by 3.5x, reduces crew's current HP by 10% at the end of each turn, reduces his own ATK multiplier by 0.1x at the end of each turn",
        captainNotes: "His ATK multiplier will be 3.5x on the first turn, 3.4x on the second, 3.3x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Powerhouse characters. You will not die to the HP reduction"
    },
    796: {
        special: "Slightly boosts chances of getting matching orbs for 3 turns, boosts own ATK by 1.75x for 1 turn",
        specialName: "Peto-Peto Fruit, The Greatest Power",
        captain: "Boosts ATK of Cerebral characters by 2x"
    },
    797: {
        special: "Slightly boosts chances of getting matching orbs for 3 turns, boosts own ATK by 1.75x for 1 turn",
        specialName: "Peto-Peto Fruit, The Greatest Power",
        captain: "Boosts ATK of Cerebral and Powerhouse characters by 2x"
    },
    798: {
        special: "Removes Poison, following the activation of the special, if every unit scores a Perfect hit, boosts ATK of Fighter characters by 1.75x in the following turn",
        specialName: "Dugong Secret! Fist of the Black Fin",
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row"
    },
    799: {
        special: "Randomizes all orbs, recovers 9x character's RCV in HP",
        specialName: "Sea Animal Healing"
    },
    800: {
        special: "Randomly changes all orbs into either [STR], [DEX] or [QCK] orbs",
        specialName: "Octopus Tentacle Blow"
    },
    801: {
        special: "Randomly changes [STR], [QCK], [DEX], [INT], [BOMB] and [BLOCK] orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs, changes [TND] and [RCV] orbs into [PSY] orbs",
        specialName: "Clone-Clone Montage",
        captain: "Boosts ATK of PSY characters by 2x"
    },
    802: {
        special: "Randomly changes [STR], [QCK], [DEX], [INT], [BOMB] and [BLOCK] orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs, changes [TND] and [RCV] orbs into [PSY] orbs",
        specialName: "Clone-Clone Montage",
        captain: "Boosts ATK of PSY characters by 2.5x"
    },
    803: {
        special: "Deals 8 hits of random DEX damage to random enemies, boosts ATK of all characters by 1.1x for 3 turns",
        specialNotes: "#{randomHits : 8}",
        specialName: "Black Spear Formation: All-Out Attack!",
        captain: "Boosts ATK and RCV of DEX characters by 1.2x"
    },
    804: {
        special: "Deals 8 hits of random DEX damage to random enemies, boosts ATK of all characters by 1.1x for 3 turns",
        specialNotes: "#{randomHits : 8}",
        specialName: "Black Spear Formation: All-Out Attack!",
        captain: "Boosts ATK and RCV of DEX characters by 1.5x, deals 1x character's ATK in DEX damage to all enemies at the end of each turn"
    },
    805: {
        special: "Reduces crew's current HP by 20%, deals 10x the amount of HP subtracted in INT damage to one enemy, amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "White Vine",
        captain: "Boosts ATK of Striker characters by 2x",
        specialNotes: "#{orb : 1.75x}"
    },
    806: {
        special: "Reduces crew's current HP by 20%, deals 10x the amount of HP subtracted in INT damage to one enemy, amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "White Vine",
        captain: "Boosts ATK of Striker characters by 2x, reduces damage received up to 30% depending on the crew's current HP",
        specialNotes: "#{orb : 1.75x}"
    },
    807: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        specialName: "Thunder Charge: Swing Arm",
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK against enemies with reduced defense by 1.3x for 3 turns"
    },
    808: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x, recovers 2x character's RCV in HP at the end of each turn",
        specialName: "Thunder Charge: Swing Arm",
        special: "Deals 15x character's ATK in PSY damage to one enemy, boosts ATK against enemies with reduced defense by 1.3x for 3 turns"
    },
    809: {
        captain: "Boosts ATK and RCV of Powerhouse characters by 1.5x",
        specialName: "Lola's Attack Chance",
        special: "Reduces the defense of all enemies by 80% for 1 turn, amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}"
    },
    810: {
        captain: "Boosts ATK of Powerhouse characters by 2x and their RCV by 1.5x, reduces crew's current HP by 10% at the end of each turn",
        specialName: "Lola's Attack Chance",
        special: "Reduces the defense of all enemies by 80% for 1 turn, amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}"
    },
    811: {
        specialName: "Birdbrain Present",
        special: "Changes own orb into DEX, switches orbs between slots once"
    },
    812: {
        specialName: "Hell Howl",
        special: "Sharply reduces the defense of all enemies for 1 turn"
    },
    813: {
        specialName: "Sticky Spider Net",
        special: "Delays all enemies for 1 turn, amplifies the effect of orbs by 1.25x for 1 turn",
        specialNotes: "#{orb : 1.25x}"
    },
    814: {
        specialName: "Carpet Scratch",
        special: "Deals 13x character's ATK in DEX damage to a single enemy, changes captain's orb into [TND]"
    },
    815: {
        captain: "Boosts ATK by 2.5x following a chain of STR > INT > DEX attacks no lower than Good",
        specialName: "Brick Bat",
        special: "Deals 10 hits of 5,000 fixed damage to random enemies",
        specialNotes: "#{fixed} #{randomHits : 10}"
    },
    816: {
        captain: "Boosts ATK by 2.75x following a chain of STR > INT > DEX attacks no lower than Good",
        specialName: "Brick Bat",
        special: "Deals 10 hits of 5,000 fixed damage to random enemies",
        specialNotes: "#{fixed} #{randomHits : 10}"
    },
    817: {
        specialName: "[PSY] Slot Change [STR]",
        special: "Changes [PSY] orbs into [STR] orbs"
    },
    818: {
        specialName: "Quick Change",
        special: "Switches orbs between slots once"
    },
    819: {
        specialName: "Hyper Burst",
        special: "Deals 13x character's ATK in character's type damage to all enemies"
    },
    820: {
        specialName: "[TND] Slot Change [INT]",
        special: "Changes [TND] orbs into [INT] orbs"
    },
    821: {
        specialName: "Slot Shuffle",
        special: "Randomizes all orbs"
    },
    822: {
        specialName: "Patch Job",
        special: "Boosts RCV of all characters by 100 for 3 turns"
    },
    823: {
        specialName: "Slot Rate Up [INT]",
        special: "Slightly boosts chances of getting [INT] orbs for 3 turns"
    },
    824: {
        specialName: "Auto Repair",
        special: "Recovers 3x character's RCV in HP at the end of each turn for 5 turns"
    },
    825: {
        captain: "Boosts ATK and HP of STR characters by 1.5x",
        specialName: "Energy of the Ancient Knight",
        special: "Boosts ATK of STR characters by 200 for 1 turn"
    },
    826: {
        captain: "Boosts ATK and HP of DEX characters by 1.5x",
        specialName: "Weakness of the Ancient Knight",
        special: "Delays all enemies for 1 turn, reduces the ATK of all characters by 80% for 2 turns"
    },
    827: {
        captain: "Boosts ATK and HP of QCK characters by 1.5x",
        specialName: "Poison of the Ancient Knight",
        special: "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.05x for 999 turns"
    },
    828: {
        specialName: "Surprise Stab",
        special: "Deals 3x character's ATK in [PSY] damage to one enemy, Boosts ATK of Slasher and Driven characters by 1.75x for 1 turn if used below 20% HP",
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}" 
    },
    829: {
        specialName: "Surprise Stab",
        special: "Deals 3x character's ATK in [PSY] damage to one enemy, Boosts ATK of Slasher and Driven characters by 1.75x for 1 turn if used below 20% HP",
        captain: "Protects from defeat as long as HP is above 30%",
        captainNotes: "#{zombie}" 
    },
    830: {
        captain: "Boosts ATK of Cerebral and Striker characters by 1.75x, deals 2 times the damage received in the previous turn in DEX damage to all enemies at the end of each turn",
        specialName: "Karma Conviction",
        special: "Changes the orbs in the top row into [STR] orbs, changes the orbs in the middle row into [DEX] orbs, changes the orbs in the bottom row into [QCK] orbs"
    },
    831: {
        captain: "Boosts ATK of Cerebral and Striker characters by 2x, deals 5 times the damage received in the previous turn in DEX damage to all enemies at the end of each turn",
        specialName: "Karma Conviction",
        special: "Changes the orbs in the top row into [STR] orbs, changes the orbs in the middle row into [DEX] orbs, changes the orbs in the bottom row into [QCK] orbs"
    },
    832: {
        captain: "Boosts ATK of Free Spirit characters proportionally to the crew's current HP, reduces crew's current HP by 10% at the end of each turn",
        specialName: "Burn Bazooka",
        special: "Boosts ATK of Free Spirit characters by 1.5x for 1 turn, deals 15x character's ATK in STR damage to all enemies",
        captainNotes: "#{captainProportional : lower : 1 + 1.5 * (1 - (remaining HP) / (total HP)) : 1 : 2.5}"
    },
    833: {
        captain: "Boosts ATK of Free Spirit characters proportionally to the crew's current HP, reduces crew's current HP by 10% at the end of each turn",
        specialName: "Burn Bazooka",
        special: "Boosts ATK of Free Spirit characters by 1.5x for 1 turn, deals 15x character's ATK in STR damage to all enemies",
        captainNotes: "#{captainProportional : lower : 1 + 1.75 * (1 - (remaining HP) / (total HP)) : 1 : 2.75}"
    },
    834: {
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x",
        specialName: "Yellow Gun & Gero Gero Gun",
        special: "Changes own orb into [QCK] and the captain's orb into [PSY]"
    },
    835: {
        captain: "Boosts ATK and HP of Cerebral characters by 2x",
        specialName: "Thrust Pad Cannon",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into Matching orbs, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{orb : 1.75x}"
    },
    836: {
        captain: "Boosts ATK and HP of Cerebral characters by 2x, deals 5 times the damage received in the previous turn in STR damage to all enemies at the end of each turn",
        specialName: "Thrust Pad Cannon",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into Matching orbs, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{orb : 1.75x}"
    },
    837: {
        captain: "Boosts ATK of Driven characters by 2x",
        specialName: "Gas Robe",
        special: "Poisons all enemies, boosts ATK of Driven characters by 1.75x for 2 turns",
        specialNotes: "#{poison}"
    },
    838: {
        captain: "Boosts ATK of Driven characters by 2.5x",
        specialName: "Gas Robe",
        special: "Poisons all enemies, boosts ATK of Driven characters by 1.75x for 2 turns",
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Driven characters by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 2: Completely resists Paralysis on this character" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
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
        ]
    },
    839: {
        captain: "Boosts ATK of Striker characters by 2x",
        specialName: "Demon Bamboo",
        special: "Changes own orb into [INT], boosts own ATK by 2x for 1 turn, deals 15x character's ATK in INT damage to one enemy"
    },
    840: {
        captain: "Boosts ATK of Striker characters by 2.5x",
        specialName: "Demon Bamboo",
        special: "Changes own orb into [INT], boosts own ATK by 2x for 1 turn, deals 15x character's ATK in INT damage to one enemy",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Striker characters by 2.5x and reduces damage received by 7%" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Sailor Ability 1: If this character has a [INT] orb and you hit a Perfect with him, keep his [INT] orb for the next turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Enrage" },
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
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    841: {
        captain: "Recovers 3x character's RCV in HP at the end of each turn, deals 3x character's ATK in PSY damage to all enemies at the end of each turn",
        specialName: "Snow Rabbit",
        special: "Delays all enemies for 1 turn, boosts ATK against delayed enemies by 1.25x for 2 turns"
    },
    842: {
        captain: "Recovers 5x character's RCV in HP at the end of each turn, deals 5x character's ATK in PSY damage to all enemies at the end of each turn",
        specialName: "Snow Rabbit",
        special: "Delays all enemies for 1 turn, boosts ATK against delayed enemies by 1.25x for 2 turns"
    },
    843: {
        captain: "Boosts ATK of Slasher, Striker and Shooter characters by 1.5x",
        specialName: "Arms-Morphosis: Missile Girl",
        special: "Deals 15x character's ATK in STR damage to all enemies, boosts ATK of Shooter characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of Shooter, Striker and Slasher characters by 1.5x in the following turn."
    },
    844: {
        captain: "Boosts ATK of Slasher, Striker and Shooter characters by 2x",
        specialName: "Arms-Morphosis: Missile Girl",
        special: "Deals 15x character's ATK in STR damage to all enemies, boosts ATK of Shooter characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of Shooter, Striker and Slasher characters by 1.5x in the following turn."
    },
    845: {
        captain: "Boosts ATK of all characters by 1.5x after the 11th hit in the chain, by 2.5x after the 22nd hit",
        specialName: "Gust: Matasaburo",
        special: "Randomizes all orbs and changes own orb into [QCK]"
    },
    846: {
        captain: "Boosts ATK of all characters by 1.5x after the 11th hit in the chain, by 2.5x after the 22nd hit, by 2.75x after the 30th hit, by 3.5x after the 40th hit",
        specialName: "Gust: Matasaburo",
        special: "Randomizes all orbs and changes own orb into [QCK]",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of all characters by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Aquire Sailor Ability 2: Boosts this character's attack against [DEX] characters by 2x" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
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
    847: {
        captain: "Boosts ATK of all characters by 1.5x if HP is below 30% at the start of the turn",
        specialName: "Sturdy Boat: Launch",
        special: "Reduces Despair duration by 5 turns, boosts ATK of all characters by 5% for 3 turns, reduces damage received by 10% for 3 turns, amplifies the effect of orbs by 1.15x for 3 turns, recovers 2x character's RCV in HP at the end of each turn for 3 turns",
        specialNotes: "#{orb : 1.15x}"
    },
    848: {
        captain: "Boosts ATK of all characters by 2x if HP is below 30% at the start of the turn",
        specialName: "Sturdy Boat: Launch",
        special: "Reduces Despair duration by 5 turns, boosts ATK of all characters by 5% for 3 turns, reduces damage received by 10% for 3 turns, amplifies the effect of orbs by 1.15x for 3 turns, recovers 2x character's RCV in HP at the end of each turn for 3 turns",
        specialNotes: "#{orb : 1.15x}"
    },
    849: {
        captain: "Boosts ATK of Shooter characters by 1.75x",
        specialName: "Battle Franky 9",
        special: "Deals 5 hits of random STR damage to random enemies, reduces the defense of all enemies by 50% for 2 turns"
    },
    850: {
        captain: "Boosts ATK of Striker and Cerebral characters by 1.5x",
        specialName: "First-class Assistant of the Passionate Worker",
        special: "Changes the top right orb into [DEX], the middle right orb into [STR] and the bottom right orb into [QCK], seals himself for 3 turns"
    },
    851: {
        captain: "Boosts ATK of Driven characters by 1.5x",
        specialName: "Snow Country Speciality: Snow Powder Makeup",
        special: "Deals 20x character's ATK in character's type damage to one enemy, locks all orbs for 1 turn"
    },
    852: {
        captain: "Boosts ATK of Driven characters by 2x",
        specialName: "Snow Country Speciality: Snow Powder Makeup",
        special: "Deals 20x character's ATK in character's type damage to one enemy, locks all orbs for 1 turn"
    },
    853: {
        specialName: "Robson: Serious Mode",
        special: "Following the activation of the special, if every unit scores a Perfect hit, boosts ATK of Powerhouse and Fighter characters by 1.2x for 3 turns"
    },
    854: {
        captain: "Boosts ATK of DEX chracters by 1.5x, reduces damage received by 10%",
        specialName: "Guard Point: Winter Coat",
        special: "Reduces damage received by 50% for 3 turns, slightly boosts chances of getting [DEX] orbs for 3 turns"
    },
    855: {
        captain: "Boosts ATK of Slasher characters by 2x",
        specialName: "Shambles: Holiday Toast",
        special: "Changes captain's orb into [RCV], recovers 15x character's RCV in HP"
    },
    856: {
        captain: "Boosts ATK of Slasher characters by 2.5x",
        specialName: "Shambles: Holiday Toast",
        special: "Changes captain's orb into [RCV], recovers 15x character's RCV in HP"
    },
    857: {
        captain: "Boosts ATK of PSY characters by 2x",
        specialName: "Bonney's Holiday Feast",
        special: "Changes adjacent orbs into [RCV] orbs, boosts RCV of PSY characters by 1.5x for 1 turn"
    },
    858: {
        captain: "Boosts ATK and RCV of PSY characters by 2x",
        specialName: "Bonney's Holiday Feast",
        special: "Changes adjacent orbs into [RCV] orbs, boosts RCV of PSY characters by 1.5x for 1 turn"
    },
    859: {
        captain: "Boosts ATK of Driven characters by 1.5x, reduces damage received up to 10% depending on the crew's current HP",
        specialName: "Pleading at the Risk of One's Life",
        special: "Changes adjacent orbs into [RCV] orbs; if the special is activated with more than 50% health remaining, protects from defeat for 1 turn",
        specialNotes: "#{zombie}"
    },
    860: {
        captain: "Boosts ATK of Driven characters by 2x, reduces damage received up to 30% depending on the crew's current HP",
        specialName: "Pleading at the Risk of One's Life",
        special: "Changes adjacent orbs into [RCV] orbs; if the special is activated with more than 50% health remaining, protects from defeat for 1 turn",
        specialNotes: "#{zombie}"
    },
    861: {
        specialName: "Bewitching Lovely Iron Mace",
        special: "Deals 13x character's ATK in QCK damage to one enemy, reduces damage received by 75% for 1 turn, amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}",
        captain: "Reduces damage received by 10%"
    },
    862: {
        captain: "Boosts ATK of QCK characters by 2x, reduces damage received by 10%",
        specialName: "Bewitching Lovely Iron Mace",
        special: "Deals 13x character's ATK in QCK damage to one enemy, reduces damage received by 75% for 1 turn, amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}"
    },
    863: {
        captain: "Boosts ATK of QCK characters by 1.75x, recovers 2x character's RCV in HP at the end of each turn",
        specialName: "Snow Crystal Clima-Tact",
        special: "Reduces the defense of all enemies by 50% for 2 turns, reduces the ATK of all enemies by 10% for 2 turns"
    },
    864: {
        captain: "Boosts ATK of Free Spirit characters by 2x",
        specialName: "Slave Arrow",
        special: "Locks the chain multiplier at 2.5x for 2 turns, delays all enemies for 1 turn"
    },
    865: {
        captain: "Boosts ATK and HP of Free Spirit characters by 2x",
        specialName: "Slave Arrow",
        special: "Locks the chain multiplier at 2.5x for 2 turns, delays all enemies for 1 turn"
    },
    866: {
        captain: "Boosts ATK of Cerebral characters by 2x",
        specialName: "Cien Fleur Wing: The Storm",
        special: "Boosts ATK of Slasher and Cerebral characters by 1.3x for 2 turns, reduces Bind duration by 2 turns"
    },
    867: {
        captain: "Boosts ATK of all characters by 1.5x after the 12th hit in the chain",
        specialName: "Tabasco Star: The Storm",
        special: "Delays all enemies for 2 turns, deals 9x character's ATK in DEX damage to all enemies"
    },
    868: {
        captain: "Boosts ATK of all characters by 1.2x, recovers 1,000 HP at the end of the turn",
        specialName: "Heavy Gong: The Storm",
        special: "Deals 15x character's ATK in STR damage to one enemy, reduces Bind duration by 3 turns"
    },
    869: {
        captain: "Boosts ATK of Driven characters by 3x until the first hit other than Perfect",
        specialName: "Black Knight",
        special: "Changes adjacent orbs into matching orbs, amplifies the effect of orbs by 2x for 1 turn",
        specialNotes: "#{orb : 2x}"
    },
    870: {
        captain: "Boosts ATK of Driven characters by 3x until the first hit other than Perfect",
        specialName: "Black Knight",
        special: "Changes adjacent orbs into matching orbs, amplifies the effect of orbs by 2x for 1 turn",
        specialNotes: "#{orb : 2x}"
    },
    871: {
        captain: "Boosts ATK and RCV of QCK characters by 1.5x",
        specialName: "Hobby-Hobby Fruit",
        special: "Removes all enemies with HP below 20%",
        specialNotes: "The special bypasses all known protective buffs. If the enemy can revive after being defeated, however, the special will only reduce the enemy's HP to 0 and trigger their revive effect."
    },
    872: {
        captain: "Boosts ATK and RCV of QCK characters by 2x",
        specialName: "Hobby-Hobby Fruit",
        special: "Removes all enemies with HP below 20%",
        specialNotes: "The special bypasses all known protective buffs. If the enemy can revive after being defeated, however, the special will only reduce the enemy's HP to 0 and trigger their revive effect."
    },
    873: {
        captain: "Boosts ATK of Fighter characters by 2.5x if HP is below 30% at the start of the turn",
        specialName: "Nyan Nyan Swim",
        special: [
            {
                "description": "Changes own orb into [PSY], amplifies the effect of orbs by 1.5x for 1 turn",
                "cooldown": [
                    13,
                    8
                ]
            },
            {
                "description": "Changes own orb into [PSY], amplifies the effect of orbs by 1.75x for 1 turn",
                "cooldown": [
                    19,
                    14
                ]
            }
        ],
        specialNotes: "#{orb: 1.5x or 1.75x} #{stages}"
    },
    874: {
        captain: "Boosts ATK of Fighter characters by 3x if HP is below 30% at the start of the turn",
        specialName: "Nyan Nyan Swim",
        special: [
            {
                "description": "Changes own orb into [PSY], amplifies the effect of orbs by 1.5x for 1 turn",
                "cooldown": [
                    13,
                    8
                ]
            },
            {
                "description": "Changes own orb into [PSY], amplifies the effect of orbs by 1.75x for 1 turn",
                "cooldown": [
                    19,
                    14
                ]
            }
        ],
        specialNotes: "#{orb: 1.5x or 1.75x} #{stages}"
    },
    875: {
        captain: "Boosts ATK of Cerebral and Driven characters by 2x",
        specialName: "Beto Launcher",
        special: "Changes the captain's orb into a matching orb, locks all orbs for 1 turn, deals 13x character's ATK in INT damage to all enemies"
    },
    876: {
        captain: "Boosts ATK of Cerebral and Driven characters by 2.25x, makes [TND] and [RCV] orbs \"beneficial\" to Cerebral and Driven characters",
        captainNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Beto Launcher",
        special: "Changes the captain's orb into a matching orb, locks all orbs for 1 turn, deals 13x character's ATK in INT damage to all enemies",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Driven characters by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 2: Reduces Paralysis duration by 1 turn" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
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
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    877: {
        captain: "Boosts amount of Beli received by 2x",
        specialName: "Heaven's Do Art",
        special: "Reduces any damage received above 2,000 HP by 88% for 2 turns",
        specialNotes: "The exact formula for the damage received is: 2000 + ((total damage) - 2000) * 0.12"
    },
    878: {
        captain: "Boosts ATK of all characters by 1.5x, boosts amount of Beli received by 2x",
        specialName: "Heaven's Do Art",
        special: "Reduces any damage received above 2,000 HP by 88% for 2 turns",
        specialNotes: "The exact formula for the damage received is: 2000 + ((total damage) - 2000) * 0.12"
    },
    879: {
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Fighter characters by 1.75x",
        specialName: "Battle Preservation Fist: Manki Kayaku",
        special: "Randomly changes all orbs including [BLOCK] orbs into [G] orbs, deals random typeless damage to all enemies",
        specialNotes: "#{gOrbs}<br>#{random : 5,000 : 100,000}"
    },
    880: {
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Fighter characters by 2x",
        specialName: "Battle Preservation Fist: Manki Kayaku",
        special: "Randomly changes all orbs including [BLOCK] orbs into [G] orbs, deals random typeless damage to all enemies",
        specialNotes: "#{gOrbs}<br>#{random : 5,000 : 100,000}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 90" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire Sailor Ability 2: If HP is above 99% at the start of the turn, boosts ATK of Driven characters by 50" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
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
        ]
    },
    881: {
        captain: "Boosts ATK of Shooter and Free Spirit characters by 2x following a chain of Good > Great > Perfect hits",
        specialName: "Fighting Music: Conflict Chekera",
        special: "Increases damage received by 2x for 2 turns, reduces RCV by 90% for 2 turns, boosts ATK of Shooter and Free Spirit characters by 1.75x for 1 turn"
    },
    882: {
        captain: "Boosts ATK of Shooter and Free Spirit characters by 3x following a chain of Good > Great > Perfect hits",
        specialName: "Fighting Music: Conflict Chekera",
        special: "Increases damage received by 2x for 2 turns, reduces RCV by 90% for 2 turns, boosts ATK of Shooter and Free Spirit characters by 1.75x for 1 turn"
    },
    883: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.25x",
        specialName: "Hakoku Sovereignity",
        special: "Deals 20x character's ATK in character's type damage to all enemies, boosts ATK of Powerhouse characters by 1.5x for 1 turn. If \"Hakoku Sovereignity\" is used again in the same turn the special is activated in, boosts ATK of Powerhouse characters by 2x instead."
    },
    884: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        specialName: "Hakoku Sovereignity",
        special: "Deals 20x character's ATK in character's type damage to all enemies, boosts ATK of Powerhouse characters by 1.5x for 1 turn. If \"Hakoku Sovereignity\" is used again in the same turn the special is activated in, boosts ATK of Powerhouse characters by 2x instead."
    },
    885: {
        captain: "Boosts ATK of Fighter characters by 2x, reduces damage received by 10%",
        specialName: "Arabesque Brick Fist: Sun",
        special: "Cuts the current HP of each enemy by 10%, boosts ATK of Fighter characters by 1.5x for 1 turn if HP is below 30% when the special is activated"
    },
    886: {
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Slasher characters by 2x",
        specialName: "Daisy Blade: First",
        special: "Deals 15x character's ATK in STR damage to all enemies, boosts ATK of Slasher characters by 1.5x for 1 turn if HP is below 30% when the special is activated"
    },
    887: {
        captain: "Boosts ATK of Driven characters by 1.5x, boosts amount of Beli received by 1.2x",
        specialName: "Special Muggy Ball: Flashy",
        special: "Reduces the defense of all enemies by 80% for 1 turn, deals 15x character's ATK in QCK damage to all enemies"
    },
    888: {
        specialName: "Negative Ghost",
        special: "Slightly reduces the ATK of all enemies by 10% for 3 turns",
        specialNotes: "The reduction does not apply to damage from specials"
    },
    889: {
        captain: "Boosts ATK and RCV of DEX characters by 1.2x",
        specialName: "Ghost Rap",
        special: "Changes [STR] orbs into [DEX] orbs, deals 10x character's ATK in DEX damage to all enemies"
    },
    890: {
        captain: "Boosts ATK and RCV of DEX characters by 1.5x",
        specialName: "Ghost Rap",
        special: "Changes [STR] orbs into [DEX] orbs, deals 10x character's ATK in DEX damage to all enemies"
    },
    891: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.75x",
        specialName: "Resurrection of the Dead",
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of Powerhouse characters by 1.25x for 1 turn"
        },
    892: {
        captain: "Boosts chain multiplier by 2x",
        specialName: "Hands of the Dead",
        special: "Switches orbs between slots three times"
    },
    893: {
        captain: "Boosts ATK of Powerhouse characters by 3x after scoring 3 Perfects in a row",
        specialName: "Oars Ball",
        special: "Reduces damage received by 50% for 1 turn, deals 30x character's ATK in STR damage to all enemies"
    },
    894: {
        captain: "Boosts ATK of Driven characters by 3x following a chain of Good > Great > Perfect hits",
        specialName: "Brick Bat: Black Box",
        special: "Empties all slots with [INT] orbs, deals several times the character's ATK in INT damage to one enemy",
        specialNotes: "The exact multiplier used is chosen based on the number of [INT] orbs consumed: 1 orb will give a 10x multiplier, 2 orbs 15x, 3 orbs 20x, 4 orbs 50x, 5 orbs 100x, 6 orbs 200x. It's not possible to activate the special without consuming at least one [INT] orb."
    },
    895: {
        captain: "Boosts ATK of Slasher characters by 1.5x",
        specialName: "Dying Chorus: Binks' Sake",
        special: "Recovers 6x character's RCV in HP at the end of each turn for 3 turns"
    },
    896: {
        captain: "Boosts ATK of Slasher characters by 2x",
        specialName: "Dying Chorus: Binks' Sake",
        special: "Recovers 6x character's RCV in HP at the end of each turn for 3 turns"
    },
    897: {
        captain: "Boosts ATK of Cerebral and Driven characters by 2x",
        specialName: "Ground Death: Thirst",
        special: "Cuts the current HP of all enemies by 10%, randomizes all orbs and changes own orb into [STR]"
    },
    898: {
        captain: "Boosts ATK and HP of Striker and Cerebral characters by 1.5x",
        specialName: "Championship Fight: Little Garden Three",
        special: "Deals 10x character's ATK in QCK damage to all enemies, changes adjacent orbs into [G] orbs",
        specialNotes: "#{gOrbs}"
    },
    899: {
        captain: "Boosts ATK of Fighter and Free Spirit characters by 1.75x and their RCV by 1.25x",
        specialName: "Hymn to Friendship: \"Okama Way\" Two",
        special: "Reduces Despair duration by 5 turns, recovers 10x character's RCV in HP"
    },
    900: {
        captain: "Boosts ATK of Shooter characters by 2x if HP is above 99% at the start of the turn",
        specialName: "Franky Destroy Gun",
        special: "Deals 6 hits of 2,000 fixed damage to random enemies and for Shooter and Free Spirit characters, randomly changes Badly Matching orbs into [G] orbs or Matching orbs",
        specialNotes: "The orb shuffle only applies to Shooter and Free Spirit characters, other classes are unaffected. #{gOrbs}"
    },
    901: {
        captain: "Boosts ATK of Shooter characters by 2.75x if HP is above 99% at the start of the turn",
        specialName: "Franky Destroy Gun",
        special: "Deals 6 hits of 2,000 fixed damage to random enemies and for Shooter and Free Spirit characters, randomly changes Badly Matching orbs into [G] orbs or Matching orbs",
        specialNotes: "The orb shuffle only applies to Shooter and Free Spirit characters, other classes are unaffected. #{gOrbs}"
    },
    902: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.25x",
        specialName: "Hakoku Sovereignity",
        special: "Deals 20x character's ATK in character's type damage to all enemies, boosts ATK of Powerhouse characters by 1.5x for 1 turn. If \"Hakoku Sovereignity\" is used again in the same turn the special is activated in, boosts ATK of Powerhouse characters by 2x instead."
    },
    903: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        specialName: "Hakoku Sovereignity",
        special: "Deals 20x character's ATK in character's type damage to all enemies, boosts ATK of Powerhouse characters by 1.5x for 1 turn. If \"Hakoku Sovereignity\" is used again in the same turn the special is activated in, boosts ATK of Powerhouse characters by 2x instead."
    },
    904: {
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        specialName: "Yokozuna Slap!",
        special: "Deals 20x character's ATK in STR damage to one enemy, delays all enemies for 1 turn"
    },
    905: {
        captain: "Boosts ATK of Slasher characters by 2.5x if HP is below 30% at the start of the turn",
        specialName: "Two Gorilla Cut",
        special: [
            {
                "description": "Changes own orb into [STR], boosts his own ATK by 1.5x for 2 turns",
                "cooldown": [ 17, 11 ]
            },
            {
                "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.5x for 2 turns",
                "cooldown": [ 21, 15 ]
            },
            {
                "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.75x for 2 turns",
                "cooldown": [ 24, 18 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    906: {
        captain: "Boosts ATK of Slasher characters by 2.75x if HP is below 30% at the start of the turn",
        specialName: "Two Gorilla Cut",
        special: [
            {
                "description": "Changes own orb into [STR], boosts his own ATK by 1.5x for 2 turns",
                "cooldown": [ 17, 11 ]
            },
            {
                "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.5x for 2 turns",
                "cooldown": [ 21, 15 ]
            },
            {
                "description": "Changes own orb into [STR], boosts ATK of Slasher characters by 1.75x for 2 turns",
                "cooldown": [ 24, 18 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    907: {
        specialName: "Cien Fleur: Big Tree",
        special: "Delays all enemies for 1 turn, locks all orbs for 1 turn, deals 5,000 fixed damage to all enemies, reduces crew's HP to 1",
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x if HP is below 30% at the start of the turn"
    },
    908: {
        specialName: "Cien Fleur: Big Tree",
        special: "Delays all enemies for 1 turn, locks all orbs for 1 turn, deals 5,000 fixed damage to all enemies, reduces crew's HP to 1",
        captain: "Boosts ATK of Cerebral characters by 2.5x and their RCV by 1.75x if HP is below 30% at the start of the turn"
    },
    909: {
        captain: "Boosts ATK and RCV of PSY characters by 1.5x",
        specialName: "Hero of Justice! Chopper Mask!!",
        special: "Recovers 5,000 HP, boosts ATK of PSY characters by 1.5x for 2 turns"
    },
    910: {
        specialName: "Hero of Justice! Chopper Mask!!",
        special: "Recovers 5,000 HP, boosts ATK of PSY characters by 1.5x for 2 turns",
        captain: "Boosts ATK of PSY characters by 2x, their RCV by 1.5x, makes INT orbs \"beneficial\" to PSY characters",
        captainNotes: "#{beneficial}"
    },
    911: {
        specialName: "Diable Jambe: Premier Hachis",
        special: [
            {
                "description": "Deals 13x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 1.2x for 1 turn",
                "cooldown": [ 15, 8 ]
            },
            {
                "description": "Deals 20x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 2x for 1 turn",
                "cooldown": [ 25, 18 ]
            }
        ],
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        specialNotes: "#{stages}"
    },
    912: {
        specialName: "Diable Jambe: Premier Hachis",
        special: [
            {
                "description": "Deals 13x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 1.2x for 1 turn",
                "cooldown": [ 15, 8 ]
            },
            {
                "description": "Deals 20x character's ATK in DEX damage to one enemy, boosts ATK of Powerhouse characters by 2x for 1 turn",
                "cooldown": [ 25, 18 ]
            }
        ],
        captain: "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.5x. Recovers 2x character's RCV in HP at the end of each turn",
        specialNotes: "#{stages}"
    },
    913: {
        captain: "Boosts ATK of QCK characters by 2.5x if they have a matching orb",
        specialName: "Black Magic Summoning: Advent of the Demon Lord Satan",
        special: "Seals himself for 1 turn, changes [BLOCK] orbs into matching orbs, randomly changes Badly Matching orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs"
    },
    914: {
        captain: "Boosts ATK of QCK characters by 3x if they have a matching orb, by 1.2x otherwise",
        specialName: "Black Magic Summoning: Advent of the Demon Lord Satan",
        special: "Seals himself for 1 turn, changes [BLOCK] orbs into matching orbs, randomly changes Badly Matching orbs into either [STR], [QCK], [DEX], [PSY] or [INT] orbs"
    },
    915: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.2x",
        specialName: "Feeling of Mutual Love",
        special: "Boosts ATK and RCV of Cerebral characters by 1.5x for 1 turn"
    },
    916: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.75x",
        specialName: "Feeling of Mutual Love",
        special: "Boosts ATK and RCV of Cerebral characters by 1.5x for 1 turn"
    },
    917: {
        captain: "Boosts ATK of Shooter characters by 1.5x",
        specialName: "Kuja's Haki Arrow",
        special: "Deals 5,000 fixed damage to one enemy, delays all enemies for 1 turn, changes [RCV] orbs on Shooter characters into matching orbs",
        specialNotes: "The orb shuffle only applies to Shooter characters, other classes are unaffected."
    },
    918: {
        captain: "Boosts ATK of Shooter characters by 1.75x, recovers a small amount of health at the end of each turn",
        specialName: "Kuja's Haki Arrow",
        special: "Deals 5,000 fixed damage to one enemy, delays all enemies for 1 turn, changes [RCV] orbs on Shooter characters into matching orbs",
        specialNotes: "The orb shuffle only applies to Shooter characters, other classes are unaffected."
    },
    919: {
        specialName: "Spike of the Warrior Defending Her Country",
        special: "Reduces damage received from STR enemies by 50% for 2 turns"
    },
    920: {
        specialName: "Snake Bow of the Warrior Defending Her Country",
        special: "Changes the orbs in the middle row into [RCV] orbs, changes the orbs in the bottom row into [TND] orbs"
    },
    921: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.2x",
        specialName: "Pure and Beautiful Shyness",
        special: "Recovers 5000 HP and amplifies the effect of orbs by 1.5x for 2 turns"
    },
    922: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.75x",
        specialName: "Pure and Beautiful Shyness",
        special: "Recovers 5000 HP and amplifies the effect of orbs by 1.5x for 2 turns"
    },
    923: {
        captain: "Boosts ATK of Driven Characters by 2.5x if HP is below 30% at the start of the turn, 2x otherwise",
        specialName: "Repel: Weapons Reflect",
        special: "Empties all slots, deals [STR] damage based on number of [STR] slots emptied to all enemies",
        specialNotes: "The exact multiplier used is chosen based on the number of [STR] orbs consumed: 0 orbs - 3.5x ATK; 1 orb - 7x ATK; 2 orbs - 14x ATK; 3 orbs - 21x ATK; 4 orbs - 35x ATK; 5 orbs - 91x ATK; 6 orbs - 140x ATK."
    },
    924: {
        captain: "Boosts ATK of Driven Characters by 2.75x if HP is below 30% at the start of the turn, 2x otherwise",
        specialName: "Repel: Weapons Reflect",
        special: "Empties all slots, deals [STR] damage based on number of [STR] slots emptied to all enemies",
        specialNotes: "The exact multiplier used is chosen based on the number of [STR] orbs consumed: 0 orbs - 3.5x ATK; 1 orb - 7x ATK; 2 orbs - 14x ATK; 3 orbs - 21x ATK; 4 orbs - 35x ATK; 5 orbs - 91x ATK; 6 orbs - 140x ATK."
    },
    925: {
        captain: "Boosts ATK of Powerhouse characters by 2x",
        specialName: "Let's go, Jailer Beasts!",
        special: "Deals 15x ATK to 1 enemy in [QCK] damage, boosts ATK against enemies with reduced defense by 1.3x for 3 turns"
    },
    926: {
        captain: "Boosts ATK of Powerhouse characters by 2.5x",
        specialName: "Let's go, Jailer Beasts!",
        special: "Deals 15x ATK to 1 enemy in [QCK] damage, boosts ATK against enemies with reduced defense by 1.3x for 3 turns"
    },
    927: {
        captain: "Boosts ATK and HP of Driven characters by 1.5x",
        specialName: "Unwavering Hammer of Justice",
        special: "Increases damage received by 1.5x and boosts ATK of Slasher and Driven characters by 1.2x for 3 turns"
    },
    928: {
        captain: "Boosts ATK of Driven characters by 1.75x while above 30% HP and boosts ATK of Striker characters by 1.75x while below 30% HP",
        special: "Deals 7x his ATK in [DEX] damage to all enemies, and boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 turns",
        specialName: "Hell Wisdom Rush"
    },
    929: {
        captain: "Boosts ATK of Driven characters by 2.25x while above 30% HP and boosts ATK of Striker characters by 2.25x while below 30% HP",
        special: "Deals 7x his ATK in [DEX] damage to all enemies, and boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 turns",
        specialName: "Hell Wisdom Rush"
    },
    930: {
        captain: "Boosts chain multiplier by 2x",
        specialName: "Blugori Manipulation Song",
        special: "Changes orbs in left column to [DEX], then [QCK], then [INT]. Locks himself for 3 turns."
    },
    931: {
        specialName: "Large Axe of Punishment",
        special: "Deals 13x ATK to 1 enemy in [DEX] Damage. Turns [BLOCK] orbs into [RCV] orbs"
    },
    932: {
        captain: "Boosts ATK of Powerhouse characters by 1.5x, and their HP by 1.5x",
        specialName: "Rock Domination Wall",
        special: [
            {
                "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 25, 11 ]
            },
            {
                "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 31, 17 ]
            }
        ],
        specialNotes: "#{stages}"	
        },
    933: {
        captain: "Boosts ATK of Powerhouse characters by 2.25x, and their HP by 1.5x",
        specialName: "Rock Domination Wall",
        special: [
            {
                "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 25, 11 ]
            },
            {
                "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 31, 17 ]
            }
        ],
        specialNotes: "#{stages}",
        limit: [
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Powerhouse and Driven characters by 30" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turn",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ],
        potentialNotes: "Enrage is activated when your crew took damage from your enemies in the previous turn"
    },
    934: {
        captain: "Boosts ATK of Fighter characters by 2x, and their HP by 1.5x. If HP is above 70% or below 30%, boosts ATK of Fighter characters by 2.75 instead",
        specialName: "Fishman Karate!! Shark Fist Tile Breaker",
        special: "Makes Perfects harder to hit for 1 turn. Deals 20x character's ATK in [INT] damage to all enemies. Changes all Fighter Character orbs into Matching",
        specialNotes: "Decreases timing window to hit a Perfect. (Animation remains the same)"
    },
    935: {
        captain: "Boosts ATK of Fighter characters by 2x, and their HP by 1.5x. If HP is above 70% or below 30%, boosts ATK of Fighter characters by 2.75 instead",
        specialName: "Fishman Karate!! Shark Fist Tile Breaker",
        special: "Makes Perfects harder to hit for 1 turn. Deals 20x character's ATK in [INT] damage to all enemies. Changes all Fighter Character orbs into matching",
        specialNotes: "Decreases timing window to hit a Perfect. (Animation remains the same)"
    },
    936: {
        captain: "Boosts Chain Multiplier by 3x",
        specialName: "Gum-Gum Giant Jet Shell",
        special: "Deals 20x ATK as [QCK] damage, and makes Perfects easier to hit for 3 turns",
        specialNotes: "Increases timing window to hit a Perfect. (Animation remains the same)"
    },
    937: {
        captain: "Boosts Chain Multiplier by 3.5x and boosts HP by 1.25x",
        specialName: "Gum-Gum Giant Jet Shell",
        special: "Deals 20x ATK as [QCK] damage, and makes Perfects easier to hit for 3 turns",
        specialNotes: "Increases timing window to hit a Perfect. (Animation remains the same)"
    },
    938: {
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Cerebral characters by 1.5x",
        specialName: "Cyclone Burst",
        special: "Reduces Bind duration for one character completely. For Striker and Cerebral characters, changes Badly Matching orbs into Matching orbs"
    },
    939: {
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Cerebral characters by 2x",
        specialName: "Cyclone Burst",
        special: "Reduces Bind duration for one character completely. For Striker and Cerebral characters, changes Badly Matching orbs into Matching orbs",
        limit: [
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Aquire new Captain Ability: Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of Cerebral characters by 2.25x" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for Cerebral and Striker characters" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK, HP and RCV of Cerebral and Striker characters by 50" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [INT] Damage Reduction" },
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
                "Name": "[INT] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
        ]
    },
    940: {
        captain: "Boosts ATK and HP of [DEX] characters by 1.5x",
        specialName: "Sure Kill! Exploding Star!!",
        special: "Deals 13x ATK as [DEX] damage to all enemies, and boosts ATK of [DEX] characters by 1.75x for 1 turn"
    },
    941: {
        captain: "Boosts ATK of [DEX] characters by 1.75x and their HP by 2.25x",
        specialName: "Sure Kill! Exploding Star!!",
        special: "Deals 13x ATK as [DEX] damage to all enemies, and boosts ATK of [DEX] characters by 1.75x for 1 turn"
    },
    942: {
        captain: "Boosts ATK and HP of [STR] characters by 1.5x",
        specialName: "Future Country's Big Incident: The Nightmare of Baldimore",
        special: "Reduces damage received from [QCK] enemies by 100% for 1 turn"
    },
    943: {
        captain: "Boosts ATK of [STR] characters by 2.25x and their HP by 1.75x",
        specialName: "Future Country's Big Incident: The Nightmare of Baldimore",
        special: "Reduces damage received from [QCK] enemies by 100% for 1 turn"
    },
    944: {
        captain: "Boosts ATK and RCV of Driven characters by 1.2x",
        specialName: "Spiritual Bouquet",
        special: "Boosts ATK and RCV of Driven characters by 1.5x for 1 turn"
    },
    945: {
        captain: "Boosts ATK and RCV of Driven characters by 1.75x",
        specialName: "Spiritual Bouquet",
        special: "Boosts ATK and RCV of Driven characters by 1.5x for 1 turn"
    },
    946: {
        specialName: "Lock-on Iron Ball",
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Striker characters by 1.75x",
        special: "Change Friend Captain orb and changes own orb into [INT]"
    },
    947: {
        captain: "Boosts ATK of [INT] characters by 1.5x, Boosts damage of [INT] specials by 1.5x",
        specialName: "Flame Flash",
        special: "[STR] and [INT] characters gain 1.3x ATK for 1 turn. Deals 10x character's ATK in [INT] damage to all enemies",
        captainNotes: "#{noFixedPerc}"
    },
    948: {
        captain: "Boosts ATK of Shooter characters by 1.5x and their RCV by 1.2x",
        specialName: "Twin Cannons",
        special: "Randomly changes all orbs to either [STR] or [INT]. Deals random [STR] damage",
        specialNotes: "#{random : 7,000 : 18,000}",
    },
    949: {
        captain: "Boosts ATK of Slasher characters by 2x, recovers 2x character's RCV in HP at the end of each turn",
        specialName: "Ties with Ace",
        special: "Reduces Silence duration by 3 turns, and recovers 4,000 HP",
        specialNotes: "#{silence}",
    },
    950: {
        captain: "Boosts ATK of Fighter and Free Spirit characters by 2.5x after scoring 3 Perfects in a row",
        specialName: "Flame Commandment: Fire Pillar",
        special: "Reduces Special Cooldown of Fighter and Free Spirit characters by 1 turn. Reduces damage received by 50% for 1 turn.",
        specialNotes: "Reducing Special Cooldown works as if you took an extra turn"
    },
    951: {
        captain: "Boosts ATK of Fighter and Free Spirit characters by 2.75x after scoring 3 Perfects in a row",
        specialName: "Flame Commandment: Fire Pillar",
        special: "Reduces Special Cooldown of Fighter and Free Spirit characters by 1 turn. Reduces damage received by 50% for 1 turn.",
        specialNotes: "Reducing Special Cooldown works as if you took an extra turn"
    },
    952: {
        captain: "Boosts ATK and HP of Shooter and Striker characters by 1.2x",
        specialName: "Life-saving Gunstock Blow",
        special: "Deals 13x ATK in [DEX] Damage to one enemy. Changes Captain's orb into matching."
    },
    953: {
        captain: "Boosts ATK and HP of Shooter and Striker characters by 1.5x",
        specialName: "Life-saving Gunstock Blow",
        special: "Deals 13x ATK in [DEX] Damage to one enemy. Changes Captain's orb into matching."
    },
    954:{
        captain: "Boosts ATK and HP of [QCK] characters by 1.5x",
        specialName: "Goldfish Fencing! I'll Dye the Sea Red with Your Blood",
        special: "Reduces the defense of all enemies by 80% for 2 turns"
    },
    955:{
        captain: "Boosts ATK and HP of [PSY] characters by 1.5x",
        specialName: "Get Rich Quick Scheme! We're All Gonna Be Rich",
        special: "Boosts ATK against enemies with reduced defense by 1.2x for 2 turns"
    },
    956:{
        captain: "Boosts ATK and HP of [INT] characters by 1.5x",
        specialName: "Fishman karate! I'll Finish You",
        special: "Boosts ATK of Powerhouse characters by 1.2x for 2 turns"
    },
    957:{
        specialName: "First Aid",
        special: "Recover 2,000 HP"
    },
    958:{
        specialName: "Bind Purge",
        special: "Reduces Bind duration by 2 turns"
    },
    959:{
        specialName: "Captain Soul Recovery",
        special: "Reduces Despair duration by 2 turns"
    },
    960:{
        specialName: "Slot Color Shuffle",
        special: "Randomly changes all orbs into either [STR], [DEX], [QCK], [PSY] or [INT] orbs"
    },
    961:{
        specialName: "Slot Power Light",
        special: "Amplifies the effect of orbs by 1.25x for 1 turn"
    },
    962:{
        specialName: "Captain Slot Change RCV",
        special: "Changes captain's orb into [RCV]"
    },
    963:{
        captain: "Boosts ATK of characters with cost between 50 and 55 by 2x",
        specialName: "Saint Charloss' Stroll",
        special: "Reduces the defense of all enemies by 100% for 1 turn and randomizes all orbs"
    },
    964:{
        captain: "Boosts ATK, HP, and RCV of characters with cost between 50 and 55 by 1.5x",
        specialName: "Wrath of the Creator Bloodline",
        special: "Boosts ATK of all characters by 1.1x for 1 turn. If \"Wrath of the Creator Bloodline\" is used again in the same turn the special is activated in, boosts ATK of all characters by 1.5x instead."
    },
    965:{
        captain: "Boosts ATK of characters with cost between 50 and 55 by 1.5x, recovers 500 HP at the end of each turn",
        specialName: "Wrath of the Creator Bloodline",
        special: "Boosts ATK of all characters by 1.1x for 1 turn. If \"Wrath of the Creator Bloodline\" is used again in the same turn the special is activated in, boosts ATK of all characters by 1.5x instead."
    },
    966:{
        captain: "Boosts ATK of Driven characters by 2.25x",
        specialName: "Repel",
        special: "Empties slots with [QCK] orbs, deals [QCK] damage based on number of [QCK] slots emptied to all enemies",
        specialNotes: "The exact multiplier used is chosen based on the number of [QCK] orbs consumed: 0 orbs - Can't activate; 1 orb - 14x ATK; 2 orbs - 21x ATK; 3 orbs - 35x ATK; 4 orbs - 49x ATK; 5 orbs - 91x ATK; 6 orbs - 140x ATK."
    },
    967:{
        captain: "Boosts ATK of Free Spirit characters by 2.25x",
        specialName: "Surgeon of Death's First Aid Surgery",
        special: "Recovers 20x character's RCV in HP. Switches orbs between slots twice"
    },
    968:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    969:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    970:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    971:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    972:{
        specialName: "High Heat Ray Laser",
        special: "Deals 25x ATK to one enemy. Changes own orb into matching orb"
    },
    973:{
        captain: "Boosts ATK of Powerhouse characters by 2x if HP is above 99% at the start of the turn",
        specialName: "Ironclad Thrust: Dwarf Guard of the World",
        special: "Deals 20,000 fixed damage to one enemy. Changes friend captain's orb into Matching orb"
    },
    974:{
        captain: "Boosts ATK of Powerhouse characters by 2.5x if HP is above 99% at the start of the turn",
        specialName: "Ironclad Thrust: Dwarf Guard of the World",
        special: "Deals 20,000 fixed damage to one enemy. Changes friend captain's orb into Matching orb"
    },
    975:{
        captain: "Reduces damage received by 10%",
        specialName: "A Threat That Puts Adults to Shame",
        special: "Boosts ATK of Striker and Driven characters by 1.3x for 1 turn. Protects from defeat as long as HP is above 50% for 1 turn",
        specialNotes: "#{zombie}"
    },
    976:{
        captain: "Boosts ATK of Driven characters by 2x. Reduces damage received by 10%",
        specialName: "A Threat That Puts Adults to Shame",
        special: "Boosts ATK of Striker and Driven characters by 1.3x for 1 turn. Protects from defeat as long as HP is above 50% for 1 turn",
        specialNotes: "#{zombie}"
    },
    977:{
        captain: "Boosts ATK of Shooter characters by 2x",
        specialName: "Yata no Kagami (Sacred Mirror)",
        special: [
            {
                "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn",
                "cooldown": [ 19, 5 ]
            },
            {
                "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn. Adds .5x to Chain multiplier for 2 turns",
                "cooldown": [ 25, 11 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    978:{
        captain: "Reduces cooldown of Shooter specials by 2 turns at the start of the fight, boosts ATK of Shooter characters by 2.25x and boosts HP of Shooter characters by 1.5x",
        specialName: "Yata no Kagami (Sacred Mirror)",
        special: [
            {
                "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn",
                "cooldown": [ 19, 5 ]
            },
            {
                "description": "Changes own orb into [QCK]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn. Adds .5x to Chain multiplier for 2 turns",
                "cooldown": [ 25, 11 ]
            }
        ],
        specialNotes: "#{stages}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Sailor Ability 1: Boosts ATK, HP and RCV of Shooter characters by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire new Captain Ability: Reduces cooldown of Shooter specials by 3 turns at the start of the fight, boosts ATK of Shooter characters by 2.35x and boosts HP of Shooter characters by 1.5x" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
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
    979: {
        captain: "Boosts ATK of [PSY] and [DEX] characters by 1.75x and their RCV by 1.2x",
        specialName: "Flintlock Barrage",
        special: "Randomly changes all orbs into either [PSY] or [DEX] orbs, deals random PSY damage to all enemies",
    },
    980: {
        captain: "Boosts ATK of [DEX] and [STR] characters by 1.75x and their RCV by 1.2x",
        specialName: "Hidden King Mallet",
        special: "Randomizes all orbs and changes own orb into [DEX]"
    },
    981: {
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x and sharply reduces their RCV",
        captainNotes: "The RCV Reduction is around 90%",
        specialName: "Martial Art Diving Fist",
        special: "Boosts own ATK by 1.75x for 1 turn and deals 800 fixed damage to one enemy",
        specialNotes: "#{fixed}"
    },
    982: {
        captain: "Boosts ATK of Slasher characters by 2x",
        specialName: "Flower Sword Straight Cut",
        special: "Deals 25x character's ATK in [QCK] damage to one enemy, changes bottom row orbs into matching orbs"
    },
    983: {
        captain: "Boosts ATK of Slasher characters by 2.25x, makes [RCV] and [TND] orbs \"beneficial\" to Slasher characters",
        captainNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
        specialName: "Flower Sword Straight Cut",
        special: "Deals 25x character's ATK in [QCK] damage to one enemy, changes bottom row orbs into matching orbs",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Slasher characters by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 2: Makes [DEX] orbs \"beneficial\" for this unit" },
            { "description": "Aquire Potential 2: Critical Hit" },
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
    984: {
        captain: "Boosts ATK of Striker characters by 2.25x",
        specialName: "Shrouds and Rattling Knot",
        special: "Delays all enemies for 1 turn and locks all orbs for 1 turn"
    },
    985:{
      captainNotes: "Acts as a Daimyo Turtle and thus gives 15k EXP"  
    },
    986:{
      captainNotes: "Acts as a Daimyo Turtle and thus gives 15k EXP"  
    },
    987:{
      captainNotes: "Acts as a Daimyo Turtle and thus gives 15k EXP"  
    },
    988:{
      captainNotes: "Acts as a Daimyo Turtle and thus gives 15k EXP"  
    },
    989:{
        captain: "Boosts ATK of characters with cost above 20 and below 30 by 2.5x, but reduces the HP of every character by 90%",
        special: "Changes the orbs in the left column into [G], [QCK] and [DEX], the orbs in the right column into [STR], [PSY] and [INT]",
        specialName: "Bluff Piracy"
    },
    990: {
        captain: "Boosts ATK of Free Spirit characters by 2.5x if HP is above 99% at the start of the turn",
        specialName: "10,000 Ton Vise of Hell",
        special: "Changes [RCV] orbs into matching orbs"
    },
    991: {
        captain: "Boosts ATK of Free Spirit characters by 2.75x if HP is above 99% at the start of the turn",
        specialName: "10,000 Ton Vise of Hell",
        special: "Changes [RCV] orbs into matching orbs"
    },
    992: {
        captain: "Boosts ATK of [QCK] characters by 2x",
        special: "Cuts the current HP of each enemy by 20% and changes own orb into [QCK]",
        specialName: "Punc Rock Fest"
    },
    993: {
        captain: "Boosts ATK of [QCK] characters by 2.5x",
        special: "Cuts the current HP of each enemy by 20% and changes own orb into [QCK]",
        specialName: "Punc Rock Fest",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire new Captain Ability: Boosts ATK of [QCK] characters by 2.75x" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 1: Boosts HP, RCV, and ATK of [QCK] characters by 30" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
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
    994: {
        captain: "Boosts amount of Beli received by 2x",
        special: "Reduces Special Cooldown of Cerebral and Fighter characters, and shows the stats of enemies",
        specialName: "Peeping Mind",
        special: [
            {
                "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 1 turn. Displays the status of all enemies.",
                "cooldown": [ 13, 7 ]
            },
            {
                "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 2 turn. Displays the status of all enemies.",
                "cooldown": [ 20, 14 ]
            }
        ],
        specialNotes: "Status includes Enemy Attack, Defense, Combo Hits, Current / Total HP, Attack Interval, 'Specials based on turns', and 'Effect after Death'<br>#{stages}",
        sailor: "Restores her own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    995:{
        captain: "Boosts amount of Beli received by 3x",
        special: "Reduces Special Cooldown of Cerebral and Fighter characters, and shows the stats of enemies",
        specialName: "Peeping Mind",
        special: [
            {
                "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 1 turn. Displays the status of all enemies.",
                "cooldown": [ 13, 7 ]
            },
            {
                "description": "Reduces Special Cooldown of Cerebral and Fighter specials by 2 turn. Displays the status of all enemies.",
                "cooldown": [ 20, 14 ]
            }
        ],
        specialNotes: "Status includes Enemy Attack, Defense, Combo Hits, Current / Total HP, Attack Interval, 'Specials based on turns', and 'Effect after Death'<br>#{stages}",
        sailor: "Restores her own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    996: {
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: [
            {
                "description": "For Powerhouse characters, changes Badly Matching orbs into Matching orbs.",
                "cooldown": [ 11, 5 ]
            },
            {
                "description": "For all characters, changes Badly Matching orbs into Matching orbs.",
                "cooldown": [ 20, 14 ]
            }
        ],
        specialName: "Decapitation High Heel",
        specialNotes: "#{stages}"
    },
    997: {
        captain: "Boosts ATK of Powerhouse characters by 2.25x, makes [TND] and [RCV] orbs \"beneficial\" to Powerhouse characters",
        captainNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        special: [
            {
                "description": "For Powerhouse characters, changes Badly Matching orbs into Matching orbs.",
                "cooldown": [ 11, 5 ]
            },
            {
                "description": "For all characters, changes Badly Matching orbs into Matching orbs.",
                "cooldown": [ 20, 14 ]
            }
        ],
        specialName: "Decapitation High Heel",
        specialNotes: "#{stages}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 90" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Sailor Ability 1: Makes [TND] orbs \"beneficial\" for Powerhouse characters" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 2: Makes [RCV] orbs \"beneficial\" for Powerhouse characters" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turn",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ]
    },
    998: {
        captain: "Boosts ATK of Driven characters by 2x and reduces cooldown of all specials by 1 turn at the start of the fight",
        specialName: "Hira Release: Death Enjambre",
        special: "Delays all enemies for 2 turns, deals 50x character's ATK as typeless damage to all enemies at the end of the turn for 5 turns"
    },
    999: {
        captain: "Boosts ATK of Driven characters by 2.25x and reduces cooldown of all specials by 2 turns at the start of the fight",
        specialName: "Hira Release: Death Enjambre",
        special: "Delays all enemies for 2 turns, deals 50x character's ATK as typeless damage to all enemies at the end of the turn for 5 turns",
        limit: [
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [DEX] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ??% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by ?%",
                    "Level 2: Reduce damage taken from [DEX] characters by ?%",
                    "Level 3: Reduce damage taken from [DEX] characters by ?%",
                    "Level 4: Reduce damage taken from [DEX] characters by ?%",
                    "Level 5: Reduce damage taken from [DEX] characters by ?%"
                ]
            },
        ]
    },
    1000: {
        captain: "Boosts ATK of all characters proportionally to the crew's current HP. Heals for 1.5x his RCV at the end of the turn each time you hit a Good. Heals for .5x his RCV at the end of the turn each time you hit a Great",
        captainNotes: "#{captainProportional : higher : 1 + 1 * (remaining HP) / (total HP) : 2 : 1 }",
        special: "Recovers 25x character's RCV in HP. Reduces Bind and Despair duration by 3 turns",
        specialName: "Love Sacrifice"
    },

};

module.exports.db1 = db1;
