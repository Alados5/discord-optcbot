//Copied from the optc-db.github.io database files. All credit goes to them.

var db6 = {
    2501: {//Koshiro
        captain: "Boosts ATK and RCV of Slasher characters by 1.75x",
        special: "Reduces Special Cooldown of characters in the top row by 1 turn and reduces Bind and Despair duration by 3 turns.",
        specialName: "Slicing Straw Paper in the Air",
        support: [
            {
                "Characters": "Zoro",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, reduces enemies' Increased Defense and Resilience Buffs duration by 1 turn and adds 0.1x to Chain multiplier for 1 turn.",
                    "Level 2: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, reduces enemies' Increased Defense and Resilience Buffs duration by 1 turn and adds 0.2x to Chain multiplier for 1 turn.",
                    "Level 3: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, reduces enemies' Increased Defense and Resilience Buffs duration by 2 turns and adds 0.3x to Chain multiplier for 1 turn.",
                    "Level 4: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, reduces enemies' Increased Defense and Resilience Buffs duration by 3 turns and adds 0.5x to Chain multiplier for 1 turn.",
                    "Level 5: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, reduces enemies' Increased Defense and Resilience Buffs duration by 4 turns and adds 0.7x to Chain multiplier for 1 turn."
                ]
            }
        ]
    },
    2502: {//Streusen
        captain: "Boosts ATK of Slasher and Driven characters by 2x and their HP by 1.2x",
        special: "Randomizes all non-Matching orbs and recovers 20% of crew's MAX HP.",
        specialName: "Blessed Wedding Cake",
        support: [
            {
                "Characters": "Charlotte Linlin",
                "description": [
                    "Level 1: Once per an adventure, when the supported character their special, reduces crew's Increase Damage Taken duration by 1 turn and recovers 500 HP at the end of the turn for 2 turns.",
                    "Level 2: Once per an adventure, when the supported character their special, reduces crew's Increase Damage Taken duration by 2 turns and recovers 1,000 HP at the end of the turn for 2 turns.",
                    "Level 3: Once per an adventure, when the supported character their special, reduces crew's Increase Damage Taken duration by 3 turns and recovers 2,000 HP at the end of the turn for 2 turns.",
                    "Level 4: Once per an adventure, when the supported character their special, reduces crew's Increase Damage Taken duration by 4 turns and recovers 3,000 HP at the end of the turn for 3 turns.",
                    "Level 5: Once per an adventure, when the supported character their special, reduces crew's Increase Damage Taken duration by 5 turns and recovers 4,500 HP at the end of the turn for 3 turns."
                ]
            }
        ]
    },
    2503: {//Capone
        captain: "Boosts ATK of Shooter characters by 2.5x if HP is above 50% at the start of the turn, 2x otherwise and if you don't attack with him, reduces damage received by 20% for that turn.",
        special: "If there are 6 Shooter characters in your crew, boosts ATK of Shooter characters by 2x for 1 turn. If HP is below 50% at the time the special is activated, Recovers missing HP to 51% MAX HP.",
        specialName: "Manipulating the Castle's Interior",
        sailor: "Boosts base ATK, HP and RCV of Shooter characters by 30",
    },
    2504: {//Capone
        captain: "Boosts ATK of Shooter characters by 3x if HP is above 50% at the start of the turn, 2.5x otherwise and if you don't attack with him, reduces damage received by 20% for that turn.",
        special: "If there are 6 Shooter characters in your crew, boosts ATK of Shooter characters by 2x for 1 turn. If HP is below 50% at the time the special is activated, Recovers missing HP to 51% MAX HP.",
        specialName: "Manipulating the Castle's Interior",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of Shooter characters by 30",
            "level1": "When HP is above 50% at the start of the turn, boosts base ATK of Shooter characters by 100",
        },
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: When HP is above 50% at the start of the turn, boosts base ATK of Shooter characters by 100" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ],
        support: [
            {
                "Characters": "Chiffon, Vito and Goti",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2505: {//Fujitora
        captain: "Boosts ATK of Slasher characters by 3.25x at the start of the chain and their HP by 1.2x and boosts ATK of Slasher characters by 4.225x following a chain of Good > Great > PERFECT hits",
        special: "Deals 10 hits of 30x character's ATK in Typeless damage to random enemies and delays all enemies for 1 turn. If this character is your Captain or Friend/Guest Captain, changes all orbs on all characters into Matching orbs and locks the chain multiplier at 2.75x for 2 turns.",
        specialName: "Rain of Debris with No Escape",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Slasher characters by 40",
            "level2": "Makes [STR], [QCK], [DEX] and [PSY] orbs beneficial for this character if your Captain is a Slasher character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base HP by 25" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Slasher characters by 40" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 2: Pinch Healing" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 2: Makes [STR], [QCK], [DEX] and [PSY] orbs beneficial for this character if your Captain is a Slasher character" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
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
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, recovers 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, recovers 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, recovers 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, recovers 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 8% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Slasher Characters",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, randomizes suppoted character's orb.",
                    "Level 2: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, randomizes suppoted character's orb.",
                    "Level 3: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, changes Badly Matching orb on the supported character into Matching orb.",
                    "Level 4: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, changes Badly Matching orb on the supported character into Matching orb.",
                    "Level 5: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, changes Badly Matching orbs on Slasher characters into Matching orbs."
                ]
            }
        ]
    },
    2506: {//A O
        captain: "Boosts ATK of [PSY] characters by 1.5x",
        special: "Changes [G], [BOMB] and [TND] orbs into [STR], [DEX], [QCK], [PSY] and [INT] orbs, reduces enemy Barrier duration by 1 turn and adds 0.5x to Chain multiplier for 1 turn.",
        specialName: "A.O. Slash",
        limit: [
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 8 turns on this character"
                ]
            },
        ],
    },
    2507: {//Kizaru
        captain: "Boosts ATK of Shooter characters by 1.75x",
        special: "Reduces Bind duration by 3 turns, reduces crew's ATK DOWN duration by 4 turns. If you are on a Treasure Map, amplifies the effects of orbs for [PSY] and [INT] characters depending on your Treasure Map Level for 1 turn.",
        specialName: "Radiant Light Arrow",
        specialNotes: "Level 1-10: 1.5x orb boost<br\>Level 11-20: 1.75x orb boost<br\>Level 21+: 2x orb boost",
        limit: [
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Acquire Potential 1: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 40% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 40% at the start of the turn, recovers 0.75x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 40% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 50% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, recovers 1.25x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
    },
    2508: {//Marco
        captain: "Boosts ATK of [PSY] and [INT] characters by 2.5x and their HP by 1.2x. If you use \"Phoenix Claw\" on this Marco boosts ATK of [PSY] and [INT] characters by 3.5x instead for 3 turns.",
        special: "Deals 50x character's ATK in Typeless damage to one enemy, reduces Despair duration by 3 turns, reduces enemies' Threshold Damage Reduction duration by 4 turns. If this character is your Captain or Friend/Guest Captain, changes [STR], [DEX], [QCK], [PSY] and [INT] orbs on all characters into Matching orbs and if you are on a Treasure Map, boosts ATK of [PSY] and [INT] characters depending on your Treasure Map Level for 1 turn.",
        specialName: "Phoenix Claw",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
        limit: [
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Acquire Potential 1: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 50% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 60% chance to deal 4% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 8% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 100% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ],
    },
    2509: {//TM Weevil
        captain: "Boosts ATK of Slasher characters proportionally to the crew's current HP, by 1.5x at max.",
        captainNotes: "#{captainProportional : higher : .5 + 1 * (remaining HP) / (total HP)) : 1.5 : 1}",//check this
        special: "Reduces ATK DOWN duration by 20 turns and adds 300x character's ATK as Additional Typeless Damage to own's attacks for 2 turns. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, boosts ATK of all characters by 2x.",
        specialName: "I Absolutely Won't Forgive Him",
    },
    2510: {//TM Weevil
        captain: {
            "base": "Boosts ATK of Slasher characters proportionally to the crew's current HP, by ?x at max and their HP by ?x.",
            "level1": "Not Translated",
            "level2": "Not Translated",
            "level3": "Not Translated",
            "level4": "Not Translated",
            "level5": "Not Translated",
            "level6": "Boosts ATK of Slasher characters proportionally to the crew's current HP, by 3.25x at max and their HP by 1.35x.",
        },
        captainNotes: "#{captainProportional : higher : 2.25 + 1 * (remaining HP) / (total HP)) : 3.25 : 1}",//check this
        special: "Reduces ATK DOWN duration by 20 turns and adds 300x character's ATK as Additional Typeless Damage to own's attacks for 2 turns. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, boosts ATK of all characters by 2x.",
        specialName: "I Absolutely Won't Forgive Him",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of all characters by 50",
            "level2": "Boosts base ATK of all characters by 50",
        },
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of all characters by 50" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of all characters by 50" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Slasher characters proportionally to the crew's current HP, by 3.25x at max and their HP by 1.35x." },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 80% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turn",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 8 turns"
                ]
            },
        ],
        support: [
            {
                "Characters": "Slasher Characters",
                "description": [
                    "Level 1: Once per adventure, when you reach the final stage, adds 20x supported character's ATK as Additional Damage to the supported character's attacks for 1 turn",
                    "Level 2: Once per adventure, when you reach the final stage, adds 40x supported character's ATK as Additional Damage to the supported character's attacks for 1 turn",
                    "Level 3: Once per adventure, when you reach the final stage, adds 60x supported character's ATK as Additional Damage to the supported character's attacks for 1 turn",
                    "Level 4: Once per adventure, when you reach the final stage, adds 80x supported character's ATK as Additional Damage to the supported character's attacks for 1 turn",
                    "Level 5: Once per adventure, when you reach the final stage, adds 120x supported character's ATK as Additional Damage to the supported character's attacks for 1 turn"
                ]
            }
        ]
    },
    2511: {// Coliseum Moria EX
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Changes own orb, including [BLOCK] orbs, into [STR], recovers 5% of crew's MAX HP and deals 300,000 Fixed damage to one enemy",
        specialName: "Horn Blade Shadow [EX]"
    },
    2512: {// Coliseum Moria EX
        captain: "Boosts ATK of Slasher characters by 2.25x, recovers 3x character's RCV in HP at the end of each turn",
        special: "Changes own orb, including [BLOCK] orbs, into [STR], recovers 5% of crew's MAX HP and deals 300,000 Fixed damage to one enemy",
        specialName: "Horn Blade Shadow [EX]",
        sailor: {
            "base": "None",
            "level1": "If your Captain is a Slasher character, boosts own base ATK by 100",
            "level2": "Makes [DEX] and [QCK] orbs beneficial for this character",
        },
        specialNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Acquire Sailor Ability 1: If your Captain is a Slasher character, boosts own base ATK by 100" },
            { "description": "Acquire Potential 1: No Healing duration" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] and [QCK] orbs beneficial for this character" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 2: Double Special Activation" },
        ],
        potential: [
            {
                "Name": "No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turn",
                    "Level 4: Reduces No Healing duration by 4 turn",
                    "Level 5: Reduces No Healing duration by 5 turn"
                ]
            },
            {
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by 1 turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by 2 turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by 5 turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by 6 turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
                ]
            },
        ],
        support: [
            {
                "Characters": "Perona, Oars and Ryuma",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2513: {//Oars EX
        captain: "Boosts ATK of Powerhouse characters by 3x after scoring 3 PERFECTs in a row",
        specialName: "Oars Ball [EX]",
        special: "Reduces damage received by 50% for 1 turn, deals 30x character's ATK in [DEX] damage to all enemies",
        support: [
            {
                "Characters": "Moria",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses a Healing special, reduces enemies' Threshold Damage Reduction duration by 1 turn.",
                    "Level 2: Once per an adventure, when the supported character uses a Healing special, reduces enemies' Threshold Damage Reduction duration by 1 turn.",
                    "Level 3: Once per an adventure, when the supported character uses a Healing special, reduces enemies' Threshold Damage Reduction and Barrier duration by 1 turn.",
                    "Level 4: Once per an adventure, when the supported character uses a Healing special, reduces enemies' Threshold Damage Reduction and Barrier duration by 1 turn.",
                    "Level 5: Once per an adventure, when the supported character uses a Healing special, reduces enemies' Threshold Damage Reduction and Barrier duration by 2 turns."
                ]
            }
        ]
    },
    2514: {//Urouge
        captain: "Boosts ATK of Fighter characters by ?x and reduces damage received by ?%",
        special: "Deals 150x character's ATK in [PSY] damage to one enemy, reduces Paralysis and Burn duration by 3 turns and reduces damage received by 80% for 1 turn. If during that turn you score 4 PERFECT hits, amplifies the effect of orbs of Fighter characters by 2.25x for 1 turn in the following turn.",
        specialName: "Karmic Punishment and Prayers",
        sailor: "If your Captain is a Fighter character, reduces Blindness duration by 3 turns",
        sailorNotes: "#{beneficial}",
    },
    2515: {//Urouge
        captain: "Boosts ATK of Fighter characters by 3x and reduces damage received by 5%",
        special: "Deals 150x character's ATK in [PSY] damage to one enemy, reduces Paralysis and Burn duration by 3 turns and reduces damage received by 80% for 1 turn. If during that turn you score 4 PERFECT hits, amplifies the effect of orbs of Fighter characters by 2.25x for 1 turn in the following turn.",
        specialName: "Karmic Punishment and Prayers",
        sailor: {
            "base": "If your Captain is a Fighter character, reduces Blindness duration by 3 turns",
            "level1": "Makes [PSY] orbs beneficial for Fighter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs beneficial for Fighter characters" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 8 turns on this character"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "Fighter Characters",
                "description": [
                    "Level 1: Adds 6% of this character's base HP to the supported character's base HP.",
                    "Level 2: Adds 8% of this character's base HP to the supported character's base HP.",
                    "Level 3: Adds 10% of this character's base HP to the supported character's base HP.",
                    "Level 4: Adds 12% of this character's base HP to the supported character's base HP.",
                    "Level 5: Adds 15% of this character's base HP to the supported character's base HP."
                ]
            }
        ]
    },
    2516: {//Magellan&Hannyabal
        captain: {
            "character1": "Boosts ATK of [INT] Characters by 2x",
            "character2": "Boosts ATK of [QCK] Characters by 2x",
            "combined": "Boosts ATK of [QCK] and [INT] Characters by 2x and makes [QCK] and [INT] orbs beneficial for all characters"
        },
        captainNotes: "#{beneficial}",
        special: "Poisons all enemies, randomizes all orbs into either [QCK] or [INT] orbs and becomes Magellan & Hannyabal for 2 turns. If your captain is a [QCK] or [INT] character, boosts the Color Affinity of [QCK] and [INT] characters by 2x for 1 turn.",
        swap: "When Change is activated, reduces Poison duration by 5 turns and changes their own orb into a Matching orb",
        specialName: "Posion Rush",
        sailor: {
            "character1": "Boosts base ATK, HP and RCV of [INT] characters by 25",
            "character2": "Boosts base ATK, HP and RCV of [QCK] characters by 25",
            "combined": "Boosts base ATK, HP and RCV of [QCK] and [INT] characters by 50",
        },
    },
    2517: {//Magellan&Hannyabal
        captain: {
            "character1": "Boosts ATK of [INT] Characters by 2.5x, boosts ATK of [QCK] Characters by 2x and makes [QCK] orbs beneficial for all characters",
            "character2": "Boosts ATK of [QCK] Characters by 2.5x, boosts ATK of [INT] Characters by 2x and makes [INT] orbs beneficial for all characters",
            "combined": "Boosts ATK of [QCK] and [INT] Characters by 3x and makes [QCK] and [INT] orbs beneficial for all characters"
        },
        captainNotes: "#{beneficial}",
        special: "Poisons all enemies, randomizes all orbs into either [QCK] or [INT] orbs and becomes Magellan & Hannyabal for 2 turns. If your captain is a [QCK] or [INT] character, boosts the Color Affinity of [QCK] and [INT] characters by 2x for 1 turn.",
        swap: "When Change is activated, reduces Poison duration by 5 turns and changes their own orb into a Matching orb",
        specialName: "Posion Rush",
        sailor: {
            "character1": "Boosts base ATK, HP and RCV of [INT] characters by 25",
            "character2": "Boosts base ATK, HP and RCV of [QCK] characters by 25",
            "combined": "Boosts base ATK, HP and RCV of [QCK] and [INT] characters by 50",
            "level1": "Completely resists Paralysis on this character",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: Barrier Penetration" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 1: Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 25% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    2518: {//Bartolomeo
        captain: "Reduces damage received by 20%",
        special: "Reduces damage received by 50% for 3 turns.",
        specialName: "Barrier of Devotion",
        support: [
            {
                "Characters": "Luffy",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses their special, Reduces damage received by 10% for 1 turn.",
                    "Level 2: Once per an adventure, when the supported character uses their special, Reduces damage received by 20% for 1 turn.",
                    "Level 3: Once per an adventure, when the supported character uses their special, Reduces damage received by 30% for 1 turn.",
                    "Level 4: Once per an adventure, when the supported character uses their special, Reduces damage received by 40% for 1 turn.",
                    "Level 5: Once per an adventure, when the supported character uses their special, Reduces damage received by 50% for 1 turn."
                ]
            }
        ],
    },
    2519: {//Dress Up Luffy
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.5x, boosts ATK of all others by 2x and boosts HP and RCV of all characters by 1.2x",
        special: "Deals 25x character's ATK in [DEX] damage to one enemy, changes [DEX] and [TND] orbs into Matching Orbs and boosts ATK of [STR], [DEX] and [QCK] characters by 1.5x for 1 turn.",
        specialName: "Right-Foot Armament Gum-Gum Battle Axe • Dress",
        support: [
            {
                "Characters": "Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky and Brook",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 2: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 3: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 4: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 5: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV."
                ]
            }
        ],
    },
    2520: {//Dress Up Robin
        captain: "Boosts ATK of Cerebral characters by 1.5x their HP by 1.2x",
        special: "Reduces Despair duration by 3 turns and boosts ATK against delayed enemies by 1.5x for 1 turn.",
        specialName: "Seductive Lipstick",
        support: [
            {
                "Characters": "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Franky and Brook",
                "description": [
                    "Level 1: Adds 1% of this character's base RCV to the supported character's base RCV.",
                    "Level 2: Adds 1% of this character's base RCV to the supported character's base RCV.",
                    "Level 3: Adds 2% of this character's base RCV to the supported character's base RCV.",
                    "Level 4: Adds 2% of this character's base RCV to the supported character's base RCV.",
                    "Level 5: Adds 3% of this character's base RCV to the supported character's base RCV."
                ]
            }
        ],
    },
    2521: {//Dress Up Usopp
        captain: "Boosts ATK of Shooter characters by 1.75x their HP by 1.25x",
        special: "Recovers 4,000 HP. If your captain is a [DEX] character, boosts the Color Affinity of all characters by 1.5x for 1 turn.",
        specialName: "Obsession for Fashion",
        support: [
            {
                "Characters": "Luffy, Zoro, Nami, Sanji, Chopper, Robin, Franky and Brook",
                "description": [
                    "Level 1: Adds 1% of this character's base HP to the supported character's base HP.",
                    "Level 2: Adds 1% of this character's base HP to the supported character's base HP.",
                    "Level 3: Adds 2% of this character's base HP to the supported character's base HP.",
                    "Level 4: Adds 2% of this character's base HP to the supported character's base HP.",
                    "Level 5: Adds 3% of this character's base HP to the supported character's base HP."
                ]
            }
        ],
    },
    2522: {//Dress Up Brook
        captain: "Boosts ATK of Slasher characters by 1.75x their HP by 1.25x",
        special: "Delays all enemies for 1 turn and amplifies the effect of orbs by 1.5x for 2 turns.",
        specialName: "Fashionable Soul",
        support: [
            {
                "Characters": "Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin and Franky",
                "description": [
                    "Level 1: Adds 1% of this character's base HP to the supported character's base HP.",
                    "Level 2: Adds 1% of this character's base HP to the supported character's base HP.",
                    "Level 3: Adds 2% of this character's base HP to the supported character's base HP.",
                    "Level 4: Adds 2% of this character's base HP to the supported character's base HP.",
                    "Level 5: Adds 3% of this character's base HP to the supported character's base HP."
                ]
            }
        ],
    },
    2523: {//Dress Up Sanji
        captain: "Boosts ATK of [QCK] characters by 1.5x their HP and RCV by 1.2x",
        special: "Reduces Burn duration by 2 turns, reduces enemies' Percent Damage Reduction and Threshold Damage Reduction duration by 2 turns and randomizes all orbs.",
        specialName: "The Chef's Attire",
        support: [
            {
                "Characters": "Luffy, Zoro, Nami, Usopp, Chopper, Robin, Franky and Brook",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses their special, boosts ATK of Captain by 1.025x for 1 turn.",
                    "Level 2: Once per an adventure, when the supported character uses their special, boosts ATK of Captain by 1.05x for 1 turn.",
                    "Level 3: Once per an adventure, when the supported character uses their special, boosts ATK of Captain by 1.1x for 1 turn.",
                    "Level 4: Once per an adventure, when the supported character uses their special, boosts ATK of Captain by 1.15x for 1 turn.",
                    "Level 5: Once per an adventure, when the supported character uses their special, boosts ATK of Captain by 1.2x for 1 turn."
                ]
            }
        ],
    },
    2524: {//Dress Up Nami
        captain: "Boosts ATK of [QCK], [PSY] and [INT] characters by 2.5x, boosts ATK of all others by 2x and boosts HP and RCV of all characters by 1.2x",
        special: "Reduces damage received by 70% for 1 turn, randomizes all non-Matching orbs, including [BLOCK] orbs and switches orbs between slots twice.",
        specialName: "Gust Sword • Dress",
        support: [
            {
                "Characters": "Luffy, Zoro, Sanji, Usopp, Chopper, Robin, Franky and Brook",
                "description": [
                    "Level 1: Adds ?% of this character's base RCV to the supported character's base RCV.",
                    "Level 2: Adds ?% of this character's base RCV to the supported character's base RCV.",
                    "Level 3: Adds ?% of this character's base RCV to the supported character's base RCV.",
                    "Level 4: Adds ?% of this character's base RCV to the supported character's base RCV.",
                    "Level 5: Adds 3% of this character's base RCV to the supported character's base RCV."
                ]
            }
        ],
    },
    2525: {//Dress Up Zoro
        captain: "Boosts ATK of Slaher characters by 1.75x. If a character has an [INT] orb, boosts their ATK by 2.1x instead",
        special: "Boosts ATK of [QCK], [PSY] and [INT] characters by 1.5x for 1 turn, adds 0.3x to Chain multiplier for 1 turn and changes adjacent orbs into [INT] orbs.",
        specialName: "Exhilarating Getup",
        support: [
            {
                "Characters": "Luffy, Nami, Sanji, Usopp, Chopper, Robin, Franky and Brook",
                "description": [
                    "Level 1: Adds ?% of this character's base ATK to the supported character's base ATK.",
                    "Level 2: Adds ?% of this character's base ATK to the supported character's base ATK.",
                    "Level 3: Adds ?% of this character's base ATK to the supported character's base ATK.",
                    "Level 4: Adds ?% of this character's base ATK to the supported character's base ATK.",
                    "Level 5: Adds 3% of this character's base ATK to the supported character's base ATK."
                ]
            }
        ],
    },
    2526: {//Dress Up Chopper
        captain: "Boosts ATK of [PSY] characters by 1.75x and their HP by 1.2x",
        special: "Reduces the defense of all enemies by 50% for 1 turn, changes orbs in the middle row into [RCV] orbs and boosts RCV of all characters by 1.5x for 1 turn.",
        specialName: "Refreshing Shower",
        support: [
            {
                "Characters": "Luffy, Zoro, Nami, Sanji, Usopp, Robin, Franky and Brook",
                "description": [
                    "Level 1: Adds ?% of this character's base RCV to the supported character's base RCV.",
                    "Level 2: Adds ?% of this character's base RCV to the supported character's base RCV.",
                    "Level 3: Adds ?% of this character's base RCV to the supported character's base RCV.",
                    "Level 4: Adds ?% of this character's base RCV to the supported character's base RCV.",
                    "Level 5: Adds 3% of this character's base RCV to the supported character's base RCV."
                ]
            }
        ],
    },
    2527: {//Dress Up Franky
        captain: "Boosts ATK of Fighter characters by 2x",
        special: "Makes [INT] orbs beneficial for all characters for 1 turn, locks all orbs for 1 turn and boosts ATK against enemies with reduced defense by 1.5x for 1 turn.",
        specialName: "Franky Super Hair Set",
        support: [
            {
                "Characters": "Luffy, Zoro, Nami, Sanji, Usopp, Robin, Chopper and Brook",
                "description": [
                    "Level 1: Adds ?% of this character's base ATK to the supported character's base ATK.",
                    "Level 2: Adds ?% of this character's base ATK to the supported character's base ATK.",
                    "Level 3: Adds ?% of this character's base ATK to the supported character's base ATK.",
                    "Level 4: Adds ?% of this character's base ATK to the supported character's base ATK.",
                    "Level 5: Adds 3% of this character's base ATK to the supported character's base ATK."
                ]
            }
        ],
    },
    2528: {//Neptune
        captain: "Boosts ATK of all characters by 1.5x and boosts EXP gained by 1.25x",
        captainNotes: "EXP boost does not take effect if he becomes your captain in the middle of the adventure.",
        special: "Changes own orb into [DEX], reduces Despair and ATK DOWN duration by 5 turns and reduces enemies' Resilience Buffs duration by 5 turns. Reduces the defense of all enemies by 80% and amplifies the effect of orbs by 1.75x for Striker and Powerhouse characters for 3 turns",
        sailor: "Boosts base ATK, HP and RCV of Powerhouse characters by 50",
        specialName: "Great Ocean Current of Resuscitation [EX]",
    },
    2529: {//Neptune
        captain: "Boosts ATK of all characters by 2x, boosts EXP gained by 1.5x and recovers 5x character's RCV in HP at the end of each turn",
        captainNotes: "EXP boost does not take effect if he becomes your captain in the middle of the adventure.",
        special: "Changes own orb into [DEX], reduces Despair and ATK DOWN duration by 5 turns and reduces enemies' Resilience Buffs duration by 5 turns. Reduces the defense of all enemies by 80% and amplifies the effect of orbs by 1.75x for Striker and Powerhouse characters for 3 turns",
        specialName: "Great Ocean Current of Resuscitation [EX]",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of Powerhouse characters by 50",
            "level1": "When any other character uses a special, reduces own cooldown by 1 turn",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: When any other character uses a special, reduces own cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 40% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ],
        support: [
            {
                "Characters": "Fukaboshi, Manboshi, Ryuboshi, Shirahoshi, and Jinbe",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 2: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 3: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 4: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 5: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV."
                ]
            }
        ],
    },
    2530: {//Shirahoshi
        captain: "Boosts ATK and RCV of [PSY] characters by 1.75x",
        special: "Reduces Bind, Despair and Paralysis duration by 2 turns, reduces damage received by 70% for 1 turn",
        specialName: "Great Dinner Buffet [EX]",
        support: [
            {
                "Characters": "Neptune",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, reduces Burn duration by 1 turns and changes [BOMB] orbs into Matching orbs.",
                    "Level 2: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, reduces Burn duration by 1 turns and changes [BOMB] and [TND] orbs into Matching orbs.",
                    "Level 3: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, reduces Burn duration by 2 turns and changes [BOMB] and [TND] orbs into Matching orbs.",
                    "Level 4: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, reduces Burn duration by 2 turns and changes [BOMB], [G] and [TND] orbs into Matching orbs.",
                    "Level 5: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, reduces Burn duration by 3 turns and changes [EMPTY], [BOMB], [G] and [TND] orbs into Matching orbs."
                ]
            }
        ],
    },
    2531: {//Zoro&Sanji
        captain: {
            "character1": "Boosts ATK of Slasher and Fighter characters by 2.75x and makes [DEX] orbs beneficial for Slasher and Fighter characters. If you defeated an enemy last turn, boosts ATK of Slasher and Fighter characters by 3.3x instead.",
            "character2": "Boosts ATK of Slasher and Fighter characters by 2.75x, recovers 2x character's RCV in HP at the end of each turn and makes [QCK] orbs beneficial for Slasher and Fighter characters.",
            "combined": "Boosts ATK of Slasher and Fighter characters by 3.75x and makes [DEX], [QCK], [RCV] and [TND] orbs beneficial for Slasher and Fighter characters."
        },
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Slasher and Fighter characters by 100",
            "level2": "Makes [RCV] and [TND] orbs beneficial for Slasher and Fighter characters",
        },
        special: "Deals 100x character's ATK in Typeless damage to all enemies, and becomes Zoro & Sanji for 3 turns. If HP is above 99% at the time the special is activated, boosts ATK of Slasher and Fighter characters by 2.75x for 1 turn, by 2x for 2 turns otherwise.",
        swap: "When Change is activated, this character removes all Slot Bind on themselves and changes their own orb into a Matching orb",
        specialName: "Zoro & Sanji Special",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 150" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Slasher and Fighter characters by 100" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 250" },
            { "description": "Boosts base HP by 350" },
            { "description": "Boosts base ATK by 100" },
            { "description": "Acquire Sailor Ability 2: Makes [RCV] and [TND] orbs beneficial for Slasher and Fighter characters" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
            { "description": "Boosts base HP by 400" },
            { "description": "Boosts base RCV by 100" },
            { "description": "Boosts base ATK by 150" },
            { "description": "Boosts base ATK by 200" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Boosts base HP by 420" },
            { "description": "Boosts base HP by 500" },
            { "description": "Boosts base ATK by 250" },
            { "description": "Acquire Potential 3: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 60% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 70% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 80% chance to deal 8% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 3 turn",
                    "Level 3: Reduces No Healing duration by 5 turn",
                    "Level 4: Reduces No Healing duration by 7 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    2532: {//Chopper&Carrot
        captain: {
            "character1": "Boosts ATK of all characters by 2.5x and recovers 500 HP at end of each turn",
            "character2": "Boosts ATK of all characters by 2.5x at the start of the chain, by 2.75x after 3 PERFECTs in a row",
            "combined": "Boosts ATK of all characters by 2.5x at the start of the chain, by 3.25x after 3 PERFECTs in a row and recovers 1,000 HP at end of each turn"
        },
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of all characters by 1.75x for 1 turn and becomes Chobro & Carrot for 2 turns",
        swap: "When Change is activated, makes PERFECTs easier to hit for 1 turn and recovers 2x character's RCV",
        specialName: "A Call from the Mirror",
    },
    2533: {//Luffy&Law
        captain: {
            "character1": "Boosts ATK of all characters by 3.5x and their HP by 1.25x.",
            "character2": "Boosts ATK of all characters by 3x, their HP by 1.25x and recovers 0.5x his RCV at the end of the turn each time you hit a PERFECT.",
            "combined": "Boosts ATK of all characters by 4.5x, their HP by 1.25x and recovers 1x their RCV at the end of the turn each time you hit a PERFECT."
        },
        sailor: {
            "character1": "Boosts base ATK of all characters by 50",
            "character2": "Boosts base HP of all characters by 50",
            "combined": "Boosts base ATK, HP and RCV of all characters by 100"
        },
        special: {
            "character1": "Deals 400x character's ATK in Typeless damage to one enemy, makes [DEX] and [QCK] orbs beneficial for all characters for 1 turn, amplifies the effect of orbs by 2.5x for 1 turn and becomes Luffy & Law for 3 turns.",
            "character2": "Deals 75x character's ATK in Typeless damage to all enemies that will ignore damage negating abilities and barriers, makes [DEX] and [QCK] orbs beneficial for all characters for 1 turn, amplifies the effect of orbs by 2.5x for 1 turn and becomes Luffy & Law for 3 turns.",
        },
        swap: "When Change is activated, this character removes all Slot Bind on themselves and changes their own orb, including [BLOCK] orbs, into a Matching orb, boosts own ATK by 2x for 1 turn and makes own normal attacks ignore defensive barriers and buffs.",
        specialName: "The Ultimate Stratagem to Defeat God",
    },
    2534: {//Luffy&Law
        captain: {
            "character1": "Boosts ATK of all characters by 3.5x and their HP by 1.25x.",
            "character2": "Boosts ATK of all characters by 3x, their HP by 1.25x and recovers 0.5x his RCV at the end of the turn each time you hit a PERFECT.",
            "combined": "Boosts ATK of all characters by 4.5x, their HP by 1.25x and recovers 1x their RCV at the end of the turn each time you hit a PERFECT."
        },
        sailor: {
            "character1": "Boosts base ATK of all characters by 50",
            "character2": "Boosts base HP of all characters by 50",
            "combined": "Boosts base ATK, HP and RCV of all characters by 100",
            "level1": "Completely resists Paralysis and Silence on this character"
        },
        special: {
            "character1": "Deals 400x character's ATK in Typeless damage to one enemy, makes [DEX] and [QCK] orbs beneficial for all characters for 1 turn, amplifies the effect of orbs by 2.5x for 1 turn and becomes Luffy & Law for 3 turns.",
            "character2": "Deals 75x character's ATK in Typeless damage to all enemies that will ignore damage negating abilities and barriers, makes [DEX] and [QCK] orbs beneficial for all characters for 1 turn, amplifies the effect of orbs by 2.5x for 1 turn and becomes Luffy & Law for 3 turns.",
        },
        swap: "When Change is activated, this character removes all Slot Bind on themselves and changes their own orb, including [BLOCK] orbs, into a Matching orb, boosts own ATK by 2x for 1 turn and makes own normal attacks ignore defensive barriers and buffs.",
        specialName: "The Ultimate Stratagem to Defeat God",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Sailor Ability 1: Completely resists Paralysis and Silence on this character" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 25% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 2 turn",
                    "Level 2: Reduces No Healing duration by 3 turn",
                    "Level 3: Reduces No Healing duration by 4 turn",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 60% chance to deal 6% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 70% chance to deal 7% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 80% chance to deal 8% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 90% chance to deal 9% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 100% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2535: {//Homies&Big Mom
        captain: {
            "character1": "If there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, Increases damage received by 1.75x boosts ATK of all characters by 3.25x and their HP by 2x. Recovers HP proportional to the number of enemies you defeated in that turn ✕ crew's RCV at the end of the enemy turn.",
            "character2": "If there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, Increases damage received by 1.75x boosts ATK of all characters by 3.25x and their HP by 2x. Recovers HP proportional to the number of enemies you defeated in that turn ✕ crew's RCV at the end of the enemy turn.",
            "combined": "If there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, Increases damage received by 1.75x boosts ATK of all characters by 4x and their HP by 2x. Recovers HP proportional to the number of enemies you defeated in that turn ✕ crew's RCV at the end of the enemy turn."
        },
        captainNotes: "The amount healed each turn is equal to the number of enemies defeated times the crew's total base RCV.",
        sailor: {
            "character1": "Makes [STR], [PSY] and [RCV] orbs beneficial for this character",
            "character2": "Makes [DEX], [QCK] and [TND] orbs beneficial for this character",
            "combined": "Makes [STR], [DEX], [QCK], [PSY], [INT], [TND] and [RCV] orbs beneficial for this character"
        },
        special: "Boosts base ATK of all characters based on your current HP for 1 turn and becomes Zeus & Prometheus & Big Mom for 3 turns. If HP is above 50% at the time the special is activated, locks the chain multiplier at 3.5x for 1 turn.",
        specialNotes: "Base ATK boost is equal to current HP/100, the maximum effect at 100,000 HP will give a 1,000 base ATK boost.",
        swap: "When Change is activated, this character removes all Paralysis on themselves and changes their own orb into a Matching orb, boosts own ATK by 1.5x for 1 turn and amplifies the effect of own orb by 1.5x for 1 turn.",
        specialName: "Heavenly Fire and Lightning Ring & Mama Mash",
    },
    2536: {//Homies&Big Mom
        captain: {
            "character1": "If there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, Increases damage received by 1.75x boosts ATK of all characters by 3.25x and their HP by 2x. Recovers HP proportional to the number of enemies you defeated in that turn ✕ crew's RCV at the end of the enemy turn.",
            "character2": "If there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, Increases damage received by 1.75x boosts ATK of all characters by 3.25x and their HP by 2x. Recovers HP proportional to the number of enemies you defeated in that turn ✕ crew's RCV at the end of the enemy turn.",
            "combined": "If there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, Increases damage received by 1.75x boosts ATK of all characters by 4x and their HP by 2x. Recovers HP proportional to the number of enemies you defeated in that turn ✕ crew's RCV at the end of the enemy turn."
        },
        captainNotes: "The amount healed each turn is equal to the number of enemies defeated times the crew's total base RCV.",
        sailor: {
            "character1": "Makes [STR], [PSY] and [RCV] orbs beneficial for this character",
            "character2": "Makes [DEX], [QCK] and [TND] orbs beneficial for this character",
            "combined": "Makes [STR], [DEX], [QCK], [PSY], [INT], [TND] and [RCV] orbs beneficial for this character",
            "level1": "Boosts base HP of all characters by 150"
        },
        special: "Boosts base ATK of all characters based on your current HP for 1 turn and becomes Zeus & Prometheus & Big Mom for 3 turns. If HP is above 50% at the time the special is activated, locks the chain multiplier at 3.5x for 1 turn.",
        specialNotes: "Base ATK boost is equal to current HP/100, the maximum effect at 100,000 HP will give a 1,000 base ATK boost.",
        swap: "When Change is activated, this character removes all Paralysis on themselves and changes their own orb into a Matching orb, boosts own ATK by 1.5x for 1 turn and amplifies the effect of own orb by 1.5x for 1 turn.",
        specialName: "Heavenly Fire and Lightning Ring & Mama Mash",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 45" },
            { "description": "Acquire Potential 2: Enrage" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of all characters by 150" },
            { "description": "Boosts base HP by 150" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 2%",
                    "Level 2: Reduce damage taken from [PSY] characters by 3%",
                    "Level 3: Reduce damage taken from [PSY] characters by 4%",
                    "Level 4: Reduce damage taken from [PSY] characters by 5%",
                    "Level 5: Reduce damage taken from [PSY] characters by 7%"
                ]
            },
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 75",
                    "Level 2: Boosts base ATK by 100",
                    "Level 3: Boosts base ATK by 150",
                    "Level 4: Boosts base ATK by 200",
                    "Level 5: Boosts base ATK by 300"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 2 turn",
                    "Level 2: Reduces No Healing duration by 3 turn",
                    "Level 3: Reduces No Healing duration by 5 turn",
                    "Level 4: Reduces No Healing duration by 7 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2537: {//Lucci&Kaku
        captain: {
            "character1": "Boosts ATK of Powerhouse characters by 2.75x if they have a Matching orb, by 2.25x otherwise. Reduces RCV of all characters by 50%.",
            "character2": "Boosts ATK of Powerhouse characters by 2.25x and boosts damage of Powerhouse Typed specials by 1.2x.",
            "combined": "Boosts ATK of Powerhouse characters by 3x if they have a Matching orb, by 2.5x otherwise and boosts damage of Powerhouse Typed specials by 1.5x."
        },
        sailor: {
            "character1": "Boosts base ATK and HP of Powerhouse and Fighter characters by 30",
            "character2": "Boosts base ATK and HP of Powerhouse and Slasher characters by 30",
            "combined": "Boosts base ATK and HP of Powerhouse, Fighter and Slasher characters by 50",
        },
        special: "Deals 50x character's ATK in character's Type damage to all enemies and becomes Lucci & Kaku for 2 turns. If your Captain is a Powerhouse, Fighter or Slasher character, boosts ATK of Powerhouse, Fighter and Slasher characters by 2x for 1 turn.",
        swap: "When Change is activated, makes [TND] orbs beneficial for Powerhouse, Fighter or Slasher characters for 1 turn and adds 0.3x to Chain multiplier for 1 turn.",
        specialName: "Tempest Kick - Twin Beasts",
    },
    2538: {//Lucci&Kaku
        captain: {
            "character1": "Boosts ATK of Powerhouse characters by 2.75x if they have a Matching orb, by 2.25x otherwise. Reduces RCV of all characters by 50%.",
            "character2": "Boosts ATK of Powerhouse characters by 2.25x and boosts damage of Powerhouse Typed specials by 1.2x.",
            "combined": "Boosts ATK of Powerhouse characters by 3x if they have a Matching orb, by 2.5x otherwise and boosts damage of Powerhouse Typed specials by 1.5x."
        },
        sailor: {
            "character1": "Boosts base ATK and HP of Powerhouse and Fighter characters by 30",
            "character2": "Boosts base ATK and HP of Powerhouse and Slasher characters by 30",
            "combined": "Boosts base ATK and HP of Powerhouse, Fighter and Slasher characters by 50",
            "level1": "If your Captain is a Powerhouse, Fighter or Slasher character, completely removes Blindness duration"
        },
        special: "Deals 50x character's ATK in character's Type damage to all enemies and becomes Lucci & Kaku for 2 turns. If your Captain is a Powerhouse, Fighter or Slasher character, boosts ATK of Powerhouse, Fighter and Slasher characters by 2x for 1 turn.",
        swap: "When Change is activated, makes [TND] orbs beneficial for Powerhouse, Fighter or Slasher characters for 1 turn and adds 0.3x to Chain multiplier for 1 turn.",
        specialName: "Tempest Kick - Twin Beasts",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 1: If your Captain is a Powerhouse, Fighter or Slasher character, completely removes Blindness duration" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turn",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 80% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2539: {//Ivankov&Bon Clay
        captain: {
            "character1": "Boosts ATK of Free Spirit characters by 2x and recovers 2x character's RCV in HP at the end of each turn.",
            "character2": "Boosts ATK of Free Spirit characters by 2.25x at the start of the chain, by 2.7x after 4 PERFECTs in a row.",
            "combined": "Boosts ATK of Free Spirit characters by 2.75x at the start of the chain, by 3.43x after 4 PERFECTs in a row and recovers 3x character's RCV in HP at the end of each turn."
        },
        sailor: {
            "character1": "Boosts base RCV of Free Spirit characters by 50",
            "character2": "Boosts base ATK of Free Spirit characters by 50",
            "combined": "Boosts base ATK and RCV of Free Spirit characters by 75",
        },
        special: "Removes Poison, RCV DOWN and Blindness duration completely, reduces Bind and Despair duration by 5 turns, recovers 13x character's RCV in HP at the end of each turn for 5 turns and becomes Ivankov & Bon Clay for 2 turns.",
        swap: "When Change is activated, reduces Paralysis duration by 1 turn and reduces damage received by 20% for 1 turn.",
        specialName: "The Cheer that will Summon a Miracle",
    },
    2540: {//Ivankov&Bon Clay
        captain: {
            "character1": "Boosts ATK of Free Spirit characters by 2x and recovers 2x character's RCV in HP at the end of each turn.",
            "character2": "Boosts ATK of Free Spirit characters by 2.25x at the start of the chain, by 2.7x after 4 PERFECTs in a row.",
            "combined": "Boosts ATK of Free Spirit characters by 2.75x at the start of the chain, by 3.43x after 4 PERFECTs in a row and recovers 3x character's RCV in HP at the end of each turn."
        },
        sailor: {
            "character1": "Boosts base RCV of Free Spirit characters by 50",
            "character2": "Boosts base ATK of Free Spirit characters by 50",
            "combined": "Boosts base ATK and RCV of Free Spirit characters by 75",
            "level1": "Reduces Silence duration on this character by 5 turns"
        },
        special: "Removes Poison, RCV DOWN and Blindness duration completely, reduces Bind and Despair duration by 5 turns, recovers 13x character's RCV in HP at the end of each turn for 5 turns and becomes Ivankov & Bon Clay for 2 turns.",
        swap: "When Change is activated, reduces Paralysis duration by 1 turn and reduces damage received by 20% for 1 turn.",
        specialName: "The Cheer that will Summon a Miracle",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 45" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 5 turns" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 25% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 2 turn",
                    "Level 2: Reduces No Healing duration by 3 turn",
                    "Level 3: Reduces No Healing duration by 4 turn",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
        ]
    },
    2541: {//Smoker&Tashigi
        captain: {
            "character1": "Boosts ATK of [QCK] characters by 2.5x, boosts ATK of all other characters by 2x, and boosts HP of all characters by 1.2x.",
            "character2": "Boosts ATK of [PSY] characters by 2.5x, boosts ATK of all other characters by 2x, and boosts HP of all characters by 1.2x.",
            "combined": "Boosts ATK of [QCK] and [PSY] characters by 3.25x, boosts ATK of all other characters by 2.5x, and boosts HP of all characters by 1.2x."
        },
        sailor: {
            "character1": "Boosts base HP of [QCK] and [PSY] characters by 50",
            "character2": "Boosts base RCV of [QCK] and [PSY] characters by 50",
            "combined": "Boosts base HP and RCV of [QCK] and [PSY] characters by 75",
        },
        special: "Deals 100,000 Fixed damage to all enemies, changes [STR], [DEX], [QCK], [PSY], [INT] and [BLOCK] orbs into Matching orbs, locks all orbs for 1 turn and becomes Smoker & Tashigi for 2 turns.",
        swap: "When Change is activated, randomizes [RCV], [EMPTY], [G], [BOMB] orbs and recovers 1,000 HP.",
        specialName: "White Hunting Autumn Rain",
    },
    2542: {//Smoker&Tashigi
        captain: {
            "character1": "Boosts ATK of [QCK] characters by 2.5x, boosts ATK of all other characters by 2x, and boosts HP of all characters by 1.2x.",
            "character2": "Boosts ATK of [PSY] characters by 2.5x, boosts ATK of all other characters by 2x, and boosts HP of all characters by 1.2x.",
            "combined": "Boosts ATK of [QCK] and [PSY] characters by 3.25x, boosts ATK of all other characters by 2.5x, and boosts HP of all characters by 1.2x."
        },
        sailor: {
            "character1": "Boosts base HP of [QCK] and [PSY] characters by 50",
            "character2": "Boosts base RCV of [QCK] and [PSY] characters by 50",
            "combined": "Boosts base HP and RCV of [QCK] and [PSY] characters by 75",
            "level1": "Makes [TND] orbs beneficial for [QCK] and [PSY] characters"
        },
        special: "Deals 100,000 Fixed damage to all enemies, changes [STR], [DEX], [QCK], [PSY], [INT] and [BLOCK] orbs into Matching orbs, locks all orbs for 1 turn and becomes Smoker & Tashigi for 2 turns.",
        swap: "When Change is activated, randomizes [RCV], [EMPTY], [G], [BOMB] orbs and recovers 1,000 HP.",
        specialName: "White Hunting Autumn Rain",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: Barrier Penetration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [TND] orbs beneficial for [QCK] and [PSY] characters" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 25% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    2543: {//Crocodile&Robin
        captain: {
            "character1": "Boosts ATK of Cerebral characters by 2.5x and makes [DEX] orbs beneficial for Cerebral characters.",
            "character2": "Boosts ATK of Cerebral characters by 2.25x and reduce damage received by 15%.",
            "combined": "Boosts ATK of Cerebral characters by 3x, reduce damage received by 20% and makes [DEX] orbs beneficial for Cerebral characters."
        },
        sailor: {
            "character1": "Restores his own special cooldown by 2 turns when it is rewinded",
            "character2": "Reduces Silence duration on this character by 2 turns",
            "combined": "Boosts base ATK, HP and RCV of Cerebral characters by 50",
        },
        special: "Reduces damage received by 80% for 1 turn, boosts the Color Affinity of all characters by 1.75x for 1 turn and becomes Mr. 0 & Miss All Sunday for 2 turns.",
        swap: "When Change is activated, slightly boosts chances of getting Matching orbs for 1 turn.",
        specialName: "Disorderly Bloom: Pesado",
    },
    2544: {//Crocodile&Robin
        captain: {
            "character1": "Boosts ATK of Cerebral characters by 2.5x and makes [DEX] orbs beneficial for Cerebral characters.",
            "character2": "Boosts ATK of Cerebral characters by 2.25x and reduce damage received by 15%.",
            "combined": "Boosts ATK of Cerebral characters by 3x, reduce damage received by 20% and makes [DEX] orbs beneficial for Cerebral characters."
        },
        sailor: {
            "character1": "Restores his own special cooldown by 2 turns when it is rewinded",
            "character2": "Reduces Silence duration on this character by 2 turns",
            "combined": "Boosts base ATK, HP and RCV of Cerebral characters by 50",
            "level1": "Makes [DEX] orbs beneficial for Cerebral characters"
        },
        special: "Reduces damage received by 80% for 1 turn, boosts the Color Affinity of all characters by 1.75x for 1 turn and becomes Mr. 0 & Miss All Sunday for 2 turns.",
        swap: "When Change is activated, slightly boosts chances of getting Matching orbs for 1 turn.",
        specialName: "Disorderly Bloom: Pesado",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Barrier Penetration" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs beneficial for Cerebral characters" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 25% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    2545: {//Ace
        captain: "Boosts ATK of Free Spirit characters by 2x and makes [RCV] orbs beneficial for Free Spirit characters.",
        special: "Binds self for 5 turns, reduces Special Cooldown of all characters by 2 turns and locks the chain multiplier at 3x for 2 turns.",
        specialName: "My Paced Feast",
    },
    2546: {//Ace
        captain: "Boosts ATK of Free Spirit characters by 2.5x and makes [RCV] orbs beneficial for Free Spirit characters.",
        sailor: {
            "base": "None",
            "Level1": "Restores his own special cooldown by 2 turns when it is rewinded",
        },
        special: "Binds self for 5 turns, reduces Special Cooldown of all characters by 2 turns and locks the chain multiplier at 3x for 2 turns.",
        specialName: "My Paced Feast",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Restores his own special cooldown by 2 turns when it is rewinded" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 2 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers"
                ]
            },
        ],
    },
    2547: {//Perona
        captain: "Boosts ATK and RCV of Driven characters by 1.75x.",
        special: "Recovers 50% of crew's MAX HP and reduces damage received by 70% for 3 turns.",
        specialName: "Party Ghost Greeting",
    },
    2548: {//Perona
        captain: "Boosts ATK and RCV of Driven characters by 1.75x.",
        sailor: {
            "base": "None",
            "Level1": "Reduces Silence duration on this character by 2 turns",
        },
        special: "Recovers 50% of crew's MAX HP and reduces damage received by 70% for 3 turns.",
        specialName: "Party Ghost Greeting",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 2 turns" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 20% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 30% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 40% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 3 turn",
                    "Level 2: Reduces No Healing duration by 4 turn",
                    "Level 3: Reduces No Healing duration by 5 turn",
                    "Level 4: Reduces No Healing duration by 7 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
        ],
    },
    2549: {//Doflamingo&Trebol
        captain: {
            "character1": "Boosts ATK of Driven and Cerebral characters by 2.5x and their HP by 1.2x.",
            "character2": "Boosts ATK of Driven and Cerebral characters by 2.25x and their HP and RCV by 1.2x.",
            "combined": "Boosts ATK of Driven and Cerebral characters by 2.75x and their HP and RCV by 1.2x and makes [RCV] and [TND] orbs beneficial for Driven and Cerebral characters."
        },
        sailor: {
            "character1": "Boosts base ATK of Driven and Cerebral characters by 30",
            "character2": "Boosts base HP and RCV of Driven and Cerebral characters by 30",
            "combined": "Boosts base ATK, HP and RCV of Driven and Cerebral characters by 50",
        },
        special: "Switches orbs between slots twice, locks all orbs for 1 turn, locks the chain multiplier at 2.75x for 1 turn and becomes Doflamingo & Trebol for 2 turns. If during that turn, you hit 4 PERFECTS, locks the chain multiplier at 3.25x for 1 turn.",
        swap: "When Change is activated, makes [STR] and [DEX] orbs beneficial for all characters for 1 turn and changes their own orb into a Matching orb.",
        specialName: "Punishment by Means of \"Evil\"",
    },
    2550: {//Doflamingo&Trebol
        captain: {
            "character1": "Boosts ATK of Driven and Cerebral characters by 2.5x and their HP by 1.2x.",
            "character2": "Boosts ATK of Driven and Cerebral characters by 2.25x and their HP and RCV by 1.2x.",
            "combined": "Boosts ATK of Driven and Cerebral characters by 2.75x and their HP and RCV by 1.2x and makes [RCV] and [TND] orbs beneficial for Driven and Cerebral characters."
        },
        sailor: {
            "character1": "Boosts base ATK of Driven and Cerebral characters by 30",
            "character2": "Boosts base HP and RCV of Driven and Cerebral characters by 30",
            "combined": "Boosts base ATK, HP and RCV of Driven and Cerebral characters by 50",
            "level1": "Makes [RCV] orbs beneficial for Driven and Cerebral characters",
        },
        special: "Switches orbs between slots twice, locks all orbs for 1 turn, locks the chain multiplier at 2.75x for 1 turn and becomes Doflamingo & Trebol for 2 turns. If during that turn, you hit 4 PERFECTS, locks the chain multiplier at 3.25x for 1 turn.",
        swap: "When Change is activated, makes [STR] and [DEX] orbs beneficial for all characters for 1 turn and changes their own orb into a Matching orb.",
        specialName: "Punishment by Means of \"Evil\"",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs beneficial for Driven and Cerebral characters" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
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
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 10% chance to deal 1% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 20% chance to deal 2% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 50% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2551: {//Sengoku&Garp
        captain: {
            "character1": "Boosts ATK of Fighter Characters by 2.25x and their HP by 1.2x and makes [INT] orbs beneficial for Fighter characters",
            "character2": "Boosts ATK of Fighter Characters by 2x and their HP by 1.2x, but boosts his OWN attack by 2.5x and makes [DEX] orbs beneficial for Fighter characters",
            "combined": "Boosts ATK of Fighter Characters by 3x and their HP by 1.2x, but boosts his OWN attack by 4x and makes [DEX], [INT], [RCV] and [TND] orbs beneficial for Fighter characters"
        },
        captainNotes: "#{beneficial}",
        special: "Removes all positive buffs on your team and reduces Despair duration by 2 turns. Boosts ATK of Fighter characters by 1.75x for 1 turn and amplifies the effect of orbs by 1.75x for Fighter characters for 1 turn and becomes Sengoku & Garp for 3 turns",
        swap: "When Change is activated, boosts ATK of Fighter characters by 1.2x for 1 turn and changes their own orb into a Matching orb",
        specialName: "Twin Fists of Justice",
        sailor: {
            "character1": "Boosts base ATK of all characters by 40 if your Captain is a Fighter character",
            "character2": "Boosts base ATK of all characters by 40 if your Captain is a Fighter character",
            "combined": "Boosts base ATK of all characters by 40 if your Captain is a Fighter character"
        },
    },
    2552: {//Sengoku&Garp
        captain: {
            "character1": "Boosts ATK of Fighter Characters by 2.5x and their HP by 1.2x and makes [INT] orbs beneficial for Fighter characters",
            "character2": "Boosts ATK of Fighter Characters by 2.25x and their HP by 1.2x, but boosts his OWN attack by 3x and makes [DEX] orbs beneficial for Fighter characters",
            "combined": "Boosts ATK of Fighter Characters by 3x and their HP by 1.2x, but boosts his OWN attack by 4x and makes [DEX], [INT], [RCV] and [TND] orbs beneficial for Fighter characters"
        },
        captainNotes: "#{beneficial}",
        special: "Removes all positive buffs on your team and reduces Despair duration by 2 turns. Boosts ATK of Fighter characters by 1.75x for 1 turn and amplifies the effect of orbs by 1.75x for Fighter characters for 1 turn and becomes Sengoku & Garp for 3 turns",
        swap: "When Change is activated, boosts ATK of Fighter characters by 1.2x for 1 turn and changes their own orb into a Matching orb",
        specialName: "Twin Fists of Justice",
        sailor: {
            "character1": "Boosts base ATK of all characters by 40 if your Captain is a Fighter character",
            "character2": "Boosts base ATK of all characters by 40 if your Captain is a Fighter character",
            "combined": "Boosts base ATK of all characters by 40 if your Captain is a Fighter character",
            "level1": "Boosts own base ATK by 200 if this character is the last in the chain to attack",
        },
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts own base ATK by 200 if this character is the last in the chain to attack" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 70" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
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
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2553: {//Rockstar
        captain: "Boosts ATK of Fighter characters by 1.5x",
        special: "Delays all enemies for 1 turn, makes [STR] and [QCK] orbs beneficial for all characters for 1 turn and amplifies the effect of orbs by 1.5x for 1 turn.",
        specialName: "You've Heard of the Name Rockstar ... Right?",
        limit: [
            { "description": "" },
            { "description": "" },
            { "description": "" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "" },
            { "description": "" },
            { "description": "" },
            { "description": "" },
            { "description": "" },
            { "description": "Acquire Potential 1: Enrage" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by ?",
                    "Level 2: Boosts base ATK by ?",
                    "Level 3: Boosts base ATK by ?",
                    "Level 4: Boosts base ATK by ?",
                    "Level 5: Boosts base ATK by 250"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2554: {//Yasopp
        captain: "Boosts ATK of Free Spirit characters by 1.5x",
        special: "Reduces enemy Barrier duration by 1 turn and reduces ATK DOWN duration by 3 turns. If you are on a Treasure Map, boosts ATK against delayed enemies depending on your Treasure Map Level for 1 turn.",
        specialName: "The Sniper that Never Misses",
        specialNotes: "Level 1-10: 1.5x ATK boost<br\>Level 11-20: 1.75x ATK boost<br\>Level 21+: 2x ATK boost",
        limit: [
            { "description": "" },
            { "description": "" },
            { "description": "" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "" },
            { "description": "" },
            { "description": "" },
            { "description": "" },
            { "description": "" },
            { "description": "Acquire Potential 1: No Healing duration" },
        ],
        potential: [
            {
                "Name": "No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turn",
                    "Level 4: Reduces No Healing duration by ? turn",
                    "Level 5: Reduces No Healing duration by 10 turn"
                ]
            },
        ],
        support: [
            {
                "Characters": "Shanks and Ben Beckman",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, randomizes [Empty] orbs and boosts ATK of supported characcter by ?x for 1 turn.",
                    "Level 2: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, randomizes [Empty] orbs and boosts ATK of supported characcter by ?x for 1 turn.",
                    "Level 3: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, randomizes [Empty] orbs and boosts ATK of supported characcter by ?x for 1 turn.",
                    "Level 4: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, randomizes [Empty] orbs and boosts ATK of supported characcter by ?x for 1 turn.",
                    "Level 5: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, randomizes [Empty] orbs and boosts ATK of supported characcter by 1.5x for 1 turn."
                ]
            }
        ],
    },
    2555: {//Lucky Roux
        captain: "Boosts ATK of [QCK] characters by 1.25x and their HP by 1.2x",
        special: "Reduces Bind duration by 5 turns, changes orbs on Free Spirit, Shooter and Slasher characters into [QCK] orbs. If you are on a Treasure Map, boosts ATK of Free Spirit, Shooter and Slasher characters depending on your Treasure Map Level for 1 turn.",
        specialName: "Meat Power Shot",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
        limit: [
            { "description": "" },
            { "description": "" },
            { "description": "" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "" },
            { "description": "" },
            { "description": "" },
            { "description": "" },
            { "description": "" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by ? turn on this character",
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ],
        support: [
            {
                "Characters": "Shanks and Ben Beckman",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, randomizes [Empty] orbs and boosts ATK of supported characcter by ?x for 1 turn.",
                    "Level 2: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, randomizes [Empty] orbs and boosts ATK of supported characcter by ?x for 1 turn.",
                    "Level 3: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, randomizes [Empty] orbs and boosts ATK of supported characcter by ?x for 1 turn.",
                    "Level 4: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, randomizes [Empty] orbs and boosts ATK of supported characcter by ?x for 1 turn.",
                    "Level 5: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, randomizes [Empty] orbs and boosts ATK of supported characcter by 1.5x for 1 turn."
                ]
            }
        ],
    },
    2556: {//Shanks&Ben Beckman
        captain: {
            "character1": "Boosts ATK of [INT] Characters by ?x and boosts ATK of all other characters by ?x.",
            "character2": "Boosts ATK of [DEX] Characters by ?x and boosts ATK of all other characters by ?x.",
            "combined": "Boosts ATK of [DEX] and [INT] Characters by ?x and boosts ATK of all other characters by ?x."
        },
        special: "Changes all orbs, including [BLOCK] orbs, into [EMPTY] orbs, boosts the Color Affinity of all characters by 3x for 1 turn, locks the chain multiplier at 3x for 1 turn and becomes Shanks & Ben Beckman for 2 turns.",
        specialNotes: "This special can only be activated if no other special has been activated this turn and removes the ability to activate any other specials this turn.",
        swap: "When Change is activated, reduces Bind, Despair and Paralysis duration by 1 turn",
        specialName: "Controlling the Battlefield",
    },
    2557: {//Shanks&Ben Beckman
        captain: {
            "character1": "Boosts ATK of [INT] Characters by 3x and boosts ATK of all other characters by 2x.",
            "character2": "Boosts ATK of [DEX] Characters by 3x and boosts ATK of all other characters by 2x.",
            "combined": "Boosts ATK of [DEX] and [INT] Characters by 3.75x and boosts ATK of all other characters by 2.5x."
        },
        special: "Changes all orbs, including [BLOCK] orbs, into [EMPTY] orbs, boosts the Color Affinity of all characters by 3x for 1 turn, locks the chain multiplier at 3x for 1 turn and becomes Shanks & Ben Beckman for 2 turns.",
        specialNotes: "This special can only be activated if no other special has been activated this turn and removes the ability to activate any other specials this turn.",
        swap: "When Change is activated, reduces Bind, Despair and Paralysis duration by 1 turn",
        specialName: "Controlling the Battlefield",
        sailor: {
            "base": "None",
            "level1": "Reduces Blindness duration by 5 turns",
            "level2": "Reduces Silence duration on this character by 5 turns"
        },
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by ? turn",
                    "Level 2: Reduces No Healing duration by ? turn",
                    "Level 3: Reduces No Healing duration by ? turn",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by ? turn on this character",
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ],
    },
    
    
    
};

module.exports.db6 = db6;
