//Copied from the optc-db.github.io database files. All credit goes to them.

var db3 = {
    1001: {
        captain: "Boosts ATK of all characters proportionally to the crew's current HP. Heals for 1.5x his RCV at the end of the turn each time you hit a Good. Heals for .5x his RCV at the end of the turn each time you hit a Great",
        captainNotes: "#{captainProportional : higher : 1 + 1 * (remaining HP) / (total HP) : 2 : 1 }",
        special: "Recovers 25x character's RCV in HP. Reduces Bind and Despair duration by 3 turns",
        specialName: "Love Sacrifice"
    },
    1002: {
        captain: "Boosts ATK of Fighter characters by 1.5x",
        special: "Reduces Paralysis duration by 3 turns and deals 7x ATK as [STR] damage to one enemy",
        specialName: "Bepo's Ultimate Fist!!",
        specialNotes: "Paralysis causes that unit to have a chance of not attacking and breaking chain"
    },
    1003: {
        captain: "Boosts ATK of Fighter characters by 2x",
        special: "Reduces Paralysis duration by 3 turns and deals 7x ATK as [STR] damage to one enemy",
        specialName: "Bepo's Ultimate Fist!!",
        specialNotes: "Paralysis causes that unit to have a chance of not attacking and breaking chain"
    },
    1004: {
        captain: "Boosts RCV of all characters by 1.5x",
        specialName: "Hilarious Combination",
        special: "Changes the orbs in the left column into [RCV] orbs"
    },
    1005: {
        captain: "Boosts ATK of Powerhouse characters by 1.5x",
        specialName: "Rush to Freedom",
        special: "Boosts own ATK by 1.75x for 1 turn"
    },
    1006: {
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        specialName: "Rush to Freedom",
        special: "Boosts own ATK by 1.75x for 1 turn"
    },
    1007: {
        captain: "Boosts ATK of Cerebral and Free Spirit characters by 1.5x",
        specialName: "Cherry Blossom Storm: Spring Pattern",
        special: "Changes adjacent orbs into [RCV] and recovers 3,000 HP"
    },
    1008: {
        captain: "Boosts ATK of Cerebral and Free Spirit characters by 2x. Recovers 3x character's RCV in HP at the end of each turn",
        specialName: "Cherry Blossom Storm: Spring Pattern",
        special: "Changes adjacent orbs into [RCV] and recovers 3,000 HP"
    },
    1009: {
        special: "Changes [BLOCK] orbs into [STR], deals 20x character's ATK in STR damage to one enemy",
        specialName: "Gum-Gum Flail",
        captain: "Boosts ATK of [STR] and Fighter characters by 1.5x, reduces cooldown of all specials by 1 turn at the start of the fight",
        captainNotes: "The bonus is cumulative. STR Fighter characters get a 2.25x bonus."
    },
    1010:{
        captain: "Boosts ATK of Driven characters by 1.5x",
        special: "Boosts own ATK by 1.3x for 5 turns, reduces damage received by 20% for 5 turns, deals 13x character's ATK as [INT] damage to one enemy",
        specialName: "Evil Beast's Horn Pierce"
    },
    1011:{
        captain: "Boosts ATK of Driven characters by 1.75x and boosts ATK of Powerhouse characters by 1.5x",
        captainNotes: "The bonus is cumulative. Driven Powerhouse characters get a 2.625x bonus.",
        special: "Boosts own ATK by 1.3x for 5 turns, reduces damage received by 20% for 5 turns, deals 13x character's ATK as [INT] damage to one enemy",
        specialName: "Evil Beast's Horn Pierce"
    },
    1012: {
        specialName: "Phantom Snake Sword",
        special: "Changes the orbs in the left column into [RCV], [QCK] and [DEX], binds himself for 2 turns"
    },
    1013: {
        specialName: "Binding Iron Chain",
        special: "Boosts ATK against delayed enemies by 1.2x for 1 turn"
    },
    1014: {
        special: "Binds himself for 1 turn and makes Perfects easier to hit for 2 turns",
        specialName: "Scapegoat Substitute",
        captain: "Boosts ATK of Powerhouse characters by 2x and Recovers 2x character's RCV in HP at the end of each turn"
    },
    1015: {
        captain: "Boosts ATK of [INT] characters by 2.75x if they have a matching orb",
        special: "Randomizes all orbs. Boosts ATK of [INT] characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of [INT] characters by 1.5x for the next 2 turns",
        specialName: "Hollow Eye Killing Shot"
    },
    1016: {
        captain: "Boosts ATK of [INT] characters by 3x if they have a matching orb, by 1.5x otherwise",
        special: "Randomizes all orbs. Boosts ATK of [INT] characters by 1.5x for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of [INT] characters by 1.5x for the next 2 turns",
        specialName: "Hollow Eye Killing Shot"
    },
    1017: {
        captain: "Boosts HP of Slasher characters by 1.5x",
        special: "Changes own orb into [PSY]. Deals several times the character's ATK in [PSY] damage to one enemy. Boosts ATK of Slasher characters by 1.5x for 1 turn",
        specialName: "Ravaging Cutlass Dance",
        specialNotes: "#{specialProportional : lower : 75 * ( 1 - (remaining HP) / (total HP) )}",
    },
    1018: {
        captain: "Boosts ATK of Slasher characters by 1.5x and their HP by 2x",
        special: "Changes own orb into [PSY]. Deals several times the character's ATK in [PSY] damage to one enemy. Boosts ATK of Slasher characters by 1.5x for 1 turn",
        specialName: "Ravaging Cutlass Dance",
        specialNotes: "#{specialProportional : lower : 75 * ( 1 - (remaining HP) / (total HP) )}",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Slasher characters by 30",
            "level2": "If this character has a PSY orb and you hit a Perfect with him, keep his PSY orb for the next turn",
        },
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: Slot Bind Self-Reduction" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Slasher characters by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 90" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Aquire Sailor Ability 2: If this character has a PSY orb and you hit a Perfect with him, keep his PSY orb for the next turn" },
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
    1019: {
        captain: "Reduces damage received from [QCK] enemies by 50%",
        special: "Switches orbs between slots 2 times and deals 2000 fixed damage to one enemy",
        specialName: "Blacksmithing Measurement: Double Slash",
        specialNotes: "#{fixed}"
    },
    1020: {
        captain: "Boosts ATK and RCV of Shooter and Cerebral characters by 1.5x.",
        captainNotes: "This effect does not stack for characters that have both classes.",
        specialName: "Sweet Fruit Trap",
        special: "Recovers 9x characters RCV in HP. Changes captain's orb into Matching orb"
    },
    1021: {
        captain: "Boosts ATK and RCV of Shooter and Cerebral characters by 1.75x.",
        captainNotes: "This effect does not stack for characters that have both classes.",
        specialName: "Sweet Fruit Trap",
        special: "Recovers 9x characters RCV in HP. Changes captain's orb into Matching orb"
    },
    1022: {
        captain: "Boosts ATK of all characters by 2x and boosts amount of Beli received by 1.2x",
        special: "Deals 13x character's ATK as [PSY] damage to all enemies. Changes [BOMB], [EMPTY] and [TND] orbs to [PSY]",
        specialName: "Gum-Gum Gigant Rifle: New Star"
    },
    1023: {
        captain: "Boosts ATK of Free Spirit characters by 2.25x",
        special: "Deals 13x characters ATK in INT damage to all enemies, boosts atk of Free Spirit characters by 1.75x for one turn.",
        specialName: "Flame Mirror: Dawn"
    },
    1024: {
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Amplifies the effect of orbs for 2 turns, the exact multiplier changes depending on the current HP at the time the special was activated. ",
        specialNotes: "Below 30% -> 1.75x orb boost, between 30% and 70% -> 1.5x, above 70% -> 1.25x",
        specialName: "Eight-Impact Fist! Blow of Resentment"
    },
    1025: {
        captain: {
            "base": "Boosts ATK of Powerhouse characters by 2x and boosts the HP of Striker characters by 2x",
            "level1": "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Powerhouse characters by 2.25x and boosts the HP of Striker characters by 2x",
        },
        captainNotes: "A character with both classes will get both boosts",
        special: "Amplifies the effect of orbs for 2 turns, the exact multiplier changes depending on the current HP at the time the special was activated. ",
        specialNotes: "Below 30% -> 1.75x orb boost, between 30% and 70% -> 1.5x, above 70% -> 1.25x",
        specialName: "Eight-Impact Fist! Blow of Resentment",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of Powerhouse and Striker characters by 50",
        },
        limit: [
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK and HP of Powerhouse and Striker characters by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire new Captain Ability: Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Powerhouse characters by 2.25x and boosts the HP of Striker characters by 2x" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Enrage" },
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
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1026: {
        captain: "Boosts ATK and RCV of Fighter characters by 1.5x",
        specialName: "Shooting Moon",
        special: "Changes Captain orb into Matching orb and switches orbs between slots three times"
    },
    1027: {
        captain: "Boosts ATK and RCV of Fighter characters by 2x",
        specialName: "Shooting Moon",
        special: "Changes Captain orb into Matching orb and switches orbs between slots three times"
    },
    1028: {
        captain: "Boosts ATK of all characters by 2.5x after the 21st hit in the chain",
        specialName: "Rah-Rah-Rah Rampage",
        special: "Deals random damage to all enemies, boosts ATK of all characters by 1.75x after 30th hit in the chain for 3 turns.",
        specialNotes: "Buffalo's Captain as a Special essentially"
    },
    1029: {
        captain: "Boosts ATK of all characters by 2.5x after the 21st hit in the chain and by 3.5x after the 36th hit",
        specialName: "Rah-Rah-Rah Rampage",
        special: "Deals random damage to all enemies, boosts ATK of all characters by 1.75x after 30th hit in the chain for 3 turns.",
        specialNotes: "Buffalo's Captain as a Special essentially"
    },
    1030: {
        captain: "Boosts ATK of Powerhouse characters by 2.5x if HP is above 99% at the start of the turn",
        specialName: "Hero's Gungnir",
        special: "Reduces crew's HP to 1, deals 10x the removed HP as damage to one enemy. Boosts own ATK by 2.25x for 1 turn."
    },
    1031: {
        captain: "Boosts ATK of Powerhouse characters by 2.75x if HP is above 99% at the start of the turn",
        specialName: "Hero's Gungnir",
        special: "Reduces crew's HP to 1, deals 10x the removed HP as damage to one enemy. Boosts own ATK by 2.25x for 1 turn."
    },
    1032: {
        captain: "Boosts ATK of Striker and Slasher characters by 1.5x and reduces cooldown of Slasher and Striker characters by 1 turn at the start of the fight",
        special: "Reduces Special Cooldown of Slasher and Striker specials by 1 turn. For Slasher and Striker characters, changes Badly Matching orbs into [RCV] orbs.",
        specialName: "Surprise Pincer Attack"
    },
    1033: {
        captain: "Boosts ATK of Striker and Slasher characters by 2.25x and reduces cooldown of Slasher and Striker characters by 2 turns at the start of the fight",
        special: "Reduces Special Cooldown of Slasher and Striker specials by 1 turn. For Slasher and Striker characters, changes Badly Matching orbs into [RCV] orbs.",
        specialName: "Surprise Pincer Attack",
        sailor: {
            "base": "None",
            "level1": "Boosts ATK and HP of Slasher and Striker characters by 50",
            "level2": "Restores his own special by 1 turn when it is rewinded",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts ATK and HP of Slasher and Striker characters by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 2: Restores his own special by 1 turn when it is rewinded" },
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
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 25% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1034: {
        captain: "Boosts ATK of Striker characters by a variable amount depending on how many Strikers are on your team. If you don't attack with Bartolomeo, reduces damage received by 30% for that turn.",
        captainNotes: "ATK boost with 1 Striker is 1.25x. With 2 Strikers: 1.5x. With 3 Strikers: 1.75x. With 4 Strikers: 2x. With 5 Stikers: 2.5x. With 6 Strikers: 2.75x",
        special: "Protects from defeat for 1 turn and deals several times character's ATK in Typeless damage to one enemy",
        specialNotes: "#{specialProportional : lower : 150 * ( 1 - (remaining HP) / (total HP) )} <br> #{zombie}",
        specialName: "Bari Bari No Pistol"
    },
    1035: {
        captain: "Boosts ATK of Striker characters by a variable amount depending on how many Strikers are on your team. If you don't attack with Bartolomeo, reduces damage received by 30% for that turn.",
        captainNotes: "ATK boost with 1 Striker is 1.25x. With 2 Strikers: 1.5x. With 3 Strikers: 1.75x. With 4 Strikers: 2x. With 5 Stikers: 2.5x. With 6 Strikers: 2.75x",
        special: "Protects from defeat for 1 turn and deals several times character's ATK in Typeless damage to one enemy",
        specialNotes: "#{specialProportional : lower : 150 * ( 1 - (remaining HP) / (total HP) )} <br> #{zombie}",
        specialName: "Bari Bari No Pistol",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of Striker characters by 60",
            "level2": "Completely resists Paralysis on this character",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK and HP of Striker characters by 60" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 45" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 2: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 2: Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Aquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [DEX] characters by 2%",
                    "Level 2: Reduce damage taken from [DEX] characters by ?%",
                    "Level 3: Reduce damage taken from [DEX] characters by ?%",
                    "Level 4: Reduce damage taken from [DEX] characters by ?%",
                    "Level 5: Reduce damage taken from [DEX] characters by ?%"
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
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by ? turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turn",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1036: {
        captain: "Boosts ATK of Free Spirit characters by 2x after scoring 3 Perfects in a row",
        special: "Deals 13x ATK in QCK Damage to one Enemy, Changes Orbs depending on the current HP",
        specialName: "Kenpo: Kick Thrust Drop",
        specialNotes: "HP>99%: Middle Left and Bottom Left Orbs into matching <br> 99%>HP>30%: Left Column to [G] orbs <br> HP<30%: Left Column to [RCV]"
    },
    1037: {
        captain: "Boosts ATK of Free Spirit characters by 2.5x after scoring 3 Perfects in a row",
        special: "Deals 13x ATK in QCK Damage to one Enemy, Changes Orbs depending on the current HP",
        specialName: "Kenpo: Kick Thrust Drop",
        specialNotes: "HP>99%: Middle Left and Bottom Left Orbs into matching <br> 99%>HP>30%: Left Column to [G] orbs <br> HP<30%: Left Column to [RCV]"
    },
    1038: {
        captain: "Boosts ATK and RCV of [DEX] and [QCK] characters by 1.2x",
        special: "Switches orbs between slots once, recovers 0.3x character's RCV in HP",
        specialName: "Great Scissors"
    },
    1039: {
        captain: "Boosts ATK and RCV of [DEX] and [QCK] characters by 1.5x",
        special: "Switches orbs between slots once, recovers 0.3x character's RCV in HP",
        specialName: "Great Scissors"
    },
    1040: {
        captain: "Boosts ATK and HP of [STR] characters by 1.5x",
        special: "Deals 30x the character's ATK as STR damage to all enemies. Boosts ATK of everyone by 1.5x if HP is below 30% at the time the special is activated",
        specialName: "Ice Throw"
    },
    1041: {
        captain: "Boosts ATK and HP of [STR] characters by 2x",
        special: "Deals 30x the character's ATK as STR damage to all enemies. Boosts ATK of everyone by 1.5x if HP is below 30% at the time the special is activated",
        specialName: "Ice Throw"
    },
    1042: {
        captain: "Boosts ATK of Striker and Slasher characters by 2x, reduces crew's RCV to 0.",
        special: "Changes [STR] and [QCK] orbs on Striker and Slasher characters into matching orbs, cuts the current HP of one enemy by 7%",
        specialName: "Hitting Size"
    },
    1043: {
        captain: "Boosts ATK of Striker and Slasher characters by 2.75x if they have a matching Orb, by 2x otherwise, reduces crew's RCV to 0.",
        special: "Changes [STR] and [QCK] orbs on Striker and Slasher characters into matching orbs, cuts the current HP of one enemy by 7%",
        specialName: "Hitting Size",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Slasher characters by 30",
            "level2": "Boosts base HP of Slasher characters by 60",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Slasher characters by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Aquire Sailor Ability 2: Boosts base HP of Slasher characters by 60" },
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
    1044: {
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2x at the start of the chain, by 3x after the 3rd Perfect in a row and by 4x after the 5th Perfect in a row.",
        specialName: "Gamma Knife",
        special: [
            {
                "description": "Makes Damage and Health Cutting Specials of Slasher and Free Spirit characters bypass all defensive Buffs, deals 20x character's ATK in [PSY] fixed damage to one enemy.",
                "cooldown": [ 18, 13 ]
            },
            {
                "description": "Makes Damage and Health Cutting Specials of all characters bypass all defensive Buffs, deals 50x character's ATK in [PSY] fixed damage to one enemy.",
                "cooldown": [ 25, 20 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    1045: {
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2x at the start of the chain, by 3x after the 3rd Perfect in a row and by 4x after the 5th Perfect in a row.",
        specialName: "Gamma Knife",
        sailor: {
            "base": "None",
            "level1": "When HP is below 10% at the start of the turn, boosts base RCV of Slasher and Free Spirit characters by 300",
            "level2": "Makes [INT], [RCV] and [TND] orbs \"beneficial\" for this unit"
        },
        special: [
            {
                "description": "Makes Damage and Health Cutting Specials of Slasher and Free Spirit characters bypass all defensive Buffs, deals 20x character's ATK in [PSY] fixed damage to one enemy.",
                "cooldown": [ 18, 13 ]
            },
            {
                "description": "Makes Damage and Health Cutting Specials of all characters bypass all defensive Buffs, deals 50x character's ATK in [PSY] fixed damage to one enemy.",
                "cooldown": [ 25, 20 ]
            }
        ],
        specialNotes: "#{stages}",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Aquire Sailor Ability 1: When HP is below 10% at the start of the turn, boosts base RCV of Slasher and Free Spirit characters by 300" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 55" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base HP by 75" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 85" },
            { "description": "Aquire Sailor Ability 2: Makes [INT], [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 95" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Aquire Potential 3: Critical Hit" },
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
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
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
    1046: {
        captain: "Boosts ATK of Free Spirit characters by 2.75x following a chain of Good > Great > Perfect hits",
        specialName: "Dragon Claw Fist: Dragon's Breath",
        special: "Deals random typeless damage to all enemies. Adds 55x character's ATK as Additional Typeless Damage for 2 turns",
        specialNotes: "#{random : 10,000 : 30,000} <br> Extra Damage can only be boosted by conditional Boosters"
    },
    1047: {
        captain: "Boosts ATK of Free Spirit characters by 3.5x following a chain of Good > Great > Perfect hits",
        specialName: "Dragon Claw Fist: Dragon's Breath",
        special: "Deals random typeless damage to all enemies. Adds 55x character's ATK as Additional Typeless Damage for 2 turns",
        specialNotes: "#{random : 10,000 : 30,000} <br> Extra Damage can only be boosted by conditional Boosters"
    },
    1048: {
        captain: "Boosts ATK and RCV of [PSY] characters by 1.2x",
        special: "Reduces Paralysis duration by 3 turns and Recovers 4x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Mother's Wish to Fight The World"		
    },
    1049: {
        captain: "Boosts ATK and RCV of [PSY] characters by 1.5x, when HP is low the ATK multiplier becomes 2.25x",
        captainNotes: "The low HP threshold is estimated to be 30%",
        special: "Reduces Paralysis duration by 3 turns and Recovers 4x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Mother's Wish to Fight The World"		
    },
    1050: {
        captain: "Boosts ATK of [PSY] characters by 1.5x",
        special: "Reduces Bind duration by 4 turns and Reduces damage received by 50% for 2 turns",
        specialName: "Dereshishishi Towards Hope"
    },
    1051: {
        captain: "Boosts ATK of [PSY] characters by 2x",
        special: "Reduces Bind duration by 4 turns and Reduces damage received by 50% for 2 turns",
        specialName: "Dereshishishi Towards Hope"
    },
    1052: {
        captain: "Recovers 1,000 HP at the end of each turn",
        special: "Reduces Silence duration by 2 turns",
        specialName: "Knowledge the World is Afraid of",
        specialNotes: "#{silence}",
    },
    1053: {
        captain: "Boosts RCV of Cerebral characters by 1.5x",
        special: "Reduces Paralysis and Despair duration by 3 turns, removes Blindness",
        specialName: "Precocious Provocation"
    },
    1054: {
        captain: "Boosts RCV of Cerebral characters by 2x",
        special: "Reduces Paralysis and Despair duration by 3 turns, removes Blindness",
        specialName: "Precocious Provocation"
    },
    1055: {
        special: "Deals 20x character's ATK in [DEX] damage to one enemy. Boosts ATK against Strongly Poisoned enemies by 1.4x for 2 turns ",
        specialName: "Snake Press"
    },
    1056: {
        captain: "Boosts ATK of Powerhouse characters by 2x and their RCV by 1.25x",
        special: "Deals 20x character's ATK in [DEX] damage to one enemy. Boosts ATK against Strongly Poisoned enemies by 1.4x for 2 turns ",
        specialName: "Snake Press"
    },
    1057: {
        special: "Strongly Poisons one enemy",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn",
        specialName: "Deadly Poisonous Corrosive Liquid"
    },
    1058: {
        captain: "Boosts ATK of Powerhouse characters by 2x and their HP by 1.25x",
        special: "Strongly Poisons one enemy",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn",
        specialName: "Deadly Poisonous Corrosive Liquid"
    },
    1059: {
        captain: "Boosts ATK and RCV of Shooter characters by 1.2x",
        special: "Deals 5,000 fixed damage to one enemy. Amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Strong Bow of Rejection"
    },
    1060: {
        captain: "Boosts ATK and RCV of Shooter characters by 1.5x",
        special: "Deals 5,000 fixed damage to one enemy. Amplifies the effect of orbs by 1.5x for 1 turn",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Strong Bow of Rejection"
    },
    1061: {
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Locks the chain multiplier at 2x for 2 turns",
        specialName: "Instructions to the Warriors"
    },
    1062: {
        captain: "Boosts ATK of Cerebral characters by 2x and Recovers 2x character's RCV in HP at the end of each turn",
        special: "Recovers 13x character's RCV in HP",
        specialName: "Timeless Art of Self-Defense"
    },
    1063: {
        captain: "Boosts ATK and HP of Shooter characters by 1.2x",
        special: "Boosts ATK of Shooter characters by 1.3x for 1 turn",
        specialName: "Shooting Power Light"
    },
    1064: {
        captain: "Boosts ATK and HP of [INT] characters by 1.2x",
        special: "Recovers 3x character's RCV in HP at the end of each turn for 5 turns",
        specialName: "Auto Repair"
    },
    1065: {
        captain: "Boosts ATK of Slasher characters by 1.5x",
        special: "Amplifies the effect of orbs by 1.25x for 1 turn",
        specialNotes: "#{orb : 1.25x}",
        specialName: "Slot Power Light"
    },
    1066: {
        captain: "Boosts ATK and HP of [PSY] characters by 1.2x",
        special: "Adds .1x to Chain multiplier for 1 turn",
        specialName: "Chain Plus Light"
    },
    1067: {
        captain: "Boosts ATK of Fighter characters by 1.5x",
        special: "Boosts own ATK by 1.5x for 1 turn",
        specialName: "Attack Boost Light"
    },
    1068: {
        captain: "Boosts chain multiplier by 1.5x",
        special: "Changes captain's orb into [QCK]",
        specialName: "Captain Slot Change QCK"
    },
    1069: {
        captain: "Boosts ATK of Driven characters by 1.5x",
        special: "Deals 9x ATK in [DEX] damage to one enemy. Changes own orb into [DEX]",
        specialName: "Fighting Method of the Pirate Executioner"
    },
    1070: {
        captain: "Boosts ATK of Driven characters by 2.25x",
        special: "Deals 9x ATK in [DEX] damage to one enemy. Changes own orb into [DEX]",
        specialName: "Fighting Method of the Pirate Executioner"
    },
    1071: {
        captain: "Boosts ATK of characters with cost 20 or less by 1.5x",
        special: "Deals 20x ATK in [STR] damage to one enemy. Boosts ATK of Powerhouse characters by 1.5x for 1 turn.",
        specialName: "Emerald Porcupine Robe"
    },
    1072: {
        captain: "Boosts ATK of characters with cost 20 or less by 2x and boosts the HP of Powerhouse characters by 1.2x",
        special: "Deals 20x ATK in [STR] damage to one enemy. Boosts ATK of Powerhouse characters by 1.5x for 1 turn.",
        specialName: "Emerald Porcupine Robe"
    },
    1073: {
        captain: "Boosts ATK of Slasher characters by 1.5x",
        special: "Deals 5x ATK in [QCK] damage to all enemies and randomizes all orbs",
        specialName: "Drilling Hooks"
    },
    1074: {
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Changes [QCK] and [PSY] orbs into [INT] orbs.",
        specialName: "Tenacious Sword of Destruction"
    },
    1075: {
        captain: "Boosts ATK and HP of [INT] characters by 2x",
        special: "Changes [QCK] and [PSY] orbs into [INT] orbs.",
        specialName: "Tenacious Sword of Destruction",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of [INT] characters by 50",
        },
        limit: [
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of [INT] characters by 50" },
            { "description": "Boosts base ATK by 45" },
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
    1076:{
        captain: "Boosts ATK of Striker and Free Spirit characters by 1.75x",
        special: [
            {
                "description": "Delays all enemies for 1 turn. Locks all orbs for 1 turn. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 16, 12 ]
            },
            {
                "description": "Delays all enemies for 1 turn. Locks all orbs for 1 turn. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 20, 16 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Haute Couture: Patchwork"
    },
    1077:{
        captain: {
            "base": "Boosts ATK of Striker and Free Spirit characters by 2.25x and their RCV by 1.5x",
            "level1": "Boosts ATK of Striker and Free Spirit characters by 2.45x and their RCV by 1.5x",
        },
        special: [
            {
                "description": "Delays all enemies for 1 turn. Locks all orbs for 1 turn. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 16, 12 ]
            },
            {
                "description": "Delays all enemies for 1 turn. Locks all orbs for 1 turn. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 20, 16 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Haute Couture: Patchwork",
        sailor: {
            "base": "None",
            "level1": "Boosts ATK of Striker characters by 30",
            "level2": "Boosts this character's attack against DEX characters by 2x",
        },
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Aquire Sailor Ability 1: Boosts ATK of Striker characters by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire new Captain Ability: Boosts ATK of Striker and Free Spirit characters by 2.45x and their RCV by 1.5x" },
            { "description": "Aquire Sailor Ability 2: Boosts this character's attack against DEX characters by 2x" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 30% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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
    1078: {
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Recovers 6x character's RCV in HP. Reduces Paralysis duration by 3 turns",
                "cooldown": [ 14, 8 ]
            },
            {
                "description": "Recovers 15x character's RCV in HP. Removes Paralysis, Poison, RCV Down and Blindness",
                "cooldown": [ 19, 13 ]
            },
            {
                "description": "Recovers 50x character's RCV in HP. Removes Paralysis, Poison, RCV Down and Blindness",
                "cooldown": [ 24, 18 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Chiyupopo"
    },
    1079: {
        captain: "Recovers 4x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Recovers 6x character's RCV in HP. Reduces Paralysis duration by 3 turns",
                "cooldown": [ 14, 8 ]
            },
            {
                "description": "Recovers 15x character's RCV in HP. Removes Paralysis, Poison, RCV Down and Blindness",
                "cooldown": [ 19, 13 ]
            },
            {
                "description": "Recovers 50x character's RCV in HP. Removes Paralysis, Poison, RCV Down and Blindness",
                "cooldown": [ 24, 18 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Chiyupopo",
        sailor: {
            "base": "None",
            "level1": "Reduces Paralysis for 1 turn for herself",
            "level2": "Reduces Silence duration against this unit by 2 turns",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Reduces Paralysis for 1 turn for herself" },
            { "description": "Boosts base HP by 55" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Aquire Sailor Ability 2: Reduces Silence duration against this unit by 2 turns" },
            { "description": "Boosts base HP by 65" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turns",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ]
    },
    1080: {
        captain: "Boosts ATK of characters with cost 20 or less by 2.5x",
        special: "Deals [DEX] damage to one enemy, changes own orb to [DEX] and boosts own ATK by 2x for 1 turn",
        specialName: "Trueno Bastardo"
    },
    1081: {
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x",
        special: "Deals [DEX] damage to one enemy, changes own orb to [DEX] and boosts own ATK by 2x for 1 turn",
        specialName: "Trueno Bastardo",
        sailor: {
            "base": "None",
            "level1": "Reduces Paralysis duration for 2 turns for himself",
            "level2": "Boosts base ATK of all characters by 50",
        },
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Reduces Paralysis duration for 2 turns for himself" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK of all characters by 50" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
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
        potentialNotes: "#{enrage}"
    },
    1082: {
        captain: "Boosts ATK of Striker and Fighter characters by 1.2x",
        special: "Deals 20x ATK in [STR] damage to all enemies. For 2 turns, boosts ATK of Striker and Fighter characters by a variable amount depending on the current HP at the time the special was activated.",
        specialNotes: "Below 30% -> 1.75 boost, between 30% and 70% -> 1.5, above 70% -> 1.2",
        specialName: "Drill Dragon: Drill Nail"
    },
    1083: {
        captain: "Boosts ATK of Striker and Fighter characters by 1.5x at the start of the chain and by 3x after the 3rd Perfect in a row",
        special: "Deals 20x ATK in [STR] damage to all enemies. For 2 turns, boosts ATK of Striker and Fighter characters by a variable amount depending on the current HP at the time the special was activated.",
        specialNotes: "Below 30% -> 1.75 boost, between 30% and 70% -> 1.5, above 70% -> 1.2",
        specialName: "Drill Dragon: Drill Nail",
        sailor: {
            "base": "None",
            "level1": "Restores his own special by 2 turns when it is rewinded",
            "level2": "Makes [QCK] orbs \"beneficial\" for this unit",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Sailor Ability 1: Restores his own special by 2 turns when it is rewinded" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 2: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Aquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 5% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 5% chance to deal 7% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 5% chance to deal 10% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 10% chance to deal 10% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 15% chance to deal 15% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1084: {
        captain: "Boosts HP of Driven characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise. Makes [TND] and [RCV] orbs \"beneficial\" to Driven characters",
        special: "Cuts the current HP of each enemy by 20%. At the end of the turn, cuts the current HP of each enemy by 20% for 3 turns",
        specialNotes: "Does not stack with other 'end of turn damage' abilities",
        specialName: "Gravito: Heavens Fall"
    },
    1085: {
        captain: "Boosts HP of Driven characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise. Makes [TND] and [RCV] orbs \"beneficial\" to Driven characters",
        special: "Cuts the current HP of each enemy by 20%. At the end of the turn, cuts the current HP of each enemy by 20% for 3 turns",
        specialNotes: "Does not stack with other 'end of turn damage' abilities",
        specialName: "Gravito: Heavens Fall",
        sailor: {
            "base": "None",
            "level1": "Cannot be Blown Away",
            "level2": "Boosts ATK, HP and RCV of Powerhouse and Driven characters by 50",
        },
        limit: [
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Aquire Sailor Ability 1: Cannot be Blown Away" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Aquire Potential 2: Critical Hit" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 2: Boosts ATK, HP and RCV of Powerhouse and Driven characters by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 2: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 10 turns on this character",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1086: {
        captain: "Boosts ATK and RCV of Driven characters by 1.5x",
        specialNotes: "#{orb : 1.5x}",
        special: "Randomizes all orbs including [BLOCK] orbs. Amplifies the effect of orbs by 1.5x for 2 turns",
        specialName: "Lot Stiffen"
    },
    1087: {
        captain: "Boosts ATK of Driven characters by 2x and their RCV by 1.5x",
        specialNotes: "#{orb : 1.5x}",
        special: "Randomizes all orbs including [BLOCK] orbs. Amplifies the effect of orbs by 1.5x for 2 turns",
        specialName: "Lot Stiffen"
    },
    1088: {
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Reduces crew's HP by 70%, deals 15x ATK in [QCK] damage to all enemies. Boosts ATK of Slasher and Driven characters by 1.5x for 1 turn.",
        specialName: "Seven Stars Sword of Darkness"
    },
    1089: {
        captain: "Boosts ATK of Slasher characters by 2x and boosts HP of Driven characters by 1.75x",
        captainNotes: "Slasher + Driven characters gain ATK AND HP",
        special: "Reduces crew's HP by 70%, deals 15x ATK in [QCK] damage to all enemies. Boosts ATK of Slasher and Driven characters by 1.5x for 1 turn.",
        specialName: "Seven Stars Sword of Darkness"
    },
    1090: {
        captain: "Boosts ATK of all characters by 2x if HP is below 30% at the start of the turn",
        special: "Deals 25x ATK in [PSY] damage to one enemy. If HP is less than 30% then changes adjacent orbs into matching orbs",
        specialName: "Double Edge of Revolt"
    },
    1091: {
        captain: "Boosts ATK of all characters by 2.5x if HP is below 30% at the start of the turn",
        special: "Deals 25x ATK in [PSY] damage to one enemy. If HP is less than 30% then changes adjacent orbs into matching orbs",
        specialName: "Double Edge of Revolt",
        sailor: {
            "base": "None",
            "level1": "When HP is below ??% at the start of the turn, boosts own base ATK by 50",
            "level2": "Makes [INT] orbs \"beneficial\" for this unit",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire Sailor Ability 1: When HP is below ??% at the start of the turn, boosts own base ATK by 50" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 80" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 2: Makes [INT] orbs \"beneficial\" for this unit" },
            { "description": "Aquire Potential 2: Enrage" },
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
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1092: {
        captain: "Boosts RCV of all characters depending on the current Health.",
        captainNotes: "The Lower the Health the Higher the Bonus, at 1HP the multiplier is 1.5x",
        special: "Changes the Friend Captains orb into a matching Orb, recovers 3.000HP",
        specialName: "Present After the Rain"
    },
    1093: {
        captain: "Boosts RCV of all characters depending on the current Health.",
        captainNotes: "The Lower the Health the Higher the Bonus, at 1HP the multiplier is 2x",
        special: "Changes the Friend Captains orb into a matching Orb, recovers 3.000HP",
        specialName: "Present After the Rain"
    },
    1094: {
        captain: "Boosts ATK of Cerebral characters by 2x.",
        special: "Reduces crew's current HP by 80%, deals 6x the removed HP as damage to all enemies. Reduces damage received by 80% for 1 turn.",
        specialName: "Mass Juggling"
    },
    1095: {
        captain: "Boosts ATK of Cerebral characters by 2x.",
        special: "Reduces crew's current HP by 80%, deals 6x the removed HP as damage to all enemies. Reduces damage received by 80% for 1 turn.",
        specialName: "Mass Juggling"
    },
    1096: {
        captain: "Boosts ATK of Powerhouse characters by 3x after the 5th Perfect in a row.",
        special: "Deals [INT] damage to one enemy. Boosts own ATK by 1.75x for 1 turn.",
        specialName: "Crash Drumming"
    },
    1097: {
        captain: "Boosts ATK of Powerhouse characters by 3.5x after the 5th Perfect in a row.",
        special: "Deals [INT] damage to one enemy. Boosts own ATK by 1.75x for 1 turn.",
        specialName: "Crash Drumming"
    },
    1098: {
        captain: "Boosts chain multiplier by 2x",
        special: "Randomizes all orbs including [BLOCK] orbs and switches orbs between slots once.",
        specialName: "Mutation-Induced Thunder"
    },
    1099: {
        captain: "Boosts ATK of Fighter characters by 2x",
        special: "Changes Badly Matching orbs into [EMPTY] orbs, amplifies the effect of orbs by 1.5x for 2 turns",
        specialName: "\"To the End of the Clouds\""
    },
    1100: {
        captain: "Boosts ATK of Fighter characters by 2.25x and their RCV by 1.2x",
        special: "Changes Badly Matching orbs into [EMPTY] orbs, amplifies the effect of orbs by 1.5x for 2 turns",
        specialName: "\"To the End of the Clouds\""
    },
    1101: {
        captain: "Boosts ATK of all characters by 2.25x until the first hit other than Perfect. Reduces crew's current HP by 10% at the end of each turn",
        special: "Reduces crew's current HP by 80%, deals 10x the amount of HP subtracted in typeless damage to one enemy. Boosts ATK of [STR] and [INT] characters by 1.75x for 1 turn",
        specialName: "Black Arm's Last Impact"
    },
    1102: {
        captain: "Boosts ATK of all characters by 2.75x until the first hit other than Perfect. Reduces crew's current HP by 10% at the end of each turn",
        special: "Reduces crew's current HP by 80%, deals 10x the amount of HP subtracted in typeless damage to one enemy. Boosts ATK of [STR] and [INT] characters by 1.75x for 1 turn",
        specialName: "Black Arm's Last Impact"
    },
    1103: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: [
            {
                "description": "Recovers 12% of crew's MAX HP and randomizes all orbs including [BLOCK] orbs",
                "cooldown": [ 21, 11 ]
            },
            {
                "description": "Recovers 24% of crew's MAX HP and randomizes all orbs including [BLOCK] orbs",
                "cooldown": [ 24, 14 ]
            },
            {
                "description": "Recovers 36% of crew's MAX HP and randomizes all orbs including [BLOCK] orbs",
                "cooldown": [ 27, 17 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Return Return Fruit"
    },
    1104: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.75x",
        special: [
            {
                "description": "Recovers 12% of crew's MAX HP and randomizes all orbs including [BLOCK] orbs",
                "cooldown": [ 21, 11 ]
            },
            {
                "description": "Recovers 24% of crew's MAX HP and randomizes all orbs including [BLOCK] orbs",
                "cooldown": [ 24, 14 ]
            },
            {
                "description": "Recovers 36% of crew's MAX HP and randomizes all orbs including [BLOCK] orbs",
                "cooldown": [ 27, 17 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Return Return Fruit"
    },
    1105: {
        captain: "Boosts ATK of Striker and Free Spirit characters by 1.5x, deals 2x character's ATK in typeless damage to all enemies at the end of each turn",
        special: "Delays all enemies for 1 turn. Adds .2x to Chain multiplier for 2 turns. Makes Perfects easier to hit for 2 turns.",
        specialName: "Mosa Mosa Dance"
    },
    1106: {
        captain: "Boosts ATK of Striker and Free Spirit characters by 2x, deals 2x character's ATK in typeless damage to all enemies at the end of each turn",
        special: "Delays all enemies for 1 turn. Adds .2x to Chain multiplier for 2 turns. Makes Perfects easier to hit for 2 turns.",
        specialName: "Mosa Mosa Dance"
    },
    1107: {
        captain: "Boosts ATK and HP of Driven characters by 1.5x",
        special: "Deals 30x the character's ATK as Typeless damage to all enemies. Changes [BLOCK], [G] and [BOMB] orbs into Matching orbs for Driven characters. Boosts ATK of Driven characters by 1.75x for 1 turn.",
        specialName: "Lion's Threat: Imperial Earth Bind"
    },
    1108: {
        captain: "Boosts ATK and HP of Driven characters by 2x",
        special: "Deals 30x the character's ATK as Typeless damage to all enemies. Changes [BLOCK], [G] and [BOMB] orbs into Matching orbs for Driven characters. Boosts ATK of Driven characters by 1.75x for 1 turn.",
        specialName: "Lion's Threat: Imperial Earth Bind",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Driven characters by 50",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Driven characters by 50" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
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
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1109: {
        captain: "Boosts amount of Beli received by 1.5x",
        special: "Changes [BLOCK] orbs into [PSY] orbs for [PSY] characters",
        specialName: "Cat Burglar's Undercover Investigation"
    },
    1110: {
        captain: "Boosts ATK and RCV of [PSY] characters by 1.25x and the amount of Beli received by 1.5x",
        special: "Changes [BLOCK] orbs into [PSY] orbs for [PSY] characters",
        specialName: "Cat Burglar's Undercover Investigation"
    },
    1111: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.25x",
        special: "Amplifies the effect of orbs by 1.25x for 3 turns, recovers 8x character's RCV at the end of the turn for 3 turns.",
        specialName: "Impish Sultry Dance"
    },
    1112: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: "Amplifies the effect of orbs by 1.25x for 3 turns, recovers 8x character's RCV at the end of the turn for 3 turns.",
        specialName: "Impish Sultry Dance"
    },
    1113: {
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Boosts ATK of all characters by 1.2x for 1 turn",
        specialName: "Fury of the Little Monster: \"This is War!!!\""  
    },
    1114: {
        special: "Reduces crew's current HP by 99%, deals 25x character's ATK in fixed damage to all enemies, boosts ATK of STR characters by 2x for 1 turn",
        specialName: "Gum-Gum Gigant Axe",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of STR characters by 2x"
    },
    1115: {
        special: "Reduces crew's current HP by 99%, deals 25x character's ATK in fixed damage to all enemies, boosts ATK of STR characters by 2x for 1 turn",
        specialName: "Gum-Gum Gigant Axe",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of STR characters by 2.5x",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of [STR] characters by 35",
            "level2": "Makes [TND] and [RCV] orbs \"beneficial\" for [STR] characters",
        },
        limit: [
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 75" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK and HP of [STR] characters by 35" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Aquire Sailor Ability 2: Makes [TND] and [RCV] orbs \"beneficial\" for [STR] characters" },
            { "description": "Aquire Potential 2: Pinch Healing" },
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
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    1116: {
        special: "Deals several times the character's ATK in INT damage to all enemies",
        specialNotes: "#{specialProportional : lower : 100 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Diable Jambe: Concassé",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        sailor: "Reduces Paralysis by 3 turns for self"
    },
    1117: {
        special: "Deals several times the character's ATK in INT damage to all enemies",
        specialNotes: "#{specialProportional : lower : 100 * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "Diable Jambe: Concassé",
        captain: "Reduces damage received by 80% if HP is above 99% at the start of the turn",
        sailor: "Reduces Paralysis by 3 turns for self"
    },
    1118: {
        special: "Randomizes all orbs, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "10,000-Carat Smile",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK and RCV of Striker characters by 1.5x",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit"
    },
    1119: {
        special: "Randomizes all orbs, protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "10,000-Carat Smile",
        specialNotes: "#{zombie}",
        captain: "Boosts ATK of Striker characters by 2x and their RCV by 1.5x",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit",
        limit: "This character has a Limit Break Tree"
    },
    1120: {
        special: "Deals random typeless damage to all enemies, changes own orb into [STR]",
        specialName: "Gum-Gum JET Gatling",
        specialNotes: "#{random : 70,000 : 200,000}",
        captain: "Boosts ATK by 4x following a chain of Good > Great > Perfect hits"
    },
    1121: {
        special: "Deals random typeless damage to all enemies, changes own orb into [STR]",
        specialName: "Gum-Gum JET Gatling",
        specialNotes: "#{random : 70,000 : 200,000}",
        captain: "Boosts ATK by 4x following a chain of Good > Great > Perfect hits"
    },
    1122: {
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.5x, but boosts his OWN attack by 4x",
        captainNotes: "Cavendish only boosts Friend or Sub Cavendish by 2.5x for a total of 10x boost with two Cavendish captains",
        special: "Removes all positive buffs on your team. Deals 15x the character's ATK as Typeless damage to all enemies. Boosts own ATK by 2.25x for 2 turns, amplifies the effect of own orb by 1.5x for 2 turns, locks own orb for 2 turns and changes own orb to [QCK].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the character who uses their own Special.",
        specialName: "Slicing Winds of Rommel"
    },
    1123: {
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.5x, but boosts his OWN attack by 4x",
        captainNotes: "Cavendish only boosts Friend or Sub Cavendish by 2.5x for a total of 10x boost with two Cavendish captains",
        special: "Removes all positive buffs on your team. Deals 15x the character's ATK as Typeless damage to all enemies. Boosts own ATK by 2.25x for 2 turns, amplifies the effect of own orb by 1.5x for 2 turns, locks own orb for 2 turns and changes own orb to [QCK].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the character who uses their own Special.",
        specialName: "Slicing Winds of Rommel"
    },
    1124: {
        captain: "Boosts ATK of Slasher characters by 3x, reduces his own ATK multiplier by 0.1x at the end of each turn",
        captainNotes: "His ATK multiplier will be 3x on the first turn, 2.9x on the second, 2.8x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Slasher characters.",
        special: "Deals 13x character's ATK in [PSY] damage to all enemies, changes own orb and captain's orb into Matching orbs.",
        specialName: "Idle Execution"
    },
    1125: {
        captain: "Boosts ATK of Slasher characters by 3.5x, reduces his own ATK multiplier by 0.1x at the end of each turn",
        captainNotes: "His ATK multiplier will be 3.5x on the first turn, 3.4x on the second, 3.3x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Slasher characters.",
        special: "Deals 13x character's ATK in [PSY] damage to all enemies, changes own orb and captain's orb into Matching orbs.",
        specialName: "Idle Execution",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Slasher characters by 60",
            "level2": "Makes [PSY] orbs \"beneficial\" for Slasher characters",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Slasher characters by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire Sailor Ability 2: Makes [PSY] orbs \"beneficial\" for Slasher characters" },
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
        potentialNotes: "#{enrage}"
    },
    1126: {
        captain: "Boosts ATK and HP of [DEX] characters by 1.5x",
        special: "Empties all slots with [BLOCK] orbs, deals severe typeless damage based on number of [BLOCK] slots emptied to all enemies. Changes [EMPTY] orbs into Matching orbs",
        specialNotes: "The exact multiplier used is chosen based on the number of [BLOCK] orbs consumed: 0 orbs - Cannot Activate; 1 orb - 20x ATK; 2 orbs - 40x ATK; 3 orbs - 100x ATK; 4 orbs - 200x ATK; 5 orbs - 300x ATK; 6 orbs - 500x ATK.",
        specialName: "Admiral Killer Bowling"
    },
    1127: {//orlumbus
        captain: "Boosts ATK of [DEX] characters by 2.25x and their HP by 1.5x",
        special: "Empties all slots with [BLOCK] orbs, deals severe typeless damage based on number of [BLOCK] slots emptied to all enemies. Changes [EMPTY] orbs into Matching orbs",
        specialNotes: "The exact multiplier used is chosen based on the number of [BLOCK] orbs consumed: 0 orbs - Cannot Activate; 1 orb - 20x ATK; 2 orbs - 40x ATK; 3 orbs - 100x ATK; 4 orbs - 200x ATK; 5 orbs - 300x ATK; 6 orbs - 500x ATK.",
        specialName: "Admiral Killer Bowling"
    },
    1128: {
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of all characters by 1.75x",
        special: "Reduces Paralysis and Despair duration by 5 turns. Cuts the current HP of one enemy by 10%",
        specialName: "Tactician's Savage Cut"
    },
    1129: {
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of all characters by 2x",
        special: "Reduces Paralysis and Despair duration by 5 turns. Cuts the current HP of one enemy by 10%",
        specialName: "Tactician's Savage Cut",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of all characters by 25",
            "level2": "Reduces Silence duration against this unit by 2 turns",
        },
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of all characters by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 70" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire Sailor Ability 2: Reduces Silence duration against this unit by 2 turns" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
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
    1130: {
        captain: "Boosts ATK and HP of Fighter and Powerhouse characters by 1.5x",
        special: [
            {
                "description": "Deals 7x character's ATK in typeless damage to all enemies",
                "cooldown": [ 12, 6 ]
            },
            {
                "description": "Deals 15x character's ATK in typeless damage to all enemies",
                "cooldown": [ 20, 14 ]
            },
            {
                "description": "Deals 25x character's ATK in typeless damage to all enemies",
                "cooldown": [ 26, 20 ]
            },
        ],
        specialNotes: "For each turn AFTER Elizabello's special reaches stage 3, damage is boosted by 23.75x per turn for an additional 20 turns, for a max damage of 500x character's ATK to all enemies.<br>#{stages}",
        specialName: "King Punch"
    },
    1131: {
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.5x and their HP by 2x",
        special: [
            {
                "description": "Deals 7x character's ATK in typeless damage to all enemies",
                "cooldown": [ 12, 6 ]
            },
            {
                "description": "Deals 15x character's ATK in typeless damage to all enemies",
                "cooldown": [ 20, 14 ]
            },
            {
                "description": "Deals 25x character's ATK in typeless damage to all enemies",
                "cooldown": [ 26, 20 ]
            },
        ],
        specialNotes: "For each turn AFTER Elizabello's special reaches stage 3, damage is boosted by 23.75x per turn for an additional 20 turns, for a max damage of 500x character's ATK to all enemies.<br>#{stages}",
        specialName: "King Punch"
    },
    1132: {
        captain: "Boosts ATK and HP of Fighter characters by 1.5x",
        special: [
            {
                "description": "Deals severe [QCK] damage to all enemies, boosts ATK of Fighter characters by 1.5x for 1 turn",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "Deals severe [QCK] damage to all enemies, boosts ATK of Fighter characters by 1.75x for 1 turn",
                "cooldown": [ 23, 17 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Destruction Cannon"
    },
    1133: {
        captain: "Boosts ATK of Fighter characters by 2.25x and their HP by 1.5x. Recovers 2x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Deals severe [QCK] damage to all enemies, boosts ATK of Fighter characters by 1.5x for 1 turn",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "Deals severe [QCK] damage to all enemies, boosts ATK of Fighter and Shooter characters by 1.75x for 1 turn",
                "cooldown": [ 23, 17 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Destruction Cannon"
    },
    1134: {
        captain: "Boosts ATK and RCV for Striker and Slasher characters by 1.2x",
        special: "Reduces Special Cooldown of [INT] characters by 1 turn.",
        specialName: "Non-Negotiable Quest",
    },
    1135: {
        captain: "Boosts ATK and RCV for Striker and Slasher characters by 1.5x",
        special: "Reduces Special Cooldown of [INT] characters by 1 turn.",
        specialName: "Non-Negotiable Quest",
    },
    1136: { //Fortnight Fukuro
        captain: "Boosts ATK and HP of [QCK] characters by 1.5x",
        special: "For [QCK] characters, changes [TND] and [RCV] orbs into [QCK] orbs",
        specialName: "Stern Beast: Secret Technique: 'Owl Thrasher' Sneak Attack"
    },
    1137: { //Fortnight Jabra
        captain: "Boosts ATK of Powerhouse characters by 2.25x",
        special: "Deals 13x character's ATK in [STR] damage to one enemy. For Free Spirit characters, amplifies the effects of orbs by 1.5x for 2 turns",
        specialName: "Fatal Sneak Attack",
    },
    1138: {
        captain: "Reduces damage received by 25%",
        special: "Reduces damage received by 60% and boosts ATK of Powerhouse and Fighter characters by 1.3x for 1 turn",
        specialName: "Iron Mass: Ring Sneak Attack"
    },
    1139: {
        captain: "Boosts ATK and RCV of Striker characters by 1.5x",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK], [PSY], or [INT] orbs",
        specialName: "Lack of Pure Chi: Lion Finger Gun Sneak Attack"
    },
    1140: {// Coliseum Moria
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Changes own orb into [DEX] and deals 300,000 Fixed damage to one enemy",
        specialName: "Horn Blade Shadow"
    },
    1141: {// Coliseum Moria
        captain: "Boosts ATK of Driven characters by 2.25x, recovers 3x character's RCV in HP at the end of each turn",
        special: "Changes own orb into [DEX] and deals 300,000 Fixed damage to one enemy",
        specialName: "Horn Blade Shadow"
    },
    1142: {// Coliseum Foxy
        captain: "Boosts ATK of Free Spirit characters by 1.5x",
        special: "Deals 15 hits of random [STR] damage to random enemies. Delays all enemies for 1 turn",
        specialNotes: "#{randomHits : 15}",
        specialName: "Gorilla Punch: Golden Strike"
    },
    1143: {// Coliseum Foxy
        captain: "Boosts ATK of Free Spirit characters by 2x. Reduces cooldown of Free Spirit characters by 2 turns at the start of the fight",
        special: "Deals 15 hits of random [STR] damage to random enemies. Delays all enemies for 1 turn",
        specialNotes: "#{randomHits : 15}",
        specialName: "Gorilla Punch: Golden Strike"
    },
    1144: {// Coliseum Porche
        captain: "Boosts ATK of [PSY] characters by 1.75x",
        special: "Deals 5x character's ATK in [PSY] damage to all enemies. Recovers 15x character's RCV in HP",
        specialName: "Cutie Baton: Flower Shuriken"
    },
    1145: {// Coliseum Porche
        captain: "Boosts ATK of [PSY] characters by 1.75x and their RCV by 1.5x",
        special: "Deals 5x character's ATK in [PSY] damage to all enemies. Recovers 15x character's RCV in HP",
        specialName: "Cutie Baton: Flower Shuriken"
    },
    1146:{
        specialName: "Bind Purge",
        special: "Reduces Bind duration by 2 turns"
    },
    1147:{
        special: "Recovers 7x character's RCV in HP",
        specialName: "Moderate Healing",
    },
    1148:{
        specialName: "Paralysis Recovery - Light",
        special: "Reduces Paralysis by 1 turn"
    },
    1149:{
        special: "Deals 3x character's ATK in INT damage to all enemies, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Attack",
    },
    1150:{
        special: "Changes Captain orb into Matching orb",
        specialName: "Captain Orb Change",
    },
    1151: {//Minotaur
        special: "Cuts the current HP of one enemy by 10%",
        specialName: "Tough Jailer Beast: Spiked Club"
    },
    1152: {
        special: "Deals 3 hits of 7x character's ATK in [INT] damage to random enemies.",
        specialNotes: "#{randomHits : 3}",
        specialName: "Shy Jailer Beast: Spiked Mace",
    },
    1153: {
        special: "Reduces the defense of all enemies by 100% and boosts ATK of Powerhouse characters by 1.25x for 1 turn",
        specialName: "Demon Lord's Roar"
    },
    1154: {
        captain: "Boosts ATK of Powerhouse characters by 2x and their HP by 1.3x",
        special: "Reduces crew's current HP by 30%. Boosts ATK of Powerhouse characters by 1.5x",
        specialName: "Leader of the Jailers",
    },
    1155: {
        special: "Deals 7x character's ATK in QCK damage to all enemies",
        specialName: "Monsterous Appetite"
    },
    1156: {
        captain: "Boosts ATK of Driven characters by 1.2x if HP is above 50% at the start of the turn",
        special: "Removes Poison. Protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Abyss Road",
        specialNotes: "#{zombie}",
    },
    1157: {
        captain: "Boosts ATK of Driven and Striker characters by 1.75x and protects from defeat as long as HP is above 50% at the start of the turn",
        special: "Removes Poison. Protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Abyss Road",
        specialNotes: "#{zombie}",
    },
    1158: {
        captain: "Boosts ATK of Shooter, Striker and Powerhouse characters by 1.75x",
        special: "Cuts the current HP of all enemies by 20%. Strongly Poisons one enemy and Poisons all other enemies.",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn. Regular Poison deals .5x character's ATK in fixed damage at the end of each turn.",
        specialName: "Poison Puffer Fish"
    },
    1159: {
        captain: "Boosts ATK of Shooter, Striker and Powerhouse characters by 2.25x",
        special: "Cuts the current HP of all enemies by 20%. Strongly Poisons one enemy and Poisons all other enemies.",
        specialNotes: "Strong Poison deals 5x character's ATK in fixed damage at the end of each turn. Regular Poison deals .5x character's ATK in fixed damage at the end of each turn.",
        specialName: "Poison Puffer Fish"
    },
    1160: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x",
        special: "Reduces Bind, Despair and Silence duration by 3 turns and recovers 2,000 HP",
        specialNotes: "#{silence}",
        specialName: "Open Sun"
    },
    1161: {
        captain: "Boosts ATK of Free Spirit characters by 2x and their RCV by 1.5x",
        special: "Reduces Bind, Despair and Silence duration by 3 turns and recovers 2,000 HP",
        specialNotes: "#{silence}",
        specialName: "Open Sun"
    },
    1162: {//Tesoro
        captain: "Boosts ATK of [PSY] characters by 1.75x and boosts amount of Beli received by 1.5x",
        special: "Deals large [PSY] damage to all enemies and if HP is above 50%, changes all orbs to [PSY] orbs",
        specialName: "Gold-Gold Fruit",
    },
    1163: {//Tesoro Evolved
        captain: "Boosts ATK of PSY characters by 1.75x. Also boosts ATK of Driven and Cerebral characters by 1.5x. Boosts amount of Beli received by 2x",
        captainNotes: "The two Boosts stack with each other so a PSY Driven or a PSY Cerebral Unit will be boosted by 2.625",
        special: "Deals large [PSY] damage to all enemies and if HP is above 50%, changes all orbs to [PSY] orbs",
        specialName: "Gold-Gold Fruit",
    },
    1164: {//Carina
        captain: "Boosts RCV of all characters by 1.2x",
        special: "Boosts RCV by 1.5x for 1 turn and amplifies the effects of orbs by 1.5x for 1 turn",
        specialName: "Sexy Diva",
    },
    1165: {//Carina Evolved
        captain: "Boosts RCV of all characters by 1.5x",
        special: "Boosts RCV by 1.5x for 1 turn and amplifies the effects of orbs by 1.5x for 1 turn",
        specialName: "Sexy Diva",
    },
    1166: {//Baccarat
        captain: "Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if she was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "Boosts chance of matching orbs and reduces the ATK of enemies for 1 turn",
        specialName: "Lucky-Lucky Fruit",
    },
    1167: {//Baccarat Evolved
        captain: "Boosts ATK of all characters by 1.2x. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if she was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "Boosts chance of matching orbs and reduces the ATK of enemies for 1 turn",
        specialName: "Lucky-Lucky Fruit",
    },
    1168: {//Dice
        captain: "Boosts ATK of [STR] characters by 2x if HP is below 30% at the start of the turn",
        special: "Boosts ATK of [STR] characters by a variable factor for 1 turn",
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated<br>HP > 50%: 1.1x<br>50% > HP > 30%: 1.25x<br>30% > HP > 10%: 1.5x<br>HP < 10%: 1.75x",
        specialName: "Trump Card Dealer",
    },
    1169: {//Dice Evolved
        captain: "Boosts ATK of [STR] characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : 1 + 1.5 * (1 - (remaining HP) / (total HP)) : 1 : 2.5}",
        special: "Boosts ATK of [STR] characters by a variable factor for 1 turn",
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated<br>HP > 50%: 1.1x<br>50% > HP > 30%: 1.25x<br>30% > HP > 10%: 1.5x<br>HP < 10%: 1.75x",
        specialName: "Trump Card Dealer",
    },
    1170: {//Tanaka
        captain: "Boosts ATK of [QCK] characters by 1.5x",
        special: "Reduces Bind duration by 3 turns and swaps Badly Matching, [BLOCK] and [BOMB] orbs to [EMPTY]",
        specialName: "Escape-Escape Fruit",
    },
    1171: {//Tanaka Evolved
        captain: "Boosts ATK of [QCK] characters by 2x",
        special: "Reduces Bind duration by 3 turns and swaps Badly Matching, [BLOCK] and [BOMB] orbs to [EMPTY]",
        specialName: "Escape-Escape Fruit",
    },
    1172: {
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        specialName: "Three-Verse Humming: Arrow-Notch Slash",
        captain: "Boosts ATK of PSY characters by 2x",
        sailor: "Boosts base base RCV of PSY characters by 15"
    },
    1173: {
        special: "Deals random PSY damage to all enemies, randomizes all orbs",
        specialName: "Three-Verse Humming: Arrow-Notch Slash",
        captain: "Boosts ATK of PSY characters by 2x, reduces damage received from INT enemies by 30%",
        sailor: {
            "base": "Boosts base RCV of PSY characters by 15",
            "level1": "If this character has a [PSY] orb and you hit a Perfect with him, keep his [PSY] orb for the next turn",
        },
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
            { "description": "Aquire Sailor Ability 1: If this character has a [PSY] orb and you hit a Perfect with him, keep his [PSY] orb for the next turn" },
            { "description": "Aquire Potential 2: Critical Hit" },
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
    1174: {
        special: "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
        specialName: "Ashura Ugui",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of DEX characters by 2.75x if HP is below 30% at the start of the turn",
        sailor: "Boosts base ATK of Slasher characters by 20"
    },
    1175: {
        special: "Changes adjacent orbs into [DEX], deals 1,000 fixed damage to all enemies",
        specialName: "Ashura Ugui",
        specialNotes: "#{fixed}",
        captain: {
            "base": "Boosts ATK of DEX characters by 3x if HP is below 30% at the start of the turn",
            "level1": "Boosts ATK of [DEX] characters by 3x if HP is below 30% at the start of the turn, by 2x otherwise",
        },
        sailor: {
            "base": "Boosts base ATK of Slasher characters by 20",
            "level1": "When any other character uses a special, reduces own cooldown by 1 turn",
        },
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
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1176: {
        special: "Removes Poison, recovers 15x character's RCV in HP",
        specialName: "Devoted Healing - \"I'm Glad You are Safe\"",
        captain: "Boosts ATK and RCV of DEX characters by 1.5x",
        sailor: "When HP is below 30% at the start of the turn, boosts base RCV of himself by 50"
    },
    1177: {
        special: "Removes Poison, recovers 15x character's RCV in HP",
        specialName: "Devoted Healing - \"I'm Glad You are Safe\"",
        captain: "Boosts ATK and RCV of DEX characters by 2x",
        sailor: "When HP is below 30% at the start of the turn, boosts base RCV of himself by 50"
    },
    1178: {
        captain: "Boosts ATK of [STR] characters by 2x if HP is above 99% at the start of the turn. Reduces damage received by 50%",
        special: "Deals random typeless damage to all enemies. Randomizes all orbs including [BLOCK] orbs.",
        specialName: "Not Rubber Gum-Gum Jet Gatling",
        specialNotes: "#{random : 30,000 : 150,000}",
    },
    1179: {
        captain: "Boosts ATK of [STR] characters by 2.75x if HP is above 99% at the start of the turn. Reduces damage received by 50%",
        special: "Deals random typeless damage to all enemies. Randomizes all orbs including [BLOCK] orbs.",
        specialName: "Not Rubber Gum-Gum Jet Gatling",
        specialNotes: "#{random : 30,000 : 150,000}",
    },
    1181: { //Blenheim
        captain: "Boosts ATK of [DEX] characters by 2.5x",
        special: "Deals 15x character's ATK in [DEX] damage to all enemies. Makes [RCV] and [TND] orbs \"beneficial\" to Slasher characters for 3 turns",
        specialName: "Anger of the Ki Sword",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit"
    },
    1182: { //Blenheim
        captain: "Boosts ATK of [DEX] characters by 2.5x",
        special: "Deals 15x character's ATK in [DEX] damage to all enemies. Makes [RCV] and [TND] orbs \"beneficial\" to Slasher characters for 3 turns",
        specialName: "Anger of the Ki Sword",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit"
    },
    1183: {
        captain: "Boosts ATK of [PSY] characters by 2.5x",
        special: "Empties all slots with [PSY] orbs, deals several times the character's ATK in [PSY] damage to one enemy",
        specialNotes: "The exact multiplier used is chosen based on the number of [PSY] orbs consumed: 1 orb will give a 13x multiplier, 2 orbs 19x, 3 orbs 26x, 4 orbs 65x, 5 orbs 130x, 6 orbs 230x. It's not possible to activate the special without consuming at least one [PSY] orb.",
        specialName: "Brass Knuckle Destruction",
        sailor: "If HP is above 99% at the start of the turn, boosts ATK of [PSY] characters by 75"
    },
    1184: {
        captain: "Boosts ATK of [PSY] characters by 2.5x",
        special: "Empties all slots with [PSY] orbs, deals several times the character's ATK in [PSY] damage to one enemy",
        specialNotes: "The exact multiplier used is chosen based on the number of [PSY] orbs consumed: 1 orb will give a 13x multiplier, 2 orbs 19x, 3 orbs 26x, 4 orbs 65x, 5 orbs 130x, 6 orbs 230x. It's not possible to activate the special without consuming at least one [PSY] orb.",
        specialName: "Brass Knuckle Destruction",
        sailor: "If HP is above 99% at the start of the turn, boosts ATK of [PSY] characters by 75"
    },
    1185: {
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.75x. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: [
            {
                "description": "Deals 4x character's ATK in [INT] damage to all enemies. Changes own orb into [INT].",
                "cooldown": [ 8, 3 ],
            },
            {
                "description": "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT]. Reduces Special Cooldown of Slasher and Cerebral characters by 1 turn",
                "cooldown": [ 17, 12 ],
            }
        ],
        specialNotes : "#{stages}",
        specialName: "Extreme Speed - One Sword Style, Ten Slashes",
        sailor: "Restores his own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    1186: {
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.75x. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: [
            {
                "description": "Deals 4x character's ATK in [INT] damage to all enemies. Changes own orb into [INT].",
                "cooldown": [ 8, 3 ],
            },
            {
                "description": "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT]. Reduces Special Cooldown of Slasher and Cerebral characters by 1 turn",
                "cooldown": [ 17, 12 ],
            }
        ],
        specialNotes : "#{stages}",
        specialName: "Extreme Speed - One Sword Style, Ten Slashes",
        sailor: {
            "base": "Restores his own special by 1 turn when it is rewinded",
            "level1": "If this character has an [INT] orb and you hit a Perfect with him, keep his [INT] orb for the next turn",
        },
        sailorNotes: "#{rewind : 1}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: If this character has an [INT] orb and you hit a Perfect with him, keep his [INT] orb for the next turn" },
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
        potentialNotes: "#{enrage}"
    },
    1187: {
        captain: "Boosts ATK of [STR] characters by 2.5x",
        special: "Deals 7 hits of random damage to random enemies. Reduces Bind and Despair duration by 3 turns",
        specialNotes: "#{randomHits : 7}<br>#{random : 5000 : 20000 : for each hit}",
        specialName: "Advancing Continuous Sword Attack",
        sailor: "Boosts base ATK, HP and RCV of all characters by 20"
    },
    1188: {
        captain: "Boosts ATK of [STR] characters by 2.5x",
        special: "Deals 7 hits of random damage to random enemies. Reduces Bind and Despair duration by 3 turns",
        specialNotes: "#{randomHits : 7}<br>#{random : 5000 : 20000 : for each hit}",
        specialName: "Advancing Continuous Sword Attack",
        sailor: "Boosts base ATK, HP and RCV of all characters by 20"
    },
    1189: {
        captain: "Boosts ATK of [QCK] characters by 2.25x, makes [DEX] orbs \"beneficial\" to [QCK] characters",
        captainNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
        special: "Reduces enemy Barrier duration by 1 turn",
        specialNotes: "Does not affect DEF Boost or % Damage reduction buffs. Reduces timers for Barriers such as Perfect/Great/Good Barriers, Combo Hit Barriers and Orb Hit Barriers",
        specialName: "Break Bullet",
        sailor: "Boosts base ATK of [QCK] characters by 40"
    },
    1190: {
        captain: "Boosts ATK of [QCK] characters by 2.25x, makes [DEX] orbs \"beneficial\" to [QCK] characters",
        captainNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
        special: "Reduces enemy Barrier duration by 1 turn",
        specialNotes: "Does not affect DEF Boost or % Damage reduction buffs. Reduces timers for Barriers such as Perfect/Great/Good Barriers, Combo Hit Barriers and Orb Hit Barriers",
        specialName: "Break Bullet",
        sailor: {
            "base": "Boosts base ATK of [QCK] characters by 40",
            "level1": "Makes [DEX] orbs \"beneficial\" for this unit",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Aquire Sailor Ability 1: Makes [DEX] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [STR] Damage Reduction" },
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
                "Name": "[STR] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 4%",
                    "Level 5: Reduce damage taken from [STR] characters by 5%"
                ]
            },
        ]
    },
    1191: {
        captain: "Boosts ATK of all characters by 2x and their HP by 1.2x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 8 times to a maximum of 3.5x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 1 turn",
        specialName: "Ice Age",
    },
    1192: {
        captain: "Boosts ATK of all characters by 2x and their HP by 1.2x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 8 times to a maximum of 3.5x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 1 turn",
        specialName: "Ice Age",
    },
    1193: {
        captain: "Boosts ATK of Free Spirit characters by 2x",
        special: "Recovers 13x character's RCV in HP and locks the chain multiplier at 2.5x for 1 turn",
        specialName: "Sweet Style Petrification",
    },
    1194: {
        captain: "Boosts ATK of Free Spirit characters by 2.5x",
        special: "Recovers 13x character's RCV in HP and locks the chain multiplier at 2.5x for 1 turn",
        specialName: "Sweet Style Petrification",
    },
    1195: {
        captain: "Boosts ATK of Striker characters by 1.75x. Recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces crew's current HP by 60%, deals 8x the amount of HP subtracted in typeless damage to all enemies. Boosts ATK of Striker characters by 1.75x for 1 turn",
        specialName: "Split Air Hole",
    },
    1196: {
        captain: "Boosts ATK of Striker characters by 2x. Recovers 5x character's RCV in HP at the end of each turn",
        special: "Reduces crew's current HP by 60%, deals 8x the amount of HP subtracted in typeless damage to all enemies. Boosts ATK of Striker characters by 1.75x for 1 turn",
        specialName: "Split Air Hole",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Striker characters by 25",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Striker characters by 25" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Pinch Healing" },
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
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    1197: {
        captain: "Boosts ATK of Cerebral and Powerhouse characters by 2.5x if they have a matching orb, by 1x otherwise, reduces crew's RCV to 0",
        special: "For Cerebral and Powerhouse characters, changes all orbs including [BLOCK] orbs to Badly Matching. Deals [INT] damage to all enemies",
        specialName: "Investigator of Sorrow",
    },
    1198: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x",
        special: "Empties all slots with [RCV] orbs, recovers 20% of crew's MAX HP",
        specialName: "Appetite Or Sex Appeal - Has it Switched Yet!?",
    },
    1199: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x",
        special: "Empties all slots with [RCV] orbs, recovers 20% of crew's MAX HP",
        specialName: "Appetite Or Sex Appeal - Has it Switched Yet!?",
    },
    1200: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: "Reduces Silence duration by 2 turns. If your HP is below 30%, changes top row into Matching Orbs",
        specialName: "Passionate Look, 'I'm a Bad Guy...'",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration against this unit by 2 turns",
        sailorNotes: "#{silence}",
    },
    1201: {
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: "Reduces Silence duration by 2 turns. If your HP is below 30%, changes top row into Matching Orbs",
        specialName: "Passionate Look, 'I'm a Bad Guy...'",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration against this unit by 2 turns",
        sailorNotes: "#{silence}",
    },
    1202: {
        captain: "Boosts ATK of Free Spirit characters by 1.5x",
        specialName: "Session of Pirates",
        special: "Changes [PSY] orbs on Free Spirit characters into matching orbs"
    },
    1203: {
        captain: "Boosts ATK of Free Spirit characters by 2.25x",
        specialName: "Session of Pirates",
        special: "Changes [PSY] orbs on Free Spirit characters into matching orbs"
    },
    1204: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.2x",
        specialName: "Awakening Tune Power",
        special: "Deals 500 fixed damage to all enemies, changes [RCV] orbs into [QCK] and [TND] into [PSY] orbs"
    },
    1205: {
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.5x",
        specialName: "Awakening Tune Power",
        special: "Deals 500 fixed damage to all enemies, changes [RCV] orbs into [QCK] and [TND] into [PSY] orbs"
    },
    1206: {
        captain: "Boosts HP by 1.3x",
        specialName: "Chorus echoing in the sea",
        special: "Protects from defeat as long as HP is above 50%",
        specialNotes: "#{zombie}"
    },
    1207: {
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        specialName: "Ochenta Fleur - Cuatro Manus Shock",
        captain: "Boosts ATK and RCV of INT characters by 1.5x",
        sailor: "Reduces Blindness duration by 3 turn"
    },
    1208: {
        special: "Boosts chances of getting [INT] orbs for 3 turns",
        specialName: "Ochenta Fleur - Cuatro Manus Shock",
        captain: "Boosts ATK and RCV of INT characters by 2x",
        sailor: {
            "base": "Reduces Blindness duration by 3 turns",
            "level1": "Makes [PSY] orbs \"beneficial\" for this unit",
        },
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Potential 2: Cooldown Reduction" },
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
                "Name": "Cooldown Reduction",
                "description": [ 
                    "Level 1: Reduce Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce Special Cooldown by ? turn at the start of the fight",
                    "Level 3: Reduce Special Cooldown by ? turn at the start of the fight",
                    "Level 4: Reduce Special Cooldown by ? turn at the start of the fight",
                    "Level 5: Reduce Special Cooldown by ? turn at the start of the fight"
                ]
            },
        ]
    },
    1209: {
        special: "Delays all enemies for 3 turns, cuts the current HP of each enemy by 10%",
        specialName: "Heavenly Dragon Star",
        captain: "Boosts ATK of Shooter characters by 2x",
        sailor: "Boosts base RCV of Shooter characters by 10"
    },
    1210: {
        special: "Delays all enemies for 3 turns, cuts the current HP of each enemy by 10%",
        specialName: "Heavenly Dragon Star",
        captain: "Boosts ATK of Shooter characters by 2x and their RCV by 1.5x",
        sailor: {
            "base": "Boosts base RCV of Shooter characters by 10",
            "level1": "Boosts base ATK of Shooter characters by 50",
        },
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
    1211: {
        special: "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Roar! Zarley Davison",
        captain: "Boosts ATK of STR characters by 2x, deals 2x character's ATK in STR damage to all enemies at the end of each turn",
        sailor: "Boosts base ATK of Shooter characters by 20"
    },
    1212: {
        special: "Changes own orb into [STR], amplifies the effect of orbs by 1.5x for 2 turns",
        specialNotes: "#{orb : 1.5x}",
        specialName: "Roar! Zarley Davison",
        captain: "Boosts ATK of STR characters by 2.25x, deals 2x character's ATK in STR damage to all enemies at the end of each turn",
        sailor: "Boosts base ATK of Shooter characters by 20"
    },
    1213: {
        captain: "Boosts ATK of Slasher characters by 1.5x, the HP of Striker characters by 1.2x and the RCV of Shooter characters by 1.2x",
        specialName: "Exciting Transfiguration",
        special: "Recovers 10x character's RCV in HP. For 4 turns, makes [BOMB] orbs \"beneficial\"",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function."
    },
    1214: {
        captain: "Boosts ATK of Slasher characters by 2x, the HP of Striker characters by 1.25x and the RCV of Shooter characters by 1.25x",
        specialName: "Exciting Transfiguration",
        special: "Recovers 10x character's RCV in HP. For 4 turns, makes [BOMB] orbs \"beneficial\"",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function."
    },
    1215: {//Gairam
        captain: "Boosts ATK by 2.5x following a chain of [QCK] > [PSY] > [DEX] attacks no lower than Good",
        special: "Deals 5 hits of 2,000 fixed damage to random enemies and reduces any damage received above 5,000 HP by 80% for 1 turn",
        specialNotes: "#{randomHits : 5}",
        specialName: "Totem Cube"
    },
    1216: {//Sebastian
        captain: "Boosts ATK of Powerhouse characters by 2x and reduces damage received based on current HP by up to 20%",
        captainNotes: "The lower the HP, the larger the damage reduction. At 50% HP you take 10% reduced damage",
        special: "Reduces damage received by 50% for 1 turn and changes own orb into [QCK]",
        specialName: "Camouflage Air",
    },
    1217: {//Nightin
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: "Reduces Paralysis and Bind duration by 2 turns. Deal 10x her ATK in [PSY] damage to one enemy",
        specialName: "Catepillar Soul Shot",
    },
    1218: {//Hancock
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row",
        special: "Locks all orbs for 1 turn. If HP is below 30%, changes own orb and the captain's orb into matching. ",
        specialName: "Everybody Confusing Fragrance",
    },
    1219: {//Byrnndi World Coliseum
        captain: "Boosts ATK of Shooter characters by 1x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 16 times to a maximum of 3x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: [
            {
                "description": "Deals 7x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.2x for 1 turn",
                "cooldown": [ 22, 6 ],
            },
            {
                "description": "Deals 15x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.5x for 1 turn",
                "cooldown": [ 28, 12 ],
            },
            {
                "description": "Deals 25x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 2x for 1 turn",
                "cooldown": [ 34, 18 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "More More, 10 Times \"Iron Hammer\"",
    },
    1220: {//Byrnndi World Coliseum
        captain: "Boosts ATK of Shooter characters by 1x. If you defeat an enemy, increases ATK boost slighty. Stacks up to 10 times to a maximum of 3.25x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: [
            {
                "description": "Deals 7x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.2x for 1 turn",
                "cooldown": [ 22, 6 ],
            },
            {
                "description": "Deals 15x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 1.5x for 1 turn",
                "cooldown": [ 28, 12 ],
            },
            {
                "description": "Deals 25x character's ATK in [INT] damage to one enemy. Reduces crew's current HP by 50%. Boosts ATK of Shooter characters by 2x for 1 turn",
                "cooldown": [ 34, 18 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "More More, 10 Times \"Iron Hammer\"",
        sailor: {
            "base": "None",
            "level1": "Boosts own base ATK by 100 if this character is the last in the chain to attack",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Sailor Ability 1: Boosts own base ATK by 100 if this character is the last in the chain to attack" },
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
        potentialNotes: "#{enrage}"
    },
    1221: {//Coliseum Oars Jr
        captain: "Boosts ATK of Slasher characters by 1.75x and the HP of Powerhouse characters by 1.2x",
        special: "Deals 25x character's ATK in [STR] damage to one enemy. For 1 turn, makes [STR] orb \"beneficial\" for all characters",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
        specialName: "Blood of the Devil Warrior",
    },
    1222: {//Coliseum Oars Jr
        captain: "Boosts ATK of Slasher characters by 2x and the HP of Powerhouse characters by 1.75x",
        special: "Deals 25x character's ATK in [STR] damage to one enemy. For 1 turn, makes [STR] orb \"beneficial\" for all characters",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs.",
        specialName: "Blood of the Devil Warrior",
    },
    1223: { // Story Bastille
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Deals 25x character's ATK in [INT] damage to all enemies",
        specialName: "Shark Knife - Flash",
    },
    1224: { // Story Yamakaji
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Reduces damage received by 60% for 1 turn",
        specialName: "Appreciation For The Great Men",
    },
    1225: { // Story Hina
        captain: "Boosts ATK and RCV of [INT] characters by 1.5x",
        special: "Delays all enemies for 1 turn and locks own orb for 1 turn",
        specialName: "Binding Iron Tablet",
    },
    1226: { // Story Smoker
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Cuts the current HP of one enemy by 10% and changes own orb into [PSY]",
        specialName: "Seastone Truncheon",
    },
    1227: { //Story Mihawk
        captain: "Reduces cooldown of Slasher specials by 2 turns at the start of the fight. Boosts ATK of Slasher characters by 2.25x",
        special: "Deals 100,000 fixed damage to one enemy and boosts own ATK by 1.75x for 1 turn ",
        specialName: "Black Blade - Slashing Burial Drop",
    },
    1228: { // Story Kizaru
        captain: "Boosts ATK of Shooter characters by 2.5x",
        special: "For Shooter characters, changes [BLOCK] orbs into Matching and deals large [DEX] damage to all enemies",
        specialName: "The Cave of the Sun Goddess",
    },
    1229: {//Sentomaru
        captain: "Boosts ATK of Powerhouse characters by 2x and his OWN ATK by 2x.",
        special: [
            {
                "description": "Deals 500 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 turn",
                "cooldown": [ 11, 4 ],
            },
            {
                "description": "Deals 5,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 turn",
                "cooldown": [ 15, 8 ],
            },
            {
                "description": "Deals 100,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 2 turns",
                "cooldown": [ 22, 15 ], 
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Cannot be Blown Away",
        specialName: "Leg-Locked Heave-Ho",
    },
    1230: {//Sentomaru
        captain: "Boosts ATK of Powerhouse characters by 2.5x, but boost his OWN ATK by 2.75x. Reduces damage received by 10%",
        special: [
            {
                "description": "Deals 500 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 turn",
                "cooldown": [ 11, 4 ],
            },
            {
                "description": "Deals 5,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 1 turn",
                "cooldown": [ 15, 8 ],
            },
            {
                "description": "Deals 100,000 fixed damage to one enemy. Reduces Special Cooldown of your top row by 2 turns",
                "cooldown": [ 22, 15 ], 
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Cannot be Blown Away",
        specialName: "Leg-Locked Heave-Ho",
    },
    1231: {//Smoker
        captain: "Boosts ATK of Striker and Driven characters by 1.75x and reduces RCV of all characters by 50%. If this character becomes your captain in the middle of an island, reduces damage received by 30% and further boosts ATK of Striker and Driven characters by 1.25x",
        captainNotes: "If Smoker uses his special ability to swap to your captain, his effective captain boost will be 2.1875x",
        special: "Deals large [DEX] damage to one enemy. Swaps this unit with your captain for 2 turns",
        specialNotes: "This is the same type of ability as raid boss Shiki's swap.",
        specialName: "Armed - White Launcher",
        sailor: "Boosts base ATK of Striker characters by 50",
    },
    1232: {//Smoker
        captain: "Boosts ATK of Striker and Driven characters by 2.25x and reduces RCV of all characters by 50%. If this character becomes your captain in the middle of an island, reduces damage received by 30% and further boosts ATK of Striker and Driven characters by 1.3x",
        captainNotes: "If Smoker uses his special ability to swap to your captain, his effective captain boost will be 2.925x",
        special: "Deals large [DEX] damage to one enemy. Swaps this unit with your captain for 2 turns",
        specialNotes: "This is the same type of ability as raid boss Shiki's swap. You cannot use it if another effect swaps your captain. (Such as if Shiki swaps first)",
        specialName: "Armed - White Launcher",
        sailor: {
            "base": "Boosts base ATK of Striker characters by 50",
            "level1": "Makes STR orbs \"beneficial\" for this unit",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Aquire Sailor Ability 1: Makes STR orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: [QCK] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 40% chance to deal 10% of this character's attack in extra damage"
                ]
            },
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
        ]
    },
    1233: {//Tashigi
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.5x and their RCV by 1.2x",
        captainNotes: "Attack boost stacks, so a Slasher Cerebral unit has 2.25x ATK",
        special: "Deals 15x character's ATK in [QCK] damage to all enemies. Boosts the Color Affinity of Slasher and Cerebral characters by 1.5x for 2 turns",
        specialNotes: "#{colorAffinity : 1.5}",
        specialName: "Cutting Drizzle",
        sailor: "Boosts base RCV of Slasher characters by 30",
    },
    1234: {//Tashigi
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.6x and their RCV by 1.3x",
        captainNotes: "Attack boost stacks, so a Slasher Cerebral unit has 2.56x ATK",
        special: "Deals 15x character's ATK in [QCK] damage to all enemies. Boosts the Color Affinity of Slasher and Cerebral characters by 1.5x for 2 turns",
        specialNotes: "#{colorAffinity : 1.5}",
        specialName: "Cutting Drizzle",
        sailor: "Boosts base RCV of Slasher characters by 30",
    },
    1235: {//Maynard
        captain: "Boosts ATK of [PSY] characters by 1.75x, deals 3x character's ATK to all enemies at the end of each turn",
        special: "Deals several times the character's ATK in [PSY] damage to one enemy. Delays all enemies for 1 turn",
        specialNotes: "#{specialProportional : higher : 10x + (25x * (remaining HP) / (total HP)) }",
        specialName: "Sword of Silence",
        sailor: "Reduces Blindness duration for 3 turns",
    },
    1236: {//Maynard
        captain: "Boosts ATK of [PSY] characters by 2x, deals 5x character's ATK to all enemies at the end of each turn",
        special: "Deals several times the character's ATK in [PSY] damage to one enemy. Delays all enemies for 1 turn",
        specialNotes: "#{specialProportional : higher : 10x + (25x * (remaining HP) / (total HP)) }",
        specialName: "Sword of Silence",
        sailor: "Reduces Blindness duration for 3 turns",
    },
    1237: {//Bastille
        captain: "Boosts ATK of all characters by 2x after the 15th hit in the chain",
        special: "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of all characters by 2x after 30th hit in the chain for 1 turn.",
        specialName: "Shark Cutter - Flash",
        sailor: "Makes [QCK] orbs \"beneficial\" for this unit"
    },
    1238: {//Bastille
        captain: "Boosts ATK of all characters by 2x after the 15th hit in the chain and by 3x after the 30th hit",
        special: "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of all characters by 2x after 30th hit in the chain for 1 turn.",
        specialName: "Shark Cutter - Flash",
        sailor: {
            "base": "Makes [QCK] orbs \"beneficial\" for this unit",
            "level1": "Boosts base ATK, HP and RCV of all characters by 50",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 90" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire new Captain Ability: Boosts HP of all characters by 1.25x. Boosts ATK of all characters by 2x after the 12th hit in the chain and by 3x after the 28th hit" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of all characters by 50" },
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
    1239: {//6* Kizaru
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of all characters by 2x and boosts RCV of all characters by 1.3x. If you use \"Yasakani no Magatama\" boosts ATK of all characters by 3x instead.",
        specialName: "Yasakani no Magatama",
        special: [
            {
                "description": "For Shooter and Slasher characters, randomizes all non-matching orbs. Deals 10 hits of small random typeless damage to random enemies.",
                "cooldown": [ 6, 3 ],
            },
            {
                "description": "For Shooter and Slasher characters, randomizes all non-matching orbs. Recovers 5x character's RCV in HP. Deals 10 hits of random typeless damage to random enemies.",
                "cooldown": [ 12, 9 ],
            },
            {
                "description": "Changes all orbs on Shooter and Slasher characters into Matching orbs. Recovers 10x character's RCV in HP. Deals 10 hits of large random typeless damage to random enemies.",
                "cooldown": [ 20, 17 ], 
            },
        ],    
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 3,000 : for each hit on Stage 1}<br>#{random : 3,000 : 6,000 : for each hit on Stage 2}<br>#{random : 10,000 : 16,000 : for each hit on Stage 3}<br>#{stages}",
    },
    1240: {//6* Kizaru
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of all characters by 2x and boosts RCV of all characters by 1.3x. If you use \"Yasakani no Magatama\" boosts ATK of all characters by 3x instead.",
        specialName: "Yasakani no Magatama",
        special: [
            {
                "description": "For Shooter and Slasher characters,randomizes all non-matching orbs. Deals 10 hits of small random typeless damage to random enemies.",
                "cooldown": [ 6, 3 ],
            },
            {
                "description": "For Shooter and Slasher characters, randomizes all non-matching orbs. Recovers 5x character's RCV in HP. Deals 10 hits of random typeless damage to random enemies.",
                "cooldown": [ 12, 9 ],
            },
            {
                "description": "Changes all orbs on Shooter and Slasher characters into Matching orbs. Recovers 10x character's RCV in HP. Deals 10 hits of large random typeless damage to random enemies.",
                "cooldown": [ 20, 17 ],
            },
        ],    
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 3,000 : for each hit on Stage 1}<br>#{random : 3,000 : 6,000 : for each hit on Stage 2}<br>#{random : 10,000 : 16,000 : for each hit on Stage 3}<br>#{stages}",
    },
    1241: {//Fortnight Koala
        captain: "Boosts chain multiplier by 1.5x. Recovers 1x character's RCV in HP at the end of each turn",
        special: "Deals 11x character's ATK in [STR] damage to one enemy. Adds 15x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 15x}",
        specialName: "Fishman Karate, Midair Upwards Kick",
    },
    1242: {//Fortnight Koala
        captain: "Boosts chain multiplier by 2x. Recovers 2x character's RCV in HP at the end of each turn",
        special: "Deals 11x character's ATK in [STR] damage to one enemy. Adds 15x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 15x}",
        specialName: "Fishman Karate, Midair Upwards Kick",
    },
    1243: {// Fortnight Hack
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.3x",
        captainNotes: "Effect stacks, so Fighter/Powerhouse characters get 1.69x ATK",
        special: "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT] and changes adjacent orbs into [G] orbs",
        specialName:"Fishman karate, KO blow",
        specialNotes: "#{gOrbs}"
    },
    1244: {// Fortnight Hack
        captain: "Boosts ATK of Fighter characters by 1.75x and the ATK of Powerhouse characters by 1.3x",
        captainNotes: "Effect stacks, so Fighter/Powerhouse characters get 2.275x ATK",
        special: "Deals 15x character's ATK in [INT] damage to all enemies. Changes own orb into [INT] and changes adjacent orbs into [G] orbs",
        specialName:"Fishman karate, KO blow",
        specialNotes: "#{gOrbs}"
    },
    1245: {// Event Luffy
        captain: "Boosts ATK of Fighter characters by 1.75x. If HP is below 10%, boosts ATK of Fighter characters by 3x instead.",
        special: "Deals random [QCK] damage to all enemies and boosts ATK of Fighter characters by 1.3x for 1 turn. If \"Firefly Light, Fiery Doll\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 2x instead.",
        specialName:"Gomu Gomu no Stamp Gatling",
        specialNotes: "Firefly Light, Fiery Doll is Event Ace's special ability.",
    },
    1246: {// Event Ace
        captain: "Boosts ATK of Fighter characters by 1.2x",
        special: "Reduces crew's current HP by 90%, deals 55x character's ATK in typeless damage to all enemies and boosts ATK of Fighter characters by 1.3x for 1 turn. If \"Gomu Gomu no Stamp Gatling\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 2x instead.",
        specialName:"Firefly Light, Fiery Doll",
    },
    1247: {// Event Ace
        captain: "Boosts HP of Fighter characters by 1.2x and their ATK by 2.75x if they have a matching orb, by 2x otherwise",
        special: "Reduces crew's current HP by 90%, deals 55x character's ATK in typeless damage to all enemies and boosts ATK of Fighter characters by 1.3x for 1 turn. If \"Gomu Gomu no Stamp Gatling\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 2x instead.",
        specialName:"Firefly Light, Fiery Doll",
    },
    1248: {// Kimono Marco
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.3x",
        captainNotes: "Ability stacks, so Fighter/Powerhouse characters gets ATK boosted by 1.69x",
        special: "Recovers 3,000 HP and reduces damage received by 50% for 1 turn",
        specialName:"Shining Daylight - Dayflower",
    },
    1249: {// Kimono Marco
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.6x",
        captainNotes: "Ability stacks, so Fighter/Powerhouse characters gets ATK boosted by 2.56x",
        special: "Recovers 3,000 HP and reduces damage received by 50% for 1 turn",
        specialName:"Shining Daylight - Dayflower",
    },
    1250: {// Coliseum Marco
        captain: "Boosts ATK of Powerhouse characters by 1.5x and Recovers a variable amount of character's RCV in HP at the end of each turn depending on how many Powerhouse characters are on your team",
        captainNotes: "1x Powerhouse: .5x RCV | 2x Powerhouse: .75x RCV | 3x Powerhouse: 1x RCV | 4x Powerhouse: 1.5x RCV | 5x Powerhouse: 2x RCV | 6x Powerhouse: 3.5x RCV",
        special: [
            {
                "description": "Randomizes all orbs and boosts ATK of Powerhouse characters by 1.5x for 1 turn",
                "cooldown": [ 21, 6 ],
            },
            {
                "description": "Randomizes non-matching orbs and boosts ATK of Powerhouse characters by 1.5x for 1 turn",
                "cooldown": [ 24, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Burning Vanguard",
    },
    1251: {// Coliseum Marco
        captain: "Boosts ATK of Powerhouse characters by 2x and Recovers a variable amount of character's RCV in HP at the end of each turn depending on how many Powerhouse characters are on your team",
        captainNotes: "1x Powerhouse: .5x RCV | 2x Powerhouse: .75x RCV | 3x Powerhouse: 1x RCV | 4x Powerhouse: 1.5x RCV | 5x Powerhouse: 2x RCV | 6x Powerhouse: 2.5x RCV",
        special: [
            {
                "description": "Randomizes all orbs and boosts ATK of Powerhouse characters by 1.5x for 1 turn",
                "cooldown": [ 21, 6 ],
            },
            {
                "description": "Randomizes non-matching orbs and boosts ATK of Powerhouse characters by 1.5x for 1 turn",
                "cooldown": [ 24, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Burning Vanguard",
        sailor: {
            "base": "None",
            "level1": "Reduces Paralysis duration for 3 turns for himself",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: Reduces Paralysis duration for 3 turns for himself" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
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
    1252: {// Coliseum Doma
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of [INT] characters by 2x",
        special: "Changes adjacent orbs into [INT] orbs. Deals 20x character's ATK in [INT] damage to all enemies.",
        specialName: "Reversed Twin Blades - Surprise Thrust",
        sailor: "Reduces own Silence by 1 turn",
        sailorNotes: "#{silence}",
    },
    1253: {// Coliseum Shura
        captain: "Boosts ATK of [DEX] characters by 2.25x if HP is above 99% at the start of the turn",
        special: "Makes Perfects harder to hit for 1 turn. If during that turn every unit scores a Perfect hit, boosts ATK of [DEX] characters by 1.75x in the following turn.",
        specialName: "Angry Instigator",
    },
    1254: {//FN Squard
        captain: "Boosts ATK of Striker characters by 2.5x until the first hit other than Perfect. Reduce crew's current HP by 5% at the end of each turn.",
        special: "Deals 10x character's ATK in fixed damage to one enemy, reduces crews current HP by 30% and reduces the defense of all enemies by 80% for one turn",
        specialName: "Sword Attack Without Hesitation",
        sailor: "Reduces his own Numbness by 1 turn"
    },
    1255: {//FN DeCalvan
        captain: "Boosts ATK of all characters by 1.5x after the 11th hit in the chain, by 2x after the 16th hit, by 2.5x after the 22nd hit",
        special: "For 1 turn, makes Perfects slightly easier to hit and amplifies the effect of orbs by 1.5x",
        sailor: "When HP is below 30% at the start of the turn, boost base ATK of Fighter characters by 40",
        specialName: "Large Fleet Commander",
    },
    1256: {//FN Whitey Bay
        captain: "Boosts ATK of Slasher and Driven characters by 2x and reduces their RCV by 90%",
        special: "For Slasher and Driven characters, randomizes non-matching orbs, boosts ATK against enemies with increased defense by 1.3x for 1 turn",
        sailor: "Boosts base ATK and RCV of Driven characters by 10",
        specialName: "Icebreaker Breakthrough Force",
    },
    1257: {//Young Whitebeard
        captain: "Boosts ATK of all characters by 2x if HP is below 50% at the start of the turn",
        special: [
            {
                "description": "Cuts the current HP of each enemy by 10%",
                "cooldown": [ 23, 11 ],
            },
            {
                "description": "Cuts the current HP of each enemy by 20%",
                "cooldown": [ 28, 16 ],
            },
            {
                "description": "Cuts the current HP of each enemy by 40%",
                "cooldown": [ 36, 24 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Earth Shattering Fist",
    },
    1258: {//Young Whitebeard Evolved
        captain: "Boosts ATK of all characters by 2.5x if HP is below 50% at the start of the turn",
        special: [
            {
                "description": "Cuts the current HP of each enemy by 10%",
                "cooldown": [ 23, 11 ],
            },
            {
                "description": "Cuts the current HP of each enemy by 20%",
                "cooldown": [ 28, 16 ],
            },
            {
                "description": "Cuts the current HP of each enemy by 40%",
                "cooldown": [ 36, 24 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Earth Shattering Fist",
    },
    1259: {//Young Doflamingo
        captain: "Boosts ATK of Driven characters by 2.5x",
        special: "Deals 25x character's ATK in typeless damage to all enemies. For 3 turns, makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for Driven characters",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Five Color Strings (Goshikito)",
    },
    1260: {//Young Doflamingo
        captain: "Reduces cooldown of Driven specials by 1 turn at the start of the fight. Boosts ATK of Driven characters by 2.5x",
        special: "Deals 25x character's ATK in typeless damage to all enemies. For 3 turns, makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for Driven characters",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Five Color Strings (Goshikito)",
    },
    1261: {//Young Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 1.5x. Heals for .75x his RCV at the end of the turn each time you hit a Perfect.",
        special: "Randomizes all orbs. Boosts the Color Affinity of Free Spirit and Shooter characters by 1.5x for 1 turn",
        specialNotes: "#{colorAffinity : 1.5}",
        specialName: "Blood and Gunpowder of the Underground Family",
    },
    1262: {//Young Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 1.75x. Heals for .75x his RCV at the end of the turn each time you hit a Perfect.",
        special: "Randomizes all orbs. Boosts the Color Affinity of Free Spirit and Shooter characters by 1.5x for 1 turn",
        specialNotes: "#{colorAffinity : 1.5}",
        specialName: "Blood and Gunpowder of the Underground Family",
    },
    1263: {//Young Vergo
        captain: "Boosts ATK of characters with cost 20 or less by 2.5x",
        special: "Deals 20,000 fixed damage to one enemy. Boosts own ATK by 2x for 2 turns",
        specialName: "Iron Leg Sanctions",
    },
    1264: {//Young Vergo
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x",
        special: "Deals 20,000 fixed damage to one enemy. Boosts own ATK by 2x for 2 turns",
        specialName: "Iron Leg Sanctions",
    },
    1265: {//Kimono Ace
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Recovers 3,000 HP and boosts ATK of Free Spirit characters by 1.75x for 1 turn",
        specialName: "Looking to the Full Moon",
    },
    1266: {//Kimono Ace Evo
        captain: "Boosts ATK of Shooter characters by 2.5x",
        special: "Recovers 3,000 HP and boosts ATK of Free Spirit characters by 1.75x for 1 turn",
        specialName: "Looking to the Full Moon",
    },
    1267: {//Legend Blackbeard
        captain: "Boosts ATK of all characters by 2.75x and their HP by 1.5x if you have a Striker, Shooter, Fighter and Slasher on your crew. Attacks will ignore defensive barriers and buffs.",
        captainNotes: "Attacks are still affected by DEF value. DEF boost buffs (Blue shield) still reduce your damage, but Damage Negating (Yellow shield) and % Damage Reduction (Rainbow shield) are ignored). Multiple class characters count as a character of each class. Enemy attacks will go through YOUR defensive buffs.",
        special: "Cuts the current HP of each enemy by 30%. If Blackbeard is a captain, this ability will ignore damage negating abilities and barriers",
        specialNotes: "If Blackbeard is not a captain, the effect works exactly like Whitebeard special and is affected by barriers.",
        specialName: "World Shaking Impact",
    },
    1268: {//Legend Blackbeard
        captain: "Boosts ATK of all characters by 2.75x and their HP by 1.5x if you have a Striker, Shooter, Fighter and Slasher on your crew. Attacks will ignore defensive barriers and buffs.",
        captainNotes: "Attacks are still affected by DEF value. DEF boost buffs (Blue shield) still reduce your damage, but Damage Negating (Yellow shield) and % Damage Reduction (Rainbow shield) are ignored). Multiple class characters count as a character of each class. Enemy attacks will go through YOUR defensive buffs.",
        special: "Cuts the current HP of each enemy by 30%. If Blackbeard is a captain, this ability will ignore damage negating abilities and barriers",
        specialNotes: "If Blackbeard is not a captain, the effect works exactly like Whitebeard special and is affected by barriers.",
        specialName: "World Shaking Impact",
        sailor: {
            "base": "None",
            "level1": "Boosts this character's attack against [STR] characters by 2x",
            "level2": "Boosts base ATK, HP and RCV of all characters by 50",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts this character's attack against [STR] characters by 2x" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 2: Critical Hit" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 2: Boosts base ATK, HP and RCV of all characters by 50" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire Potential 3: Slot Bind Self-reduction" },
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
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by ? turns on this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1269: {//Laffitte
        captain: "Recovers 3x character's RCV in HP at the end of each turn. Deals 3x character's ATK in [DEX] damage to all enemies at the end of each turn.",
        special: "Reduces Bind and Despair duration by 2 turns. Makes Badly Matching and [BLOCK] orbs not reduce damage for 4 turns",
        specialNotes: "Ex. A STR character with a QCK orb will still deal regular damage",
        sailor: "Boosts base ATK of all characters by 100 if your captain is a Driven character",
        specialName: "Horrifying Suggestion",
    },
    1270: {//Laffitte
        captain: "Recovers 3x character's RCV in HP at the end of each turn. Deals 7x character's ATK in [DEX] damage to all enemies at the end of each turn.",
        special: "Reduces Bind and Despair duration by 2 turns. Makes Badly Matching and [BLOCK] orbs not reduce damage for 4 turns",
        specialNotes: "Ex. A STR character with a QCK orb will still deal regular damage",
        sailor: {
            "base": "Boosts base ATK of all characters by 100 if your captain is a Driven character",
            "level1": "Reduces Blindness duration by 3 turns",
        },
        specialName: "Horrifying Suggestion",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Sailor Ability 1: Reduces Blindness duration by 3 turns" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
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
    1271: {//Van Augur
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Changes orbs in the top row into Matching orbs. For Shooter characters, amplifies the effect of orbs by 1.75x for 1 turn",
        sailor: "Reduces Blindness duration by 5 turns",
        specialName: "Other Side of Fate",
    },
    1272: {//Van Augur
        captain: "Reduces cooldown of Shooter specials by 1 turn at the start of the fight. Boosts ATK of Shooter characters by 2.5x.",
        special: "Changes orbs in the top row into Matching orbs. For Shooter characters, amplifies the effect of orbs by 1.75x for 1 turn",
        sailor: {
            "base": "Reduces Blindness duration by 5 turns",
            "level1": "Boosts base ATK of Shooter characters by 60",
        },
        specialName: "Other Side of Fate",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK of Shooter characters by 60" },
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
    1273: {//Jesus Burgess
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.5x and their HP by 1.2",
        captainNotes: "Boosts stack, so a Fighter/Powerhouse character gets 2.25x ATK and 1.44x HP",
        special: "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of Fighter characters by 1.5x for 5 turns",
        sailor: "Boosts base HP of all characters by 75",
        specialName: "Champion of the Wild Roar",
    },
    1274: {//Jesus Burgess
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.6x and their HP by 1.2x",
        captainNotes: "Boosts stack, so a Fighter/Powerhouse character gets 2.56x ATK and 1.44x HP",
        special: "Deals 20x character's ATK in [STR] damage to all enemies. Boosts ATK of Fighter characters by 1.5x for 5 turns",
        sailor: "Boosts base HP of all characters by 75",
        specialName: "Champion of the Wild Roar",
    },
    1275: {//Shiliew
        captain: "Boosts ATK and HP of Slasher characters by 1.5x",
        special: "For each enemy, has a small chance to instantly defeat that enemy.",
        specialNotes: "#{instantKill : 25%}",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
        specialName: "Handling Hell",
    },
    1276: {//Shiliew
        captain: "Boosts ATK and HP of Slasher characters by 2x",
        special: "For each enemy, has a small chance to instantly defeat that enemy.",
        specialNotes: "#{instantKill : 25%}",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
        specialName: "Handling Hell",
    },
    1277: {//Doc Q
        captain: "Reduces RCV of all characters by 99%. Boosts ATK of Slasher and Striker characters by 2.25x if HP is above 99% at the start of the turn",
        special: "Reduces crew's current HP by 10%. Changes [BLOCK], [TND] and [RCV] orbs on Slasher and Striker characters into Matching Orbs.",
        sailor: "Boosts amount healed from [RCV] orbs by 150 each",
        specialName: "Reaping of Desperate Lives",
    },
    1278: {//Doc Q
        captain: "Reduces RCV of all characters by 99%. Boosts ATK of Slasher and Striker characters by 2.75x if HP is above 99% at the start of the turn",
        special: "Reduces crew's current HP by 10%. Changes [BLOCK], [TND] and [RCV] orbs on Slasher and Striker characters into Matching Orbs.",
        sailor: {
            "base": "Boosts amount healed from [RCV] orbs by 150 each",
            "level1": "Boosts base ATK and HP of Striker characters by 50",
        },
        specialName: "Reaping of Desperate Lives",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK and HP of Striker characters by 50" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
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
                    "Level 5: Boosts base ATK by ??"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1279: {//John Giant
        captain: "Boosts ATK and HP of Slasher characters by 1.5x",
        special: "Reduces damage received in the next turn by 50% if HP is less than 50%",
        specialName: "Manifesto to the Weak",
    },
    1280: {//Marineford Aokiji
        captain: "Boosts ATK of [PSY] characters by 2.5x",
        special: "Deals 10,000 fixed damage to all enemies and locks all orbs for 1 turn",
        specialName: "Ice Chunks - Trident",
    },
    1281: {//Marineford Garp
        captain: "Boosts ATK of Fighter characters by 2.25x and reduces damage received by 10%",
        special: "Deals 25x character's ATK in [STR] damage to one enemy that will ignore damage negating abilities and barriers.",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Fist of Love - Falling Fortress",
    },
    1282: {//Marineford Sengoku
        captain: "Boosts ATK of Cerebral characters by 2.5x",
        special: "Reduces cooldown of all specials by 1 turn. Boosts ATK of all characters by 1.2x and amplifies the effect of orbs by 1.2x for 1 turn",
        specialName: "Encircling Wall around Marineford Bay",
    },
    1283: {//Marineford Akainu
        captain: "Boosts ATK of Driven characters by 2.5x",
        special: "Deals 35x character's ATK in [INT] damage to one enemy. Boosts ATK of Driven characters by 1.5x for 1 turn",
        specialName: "Dark Dog",
    },
    1284: {//Wild Luffy
        captain: "Boosts ATK of Striker characters by 1.5x and their HP by 1.2x",
        special: "Reduces Bind and Silence duration by 3 turns. Randomizes non-matching orbs including [BLOCK] orbs",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration against this character by 3 turns",
        sailorNotes: "#{silence}",
        specialName: "Wild Hunt",
    },
    1285: {//Wild Luffy Evolved
        captain: "Boosts ATK of Striker characters by 1.5x and their HP by 1.25x. Boosts ATK of Striker characters by 3.375x after scoring 3 Perfects in a row.",
        special: "Reduces Bind and Silence duration by 3 turns. Randomizes non-matching orbs including [BLOCK] orbs",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration against this character by 3 turns",
        sailorNotes: "#{silence}",
        specialName: "Wild Hunt",
    },
    1286: {//Kid Baby 5
        captain: "Boosts ATK and RCV of [PSY] characters by 1.3x",
        special: "Cuts the current HP of each enemy by 10%. Boosts ATK of Shooter characters by 1.5x for 1 turn",
        specialName: "Handgun Legs",
    },
    1287: {//Kid Baby 5
        captain: "Boosts ATK and RCV of [PSY] characters by 1.5x",
        special: "Cuts the current HP of each enemy by 10%. Boosts ATK of Shooter characters by 1.5x for 1 turn",
        specialName: "Handgun Legs",
    },
    1288: {//Kid Law
        captain: "Boosts ATK of Driven characters by 2.5x, reduces crew's current HP by 10% at the end of each turn, reduces his own ATK multiplier by 0.1x at the end of each turn",
        captainNotes: "His ATK multiplier will be 2.5x on the first turn, 2.4x on the second, 2.3x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Driven characters. You will not die to the HP reduction",
        special: "Reduces Special Cooldown of Driven specials by 1 turn. If during that turn every unit scores a Perfect hit, reduces Special Cooldown of Driven specials by 1 turn.",
        specialName: "Outcome of Sparta",
    },
    1289: {//Kid Law
        captain: "Boosts ATK of Driven characters by 2.75x, reduces crew's current HP by 10% at the end of each turn, reduces his own ATK multiplier by 0.1x at the end of each turn",
        captainNotes: "His ATK multiplier will be 2.75x on the first turn, 2.65x on the second, 2.55x on the third and so on. The reduction stops once the multiplier is 1.0x. The multiplier affects all Driven characters. You will not die to the HP reduction",
        special: "Reduces Special Cooldown of Driven specials by 1 turn. If during that turn every unit scores a Perfect hit, reduces Special Cooldown of Driven specials by 1 turn.",
        specialName: "Outcome of Sparta",
    },
    1290: {//Kid Buffalo
        captain: "Recovers 500 HP at the end of each turn",
        special: "Changes own orb into [INT] and Captain orb into [BOMB]",
        specialName: "Rude Prank",
    },
    1291: {//Lao G, Coliseum
        captain: "Boosts ATK of Driven characters by 1.75x",
        special: "Changes [PSY], [INT], [RCV] and [TND] orbs into [G] orbs. Locks orbs for 1 turn. If during that turn every unit scores a Perfect hit, changes [G] orbs into Matching Orbs",
        specialName: "Lower Back Pain Stance - The Eyes of Blight Impact",
    },
    1292: {//Lao G, Coliseum
        captain: "Boosts ATK of Driven characters by 2.5x if they have a matching orb, by 2x otherwise",
        special: "Changes [PSY], [INT], [RCV] and [TND] orbs into [G] orbs. Locks orbs for 1 turn. If during that turn every unit scores a Perfect hit, changes [G] orbs into Matching Orbs",
        specialName: "Lower Back Pain Stance - The Eyes of Blight Impact",
    },
    1293: {//Coliseum Sandersonia
        captain: "Boosts ATK of Fighter characters by 1.75x, deals 2 times the damage received in the previous turn in [PSY] damage to all enemies at the end of each turn",
        special: [
            {
                "description": "Changes Captain orb into Matching and reduces damage received from [PSY] enemies by 40%",
                "cooldown": [ 21, 11 ],
            },
            {
                "description": "Changes Captain orb into Matching and reduces damage received from [PSY] enemies by a variable factor.",
                "cooldown": [ 26, 16 ],
            },
        ],
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated: above 50% HP, the multiplier used is 50%; between 50% and 10%, it's 80%; below 10% HP, it's 100%.<br>#{stages}",
        specialName: "Snake Dance",
    },
    1294: {//Coliseum Sandersonia
        captain: "Boosts ATK of Powerhouse characters by 2x, deals 4 times the damage received in the previous turn in [PSY] damage to all enemies at the end of each turn",
        special: [
            {
                "description": "Changes Captain orb into Matching and reduces damage received from [PSY] enemies by 40%",
                "cooldown": [ 21, 11 ],
            },
            {
                "description": "Changes Captain orb into Matching and reduces damage received from [PSY] enemies by a variable factor.",
                "cooldown": [ 26, 16 ],
            },
        ],
        specialNotes: "The exact multiplier used is chosen based on the crew's current HP at the time the special is activated: above 50% HP, the multiplier used is 50%; between 50% and 10%, it's 80%; below 10% HP, it's 100%.<br>#{stages}",
        specialName: "Snake Dance",
    },
    1295: {//Halloween Kalifa
        captain: "Boosts ATK and RCV of [STR] characters by 1.5x",
        special: "Reduces Paralysis duration by 3 turns, removes Poison and reduces the defense of all enemies by 100% for 1 turn",
        specialName: "Mysterious Hour of the Dark Night",
    },
    1296: {//Halloween Kalifa
        captain: "Boosts ATK of [STR] characters by 2x and their RCV by 1.5x",
        special: "Reduces Paralysis duration by 3 turns, removes Poison and reduces the defense of all enemies by 100% for 1 turn",
        specialName: "Mysterious Hour of the Dark Night",
    },
    1297: {//Akainu
        captain: "Boosts ATK by 2.5x following a chain of [STR] > [STR] > [STR] attacks no lower than Good",
        special: "Deals 50x character's ATK in [STR] damage to all enemies. Changes orbs for [STR] characters into [STR] orbs. Boosts the Color Affinity of [STR] characters by 1.75x for 1 turn",
        specialNotes: "#{colorAffinity : 1.75}",
        specialName: "Great Eruption",
    },
    1298: {//Akainu
        captain: "Boosts ATK by 3x following a chain of [STR] > [STR] > [STR] attacks no lower than Good",
        special: "Deals 50x character's ATK in [STR] damage to all enemies. Changes orbs for [STR] characters into [STR] orbs. Boosts the Color Affinity of [STR] characters by 1.75x for 1 turn",
        specialNotes: "#{colorAffinity : 1.75}",
        specialName: "Great Eruption",
    },
    1299: {//Halloween Rebecca
        captain: "Boosts ATK and RCV of [INT] characters by 1.2x",
        special: "Recovers 3,000 HP and boosts ATK of [INT] characters by 1.75x for 1 turn",
        specialName: "Driving Away Evil Spirits of Sin - Cat Pose",
    },
    1300: {//Halloween Rebecca
        captain: "Boosts ATK and RCV of [INT] characters by 1.5x",
        special: "Recovers 3,000 HP and boosts ATK of [INT] characters by 1.75x for 1 turn",
        specialName: "Driving Away Evil Spirits of Sin - Cat Pose",
    },
    1301: {//Jailbreak Buggy
        captain: "Boosts ATK of Slasher characters by 1.75x",
        special: "Reduces crew's HP to 1, empties all slots and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Special Muggy Ball",
    },
    1302: {//Jailbreak Buggy
        captain: "Boosts ATK of Slasher characters by 1.75x and boosts ATK of Driven characters by 1.5x",
        captainNotes: "The bonus is cumulative. Slasher Driven characters get a 2.625x bonus.",
        special: "Reduces crew's HP to 1, empties all slots and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Special Muggy Ball",
    },
    1303: {//Jailbreak Mr. 3
        captain: "Boosts ATK of Cerebral characters by 1.5x. If you don't attack with Mr. 3, reduces damage received by 10% for that turn.",
        special: "Reduces damage received by 60% for 2 turns",
        specialName: "Extra Large Candle Wall",
    },
    1304: {//Jailbreak Mr. 3
        captain: "Boosts ATK of Cerebral characters by 2x. If you don't attack with Mr. 3, reduces damage received by 10% for that turn.",
        special: "Reduces damage received by 60% for 2 turns",
        specialName: "Extra Large Candle Wall",
    },
    1305: {//Halloween Sugar
        captain:  "Boosts ATK of Cerebral characters by 1.3x and recovers 500 HP at the end of each turn",
        special: "Changes Badly Matching, [BLOCK] and [BOMB] orbs into [G] orbs. Reduces Special Cooldown of 1 character by 1 turn",
        specialName: "Aggressive 'Trick-Or-Treat'",
    },
    1306: {//Halloween Sugar
        captain:  "Boosts ATK of Cerebral characters by 1.75x and recovers 1,000 HP at the end of each turn",
        special: "Changes Badly Matching, [BLOCK] and [BOMB] orbs into [G] orbs. Reduces Special Cooldown of 1 character by 1 turn",
        specialName: "Aggressive 'Trick-Or-Treat'",
    },
    1307: {//Halloween Bartolomeo
        captain: "Boosts ATK of Driven characters by 1.75x. If you don't attack with Bartolomeo, reduces damage received by 10% for that turn.",
        special: "Reduces damage received by 50% for 1 turn. If during that turn every unit scores a Perfect hit, reduces damage received by 80% in the following turn",
        specialName: "Vulgar Provocation",
    },
    1308: {//Halloween Bartolomeo
        captain: "Boosts ATK of Driven characters by 2x. If you don't attack with Bartolomeo, reduces damage received by 20% for that turn.",
        special: "Reduces damage received by 50% for 1 turn. If during that turn every unit scores a Perfect hit, reduces damage received by 80% in the following turn",
        specialName: "Vulgar Provocation",
    },
    1309: {//Coliseum Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2x, recovers 1x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Slasher and Free Spirit characters by 1 turn and if HP is above 70%, changes adjacent orbs into Matching Orbs",
        specialName: "Poof",
    },
    1310: {//Coliseum Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2.5x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Slasher and Free Spirit characters by 1 turn and if HP is above 70%, changes adjacent orbs into Matching Orbs",
        specialName: "Poof",
    },
    1311: {//Coliseum Marigold
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        special: "Deals 20x character's ATK in [INT] damage to all enemies. Reduces enemy Damage Threshold timers by 1 turn",
        specialNotes: "Damage Threshold is the buff enemies gain that grealy reduces damage received over a certain amount",
        specialName: "King Cobra Machetes",
    },
    1312: {//Coliseum Marigold
        captain: "Boosts ATK and HP of Powerhouse characters by 1.75x",
        special: "Deals 20x character's ATK in [INT] damage to all enemies. Reduces enemy Damage Threshold timers by 1 turn",
        specialNotes: "Damage Threshold is the buff enemies gain that grealy reduces damage received over a certain amount",
        specialName: "King Cobra Machetes",
    },
    1313: {//Akainu
        captain: "If any character has a [STR] orb, boosts ATK by 3.9375x, boosts ATK by 2.25x otherwise. Boosts chances of getting [STR] orbs",
        captainNotes: "If a character has a [STR] orb, regardless of type, they will have a 3.9375x ATK boost",
        special: "Deals 125x character's ATK typeless damage to all enemies and randomizes non-[STR] orbs. Boosts ATK of characters with cost 50 or higher by 1.75x for 2 turns",
        specialName: "Meteor Volcano",
    },
    1314: {//Akainu
        captain: "If any character has a [STR] orb, boosts ATK by 3.9375x, boosts ATK by 2.25x otherwise. Boosts chances of getting [STR] orbs",
        captainNotes: "If a character has a [STR] orb, regardless of type, they will have a 3.9375x ATK boost",
        special: "Deals 125x character's ATK typeless damage to all enemies and randomizes non-[STR] orbs. Boosts ATK of characters with cost 50 or higher by 1.75x for 2 turns",
        specialName: "Meteor Volcano",
        sailor: {
            "base": "None",
            "level1": "Boosts this character's attack against [QCK] characters by 2x",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts this character's attack against [QCK] characters by 2x" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Potential 2: Enrage" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 2: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 10 turns on this character",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1315: {//Coby
        captain: "Boosts ATK of all characters by 2x after the 2nd Perfect in a row and by 3x after the 5th Perfect in a row.",
        special: [
            {
                "description": "If HP is below 3,000, reduces No Healing debuff by 1 turn. Recovers 3x character's RCV in HP",
                "cooldown": [ 15, 9 ],
            },
            {
                "description": "If HP is below 3,000, reduces No Healing debuff by 3 turns. Recovers 6x character's RCV in HP",
                "cooldown": [ 20, 14 ],
            },
            {
                "description": "If HP is below 3,000, removes No Healing debuff. Recovers 13x character's RCV in HP",
                "cooldown": [ 24, 18 ],
            },
        ],
        specialNotes: "No Healing debuff completely stops healing abilities. This is the debuff used in Akainu raid<br>#{stages}",
        sailor: "Reduces Blindness duration by 5 turns",
        specialName: "Echoing Cry of the Soul",
    },
    1316: {//Coby
        captain: "Boosts ATK of all characters by 2.5x after the 2nd Perfect in a row and by 3.5x after the 5th Perfect in a row.",
        special: [
            {
                "description": "If HP is below 3,000, reduces No Healing debuff by 1 turn. Recovers 3x character's RCV in HP",
                "cooldown": [ 15, 9 ],
            },
            {
                "description": "If HP is below 3,000, reduces No Healing debuff by 3 turns. Recovers 6x character's RCV in HP",
                "cooldown": [ 20, 14 ],
            },
            {
                "description": "If HP is below 3,000, removes No Healing debuff. Recovers 13x character's RCV in HP",
                "cooldown": [ 24, 18 ],
            },
        ],
        specialNotes: "No Healing debuff completely stops healing abilities. This is the debuff used in Akainu raid<br>#{stages}",
        sailor: "Reduces Blindness duration by 5 turns",
        specialName: "Echoing Cry of the Soul",
    },
    1317: {//Garp
        captain: "Boosts ATK of [STR] and [PSY] characters by 2x",
        special: "Deals 30x character's ATK in [STR] fixed damage to all enemies that will ignore damage negating abilities and barriers. Delays all enemies for 1 turn. Reduces the defense of all enemies by 80% for 1 turn.",
        specialNotes: "#{ignoreBarrier}",
        sailor: "Boosts base HP of all characters by 75",
        specialName: "Super Large Iron Ball",
    },
    1318: {//Garp
        captain: "Boosts ATK of [STR] and [PSY] characters by 2.5x",
        special: "Deals 30x character's ATK in [STR] fixed damage to all enemies that will ignore damage negating abilities and barriers. Delays all enemies for 1 turn. Reduces the defense of all enemies by 80% for 1 turn.",
        specialNotes: "#{ignoreBarrier}",
        sailor: "Boosts base HP of all characters by 75",
        specialName: "Super Large Iron Ball",
    },
    1319: {//Lady Tsuru
        captain: "Heals for 1x her RCV at the end of the turn each time you hit a Good. Heals for .1x her RCV at the end of the turn each time you hit a Perfect",
        special: "Deals 10 hits of random [QCK] damage to random enemies. Boosts ATK of all characters by 1.5x for 1 turn",
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 32,000 : for each hit}",
        sailor: "Reduces Paralysis duration by 1 turn",
        specialName: "A Decree of the Veteran",
    },
    1320: {//Lady Tsuru
        captain: {
            "base": "Heals for 1.5x her RCV at the end of the turn each time you hit a Good. Heals for .1x her RCV at the end of the turn each time you hit a Perfect",
            "level1": "Boosts ATK of all characters by 1.2x, heals for 1.5x her RCV at the end of the turn each time you hit a Good. Heals for .3x her RCV at the end of the turn each time you hit a Perfect",
        },
        special: "Deals 10 hits of random [QCK] damage to random enemies. Boosts ATK of all characters by 1.5x for 1 turn",
        specialNotes: "#{randomHits : 10}<br>#{random : 1,000 : 32,000 : for each hit}",
        sailor: {
            "base": "Reduces Paralysis duration by 1 turn",
            "level1": "Reduces Blindness duration by 3 turn",
        },
        specialName: "A Decree of the Veteran",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Aquire Sailor Ability 1: Reduces Blindness duration by 3 turn" },
            { "description": "Aquire new Captain Ability: Boosts ATK of all characters by 1.2x, heals for 1.5x her RCV at the end of the turn each time you hit a Good. Heals for .3x her RCV at the end of the turn each time you hit a Perfect" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
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
    1321: {//Momonga
        captain: "Boosts ATK of Cerebral and Slasher characters by 2.25x and reduces damage received by 10% if there's a [STR], [DEX], [QCK], [INT] and [PSY] character on your crew.",
        special: "Deals 15x character's ATK as [DEX] damage to all enemies. Boosts ATK against delayed enemies by 1.5x for 2 turns",
        specialName: "Front Line Dissection",
        sailor: "Boosts base ATK of Slasher and Cerebral characters by 75 if your captain is a Cerebral character",
    },
    1322: {//Momonga
        captain: "Boosts ATK of Cerebral and Slasher characters by 2.5x and reduces damage received by 10% if there's a [STR], [DEX], [QCK], [INT] and [PSY] character on your crew.",
        special: "Deals 15x character's ATK as [DEX] damage to all enemies. Boosts ATK against delayed enemies by 1.5x for 2 turns",
        specialName: "Front Line Dissection",
        sailor: "Boosts base ATK of Slasher and Cerebral characters by 75 if your captain is a Cerebral character",
        limit: "This character has a Limit Break Tree"
    },
    1323: {//Onigumo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Slasher and Driven characters by 1.3x",
        captainNotes: "The bonus is cumulative. Slasher + Driven characters get a 1.69x bonus.",
        special: "Randomize [RCV], [TND] and [BLOCK] orbs. Makes [STR], [DEX] and [QCK] orbs \"beneficial\" to Driven and Slasher characters for 2 turns",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Onigumo of Dismantling Swordsmanship",
        sailor: "Reduces Paralysis for 5 turns for himself"
    },
    1324: {//Onigumo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Slasher and Driven characters by 1.6x",
        captainNotes: "The bonus is cumulative. Slasher + Driven characters get a 2.56x bonus.",
        special: "Randomize [RCV], [TND] and [BLOCK] orbs. Makes [STR], [DEX] and [QCK] orbs \"beneficial\" to Driven and Slasher characters for 2 turns",
        specialNotes: "\"Beneficial\" orbs grant the same ATK boost as matching orbs while retaining their original function.",
        specialName: "Onigumo of Dismantling Swordsmanship",
        sailor: "Reduces Paralysis for 5 turns for himself"
    },
    1325: {//Halloween Corazon
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "If HP is above 99%, changes [STR], [DEX] and [QCK] orbs into Matching orbs for Cerebral and Free Spirit characters",
        specialName: "Amulet Flame",
    },
    1326: {//Halloween Corazon
        captain: "Boosts ATK by 1.3x and recovers 4x character's RCV in HP at the end of each turn",
        special: "If HP is above 99%, changes [STR], [DEX] and [QCK] orbs into Matching orbs for Cerebral and Free Spirit characters",
        specialName: "Amulet Flame",
    },
    1327: {//Fornight Leo
        captain: "Boosts ATK of characters with cost 20 or less by 2x",
        special: [
            {
                "description": "Deals 3x character's ATK as [DEX] damage to one enemy, change own orb into [DEX]",
                "cooldown": [ 11, 4 ],
            },
            {
                "description": "Deal 15x character's ATK as [DEX] damage to one enemy, changes own and friend's orb into Matching orbs",
                "cooldown": [ 19, 12 ],
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Tail Hammer",
    },
    1328: {//Fornight Leo
        captain: "Boosts ATK of characters with cost 20 or less by 2.5x",
        special: [
            {
                "description": "Deals 3x character's ATK as [DEX] damage to one enemy, change own orb into [DEX]",
                "cooldown": [ 11, 4 ],
            },
            {
                "description": "Deal 15x character's ATK as [DEX] damage to one enemy, changes own and friend's orb into Matching orbs",
                "cooldown": [ 19, 12 ],
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Tail Hammer",
    },
    1329: {//Wicca
        captain: "Reduces cooldown of Fighter and Free Spirit specials by 1 turn at the start of the fight. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if she was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: [
            {
                "description": "Deals 6 fixed damage to all enemies. Randomizes orbs of upper row characters",
                "cooldown": [ 9, 3 ],
            },
            {
                "description": "Deals 15 fixed damage to all enemies. Recovers 3x character's RCV in HP",
                "cooldown": [ 11, 5 ],
            },
            {
                "description": "Deals 300 fixed damage to all enemies. Boosts the Color Affinity of Fighter and Free Spirit characters by 1.25x",
                "cooldown": [ 16, 10 ],
            },
        ],
        specialName: "The Work of Fairies",
        specialNotes: "#{colorAffinity : 1.25}<br>#{stages}",
    },
    1330: {//Gancho
        captain: "Boosts ATK of Striker characters by 1.5x and recovers 2x character's RCV in HP at the end of each turn",
        special: "Switches orbs between slots twice. Makes Badly Matching and [BLOCK] orbs not reduce damage for 2 turns",
        specialName: "Tonta Knowledge",
    },
    1331: {//Mansherry
        captain: "Recovers 2x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Reduces Bind duration for one character by 4 turns. Recovers 7x character's RCV in HP.",
                "cooldown": [ 18, 11 ],
            },
            {
                "description": "Reduces Bind duration for one character by 7 turns. Recovers 15x character's RCV in HP.",
                "cooldown": [ 24, 17 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Tears of Healing",
    },
    1332: {//Mansherry
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Reduces Bind duration for one character by 4 turns. Recovers 7x character's RCV in HP.",
                "cooldown": [ 18, 11 ],
            },
            {
                "description": "Reduces Bind duration for one character by 7 turns. Recovers 15x character's RCV in HP.",
                "cooldown": [ 24, 17 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Tears of Healing",
    },
    1333: {//Kabu
        captain: "Boosts ATK of [STR] and Powerhouse characters by 1.4x",
        captainNotes: "The bonus is cumulative. [STR] Powerhouse characters get a 1.96x bonus.",
        special: "Slightly boosts chances of getting [STR] orbs and boosts own ATK by 1.2x for 2 turns",
        specialName: "Yellow Kabu Squad",
    },
    1334: {//Bian
        captain: "Boosts ATK of [DEX] and Free Spirit characters by 1.4x",
        captainNotes: "The bonus is cumulative. [DEX] Free Spirit characters get a 1.96x bonus.",
        special: "Poisons all enemies and randomizes all orbs",
        specialName: "Pink Bee Squad",
    },
    1335: {//Wedding Sabo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight. Boosts ATK of Free Spirit characters by 1.5x.",
        special: "Changes Friend Captain orb into matching. Adds .5x to Chain multiplier for 1 turn",
        specialName: "Gentleman's Welcome",
    },
    1336: {//Wedding Sabo
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight. Boosts ATK of Free Spirit characters by 2x.",
        special: "Changes Friend Captain orb into matching. Adds .5x to Chain multiplier for 1 turn",
        specialName: "Gentleman's Welcome",
    },
    1337: {//Kanjuro
        captain: "Boosts ATK of Striker and Free Spirit characters by 2x",
        special: "Changes [RCV], [TND], [EMPTY], [G] and [BOMB] orbs into Badly Matching orbs and [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Free Spirit and Striker characters.",
        specialName: "Brushman's Brush",
    },
    1338: {//Kanjuro
        captain: "Boosts ATK of Striker and Free Spirit characters by 2.25x, reduces damage received by 10%",
        special: "Changes [RCV], [TND], [EMPTY], [G] and [BOMB] orbs into Badly Matching orbs and [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Free Spirit and Striker characters.",
        specialName: "Brushman's Brush",
        sailor: {
            "base": "None",
            "level1": "Restores his own special by 2 turns when it is rewinded",
        },
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Restores his own special by 2 turns when it is rewinded" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
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
    1339: {//Chopper Jump Point
        captain: "Boosts ATK of [DEX] characters by 2.25x",
        special: [
            {
                "description": "Reduces Paralysis duration by 1 turn. Adds .2x to Chain multiplier for 1 turn",
                "cooldown": [ 18, 8 ],
            },
            {
                "description": "Reduces Paralysis duration by 2 turn. Adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 23, 13 ],
            },
            {
                "description": "Reduces Paralysis duration by 2 turn. Adds .5x to Chain multiplier for 1 turn",
                "cooldown": [ 25, 15 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Flight Power Strengthening - Jump Point",
    },
    1340: {//Gedatsu
        captain: "Boosts ATK of [QCK] characters by 1.5x",
        special: "Delays all enemies for 1 turn. Cuts the current HP of all enemies by 10%",
        specialName: "Swamp Cloud Burger",
    },
    1341: {//Getdatsu
        captain: "Boosts ATK of [QCK] characters by 1.75x. After scoring 3 hits below Good in a row, boosts ATK of [QCK] characters by 2.625x instead.",
        special: "Delays all enemies for 1 turn. Cuts the current HP of all enemies by 10%",
        specialName: "Swamp Cloud Burger",
    },
    1342: {//Dadan
        captain: "Boosts HP of [PSY] characters by 1.75x",
        special: "Reduces Silence duration by 2 turns",
        specialNotes: "#{silence}",
        specialName: "Rogue Threat",
    },
    1343: {//Porchemy
        captain: "Reduces crew's current HP by 50%. Boosts ATK of Driven characters by 2x.",
        special: "Deals 13x character's ATK in [DEX] damage to one enemy and boosts ATK against enemies with reduced defense by 1.3x for 1 turn",
        specialName: "Spiked Glove of Punishment",
    },
    1344: {//Bluejam
        captain: "Reduces crew's current HP by 50%. Boosts ATK of Driven characters by 2.25x.",
        special: "Deals 20x character's ATK in [STR] damage to all enemies and boosts ATK of Driven characters by 1.3x for 1 turn",
        specialName: "Bullet Purge",
    },
    1345: {//Jimbe
        captain: "Boosts ATK of Fighter characters by 2.5x",
        special: "Reduces Despair duration by 5 turns. Reduces Special Cooldown of your top row by 1 turn",
        specialName: "Gathering Strength for a Counter Attack",
    },
    1346: {//Heracles'n
        captain: "Boosts ATK, HP and RCV of Shooter and Cerebral characters by 1.5x",
        special: "Randomizes all orbs, including [BLOCK] orbs, switches orbs between slots 3 times",
        specialName: "Survival Techniques of the Hungry Baron",
    },
    1347: {//Torino Kingdom Monsters
        special: "Change own orb into [PSY] and deals 25x character's attack in [PSY] damage to one enemy",
        specialName: "Tsubami Behemoth",
    },
    1348: {//Humandrills
        special: "Boosts ATK of all characters by 1.2x for 2 turns and amplifies the effect of orbs by 1.2x for 2 turns",
        specialName: "Imitation Tactics",
    },
    1349: {//Haredas
        captain: "Boosts ATK of Cerebral characters by 1.5x and their RCV by 1.75x",
        special: "Empty all slots including [BLOCK] orbs and boosts ATK of Cerebral characters by 1.2x for 1 turn",
        specialName: "Gust 'Wind Knot'",
    },
    1350: {//Longarm Tribe Theives
        special: "Switches orbs between slots 3 times",
        specialName: "Longarm Tribe of Tehna Gehna",
    },
    1351: {//Tequila Wolf Guard
        special: "Reduces the defense of all by 50% and delays all enemies for 1 turn",
        specialName: "Covering Fire",
    },
    1352: {//Ivankov
        captain: "Boosts ATK of Fighter characters by 2x at the start of the chain, boosts ATK of Fighter characters by 3.5x after the 5th Perfect in a row",
        special: "Following the activation of the special, if every unit scores a Perfect hit, reduces damage received by 90% in the following turn",
        specialName: "Rolling Beauty",
    },
    1353: {//Rayleigh
        captain: "Boosts ATK of Cerebral characters by 2.5x",
        special: "Deals 50,000 Fixed damage to one enemy, adds 0.5 to Chain multiplier for 1 turn",
        specialName: "Guidence to Control Haki",
    },
    1354: {//Secret Rayleigh
        captain: "Boosts chain multiplier by 2x, recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Recovers 15x character's RCV in HP, amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Straight Stimultaion",
        specialNotes: "#{orb : 1.5x}",
    },
    1355: {//Secret Rayleigh
        captain: "Boosts chain multiplier by 3x, recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Recovers 15x character's RCV in HP, amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Straight Stimultaion",
        specialNotes: "#{orb : 1.5x}",
    },
    1356: {//Pekoms
        captain: "Boosts ATK of Powerhouse characters by 1.5x",
        special: "Changes [RCV] and [EMPTY] orbs into Matching orbs on Fighter characters. Makes Perfects easier to hit for 1 turn.",
        specialName: "Serious Threat",
        specialNotes: "Increases timing window to hit a Perfect. (Animation remains the same)"
    },
    1357: {//Pekoms
        captain: "Boosts ATK, HP and RCV of Powerhouse characters by 1.5x",
        special: "Changes [RCV] and [EMPTY] orbs into Matching orbs on Fighter characters. Makes Perfects easier to hit for 1 turn.",
        specialName: "Serious Threat",
        specialNotes: "Increases timing window to hit a Perfect. (Animation remains the same)"
    },
    1358: {//Tamago
        captain: "Boosts ATK of Cerebral characters by 1.5x and the HP of Striker characters by 1.5x",
        special: "Boosts RCV of all characters by 1.75x and delays all enemies by 1 turn.",
        specialName: "The Long Legged Gentleman's Resolution",
    },
    1359: {//Tamago
        captain: "Boosts ATK of Cerebral characters by 1.75x and the HP of Striker characters by 1.75x",
        special: "Boosts RCV of all characters by 1.75x and delays all enemies by 1 turn.",
        specialName: "The Long Legged Gentleman's Resolution",
    },
    1360: {//Winter Luffy
        captain: "Boosts ATK characters with cost 30 or less by 2x and their HP by 1.2x",
        special: "Changes own orb into [QCK], deals 15x character's ATK in [QCK] damage to one enemy",
        specialName: "Gum-Gum Twin Jet Pistol: Snowflake",
    },
    1361: {//6* Zoro
        captain: "If you have 5 or more Slashers in your crew, boosts ATK of Slasher characters by 2.5x and their HP by 1.5x. If you defeated an enemy last turn, boosts ATK of Slasher characters by 3x instead and boosts ATK of all other characters by 1.2x",
        captainNotes: "You only need to kill at least 1 character in the last turn to gain his 3x ATK boost. If a character dies and revives, you will retain the 3x ATK boost",
        special: "Deals 60x character's ATK as typeless damage to all enemies. If Zoro is your Captain or Friend/Guest Captain, boosts ATK of Slasher characters by 2x for 1 turn. If he is a Sailor, boosts ATK of Slasher characters by 1.75x for 1 turn instead",
        specialName: "Three Blade Style Secret Skill: Crossroad of Six Paths",
    },
    1362: {//6* Zoro
        captain: "If you have 5 or more Slashers in your crew, boosts ATK of Slasher characters by 2.5x and their HP by 1.5x. If you defeated an enemy last turn, boosts ATK of Slasher characters by 3x instead and boosts ATK of all other characters by 1.2x",
        captainNotes: "You only need to kill at least 1 character in the last turn to gain his 3x ATK boost. If a character dies and revives, you will retain the 3x ATK boost",
        special: "Deals 60x character's ATK as typeless damage to all enemies. If Zoro is your Captain or Friend/Guest Captain, boosts ATK of Slasher characters by 2x for 1 turn. If he is a Sailor, boosts ATK of Slasher characters by 1.75x for 1 turn instead",
        specialName: "Three Blade Style Secret Skill: Crossroad of Six Paths",
    },
    1363: {//Timeskip Franky
        captain: "Boosts ATK of [PSY] characters by 2x, reduces damage received by 10%",
        special: "Deals 25x character's ATK in [PSY] damage to all enemies, amplifies the effect of orbs for [PSY] characters by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        sailor: "Boosts base HP of [PSY] characters by 100",
        specialName: "Franky Fireball",
    },
    1364: {//Timeskip Franky
        captain: "Boosts ATK of [PSY] characters by 2.5x, reduces damage received by 10%",
        special: "Deals 25x character's ATK in [PSY] damage to all enemies, amplifies the effect of orbs for [PSY] characters by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        sailor: "Boosts base HP of [PSY] characters by 100",
        specialName: "Franky Fireball",
    },
    1365: {//Timeskip Nami
        captain: "Boosts ATK and RCV of Cerebral characters by 1.5x",
        special: [
            {
                "description": "Reduces Paralysis and Silence duration by 1 turn. Delays all enemies for 1 turn",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "Reduces Paralysis and Silence duration by 2 turns. Delays all enemies for 1 turn",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Reduces Paralysis and Silence duration by 5 turns. Delays all enemies for 2 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        sailorNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        specialNotes: "#{silence}<br>#{stages}",
        specialName: "Black Ball - Thundercloud Rod",
    },
    1366: {//Timeskip Nami
        captain: "Boosts RCV of Cerebral characters by 1.5x and their ATK by 2.75x if they have a matching orb, by 1.5x otherwise",
        special: [
            {
                "description": "Reduces Paralysis and Silence duration by 1 turn. Delays all enemies for 1 turn",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "Reduces Paralysis and Silence duration by 2 turns. Delays all enemies for 1 turn",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Reduces Paralysis and Silence duration by 5 turns. Delays all enemies for 2 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialNotes: "#{silence}<br>#{stages}",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
        specialName: "Black Ball - Thundercloud Rod",
    },
    1367: {//Timeskip Sanji
        captain: "Boosts ATK of [STR] characters by 2x",
        special: [
            {
                "description": "Reduces damage received by 50% and amplifies the effect of orbs by 1.5x for 1 turn.",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Reduces damage received by 70% and amplifies the effect of orbs by 1.75x for 1 turn.",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialNotes: "#{orb : 1.75x}<br>#{stages}",
        sailor: "Boosts base ATK, HP and RCV of all characters by 50",
        specialName: "Sky Walk",
    },
    1368: {//Timeskip Sanji
        captain: "Boosts ATK of [STR] characters by 3x if HP is below 30% at the start of the turn, by 2.5x otherwise",
        special: [
            {
                "description": "Reduces damage received by 50% and amplifies the effect of orbs by 1.5x for 1 turn.",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Reduces damage received by 70% and amplifies the effect of orbs by 1.75x for 1 turn.",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialNotes: "#{orb : 1.75x}<br>#{stages}",
        sailor: "Boosts base ATK, HP and RCV of all characters by 50",
        specialName: "Sky Walk",
    },
    1369: {//Timeskip Chopper
        captain: "Boosts ATK of [QCK] characters by 1.5x and their HP and RCV by 1.2x",
        special: "Changes [DEX] and [RCV] orbs into Matching orbs on [QCK] characters, cuts the current HP of one enemy by 15%",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit",
        specialName: "Kakuho: Elf",
    },
    1370: {//Timeskip Chopper
        captain: "Boosts ATK of [QCK] characters by 2x and their HP and RCV by 1.2x",
        special: "Changes [DEX] and [RCV] orbs into Matching orbs on [QCK] characters, cuts the current HP of one enemy by 15%",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit",
        specialName: "Kakuho: Elf",
    },
    1371: {//Wild Zoro
        captain: "Boosts ATK of Slasher and Powerhouse characters by 2x at the start of the chain, by 2.25x after the 2nd Perfect in a row and by 2.5x after the 4th Perfect in a row.",
        special: "Reduces Despair duration by 3 turns. Reduces Special Cooldown of Slasher and Powerhouse characters by 2 turns",
        sailor: "Restores his own special by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
        specialName: "Wild Plan",
    },
    1372: {//Wild Zoro
        captain: "Boosts ATK of Slasher and Powerhouse characters by 2x at the start of the chain, by 2.5x after the 2nd Perfect in a row and by 3x after the 4th Perfect in a row.",
        special: "Reduces Despair duration by 3 turns. Reduces Special Cooldown of Slasher and Powerhouse characters by 2 turns",
        sailor: "Restores his own special by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
        specialName: "Wild Plan",
    },
    1373: {//Magellan
        captain: "Boosts ATK of INT characters by 1.5x and their HP by 1.2x, deals 5 times the damage received in the previous turn in [INT] damage to all enemies at the end of each turn",
        special: [
            {
                "description": "Poisons all enemies and delays all enemies for 1 turn.",
                "cooldown": [ 25, 10 ],
            },
            {
                "description": "Inflicts Toxic to all enemies and delays all enemies for 1 turn.",
                "cooldown": [ 31, 16 ],
            },
        ],
        specialName: "Poison Dragon",
        specialNotes: "Toxic starts at 0.5x character's attack and increases by 3x at the end of every turn until 1,500,000 damage per turn.<br>#{stages}",
    },
    1374: {//Magellan
        captain: "Boosts ATK of INT characters by 2.25x and their HP by 1.5x, deals 5 times the damage received in the previous turn in [INT] damage to all enemies at the end of each turn",
        special: [
            {
                "description": "Poisons all enemies and delays all enemies for 1 turn.",
                "cooldown": [ 25, 10 ],
            },
            {
                "description": "Inflicts Toxic to all enemies and delays all enemies for 1 turn.",
                "cooldown": [ 31, 16 ],
            },
        ],
        specialName: "Poison Dragon",
        specialNotes: "Toxic starts at 0.5x character's attack and increases by 3x at the end of every turn until 1,500,000 damage per turn.<br>#{stages}",
    },
    1375: {//Dellinger
        captain: "Boosts ATK of Powerhouse characters by 2.5x, reduces crew's HP by 50%, Increases damage received by 2x",
        special: "Deals 20x character's ATK in [QCK] damage to one enemy, Boosts Dellinger's ATK by 1.5x for 1 turn, amplifies the effect of Dellinger's orb by 1.5x for 1 turn and changes own orb to [QCK].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the Dellinger who uses his Special.",
        specialName: "Deadly Fangs of Rage",
    },
    1376: {//Dellinger
        captain: "Boosts ATK of Powerhouse characters by 2.75x, reduces crew's HP by 20%, Increases damage received by 2x",
        special: "Deals 20x character's ATK in [QCK] damage to one enemy, Boosts Dellinger's ATK by 1.5x for 1 turn, amplifies the effect of Dellinger's orb by 1.5x for 1 turn and changes own orb to [QCK].",
        specialNotes: "Boosted ATK and Orb Effectivess only works for the Dellinger who uses his Special.",
        specialName: "Deadly Fangs of Rage",
    },
    1377: {//Marguerite
        captain: "Boosts ATK and RCV of Slasher and Shooter characters by 1.3x",
        special: "Recovers 18x character's RCV in HP. Reduces damage received by 50% for 1 turn",
        sailor: "Boosts amount healed from [RCV] orbs by 125 each",
        specialName: "Sincere Devotion",
    },
    1378: {//Marguerite
        captain: "Boosts ATK and RCV of Slasher and Shooter characters by 1.75x",
        special: "Recovers 18x character's RCV in HP. Reduces damage received by 50% for 1 turn",
        sailor: "Boosts amount healed from [RCV] orbs by 125 each",
        specialName: "Sincere Devotion",
    },
    1379: {//Shanks
        captain: "Boosts chances of getting Matching orbs, boosts ATK of Cerebral characters by 2x",
        special: "Reduces Paralysis duration by 3 turns. For Cerebral and Free Spirit characters, amplifies the effects of orbs by 2x for 1 turn. Makes [RCV] and [TND] orbs \"beneficial\" to Cerebral and Free Spirit characters for 1 turn.",
        specialName: "A Decision Made over Sake",
        specialNotes: "#{orb : 2x}",
    },
    1380: {//Shanks
        captain: "Boosts chances of getting Matching orbs, boosts ATK of Cerebral characters by 2.5x",
        special: "Reduces Paralysis duration by 3 turns. For Cerebral and Free Spirit characters, amplifies the effects of orbs by 2x for 1 turn. Makes [RCV] and [TND] orbs \"beneficial\" to Cerebral and Free Spirit characters for 1 turn.",
        specialName: "A Decision Made over Sake",
        specialNotes: "#{orb : 2x}",
    },
    1381: {//Christmas Tashigi
        captain: "Boosts ATK and RCV of Slasher and Cerebral characters by 1.2x",
        special: "Reduces Silence duration by 1 turn and recovers 12,240 HP",
        specialNotes: "Silence will refer to effects that prevent you from activating Special Abilities",
        specialName: "Strawberry Smile",
        specialNotes: "#{silence}",
    },
    1382: {//Christmas Tashigi
        captain: "Boosts ATK and RCV of Slasher and Cerebral characters by 1.75x",
        special: "Reduces Silence duration by 1 turn and recovers 12,240 HP",
        specialNotes: "Silence will refer to effects that prevent you from activating Special Abilities",
        specialName: "Strawberry Smile",
        specialNotes: "#{silence}",
    },
    1383: {//Soldier-San
        captain: "Boosts ATK of Striker characters by 2x. Increases damage received by 1.5x",
        special: "Reduces Paralysis, Bind, Despair and Silence duration by 1 turn. Randomizes all Badly Matching, [BLOCK], or [EMPTY] orbs",
        specialNotes: "#{silence}",
        specialName: "Angry Extermination of Bugs",
    },
    1384: {//Soldier-San
        captain: "Boosts ATK of Striker characters by 2.5x. Increases damage received by 1.5x",
        special: "Reduces Paralysis, Bind, Despair and Silence duration by 1 turn. Randomizes all Badly Matching, [BLOCK], or [EMPTY] orbs",
        specialNotes: "#{silence}",
        specialName: "Angry Extermination of Bugs",
    },
    1385: {//Rebecca
        captain: "Reduces damage received by 20%",
        special: "Removes blindness",
        specialName: "Mother's Promise",
    },
    1386: {//Rebecca
        captain: "Reduces damage received by 25%",
        special: "Removes blindness",
        specialName: "Mother's Promise",
    },
    1387: {//Luffy 5+
        captain: "Boosts ATK of all characters by 2.25x and their HP by 1.25x, boosts ATK by 2.8125x after scoring 4 Perfects in a row",
        special: "Deals 40x character's ATK in [STR] damage to all enemies and delays all enemies for 1 turn",
        specialName: "Gum Gum: Elephant Gun",
        sailor: {
            "base": "None",
            "level1": "Boosts own base ATK by 100 if this character is the last in the chain to attack",
            "level2": "Makes [QCK] orbs \"beneficial\" for this unit"
        },
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
        potentialNotes: "#{enrage}"
    },
    1388: {//Zoro 5+
        captain: "Boosts ATK of [DEX] characters by 2.5x",
        special: "Cuts the current HP of each enemy by 10%. Reduces special cooldown of [DEX] specials by 1 turn.",
        specialName: "Ittoriyu: Unfortunate Port Bird",
        sailor: {
            "base": "None",
            "level1": "Restores his own special by 1 turn when it is rewinded",
            "level2": "Boosts base ATK of [DEX] characters by 40"
        },
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
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ]
    },
    1389: {//Nami 5+
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, Boosts ATK of [INT] characters by 2x and their RCV by 1.5x.",
        special: "Deals 20x character's ATK in [INT] damage to all enemies. Amplifies the effect of orbs for [INT] characters by 1.75x for 1 turn",
        specialName: "Weather Egg: Thunder Breed Tempo",
        specialNotes: "#{orb : 1.75x}",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] orbs \"beneficial\" for [INT] characters",
            "level2": "Boosts base ATK, HP and RCV of [INT] characters by 50"
        },
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
                    "Level 2: If HP is below 15% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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
    1390: {//Buggy Legend
        captain: "Boosts ATK of characters with cost 40 or less by 1.5x and boosts the HP and ATK of characters with cost 41 or greater by 0.5x. Guarantees duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "Randomizes all orbs. Boosts ATK of characters with cost 40 or less by 1.75x for 2 turns",
        specialName: "Chop-Chop Clown Car",
    },
    1391: {//Buggy Legend
        captain: "Boosts ATK of characters with cost 40 or less by 1.5x and reduces the HP and ATK of characters with cost 41 and greater by 0.5x. Guarantees duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "Randomizes all orbs. Boosts ATK of characters with cost 40 or less by 1.75x for 2 turns",
        specialName: "Chop-Chop Clown Car",
    },
    1392: {//Sentomaru
        captain: "Boosts ATK of Striker characters by 2x and boosts the HP of [PSY] characters by 1.25x",
        captainNotes: "A character with both classes will get both boosts",
        special: "Deals 25x character's ATK in [PSY] damage to all enemies. If during that turn every unit scores a Perfect hit, boosts ATK of [PSY] characters by 1.75x in the following turn.",
        specialName: "Large Cutting Axe",
    },
    1393: {//Demaro Black
        captain: "Boosts ATK of characters with cost 30 or less by 2x",
        special: "Boosts ATK of all characters by 1.1x, slightly boosts chances of getting matching orbs and amplifies the effect of orbs by 1.1x for 7 turns",
        specialName: "Three Forked Tongue",
    },
    1394: {//Kimono Baby 5
        captain: "Boosts ATK of [STR] and [QCK] characters by 1.5x and their RCV by 1.1x",
        special: "Recovers 7x character's RCV in HP. Boosts ATK of Fighter and Striker characters by 1.5x for 1 turn",
        specialName: "Nation's Ambition",
    },
    1395: {//Kimono Baby 5
        captain: "Boosts ATK of [STR] and [QCK] characters by 2.25x and their RCV by 1.2x",
        special: "Recovers 7x character's RCV in HP. Boosts ATK of Fighter and Striker characters by 1.5x for 1 turn",
        specialName: "Nation's Ambition",
    },
    1396: {//Tashigi Shambles
        captain: "Boosts ATK of Driven characters by 1.75x and the HP of Striker Characters by 1.25x",
        special: "Deals 7 hits of random [DEX] damage to random enemies. Reduces the defense of all enemies by 80% and delays all enemies for 1 turn",
        specialName: "Surprise Jitte Onslaught",
        specialNotes: "#{randomHits : 7}",
    },
    1397: {//Tashigi Shambles
        captain: "Boosts ATK of Driven characters by 2x and the HP of Striker Characters by 1.5x",
        special: "Deals 7 hits of random [DEX] damage to random enemies. Reduces the defense of all enemies by 80% and delays all enemies for 1 turn",
        specialName: "Surprise Jitte Onslaught",
        specialNotes: "#{randomHits : 7}",
    },
    1398: {//Smoker Shambles
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.5x",
        special: "For Slasher characters, randomizes all non-matching orbs. Swaps this unit with your captain for 2 turns",
        specialName: "Out-of-Control White Smoke",
    },
    1399: {//Smoker Shambles
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.5x, reduces damage received by 15%",
        special: "For Slasher characters, randomizes all non-matching orbs. Swaps this unit with your captain for 2 turns",
        specialName: "Out-of-Control White Smoke",
    },
    1400: {//Colo Gladius
        captain: "Boosts ATK of Shooter characters by 1.75x and boosts ATK of Driven characters by 1.3x",
        captainNotes: "The bonus is cumulative. Shooter Driven characters get a 2.275x bonus.",
        special: [
            {
                "description": "Deals 13x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 1 turn and boosts the Color Affinity of Shooter characters by 1.5x for 1 turn",
                "cooldown": [ 26, 11 ],
            },
            {
                "description": "Deals 30x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 2 turns and boosts the Color Affinity of Shooter characters by 1.75x for 1 turn",
                "cooldown": [ 33, 18 ],
            },
        ],
        specialName: "Stonewall Punk",
        specialNotes: "#{colorAffinity : 1.75}<br>#{stages}",
    },
    1401: {//Colo Gladius
        captain: "Boosts ATK of Shooter characters by 1.75x and boosts ATK of Driven characters by 1.5x",
        captainNotes: "The bonus is cumulative. Shooter Driven characters get a 2.625x bonus.",
        special: [
            {
                "description": "Deals 13x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 1 turn and boosts the Color Affinity of Shooter characters by 1.5x for 1 turn",
                "cooldown": [ 26, 11 ],
            },
            {
                "description": "Deals 30x character's ATK in [STR] damage to all enemies, reduces Bind and Despair duration by 2 turns and boosts the Color Affinity of Shooter characters by 1.75x for 1 turn",
                "cooldown": [ 33, 18 ],
            },
        ],
        specialName: "Stonewall Punk",
        specialNotes: "#{colorAffinity : 1.75}<br>#{stages}",
        sailor: {
            "base": "None",
            "level1": "Reduces Silence duration against this unit by 2 turns",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 1: Reduces Silence duration against this unit by 2 turns" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
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
        potentialNotes: "#{enrage}"
    },
    1402: {//Colo Dalton
        captain: "Boosts ATK of [PSY] and [QCK] characters by 2x",
        special: [
            {
                "description": "Deals 3x character's ATK in [PSY] damage to one enemy, boosts ATK of [PSY] characters by 1.3x for 1 turn",
                "cooldown": [ 14, 4 ],
            },
            {
                "description": "Deals 13x character's ATK in [PSY] damage to one enemy, boosts ATK of [PSY] characters by 1.5x for 1 turn",
                "cooldown": [ 18, 8 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Offense Battle Axe",
    },
    1403: {//Timeskip Luffy
        captain: "Boosts ATK of Free Spirit characters by 2.5x and reduce damage received by 15%. If you use \"Gomu Gomu no Red Hawk\" THIS LUFFY boosts ATK of Free Spirit characters by 4x instead for 3 turns.",
        captainNotes: "Using Luffy's special will change his own captain boost to 4x. If both Luffy's specials are used, the total ATK boost will be 16x",
        special: [
            {
                "description": "Deals 25x character's ATK in [QCK] damage to one enemy and makes [QCK], [DEX] and [PSY] orbs \"beneficial\" to Fighter and Free Spirit characters for 1 turn",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "Deals 60x character's ATK in [QCK] damage to one enemy and makes [QCK], [DEX] and [PSY] orbs \"beneficial\" for 3 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Gomu Gomu no Red Hawk",
    },
    1404: {//Timeskip Luffy
        captain: "Boosts ATK of Free Spirit characters by 2.5x and reduce damage received by 15%. If you use \"Gomu Gomu no Red Hawk\" THIS LUFFY boosts ATK of Free Spirit characters by 4x instead for 3 turns.",
        captainNotes: "Using Luffy's special will change his own captain boost to 4x. If both Luffy's specials are used, the total ATK boost will be 16x",
        special: [
            {
                "description": "Deals 25x character's ATK in [QCK] damage to one enemy and makes [QCK], [DEX] and [PSY] orbs \"beneficial\" to Fighter and Free Spirit characters for 1 turn",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "Deals 60x character's ATK in [QCK] damage to one enemy and makes [QCK], [DEX] and [PSY] orbs \"beneficial\" for 3 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Gomu Gomu no Red Hawk",
    },
    1405: {//Timeskip Usopp
        captain: "Boosts ATK of Shooter characters by 1.75x and their RCV by 1.25x",
        special: "Deals 10 hits of 2,000 fixed damage to random enemies and if enemies have delay protection at the time the special was activated, boosts ATK of Shooter characters by 1.75x and amplifies the effect of orbs for Shooter characters by 1.75x for 1 turn",
        specialNotes: "#{randomHits : 10}",
        specialName: "Assault Meteor Shower",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK and RCV of Shooter characters by 100",
    },
    1406: {//Timeskip Usopp
        captain: "Boosts ATK of Shooter characters by 2.25x and their RCV by 1.5x",
        special: "Deals 10 hits of 2,000 fixed damage to random enemies and if enemies have delay protection at the time the special was activated, boosts ATK of Shooter characters by 1.75x and amplifies the effect of orbs for Shooter characters by 1.75x for 1 turn",
        specialNotes: "#{randomHits : 10}",
        specialName: "Assault Meteor Shower",
        sailor: "When HP is below 30% at the start of the turn, boosts ATK and RCV of Shooter characters by 100",
    },
    1407: {//Timeskip Robin
        captain: "Boosts ATK of [DEX] and [PSY] characters by 1.75x and their RCV by 1.25x",
        special: "Reduces Despair duration by 3 turns and boosts ATK of [DEX] and [PSY] characters by 2x for 1 turn",
        specialName: "Mil Fleur: Gigantesco Mano Stomp",
        sailor: "Reduces Blindness duration by 3 turns",
    },
    1408: {//Timeskip Robin
        captain: "Boosts ATK of [DEX] and [PSY] characters by 2.25x and their RCV by 1.5x",
        special: "Reduces Despair duration by 3 turns and boosts ATK of [DEX] and [PSY] characters by 2x for 1 turn",
        specialName: "Mil Fleur: Gigantesco Mano Stomp",
        sailor: "Reduces Blindness duration by 3 turns",
    },
    1409: {//Timeskip Brook
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        special: "Delays all enemies by 1 turn and boosts ATK of Slasher and Free Spirit characters by 1.75x for 1 turn",
        specialName: "Soul's Murder Soul: Soul Solid",
        sailor: "Completely resists Paralysis on this character",
    },
    1410: {//Timeskip Brook
        captain: "Boosts chain multiplier by 2.5x. Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        special: "Delays all enemies by 1 turn and boosts ATK of Slasher and Free Spirit characters by 1.75x for 1 turn",
        specialName: "Soul's Murder Soul: Soul Solid",
        sailor: {
            "base": "Completely resists Paralysis on this character",
            "level1": "Reduces Paralysis duration by 1 turn",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Aquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Aquire Sailor Ability 1: Reduces Paralysis duration by 1 turn" },
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
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
        ]
    },
    1411: {//Timeskip Chopper Again
        captain: "Boosts ATK of Powerhouse characters by 2.25x, reduces crew's RCV to 0",
        special: "Reduces enemies Percent Damage Reduction and Increased Defense duration by 3 turns and deals 60x character's ATK in typeless damage to all enemies",
        specialNotes: "This does not affect threshold damage reduction. Damage Reduction is the rainbow shield buff enemies have and Increased Defense is the blue shiled buff enemies have",
        specialName: "Carving Hoof Palm: Coconut",
        sailor: "If this character has a [STR] orb and you hit a Perfect with him, keep his [STR] orb for the next turn",
    },
    1412: {//Timeskip Chopper Again
        captain: "Boosts ATK of Powerhouse characters by 2.75x, reduces crew's RCV to 0",
        special: "Reduces enemies Percent Damage Reduction and Increased Defense duration by 3 turns and deals 60x character's ATK in typeless damage to all enemies",
        specialNotes: "This does not affect threshold damage reduction. Damage Reduction is the rainbow shield buff enemies have and Increased Defense is the blue shield buff enemies have",
        specialName: "Carving Hoof Palm: Coconut",
        sailor: "If this character has a [STR] orb and you hit a Perfect with him, keep his [STR] orb for the next turn",
    },
    1413: {//6+ Whitebeard
        captain: "Boosts ATK of all characters by 3x if HP is below 30% at the start of the turn, 1.75x otherwise and boosts the HP of all characters by 1.2x",
        special: "Cuts the current HP of each enemy by 30%, reduces special cooldown of all non-Captain specials by 1 turn and randomizes non-matching orbs including [BLOCK] orbs.",
        specialName: "Emperor's Pride",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Striker and Powerhouse characters by 60",
            "level1": "Completely resists Paralysis on this character",
        },
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
            { "description": "Aquire Sailor Ability 2: Completely resists Paralysis on this character" },
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
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1414: {//Shop Sanji
        captain: "Boosts ATK of Powerhouse characters by 2.5x",
        special: "Changes own orb into [INT] and reduces Special Cooldown of Powerhouse characters by 1 turn.",
        specialName: "Are you ready?",
    },
    1415: {//Fortnight Sengoku
        captain: "Boosts ATK of characters with cost 30 or less by 1.5x",
        special: "Reduces Special Cooldown of all characters with cost 30 or less by 1 turn and boosts ATK of characters with cost 30 or less by 1.5x for 1 turn",
        specialName: "Unshakeable Resolution of the Wise Master",
    },
    1416: {//Fortnight Sengoku
        captain: "Boosts ATK of characters with cost 30 or less by 2.25x and their HP by 1.2x",
        special: "Reduces Special Cooldown of all characters with cost 30 or less by 1 turn and boosts ATK of characters with cost 30 or less by 1.5x for 1 turn",
        specialName: "Unshakeable Resolution of the Wise Master",
    },
    1417: {//Ronse
        captain: "Boosts ATK and HP of [STR] characters by 1.5x",
        special: "Cuts the current HP of all enemies by 10%, changes [BLOCK] orbs into [STR] orbs for Slasher characters",
        specialName: "Raid Battle-Axe: One Flash",
    },
    1418: {//Stainless
        captain: "Boosts ATK and RCV of INT characters by 1.5x",
        special: "Reduces any damage received above 5,000 HP by 99% for 1 turn",
        specialName: "Defence of the Command Line",
    },
    1419: {//Kimono Lucci
        captain: "Boosts ATK of Powerhouse characters by 2x, reduce damage received by 10%",
        special: "Recovers 5,000 HP and boosts ATK against enemies with reduced defense by 1.5x for 1 turn",
        specialName: "Demonic Style",
    },
    1420: {//Kimono Lucci
        captain: "Boosts ATK of Powerhouse characters by 2.5x, reduce damage received by 10%",
        special: "Recovers 5,000 HP and boosts ATK against enemies with reduced defense by 1.5x for 1 turn",
        specialName: "Demonic Style",
    },
    1421: {//Coliseum Diamante
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Deals 20x Character's ATK in [INT] damage to all enemies. If HP is full at the time the special was activated, boosts ATK of Driven characters by 2x for 1 turn, 1.5x otherwise",
        specialName: "Half Moon Glaive",
    },
    1422: {//Coliseum Diamante
        captain: "Boosts ATK of Driven characters by 2.25x and boosts HP of Striker and Slasher characters by 1.5x",
        special: "Deals 20x Character's ATK in [INT] damage to all enemies. If HP is full at the time the special was activated, boosts ATK of Driven characters by 2x for 1 turn, 1.5x otherwise",
        specialName: "Half Moon Glaive",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] and [TND] orbs \"beneficial\" for this unit",
            "level1": "If HP is above 99% at the start of the turn, boosts base ATK of all characters by 50",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Aquire Sailor Ability 2: If HP is above 99% at the start of the turn, boosts base ATK of all characters by 50" },
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
        potentialNotes: "#{enrage}"
    },
    1423: {//Coliseum T-Bone
        captain: "Boosts ATK of the whole crew by 1.75x and recovers 918 HP at end of each turn,",
        special: "If HP is below 500, reduces damage received by 99% for 1 turn",
        specialName: "For the Sake of Justice",
    },
    1424: {//Coliseum Gin
        captain: "Boosts ATK of Striker characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : higher : 1 + 1.25 * (remaining HP) / (total HP) : 2.25 : 1}",
        special: "Deals 500 fixed damage to all enemies and reduces Special Cooldown of Striker characters by 1 turn.",
        specialName: "General Commander's Fight",
    },
    1425: {//Don Sai
        captain: "Boosts ATK of Fighter and Striker characters by 1.75x",
        special: "Deals 25x character's ATK in QCK damage to one enemy. If a character is locked at the time the special was activated, amplifies the effect of orbs by 1.5x for 3 turns",
        specialName: "Military Leg Heel",
    },
    1426: {//Don Sai
        captain: "Boosts ATK of Fighter and Striker characters by 2x and their HP by 1.25x",
        special: "Deals 25x character's ATK in QCK damage to one enemy. If a character is locked at the time the special was activated, amplifies the effect of orbs by 1.5x for 3 turns",
        specialName: "Military Leg Heel",
    },
    1427: {//Boo
        captain: "Boosts ATK of QCK characters by 2x",
        special: "Deals 15x character's ATK in QCK damage to one enemy that will ignore damage negating abilities and barriers.",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Unblockable Eight Fists",
    },
    1428: {//Jean Ango
        captain: "Boosts amount of Beli received by 1.5x and gives chance of duplicating a drop upon completion of the island",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other addional drop captains, giving you two chances of getting an extra drop.",
        special: "If the enemy is delayed at the time the special is activated, reduces Special Cooldown of all characters by 1 turn and boosts own attack by 1.75x for 1 turn",
        specialName: "Looting the Losers",
    },
    1429: {//Valentines Mansherry
        captain: "Boosts the RCV of Striker and Free Spirit characters by 1.5x",
        special: "Reduces Bind, Despair and Paralysis duration by 3 turns and recovers 2000 HP at the end of each turn for 3 turns",
        specialName: "Boy's Unknown Taste of Hard Work",
    },
    1430: {//Valentines Mansherry
        captain: "Boosts the RCV of Striker and Free Spirit characters by 2x",
        special: "Reduces Bind, Despair and Paralysis duration by 3 turns and recovers 2000 HP at the end of each turn for 3 turns",
        specialName: "Boy's Unknown Taste of Hard Work",
    },
    1431: {//Raid Franky
        captain: "Boosts ATK of all characters by 2x if there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew and boosts their HP by 1.2x if there's a Fighter, Slasher, Shooter, Driven, Free Spirit and Powerhouse character in your crew",
        special: "Deals 100x character's ATK in typeless damage to all enemies, removes enemies' ATK Up, Enrage, End of Turn Damage/Percent Cut and End of Turn Heal Buffs and boosts ATK of all characters by 1.5x for 1 turn",
        specialName: "General Cannon",
    },
    1432: {//Raid Franky
        captain: "Boosts ATK of all characters by 2.5x if there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew and boosts their HP by 1.5x if there's a Fighter, Slasher, Shooter, Driven, Free Spirit and Powerhouse character in your crew",
        special: "Deals 100x character's ATK in typeless damage to all enemies, removes enemies' ATK Up, Enrage, End of Turn Damage/Percent Cut and End of Turn Heal Buffs and boosts ATK of all characters by 1.5x for 1 turn",
        specialName: "General Cannon",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of all characters by 30",
            "level2": "When any other character uses a special, reduces own cooldown by 1 turn",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Pinch Healing" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of all characters by 30" },
            { "description": "Boosts base HP by 120" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire Sailor Ability 2: When any other character uses a special, reduces own cooldown by 1 turn" },
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
    1433: {//Hody Jones
        captain: "Reduces cooldown of Powerhouse specials by 1 turn at the start of the fight, reduces crew's current HP by 10% at the end of each turn, boosts ATK of Powerhouse characters by 3x if there are 6 Powerhouse characters in your crew and boosts HP of Powerhouse characters by up to 2x depending on how many Powerhouse characters are in your crew.",
        captainNotes: "Hody's HP boost is dependent on how many Powerhouse characters are in your crew. With 6 Powerhouse characters, the boost is 2x, with 5 the boost is 1.5x, with 4 the boost is 1.4x, with 3 the boost is 1.3x, with 2 the boost is 1.2x and with 1 the boost is 1.1x.",
        special: [
            {
                "description": "Deals 10x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 1 turn, reduces damage received by 60% for 1 turn",
                "cooldown": [ 12, 7 ],
            },
            {
                "description": "Deals 60x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 2 turns, reduces damage received by 90% for 1 turn",
                "cooldown": [ 22, 17 ],
            },
        ],
        specialNotes: "#{ignoreBarrier}<br>#{stages}",
        specialName: "Water Bullets",
    },
    1434: {//Hody Jones
        captain: "Reduces cooldown of Powerhouse specials by 1 turn at the start of the fight, reduces crew's current HP by 10% at the end of each turn, boosts ATK of Powerhouse characters by 3x if there are 6 Powerhouse characters in your crew and boosts HP of Powerhouse characters by up to 2x depending on how many Powerhouse characters are in your crew.",
        captainNotes: "Hody's HP boost is dependent on how many Powerhouse characters are in your crew. With 6 Powerhouse characters, the boost is 2x, with 5 the boost is 1.5x, with 4 the boost is 1.4x, with 3 the boost is 1.3x, with 2 the boost is 1.2x and with 1 the boost is 1.1x.",
        special: [
            {
                "description": "Deals 10x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 1 turn, reduces damage received by 60% for 1 turn",
                "cooldown": [ 12, 7 ],
            },
            {
                "description": "Deals 60x character's ATK in [INT] damage to one enemy that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 2 turns, reduces damage received by 90% for 1 turn",
                "cooldown": [ 22, 17 ],
            },
        ],
        specialNotes: "#{ignoreBarrier}<br>#{stages}",
        specialName: "Water Bullets",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of Powerhouse characters by 60",
            "level1": "Restores his own special by 2 turns when it is rewinded",
        },
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Aquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK and HP of Powerhouse characters by 60" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 2: Critical Hit" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Aquire Sailor Ability 2: Restores his own special by 2 turns when it is rewinded" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Potential 3: Reduce No Healing duration" },
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
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
        ]
    },
    1435: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 2x and HP of Powerhouse characters by 1.2x",
        special: "Makes Perfects harder to hit for 1 turn, changes [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Powerhouse characters, delays all enemies for 1 turn, recovers 20% of crew's MAX HP.",
        specialName: "Staggering Slash",
        specialNotes: "Decreases timing window to hit a Perfect. (Animation remains the same)",
        sailor: "Boosts base ATK of all characters by 150 if there are 6 Powerhouse characters in your crew",
    },
    1436: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 2.5x and HP of Powerhouse characters by 1.25x",
        special: "Makes Perfects harder to hit for 1 turn, changes [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Powerhouse characters, delays all enemies for 1 turn, recovers 20% of crew's MAX HP.",
        specialName: "Staggering Slash",
        specialNotes: "Decreases timing window to hit a Perfect. (Animation remains the same)",
        sailor: {
            "base": "Boosts base ATK of all characters by 150 if there are 6 Powerhouse characters in your crew",
            "level1": "Reduces Paralysis duration for 3 turns for himself",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Sailor Ability 1: Reduces Paralysis duration for 3 turns for himself" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
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
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turns",
                    "Level 3: Reduces No Healing duration by ? turns",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ]
    },
    1437: {//Ikaros Much
        captain: "Boosts ATK of Powerhouse and Striker characters by 1.3x",
        captainNotes: "The bonus is cumulative. Powerhouse + Striker characters get a 1.69x bonus.",
        special: "Reduce crew's current HP by 50%, amplifies the effect of orbs for Powerhouse characters by 1.75x and boosts ATK against delayed enemies by 1.5x for 1 turn",
        specialName: "Squid Spear",
        sailor: "Makes [STR], [QCK], [DEX] and [INT] orbs \"beneficial\" for this unit if there are 6 Powerhouse characters in your crew",
    },
    1438: {//Ikaros Much
        captain: "Boosts ATK of Powerhouse and Striker characters by 1.6x",
        captainNotes: "The bonus is cumulative. Powerhouse + Striker characters get a 2.56x bonus.",
        special: "Reduce crew's current HP by 50%, amplifies the effect of orbs for Powerhouse characters by 1.75x and boosts ATK against delayed enemies by 1.5x for 1 turn",
        specialName: "Squid Spear",
        sailor: "Makes [STR], [QCK], [DEX] and [INT] orbs \"beneficial\" for this unit if there are 6 Powerhouse characters in your crew",
    },
    1439: {//Daruma
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Powerhouse and Fighter characters by 1.2x",
        special: "Reduces Paralysis and Silence duration by 2 turns, cuts the current HP of one enemy by 10%, boosts ATK of Powerhouse characters by 1.75x for 1 turn",
        specialNotes: "#{silence}",
        specialName: "Fire Daruma Cutter",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
    },
    1440: {//Daruma
        captain: "Reduces cooldown of all specials by 4 turns at the start of the fight, boosts ATK of Powerhouse and Fighter characters by 1.5x",
        special: "Reduces Paralysis and Silence duration by 2 turns, cuts the current HP of one enemy by 10%, boosts ATK of Powerhouse characters by 1.75x for 1 turn",
        specialNotes: "#{silence}",
        specialName: "Fire Daruma Cutter",
        sailor: {
            "base": "Completely resists Silence on this character",
            "level1": "Boosts base ATK, HP and RCV of Powerhouse characters by 20",
        },
        sailorNotes: "#{silence}",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Aquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Powerhouse characters by 20" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
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
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turns",
                    "Level 3: Reduces No Healing duration by ? turns",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ]
    },
    1441: {//Zeo
        captain: "Boosts ATK of [INT] characters by 1.5x and reduces damage received by 10%",
        special: "Makes Perfects easier to hit, locks all orbs and locks the chain multiplier at 2.5x for 1 turn",
        specialNotes: "Increases timing window to hit a Perfect. (Animation remains the same)",
        specialName: "Flail Hidden From God",
        sailor: "Completely resists Blindness if your Captain is a Powerhouse character",
    },
    1442: {//Zeo
        captain: "Boosts ATK of [INT] characters by 2.25x and reduces damage received by 20%",
        special: "Makes Perfects easier to hit, locks all orbs and locks the chain multiplier at 2.5x for 1 turn",
        specialNotes: "Increases timing window to hit a Perfect. (Animation remains the same)",
        specialName: "Flail Hidden From God",
        sailor: {
            "base": "Completely resists Blindness if your Captain is a Powerhouse character",
            "level1": "Makes [TND] orbs \"beneficial\" for Powerhouse characters",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: Makes [TND] orbs \"beneficial\" for Powerhouse characters" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turns",
                    "Level 3: Reduces No Healing duration by ? turns",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1443: {//Dosun
        captain: "Boosts ATK of Powerhouse characters by 2.75x following a chain of Good > Great > Perfect hits",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into [STR], [QCK], [DEX], [PSY] or [INT] orbs, boosts ATK of Powerhouse characters by 1.5x and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Papara Hammer",
        sailor: "Boost HP of all characters by 150 and also ATK of all characters by 50 if there are 6 Powerhouse characters in your crew",
    },
    1444: {//Dosun
        captain: "Boosts ATK of Powerhouse characters by 3.25x following a chain of Good > Great > Perfect hits",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into [STR], [QCK], [DEX], [PSY] or [INT] orbs, boosts ATK of Powerhouse characters by 1.5x and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Papara Hammer",
        sailor: {
            "base": "Boost HP of all characters by 150 and also ATK of all characters by 50 if there are 6 Powerhouse characters in your crew",
            "level1": "Makes [QCK] orbs \"beneficial\" for this unit",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Aquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turns",
                    "Level 3: Reduces No Healing duration by ? turns",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1445: {//Boa Hancock+
        captain: "Boosts ATK of [QCK] and [PSY] characters proportionally to the crew's current HP. If HP is below 50%, Boosts RCV of [QCK] and [PSY] characters by 1.5x.",
        special: "Boosts ATK and RCV of [QCK] and [PSY] characters by 1.75x for 1 turn and delays all enemies for 1 turn. Changes your Captain orb to [RCV]. If HP is above 50%, changes left column orbs into Matching orbs.",
        specialName: "Perfume Femur",
        captainNotes: "#{captainProportional : higher : 2.25 + 0.5 * (remaining HP) / (total HP) : 2.75 : 2.25}",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of [QCK] and [PSY] characters by 30",
            "level2": "Boosts base ATK of [QCK] and [PSY] characters by 75",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Aquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of [QCK] and [PSY] characters by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Aquire Potential 2: [INT] Damage Reduction" },
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
            { "description": "Aquire Sailor Ability 2: Boosts base ATK of [QCK] and [PSY] characters by 75" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Aquire Potential 3: Cooldown Reduction" },
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
                    "Level 4: Reduce damage taken from [INT] characters by 4%",
                    "Level 5: Reduce damage taken from [INT] characters by 5%"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [ 
                    "Level 1: Reduce Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce Special Cooldown by ? turn at the start of the fight",
                    "Level 3: Reduce Special Cooldown by ? turn at the start of the fight",
                    "Level 4: Reduce Special Cooldown by ? turn at the start of the fight",
                    "Level 5: Reduce Special Cooldown by ? turn at the start of the fight"
                ]
            },
        ]
    },
    1446: {//Sogeking 5+
        captain: "Boosts ATK of Shooter characters by 2x and RCV of Shooter characters by 1.25x.",
        special: "Deals random PSY damage to all enemies and delays enemies by 3 turns.",
        specialName: "Green Star: Platanus Shuriken",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Shooter characters by 20",
        },
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
    1447: {//Sanji 5+
        captain: "Boosts ATK of Powerhouse characters by 2.5x and reduces damage take by 10%.",
        special: [
            {
                "description": "Deals 5,000 fixed damage to all enemies and boosts own ATK by 1.2x for 1 turn.",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Deals 50,000 fixed damage to all enemies and boosts own ATK by 1.5x for 1 turn.",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Grill Shot",
        sailor: {
            "base": "None",
            "level1": "Makes RCV orbs \"beneficial\" for all characters",
            "level2": "Boosts base ATK, HP and RCV of all characters by 40",
        },
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
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    1448: {//Chopper 5+
        captain: "Boosts ATK of Fighter characters by 2.5x.",
        special: "Deals PSY damage according to HP. For Fighter characters, Changes [BLOCK] orbs into matching orbs.",
        specialNotes: "The exact damage is proportional to the crew's remaining HP and is higher the higher the HP is. The formula used is ???? * (current HP) / (total HP)",
        specialName: "Weight Gain: Heavy Gong",
        sailor: {
            "base": "None",
            "level1": "Makes [TND] orbs \"beneficial\" for this unit",
            "level2": "Boosts base ATK, HP and RCV of all characters by 30",
        },
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire Sailor Ability 1: Makes [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 100" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of all characters by 30" },
            { "description": "Aquire Potential 2: Pinch Healing" },
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
                    "Level 1: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    1449: {//Violet
        captain: "Boosts ATK of Cerebral characters by 1.5x. Heals for .3x character's RCV at the end of the turn each time you hit a Great.",
        special: "Reduces the defense of all enemies by 50% for 1 turn and if HP is below 50%, randomly changes all orbs to either [RCV] or [TND] orbs",
        specialName: "Clairvoyance",
    },
    1450: {//Violet
        captain: "Boosts ATK of Cerebral characters by 1.75x. Heals for .5x character's RCV at the end of the turn each time you hit a Great.",
        special: "Reduces the defense of all enemies by 50% for 1 turn and if HP is below 50%, randomly changes all orbs to either [RCV] or [TND] orbs",
        specialName: "Clairvoyance",
    },
    1451: {//Moustache Sanji
        captain: "Boosts ATK of [DEX] characters by 2.25x if they have a matching orb, by 1.5x otherwise. Slightly boosts chances of getting [DEX] orbs",
        special: "Deals 15x character's ATK in DEX damage to one enemy and boosts chances of getting DEX orbs for 2 turns",
        specialName: "Diable Jambe: Love Shot",
    },
    1452: {//Moustache Sanji
        captain: "Boosts ATK of [DEX] characters by 2.5x if they have a matching orb, by 2x otherwise. Slightly boosts chances of getting [DEX] orbs",
        special: "Deals 15x character's ATK in DEX damage to one enemy and boosts chances of getting DEX orbs for 2 turns",
        specialName: "Diable Jambe: Love Shot",
    },
    1453: {//Valentines Margeurite
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 1.5x",
        special: "Changes all orbs depending on the current HP",
        specialNotes: "<br> HP>70%: Top row to [QCK], middle row to [STR] <br> HP<30%: Top row to [RCV], middle row to [QCK], bottom row to [STR]",
        specialName: "Doki Doki Heart",
    },
    1454: {//Valentines Margeurite
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x and their RCV by 1.5x",
        special: "Changes all orbs depending on the current HP",
        specialNotes: "<br> HP>70%: Top row to [QCK], middle row to [DEX], bottom row to [STR] <br> HP<30%: Top row to [RCV], middle row to [QCK], bottom row to [STR]",
        specialName: "Doki Doki Heart",
    },
    1455: {//Coliseum Don Chinjao
        captain: "Boosts ATK of Driven characters by 2.5x until the first hit other than Perfect and recovers 120 HP at end of each turn",
        special: [
            {
                "description": "Cuts the current HP of one enemy by 20%, reduces damage received by 50% for 1 turn",
                "cooldown": [ 25, 10 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 25%, reduces damage received by 70% for 1 turn",
                "cooldown": [ 30, 15 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Legend told to the Grandchild",
    },
    1456: {//Coliseum Don Chinjao
        captain: "Boosts ATK of Powerhouse characters by 2.75x until the first hit other than Perfect and recovers 120 HP at end of each turn",
        special: [
            {
                "description": "Cuts the current HP of one enemy by 20%, reduces damage received by 50% for 1 turn",
                "cooldown": [ 25, 10 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 25%, reduces damage received by 70% for 1 turn",
                "cooldown": [ 30, 15 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Legend told to the Grandchild",
    },
    1457: {//Coliseum Kuro
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [QCK] and [INT] characters by 1.75x",
        special: "Reduces Bind and Despair duration by 2 turns, for Slasher and Cerebral characters, randomizes non-matching orbs and changes own orb into [INT]",
        specialName: "Pussyfoot Maneuver",
    },
    1458: {//Coliseum Kuro
        captain: "Reduces cooldown of all specials by 2 turn at the start of the fight, boosts ATK of [QCK] and [INT] characters by 2x",
        special: "Reduces Bind and Despair duration by 2 turns, for Slasher and Cerebral characters, randomizes non-matching orbs and changes own orb into [INT]",
        specialName: "Pussyfoot Maneuver",
    },
    1459: {//Coliseum Miss Valentine
        captain: "Boosts ATK by 1.75x following a chain of Good > Good > Great > Perfect hits",
        special: "Binds self for 2 turns, makes [BOMB] orbs \"beneficial\" and boosts ATK against enemies with reduced defense by 1.5x for 1 turn.",
        specialName: "Crescendo Stone",
    },
    1460: {//Coliseum Miss Valentine
        captain: "Boosts ATK by 2.14x following a chain of Good > Good > Great > Perfect hits",
        special: "Binds self for 2 turns, makes [BOMB] orbs \"beneficial\" and boosts ATK against enemies with reduced defense by 1.5x for 1 turn.",
        specialName: "Crescendo Stone",
    },
    1461: {//Snow Zoro
        captain: "Boosts ATK of [QCK] characters by 2x at the start of the chain, by 2.6x after the 3rd Perfect in a row.",
        special: "Deals 11x character's ATK in [QCK] damage to one enemy, boosts ATK of [QCK] characters by 1.5x for 1 turn",
        specialName: "Demoltion: Ice Crush",
    },
    1462: {//White Day Luffy
        captain: "Boosts chain multiplier by 2x",
        special: "Reduces crew's current HP by 50%, cuts the current HP of each enemy by 20% and makes [PSY] and [STR] orbs \"beneficial\" to Fighter characters for 1 turn",
        sailor: "Reduces Paralysis for 2 turns for himself",
        specialName: "Gum-Gum Gigant Axe - Sweets",
    },
    1463: {//White Day Luffy
        captain: "Boosts chain multiplier by 2.5x, recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Reduces crew's current HP by 50%, cuts the current HP of each enemy by 20% and makes [PSY] and [STR] orbs \"beneficial\" to Fighter characters for 1 turn",
        sailor: "Reduces Paralysis for 2 turns for himself",
        specialName: "Gum-Gum Gigant Axe - Sweets",
    },
    1464: {//White Day Chopper
        captain: "Protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        special: "Recovers 6x character's RCV in HP and reduces Paralysis duration by 2 turns",
        sailor: "Boosts amount healed from [RCV] orbs by 100 each",
        specialName: "Devoted Healing - \"Instant Recovery\"",
    },
    1465: {//White Day Chopper
        captain: "Boosts ATK and RCV of all characters by 1.25x, protects from defeat as long as HP is above 50%",
        captainNotes: "#{zombie}",
        special: "Recovers 6x character's RCV in HP and reduces Paralysis duration by 2 turns",
        sailor: "Boosts amount healed from [RCV] orbs by 100 each",
        specialName: "Devoted Healing - \"Instant Recovery\"",
    },
    1466: {//White Day Cavendish
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2x",
        special: "Reduces the defense of all enemies by 100% for 1 turn and changes own orb into [PSY] and friend captain's orb into [STR]",
        specialName: "Rosy Pleasure",
    },
    1467: {//White Day Cavendish
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2.25x and their RCV by 1.3x",
        special: "Reduces the defense of all enemies by 100% for 1 turn and changes own orb into [PSY] and friend captain's orb into [STR]",
        specialName: "Rosy Pleasure",
    },
    1468: {//Fortnight Sentomaru 
        captain: "Boosts ATK of [STR] characters by 1.75x and the HP of Powerhouse characters by 1.2x",
        special: "Delays all enemies for 1 turn. Changes own orb into Matching orb",
        specialName: "Warning of the New World",
    },
    1469: {//Fortnight Sentomaru Evolved
        captain: "Boosts ATK of [STR] characters by 2x and the HP of Powerhouse characters by 1.25x",
        special: "Delays all enemies for 1 turn. Changes own orb into Matching orb",
        specialName: "Warning of the New World",
    },
    1470: {//Lip Service Doughty
        captain: "Boosts ATK of Slasher and Powerhouse characters by 1.5x, but boost his OWN ATK by 3x",
        captainNotes: "Captain ability does not stack with itself (Will not boost another Doughty by 3x)",
        special: "Deals 8x character's ATK as [STR] damage to one enemy. Changes captain orb into [RCV]",
        specialName: "Meat Grinder Blade",
    },
    1471: {//Albion
        captain: "Boosts ATK of Slasher and Driven characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : 1 + 1 * (1 - (remaining HP) / (total HP)) : 1 : 2}",
        special: "Reduces crew's HP by 90%, deals 1x the removed HP as damage to all enemies.",
        specialName: "Deep Claw Stab",
    },
    1472: {//Shirahoshi
        captain: "Boosts ATK of all characters by 2.25x, but boosts her OWN attack by 1.125x, recovers 5x character's RCV in HP at the end of each turn and if you don't attack with her, reduces damage received by 10% for that turn.",
        special: [
            {
                "description": "Changes adjacent orbs, including [BLOCK] orbs, into [RAINBOW] orbs, recovers 9x character's RCV in HP.",
                "cooldown": [ 13, 9 ],
            },
            {
                "description": "Changes all orbs, including [BLOCK] orbs, into [RAINBOW] orbs, recovers 100x character's RCV in HP.",
                "cooldown": [ 22, 18 ],
            },
        ],
        specialNotes: "Rainbow orbs are the beneficial form of [BLOCK] orbs. They can not be shuffled by you or your opponent. They count as beneficial orbs to any character. They do not count as STR orbs for Sakazuki but do act like Matching orbs for Black Clad Ace or Fujitora captain abilities.<br>#{stages}",
        sailor: "Changes all orbs into [RAINBOW] orbs at the start of the fight.",
        specialName: "Tears of Courage",
    },
    1473: {//Shirahoshi
        captain: "Boosts ATK of all characters by 2.25x, but boosts her OWN attack by 1.125x, recovers 5x character's RCV in HP at the end of each turn and if you don't attack with her, reduces damage received by 10% for that turn.",
        special: [
            {
                "description": "Changes adjacent orbs, including [BLOCK] orbs into [RAINBOW] orbs, recovers 9x character's RCV in HP.",
                "cooldown": [ 13, 9 ],
            },
            {
                "description": "Changes all orbs, including [BLOCK] orbs into [RAINBOW] orbs, recovers 100x character's RCV in HP.",
                "cooldown": [ 22, 18 ],
            },
        ],
        specialNotes: "Rainbow orbs are the beneficial form of [BLOCK] orbs. They can not be shuffled or swapped by you or your opponent. They count as beneficial orbs to any character. They do not count as STR orbs for Sakazuki but do act like Matching orbs for Black Clad Ace or Fujitora captain abilities.<br>#{stages}",
        specialName: "Tears of Courage",
        sailor: {
            "base": "Changes all orbs into [RAINBOW] orbs at the start of the fight.",
            "level1": "Boosts amount healed from [RCV] orbs by 150 each",
        },
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Aquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 45" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Boosts amount healed from [RCV] orbs by 150 each" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Aquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[INT] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [INT] characters by 2%",
                    "Level 2: Reduce damage taken from [INT] characters by 3%",
                    "Level 3: Reduce damage taken from [INT] characters by 4%",
                    "Level 4: Reduce damage taken from [INT] characters by 5%",
                    "Level 5: Reduce damage taken from [INT] characters by 7%"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turn",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
        ]
    },
    1474: {//King Neptune
        captain: "Boosts ATK of all characters by 1.5x and EXP gained by 1.5x",
        special: "Locks all orbs for 1 turn. If the HP of the enemy with the highest HP is above 50%, cuts the current HP of all enemies by 20%, otherwise, deals 140x character's ATK in typeless damage to all enemies.",
        sailor: "Makes [INT], [PSY] and [TND] orbs \"beneficial\" for this unit",
        specialName: "Merman Gujutsu - Ultramarine",
    },
    1475: {//King Neptune
        captain: "Boosts ATK of all characters by 2.25x and EXP gained by 1.5x",
        captainNotes: "EXP boost does not take effect if he becomes your capatin in the middle of the adventure.",
        special: "Locks all orbs for 1 turn. If the HP of the enemy with the highest HP is above 50%, cuts the current HP of all enemies by 20%, otherwise, deals 140x character's ATK in typeless damage to all enemies.",
        sailor: "Makes [INT], [PSY] and [TND] orbs \"beneficial\" for this unit",
        specialName: "Merman Gujutsu - Ultramarine",
    },
    1476: {//Fukaboshi
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Delays all enemies by 1 turn and boosts ATK of Striker and Powerhouse characters by 1.75x for 1 turn",
        sailor: "Boosts base HP, RCV and ATK of all characters by 50",
        specialName: "Merman Gujutsu - Spear of the Ages",
    },
    1477: {//Fukaboshi
        captain: "Boosts ATK of Striker characters by 2.5x and boosts HP of Powerhouse characters by 1.25x",
        captainNotes: "This effect does stack for characters that have both classes, so Striker/Powerhouse characters will have 2.5x ATK and 1.25x HP",
        special: "Delays all enemies by 1 turn and boosts ATK of Striker and Powerhouse characters by 1.75x for 1 turn",
        sailor: {
            "base": "Boosts base HP, RCV and ATK of all characters by 50",
            "level1": "Makes [QCK] orbs \"beneficial\" for this unit",
        },
        specialName: "Merman Gujutsu - Spear of the Ages",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 2: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Aquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 50" },
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
    1478: {//Caribou
        captain: "Boosts ATK of all characters by 1.5x after the 11th hit in the chain, by 1.75x after the 22nd hit, by 2x after the 33th hit, by 3x after the 44th hit",
        special: "Deals 15 hits of 12x character's ATK in typeless damage to random enemies and boosts ATK of [QCK] and [INT] characters by 2x for 1 turn",
        specialNotes: "#{randomHits : 15}",
        sailor: "Completely resists Paralysis on this character",
        specialName: "Swamp-Swamp Gatling Gun",
    },
    1479: {//Caribou
        captain: "Boosts ATK of all characters by 1.75x after the 11th hit in the chain, by 2.5x after the 22nd hit, by 2.75x after the 33th hit, by 3.5x after the 44th hit",
        special: "Deals 15 hits of 12x character's ATK in typeless damage to random enemies and boosts ATK of [QCK] and [INT] characters by 2x for 1 turn",
        specialNotes: "#{randomHits : 15}",
        sailor: {
            "base": "Completely resists Paralysis on this character",
            "level1": "Makes [RCV] and [TND] orbs \"beneficial\" for this unit",
        },
        specialName: "Swamp-Swamp Gatling Gun",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Aquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Aquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Aquire 1 additional Socket slot" },
            { "description": "Aquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
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
    1480: {//Vander Decken IX
        captain: "Boosts ATK by 2.5x after scoring 2 Perfects in a row",
        special: "Deals 200,000 fixed damage to one enemy that will ignore damage negating abilities and barriers, reduces Bind and Silence duration by 2 turns",
        specialNotes: "#{ignoreBarrier}<br>#{silence}",
        sailor: "Restores his own special by 1 turn when it is rewinded and reduces Silence for 3 turns for himself",
        sailorNotes: "#{rewind : 1}<br>#{silence}",
        specialName: "Stalking Rose Axe",
    },
    1481: {//Vander Decken IX
        captain: "Boosts ATK by 2.5x after the 2nd Perfect in a row and by 3.5x after the 5th Perfect in a row.",
        special: "Deals 200,000 fixed damage to one enemy that will ignore damage negating abilities and barriers, reduces Bind and Silence duration by 2 turns",
        specialNotes: "#{ignoreBarrier}<br>#{silence}",
        sailor: "Restores his own special by 1 turn when it is rewinded and reduces Silence for 3 turns for himself",
        sailorNotes: "#{rewind : 1}<br>#{silence}",
        specialName: "Stalking Rose Axe",
    },
    1482: {//Madame Shyarly
        captain: "Boosts ATK of INT characters by 2x and their RCV by 1.2x",
        special: "Randomizes all non-matching orbs, switches orbs between slots twice and if enemies have a barrier at the time the special was activated, boosts ATK of all characters by 1.75x, 1.25x otherwise.",
        sailor: "[INT] characters will deal an extra 1.1x to non [PSY] enemies",
        specialName: "Foretold Catastrophe",
    },
    1483: {//Madame Shyarly
        captain: "Boosts ATK of INT characters by 2.5x and their RCV by 1.2x",
        special: "Randomizes all non-matching orbs, switches orbs between slots twice and if enemies have a barrier at the time the special was activated, boosts ATK of all characters by 1.75x, 1.25x otherwise.",
        sailor: "[INT] characters will deal an extra 1.1x to non [PSY] enemies",
        specialName: "Foretold Catastrophe",
    },
    1484: {//Wild Sanji
        captain: "Boosts ATK by 2.5x after scoring 3 Perfects in a row",
        special: "Locks the chain multiplier at 2.5x for 1 turn, reduces Bind duration by 5 turns",
        sailor: "Changes all orbs into [RCV] orbs at the start of the fight.",
        specialName: "Wild Shot",
    },
    1485: {//Wild Sanji
        captain: "Boosts HP and RCV of all characters by 1.2x and boosts ATK by 3.25x after scoring 3 Perfects in a row",
        special: "Locks the chain multiplier at 2.5x for 1 turn, reduces Bind duration by 5 turns",
        sailor: "Changes all orbs into [RCV] orbs at the start of the fight.",
        specialName: "Wild Shot",
    },
    1486: {//Coliseum Ideo
        captain: "Boosts ATK of Fighter characters by 2.5x if they have a matching orb.",
        special: "Increases damage received by 2x for 2 turns, deals 15x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Fighter characters by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        specialName: "Destruction Cannon: Hidden Bullet",
    },
    1487: {//Coliseum Ideo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Fighter characters by 3x if they have a matching orb.",
        special: "Increases damage received by 2x for 2 turns, deals 15x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Fighter characters by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        specialName: "Destruction Cannon: Hidden Bullet",
    },
    1488: {//Coliseum Don Krieg
        captain: "Boosts ATK of Driven characters by 1.5x, reduces damage received by 20%",
        special: "Deals 20x character's ATK in STR damage to one enemy and removes any Orb Rate Up and Orb Rate Down Buffs",
        specialName: "Great Battle Spear",
    },
    1489: {//Coliseum Don Krieg
        captain: "Boosts ATK of Driven characters by 2x, reduces damage received by 20%",
        special: "Deals 20x character's ATK in STR damage to one enemy and removes any Orb Rate Up and Orb Rate Down Buffs",
        specialName: "Great Battle Spear",
    },
    1490: {//Coliseum Mr. 5
        captain: "Boosts ATK by 1.75x following a chain of Good > Good > Great hits",
        special: "Changes orbs on the top row to [BOMB], reduces Bind duration by 2 turns and reduces the defense of all enemies by 50% for one turn.",
        specialName: "Explosion Blocking Escape",
    },
    1491: {//Coliseum Mr. 5
        captain: "Boosts ATK by 2x following a chain of Good > Good > Great hits",
        special: "Changes orbs on the top row to [BOMB], reduces Bind duration by 2 turns and reduces the defense of all enemies by 50% for one turn.",
        specialName: "Explosion Blocking Escape",
    },
    1492: {//6+ Sabo
        captain: "Boosts HP and RCV of all characters by 1.2x, boosts ATK of Free Spirit characters by 2.75x",
        captainNotes: "HP and RCV boost are not known yet, but are assumed to be for anyone and is a 1.2x boost for both in the calculator.",
        special: [
            {
                "description": "Boosts ATK of Free Spirit characters by 1.5x for 1 turn. If during that turn you score 5 Perfect hits, boosts ATK of Free Spirit characters by 2x in the following turn.",
                "cooldown": [ 18, 12 ],
            },
            {
                "description": "Boosts ATK of Free Spirit characters by 1.75x for 1 turn. If during that turn you score 4 Perfect hits, boosts ATK of Free Spirit characters by 2x in the following turn.",
                "cooldown": [ 23, 17 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Reborn - Fire",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Free Spirit characters by 50",
            "level2": "Makes INT orbs \"beneficial\" for Free Spirit characters",
        },
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Aquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 25" },
            { "description": "Aquire Sailor Ability 1: Boosts base ATK, HP and RCV of Free Spirit characters by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by " },
            { "description": "Boosts base RCV by 10" },
            { "description": "Aquire Potential 2: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 90" },
            { "description": "Aquire Sailor Ability 2: Makes INT orbs \"beneficial\" for Free Spirit characters" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Aquire Potential 3: Pinch Healing" },
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
                "Name": "[INT] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [INT] characters by 2%",
                    "Level 2: Reduce damage taken from [INT] characters by ?%",
                    "Level 3: Reduce damage taken from [INT] characters by ?%",
                    "Level 4: Reduce damage taken from [INT] characters by ?%",
                    "Level 5: Reduce damage taken from [INT] characters by ?%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 40% at the start of the turn, heals for .75x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    1493: {//STR Fishman Outlaw
        captain: "Boosts ATK of [STR] characters by 1.5x",
        special: "Deals 5 hits of random typeless damage to random enemies",
        specialNotes: "#{randomHits : 5}",
        specialName: "Random Light Blows",
    },
    1494: {//QCK Fishman Outlaw
        captain: "Boosts ATK of [QCK] characters by 1.5x",
        special: "Locks captain's orb for 1 turn",
        specialName: "Captain Slot Hold: Light",
    },
    1495: {//DEX Fishman Outlaw
        captain: "Boosts ATK of [DEX] characters by 1.5x",
        special: "Reduces Silence duration by 1 turn",
        specialNotes: "#{silence}",
        specialName: "Special Seal Recovery: Light",
    },
    1496: {//INT Fishman Outlaw
        captain: "Boosts ATK of Powerhouse characters by 1.5x",
        special: "Reduces Despair duration by 2 turns",
        specialName: "Captain Soul Recovery",
    },
    1497: {//PSY Fishman Outlaw
        captain: "Boosts ATK of Shooter characters by 1.5x",
        special: "Boosts own ATK by 1.5x for 1 turn",
        specialName: "Light Attack Boost",
    },
    1498: {//STR Fishman Guard
        captain: "Boosts ATK, HP and RCV of [STR] characters by 1.2x",
        special: "Changes Captain's orb into [STR]",
        specialName: "Captain Slot Change - [STR]",
    },
    1499: {//QCK Fishman Guard
        captain: "Boosts ATK, HP and RCV of [QCK] characters by 1.2x",
        special: "Changes Captain's [BLOCK] orbs into Matching orbs",
        specialName: "Captain [BLOCK] Slot Change - Matching",
    },
    1500: {//DEX Fishman Guard
        captain: "Boosts ATK, HP and RCV of [DEX] characters by 1.2x",
        special: "Recovers 2000 HP",
        specialName: "First Aid",
    },
    
};

module.exports.db3 = db3;
