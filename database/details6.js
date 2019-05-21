//Copied from the optc-db.github.io database files. All credit goes to them.

var db6 = {
    2500: {//Big Mom
        captain: "<b>Always Active: </b>Boosts HP of [STR], [DEX] and [QCK] characters by 1.3x, makes [SEMLA] orbs beneficial for all characters.<br><b>Standard Captain: </b>Boosts ATK of [STR], [DEX] and [QCK] characters by 3.5x<br><b>Powered Up Captain: </b>Boosts own ATK by 4.25x, boosts ATK of [STR], [DEX] and [QCK] characters by 4x and reduce damage received by 15%<br><b>Rampage Captain: </b>Boosts own ATK by 12x and own attacks will ignore defensive barriers and buffs, boosts ATK of [STR], [DEX] and [QCK] characters by 3.75x and boosts chances of getting [SEMLA] orbs",
        captainNotes: "[SEMLA] orbs replace [RCV] orbs and heal at the end of the enemy turn and can not be swapped by special abilities.<br>In order to Power Up Big Mom, you must eat a [SEMLA] orb and will be powered up the following turn.<br>While in Rampage, Big Mom will always attack a random enemy on her own, even while Binded or Paralyzed and hit a HUNGRY, which deals the same damage as a PERFECT. This attack occurs after your chain, so Big Mom's attack will not be affected by Chain Limiters, Chain Boosters, or Chain Lockers. You can not activate Big Mom's special while in Rampage. To exit Rampage, you must consume a [SEMLA] orb.",
        special: "Deals 300x character's ATK in Typeless damage to one enemy and changes own orb, including [BLOCK] orbs, into a [STR] orb. If Big Mom is your Captain or Friend/Guest Captain, boosts ATK of characters in the top row by 2x, amplifies the effects of orbs for characters in the top row by 2x for 3 turns and locks top row orbs for 2 turns. If she is a Sailor, boosts own ATK by 2x and amplifies the effects of own orb by 2x for 1 turn instead",
        specialName: "Ikoku Sovereignty",
        sailor: {
            "base": "None",
            "level1": "Boosts own base ATK by 350 if this character is the last in the chain to attack",
            "level2": "Makes [DEX] and [QCK] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts own base ATK by 350 if this character is the last in the chain to attack" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Enrage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] and [QCK] orbs beneficial for this character" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Critical Hit" },
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
                    "Level 1: Boosts base ATK by 75",
                    "Level 2: Boosts base ATK by 100",
                    "Level 3: Boosts base ATK by 150",
                    "Level 4: Boosts base ATK by 200",
                    "Level 5: Boosts base ATK by 300"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "[STR], [DEX], [QCK] Characters",
                "description": [
                    "Level 1: Adds 4% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 6% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 7% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 8% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 10% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
};

module.exports.db6 = db6;
