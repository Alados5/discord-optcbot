//Copied from the optc-db.github.io database files. All credit goes to them.

//Discord limits the characters of a message, this shortens the text for unit 2074
var g4v2captain = "Boosts HP of all characters by 1.25x, boosts chances of getting [STR], [QCK], and [PSY] orbs. <br> <b>Action:</b> If Gear Gauge is at 4/8 or more, change between Gears 2nd and 3rd. If it is maxed, change between Gears 2nd, 3rd and 4th (Boundman). Each Gear has a different Captain Ability: \n - __G2:__ Boosts ATK of all characters by 3x, slightly boosts chances of getting [RCV] orbs and makes [QCK] orbs \"beneficial\" to all characters. \n - __G3:__ Boosts ATK of all characters by 3.5x after 2 consecutive PERFECTs, boosts chances of getting [RCV] orbs and makes [STR] orbs \"beneficial\" to all characters \n - __G4 Boundman:__ Boosts ATK of all characters by 4x, reduce damage received by 20%, boosts chances of getting [RCV] orbs and makes [STR], [QCK] and [PSY] orbs \"beneficial\" to all characters \n - __G4 Tankman:__ Boosts own ATK by 4.25x, boosts ATK of all other characters by 4x, reduce damage received by 50% and makes [STR], [QCK] and [PSY] orbs \"beneficial\" to all characters.";
var g4v2special = "Deals 150x character's ATK in Typeless damage to all enemies, boosts ATK of all characters by 2x for 1 turn, makes [RCV] and [TND] orb \"beneficial\" for all characters for 3 turns. If Luffy is Captain or Friend/Guest Captain, transform into Gear 4th. \n If you use this special after consuming 10 [RCV] orbs, transform into Tankman, otherwise transform into Boundman";

var db5 = {
    
    2001: {//6+ [PSY] Law
        captain: "Boosts Slasher and Free Spirit character's ATK by 2.5x, by 3.5x after 3 consecutive PERFECTs, by 4x after 5 consecutive PERFECTs. Recover 1,000 HP at the end of each turn",
        specialName: "Sterben",
        sailor: {
            "base": "None",
            "level1": "When HP is below 10% at the start of the turn, boosts base RCV of Slasher and Free Spirit characters by 300",
            "level2": "Makes [INT], [RCV] and [TND] orbs beneficial for this character"
        },
        sailorNotes: "#{beneficial}",
        special: "Makes Damage and Health Cutting Specials of all characters bypass all defensive Buffs, deals 100x character's ATK in [PSY] damage to one enemy and reduces Special Cooldown of all characters by 1 turn",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Sailor Ability 1: When HP is below 10% at the start of the turn, boosts base RCV of Slasher and Free Spirit characters by 300" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 55" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
            { "description": "Acquire Sailor Ability 2: Makes [INT], [RCV] and [TND] orbs beneficial for this character" },
            { "description": "Boosts base HP by 95" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 3: Critical Hit" },
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
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
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
        ]
    },
    2002: {//Story Senor Pink
        captain: "Increases damage received by 1.2x. Reduces cooldown of all specials by 2 turns at the start of the fight and boosts ATK of all characters by 2.5x.",
        special: "Reduces Bind, Despair and Paralysis duration by 3 turns and deals several times character's ATK in Typeless damage to all enemies",
        specialNotes: "#{specialProportional : lower : ? * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "The Man Standing Tall",
    },
    2003: {//Story Doflamingo
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.5x",
        special: "Changes own orb into [STR], boosts own ATK by 2x for 1 turn and deals 30x character's ATK in Typeless damage to all enemies",
        specialName: "Bullet Thread",
    },
    2004: {//Story Doflamingo
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.5x. If you use \"Bullet Thread\" on this Doflamingo boosts ATK of Slasher characters by 2.75x instead for 3 turns",
        captainNotes: "Using Doflamingo's special will change his own captain boost to 2.75x. If both Doflamingo's specials are used, the total ATK boost will be 7.5625x",
        special: "Changes own orb into [STR], boosts own ATK by 2x for 1 turn and deals 30x character's ATK in Typeless damage to all enemies",
        specialName: "Bullet Thread",
    },
    2005: {//Story Sugar
        captain: "Boosts ATK of [PSY] characters by 2.25x, boosts HP of Slasher characters by 1.2x and boosts RCV of Free Spirit characters by 1.2x",
        special: "Deals 40x character's ATK in [PSY] damage to all enemies, boosts chances of getting [PSY] orbs for 3 turns",
        specialName: "Little Black Bears",
    },
    2006: {//V2 Shanks
        captain: "If your crew has 4 or more characters of the same Type, boosts ATK of all characters by 3.5x, by 2.75x otherwise and boosts HP of all characters by 1.3x.",
        special: "Adds 0.9x to Chain multiplier for 1 turn. If your crew has 4 or more characters of the same Type, boosts ATK of the Dominant Type characters by 2.25x and changes all orbs, including [BLOCK] orbs, to Dominant Type orbs",
        sailor: "If your crew has 4 or more characters of the same Type, boosts base ATK of the Dominant Type by 125",
        specialName: "Closing Declaration",
    },
    2007: {//V2 Shanks
        captain: "If your crew has 4 or more characters of the same Type, boosts ATK of all characters by 3.5x, by 2.75x otherwise and boosts HP of all characters by 1.3x.",
        special: "Adds 0.9x to Chain multiplier for 1 turn. If your crew has 4 or more characters of the same Type, boosts ATK of the Dominant Type characters by 2.25x and changes all orbs, including [BLOCK] orbs, to Dominant Type orbs",
        sailor: {
            "base": "If your crew has 4 or more characters of the same Type, boosts base ATK of the Dominant Type by 125",
            "level1": "Makes [PSY] orbs beneficial for all characters",
        },
        sailorNotes: "#{beneficial}",
        specialName: "Closing Declaration",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Acquire Potential 2: [PSY] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base HP by 105" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs beneficial for all characters" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 60",
                    "Level 2: Boosts base ATK by 90",
                    "Level 3: Boosts base ATK by 120",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 5%",
                    "Level 5: Reduce damage taken from [PSY] characters by 7%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 20% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, recovers 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "[INT] Characters",
                "description": [
                    "Level 1: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 8% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 9% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2008: {//Kuma
        captain: "Boosts ATK of [STR] and [INT] characters by 1.2x",
        special: "Cuts the current HP of each enemy by 10% and reduces Special Cooldown of your top row by 2 turns. If you are on a Treasure Map, boosts the Color Affinity of [STR] and [INT] characters depending on your Treasure Map Level for 1 turn",
        specialName: "Proof of a Human Weapon",
        specialNotes: "Level 1-10: 1.5x affinity boost<br\>Level 11-20: 1.75x affinity boost<br\>Level 21+: 2x affinity boost",
    },
    2009: {//Kuma
        captain: "Boosts ATK of [STR] and [INT] characters by 1.5x and their HP by 1.2x",
        special: "Cuts the current HP of each enemy by 10% and reduces Special Cooldown of your top row by 2 turns. If you are on a Treasure Map, boosts the Color Affinity of [STR] and [INT] characters depending on your Treasure Map Level for 1 turn",
        specialName: "Proof of a Human Weapon",
        specialNotes: "Level 1-10: 1.5x affinity boost<br\>Level 11-20: 1.75x affinity boost<br\>Level 21+: 2x affinity boost",
    },
    2010: {//Monet
        captain: "Boosts ATK of Free Spirit characters by 1.2x",
        special: "Deals 50,000 Fixed damage to one enemy and reduces Bind and enemies' Percent Damage Reduction duration by 3 turns",
        specialName: "Fangs of Crushing Ice",
    },
    2011: {//Monet
        captain: "Boosts ATK of Free Spirit characters by 1.5x and their RCV by 1.2x",
        special: "Deals 50,000 Fixed damage to one enemy and reduces Bind and enemies' Percent Damage Reduction duration by 3 turns",
        specialName: "Fangs of Crushing Ice",
    },
    2012: {//Limited Bonney
        captain: "Boosts ATK of Free Spirit characters by 3.25x if they have a [RCV] orb, by 2x otherwise, boosts chances of getting [RCV] orbs and reduces RCV of all characters by 80%",
        special: [
            {
                "description": "Reduces Bind and Paralysis duration by 3 turns and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your Captain is a Free Spirit Character, reduces RCV DOWN and Blindness duration by 5 turns",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Reduces Bind and Paralysis duration by 10 turns, recovers 50x character's RCV in HP and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your Captain is a Free Spirit Character, reduces RCV DOWN, Silence and Blindness duration by 5 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialnotes: "#{silence}",
        specialName: "A Small Dine and Dash",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    2013: {//Limited Bonney
        captain: "Boosts ATK of Free Spirit characters by 3.25x if they have a [RCV] orb, by 2.25x otherwise, boosts chances of getting [RCV] orbs, makes [RCV] orbs beneficial for Free Spirit characters and reduces RCV of all characters by 80%",
        captainNotes: "#{beneficial}",
        special: [
            {
                "description": "Reduces Bind and Paralysis duration by 3 turns and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your Captain is a Free Spirit Character, reduces RCV DOWN and Blindness duration by 5 turns",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Reduces Bind and Paralysis duration by 10 turns, recovers 50x character's RCV in HP and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your Captain is a Free Spirit Character, reduces RCV DOWN, Silence and Blindness duration by 5 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialnotes: "#{silence}",
        specialName: "A Small Dine and Dash",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "Makes [RCV] orbs beneficial for all characters",
        },
        sailorNotes: "#{silence}<br>#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs beneficial for all characters" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
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
        ],
    },
    2014: {//Raid Lucci
        captain: "Boosts ATK of Fighter characters by 2.25x and set crew's RCV to 0. If you defeated an enemy in the last turn, boosts ATK of Fighter characters by 2.75x instead and boosts ATK of all other characters by 1.2x",
        special: "Deals 100x character's ATK in [INT] damage to one enemy and if there is only one enemy on the stage when the special is activated, delays that enemy for 1 turn and boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Sai Dai Rin: Rokuogan (Ultimate Radius: Rokuogan)",
    },
    2015: {//Raid Lucci
        captain: "Boosts ATK of Fighter characters by 2.5x and set crew's RCV to 0. If you defeated an enemy in the last turn, boosts ATK of Fighter characters by 3x instead and boosts ATK of all other characters by 1.2x",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Deals 100x character's ATK in [INT] damage to one enemy and if there is only one enemy on the stage when the special is activated, delays that enemy for 1 turn and boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Sai Dai Rin: Rokuogan (Ultimate Radius: Rokuogan)",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Fighter characters by 100",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 55" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Fighter characters by 100" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers"
                ]
            },
        ]
    },
    2016: {//Coliseum Diamante
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Deals 20x Character's ATK in [PSY] damage to all enemies and changes [BLOCK] orbs into Matching orbs. If HP is above 50% at the time the special is activated, boosts ATK of Driven characters by 2x for 1 turn, 1.5x otherwise",
        specialName: "Half Moon Glaive [Neo]",
    },
    2017: {//Coliseum Diamante
        captain: "Boosts ATK of Driven characters by 2.25x and boosts HP of Striker and Slasher characters by 1.5x",
        special: "Deals 20x Character's ATK in [PSY] damage to all enemies and changes [BLOCK] orbs into Matching orbs. If HP is above 50% at the time the special is activated, boosts ATK of Driven characters by 2x for 1 turn, 1.5x otherwise",
        specialName: "Half Moon Glaive [Neo]",
    },
    2018: {//FN Shanks
        captain: "Boosts ATK of Free Spirit characters by 1.75x",
        special: "Reduces Bind and Despair duration by 2 turns, if your Captain is a Free Spirit Character changes [BLOCK] orbs into Matching orbs",
        specialName: "Treasured Trust",
    },
    2019: {//FN Shanks
        captain: "Boosts ATK of Free Spirit characters by 2x and their HP by 1.2x at the start of the chain, by 2.6x after the 3rd PERFECT in a row",
        special: "Reduces Bind and Despair duration by 2 turns. If your Captain is a Free Spirit character, changes [BLOCK] orbs into Matching orbs",
        specialName: "Treasure Trust",
    },
    2020: {//Makino
        captain: "Boosts ATK of [PSY] and [INT] characters by 1.5x",
        special: "Changes the orbs in the top row into [INT] orbs, changes the orbs in the middle row into [RCV] orbs, changes the orbs in the bottom row into [PSY] orbs and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Taste of \"Treasure Payment\"",
    },
    2021: {//Makino
        captain: "Boosts ATK of [PSY] and [INT] characters by 2.5x if they have a Matching orb, by 1.75x otherwise and their HP by 1.2x",
        special: "Changes the orbs in the top row into [INT] orbs, changes the orbs in the middle row into [RCV] orbs, changes the orbs in the bottom row into [PSY] orbs and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Taste of \"Treasure Payment\"",
    },
    2022: {//Akainu V2
        captain: "Boosts ATK of [STR] and [INT] characters by 3.25x and makes [STR] and [INT] orbs beneficial for [STR] and [INT] characters. Deals up to 500x character's ATK in Typeless damage to one enemy at the end of each turn depending on how many PERFECTs scored that turn.",
        captainNotes: "End of turn damage is based on how many PERFECTs you hit this turn: 0 PERFECTs - 0x ATK; 1 PERFECT - 5x ATK; 2 PERFECTs - 13x ATK; 3 PERFECTs - 32x ATK; 4 PERFECTs - 80x ATK; 5 PERFECTs - 200x ATK; 6 PERFECTs - 500x ATK<br>#{beneficial}",
        special: "Randomizes all orbs, including [BLOCK] orbs, into either [STR] or [INT] orbs and amplifies the effect of orbs on [STR] and [INT] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Scorched Earth",
    },
    2023: {//Akainu V2
        captain: "Boosts ATK of [STR] and [INT] characters by 3.25x and makes [STR] and [INT] orbs beneficial for [STR] and [INT] characters. Deals up to 500x character's ATK in Typeless damage to one enemy at the end of each turn depending on how many PERFECTs scored that turn.",
        captainNotes: "End of turn damage is based on how many PERFECTs you hit this turn: 0 PERFECTs - 0x ATK; 1 PERFECT - 5x ATK; 2 PERFECTs - 13x ATK; 3 PERFECTs - 32x ATK; 4 PERFECTs - 80x ATK; 5 PERFECTs - 200x ATK; 6 PERFECTs - 500x ATK<br>#{beneficial}",
        special: "Randomizes all orbs, including [BLOCK] orbs, into either [STR] or [INT] orbs and amplifies the effect of orbs on [STR] and [INT] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Scorched Earth",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of [STR] and [INT] characters by 100",
            "level2": "Makes [PSY] and [QCK] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of [STR] and [INT] characters by 100" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 35" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] and [QCK] orbs beneficial for this character" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 5%",
                    "Level 5: Reduce damage taken from [PSY] characters by 7%"
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers"
                ]
            },
        ]
    },
    2024: {//Aokiji V2
        captain: "Boosts ATK of [QCK] and [PSY] characters by 3.25x and their HP by 1.35x at the start of the chain and makes [QCK] and [PSY] orbs beneficial for [QCK] and [PSY] characters. Boosts ATK of [QCK] and [PSY] characters by 4.0625x following a chain of [PSY] > [PSY] > [QCK] attacks no lower than Good",
        captainNotes: "#{beneficial}",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into either [QCK] or [PSY] orbs and boosts ATK of [QCK] and [PSY] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Frozen Sea",
    },
    2025: {//Aokiji V2
        captain: "Boosts ATK of [QCK] and [PSY] characters by 3.25x and their HP by 1.35x at the start of the chain and makes [QCK] and [PSY] orbs beneficial for [QCK] and [PSY] characters. Boosts ATK of [QCK] and [PSY] characters by 4.0625x following a chain of [PSY] > [PSY] > [QCK] attacks no lower than Good",
        captainNotes: "#{beneficial}",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into either [QCK] or [PSY] orbs and boosts ATK of [QCK] and [PSY] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Frozen Sea",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP and ATK of [QCK] and [PSY] characters by 100",
            "level2": "Makes [STR] and [INT] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP and ATK of [QCK] and [PSY] characters by 100" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 2: Makes [STR] and [INT] orbs beneficial for this character" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
        ],
        potential: [
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers"
                ]
            },
        ]
    },
    2026: {//Hina
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2x",
        special: "Delays all enemies for 1 turn. If your Captain is a [QCK] or [PSY] character, boosts the Color Affinity of [QCK] and [PSY] characters by 2x for 1 turn",
        specialNotes: "#{colorAffinity : 2}",
        specialName: "Kimino Sleeve Cage: Lock",
        sailor: "Boosts base ATK of [PSY] and [QCK] characters by 50",
    },
    2027: {//Hina
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2.25x and their RCV by 1.2x",
        special: "Delays all enemies for 1 turn. If your Captain is a [QCK] or [PSY] character, boosts the Color Affinity of [QCK] and [PSY] characters by 2x for 1 turn",
        specialNotes: "#{colorAffinity : 2}",
        specialName: "Kimino Sleeve Cage: Lock",
        sailor: {
            "base": "Boosts base ATK of [PSY] and [QCK] characters by 50",
            "level1": "If this character has a [PSY] orb and you hit a PERFECT with her, keep her [PSY] orb for the next turn",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Sailor Ability 1: If this character has a [PSY] orb and you hit a PERFECT with her, keep her [PSY] orb for the next turn" },
            { "description": "Boosts base HP by 45" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
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
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
        ],
        support: [
            {
                "Characters": "Smoker, Fullbody and Django",
                "description": [
                    "Level 1: Adds 4% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 2: Adds 6% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 3: Adds 7% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 4: Adds 8% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 5: Adds 10% of this character's base ATK and RCV to the supported character's base ATK and RCV"
                ]
            }
        ]
    },
    2028: {//Sengoku
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [QCK] characters by 2x",
        special: "Reduces Despair and ATK DOWN duration by 4 turns. If your crew has 4 or more [QCK] or [PSY] characters, amplifies the effect of orbs by 2x for 1 turn and makes [RCV] and [TND] orbs beneficial for all characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Instant Suppression",
        sailor: "Makes [DEX] orbs beneficial for this character",
        sailorNotes: "#{beneficial}",
    },
    2029: {//Sengoku
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [QCK] characters by 2.5x and their HP by 1.2x",
        special: "Reduces Despair and ATK DOWN duration by 4 turns. If your crew has 4 or more [QCK] or [PSY] characters, amplifies the effect of orbs by 2x for 1 turn and makes [RCV] and [TND] orbs beneficial for all characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Instant Suppression",
        sailor: {
            "base": "Makes [DEX] orbs beneficial for this character",
            "level1": "Makes [PSY] orbs beneficial for [QCK] characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs beneficial for [QCK] characters" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 25% chance to deal 4% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 35% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
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
    2030: {//Brannew
        captain: "Boosts ATK of [STR] and [INT] characters by 2x",
        special: "Reduces enemies' Threshold Damage Reduction and Percent Damage Reduction duration by 4 turns and makes [QCK], [PSY], [RCV] and [TND] orbs beneficial for [STR] and [INT] characters for 3 turns",
        specialNotes: "#{beneficial}",
        specialName: "Reporting on a Bizarre Incident",
        sailor: "Boosts base ATK, HP and RCV for [INT] characters by 50",
    },
    2031: {//Brannew
        captain: "Boosts ATK of [STR] and [INT] characters by 2.5x and reduces damage received by 7%",
        special: "Reduces enemies' Threshold Damage Reduction and Percent Damage Reduction duration by 4 turns and makes [QCK], [PSY], [RCV] and [TND] orbs beneficial for [STR] and [INT] characters for 3 turns",
        specialNotes: "#{beneficial}",
        specialName: "Reporting on a Bizarre Incident",
        sailor: {
            "base": "Boosts base ATK, HP and RCV for [INT] characters by 50",
            "level1": "Boosts base ATK of Slasher characters by 30",
        },
        limit: [
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Slasher characters by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 2: Critical Hit" },
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
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2032: {//Luffy Tankman
        captain: "Boosts ATK and HP of [PSY] characters by 0.5x",
        special: "Boosts ATK of all characters by 1.5x for 1 turn. If your Captain is a [PSY] character, amplifies the effect of orbs by 1.5x for 1 turn, adds 0.3x to Chain multiplier for 1 turn, adds 20x character's ATK as Additional Typeless Damage for 1 turn and reduces damage received by 40% for 1 turn.",
        specialName: "The Heavy Tank's Critical Breakthrough",
    },
    2033: {//Luffy Tankman
        captain: "Boosts ATK of [PSY] characters by 2.5x and their HP by 1.5x",
        special: "Boosts ATK of all characters by 1.5x for 1 turn. If your Captain is a [PSY] character, amplifies the effect of orbs by 1.5x for 1 turn, adds 0.3x to Chain multiplier for 1 turn, adds 20x character's ATK as Additional Typeless Damage for 1 turn and reduces damage received by 40% for 1 turn.",
        specialName: "The Heavy Tank's Critical Breakthrough",
    },
    2034: {//Kizaru 6+
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of all characters by 2x and boosts RCV of all characters by 1.35x. If you use \"Yasakani no Magatama: Divine Light\" in this turn boosts ATK of all characters by 3.5x instead.",
        special: [
            {
                "description": "For Shooter and Slasher characters, randomizes all non-Matching orbs. Recovers 6x character's RCV in HP. Deals 20 hits of random Typeless damage to random enemies.",
                "cooldown": [ 9, 6 ],
            },
            {
                "description": "Changes all orbs on Shooter and Slasher characters into Matching orbs. Recovers 15x character's RCV in HP. Deals 20 hits of large random Typeless damage to random enemies.",
                "cooldown": [ 15, 12 ],
            },
        ],
        specialNotes: "#{randomHits : 20}<br>#{random : ? : ? : for each hit on Stage 1}<br>#{random : ? : ? : for each hit on Stage 2}<br>#{stages}",
        specialName: "Yasakani no Magatama: Divine Light",
        sailor: {
            "base": "None",
            "level1": "Completely resists Paralysis on this character",
            "level2": "Makes [PSY] orbs beneficial for Shooter and Slasher characters",
        },
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Sailor Ability 1: Completely resists Paralysis on this character" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] orbs beneficial for Shooter and Slasher characters" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
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
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers"
                ]
            },
        ]
    },
    2035: {//Buggy 6+
        captain: "Boosts ATK of characters with cost 40 or less by 1.75x and reduces the HP and ATK of characters with cost 41 and greater by 0.5x. Guarantees duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other additional drop captains, giving you two chances of getting an extra drop.",
        special: "Boosts ATK of characters with cost 40 or less by 2x for 2 turns",
        specialName: "The Greatest Villain's Bluff",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of characters with a cost of 40 or less by 50",
            "level2": "Makes [INT] orbs beneficial for all characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: Pinch Healing" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of characters with a cost of 40 or less by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Sailor Ability 2: Makes [INT] orbs beneficial for all characters" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 110" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
        ],
        potential: [
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
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 20% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 30% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 40% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers"
                ]
            },
        ]
    },
    2036: {//Jesus Burgess
        captain: "Boosts ATK of Fighter characters by 2.25x",
        special: "Cuts the current HP of each enemy by 7% and boosts ATK of Fighter characters by 1.75x for a variable amount of turns",
        specialNotes: "Fighter ATK buff duration is equal to the amount of enemies on the stage at the time the special was activated",
        specialName: "Galleon Lariat",
    },
    2037: {//Jesus Burgess
        captain: "Boosts ATK of Fighter characters by 2.5x at the start of the chain, by 3.75x after scoring 4 PERFECTs in a row.",
        special: "Cuts the current HP of each enemy by 7% and boosts ATK of Fighter characters by 1.75x for a variable amount of turns",
        specialNotes: "Fighter ATK buff duration is equal to the amount of enemies on the stage at the time the special was activated",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Fighter characters by 50",
            "level2": "Makes [INT] orbs beneficial for Fighter characters",
        },
        specialName: "Galleon Lariat",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Fighter characters by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 2: Makes [INT] orbs beneficial for Fighter characters" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
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
        potentialNotes: "#{enrage}"
    },
    2038: {//Boa Hancock
        captain: "Boosts ATK of [QCK] and Free Spirit characters by 1.5x",
        captainNotes: "Attack boost stacks, so a [QCK] Free Spirit character has a 2.25x ATK",
        special: "Recovers 3,960 HP, reduces enemies' ATK Up and End of Turn Damage/Percent Cut Buff duration by 7 turns and reduces damage received by 80% for 1 turn.",
        sailor: {
            "base": "Makes [TND] orbs beneficial for all characters if your Captain is a [QCK] or [PSY] character",
            "base2": "Boosts base ATK, HP and RCV of [QCK] and [PSY] characters by 40",
        },
        specialName: "Glorious Scenery",
    },
    2039: {//Boa Hancock
        captain: "Boosts ATK of [QCK] and Free Spirit characters by 1.75x",
        captainNotes: "Attack boost stacks, so a [QCK] Free Spirit character has a 3.0625x ATK",
        special: "Recovers 3,960 HP, reduces enemies' ATK Up and End of Turn Damage/Percent Cut Buff duration by 7 turns and reduces damage received by 80% for 1 turn.",
        sailor: {
            "base": "Makes [TND] orbs beneficial for all characters if your Captain is a [QCK] or [PSY] character",
            "base2": "Boosts base ATK, HP and RCV of [QCK] and [PSY] characters by 40",
        },
        sailorNotes: "#{beneficial}",
        specialName: "Glorious Scenery",
    },
    2040: {//Whitebeard
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x",
        special: "Randomizes all orbs, into either [G] or [RCV] orbs and boosts own ATK by 2.25x. If your Captain is a Fighter character, locks orbs for 1 turn.",
        sailor: {
            "base": "Makes [RCV] orbs beneficial for all characters if your Captain is a Fighter character",
            "base2": "Boosts base ATK, HP and RCV of Fighter characters by 40",
        },
        sailorNotes: "#{beneficial}",
        specialName: "The Gentle Breeze of the Feast",
    },
    2041: {//Whitebeard
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2.25x and their HP and RCV by 1.25x",
        special: "Randomizes all orbs, into either [G] or [RCV] orbs and boosts own ATK by 2.25x. If your Captain is a Fighter character, locks orbs for 1 turn.",
        sailor: {
            "base": "Makes [RCV] orbs beneficial for all characters if your Captain is a Fighter character",
            "base2": "Boosts base ATK, HP and RCV of Fighter characters by 40",
        },
        specialName: "The Gentle Breeze of the Feast",
    },
    2042: {//Kizaru
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Free Spirit and Shooter characters by 1.75x",
        special: "Changes adjacent orbs into Matching Orbs. If your crew has 2 or more characters of the same Type, reduces Special Cooldown of characters of each Type by 1 turn.",
        specialNotes: "Cooldown Reduction works for any Type that you have 2 or more characters of on your crew",
        sailor: "Boosts base ATK, HP and RCV of all characters by 20",
        specialName: "The Afterglow of a Fight",
    },
    2043: {//Kizaru
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Free Spirit and Shooter characters by 2.25x and their HP by 1.2x",
        special: "Changes adjacent orbs into Matching Orbs. If your crew has 2 or more characters of the same Type, reduces Special Cooldown of characters of each Type by 1 turn.",
        specialNotes: "Cooldown Reduction works for any Type that you have 2 or more characters of on your crew",
        sailor: "Boosts base ATK, HP and RCV of all characters by 20",
        specialName: "The Afterglow of a Fight",
    },
    2044: {//Ben Beckman
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Cerebral characters by 1.5x",
        special: "Boosts ATK of Cerebral characters by 1.5x for 1 turn and reduces Special Cooldown of Cerebral characters by 1 turn",
        specialName: "Intense Gun Strike",
    },
    2045: {//Lucky Roux
        captain: "Boosts ATK of Shooter characters by 1.75x and recovers 1x character's RCV in HP at the end of each turn",
        special: "Recovers 3x character's RCV in HP after the end of each turn for 10 turns",
        specialName: "Constantly Eating Meat",
    },
    2046: {//Yasopp
        captain: "Boosts ATK of Shooter characters by 2.25x and their HP by 1.2x",
        special: "Deals 20x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers. If your crew has 4 or more characters of the same Type, amplifies the effect of orbs for the Dominant Type by 1.75x for 1 turn.",
        specialName: "Exquisite Aim",
        specialNotes: "#{ignoreBarrier}",
        sailor: "If this character has a [STR] orb and you hit a PERFECT with him, keep his [STR] orb for the next turn",
    },
    2047: {//Koala
        captain: "Boosts ATK of Fighter characters by 2.5x if they have a Matching orb, by 2x otherwise",
        special: "Deals 20x character's ATK in [QCK] damage to one enemy. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs for Fighter characters by 2x for 1 turn and changes all orbs, including [BLOCK] orbs, on Fighter characters into Matching orbs",
        specialName: "Fishman Karate Mid-Air Roundhouse Kick",
        sailor: "Boosts own base ATK by 250 if this character is the last in the chain to attack",
    },
    2048: {//Koala
        captain: "Boosts ATK of Fighter characters by 3.25x if they have a Matching orb, by 2x otherwise",
        special: "Deals 20x character's ATK in [QCK] damage to one enemy. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs for Fighter characters by 2x for 1 turn and changes all orbs, including [BLOCK] orbs, on Fighter characters into Matching orbs",
        specialName: "Fishman Karate Mid-Air Roundhouse Kick",
        sailor: {
            "base": "Boosts own base ATK by 250 if this character is the last in the chain to attack",
            "level1": "Makes [QCK] orbs beneficial for Fighter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs beneficial for Fighter characters" },
            { "description": "Acquire Potential 2: Critical Hit" },
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
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
         ],
        potentialNotes: "#{enrage}"
    },
    2049: {//Moria
        captain: "Boosts ATK of Powerhouse and Fighter characters by 3x, reduces crew's current HP by ?% at the end of each turn, reduces his own ATK multiplier by ?x at the end of each turn",
        special: "Locks the chain multiplier at 3x for 1 turn and reduces Increase Damage Taken duration by 5 turns. If enemies are delayed at the time the special was activated, deals 1,000,000 Fixed damage to all enemies",
        specialName: "Resurrected Nightmare Attack",
        sailor: "Makes [INT] orbs beneficial for Powerhouse characters",
        sailorNotes: "#{beneficial}",
    },
    2050: {//Moria
        captain: "Boosts ATK of Powerhouse and Fighter characters by 3.5x, reduces crew's current HP by 5% at the end of each turn, reduces his own ATK multiplier by 0.07x at the end of each turn",
        special: "Locks the chain multiplier at 3x for 1 turn and reduces Increase Damage Taken duration by 5 turns. If enemies are delayed at the time the special was activated, deals 1,000,000 Fixed damage to all enemies",
        specialName: "Resurrected Nightmare Attack",
        sailorNotes: "#{beneficial}",
        sailor: {
            "base": "Makes [INT] orbs beneficial for Powerhouse characters",
            "level1": "If your Captain is a Powerhouse character, completely removes Blindness duration completely",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: If your Captain is a Powerhouse character, completely removes Blindness duration completely" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
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
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 3 turns at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 5 turns at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 7 turns at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 9 turns at the start of the fight"
                ]
            },
        ]
    },
    2051: {//Pica
        captain: "If you have 5 or more Fighter characters in your crew, boosts ATK of Fighter characters by 2x and reduces damage received by 5%",
        special: "Deals 35x character's ATK in [QCK] damage to one enemy and boosts ATK of Fighter characters by 1.75x for 2 turns. If Pica is your Captain or Friend/Guest Captain, Reduces damage received by 20% for 1 turn. If he is a Sailor, Increases damage received by 2x for 1 turn instead.",
        specialName: "Bitestone",
    },
    2052: {//Pica
        captain: "If you have 5 or more Fighter characters in your crew, boosts ATK of Fighter characters by 2.5x and their HP by 1.2 and reduces damage received by 10%",
        special: "Deals 35x character's ATK in [QCK] damage to one enemy and boosts ATK of Fighter characters by 1.75x for 2 turns. If Pica is your Captain or Friend/Guest Captain, Reduces damage received by 20% for 1 turn. If he is a Sailor, Increases damage received by 2x for 1 turn instead.",
        specialName: "Bitestone",
    },
    2053: {//Bastille
        captain: "Boosts ATK of [INT] characters by 2.5x",
        special: "Deals 75x character's ATK in [INT] damage to all enemies",
        specialName: "Double Edge Long Blade Slash",
    },
    2054: {//Headcracker Doll
        captain: "Boosts ATK of all characters by 1.75x, reduces crew's RCV to 0 and protects from defeat as long as HP is above 50%",
        special: "If there are 3 enemies or more on the stage when the special is activated, deals 50,000 Fixed damage to all enemies",
        specialName: "Unrelentless Physical Work",
    },
    2055: {//Kyuin
        captain: "Boosts ATK of Powerhouse and Striker characters by 2.25x",
        special: "Cuts the current HP of each enemy by 10% and recovers 10% of crew's MAX HP.",
        specialName: "Cruel Suction",
    },
    2056: {//Ichiji
        captain: "Boosts ATK of Fighter characters by 2.5x and reduces their RCV to 0",
        special: "Deals 15x character's ATK in [INT] damage to one enemy, changes top row orbs into [PSY] orbs and makes [PSY] orbs beneficial for all characters for 1 turn.",
        specialName: "Scornful Gang Up (First Son)",
        specialNotes: "#{beneficial}",
        sailor: "Makes [PSY] orbs beneficial for this character",
        sailorNotes: "#{beneficial}",
    },
    2057: {//Niji
        captain: "Boosts ATK of Fighter characters by 1.75x and their HP by 1.2x",
        special: "Deals 15x character's ATK in [DEX] damage to one enemy, changes the orbs in the middle row into [PSY] orbs and boosts ATK of characters with 15 cost or less by 1.75x for 1 turn.",
        specialName: "Scornful Gang Up (Second Son)",
        sailor: "Makes [PSY] orbs beneficial for this character",
        sailorNotes: "#{beneficial}",
    },
    2058: {//Yonji
        captain: "Boosts ATK of Fighter characters by 1.25x and their HP by 1.5x",
        special: "Deals 15x character's ATK in [QCK] damage to one enemy, changes the orbs in the bottom row into [PSY] orbs and Amplifies the effect of orbs for characters with 15 cost or less by 1.75x for 1 turn.",
        specialName: "Scornful Gang Up (Fourth Son)",
        sailor: "Makes [PSY] orbs beneficial for this character",
        sailorNotes: "#{beneficial}",
    },
    2059: {//Beckman
        captain: "Boosts ATK of Cerebral characters by 1.2x",
        special: "Reduces enemies' Increased Defense duration by 3 turns, changes own orb into [STR] and amplifies the effect of orbs by 1.5x for 1 turn. If you are on a Treasure Map, locks the chain multiplier depending on your Treasure Map Level for 1 turn",
        specialName: "Trial of Annihilation",
        specialNotes: "Level 1-10: 2.5x chain lock<br\>Level 11-20: 2.75x chain lock<br\>Level 21+: 3x chain lock",
    },
    2060: {//Beckman
        captain: "Boosts ATK of Cerebral characters by 1.5x and their HP by 1.2x",
        special: "Reduces enemies' Increased Defense duration by 3 turns, changes own orb into [STR] and amplifies the effect of orbs by 1.5x for 1 turn. If you are on a Treasure Map, locks the chain multiplier depending on your Treasure Map Level for 1 turn",
        specialName: "Trial of Annihilation",
        specialNotes: "Level 1-10: 2.5x chain lock<br\>Level 11-20: 2.75x chain lock<br\>Level 21+: 3x chain lock",
    },
    2061: {//Apoo
        captain: "Boosts ATK of Free Spirit characters by 1.2x",
        special: "Reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 4 turns and reduces damage received from [DEX] enemies by 80%",
        specialName: "Noise & Escape",
    },
    2062: {//Apoo
        captain: "Boosts ATK of Free Spirit characters by 1.5x and their HP by 1.2x",
        special: "Reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 4 turns and reduces damage received from [DEX] enemies by 80%",
        specialName: "Noise & Escape",
    },
    2063: {//Kizaru
        captain: "Boosts ATK of [DEX], [PSY] and [INT] characters by 1.5x",
        special: "Cuts the current HP of one enemy by 20%, locks all orbs for 1 turn and boosts ATK of characters with the same Type as your Captain by 1.75x for 3 turns",
        specialName: "Ama no Murakumo",
    },
    2064: {//Kizaru
        captain: {
            "base": "Boosts ATK of [DEX], [PSY] and [INT] characters by 2x",
            "level1": "Boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x",
            "level2": "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x",
            "level3": "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.1x",
            "level4": "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.2x",
            "level5": "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.3x",
            "level6": "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.5x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.5x",
        },
        special: "Cuts the current HP of one enemy by 20%, locks all orbs for 1 turn and boosts ATK of characters with the same Type as your Captain by 1.75x for 3 turns",
        specialName: "Ama no Murakumo",
        sailor: {
            "base": "None",
            "level1": "Restores his own special cooldown by 3 turns when it is rewinded",
            "level2": "Makes [DEX] orbs beneficial for all characters",
        },
        sailorNotes: "#{rewind : 1}<br/>#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Acquire new Captain Ability: Boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x" },
            { "description": "Acquire Sailor Ability 1: Restores his own special cooldown by 3 turns when it is rewinded" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.1x" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 55" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.2x" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 55" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs beneficial for all characters" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.3x" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire new Captain Ability: Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [DEX], [PSY] and [INT] characters by 2.5x and if there is a [DEX], [PSY] and [INT] character in your crew, boosts chain multiplier by 1.5x" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
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
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 20% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 25% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 35% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 50% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
         ],
    },
    2065: {//EXP Pudding
        captain: "Boosts ATK of all characters by 2.25x and boosts EXP and amount of Beli received by 1.2x",
        captainNotes: "EXP and Beli boost does not take effect if she becomes your captain in the middle of the adventure.",
        special: "Changes Badly Matching orbs into Matching orbs, randomizes non-Matching orbs and recovers 2,000 HP",
        specialName: "Complex Feelings",
    },
    2066: {//6+ Jinbe
        captain: "Boosts ATK of Fighter characters by 3x, their HP by 1.5x and reduces damage received by 7%",
        specialName: "Shark Fist Tile Breaker: Great Earth Wave",
        special: "Deals 60x character's ATK in [INT] damage to all enemies, changes all orbs on Fighter characters into Matching orbs and reduces enemies' Percent Damage Reduction and Increased Defense duration by 5 turns.",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] and [TND] orbs beneficial for this character",
            "level2": "Restores his own special cooldown completely when it is rewinded",
        },
        sailorNotes: "#{beneficial}<br>#{rewind : all}",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] and [TND] orbs beneficial for this character" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Restores his own special cooldown completely when it is rewinded" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
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
        ]
    },
    2067: {//Tashigi
        captain: "Boosts ATK of Slasher characters by 2x at the start of the chain, by 2.5x after scoring 3 PERFECTs in a row and recovers 1.25x character's RCV in HP at the end of each turn",
        special: "Reduces ATK DOWN and Increase Damage Taken duration by 5 turns, changes [BLOCK], [STR] and [QCK] orbs into Matching orbs and locks the chain multiplier at 2.75x for 3 turns",
        specialName: "Spinning Jump Attack",
        sailor: "Boosts base ATK, HP and RCV for Slasher characters by 50",
    },
    2068: {//Tashigi
        captain: "Boosts ATK of Slasher characters by 2.75x at the start of the chain, by 3.4375x after scoring 3 PERFECTs in a row and recovers 1.25x character's RCV in HP at the end of each turn",
        special: "Reduces ATK DOWN and Increase Damage Taken duration by 5 turns, changes [BLOCK], [STR] and [QCK] orbs into Matching orbs and locks the chain multiplier at 2.75x for 3 turns",
        specialName: "Spinning Jump Attack",
        sailor: {
            "base": "Boosts base ATK, HP and RCV for Slasher characters by 50",
            "level1": "Makes [PSY] orbs beneficial for Slasher characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs beneficial for Slasher characters" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 2% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 3 turns at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 5 turns at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 7 turns at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 10 turns at the start of the fight"
                ]
            },
        ],
        support: [
            {
                "Characters": "Smoker and Zoro",
                "description": [
                    "Level 1: Once per adventure, when you are inflicted with ATK DOWN, changes [STR] orbs on all characters into Matching Orbs",
                    "Level 2: Once per adventure, when you are inflicted with ATK DOWN, changes [STR] and [QCK] orbs on all characters into Matching Orbs",
                    "Level 3: Once per adventure, when you are inflicted with ATK DOWN, reduces ATK DOWN duration by 1 turn and changes [STR] and [QCK] orbs on all characters into Matching Orbs",
                    "Level 4: Once per adventure, when you are inflicted with ATK DOWN, reduces ATK DOWN duration by 1 turn and changes [STR] and [QCK] orbs on all characters into Matching Orbs",
                    "Level 5: Once per adventure, when you are inflicted with ATK DOWN, reduces ATK DOWN duration by 2 turns and changes [STR] and [QCK] orbs on all characters into Matching Orbs"
                ]
            }
        ]
    },
    2069: {//Neo Boa
        captain: "Boosts ATK of Free Spirit characters by 2x",
        specialName: "Slave Arrow [Neo]",
        special: "Locks the chain multiplier at 2.5x for 3 turns, delays all enemies for 1 turn and changes own orb and the Captain's orb into Matching"
    },
    2070: {//Neo Boa
        captain: "Boosts ATK and HP of Free Spirit characters by 2x",
        specialName: "Slave Arrow [Neo]",
        special: "Locks the chain multiplier at 2.5x for 3 turns, delays all enemies for 1 turn and changes own orb and the Captain's orb into Matching"
    },
    2071: {//Anni Chopper
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "Reduces the defense of all enemies by 80% for 1 turn, reduces enemies' Threshold Damage Reduction and Enrage duration by 5 turns, makes [INT], [PSY] and [DEX] orbs beneficial for all characters for 1 turn and adds 0.6x to Chain multiplier for 1 turn.",
        sailor: "Changes all orbs into [RCV] orbs at the start of the fight",
        specialName: "A Man's Stratagem to Victory",
    },
    2072: {//Anni Chopper
        captain: "Recovers 5x character's RCV in HP at the end of each turn",
        special: "Reduces the defense of all enemies by 80% for 1 turn, reduces enemies' Threshold Damage Reduction and Enrage duration by 5 turns, makes [INT], [PSY] and [DEX] orbs beneficial for all characters for 1 turn and adds 0.6x to Chain multiplier for 1 turn.",
        specialName: "A Man's Stratagem to Victory",
        sailor: {
            "base": "Changes all orbs into [RCV] orbs at the start of the fight",
            "level1": "Makes [INT] orbs beneficial for Fighter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs beneficial for Fighter characters" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
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
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 2 turns at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 3 turns at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 4 turns at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 5 turns at the start of the fight"
                ]
            },
        ],
        support: [
            {
                "Characters": "Luffy, Nami and Carrot",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    
    2073: {//V4 Luffy
        captain: g4v2captain,
        captainnotes: "In order to increase Gear Power Gauge level, you must hit a PERFECT with Luffy or consume [RCV] orbs. MAX Gear Power Gauge level is 8. Hitting a perfect with Luffy and consuming a [RCV] orb increases Gauge level by 1. If Luffy gets swapped out in battle, Gear Gauge Power will go to 0. While in Gear 4, Luffy will stay in that form until Gauge Power goes to 0. Attacking with any character while in Gear 4 reduces Gear Power Gauge by 3.",
        special: g4v2special,
        specialNotes: "If you use this special after consuming 10 [RCV] orbs since the last time this character used his special, transform into Tankman, otherwise transform into Boundman",
        specialName: "Gomu Gomu no Kong Organ",
    },
   
    2074: {//V4 Luffy
        //captain: "<b>Always Active: </b>Boosts HP of all characters by 1.25x, boosts chances of getting [STR], [QCK], [PSY] orbs.<br><b>Gear 2 Captain: </b>Boosts ATK of all characters by 3x, slightly boosts chances of getting [RCV] orbs and makes [QCK] orbs beneficial for all characters<br><b>Gear 3 Captain: </b>Boosts ATK of all characters by 3.5x after 2 consecutive PERFECTs, boosts chances of getting [RCV] orbs and makes [STR] orbs beneficial for all characters<br><b>Gear 4 - Boundman Captain: </b>Boosts ATK of all characters by 4x, reduce damage received by 20%, boosts chances of getting [RCV] orbs and makes [STR], [QCK] and [PSY] orbs beneficial for all characters<br><b>Gear 4 - Tankman Captain: </b>Boosts own ATK by 4.25x, boosts ATK of all other characters by 4x, reduce damage received by 50% and makes [STR], [QCK] and [PSY] orbs beneficial for all characters<br><b>Action: </b>Based on how full Gear Power Gauge is, transforms Luffy. If Gear Power is above 50%, change between Gear 2 and Gear 3. If Gear Power is full, change into Gear 4 - Boundman. This can be used an unlimited amount of times per turn.",
        captain: g4v2captain,
        captainNotes: "In order to increase Gear Power Gauge level, you must hit a PERFECT with Luffy or consume [RCV] orbs. MAX Gear Power Gauge level is 8. Hitting a PERFECT with Luffy and consuming a [RCV] orb increases Gauge level by 1. If Luffy gets swapped out in battle, Gear Gauge Power will go to 0. While in Gear 4, Luffy will stay in that form until Gauge Power goes to 0. Attacking with any character while in Gear 4 reduces Gear Power Gauge by 3.",
        //special: "Deals 150x character's ATK in Typeless damage to all enemies, boosts ATK of all characters by 2x for 1 turn, makes [RCV] and [TND] orbs beneficial for all characters for 3 turns. If Luffy is Captain or Friend/Guest Captain, transform into Gear 4",
        special: g4v2special,
        specialNotes: "If you use this special after consuming 10 [RCV] orbs since the start of the fight, transform into Tankman, otherwise transform into Boundman",
        specialName: "Gomu Gomu no Kong Organ",
        sailor: {
            "base": "None",
            "level1": "Completely resists Paralysis on this character",
            "level2": "Boosts base ATK, HP and RCV for all characters by 50",
        },
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: Pinch Healing" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV for all characters by 50" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
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
        support: [
            {
                "Characters": "All Characters",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 8% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 9% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2075: {//Legend Nami
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of [DEX] characters by 3.75x and makes [STR] and [QCK] orbs beneficial for [DEX] characters",
        special: "If your Captain is a Free Spirit, Cerebral, Powerhouse or Driven character, boosts the Color Affinity of Free Spirit, Cerebral, Powerhouse and Driven characters by 1.75x for 1 turn and amplifies the effects of orbs for Free Spirit, Cerebral, Powerhouse and Driven characters by 2x for 1 turn",
        specialName: "Weather Egg: Thunderbreed Tempo",
    },
    2076: {//Legend Nami
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of [DEX] characters by 3.75x and makes [STR] and [QCK] orbs beneficial for [DEX] characters",
        special: "If your Captain is a Free Spirit, Cerebral, Powerhouse or Driven character, boosts the Color Affinity of Free Spirit, Cerebral, Powerhouse and Driven characters by 1.75x for 1 turn and amplifies the effects of orbs for Free Spirit, Cerebral, Powerhouse and Driven characters by 2x for 1 turn",
        specialName: "Weather Egg: Thunderbreed Tempo",
        sailor: {
            "base": "None",
            "level1": "Reduces Paralysis duration by 1 turn",
            "level2": "Makes [DEX] orbs beneficial for all characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis duration by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 65" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs beneficial for all characters" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 2%",
                    "Level 2: Reduce damage taken from [QCK] characters by 3%",
                    "Level 3: Reduce damage taken from [QCK] characters by 4%",
                    "Level 4: Reduce damage taken from [QCK] characters by 5%",
                    "Level 5: Reduce damage taken from [QCK] characters by 7%"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 2: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
        ],
        support: [
            {
                "Characters": "Luffy, Carrot and Chopper",
                "description": [
                    "Level 1: Adds 6% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 2: Adds 7% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 3: Adds 9% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 4: Adds 11% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 5: Adds 13% of this character's base ATK and RCV to the supported character's base ATK and RCV"
                ]
            }
        ]
    },
    2077: {//Carrot
        captain: "Boosts ATK of Fighter characters by 2x",
        special: "Reduces Paralysis and Despair duration by 4 turns, delays all enemies for 1 turn, changes [STR], [DEX], [QCK], [INT] and [PSY] orbs into [PSY] orbs and boosts ATK against enemies with reduced defense by 1.75x for 1 turn",
        specialName: "Eleclaw",
        sailor: "Completely resists Paralysis on this character",
    },
    2078: {//Carrot
        captain: "Boosts ATK of Fighter characters by 2.5x and boosts HP of Free Spirit characters by 1.2x",
        special: "Reduces Paralysis and Despair duration by 4 turns, delays all enemies for 1 turn, changes [STR], [DEX], [QCK], [INT] and [PSY] orbs into [PSY] orbs and boosts ATK against enemies with reduced defense by 1.75x for 1 turn",
        specialName: "Eleclaw",
        sailor: {
            "base": "Completely resists Paralysis on this character",
            "level1": "Boosts base ATK and HP of Fighter characters by 40",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of Fighter characters by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 2: Critical Hit" },
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
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 50% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 60% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Chopper",
                "description": [
                    "Level 1: Adds 4% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 5% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 7% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 9% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 11% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2079: {//Brook
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2x",
        special: "Deals 8 hits of of 20x character's ATK in Typeless damage to random enemies. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, Changes [BLOCK] orbs into Matching orbs and boosts the Color Affinity of all characters by 1.75x for 1 turn",
        specialName: "The Spherical Song that Resonates the Soul",
        sailor: "If this character has a [STR] orb and you hit a PERFECT with him, keep his [STR] orb for the next turn",
    },
    2080: {//Brook
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2x and boosts chain multiplier by 1.5x",
        special: "Deals 8 hits of of 20x character's ATK in Typeless damage to random enemies. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, Changes [BLOCK] orbs into Matching orbs and boosts the Color Affinity of all characters by 1.75x for 1 turn",
        specialName: "The Spherical Song that Resonates the Soul",
        sailor: {
            "base": "If this character has a [STR] orb and you hit a PERFECT with him, keep his [STR] orb for the next turn",
            "level1": "Makes [RCV] and [TND] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] and [TND] orbs beneficial for this character" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Critical Hit" },
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
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2081: {//Pedro
        captain: "Boosts ATK of Slasher characters by 2.25x",
        special: "Cuts the current HP of one enemy by 10%. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 1.75x for 1 turn and boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Risky Diversion",
        sailor: "Boosts base ATK of Slasher characters by 40",
    },
    2082: {//Pedro
        captain: "Boosts ATK of Slasher characters by 2.5x and reduces damage received by 7%",
        special: "Cuts the current HP of one enemy by 10%. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 1.75x for 1 turn and boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Risky Diversion",
        sailor: {
            "base": "Boosts base ATK of Slasher characters by 40",
            "level1": "Makes [DEX] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs beneficial for this character" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Critical Hit" },
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
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "Carrot, Wanda, Sicilian and Brook",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2083: {//Reiju
        captain: "Boosts ATK of [DEX] and [QCK] characters by 2.25x",
        special: "Removes Poison duration completely, changes left column [STR], [DEX], [QCK], [PSY], or [INT] orbs into Matching orbs and amplifies the effect of orbs on [DEX], [QCK] and [PSY] characters by 1.75x for 1 turn",
        specialName: "Celebration at the Flower Garden",
    },
    2084: {//Reiju
        captain: "Boosts ATK of [DEX] and [QCK] characters by 2.5x and their RCV by 1.2x",
        special: "Removes Poison duration completely, changes left column [STR], [DEX], [QCK], [PSY], or [INT] orbs into Matching orbs and amplifies the effect of orbs on [DEX], [QCK] and [PSY] characters by 1.75x for 1 turn",
        specialName: "Celebration at the Flower Garden",
    },
    2085: {//Sanji
        captain: "Boosts ATK of [DEX] and [QCK] characters by 2.25x",
        special: "Recovers 3,000 HP, changes right column [STR], [DEX], [QCK], [PSY], or [INT] orbs into Matching orbs and boosts ATK of [DEX], [QCK] and [INT] characters by 1.75x for 1 turn",
        specialName: "A Full Bloom Bright Smile",
    },
    2086: {//Sanji
        captain: "Boosts ATK of [DEX] and [QCK] characters by 2.5x and their HP by 1.2x",
        special: "Recovers 3,000 HP, changes right column [STR], [DEX], [QCK], [PSY], or [INT] orbs into Matching orbs and boosts ATK of [DEX], [QCK] and [INT] characters by 1.75x for 1 turn",
        specialName: "A Full Bloom Bright Smile",
    },
    2087: {//Pizza Luffy
        captain: "Boosts ATK of all characters by 2x. If you use \"Gomu Gomu no Octopus Stamp: Banquet\" in this turn boosts ATK of all characters by 2.6x instead.",
        special: "Deals 15x character's ATK in [STR] damage to all enemies, recovers 2,000 HP and adds 0.5x to Chain multiplier for 1 turn.",
        specialName: "Gomu Gomu no Octopus Stamp: Banquet",
    },
    2088: {//Pizza Sanji
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.5x and their HP by 1.2x",
        special: "Changes [RCV] and [TND] orbs into Matching orbs, amplifies the effect of orbs by 1.5x for 1 turn.",
        specialName: "Kicking in Table Manners",
    },
    2089: {//Pizza Nami
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and reduces damage received by 15%",
        special: "If HP is full at the time the special was activated, reduces Bind duration by 3 turns and boosts ATK of all characters by 1.5x for 1 turn.",
        specialName: "Intoxicating Magic",
        support: [
            {
                "Characters": "Shooter Characters",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 2: Adds 2% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 3: Adds 2% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 4: Adds 2% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 5: Adds 3% of this character's base ATK and RCV to the supported character's base ATK and RCV"
                ]
            }
        ]
    },
    2090: {//Pizza Franky
        captain: "Boosts ATK of [DEX] characters by 1.5x and their HP and RCV by 1.2x",
        special: "Reduces Despair duration by 3 turns, changes adjacent orbs into [RCV] orbs and switches orbs between slots twice",
        specialName: "Cola Party",
    },
    2091: {//Pizza Usopp
        captain: "Boosts ATK of Shooter characters by 1.75x",
        special: "Reduces crew's ATK DOWN and Paralysis duration by 3 turns and delays all enemies for 1 turn",
        specialName: "Humble Words to Excite the Party",
    },
    2092: {//Pizza Zoro
        captain: "Boosts ATK of all characters by 2x. If you use \"One Sword Style: Yakkodori - Banquet\" in this turn boosts ATK of all characters by 2.6x instead.",
        special: "Deals 15x character's ATK in [PSY] damage to all enemies, reduces the defense of all enemies by 50% and boosts ATK against enemies with reduced defense by 1.5x for 1 turn.",
        specialName: "One Sword Style: Yakkodori - Banquet",
    },
    2093: {//Pizza Chopper
        captain: "Boosts ATK of Fighter and Free Spirit characters by 1.5x and their RCV by 1.2x",
        special: "Removes Poison duration completely and boosts ATK against delayed enemies by 1.5x for 1 turn",
        specialName: "Overflowing Happiness",
        support: [
            {
                "Characters": "Free Spirit Characters",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2094: {//Pizza Brook
        captain: "Boosts ATK of Slasher characters by 1.75x",
        special: "Reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 3 turns and reduces damage received by 60% for 1 turn",
        specialName: "An Enchanted Bliss that Pierces the Bones",
    },
    2095: {//Pizza Robin
        captain: "Boosts ATK of [INT] characters by 1.5x and their HP and RCV by 1.2x",
        special: "Reduces Blindness duration by 3 turns, boosts chances of getting Matching orbs for 3 turns and randomizes non-Matching orbs, including [BLOCK] orbs.",
        specialName: "Gorgeous Small Break",
    },
    2096: {//Raid Zoro
        captain: "Boosts Slasher and Driven character's ATK by 2.25x, by 2.5x after 2 consecutive PERFECTs, by 2.75x after 5 consecutive PERFECTs.",
        special: "Deals 55x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers, reduces enemies' Threshold Damage Reduction and Percent Damage Reduction duration by 5 turns. If HP is full at the time the special was activated, boosts the Color Affinity of Slasher and Driven characters by 2x for 1 turn, by 1.75x for 2 turns otherwise",
        specialName: "One Sword Style: Great Dragon Shock",
        specialNotes: "#{ignoreBarrier}<br>#{colorAffinity : 2}",
        sailor: "If this character has a [QCK] orb and you hit a GOOD or GREAT with him, keep his [QCK] orb for the next turn",
    },
    2097: {//Raid Zoro
        captain: "Boosts Slasher and Driven character's ATK by 2.75x and their HP by 1.2x, by 3x after 2 consecutive PERFECTs, by 3.3x after 5 consecutive PERFECTs.",
        special: "Deals 55x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers, reduces enemies' Threshold Damage Reduction and Percent Damage Reduction duration by 5 turns. If HP is full at the time the special was activated, boosts the Color Affinity of Slasher and Driven characters by 2x for 1 turn, by 1.75x for 2 turns otherwise",
        specialName: "One Sword Style: Great Dragon Shock",
        specialNotes: "#{ignoreBarrier}<br>#{colorAffinity : 2}",
        sailor: {
            "base": "If this character has a [QCK] orb and you hit a GOOD or GREAT with him, keep his [QCK] orb for the next turn",
            "level1": "Boosts base ATK, HP and RCV of Slasher and Driven characters by 50",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts ATK, HP and RCV of Slasher and Driven characters by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Slasher Characters",
                "description": [
                    "Level 1: Once per adventure, when you reach the final stage, boosts the Color Affinity of Slasher characters by 1.1x for 1 turn.",
                    "Level 2: Once per adventure, when you reach the final stage, boosts the Color Affinity of Slasher characters by 1.1x for 1 turn.",
                    "Level 3: Once per adventure, when you reach the final stage, boosts the Color Affinity of Slasher characters by 1.2x for 1 turn.",
                    "Level 4: Once per adventure, when you reach the final stage, boosts the Color Affinity of Slasher characters by 1.2x for 1 turn.",
                    "Level 5: Once per adventure, when you reach the final stage, boosts the Color Affinity of Slasher characters by 1.3x for 1 turn."
                ]
            }
        ]
    },
    2098: {//Tesoro
        captain: "If you have a Striker, Shooter, Fighter, Slasher, Free Spirit, Cerebral, Powerhouse and Driven character on your crew, boosts ATK of all characters by 3.75x, their HP by 1.35x and boosts chances of getting Matching orbs. Boosts ATK of all characters by 4.5 after scoring 4 GREATs in a row. Scoring a PERFECT reduces ATK boost for the next attack by 30%.",
        captainNotes: "Scoring a PERFECT will reduce the ATK boost for the next character in the chain, boosting ATK by 2.625x at the start of the chain, by 3.15x after scoring 4 GREATs in a row, not for the rest of the battle.",
        special: "Deals 200,000 Fixed damage to all enemies, changes top and bottom row orbs into Matching orbs and locks the chain multiplier at 3.25x for 1 turn.",
        specialName: "Gon Inferno",
    },
    2099: {//Tesoro
        captain: "If you have a Striker, Shooter, Fighter, Slasher, Free Spirit, Cerebral, Powerhouse and Driven character on your crew, boosts ATK of all characters by 3.75x, their HP by 1.35x and boosts chances of getting Matching orbs. Boosts ATK of all characters by 4.5 after scoring 4 GREATs in a row. Scoring a PERFECT reduces ATK boost for the next attack by 30%.",
        captainNotes: "Scoring a PERFECT will reduce the ATK boost for the next character in the chain, boosting ATK by 2.625x at the start of the chain, by 3.15x after scoring 4 GREATs in a row, not for the rest of the battle.",
        special: "Deals 200,000 Fixed damage to all enemies, changes top and bottom row orbs into Matching orbs and locks the chain multiplier at 3.25x for 1 turn.",
        specialName: "Gon Inferno",
        sailor: {
            "base": "None",
            "level1": "Makes [STR], [DEX], [RCV], [TND] orbs beneficial for this character",
            "level2": "Boosts base ATK and HP of Driven and Striker characters by 50",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Sailor Ability 1: Makes [STR], [DEX], [RCV], [TND] orbs beneficial for this character" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Potential 2: [STR] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK and HP of Driven and Striker characters by 50" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Critical Hit" },
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
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 2%",
                    "Level 2: Reduce damage taken from [STR] characters by 3%",
                    "Level 3: Reduce damage taken from [STR] characters by 4%",
                    "Level 4: Reduce damage taken from [STR] characters by 5%",
                    "Level 5: Reduce damage taken from [STR] characters by 7%"
                ]
            },
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
        ]
    },
    2100: {//Dice
        captain: "Boosts ATK of Powerhouse characters by 1.75x and [STR] characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [STR] Powerhouse character has a 2.1x ATK",
        special: "Cuts the current HP of one enemy by 15% and reduces enemy Barrier duration by 1 turn. If your captain is a [STR] or [QCK] character, Changes own orb into [STR] and boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Furious Armored Tank",
        sailor: "If this character has a [STR] orb and you hit a GOOD or GREAT with him, keep his [STR] orb for the next turn",
    },
    2101: {//Dice
        captain: "Boosts ATK of Powerhouse characters by 2.25x and [STR] characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [STR] Powerhouse character has a 2.7x ATK",
        special: "Cuts the current HP of one enemy by 15% and reduces enemy Barrier duration by 1 turn. If your captain is a [STR] or [QCK] character, Changes own orb into [STR] and boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Furious Armored Tank",
        sailor: {
            "base": "If this character has a [STR] orb and you hit a GOOD or GREAT with him, keep his [STR] orb for the next turn",
            "level1": "Boosts base ATK of all characters by 40",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of all characters by 40" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 2: Enrage" },
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
    2102: {//Baccarat
        captain: "Boosts ATK of all characters by 1.2x. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if she was not your captain upon starting the island. Stacks with other additional drop captains, giving you two chances of getting an extra drop.",
        special: "Deal 77x character's ATK in Typeless damage to all enemies and reduces crew's ATK DOWN, Chain Multiplier Limit and Paralysis duration by 3 turns. If your captain is a [INT] or [QCK] character, Changes own orb into [INT] and amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Lucky Coin of Victory",
        sailor: "If this character has a [INT] orb and you hit a GOOD or GREAT with her, keep her [INT] orb for the next turn",
    },
    2103: {//Baccarat
        captain: "Boosts ATK of all characters by 1.5x. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if she was not your captain upon starting the island. Stacks with other additional drop captains, giving you two chances of getting an extra drop.",
        special: "Deal 77x character's ATK in Typeless damage to all enemies and reduces crew's ATK DOWN, Chain Multiplier Limit and Paralysis duration by 3 turns. If your captain is a [INT] or [QCK] character, Changes own orb into [INT] and amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Lucky Coin of Victory",
        sailor: {
            "base": "If this character has a [INT] orb and you hit a GOOD or GREAT with her, keep her [INT] orb for the next turn",
            "level1": "Boosts base RCV of all characters by 40",
        },
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 1: Boosts base RCV of all characters by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ]
    },
    2104: {//Mr. Tanaka
        captain: "Boosts ATK of Free Spirit and Shooter characters by 1.75x and boosts HP of [DEX] characters by 1.2x",
        special: "Deal 40x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers and reduces enemies' ATK UP, Increased Defense and Enrage duration by 3 turns. If your captain is a [DEX] or [QCK] character, Changes own orb into [DEX] and adds 40x character's ATK as additional Typeless damage for 1 turn",
        specialName: "A Tormenting Show",
        specialNotes: "#{ignoreBarrier}",
        sailor: "If this character has a [DEX] orb and you hit a GOOD or GREAT with him, keep his [DEX] orb for the next turn",
    },
    2105: {//Mr. Tanaka
        captain: "Boosts ATK of Free Spirit and Shooter characters by 2.25x and boosts HP of [DEX] characters by 1.2x",
        special: "Deal 40x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers and reduces enemies' ATK UP, Increased Defense and Enrage duration by 3 turns. If your captain is a [DEX] or [QCK] character, Changes own orb into [DEX] and adds 40x character's ATK as additional Typeless damage for 1 turn",
        specialName: "A Tormenting Show",
        specialNotes: "#{ignoreBarrier}",
        sailor: {
            "base": "If this character has a [DEX] orb and you hit a GOOD or GREAT with him, keep his [DEX] orb for the next turn",
            "level1": "Reduces Silence duration on this character by 3 turns",
        },
        limit: [
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ]
    },
    2106: {//Carina
        captain: "Boosts ATK of [PSY] characters by 2.25x",
        special: "Reduces enemies' Threshold Damage Reduction, Percent Damage Reduction, Resilience, End of Turn Damage and Percent Cut Buffs duration by 4 turns, changes adjacent orbs and [BLOCK] orbs into Matching orbs, randomizes non-Matching orbs and reduces damage received by 70% for 2 turns.",
        specialName: "The Great Final Act of One's Victory",
        sailor: "If this character has a [PSY] orb and you hit a GOOD or GREAT with her, keep her [PSY] orb for the next turn",
    },
    2107: {//Carina
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of [PSY] characters by 2.5x and their RCV by 1.2x",
        special: "Reduces enemies' Threshold Damage Reduction, Percent Damage Reduction and Resilience and End of Turn Damage/Percent Cut Buffs duration by 4 turns, changes adjacent orbs and [BLOCK] orbs into Matching orbs, randomizes non-Matching orbs and reduces damage received by 70% for 2 turns.",
        specialName: "The Great Final Act of One's Victory",
        sailor: {
            "base": "If this character has a [PSY] orb and you hit a GOOD or GREAT with her, keep her [PSY] orb for the next turn",
            "level1": "If you have a Striker, Shooter, Fighter, Slasher, Free Spirit, Cerebral, Powerhouse and Driven character on your crew, Changes all orbs into Matching orbs at the start of the fight",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 1: If you have a Striker, Shooter, Fighter, Slasher, Free Spirit, Cerebral, Powerhouse and Driven character on your crew, Changes all orbs into Matching orbs at the start of the fight" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 2: [INT] Damage Reduction" },
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
                "Name": "[INT] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [INT] characters by 2%",
                    "Level 2: Reduce damage taken from [INT] characters by 3%",
                    "Level 3: Reduce damage taken from [INT] characters by 4%",
                    "Level 4: Reduce damage taken from [INT] characters by 5%",
                    "Level 5: Reduce damage taken from [INT] characters by 7%"
                ]
            },
        ]
    },
    2108: {//Big Mom
        captain: "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.5x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.2x and cuts the current HP of each enemy by 5% at the end of each turn. Recovers 0.5x character's RCV in HP at the end of each turn.",
        special: "Removes all positive buffs on your team, changes all orbs, including [BLOCK] orbs, into [G] orbs, amplifies the effect of orbs by 3x for 1 turn, boosts ATK of all characters by 1.25x for 1 turn and boosts the Color Affinity of all characters by 1.25x for 1 turn",
        specialName: "The Harmony that Interweaves the Souls",
    },
    2109: {//Big Mom
        captain: {
            "base": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.5x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 5% at the end of each turn. Recovers 1x character's RCV in HP at the end of each turn.",
            "level1": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.5x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 6% at the end of each turn. Recovers 1x character's RCV in HP at the end of each turn.",
            "level2": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 7% at the end of each turn. Recovers 1x character's RCV in HP at the end of each turn.",
            "level3": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 7% at the end of each turn. Recovers 1.5x character's RCV in HP at the end of each turn.",
            "level4": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 10% at the end of each turn. Recovers 1.5x character's RCV in HP at the end of each turn.",
            "level5": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 2x and cuts the current HP of each enemy by 10% at the end of each turn. Recovers 1.5x character's RCV in HP at the end of each turn.",
            "level6": "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 2x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 3x and cuts the current HP of each enemy by 10% at the end of each turn. Recovers 2x character's RCV in HP at the end of each turn.",
        },
        special: "Removes all positive buffs on your team, changes all orbs, including [BLOCK] orbs, into [G] orbs, amplifies the effect of orbs by 3x for 1 turn, boosts ATK of all characters by 1.25x for 1 turn and boosts the Color Affinity of all characters by 1.25x for 1 turn",
        specialName: "The Harmony that Interweaves the Souls",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] orbs beneficial for this character",
            "level2": "Cannot be Blown Away",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Acquire new Captain Ability: If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.5x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 6% at the end of each turn. Recovers 1x character's RCV in HP at the end of each turn." },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs beneficial for this character" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 7% at the end of each turn. Recovers 1x character's RCV in HP at the end of each turn." },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 7% at the end of each turn. Recovers 1.5x character's RCV in HP at the end of each turn." },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 55" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 1.5x and cuts the current HP of each enemy by 10% at the end of each turn. Recovers 1.5x character's RCV in HP at the end of each turn." },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 2: Cannot be Blown Away" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 1.75x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 2x and cuts the current HP of each enemy by 10% at the end of each turn. Recovers 1.5x character's RCV in HP at the end of each turn." },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire new Captain Ability: If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 2x, boosts damage of [STR], [DEX], [QCK], [PSY] and [INT] specials by 3x and cuts the current HP of each enemy by 10% at the end of each turn. Recovers 2x character's RCV in HP at the end of each turn." },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2110: {//Coliseum Kid
        captain: "Boosts ATK of Striker and Shooter characters by 2.25x and deals 3x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Deals 5 hits of random [DEX] damage to random enemies and reduces Special Cooldown of Striker and Shooter specials by 2 turns. If your Captain is a Striker or Shooter character, deals 350x character's ATK as [DEX] damage to all enemies at the end of the turn for 2 turns",
        specialNotes: "#{randomHits : 5}",
        specialName: "Electromagnetic Projection Sword",
        sailor: "Boosts base ATK, HP and RCV of [DEX] characters by 20",
    },
    2111: {//Coliseum Kid
        captain: "Boosts ATK of Striker and Shooter characters by 2.5x and deals 5x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Deals 5 hits of random [DEX] damage to random enemies and reduces Special Cooldown of Striker and Shooter specials by 2 turns. If your Captain is a Striker or Shooter character, deals 350x character's ATK as [DEX] damage to all enemies at the end of the turn for 2 turns",
        specialNotes: "#{randomHits : 5}",
        specialName: "Electromagnetic Projection Sword",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of [DEX] characters by 20",
            "level1": "Boosts base ATK of Striker characters by 30",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Striker characters by 30" },
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
                    "Level 2: Reduce own Special Cooldown by 3 turns at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 5 turns at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 7 turns at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 11 turns at the start of the fight"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2112: {//Katakuri
        captain: "Boosts ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 1.825x, reduce damage received by 20% and makes [QCK], [PSY], [RCV] and [TND] orbs beneficial for all characters. Has a chance to delay all enemies by 1 turn based on damage dealt in previous turn.",
        captainNotes: "The bonus is cumulative. Characters with 2 of the boosted classes get a 3.330625x bonus<br>Delay chance is based on damage dealt with normal attacks and does not stack with any other delay specials or effects<br><b>100,000 damage or more:</b> 20% chance to delay<br><b>500,000 damage or more:</b> 50% chance to delay<br><b>1,000,000 damage or more:</b> 100% chance to delay<br><b>2,000,000 damage or more:</b> 100% chance to delay ignoring Delay Debuff Protection",
        special: "Boosts ATK against delayed enemies by 1.75x for 2 turns, changes [STR], [QCK], [DEX], [PSY], [INT] and [BLOCK] orbs on Fighter, Striker, Shooter, Cerebral and Powerhouse characters into Matching orbs and reduces Special Cooldown of Fighter, Striker, Shooter, Cerebral and Powerhouse specials by 1 turn",
        specialName: "Peerless Donuts: Mochi Singing Result",
    },
    2113: {//Katakuri
        captain: "Boosts ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 1.825x, reduce damage received by 20% and makes [QCK], [PSY], [RCV] and [TND] orbs beneficial for all characters. Has a chance to delay all enemies by 1 turn based on damage dealt in previous turn.",
        captainNotes: "The bonus is cumulative. Characters with 2 of the boosted classes get a 3.330625x bonus<br>Delay chance is based on damage dealt with normal attacks and does not stack with any other delay specials or effects<br><b>100,000 damage or more:</b> 20% chance to delay<br><b>500,000 damage or more:</b> 50% chance to delay<br><b>1,000,000 damage or more:</b> 100% chance to delay<br><b>2,000,000 damage or more:</b> 100% chance to delay ignoring Delay Debuff Protection",
        special: "Boosts ATK against delayed enemies by 1.75x for 2 turns, changes [STR], [QCK], [DEX], [PSY], [INT] and [BLOCK] orbs on Fighter, Striker, Shooter, Cerebral and Powerhouse characters into Matching orbs and reduces Special Cooldown of Fighter, Striker, Shooter, Cerebral and Powerhouse specials by 1 turn",
        specialName: "Peerless Donuts: Mochi Singing Result",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 50",
            "level2": "Boosts this character's damage against [QCK] characters by 2x",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Boosts this character's damage against [QCK] characters by 2x" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[DEX] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [DEX] characters by 1%",
                    "Level 2: Reduce damage taken from [DEX] characters by 2%",
                    "Level 3: Reduce damage taken from [DEX] characters by 3%",
                    "Level 4: Reduce damage taken from [DEX] characters by 5%",
                    "Level 5: Reduce damage taken from [DEX] characters by 7%"
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
        ]
    },
    2114: {//Brulee
        captain: "Boosts ATK and RCV of [PSY] characters by 1.2x and cuts the current HP of each enemy by 10% at the end of each turn",
        special: [
            {
                "description": "Changes own [TND] and [RCV] orbs into [PSY] orbs, changes all other orbs, including [BLOCK] orbs, on all characters into Brûlée's orb. Adds 30x character's ATK as Additional Typeless Damage for 3 turns",
                "cooldown": [ 18, 12 ],
            },
            {
                "description": "Changes own [TND] and [RCV] orbs into [PSY] orbs, changes all other orbs, including [BLOCK] orbs, on all characters into Brûlée's orb. Adds 30x character's ATK as Additional Typeless Damage for 5 turns",
                "cooldown": [ 22, 16 ],
            },
        ],
        specialNotes: "Upon activating the special, all orbs will be changed to the orb Brûlée has, including [RAINBOW] and [BLOCK] orbs.",
        specialName: "Light Reflecting a Virtual Image",
        sailor: "Makes [PSY] orbs beneficial for Cerebral characters",
        sailorNotes: "#{beneficial}",
    },
    2115: {//Brulee
        captain: "Boosts ATK and RCV of [PSY] characters by 1.5x and cuts the current HP of each enemy by 15% at the end of each turn",
        special: [
            {
                "description": "Changes own [TND] and [RCV] orbs into [PSY] orbs, changes [BLOCK] orbs into [EMPTY] orbs and changes all other orbs, including [BLOCK] orbs, on all characters into Brûlée's orb. Adds 30x character's ATK as Additional Typeless Damage for 3 turns",
                "cooldown": [ 18, 12 ],
            },
            {
                "description": "Changes own [TND] and [RCV] orbs into [PSY] orbs, changes [BLOCK] orbs into [EMPTY] orbs and changes all other orbs, including [BLOCK] orbs, on all characters into Brûlée's orb. Adds 30x character's ATK as Additional Typeless Damage for 5 turns",
                "cooldown": [ 22, 16 ],
            },
        ],
        specialNotes: "Upon activating the special, all orbs will be changed to the orb Brûlée has, including [RAINBOW] and [BLOCK] orbs.",
        specialName: "Light Reflecting a Virtual Image",
        sailor: {
            "base": "Makes [PSY] orbs beneficial for Cerebral characters",
            "level1": "Reduces Paralysis duration by 1 turn",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis duration by 1 turn" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ],
        support: [
            {
                "Characters": "Katakuri and Perospero",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 2: Adds 4% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 3: Adds 5% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 4: Adds 7% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 5: Adds 9% of this character's base ATK and RCV to the supported character's base ATK and RCV"
                ]
            }
        ]
    },
    2116: {//Amande
        captain: "Boosts ATK of Slasher characters by 2.5x and reduces crew's RCV to 0",
        special: [
            {
                "description": "Reduces the defense of all enemies by 100% for 1 turn, reduces enemy Barrier duration by 2 turns and cuts the current HP of one enemy by 20%",
                "cooldown": [ 20, 13 ],
            },
            {
                "description": "Reduces the defense of all enemies by 100% for 1 turn, reduces enemy Barrier duration by 3 turns and cuts the current HP of one enemy by 50%",
                "cooldown": [ 37, 30 ],
            },
        ],
        specialName: "Slow Ballad",
        sailor: "Makes [PSY] orbs beneficial for this character",
        sailorNotes: "#{beneficial}",
    },
    2117: {//Amande
        captain: "Boosts ATK of Slasher characters by 2.75x and reduces crew's RCV to 0",
        special: [
            {
                "description": "Reduces the defense of all enemies by 100% for 1 turn, reduces enemy Barrier duration by 2 turns and cuts the current HP of one enemy by 20%",
                "cooldown": [ 20, 13 ],
            },
            {
                "description": "Reduces the defense of all enemies by 100% for 1 turn, reduces enemy Barrier duration by 3 turns and cuts the current HP of one enemy by 50%",
                "cooldown": [ 37, 30 ],
            },
        ],
        specialName: "Slow Ballad",
        sailor: {
            "base": "Makes [PSY] orbs beneficial for this character",
            "level1": "Adds 2x character's ATK as Additional Damage",
        },
        sailorNotes: "#{beneficial} <br> #{additionalDamage : 2x}",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Adds 2x character's ATK as Additional Damage" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Enrage" },
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
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Bobbin, Mont-D'or, Opera and Galette",
                "description": [
                    "Level 1: Reduces damage received from [PSY] characters by 1%. Adds 1% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 2: Reduces damage received from [PSY] characters by 2%. Adds 2% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 3: Reduces damage received from [PSY] characters by 3%. Adds 3% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 4: Reduces damage received from [PSY] characters by 4%. Adds 5% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 5: Reduces damage received from [PSY] characters by 5%. Adds 7% of this character's base ATK and HP to the supported character's base ATK and HP"
                ]
            }
        ]
    },
    2118: {//Bobbin
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2x",
        special: "Reduces enemies' Threshold Damage Reduction, Percent Damage Reduction, Increased Defense and End of Turn Heal duration by 5 turns, crew's ATK DOWN duration by 5 turns and changes adjacent orbs into Matching Orbs.",
        specialName: "Death-Inducing Lullaby",
        sailor: "Boosts own base ATK by 350 if this character is the last in the chain to attack",
    },
    2119: {//Bobbin
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2.5x",
        special: "Reduces enemies' Threshold Damage Reduction, Percent Damage Reduction, Increased Defense and End of Turn Heal duration by 5 turns, crew's ATK DOWN duration by 5 turns and changes adjacent orbs into Matching Orbs.",
        specialName: "Death-Inducing Lullaby",
        sailor: {
            "base": "Boosts own base ATK by 350 if this character is the last in the chain to attack",
            "level1": "Reduces Silence duration by 1 turn",
        },
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
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
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ],
        support: [
            {
                "Characters": "[QCK] Characters",
                "description": [
                    "Level 1: Once per adventure, when you are inflicted with ATK DOWN, changes supported character's adjacent orbs into Matching Orbs",
                    "Level 2: Once per adventure, when you are inflicted with ATK DOWN, changes supported character's adjacent orbs into Matching Orbs",
                    "Level 3: Once per adventure, when you are inflicted with ATK DOWN, changes supported character's adjacent orbs into Matching Orbs",
                    "Level 4: Once per adventure, when you are inflicted with ATK DOWN, changes supported character's adjacent orbs into Matching Orbs",
                    "Level 5: Once per adventure, when you are inflicted with ATK DOWN, changes supported character's own orb and adjacent orbs into Matching Orbs"
                ]
            }
        ]
    },
    2120: {//Oven
        captain: "Boosts ATK of Powerhouse and Fighter characters by 1.5x and reduces damage received by ?%",
        captainNotes: "The bonus is cumulative. Powerhouse + Fighter characters get a 2.25x bonus",
        special: "If enemies are delayed at the time the special was activated, boosts ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 2x for 1 turn, boosts Fighter and Powerhouse characters by 1.75x for 3 turns otherwise.",
        specialName: "Grilled Scorch Blow",
        sailor: "Boosts this character's damage against [STR] characters by 2x",
    },
    2121: {//Oven
        captain: "Boosts ATK of Powerhouse and Fighter characters by 1.65x and reduces damage received by 7%",
        captainNotes: "The bonus is cumulative. Powerhouse + Fighter characters get a 2.7225x bonus",
        special: "If enemies are delayed at the time the special was activated, boosts ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 2x for 1 turn, boosts Fighter and Powerhouse characters by 1.75x for 3 turns otherwise.",
        specialName: "Grilled Scorch Blow",
        sailor: {
            "base": "Boosts this character's damage against [STR] characters by 2x",
            "level1": "Reduces Silence duration by 1 turn",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Characters": "Charlotte Linlin, Katakuri and Smoothie",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2122: {//Neptune
        captain: "Boosts ATK of all characters by 1.5x and boosts EXP gained by 1.25x",
        captainNotes: "EXP boost does not take effect if he becomes your captain in the middle of the adventure.",
        special: "Reduces Despair and ATK DOWN duration by 5 turns and reduces enemies' Resilience Buffs duration by 5 turns. Reduces the defense of all enemies by 80% and amplifies the effect of orbs by 1.75x for Cerebral and Powerhouse characters for 3 turns",
        sailor: "Boosts base ATK, HP and RCV of Cerebral characters by 50",
        specialName: "Great Ocean Current of Resuscitation",
    },
    2123: {//Neptune
        captain: "Boosts ATK of all characters by 2x, boosts EXP gained by 1.5x and recovers 5x character's RCV in HP at the end of each turn",
        captainNotes: "EXP boost does not take effect if he becomes your captain in the middle of the adventure.",
        special: "Reduces Despair and ATK DOWN duration by 5 turns and reduces enemies' Resilience Buffs duration by 5 turns. Reduces the defense of all enemies by 80% and amplifies the effect of orbs by 1.75x for Cerebral and Powerhouse characters for 3 turns",
        specialName: "Great Ocean Current of Resuscitation",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of Cerebral characters by 50",
            "level1": "When any other character uses a special, reduces own cooldown by 1 turn",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
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
    },
    2124: {//Trebol
        captain: "Boosts ATK of Striker characters by 2.5x and boosts HP of Driven characters by 1.5x",
        special: "Reduces crew's current HP by 60%, deals 8x the amount of HP subtracted in Typeless damage to all enemies and amplifies the effect of orbs for Striker characters by 1.5x for 1 turn",
        specialName: "Beta Betton Mucous Launcher",
    },
    2125: {//Jesus Burgess
        captain: "Boosts ATK of Powerhouse characters by 2.5x and reduces damage received by 10%",
        special: "Cuts the current HP of one enemy by 25% that will ignore damage negating abilities and barriers",
        specialName: "The Mouth that Induces Hatred",
        specialNotes: "#{ignoreBarrier}",
    },
    2126: {//Doffy
        captain: "Boosts ATK of Striker characters by 2.5x and their HP by 1.3x. If you use \"Fullbright\" on this Doflamingo boosts ATK of Striker characters by 3x instead for 3 turns",
        captainNotes: "Using Doflamingo's special will change his own captain boost to 3x. If both Doflamingo's specials are used, the total ATK boost will be 9x",
        special: "Cuts the current HP of each enemy by 20%, changes own orb into [STR] and at the end of the turn, cuts the current HP of each enemy by 10% for 2 turns. If HP is below 50% at the time the special is activated, boosts ATK of Striker and Driven characters by 1.75x for 1 turn",
        specialName: "Fullbright",
    },
    2127: {//Brulee
        captain: "Boosts RCV of Cerebral characters by 1.2x and boosts ATK of Cerebral characters by 2.75x if they have a Matching orb, by 1.75x otherwise",
        special: "Reduces Bind duration by 2 turns and amplifies the effect of orbs for Cerebral characters by 1.5x and boosts ATK of Cerebral characters by 1.5x for 1 turn.",
        specialName: "The Witch's Meal",
        support: [
            {
                "Characters": "Cerebral Characters",
                "description": [
                    "Level 1: Adds 2% of this character's base RCV to the supported character's base RCV",
                    "Level 2: Adds 3% of this character's base RCV to the supported character's base RCV",
                    "Level 3: Adds 4% of this character's base RCV to the supported character's base RCV",
                    "Level 4: Adds 5% of this character's base RCV to the supported character's base RCV",
                    "Level 5: Adds 6% of this character's base RCV to the supported character's base RCV"
                ]
            }
        ]
    },
    2128: {//Randolph
        captain: "Boosts ATK of DEX characters by 2x and boosts chain multiplier by 1.2x",
        special: "Reduces Special Cooldown of your right column by 1 turn and makes [DEX] and [RCV] orbs beneficial for Slasher and Striker characters for 1 turn",
        specialName: "Cutting Lifelines",
    },
    2129: {//Noble Croc
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Boosts ATK of all characters by 1.2x for 3 turns",
        specialName: "Anticipation of Unknown Food",
    },
    2130: {//Diesel
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of [QCK] characters by 1.5x",
        special: "Reduces Paralysis duration by 2 turns and changes the Captain's orb into a Matching orb",
        specialName: "The Fast Runner's Emergency Report",
    },
    2131: {//Ivankov
        captain: "Boosts ATK of Cerebral characters by 1.2x",
        special: "Removes Poison duration completely and reduces Paralysis duration by 4 turns. If you are on a Treasure Map, boosts ATK of Fighter, Shooter and Cerebral characters depending on your Treasure Map Level for 1 turn",
        specialName: "Laser Treatment Fist",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
    },
    2132: {//Ivankov
        captain: "Boosts ATK of Cerebral characters by 1.5x and their RCV by 1.2x",
        special: "Removes Poison duration completely and reduces Paralysis duration by 4 turns. If you are on a Treasure Map, boosts ATK of Fighter, Shooter and Cerebral characters depending on your Treasure Map Level for 1 turn",
        specialName: "Laser Treatment Fist",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
    },
    2133: {//Jozu
        captain: "Boosts ATK of Powerhouse characters by 1.2x",
        special: "Reduces crew's ATK DOWN duration by 3 turns, makes [PSY] orbs beneficial for all characters for 3 turns and locks all orbs for 1 turn",
        specialName: "Destroy - Charge",
    },
    2134: {//Jozu
        captain: "Boosts ATK of Powerhouse characters by 1.5x and their HP by 1.2x",
        special: "Reduces crew's ATK DOWN duration by 3 turns, makes [PSY] orbs beneficial for all characters for 3 turns and locks all orbs for 1 turn",
        specialName: "Destroy - Charge",
    },
    2135: {//Mr. 1
        captain: "Boosts ATK of [QCK] characters by 1.3x",
        special: "Deals 15x character's ATK in [QCK] damage to one enemy, changes own orb into [QCK] and amplifies the effect of orbs for [QCK] characters by 1.75x for 1 turn",
        specialName: "Sparkling Daisy",
    },
    2136: {//Crocodile TM
        captain: "Boosts ATK of all characters by 1.5x. If this character becomes your captain in the middle of an island, boosts ATK of all characters by 2x instead",
        special: "Deals 30x character's ATK in [INT] damage to one enemy, boosts own ATK by 2x and swaps this unit with your captain for 1 turn",
        specialNotes: "This is the same type of ability as raid boss Shiki's swap. You cannot use it if another effect swaps your captain. (Such as if Shiki swaps first)",
        specialName: "Scorpion Tail",
    },
    2137: {//Crocodile TM
        captain: {
            "base": "Boosts ATK of all characters by 2x. If this character becomes your captain in the middle of an island, boosts ATK of all characters by 2.5x instead",
            "level1": "Not Translated",
            "level2": "Not Translated",
            "level3": "Not Translated",
            "level4": "Not Translated",
            "level5": "Not Translated",
            "level6": "Boosts ATK of all characters by 2.5x and makes [STR], [DEX] and [INT] orbs beneficial for all characters. If this character becomes your captain in the middle of an island, boosts ATK of all characters by 4x instead",
        },
        captainNotes: "#{beneficial}",
        special: "Deals 30x character's ATK in [INT] damage to one enemy, boosts own ATK by 2x and swaps this unit with your captain for 1 turn",
        specialNotes: "This is the same type of ability as raid boss Shiki's swap. You cannot use it if another effect swaps your captain. (Such as if Shiki swaps first)",
        specialName: "Scorpion Tail",
        sailor: {
            "base": "None",
            "level1": "Makes [PSY] orbs beneficial for this character",
            "level2": "Makes [TND] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs beneficial for this character" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Makes [TND] orbs beneficial for this character" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Potential 2: Critical Hit" },
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
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2138: {//6+ Judge
        captain: "Increase the rate of [INT] orbs, reduces damage received by 15%, boosts the HP of all characters by 1.25x and if there is a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, makes Badly Matching orbs beneficial for all characters boosts ATK of all characters by 3.9375x if they have a Matching orb, by 2.25x otherwise",
        special: "Reduces damage received by 30% for 2 turns and boosts ATK of Fighter, Driven and Powerhouse characters by 2x for 1 turn. If this character is the captain or the Friend captain, changes all orbs, including [BLOCK] orbs, to [INT] orbs",
        specialName: "Dengi Crack - Blaster",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of Powerhouse characters by 60",
            "level2": "Completely resists Paralysis on this character",
        },
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of Powerhouse characters by 60" },
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
            { "description": "Boosts base HP by 55" },
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
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
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
                    "Level 1: If you hit a PERFECT with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
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
        support: [
            {
                "Characters": "Ichiji, Niji, Yonji and Reiju",
                "description": [
                    "Level 1: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 8% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 10% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 12% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2139: {//Reiju
        captain: "Boosts ATK of [PSY] characters by 2.25x and Powerhouse characters by 1.4x and the RCV of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [PSY] Powerhouse character has a 3.15x ATK",
        special: "If your captain is a [PSY] or [INT] character, reduces crew's ATK DOWN and Silence duration by 3 turns and inflicts Toxic to all enemies. If your Captain is a Powerhouse character, boosts ATK against enemies inflicted with Toxic by 1.75x for 1 turn",
        specialName: "Dangerous Butterfly",
        specialNotes: "#{toxic : 20x : 2x : 500,000}<br>If enemies are both Poisoned and inflicted with Toxic, only the Toxic damage will damage the enemy at the end of the turn.",
        sailor: {
            "base": "Makes [INT] orbs beneficial for this character",
            "level1": "Reduces Silence duration on this character by 3 turns",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
        support: [
            {
                "Characters": "Judge, Ichiji, Niji, Sanji and Yonji",
                "description": [
                    "Level 1: Once per adventure, when you are inflicted with Poison or Toxic, recovers 1,000 HP",
                    "Level 2: Once per adventure, when you are inflicted with Poison or Toxic, recovers 2,000 HP",
                    "Level 3: Once per adventure, when you are inflicted with Poison or Toxic, recovers 4,000 HP",
                    "Level 4: Once per adventure, when you are inflicted with Poison or Toxic, recovers 6,000 HP",
                    "Level 5: Once per adventure, when you are inflicted with Poison or Toxic, recovers 7,000 HP"
                ]
            }
        ]
    },
    2140: {//Ichiji
        captain: "Boosts ATK of [QCK] characters by 2.25x, boosts ATK of Powerhouse characters by 1.4x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [QCK] Powerhouse character has a 3.15x ATK",
        special: "If your captain is a [QCK] or [INT] character, amplifies the effect of orbs by 2x for 1 turn. If your Captain is a Powerhouse character, reduces Increase Damage Taken duration by 3 turns",
        specialName: "Sparking Figure",
        sailor: {
            "base": "Makes [INT] orbs beneficial for this character",
            "level1": "Boosts base ATK of all characters by 50",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of all characters by 50" },
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
                    "Level 5: Boosts base ATK by 100"
                ]
            },
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
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Judge, Niji, Yonji and Reiju",
                "description": [
                    "Level 1: Once per adventure, when you are inflicted with Increase Damage Taken, reduces Increase Damage Taken duration by 1 turns",
                    "Level 2: Once per adventure, when you are inflicted with Increase Damage Taken, reduces Increase Damage Taken duration by 1 turns",
                    "Level 3: Once per adventure, when you are inflicted with Increase Damage Taken, reduces Increase Damage Taken duration by 1 turns",
                    "Level 4: Once per adventure, when you are inflicted with Increase Damage Taken, reduces Increase Damage Taken duration by 1 turns delays all enemies for 1 turn",
                    "Level 5: Once per adventure, when you are inflicted with Increase Damage Taken, reduces Increase Damage Taken duration by 2 turns delays all enemies for 1 turn"
                ]
            }
        ]
    },
    2141: {//Niji
        captain: "Boosts ATK of [DEX] characters by 2.25x, boosts ATK of Powerhouse characters by 1.4x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [DEX] Powerhouse character has a 3.15x ATK",
        special: "If your Captain is a [DEX] or [INT] character, locks the chain multiplier at 2.75x for 2 turns. If your Captain is a Powerhouse character, reduces enemies' ATK Up and Enrage Buffs by 3 turn",
        specialName: "Super Blue Twin Step",
        sailor: {
            "base": "Makes [INT] orbs beneficial for this character",
            "level1": "Boosts base ATK, HP and RCV of all characters by 20",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of all characters by 20" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 30% chance to deal 9% of this character's attack in extra damage"
                ]
            },
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
        support: [
            {
                "Characters": "Judge, Ichiji, Yonji and Reiju",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV. When the supported character hits a PERFECT, reduces enemies' ATK UP and Enrage duration by 1 turn.",
                    "Level 2: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV. When the supported character hits a PERFECT, reduces enemies' ATK UP and Enrage duration by 1 turn.",
                    "Level 3: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV. When the supported character hits a PERFECT, reduces enemies' ATK UP and Enrage duration by 1 turn.",
                    "Level 4: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV. When the supported character hits a PERFECT, reduces enemies' ATK UP and Enrage duration by 1 turn.",
                    "Level 5: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV. When the supported character hits a PERFECT, reduces enemies' ATK UP and Enrage duration by 1 turn."
                ]
            }
        ]
    },
    2142: {//Yonji
        captain: "Boosts ATK of [STR] characters by 2.25x, boosts ATK of Powerhouse characters by 1.4x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [STR] Powerhouse character has a 3.15x ATK",
        special: "If your Captain is a [STR] or [INT] character, adds 55x character's ATK as additional Typeless damage for 1 turn. If your Captain is a Powerhouse character, reduces enemies' Percent Damage Reduction and Threshold Damage Reduction duration by 3 turns",
        specialName: "Burst End Iron Arm",
        specialNotes: "#{additionalDamage : 55x}",
        sailor: {
            "base": "Makes [INT] orbs beneficial for this character",
            "level1": "Boosts base HP of all characters by 100",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of all characters by 100" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 8 turns on this character"
                ]
            },
        ],
        support: [
            {
                "Characters": "Judge, Ichiji, Niji and Reiju",
                "description": [
                    "Level 1: Once per adventure, when you reach the final stage, adds 10x supported character's ATK as Additional Damage to Powerhouse character's attacks for 1 turn",
                    "Level 2: Once per adventure, when you reach the final stage, adds 10x supported character's ATK as Additional Damage to Powerhouse character's attacks for 1 turn",
                    "Level 3: Once per adventure, when you reach the final stage, adds 20x supported character's ATK as Additional Damage to Powerhouse character's attacks for 1 turn",
                    "Level 4: Once per adventure, when you reach the final stage, adds 20x supported character's ATK as Additional Damage to Powerhouse character's attacks for 1 turn",
                    "Level 5: Once per adventure, when you reach the final stage, adds 30x supported character's ATK as Additional Damage to Powerhouse character's attacks for 1 turn"
                ]
            }
        ]
    },
    2143: {//Diamante
        captain: "Boosts ATK of Slasher characters by 2x and their HP by 1.2x",
        special: "Deals 20x character's ATK in [DEX] damage to one enemy and boosts ATK of Slasher characters by 1.5x for 3 turns",
        specialName: "Corrida Glaive",
    },
    2144: {//Diamante
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.2x",
        special: "Deals 20x character's ATK in [DEX] damage to one enemy and boosts ATK of Slasher characters by 1.5x for 3 turns",
        specialName: "Corrida Glaive",
    },
    2145: {//Rebecca
        captain: "Boosts ATK of Striker characters by 1.5x and their HP by 1.2x",
        special: "Reduces enemies' Threshold Damage Reduction duration by 2 turns and reduces any damage received above 3,000 HP by 80% for 2 turns",
        specialName: "A Moment of Determination",
    },
    2146: {//Rebecca
        captain: "Boosts ATK of Striker characters by 2x and their HP by 1.2x",
        special: "Reduces enemies' Threshold Damage Reduction duration by 2 turns and reduces any damage received above 3,000 HP by 80% for 2 turns",
        specialName: "A Moment of Determination",
    },
    2147: {//Sanji V2
        captain: "If there are 6 Fighter characters in your crew, boosts chain multiplier by 4x and boosts ATK of Fighter characters by 1.75x. Lowers chances of getting Matching orbs proportionally to the crew's current HP.",
        captainNotes: "At 1 HP, the rate of Matching orbs is ?% (lower) and at full HP, the rate of Matching orbs is ?%",
        special: "Deals 150x character's ATK in [PSY] damage to one enemy. If HP is above 50% at the time the special is activated, boosts ATK of Fighter characters by 2.25x for 1 turn. If Sanji is your Captain or Friend/Guest Captain, reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 10 turns",
        specialName: "Full Course of Hell",
    },
    2148: {//Sanji V2
        captain: "If there are 6 Fighter characters in your crew, boosts chain multiplier by 4x and boosts ATK of Fighter characters by 1.75x. Lowers chances of getting Matching orbs proportionally to the crew's current HP.",
        captainNotes: "At 1 HP, the rate of Matching orbs is ?% (lower) and at full HP, the rate of Matching orbs is ?%",
        special: "Deals 150x character's ATK in [PSY] damage to one enemy. If HP is above 50% at the time the special is activated, boosts ATK of Fighter characters by 2.25x for 1 turn. If Sanji is your Captain or Friend/Guest Captain, reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 10 turns",
        specialName: "Full Course of Hell",
        sailor: {
            "base": "None",
            "level1": "Boosts this character's damage against [INT] characters by 1.2x",
            "level2": "Makes [PSY] orbs beneficial for Fighter characters",
        },
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts this character's damage against [INT] characters by 1.2x" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] orbs beneficial for Fighter characters" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
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
                    "Level 2: Reduces No Healing duration by 3 turns",
                    "Level 3: Reduces No Healing duration by 5 turns",
                    "Level 4: Reduces No Healing duration by 7 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
        ],
        support: [
            {
                "Characters": "Luffy, Nami and Reiju",
                "description": [
                    "Level 1: Adds 8% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 10% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 12% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 15% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 18% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2149: {//Zeff
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Fighter characters by 2.25x and their HP by 1.2x",
        special: "If your Captain is a Fighter character, boosts the Color Affinity of Fighter characters by 1.75x for 1 turn",
        specialNotes: "#{colorAffinity : 1.75}",
        specialName: "Chef's Long Kick",
        sailor: "When any other character uses a special, reduces own cooldown by 3 turns",
    },
    2150: {//Zeff
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Fighter characters by 2.5x and their HP by 1.2x",
        special: "If your Captain is a Fighter character, boosts the Color Affinity of Fighter characters by 1.75x for 1 turn",
        specialNotes: "#{colorAffinity : 1.75}",
        specialName: "Chef's Long Kick",
        sailor: {
            "base": "When any other character uses a special, reduces own cooldown by 3 turns",
            "level1": "Boosts this character's damage against [DEX] characters by 1.2x",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts this character's damage against [DEX] characters by 1.2x" },
            { "description": "Boosts base ATK by 30" },
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
                    "Level 2: Reduce own Special Cooldown by 2 turns at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 3 turns at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 4 turns at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 6 turns at the start of the fight"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2151: {//Pudding
        captain: "Boosts ATK of all characters by 1.75x and their HP by 1.3x. If you don't attack with her, reduces damage received by 20% for that turn.",
        special: "Changes all orbs on all characters into Pudding's orb, recovers 5,000 HP, reduces damage received by 80% for 1 turn and reduces Bind, Despair, Paralysis and Increase Damage Taken duration by 4 turns",
        specialName: "Memory Film",
        sailor: "Reduces Paralysis duration on this character by 5 turns",
    },
    2152: {//Pudding
        captain: "Boosts ATK of all characters by 2x and their HP by 1.3x. If you don't attack with her, reduces damage received by 20% for that turn.",
        special: "Changes all orbs on all characters into Pudding's orb, recovers 5,000 HP, reduces damage received by 80% for 1 turn and reduces Bind, Despair, Paralysis and Increase Damage Taken duration by 4 turns",
        specialName: "Memory Film",
        sailor: {
            "base": "Reduces Paralysis duration on this character by 5 turns",
            "level1": "If this character has an [QCK] orb and you hit a PERFECT with her, keep her [QCK] orb for the next turn",
        },
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: If this character has an [QCK] orb and you hit a PERFECT with her, keep her [QCK] orb for the next turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Characters": "Sanji and Reiju",
                "description": [
                    "Level 1: Once per adventure, when you reach the final stage, reduces crew's current HP by 20% and slightly boosts chances of getting Matching orbs for 3 turns",
                    "Level 2: Once per adventure, when you reach the final stage, reduces crew's current HP by 20% and slightly boosts chances of getting Matching orbs for 3 turns",
                    "Level 3: Once per adventure, when you reach the final stage, reduces crew's current HP by 20% and boosts chances of getting Matching orbs for 3 turns",
                    "Level 4: Once per adventure, when you reach the final stage, reduces crew's current HP by 20% and boosts chances of getting Matching orbs for 3 turns",
                    "Level 5: Once per adventure, when you reach the final stage, reduces crew's current HP by 20% and greatly boosts chances of getting Matching orbs for 3 turns"
                ]
            }
        ]
    },
    2153: {//Tamago
        captain: "Boosts ATK of Fighter Characters by 2.5x if they have a Matching orb, by 2.25x otherwise",
        special: "Deals 75x character's ATK in [DEX] damage to one enemy that will ignore damage negating abilities and barriers. If your Captain is a Fighter character, changes all orbs, including [BLOCK] orbs, on Fighter characters into Matching orbs",
        specialName: "Legs Benedict",
        specialNotes: "#{ignoreBarrier}",
        sailor: "When HP is above 50% at the start of the turn, boosts ATK of Fighter characters by 120",
    },
    2154: {//Tamago
        captain: "Boosts ATK of Fighter Characters by 2.75x if they have a Matching orb, by 2.5x otherwise",
        special: "Deals 75x character's ATK in [DEX] damage to one enemy that will ignore damage negating abilities and barriers. If your Captain is a Fighter character, changes all orbs, including [BLOCK] orbs, on Fighter characters into Matching orbs",
        specialName: "Legs Benedict",
        specialNotes: "#{ignoreBarrier}",
        sailor: {
            "base": "When HP is above 50% at the start of the turn, boosts ATK of Fighter characters by 120",
            "level1": "Makes [DEX] orbs beneficial for Fighter characters",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs beneficial for Fighter characters" },
            { "description": "Acquire Potential 2: Pinch Healing" },
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
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2155: {//Pekoms
        captain: "Boosts ATK of Fighter characters by 1.5x, protects from defeat as long as HP is above ?%",
        special: "Cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers and removes enemies Increased Defense buff duration completely",
        specialName: "Flicker Power Knuckle",
        specialNotes: "#{ignoreBarrier}",
    },
    2156: {//Pekoms
        captain: "Boosts ATK of Fighter characters by 1.75x, protects from defeat as long as HP is above ?%",
        special: "Cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers and removes enemies Increased Defense buff duration completely",
        specialName: "Flicker Power Knuckle",
        specialNotes: "#{ignoreBarrier}",
        sailor: {
            "base": "Reduces Blindness duration by 5 turns",
            "level1": "Makes [INT] orbs beneficial for Fighter characters",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs beneficial for Fighter characters" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ]
    },
    2157: {//Cracker
        captain: "Boosts ATK of Cerebral characters by 2.25x and their HP by 1.2x",
        special: [
            {
                "description": "Changes all orbs to [DEX] orbs, makes [DEX] orbs beneficial for all characters and cuts the current HP of one enemy by 10% that will ignore damage negating abilities and barriers.",
                "cooldown": [ 26, 11 ],
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 5 turns, changes all orbs, including [BLOCK] orbs, to [DEX] orbs, makes [DEX] orbs beneficial for all characters and cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers.",
                "cooldown": [ 30, 15 ],
            },
        ],
        specialName: "Honey Pretzel",
        specialNotes: "#{ignoreBarrier}<br>#{stages}",
    },
    2158: {//Cracker
        captain: "Boosts ATK of Cerebral characters by 2.75x and their HP by 1.25x",
        special: [
            {
                "description": "Changes all orbs to [DEX] orbs, makes [DEX] orbs beneficial for all characters and cuts the current HP of one enemy by 10% that will ignore damage negating abilities and barriers.",
                "cooldown": [ 26, 11 ],
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 5 turns, changes all orbs, including [BLOCK] orbs, to [DEX] orbs, makes [DEX] orbs beneficial for all characters and cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers.",
                "cooldown": [ 30, 15 ],
            },
        ],
        specialName: "Honey Pretzel",
        specialNotes: "#{ignoreBarrier}<br>#{stages}",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Cerebral characters by 75",
            "level2": "Boosts base HP of [DEX] characters by 75",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Cerebral characters by 75" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 2: Boosts base HP of [DEX] characters by 75" },
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
                    "Level 1: If you hit a PERFECT with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 50% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "[DEX] Characters",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 2% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 3% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 4% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 5% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2159: {//Magellan 6+
        captain: "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 2.25x and their HP by 1.5x and cuts the current HP of each enemy by 15% at the end of each turn. If 300,000 damage was dealt to enemies in the last turn, poisons all enemies.",
        captainNotes: "#{poison : 50x}<br>To poison all enemies, the damage dealt with normal attacks must exceed 300,000 and the poison does not bypass immunity.",
        special: "Inflicts Toxic to all enemies, recovers 13x character's RCV in HP at the end of each turn for 3 turns. If enemies are inflicted with Toxic or Poison upon activation of the special, delays all enemies for 1 turn.",
        specialNotes: "#{toxic : 50x : 2x : 3,000,000}<br>Delay effect will not trigger from the Toxic in Magellan's special, the enemy must already be poisoned.<br>If enemies are both Poisoned and inflicted with Toxic, only the Toxic damage will damage the enemy at the end of the turn.",
        specialName: "Venom Demon: Hell's Judgement",
        sailor: {
            "base": "None",
            "level1": "Cannot be blown away",
        },
        limit: [
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Sailor Ability 1: Cannot be blown away" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, recovers 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, recovers 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, recovers 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, recovers 3x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
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
        ]
    },
    2160: {//Doflamingo
        captain: "Boosts ATK of Shooter characters by 2.25x. If you use \"Punishment for the Weak\" in this turn boosts ATK of Shooter characters by 2.7x instead.",
        special: "Makes Damage and Health Cutting Specials of Shooter characters bypass all defensive Buffs, deals 150x character's ATK in [QCK] damage to one enemy, changes [RCV], [TND] and [BLOCK] orbs into Matching orbs and amplifies the effect of orbs for Shooter characters by 2x for 1 turn",
        specialName: "Punishment for the Weak",
        sailor: "Boosts base ATK of Shooter characters by 75",
    },
    2161: {//Doflamingo
        captain: "Boosts ATK of Shooter characters by 2.5x and their HP by 1.2x. If you use \"Punishment for the Weak\" in this turn boosts ATK of Shooter characters by 3.25x instead.",
        special: "Makes Damage and Health Cutting Specials of Shooter characters bypass all defensive Buffs, deals 150x character's ATK in [QCK] damage to one enemy, changes [RCV], [TND] and [BLOCK] orbs into Matching orbs and amplifies the effect of orbs for Shooter characters by 2x for 1 turn",
        specialName: "Punishment for the Weak",
        sailor: {
            "base": "Boosts base ATK of Shooter characters by 75",
            "level1": "Makes [QCK] orbs beneficial for Shooter characters",
        },
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs beneficial for Shooter characters" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ]
    },
    2162: {//Opera
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.25x",
        special: "Cuts the current HP of each enemy by 20%. If your crew has 5 or more Fighter characters, reduces Increase Damage Taken, Blindness and Despair duration by 7 turns and delays all enemies for 1 turn.",
        specialName: "Cream Monster",
        sailor: "Makes [STR] orbs beneficial for Fighter characters",
        specialNotes: "#{beneficial}",
    },
    2163: {//Opera
        captain: "Boosts ATK of Fighter characters by 2.5x and their HP by 1.25x",
        special: "Cuts the current HP of each enemy by 20%. If your crew has 5 or more Fighter characters, reduces Increase Damage Taken, Blindness and Despair duration by 7 turns and delays all enemies for 1 turn.",
        specialName: "Cream Monster",
        sailor: {
            "base": "Makes [STR] orbs beneficial for Fighter characters",
            "level1": "Reduces Silence duration on this character by 3 turns",
        },
        specialNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
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
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ],
        support: [
            {
                "Characters": "Fighter Characters",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, reduces Despair duration by 1 turn.",
                    "Level 2: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, reduces Despair duration by 1 turn.",
                    "Level 3: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, reduces Despair duration by 1 turn.",
                    "Level 4: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, reduces Despair duration by 1 turn.",
                    "Level 5: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, reduces Despair duration by 2 turns."
                ]
            }
        ]
    },
    2164: {//Baby 5
        captain: "Boosts ATK of Slasher, Striker and Shooter characters by 1.5x",
        special: "Changes the Captain's orb into [DEX], amplifies the effect of orbs for Fighter characters by 1.75x for 1 turn",
        specialName: "Irritation of Love",
        sailor: "If your Captain is a Fighter character, adds 1.5x character's ATK as Additional Damage",
    },
    2165: {//Baby 5
        captain: "Boosts ATK of Slasher, Striker and Shooter characters by 1.75x",
        special: "Changes the Captain's orb into [DEX], amplifies the effect of orbs for Fighter characters by 1.75x for 1 turn",
        specialName: "Irritation of Love",
        sailor: "If your Captain is a Fighter character, adds 1.5x character's ATK as Additional Damage",
    },
    2166: {//Don Sai
        captain: "Boosts ATK of Striker and Fighter characters by 2x after scoring 3 GREATS in a row, by 1.5x otherwise.",
        special: "Deals 50,000 Fixed damage to one enemy that will ignore damage negating abilities and barriers. If your captain is a Fighter or Striker character, randomizes orbs, including [BLOCK] orbs.",
        specialName: "Eight Fists",
        specialNotes:"#{ignoreBarrier}",
    },
    2167: {//Don Sai
        captain: "Boosts ATK of Striker and Fighter characters by 2.5x after scoring 3 GREATS in a row, by 2x otherwise.",
        special: "Deals 50,000 Fixed damage to one enemy that will ignore damage negating abilities and barriers. If your captain is a Fighter or Striker character, randomizes orbs, including [BLOCK] orbs.",
        specialName: "Eight Fists",
        specialNotes:"#{ignoreBarrier}",
    },
    2168: {//Inuarashi
        captain: "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 2x. If you use \"Lightning Counterattack\" in this turn and there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew boosts ATK of all characters by 2.75x instead, by 1.375x otherwise.",
        special: "Reduces Silence duration by 4 turns and reduces enemy Threshold Damage Reduction duration by 3 turns. If you are on a Treasure Map, amplifies the effects of orbs for all characters depending on your Treasure Map Level for 1 turn",
        specialName: "Lightning Counterattack",
        specialNotes: "Level 1-10: 1.75x orb boost<br\>Level 11-20: 2x orb boost<br\>Level 21+: 2.25x orb boost",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes:"#{silence}",
    },
    2169: {//Inuarashi
        captain: "If there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew, boosts ATK of all characters by 2.25x and their HP by 1.2x. If you use \"Lightning Counterattack\" in this turn and there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew boosts ATK of all characters by 3.5x instead, by 1.55x otherwise.",
        special: "Reduces Silence duration by 4 turns and reduces enemy Threshold Damage Reduction duration by 3 turns. If you are on a Treasure Map, amplifies the effects of orbs for all characters depending on your Treasure Map Level for 1 turn",
        specialName: "Lightning Counterattack",
        specialNotes: "Level 1-10: 1.75x orb boost<br\>Level 11-20: 2x orb boost<br\>Level 21+: 2.25x orb boost",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes:"#{silence}",
    },
    2170: {//Sicilian
        captain: "Boosts ATK of [DEX] characters by 1.5x",
        special: "Deals 15x character's ATK in [DEX] damage to one enemy, delays all enemies for 1 turn and if enemies have a barrier at the time the special was activated, boosts ATK of all characters by 1.75x, 1.5x otherwise.",
        specialName: "Lightning Slash",
    },
    2171: {//Sicilian
        captain: "Boosts ATK of [DEX] characters by 2.25x",
        special: "Deals 15x character's ATK in [DEX] damage to ome enemy, delays all enemies for 1 turn and if enemies have a barrier at the time the special was activated, boosts ATK of all characters by 1.75x, 1.5x otherwise.",
        specialName: "Lightning Slash",
    },
    2172: {//Swimsuit Shirahoshi
        captain: "Boosts ATK of Striker characters by 1.75x, recovers 1x character's RCV in HP at the end of each turn",
        special: "Reduces enemies' Percent Damage Reduction and crew's Chain Coefficient Reduction duration by 4 turns, changes Badly Matching orbs into Matching orbs and adds 0.65x to Chain multiplier for 1 turn.",
        specialName: "Spending Some Time with Megalo",
    },
    2173: {//Swimsuit Shirahoshi
        captain: "Boosts ATK of Striker characters by 2.25x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces enemies' Percent Damage Reduction and crew's Chain Coefficient Reduction duration by 4 turns, changes Badly Matching orbs into Matching orbs and adds 0.65x to Chain multiplier for 1 turn.",
        specialName: "Spending Some Time with Megalo",
    },
    2174: {//Jack TM
        captain: "Boosts ATK of Powerhouse characters by 1.75x and reduces damage received by 5%",
        special: "Reduces enemies' Percent Damage Reduction, Increased Defense and Damage Nullification duration by 2 turns and deals Fixed Typeless damage, proportional to the number of enemies on the stage when the special is activated, to one enemy that will ignore damage negating abilities and barriers.",
        specialNotes: "<br><b>1 enemy:</b> 300,000 damage<br><b>2 enemies:</b> 500,000 damage<br><b>3 enemies:</b> 800,000 damage<br><b>4 enemies:</b> 1,100,000 damage<br><b>5 enemies:</b> 1,500,000 damage<br><b>6 enemies:</b> 2,000,000 damage<br>",
        specialName: "Genocide Shotel",
    },
    2175: {//Jack TM
        captain: {
            "base": "Boosts ATK of Powerhouse characters by 2x and reduces damage received by 5%",
            "level1": "Boosts ATK of Powerhouse characters by 2.25x and reduces damage received by 5%",
            "level2": "Boosts ATK of Powerhouse characters by 2.25x and reduces damage received by 7%",
            "level3": "Boosts ATK of Powerhouse characters by 2.25x and reduces damage received by 10%",
            "level4": "Boosts ATK of Powerhouse characters by 2.5x and reduces damage received by 10%",
            "level5": "Boosts ATK of Powerhouse characters by 2.5x and reduces damage received by 15%",
            "level6": "Boosts ATK of Powerhouse characters by 2.75x and reduces damage received by 20%",
        },
        special: "Reduces enemies' Percent Damage Reduction, Increased Defense and Damage Nullification duration by 2 turns and deals Fixed Typeless damage, proportional to the number of enemies on the stage when the special is activated, to one enemy that will ignore damage negating abilities and barriers.",
        specialNotes: "<br><b>1 enemy:</b> 300,000 damage<br><b>2 enemies:</b> 500,000 damage<br><b>3 enemies:</b> 800,000 damage<br><b>4 enemies:</b> 1,100,000 damage<br><b>5 enemies:</b> 1,500,000 damage<br><b>6 enemies:</b> 2,000,000 damage<br>",
        specialName: "Genocide Shotel",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of all characters by 75",
            "level2": "Completely resists Paralysis on this character",
        },
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse characters by 2.25x and reduces damage received by 5%" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of all characters by 75" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse characters by 2.25x and reduces damage received by 7%" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse characters by 2.25x and reduces damage received by 10%" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse characters by 2.5x and reduces damage received by 15%" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse characters by 2.5x and reduces damage received by 15%" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse characters by 2.75x and reduces damage received by 20%" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2176: {//Nekomamushi
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Reduces Bind duration by 2 turns and changes own orb into [QCK]. If your Captain is a Striker character, adds 0.5x to Chain multiplier for 2 turns.",
        specialName: "Cat Toy",
    },
    2177: {//Nekomamushi
        captain: "Boosts ATK of Striker characters by 2.25x and their HP by 1.1x",
        special: "Reduces Bind duration by 2 turns and changes own orb into [QCK]. If your Captain is a Striker character, adds 0.5x to Chain multiplier for 2 turns.",
        specialName: "Cat Toy",
    },
    2178: {//Roddy
        captain: "Boosts ATK of [STR] characters by 1.75x",
        special: "Deals 20x character's ATK in [STR] damage to one enemy, reduces Special Cooldown of Striker specials by 1 turn and boosts ATK of Striker characters by 1.5x for 1 turn.",
        specialName: "Moo Golova",
    },
    2179: {//Blackback
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.5x",
        special: "Reduces damage received by 50% for 1 turn and boosts the Color Affinity of [STR] characters by 1.25x for 1 turn.",
        specialName: "Guardian's One Arm Back Throw",
    },
    2180: {//Whitebeard&Marco
        captain: {
            "character1": "Boosts ATK of [PSY] characters by 3.5x, boosts ATK of all other characters by 2.75x, reduce damage received by 20% and makes [PSY] orbs beneficial for all characters",
            "character2": "Boosts ATK of [INT] characters by 3.5x, boosts ATK of all other characters by 2.75x, boosts RCV of all characters by 1.25x and makes [INT] orbs beneficial for all characters",
            "combined": "Boosts ATK of [PSY] and [INT] characters by 4.25x, boosts ATK of all other characters by 3x, boosts RCV of all characters by 1.5x, reduce damage received by 20% and makes [PSY] and [INT] orbs beneficial for all characters"
        },
        special: "Cuts the current HP of each enemy by 30%, recovers 20,000 HP, randomizes all orbs into either [PSY], [INT] or [RCV] orbs and becomes Whitebeard & Marco for 3 turns",
        swap: "When Change is activated, reduces Paralysis and Silence duration by 1 turn, makes [RCV] orbs beneficial for all characters for 1 turn and changes their own orb into a [RCV] orb",
        swapNotes: "#{beneficial}",
        specialName: "Immortal Blue Flame Shockwave",
        sailor: {
            "character1": "Boosts base ATK of [PSY] and [INT] characters by 75",
            "character2": "Boosts base HP and RCV of [PSY] and [INT] characters by 75",
            "combined": "Boosts base ATK, HP and RCV of [PSY] and [INT] characters by 100"
        },
    },
    2181: {//Whitebeard&Marco
        captain: {
            "character1": "Boosts ATK of [PSY] characters by 3.5x, boosts ATK of all other characters by 2.75x, reduce damage received by 20% and makes [PSY] orbs beneficial for all characters",
            "character2": "Boosts ATK of [INT] characters by 3.5x, boosts ATK of all other characters by 2.75x, boosts RCV of all characters by 1.25x and makes [INT] orbs beneficial for all characters",
            "combined": "Boosts ATK of [PSY] and [INT] characters by 4.25x, boosts ATK of all other characters by 3x, boosts RCV of all characters by 1.5x, reduce damage received by 20% and makes [PSY] and [INT] orbs beneficial for all characters"
        },
        special: "Cuts the current HP of each enemy by 30%, recovers 20,000 HP, randomizes all orbs into either [PSY], [INT] or [RCV] orbs and becomes Whitebeard & Marco for 3 turns",
        swap: "When Change is activated, reduces Paralysis and Silence duration by 1 turn, makes [RCV] orbs beneficial for all characters for 1 turn and changes their own orb into a [RCV] orb",
        swapNotes: "#{beneficial}",
        specialName: "Immortal Blue Flame Shockwave",
        sailor: {
            "character1": "Boosts base ATK of [PSY] and [INT] characters by 75",
            "character2": "Boosts base HP and RCV of [PSY] and [INT] characters by 75",
            "combined": "Boosts base ATK, HP and RCV of [PSY] and [INT] characters by 100",
            "level1": "Completely resists Paralysis and Silence on this character"
        },
        limit: [
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 2: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base HP by 120" },
            { "description": "Acquire Sailor Ability 1: Completely resists Paralysis and Silence on this character" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [PSY] characters by 1%",
                    "Level 2: Reduce damage taken from [PSY] characters by 2%",
                    "Level 3: Reduce damage taken from [PSY] characters by 3%",
                    "Level 4: Reduce damage taken from [PSY] characters by 5%",
                    "Level 5: Reduce damage taken from [PSY] characters by 7%"
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
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 5 turn on this character",
                    "Level 3: Reduces Slot Bind duration by 7 turn on this character",
                    "Level 4: Reduces Slot Bind duration by 10 turn on this character",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ],
    },
    2182: {//Boa Hancock
        captain: "Boosts ATK of [PSY] and [INT] characters by 2.25x",
        special: "Delays all enemies for 1 turn. If your crew has 3 or more [INT] characters, changes [BLOCK] orbs into Matching orbs and boosts ATK of [PSY] and [INT] characters by 2x for 1 turn",
        specialName: "Mero Mero Slave Arrow",
        sailor: "Boosts base RCV of [PSY] and [INT] characters by 50",
    },
    2183: {//Boa Hancock
        captain: "Boosts ATK of [PSY] and [INT] characters by 2.5x and their RCV by 1.2x",
        special: "Delays all enemies for 1 turn. If your crew has 3 or more [INT] characters, changes [BLOCK] orbs into Matching orbs and boosts ATK of [PSY] and [INT] characters by 2x for 1 turn",
        specialName: "Mero Mero Slave Arrow",
        sailor: {
            "base": "Boosts base RCV of [PSY] and [INT] characters by 50",
            "level1": "Makes [STR], [QCK], [DEX] and [PSY] orbs beneficial for this character if your Captain is a [PSY] or [INT] character",
        },
        limit: [
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 1: Makes [STR], [QCK], [DEX] and [INT] orbs beneficial for this character if your Captain is a [PSY] or [INT] character" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turn on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turn on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turn on this character"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 10% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 15% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 20% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    2184: {//Mihawk
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Deal 50x character's ATK in Typeless damage to one enemy and reduces enemy Barrier duration by 1 turn. If your crew has 3 or more [PSY] characters, changes own orb into [PSY] and amplifies the effect of orbs by 2x for 1 turn",
        specialName: "Hawk Eyes' Instantaneous Killing",
        sailor: "Boosts base ATK and HP of [PSY] and [INT] characters by 50",
    },
    2185: {//Mihawk
        captain: "Boosts ATK of Slasher characters by 2.5x and boosts HP of [PSY] characters by 1.3x",
        special: "Deal 50x character's ATK in Typeless damage to one enemy and reduces enemy Barrier duration by 1 turn. If your crew has 3 or more [PSY] characters, changes own orb into [PSY] and amplifies the effect of orbs by 2x for 1 turn",
        specialName: "Hawk Eyes' Instantaneous Killing",
        sailor: {
            "base": "Boosts base ATK and HP of [PSY] and [INT] characters by 50",
            "level1": "Boosts this character's damage against [INT] characters by 1.1x",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts this character's damage against [INT] characters by 1.1x" },
            { "description": "Boosts base HP by 55" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 120",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2186: {//Kizaru
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Shooter and Fighter characters by 1.75x",
        special: "Reduces Special Cooldown of [PSY] and [INT] characters by 1 turn and changes adjacent orbs into Matching Orbs. If your Captain is a [PSY] or [INT] character, locks the chain multiplier at 3x for 1 turn.",
        specialName: "Amaterasu Descent",
        sailor: "Boosts base ATK, HP and RCV of [PSY] and [INT] characters by 30",
    },
    2187: {//Kizaru
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Shooter and Fighter characters by 2.25x and their HP by 1.25x",
        special: "Reduces Special Cooldown of [PSY] and [INT] characters by 1 turn and changes adjacent orbs into Matching Orbs. If your Captain is a [PSY] or [INT] character, locks the chain multiplier at 3x for 1 turn.",
        specialName: "Amaterasu Descent",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of [PSY] and [INT] characters by 30",
            "level1": "Makes [INT] orbs beneficial for this character",
        },
        limit: [
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs beneficial for this character" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ]
    },
    2188: {//Strawberry
        captain: "Boosts ATK of Slasher and Cerebral characters by 2x",
        special: "Reduces Bind, Despair, ATK DOWN and Chain Multiplier Limit duration by 2 turns, reduces enemy Barrier duration by 1 turn and deals 50,000 Fixed damage to one enemy",
        specialName: "Heartful Twin Slashes",
        sailor: "When any other [PSY] or [INT] character uses a special, reduces own cooldown by 3 turns",
    },
    2189: {//Strawberry
        captain: "Boosts ATK of Slasher and Cerebral characters by 2.25x and reduce damage received by 10%",
        special: "Reduces Bind, Despair, ATK DOWN and Chain Multiplier Limit duration by 2 turns, reduces enemy Barrier duration by 1 turn and deals 50,000 Fixed damage to one enemy",
        specialName: "Heartful Twin Slashes",
        sailor: {
            "base": "When any other [PSY] or [INT] character uses a special, reduces own cooldown by 3 turns",
            "level1": "Makes [TND] orbs beneficial for [PSY] and [INT] characters",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Makes [TND] orbs beneficial for [PSY] and [INT] characters" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage"
                ]
            },
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
        ],
        support: [
            {
                "Characters": "Cerebral Characters",
                "description": [
                    "Level 1: Adds 1% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 2: Adds 2% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 3: Adds 3% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 4: Adds 4% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 5: Adds 5% of this character's base HP and RCV to the supported character's base HP and RCV"
                ]
            }
        ]
    },
    2190: {//Rebecca
        captain: "Boosts ATK of Striker and Slasher characters proportionally to the crew's current HP, by 2.25x at max and reduce damage received by 7%",
        captainNotes: "#{captainProportional : higher : 1 + 1.25 * ((remaining HP) / (total HP)) : 2.25 : 1}",
        special: "Reduces enemies' Threshold Damage Reduction duration by 5 turns and boosts ATK of Slasher and Striker characters by 1.75x for 1 turn. If your Captain is a Slasher or Striker character, reduces RCV DOWN and Increase Damage Taken duration by 3 turns.",
        specialName: "Heart-Throbbing Beach Volleyball",
        sailor: "If your Captain is a Slasher or Striker character, reduces Blindness duration by 5 turns",
    },
    2191: {//Rebecca
        captain: "Boosts ATK of Striker and Slasher characters proportionally to the crew's current HP, by 2.5x at max and reduce damage received by 15%",
        captainNotes: "#{captainProportional : higher : 1 + 1.5 * ((remaining HP) / (total HP)) : 2.5 : 1}",
        special: "Reduces enemies' Threshold Damage Reduction duration by 5 turns and boosts ATK of Slasher and Striker characters by 1.75x for 1 turn. If your Captain is a Slasher or Striker character, reduces RCV DOWN and Increase Damage Taken duration by 3 turns.",
        specialName: "Heart-Throbbing Beach Volleyball",
        sailor: "If your Captain is a Slasher or Striker character, reduces Blindness duration by 5 turns",
    },
    2192: {//Kuma
        captain: "Boosts ATK of Shooter characters by 2x and recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Reduces enemies' Threshold Damage Reduction and Percent Damage Reduction duration by 3 turns and changes adjacent orbs into [RCV] orbs. If there are 2 enemies or more on the stage when the special is activated, instantly defeats one enemy with HP equal to or below 350x character's ATK, cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers otherwise",
        specialName: "Erasing Palm Strike",
        sailor: "Boosts base HP of Shooter characters by 75",
    },
    2193: {//Kuma
        captain: "Boosts ATK of Shooter characters by 2.5x and recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces enemies' Threshold Damage Reduction and Percent Damage Reduction duration by 3 turns and changes adjacent orbs into [RCV] orbs. If there are 2 enemies or more on the stage when the special is activated, instantly defeats one enemy with HP equal to or below 350x character's ATK, cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers otherwise",
        specialName: "Erasing Palm Strike",
        sailor: {
            "base": "Boosts base HP of Shooter characters by 75",
            "level1": "Makes [PSY] orbs beneficial for Shooter characters",
        },
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs beneficial for Shooter characters" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ]
    },
    2194: {//EXP Reiju
        captain: "Boosts ATK of all characters by 2.25x and boosts EXP and amount of Beli received by 1.2x",
        captainNotes: "EXP and Beli boost does not take effect if she becomes your captain in the middle of the adventure.",
        special: "Changes [TND] and Badly Matching orbs into Matching orbs and switches orbs between slots once",
        specialName: "Royal Treatment",
    },
    2195: {//Corazon +
        captain: "Boosts ATK of all characters proportionally to the crew's current HP, by 3x at max. Recovers 1.5x his RCV at the end of the turn each time you hit a Good. Recovers 0.5x his RCV at the end of the turn each time you hit a Great",
        captainNotes: "#{captainProportional : higher : ? + ? * (remaining HP) / (total HP) : 3 : ? }",
        special: "Recovers 50x character's RCV in HP and reduces Bind, Despair, Paralysis, ATK DOWN, Chain Multiplier Limit and Chain Coefficient Reduction duration by 3 turns. If Corazon is your Captain or Friend/Guest Captain, reduces Despair duration by 20 turns.",
        specialName: "Grateful Love",
        sailor: {
            "base": "None",
            "level1": "Reduces Paralysis duration by 1 turn",
            "level2": "Reduces Silence duration by 1 turn",
        },
        limit: [
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis duration by 1 turn" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Acquire Sailor Ability 2: Reduces Silence duration by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 3: Cooldown Reduction" },
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
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turn",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 3 turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 5 turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 7 turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 10 turn at the start of the fight"
                ]
            },
        ],
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Law",
                "description": [
                    "Level 1: Once per adventure, when you are inflicted with Bind or Despair, reduces Bind and Despair duration by 1 turn.",
                    "Level 2: Once per adventure, when you are inflicted with Bind or Despair, reduces Bind and Despair duration by 1 turn.",
                    "Level 3: Once per adventure, when you are inflicted with Bind or Despair, reduces Bind and Despair duration by 1 turn.",
                    "Level 4: Once per adventure, when you are inflicted with Bind, Despair or Paralysis, reduces Bind, Despair and Paralysis duration by 1 turn.",
                    "Level 5: Once per adventure, when you are inflicted with Bind, Despair or Paralysis, reduces Bind, Despair and Paralysis duration by 2 turns."
                ]
            }
        ]
    },
    2196: {//Blackbeard
        captain: "Boosts ATK of Driven characters by 2x and boosts their HP by 1.2x",
        special: "Reduces enemies' Threshold Damage Reduction, Percent Damage Reduction, End of Turn Damage/Percent Cut, End of Turn Heal, Increased Defense, Damage Nullification, Barrier, ATK Up, Enrage and Resilience Buffs duration by 1 turn. Boosts ATK of all characters by 2x if HP is below 10% at the time the special is activated.",
        specialName: "The Signal of Changing Times",
    },
    2197: {//Blackbeard
        captain: "Boosts ATK of Driven characters by 3.75x when HP is 10% or below, 2x otherwise and boosts their HP by 1.2x",
        special: "Reduces enemies' Threshold Damage Reduction, Percent Damage Reduction, End of Turn Damage/Percent Cut, End of Turn Heal, Increased Defense, Damage Nullification, Barrier, ATK Up, Enrage and Resilience Buffs duration by 1 turn. Boosts ATK of all characters by 2x if HP is below 10% at the time the special is activated.",
        specialName: "The Signal of Changing Times",
        sailor: {
            "base": "None",
            "level1": "When HP is below 10% at the start of the turn, boosts base ATK of all characters by 100",
            "level2": "Makes [PSY] orbs beneficial for this character",
        },
        limit: [
            { "description": "Boosts base RCV by 3" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: When HP is below 10% at the start of the turn, boosts base ATK of all characters by 100" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] orbs beneficial for this character" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 75% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2198: {//Killer
        captain: "Boosts ATK of Striker characters by 2x and their HP by 1.2x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 3 times to a maximum of 3x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "If the HP of the enemy with the highest Maximum HP is above 50%, cuts the current HP of one enemy by 20% and boosts the Color Affinity of all characters by 1.5x for 3 turns, otherwise, deals 100x character's ATK in [INT] damage to one enemy and boosts the Color Affinity of all characters by 1.75x for 3 turns.",
        specialName: "Soaring Massacre Blades",
        sailor: "Boosts own base ATK by 200 if this character is the last in the chain to attack",
    },
    2199: {//Killer
        captain: "Boosts ATK of Striker characters by 2x and their HP by 1.2x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 3 times to a maximum of 3.25x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "If the HP of the enemy with the highest Maximum HP is above 50%, cuts the current HP of one enemy by 20% and boosts the Color Affinity of all characters by 1.5x for 3 turns, otherwise, deals 100x character's ATK in [INT] damage to one enemy and boosts the Color Affinity of all characters by 1.75x for 3 turns.",
        specialName: "Soaring Massacre Blades",
        sailor: {
            "base": "Boosts own base ATK by 200 if this character is the last in the chain to attack",
            "level1": "Boosts this character's damage against [PSY] characters by 1.2x"
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Boosts this character's damage against [PSY] characters by 1.2x" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turn",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ]
    },
    2200: {//Shiki
        captain: "Boosts ATK of [DEX], [QCK] and [INT] characters by 2.75x at the start of the chain, boosts ATK by 4x following a chain of [DEX] > [INT] > [QCK] attacks no lower than Good and boosts HP by 1.35x. Makes [TND] and [RCV] orbs beneficial for all characters",
        special: "Reduces crew's current HP by 99%, deals 30x the amount of HP subtracted in Typeless damage to all enemies and changes all orbs, including [BLOCK] orbs, into [RCV] orbs",
        specialName: "Lion's Threat: Earth Bind",
    },
    2201: {//Shiki
        captain: "Boosts ATK of [DEX], [QCK] and [INT] characters by 2.75x at the start of the chain, boosts ATK by 4x following a chain of [DEX] > [INT] > [QCK] attacks no lower than Good and boosts HP by 1.35x. Makes [TND] and [RCV] orbs beneficial for all characters",
        special: "Reduces crew's current HP by 99%, deals 30x the amount of HP subtracted in Typeless damage to all enemies and changes all orbs, including [BLOCK] orbs, into [RCV] orbs",
        specialName: "Lion's Threat: Earth Bind",
        sailor: {
            "base": "None",
            "level1": "Makes [DEX], [RCV] and [TND] orbs beneficial for this character",
            "level2": "Completely resists Silence on this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Acquire Sailor Ability 1: Makes [DEX], [RCV] and [TND] orbs beneficial for this character" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base HP by 75" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 125" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Sailor Ability 2: Completely resists Silence on this character" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Acquire Potential 3: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 5%",
                    "Level 5: Reduce damage taken from [STR] characters by 7%"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 25% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, recovers 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ]
    },
    2202: {//Indigo
        captain: "Boosts ATK of Shooter characters by 2.25x",
        special: "If HP is below 10%, recovers all missing HP. If your Captain is a Driven character, removes Poison and Blindness duration completely and reduces damage received by 50% for 3 turns.",
        specialName: "Chemical Juggling",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    2203: {//Indigo
        captain: "Boosts ATK of Shooter characters by 2.5x and their RCV by 1.25x",
        special: "If HP is below 10%, recovers all missing HP. If your Captain is a Driven character, removes Poison and Blindness duration completely and reduces damage received by 50% for 3 turns.",
        specialName: "Chemical Juggling",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "If your Captain is a Driven character, reduces Paralysis duration by 1 turn"
        },
        sailorNotes: "#{silence}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Sailor Ability 1: If your Captain is a Driven character, reduces Paralysis duration by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ]
    },
    2204: {//Scarlet
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2.5x following a chain of Good > Great > PERFECT hits",
        special: "If HP is below 10%, amplifies the effect of orbs by 2x for 1 turn. If your Captain is a Driven character, locks all orbs for 1 turn and reduces enemies' ATK Up, Enrage and End of Turn Damage/Percent Cut duration by 5 turns.",
        specialName: "Natural Strength",
        sailor: "If your Captain is a Driven character, boosts own base ATK by 100",
    },
    2205: {//Scarlet
        captain: "Boosts ATK of Fighter and Powerhouse characters by 3.25x following a chain of Good > Great > PERFECT hits",
        special: "If HP is below 10%, amplifies the effect of orbs by 2x for 1 turn. If your Captain is a Driven character, locks all orbs for 1 turn and reduces enemies' ATK Up, Enrage and End of Turn Damage/Percent Cut duration by 5 turns.",
        specialName: "Natural Strength",
        sailor: {
            "base": "If your Captain is a Driven character, boosts own base ATK by 100",
            "level1": "Boosts base ATK of all characters by 50"
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of all characters by 50" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 120",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2206: {//Luffy
        captain: "Boosts ATK of Striker characters by 1.5x",
        special: "Reduces enemy Barrier duration by 1 turn and reduces the defense of all enemies by 100% for 1 turn. If you are on a Treasure Map, boosts ATK of [DEX], [QCK] and [INT] characters depending on your Treasure Map Level for 1 turn",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
        specialName: "Gomu Gomu no Fireworks: Golden Peony",
    },
    2207: {//Luffy
        captain: "Boosts ATK of Striker characters by 1.75x",
        special: "Reduces enemy Barrier duration by 1 turn and reduces the defense of all enemies by 100% for 1 turn. If you are on a Treasure Map, boosts ATK of [DEX], [QCK] and [INT] characters depending on your Treasure Map Level for 1 turn",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
        specialName: "Gomu Gomu no Fireworks: Golden Peony",
    },
    2208: {//Gan Fall
        captain: "Boosts ATK of [INT] characters by 1.25x",
        special: "Reduces crew's ATK DOWN and Bind duration by 3 turns and changes bottom row orbs into Matching orbs",
        specialName: "Heavenly Charge",
    },
    2209: {//Gan Fall
        captain: "Boosts ATK of [INT] characters by 1.5x and their HP by 1.2x",
        special: "Reduces crew's ATK DOWN and Bind duration by 3 turns and changes bottom row orbs into Matching orbs",
        specialName: "Heavenly Charge",
    },
    2210: {//Enel TM
        captain: "Boosts ATK of all characters by 1.5x, deals 5656 in [PSY] damage to all enemies at the end of each turn and recovers 51 HP at end of each turn",
        special: "Deals 565,600 Fixed damage to all enemies and locks all orbs for 1 turn.",
        specialName: "God's Judgement: El Thor",
    },
    2211: {//Enel TM
        captain: {
            "base": "Boosts ATK of all characters by 2x, deals 5656 in [PSY] damage to all enemies at the end of each turn and recovers 51 HP at end of each turn",
            "level1": "Boosts ATK of all characters by 2x, deals 15656 in [PSY] damage to all enemies at the end of each turn and recovers 151 HP at end of each turn",
            "level2": "Boosts ATK of all characters by 2x, deals 25656 in [PSY] damage to all enemies at the end of each turn and recovers 251 HP at end of each turn",
            "level3": "Boosts ATK of all characters by 2x, deals 35656 in [PSY] damage to all enemies at the end of each turn and recovers 351 HP at end of each turn",
            "level4": "Boosts ATK of all characters by 2x, deals 45656 in [PSY] damage to all enemies at the end of each turn and recovers 451 HP at end of each turn",
            "level5": "Boosts ATK of all characters by 2x, deals 56560 in [PSY] damage to all enemies at the end of each turn and recovers 510 HP at end of each turn",
            "level6": "Boosts ATK of all characters by 2.5x, deals 56560 in [PSY] damage to all enemies at the end of each turn and recovers 510 HP at end of each turn",
        },
        special: "Deals 565,600 Fixed damage to all enemies and locks all orbs for 1 turn.",
        specialName: "God's Judgement: El Thor",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] orbs beneficial for this character",
            "level2": "When any other character uses a special, reduces own cooldown by 5 turns",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters by 2x, deals 15656 in [PSY] damage to all enemies at the end of each turn and recovers 151 HP at end of each turn" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs beneficial for this character" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters by 2x, deals 25656 in [PSY] damage to all enemies at the end of each turn and recovers 251 HP at end of each turn" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters by 2x, deals 35656 in [PSY] damage to all enemies at the end of each turn and recovers 351 HP at end of each turn" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters by 2x, deals 45656 in [PSY] damage to all enemies at the end of each turn and recovers 451 HP at end of each turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: When any other character uses a special, reduces own cooldown by 5 turns" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters by 2x, deals 56560 in [PSY] damage to all enemies at the end of each turn and recovers 510 HP at end of each turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters by 2.5x, deals 56560 in [PSY] damage to all enemies at the end of each turn and recovers 510 HP at end of each turn" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
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
        ],
    },
    2212: {//Pudding
        captain: "Boosts ATK of Cerebral characters by 1.75x",
        special: "Recovers 7,000 HP, Reduces crew's ATK DOWN and enemies' Resilience Buffs duration by 5 turns and changes adjacent orbs into Matching Orbs",
        specialName: "Eyes Hiding Shyness",
        sailor: "Reduces Paralysis duration by 1 turn",
    },
    2213: {//Pudding
        captain: "Boosts ATK of Cerebral characters by 2.25x and their RCV by 1.2x",
        special: "Recovers 7,000 HP, Reduces crew's ATK DOWN and enemies' Resilience Buffs duration by 5 turns and changes adjacent orbs into Matching Orbs",
        specialName: "Eyes Hiding Shyness",
        sailor: "Reduces Paralysis duration by 1 turn",
    },
    2214: {//Reiju
        captain: "Boosts ATK of all characters by 1.5x and their RCV by 1.2x.",
        special: [
            {
                "description": "Delays all enemies for 1 turn and makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns.",
                "cooldown": [ 13, 7 ],
            },
            {
                "description": "Delays all enemies for 1 turn, reduces Paralysis, Bind, Despair and Silence duration by 1 turn and makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns.",
                "cooldown": [ 17, 10 ],
            },
            {
                "description": "Delays all enemies for 2 turn, reduces Paralysis, Bind, Despair and Silence duration by 2 turns and makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns.",
                "cooldown": [ 22, 15 ],
            },
        ],
        specialName: "Tropical Country Flowers",
        specialNotes: "#{stages}",
        sailor: "Reduces Silence duration on this character by 3 turns",
    },
    2215: {//Reiju
        captain: "Boosts ATK of all characters by 1.5x and their RCV by 1.2x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 8 times to a maximum of 3x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: [
            {
                "description": "Delays all enemies for 1 turn and makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns.",
                "cooldown": [ 13, 7 ],
            },
            {
                "description": "Delays all enemies for 1 turn, reduces Paralysis, Bind, Despair and Silence duration by 1 turn and makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns.",
                "cooldown": [ 17, 10 ],
            },
            {
                "description": "Delays all enemies for 2 turn, reduces Paralysis, Bind, Despair and Silence duration by 2 turns and makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns.",
                "cooldown": [ 22, 15 ],
            },
        ],
        specialName: "Tropical Country Flowers",
        specialNotes: "#{stages}<br>#{silence}",
        sailor: "Reduces Silence duration on this character by 2 turns",
        sailorNotes: "#{silence}",
    },
    2216: {//Conis
        captain: "Boosts ATK, HP and RCV of all characters by 1.5x",
        special: "Removes Poison duration completely, reduces RCV DOWN duration by 10 turns, boosts RCV of all characters by 1.5x for 1 turn and reduces Special Cooldown of your top row by 1 turn.",
        sailor: "Restores her own special cooldown by 5 turns when it is rewinded",
        specialName: "Angel Cruising",
    },
    2217: {//Conis
        captain: "Boosts ATK, HP and RCV of all characters by 1.75x",
        special: "Removes Poison duration completely, reduces RCV DOWN duration by 10 turns, boosts RCV of all characters by 1.5x for 1 turn and reduces Special Cooldown of your top row by 1 turn.",
        sailor: "Restores her own special cooldown by 5 turns when it is rewinded",
        specialName: "Angel Cruising",
    },
    2218: {//Inuarashi
        captain: "Boosts ATK of Cerebral characters by 1.75x",
        special: "Reduces enemies' Increased Defense duration by 2 turns and changes own orb into [STR]. If your Captain is a Cerebral character, Locks the chain multiplier at 2.5x for 1 turn.",
        specialName: "Dog Treat",
    },
    2219: {//Inuarashi
        captain: "Boosts ATK of Cerebral characters by 2.25x and their HP by 1.2x",
        special: "Reduces enemies' Increased Defense duration by 2 turns and changes own orb into [STR]. If your Captain is a Cerebral character, Locks the chain multiplier at 2.5x for 1 turn.",
        specialName: "Dog Treat",
    },
    2220: {//Miyagi
        captain: "Boosts RCV of Cerebral characters by 1.5x",
        special: "Removes Blindness duration completely.",
        specialName: "Positive Therapy",
    },
    2221: {//Tristan
        captain: "Boosts chain multiplier by 1.5x",
        special: "Recovers 2,000 HP and reduces Despair duration by 2 turns.",
        specialName: "Loving Family Care",
    },
    2222: {
        captain: "Boosts ATK of [STR] characters by 1.5x",
        special: "Reduces Paralysis duration by 2 turns and boosts ATK of all characters by 1.25x for 1 turn.",
        specialName: "Mink Attack Boost",
    },
    2223: {
        captain: "Boosts ATK of [DEX] characters by 1.5x",
        special: "Reduces Paralysis duration by 2 turns and amplifies the effect of orbs by 1.25x for 1 turn.",
        specialName: "Mink Slot Boost",
    },
    2224: {
        captain: "Boosts ATK of [QCK] characters by 1.5x",
        special: "Reduces Paralysis duration by 2 turns and adds 0.25x to Chain multiplier for 1 turn.",
        specialName: "Mink Chain Plus",
    },
    2225: {
        captain: "Boosts ATK of [INT] characters by 1.5x",
        special: "Reduces Paralysis duration by 2 turns and boosts the Color Affinity of all characters by 1.25x for 1 turn.",
        specialName: "Mink Weak Boost",
    },
    2226: {
        captain: "Boosts ATK of [PSY] characters by 1.5x",
        special: "Reduces Paralysis duration by 2 turns and adds 2.5x character's ATK as Additional Typeless Damage for 1 turn.",
        specialName: "Mink Damage Plus",
    },
    2227: {//Gifters
        captain: "Boosts ATK of Fighter characters by 1.5x",
        special: "Makes Badly Matching and BLOCK orbs not reduce damage for 1 turn and deals 5x character's ATK as DEX damage to all enemies at the end of the turn for 2 turns.",
        specialName: "Wolf Grip",
    },
    2228: {//Pleasures
        captain: "Boosts ATK of Slasher characters by 1.5x",
        special: "Deals 10x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers and makes PERFECTs easier to hit for 2 turns.",
        specialName: "Trembling Destruction",
    },
    2229: {//Capone
        captain: "Reduces cooldown of Shooter character specials by 1 turn at the start of the fight and boosts ATK of Shooter characters by 2.25x",
        special: "Deals 12 hits of random Typeless damage to random enemies and locks all orbs for 1 turn. If HP is above ?% at the time the special is activated, boosts the Color Affinity of Shooter characters by 1.5x for 1 turn.",
        specialName: "Leader's Orders \"Simultaneous Sweep\"",
    },
    2230: {//Sheepshead
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Boosts own ATK by 2x for 1 turn and adds 0.4x to Chain multiplier for 1 turn.",
        specialName: "Cruel Questioning",
    },
    2231: {//Jack
        captain: "Boosts ATK of Powerhouse characters by 2.5x and their HP by 1.2x and recovers ?x character's RCV in HP at the end of each turn",
        special: "If the HP of the enemy with the highest current HP is above 50%, cuts the current HP of one enemy by 25%, otherwise, deals 120x character's ATK in Typeless damage to one enemy.",
        specialName: "The Start of Destruction",
    },
    2232: {//Legend Enel
        captain: "Reduces HP of all characters by 20%, reduces damage received by 13%, boosts chances of getting [RCV] orbs, makes [RCV] orbs beneficial for all characters, boosts ATK of all characters proportionally to the amount healed in the last turn, by 3.75 at max.",
        captainNotes: "The range of ATK boost is from 2x to 3.75x. The exact boost is calculated as 2 + <HP recovered in the previous turn> * 0.000175 and maxes at 10,000k HP healed. This ignores your max HP, so it doesn't stop counting if you over-heal.<br>#{beneficial}",
        special: "Deals Typeless damage to all enemies equal to 25x how much excess healing done before the special is activated.",
        specialNotes: "The excess healing is counted from the last time the special is used and accumulates when you heal more than your maximum HP. For example, if you are at max HP and you heal 1,000 HP, you will add 25k damage to the special. The amount of damage possible caps at 5,000,000 damage.",
        specialName: "Kingdom Come",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] orbs beneficial for all characters",
            "level2": "Boosts amount healed from [RCV] orbs by 300 each",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs beneficial for all characters" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 2: Boosts amount healed from [RCV] orbs by 300 each" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
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
                    "Level 2: Reduces No Healing duration by 3 turns",
                    "Level 3: Reduces No Healing duration by 5 turns",
                    "Level 4: Reduces No Healing duration by 7 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
        ]
    },
    2233: {//Big Mom
        captain: "<b>Always Active: </b>Boosts HP of [STR], [DEX] and [QCK] characters by 1.2x, makes [SEMLA] orbs beneficial for all characters.<br><b>Standard Captain: </b>Boosts ATK of [STR], [DEX] and [QCK] characters by 3.5x<br><b>Powered Up Captain: </b>Boosts ATK of [STR], [DEX] and [QCK] characters by 4x and reduce damage received by 15%<br><b>Rampage Captain: </b>Boosts own ATK by 10x and own attacks will ignore defensive barriers and buffs, boosts ATK of [STR], [DEX] and [QCK] characters by 3.75x",
        captainNotes: "[SEMLA] orbs replace [RCV] orbs and heal at the end of the enemy turn and can not be swapped by special abilities.<br>In order to Power Up Big Mom, you must eat a [SEMLA] orb and will be powered up the following turn.<br>While in Rampage, Big Mom will always attack a random enemy on her own, even while Binded or Paralyzed and hit a HUNGRY, which deals the same damage as a PERFECT. This attack occurs after your chain, so Big Mom's attack will not be affected by Chain Limiters, Chain Boosters, or Chain Lockers. You can not activate Big Mom's special while in Rampage. To exit Rampage, you must consume a [SEMLA] orb.",
        special: "Deals 250x character's ATK in Typeless damage to one enemy and changes own orb into [STR]. If Big Mom is your Captain or Friend/Guest Captain, boosts ATK of characters in the top row by 2x and amplifies the effects of orbs for characters in the top row by 2x for 3 turns. If she is a Sailor, boosts own ATK by 2x and amplifies the effects of own orb by 2x for 1 turn instead",
        specialName: "Temper Tantrum",
    },
    2234: {//Big Mom
        captain: "<b>Always Active: </b>Boosts HP of [STR], [DEX] and [QCK] characters by 1.2x, makes [SEMLA] orbs beneficial for all characters.<br><b>Standard Captain: </b>Boosts ATK of [STR], [DEX] and [QCK] characters by 3.5x<br><b>Powered Up Captain: </b>Boosts ATK of [STR], [DEX] and [QCK] characters by 4x and reduce damage received by 15%<br><b>Rampage Captain: </b>Boosts own ATK by 10x and own attacks will ignore defensive barriers and buffs and boosts ATK of [STR], [DEX] and [QCK] characters by 3.75x",
        captainNotes: "[SEMLA] orbs replace [RCV] orbs and heal at the end of the enemy turn and can not be swapped by special abilities.<br>In order to Power Up Big Mom, you must eat a [SEMLA] orb and will be powered up the following turn.<br>While in Rampage, Big Mom will always attack a random enemy on her own, even while Binded or Paralyzed and hit a HUNGRY, which deals the same damage as a PERFECT. This attack occurs after your chain, so Big Mom's attack will not be affected by Chain Limiters, Chain Boosters, or Chain Lockers. You can not activate Big Mom's special while in Rampage. To exit Rampage, you must consume a [SEMLA] orb.",
        special: "Deals 250x character's ATK in Typeless damage to one enemy and changes own orb into a [STR] orb. If Big Mom is your Captain or Friend/Guest Captain, boosts ATK of characters in the top row by 2x and amplifies the effects of orbs for characters in the top row by 2x for 3 turns. If she is a Sailor, boosts own ATK by 2x and amplifies the effects of own orb by 2x for 1 turn instead",
        specialName: "Temper Tantrum",
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
    2235: {//Brook
        captain: "Boosts ATK of all characters by 2.75x if HP is above 99% at the start of the turn, by 2x otherwise, cuts the current HP of each enemy by 10% at the end of each turn and revives the team after a GAME OVER once per adventure.",
        captainNotes: "The revive is not Resilience since you can still die, it's similar to using a gem to revive. This does not work when you are despaired as it nullifies all captain effects.",
        special: "Recovers 14,343, reduces damage received by 90% for 1 turn and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for all characters for 2 turns. If the HP of the enemy with the highest Maximum HP is below 434,300, instantly defeats all enemies, otherwise, delays all enemies for 1 turn, cuts the current HP of each enemy by 20%.",
        specialNotes: "#{beneficial}",
        specialName: "Tenacious \"Shout of the Soul\"",
    },
    2236: {//Brook
        captain: "Boosts ATK of all characters by 2.75x if HP is above 99% at the start of the turn, by 2x otherwise, cuts the current HP of each enemy by 10% at the end of each turn and revives the team after a GAME OVER once per adventure.",
        captainNotes: "The revive is not Resilience since you can still die, it's similar to using a gem to revive. This does not work when you are despaired as it nullifies all captain effects.",
        special: "Recovers 14,343, reduces damage received by 90% for 1 turn and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for all characters for 2 turns. If the HP of the enemy with the highest Maximum HP is below 434,300, instantly defeats all enemies, otherwise, delays all enemies for 1 turn, cuts the current HP of each enemy by 20%.",
        specialNotes: "#{beneficial}",
        specialName: "Tenacious \"Shout of the Soul\"",
        sailor: {
            "base": "None",
            "level1": "Completely resists Paralysis on this character",
            "level2": "Makes [RCV] and [TND] orbs beneficial for all characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Completely resists Paralysis on this character" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: [STR] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Makes [RCV] and [TND] orbs beneficial for all characters" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 5%",
                    "Level 5: Reduce damage taken from [QCK] characters by 7%"
                ]
            },
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 5%",
                    "Level 5: Reduce damage taken from [STR] characters by 7%"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 10 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 99 turns on this character"
                ]
            },
        ]
    },
    2237: {//Smoothie
        captain: "Boosts ATK of all characters by 3x following a chain of Good > Great > PERFECT hits and recovers 300 HP at end of each turn",
        special: "Recovers 5,000, removes Poison duration completely, reduces Paralysis, Bind, Despair and Burn duration by 2 turns, changes adjacent orbs into Matching Orbs and switches orbs between slots three times",
        specialName: "Human Juicer",
        sailor: "Boosts base ATK of characters in the top row by 50",
    },
    2238: {//Smoothie
        captain: "Boosts ATK of all characters by 3.5x following a chain of Good > Great > PERFECT hits and recovers 500 HP at end of each turn",
        special: "Recovers 5,000, removes Poison duration completely, reduces Paralysis, Bind, Despair and Burn duration by 2 turns, changes adjacent orbs into Matching Orbs and switches orbs between slots three times",
        specialName: "Human Juicer",
        sailor: {
            "base": "Boosts base ATK of characters in the top row by 50",
            "level1": "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs beneficial for this character if your Captain is a [STR] character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Sailor Ability 1: Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs beneficial for this character if your Captain is a [STR] character" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Double Special Activation" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
            {
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by 1 turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by 3 turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by 5 turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by 7 turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
                ]
            },
        ],
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Cracker and Katakuri",
                "description": [
                    "Level 1: Adds 3% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 2: Adds 4% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 3: Adds 7% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 4: Adds 8% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 5: Adds 10% of this character's base HP and RCV to the supported character's base HP and RCV"
                ]
            }
        ]
    },
    2239: {//Perospero
        captain: "Boosts ATK of characters with a of cost 50 or higher by 3x and their HP and RCV by 1.1x",
        special: "Locks all orbs for 1 turn, cuts the current HP of one enemy by 10%, reduces Special Cooldown of all characters by 1 turn and boosts the Color Affinity of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn",
        specialName: "Candy Maiden",
        sailor: "Restores his own special cooldown by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
    },
    2240: {//Perospero
        captain: "Boosts ATK of characters with a of cost 50 or higher by 3.5x and their HP and RCV by 1.2x",
        special: "Locks all orbs for 1 turn, cuts the current HP of one enemy by 10%, reduces Special Cooldown of all characters by 1 turn and boosts the Color Affinity of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn",
        specialName: "Candy Maiden",
        sailor: {
            "base": "Restores his own special cooldown by 2 turns when it is rewinded",
            "level1": "Boosts base ATK and HP of all characters by 50 if your Captain is a [STR], [DEX] or [QCK] character",
        },
        sailorNotes: "#{rewind : 2}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of all characters by 50 if your Captain is a [STR], [DEX] or [QCK] character" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Double Special Activation" },
        ],
        potential: [
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
            {
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by 1 turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by 3 turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by 5 turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by 7 turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
                ]
            },
        ],
        support: [
            {
                "Characters": "Charlotte Linlin, Katakuri and Smoothie",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2241: {//Cracker
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2x and their HP by 1.2x",
        special: "If your Captain is a [STR], [DEX] or [QCK] character, boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn and amplifies the effect of orbs by 1.75x for [STR], [DEX] and [QCK] characters for 1 turn and changes [BLOCK] orbs into Matching orbs. If your Captain is a [PSY] or [INT] character, boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x for 3 turns and amplifies the effect of orbs by 1.75x for [STR], [DEX] and [QCK] characters for 3 turns and changes all orbs into [G] orbs.",
        specialName: "Infinite Biscuit Soldiers",
        sailor: "Boosts this character's damage against [DEX] characters by 2x",
    },
    2242: {//Cracker
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.75x and their HP by 1.25x",
        special: "If your Captain is a [STR], [DEX] or [QCK] character, boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn and amplifies the effect of orbs by 1.75x for [STR], [DEX] and [QCK] characters for 1 turn and changes [BLOCK] orbs into Matching orbs. If your Captain is a [PSY] or [INT] character, boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x for 3 turns and amplifies the effect of orbs by 1.75x for [STR], [DEX] and [QCK] characters for 3 turns and changes all orbs into [G] orbs.",
        specialName: "Infinite Biscuit Soldiers",
        sailor: {
            "base": "Boosts this character's damage against [DEX] characters by 2x",
            "level1": "Makes [TND] orbs beneficial for [STR], [DEX] and [QCK] characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [TND] orbs beneficial for [STR], [DEX] and [QCK] characters" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
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
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "Charlotte Linlin, Brûlée, Homies and Randolph",
                "description": [
                    "Level 1: Adds 4% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 5% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 7% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 9% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 11% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2243: {//Daifuku
        captain: "Boosts ATK of Powerhouse characters by 2x and reduces damage received by 10%",
        special: "Reduces enemies' Percent Damage Reduction, End of Turn Heal, Increased Defense and Resilience Buffs duration by 2 turns, changes own orb into [RCV] and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Genie-uine Rage Split",
        sailor: "Boosts base HP of all characters by 75",
    },
    2244: {//Daifuku
        captain: "Boosts ATK of Powerhouse characters by 2.5x and reduces damage received by 20%",
        special: "Reduces enemies' Percent Damage Reduction, End of Turn Heal, Increased Defense and Resilience Buffs duration by 2 turns, changes own orb into [RCV] and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Genie-uine Rage Split",
        sailor: {
            "base": "Boosts base HP of all characters by 75",
            "level1": "Makes [DEX] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs beneficial for this character" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Double Special Activation" },
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
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by ? turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by ? turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by ? turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by ? turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
                ]
            },
        ],
        support: [
            {
                "Characters": "Katakuri, Oven, Brulee and Smoothie",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 2: Adds 4% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 3: Adds 5% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 4: Adds 7% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 5: Adds 9% of this character's base ATK and HP to the supported character's base ATK and HP"
                ]
            }
        ]
    },
    2245: {//Legend Sanji
        captain: "Boosts own ATK by 3x and boosts ATK of all other characters by 2.75x and their HP by 1.3x and makes [TND] orbs beneficial for all characters <br> <b>Action:</b> Sanji Sky Walks into the air and is unable to attack for 1 turn, preventing all debuffs to himself (Including, but not limited to, Bind, Despair, Silence and Paralysis). This does not remove his own Captain boost while he is unable to attack. During the next turn, boosts own ATK by 8.25x instead",
        captainNotes: "Sanji Captain Action lasts for 2 turns and can be reactivated after no cooldown. Even while Sky Walking, will still boost all characters by 2.75x. Sky Walk is not a type boost and will stack with other boosts",
        special: "Deals 100,000 Fixed damage to all enemies, changes [BLOCK], adjacent orbs and own orb into Matching orbs and adds 0.8x to Chain multiplier for 1 turn. If Sanji is your Captain or Friend/Guest Captain, reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 5 turns",
        specialName: "Diable Mouton Shot",
        sailor: {
            "base": "Makes [RCV] orbs beneficial for all characters",
            "level1": "Boosts amount healed from [RCV] orbs by 300 each",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Boosts amount healed from [RCV] orbs by 300 each" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Potential 3: Critical Hit" },
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
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
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
        potentialNotes: "#{enrage}"
    },
    2246: {//Vivi
        captain: "Boosts ATK of Free Spirit characters proportionally to the crew's current HP, by 2.5x at max and recovers 1.25x character's RCV in HP at the end of each turn",
        captainNotes: "#{captainProportional : higher : 1 + 1.5 * ((remaining HP) / (total HP)) : 2.5 : 1}",
        special: "Reduces Special Cooldown of all characters by 1 turn and changes [BLOCK] and adjacent orbs into [RCV] orbs. If during that turn, you hit 2 PERFECTS, locks the chain multiplier at 3x for 3 turns.",
        specialName: "The Mark of Friendship",
        sailor: "Reduces Silence duration by 1 turn",
        sailorNotes: "#{beneficial}",
    },
    2247: {//Vivi
        captain: "Boosts ATK of Free Spirit characters proportionally to the crew's current HP, by 3.25x at max and recovers 1.5x character's RCV in HP at the end of each turn",
        captainNotes: "#{captainProportional : higher : 1 + 2.25 * ((remaining HP) / (total HP)) : 3.25 : 1}",
        special: "Reduces Special Cooldown of all characters by 1 turn and changes [BLOCK] and adjacent orbs into [RCV] orbs. If during that turn, you hit 2 PERFECTS, locks the chain multiplier at 3x for 3 turns.",
        specialName: "The Mark of Friendship",
        sailor: {
            "base": "Reduces Silence duration by 1 turn",
            "level1": "Makes [RCV] orbs beneficial for all characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs beneficial for all characters" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    2248: {//Daifuku
        captain: "Boosts ATK of Slasher and Powerhouse characters by 2.5x at the start of the chain and their HP by 1.25x, by 2.85x after scoring 3 PERFECTs in a row.",
        special: [
            {
                "description": "Deals 45x character's ATK in [DEX] damage to all enemies that will ignore damage negating abilities and barriers. If your crew has 4 or more characters with [STR] or [DEX] orbs, Delays all enemies for 1 turn and adds 0.5x to Chain multiplier for 1 turn. If your crew has 4 or more characters with [PSY] or [INT] orbs, boosts the Color Affinity of all characters by 1.5x for 1 turn and makes [PSY] and [INT] orbs beneficial for all characters for 1 turn.",
                "cooldown": [ 24, 10 ],
            },
            {
                "description": "Deals 75x character's ATK in [DEX] damage to all enemies that will ignore damage negating abilities and barriers. If your crew has 4 or more characters with [STR] or [DEX] orbs, Delays all enemies for 2 turns and adds 0.8x to Chain multiplier for 2 turns. If your crew has 4 or more characters with [PSY] or [INT] orbs, boosts the Color Affinity of all characters by 1.75x for 2 turns and makes [PSY] and [INT] orbs beneficial for all characters for 2 turns.",
                "cooldown": [ 28, 14 ],
            },
        ],
        specialName: "The Genie's Flashy Strike",
        sailor: "If this character has a [DEX] orb and you hit a PERFECT with him, keep his [DEX] orb for the next turn",
    },
    2249: {//Daifuku
        captain: "Boosts ATK of Slasher and Powerhouse characters by 2.5x at the start of the chain and their HP by 1.25x, by 2.85x after scoring 3 PERFECTs in a row.",
        special: [
            {
                "description": "Deals 45x character's ATK in [DEX] damage to all enemies that will ignore damage negating abilities and barriers. If your crew has 4 or more characters with [STR] or [DEX] orbs, Delays all enemies for 1 turn and adds 0.5x to Chain multiplier for 1 turn. If your crew has 4 or more characters with [PSY] or [INT] orbs, boosts the Color Affinity of all characters by 1.5x for 1 turn and makes [PSY] and [INT] orbs beneficial for all characters for 1 turn.",
                "cooldown": [ 24, 10 ],
            },
            {
                "description": "Deals 75x character's ATK in [DEX] damage to all enemies that will ignore damage negating abilities and barriers. If your crew has 4 or more characters with [STR] or [DEX] orbs, Delays all enemies for 2 turns and adds 0.8x to Chain multiplier for 2 turns. If your crew has 4 or more characters with [PSY] or [INT] orbs, boosts the Color Affinity of all characters by 1.75x for 2 turns and makes [PSY] and [INT] orbs beneficial for all characters for 2 turns.",
                "cooldown": [ 28, 14 ],
            },
        ],
        specialName: "The Genie's Flashy Strike",
        sailor: {
            "base": "If this character has a [DEX] orb and you hit a PERFECT with him, keep his [DEX] orb for the next turn",
            "level1": "Makes [DEX] orbs beneficial for Slasher characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs beneficial for Slasher characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 10% chance to deal 1% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 15% chance to deal 2% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 20% chance to deal 4% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 25% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 40% chance to deal 8% of this character's attack in extra damage"
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
        support: [
            {
                "Characters": "Slasher Characters",
                "description": [
                    "Level 1: Adds 2% of this character's base HP to the supported character's base HP",
                    "Level 2: Adds 3% of this character's base HP to the supported character's base HP",
                    "Level 3: Adds 4% of this character's base HP to the supported character's base HP",
                    "Level 4: Adds 6% of this character's base HP to the supported character's base HP",
                    "Level 5: Adds 8% of this character's base HP to the supported character's base HP"
                ]
            }
        ]
    },
    2250: {//Garp
        captain: "Boosts ATK of all characters by 2x at the start of the chain and their HP by 1.5x, boosts ATK of all characters by 4x following a chain of Good > Great > PERFECT hits, makes [PSY] and [RCV] orbs beneficial for all characters. Reduces ATK based on how many Striker, Shooter or Cerebral characters you have on your crew.",
        captainNotes: "ATK reduction is 0.2x for each Striker, Shooter or Cerebral class on your team. This stacks if you have each class on your team, so a team with a Striker, Shooter, and Cerebral character will get a 99.2% ATK reduction from Garp.",
        special: [
            {
                "description": "Cuts the current HP of one enemy by 10% that will ignore damage negating abilities and barriers, locks the chain multiplier at 3x for 1 turn and reduces Silence duration by 1 turn",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 30% that will ignore damage negating abilities and barriers, locks the chain multiplier at 3x for 1 turn and reduces Silence duration by 3 turns",
                "cooldown": [ 21, 16 ],
            },
        ],
        specialName: "Fist of Love",
        specialNotes:"#{silence}",
    },
    2251: {//Garp
        captain: "Boosts ATK of all characters by 2x at the start of the chain and their HP by 1.5x, boosts ATK of all characters by 4x following a chain of Good > Great > PERFECT hits, makes [PSY] and [RCV] orbs beneficial for all characters. Reduces ATK based on how many Striker, Shooter or Cerebral characters you have on your crew.",
        captainNotes: "ATK reduction is 0.2x for each Striker, Shooter or Cerebral class on your team. This stacks if you have each class on your team, so a team with a Striker, Shooter, and Cerebral character will get a 99.2% ATK reduction from Garp.",
        special: [
            {
                "description": "Cuts the current HP of one enemy by 10% that will ignore damage negating abilities and barriers, locks the chain multiplier at 3x for 1 turn and reduces Silence duration by 1 turn",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 30% that will ignore damage negating abilities and barriers, locks the chain multiplier at 3x for 1 turn and reduces Silence duration by 3 turns",
                "cooldown": [ 21, 16 ],
            },
        ],
        specialName: "Fist of Love",
        specialNotes:"#{silence}",
        sailor: {
            "base": "None",
            "level1": "Reduces Silence duration on this character by 20 turns",
            "level2": "Boosts base ATK, HP and RCV of all characters by 75",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 20 turns" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV of all characters by 75" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Critical Hit" },
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
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers"
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
        ]
    },
    2252: {//Pound
        captain: "Boosts ATK of Free Spirit characters by ?x. If you use \"A Bizzare Encounter\" in this turn boosts ATK of Free Spirit characters by ?x instead.",
        special: "Locks all orbs for 1 turn and amplifies the effects of orbs for characters in the middle and bottom row by 1.5x for 3 turns. If your Captain is a Free Spirit character, randomizes all non-Matching orbs.",
        specialName: "A Bizzare Encounter",
    },
    2253: {//Pound
        captain: "Boosts ATK of Free Spirit characters by 2x. If you use \"A Bizzare Encounter\" in this turn boosts ATK of Free Spirit characters by 2.6x instead.",
        special: "Locks all orbs for 1 turn and amplifies the effects of orbs for characters in the middle and bottom row by 1.5x for 3 turns. If your Captain is a Free Spirit character, randomizes all non-Matching orbs.",
        specialName: "A Bizzare Encounter",
    },
    2254: {//King Baum
        captain: "Boosts ATK of [DEX] characters by 2x and their HP by 1.2x",
        special: "Reduces Bind, Despair and Paralysis duration by 1 turn. If your Captain is a Free Spirit character, reduces enemies' ATK Up and Increased Defense duration by 1 turn.",
        specialName: "Enclosing the Forest with a Trackless Path",
    },
    2255: {//Homies
        captain: "Boosts ATK of [PSY] characters by 1.5x",
        special: "Boosts chances of getting [RCV] orbs for 2 turns",
        specialName: "Deceiving Mimicry",
    },
    2256: {//Mihawk
        captain: "Boosts ATK of Slasher characters by 1.75x and their HP by 1.5x",
        special: "Reduces Paralysis duration by 3 turns, locks all orbs for 2 turns. If you are on a Treasure Map, boosts ATK of Slasher and Free Spirit characters depending on your Treasure Map Level for 1 turn",
        specialName: "The World's Strongest Slash",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
    },
    2257: {//Ace
        captain: "Boosts ATK of Free Spirit characters by 1.75x and their HP by 1.5x",
        special: "Reduces Chain Multiplier Limit and ATK DOWN duration by 4 turns. Reduces Special Cooldown of your top row by 2 turns.",
        specialName: "The Pirate King's Ambition",
    },
    2258: {//Higuma
        captain: "Boosts ATK of [STR] characters by 1.75x",
        special: "Deals 800 Fixed damage to one enemy, reduces Despair duration by 3 turns and reduces enemies' Resilience Buff duration by 3 turns.",
        specialName: "Scoundrel's Attack",
    },
    2259: {//Higuma
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2x and recovers 800 HP at end of each turn",
        special: "Deals 800 Fixed damage to all enemies that will ignore damage negating abilities and barriers, reduces Despair duration by 5 turns and reduces enemies' Resilience and Enrage Buffs duration by 5 turns.",
        specialName: "Baptism of Evil",
    },
    2260: {//Shanks
        captain: "Boosts ATK of Free Spirit and Cerebral characters by 2x if HP is above 99%, by 1.5x otherwise, recovers 1.2x character's RCV in HP at the end of each turn and boosts chances of getting Matching orbs for Free Spirit and Cerebral Characters",
        special: "Reduces enemy Barrier duration by 1 turn, reduces Burn duration by 1 turn, boosts chances of getting Matching orbs for 1 turn, changes [BLOCK] orbs into Matching orbs, randomizes all non-Matching orbs, and adds 60x character's ATK as Additional Typeless Damage for 1 turn.",
        specialName: "Great Pirate's Majesty",
        specialNotes: "#{additionalDamage : 60x}",
    },
    2261: {//Shanks
        captain: {
            "base": "Boosts ATK of Free Spirit and Cerebral characters by 2x if HP is above 99%, by 1.5x otherwise, recovers 1.5x character's RCV in HP at the end of each turn and slightly boosts chances of getting Matching orbs for Free Spirit and Cerebral Characters",
            "level1": "Boosts ATK of Free Spirit and Cerebral characters by 2.25x if HP is above 99%, by 1.5x otherwise, recovers 1.5x character's RCV in HP at the end of each turn and slightly boosts chances of getting Matching orbs for Free Spirit and Cerebral Characters",
            "level2": "Boosts ATK of Free Spirit and Cerebral characters by 2.5x if HP is above 99%, by 1.5x otherwise, recovers 1.5x character's RCV in HP at the end of each turn and slightly boosts chances of getting Matching orbs for Free Spirit and Cerebral Characters",
            "level3": "Boosts ATK of Free Spirit and Cerebral characters by 2.5x if HP is above 99%, by 2x otherwise, recovers 1.5x character's RCV in HP at the end of each turn and slightly boosts chances of getting Matching orbs for Free Spirit and Cerebral Characters",
            "level4": "Boosts ATK of Free Spirit and Cerebral characters by 2.5x if HP is above 99%, by 2x otherwise, recovers 1.75x character's RCV in HP at the end of each turn and slightly boosts chances of getting Matching orbs for Free Spirit and Cerebral Characters",
            "level5": "Boosts ATK of Free Spirit and Cerebral characters by 3x if HP is above 99%, by 2x otherwise, recovers 1.75x character's RCV in HP at the end of each turn and slightly boosts chances of getting Matching orbs for Free Spirit and Cerebral Characters",
            "level6": "Boosts ATK of Free Spirit and Cerebral characters by 3x if HP is above 99%, by 2.5x otherwise, recovers 1.75x character's RCV in HP at the end of each turn and boosts chances of getting Matching orbs for Free Spirit and Cerebral Characters",
        },
        special: "Reduces enemy Barrier duration by 1 turn, reduces Burn duration by 1 turn, boosts chances of getting Matching orbs for 1 turn, changes [BLOCK] orbs into Matching orbs, randomizes all non-Matching orbs, and adds 60x character's ATK as Additional Typeless Damage for 1 turn.",
        specialName: "Great Pirate's Majesty",
        specialNotes: "#{additionalDamage : 60x}",
        sailor: {
            "base": "None",
            "level1": "Makes [DEX] orbs beneficial for all characters",
            "level2": "Makes [STR] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs beneficial for all characters" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 1: Makes [STR] orbs beneficial for this character" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Free Spirit and Cerebral characters by 3x if HP is above 99%, by 2.5x otherwise, recovers 1.75x character's RCV in HP at the end of each turn and boosts chances of getting Matching orbs for Free Spirit and Cerebral Characters" },
            { "description": "Acquire Potential 2: Double Special Activation" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by 1 turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by 2 turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by 3 turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by 5 turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
                ]
            },
        ]
    },
    2262: {//Doflamingo Raid v2
        captain: "Boosts ATK of Driven and Cerebral characters by 2.5x when HP is 50% or below, 1.5x otherwise",
        special: "Randomizes all non-Matching orbs, including [BLOCK] orbs and locks all orbs for 1 turn. If your Captain is a Cerebral or Driven character, increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 2 turns",
        specialName: "Athlete",
    },
    2263: {//Doflamingo Raid v2
        captain: "Boosts ATK of Driven and Cerebral characters by 3x when HP is 50% or below, 1.5x otherwise",
        special: "Randomizes all non-Matching orbs, including [BLOCK] orbs and locks all orbs for 1 turn. If your Captain is a Cerebral or Driven character, increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 2 turns",
        specialName: "Athlete",
        sailor: {
            "base": "None",
            "level1": "When HP is below ?% at the start of the turn, boosts own base ATK by 100",
            "level2": "When any other Cerebral or Driven character uses a special, reduces own cooldown by 1 turn",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: When HP is below ?% at the start of the turn, boosts own base ATK by 100" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 80" },
            { "description": "Acquire Sailor Ability 2: When any other Cerebral or Driven character uses a special, reduces own cooldown by 1 turn" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
    2264: {//Jinbe V2
        captain: "If there is a [STR], [DEX] and [PSY] character in your crew, boosts ATK of [STR], [DEX] and [PSY] characters by 4x if they have a Matching orb, by 3x otherwise and their HP by 1.35x and makes [DEX], [RCV] and [TND] orbs beneficial for all characters",
        captainNotes: "#{beneficial}",
        special: "Cuts the current HP of each enemy by 20%. If your crew has at least one of each: [STR], [DEX], [QCK], [PSY], [INT] and [RCV] orb, boosts ATK of [STR], [DEX] and [PSY] by 2.25x for 1 turn and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for [STR], [DEX] and [PSY] characters for 1 turn, boosts ATK of [STR], [DEX] and [PSY] by 1.75x for 1 turn otherwise.",
        specialName: "Fishman Karate - Spear Wave",
    },
    2265: {//Jinbe V2
        captain: "If there is a [STR], [DEX] and [PSY] character in your crew, boosts ATK of [STR], [DEX] and [PSY] characters by 4x if they have a Matching orb, by 3x otherwise and their HP by 1.35x and makes [DEX], [RCV] and [TND] orbs beneficial for all characters",
        captainNotes: "#{beneficial}",
        special: "Cuts the current HP of each enemy by 20%. If your crew has at least one of each: [STR], [DEX], [QCK], [PSY], [INT] and [RCV] orb, boosts ATK of [STR], [DEX] and [PSY] by 2.25x for 1 turn and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for [STR], [DEX] and [PSY] characters for 1 turn, boosts ATK of [STR], [DEX] and [PSY] by 1.75x for 1 turn otherwise.",
        specialName: "Fishman Karate - Spear Wave",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of [STR], [DEX] and [PSY] characters by 75",
            "level2": "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of [STR], [DEX] and [PSY] characters by 75" },
            { "description": "Acquire Potential 2: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 100" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 150" },
            { "description": "Acquire Sailor Ability 2: Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs beneficial for this character" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 5%",
                    "Level 5: Reduce damage taken from [QCK] characters by 7%"
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
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turn on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turn on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turn on this character"
                ]
            },
        ],
    },
    2266: {//Aladdin
        captain: "Boosts ATK of Powerhouse characters by 2.25x",
        special: "Reduces Bind and Despair duration by 3 turns, locks all orbs for 1 turn, changes right column orbs, from top to bottom, into [RCV], [INT] and [QCK] orbs. If your Friend Captain's orb is [DEX], amplifies the effect of orbs for all characters by 1.75x for 3 turns.",
        specialName: "The Fishman Preparing to Strike Back",
        sailor: "Adds 2x character's ATK as Additional Damage",
    },
    2267: {//Aladdin
        captain: "Boosts ATK of Powerhouse characters by 2.5x and their HP by 1.25x",
        special: "Reduces Bind and Despair duration by 3 turns, locks all orbs for 1 turn, changes right column orbs, from top to bottom, into [RCV], [INT] and [QCK] orbs. If your Friend Captain's orb is [DEX], amplifies the effect of orbs for all characters by 1.75x for 3 turns.",
        specialName: "The Fishman Preparing to Strike Back",
        sailor: {
            "base": "Adds 2x character's ATK as Additional Damage",
            "level1": "Makes [QCK] and [DEX] orbs beneficial for this character",
        },
        sailorNotes: "#{additionalDamage : 2x}<br>#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] and [DEX] orbs beneficial for this character" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 120",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2268: {//Charlotte Praline
        captain: "Boosts ATK of [STR] and [DEX] characters by 2x. Recovers 1x character's RCV in HP at the end of each turn",
        special: "Reduces enemies' Increased Defense, Percent Damage Reduction and Threshold Damage Reduction Buffs duration by 5 turns, changes left column orbs, from top to bottom, into [DEX], [STR] and [PSY] orbs. If your Captain's orb is [RCV], recovers 13x character's RCV in HP at the end of each turn for 3 turns.",
        specialName: "A Hug for All Her Loved Ones",
        sailor: "Boosts base RCV of [STR], [DEX] and [PSY] characters by 50",
    },
    2269: {//Charlotte Praline
        captain: "Boosts ATK of [STR] and [DEX] characters by 2.25x. Recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Reduces enemies' Increased Defense, Percent Damage Reduction and Threshold Damage Reduction Buffs duration by 5 turns, changes left column orbs, from top to bottom, into [DEX], [STR] and [PSY] orbs. If your Captain's orb is [RCV], recovers 13x character's RCV in HP at the end of each turn for 3 turns.",
        specialName: "A Hug for All Her Loved Ones",
        sailor: {
            "base": "Boosts base RCV of [STR], [DEX] and [PSY] characters by 50",
            "level1": "Makes [QCK] and [STR] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] and [STR] orbs beneficial for this character" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turn",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ]
    },
    2270: {//Wadatsumi
        captain: "Boosts ATK of Powerhouse characters by 2.5x, reduces crew's RCV to 0",
        special: "Changes left column orbs, including [BLOCK] orbs, into Matching orbs and adds 0.7x to Chain multiplier for 2 turns.",
        specialName: "Mega Monk",
        sailor: "Cannot be Blown Away",
    },
    2271: {//Wadatsumi
        captain: "Boosts ATK of Powerhouse characters by 2.75x, reduces crew's RCV to 0",
        special: "Changes left column orbs, including [BLOCK] orbs, into Matching orbs and adds 0.7x to Chain multiplier for 2 turns.",
        specialName: "Mega Monk",
        sailor: {
            "base": "Cannot be Blown Away",
            "level1": "Makes [INT] orbs beneficial for Powerhouse characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs beneficial for Powerhouse characters" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turn on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turn on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turn on this character"
                ]
            },
        ],
    },
    2272: {//Hatchan
        captain: "Boosts ATK of Slasher and Powerhouse characters by 1.5x and boosts chain multiplier by 1.5x",
        special: "Deals 6 hits of of 30x character's ATK in Typeless damage to random enemies, reduces the defense of all enemies by 100% for 1 turn, changes [BLOCK], [TND], [G] and [BOMB] orbs into [RCV] orbs. If your Captain is a Powerhouse character, boosts ATK against enemies with reduced defense by 1.75x for 1 turn.",
        specialName: "The Octopus' Strange Sword",
        sailor: "Boosts base ATK of Slasher and Powerhouse characters by 50",
    },
    2273: {//Hatchan
        captain: "Boosts ATK of Slasher and Powerhouse characters by 1.75x and boosts chain multiplier by 2x",
        special: "Deals 6 hits of of 30x character's ATK in Typeless damage to random enemies, reduces the defense of all enemies by 100% for 1 turn, changes [BLOCK], [TND], [G] and [BOMB] orbs into [RCV] orbs. If your Captain is a Powerhouse character, boosts ATK against enemies with reduced defense by 1.75x for 1 turn.",
        specialName: "The Octopus' Strange Sword",
        sailor: {
            "base": "Boosts base ATK of Slasher and Powerhouse characters by 50",
            "level1": "If this character has a [PSY] orb and you hit a PERFECT with him, keep his [PSY] orb for the next turn",
        },
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Sailor Ability 1: If this character has a [PSY] orb and you hit a PERFECT with him, keep his [PSY] orb for the next turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turn on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turn on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turn on this character"
                ]
            },
        ],
    },
    2274: {//Camie
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "Reduces Paralysis, Silence, Increase Damage Taken and Burn duration by 2 turns. If the enemy is delayed, boosts ATK against delayed enemies by 1.75x for 1 turn, delays all enemies for 1 turn otherwise.",
        specialName: "Heartwarming Soup",
        sailor: "Reduces Paralysis duration on this character by 2 turns",
    },
    2275: {//Camie
        captain: "Recovers 5x character's RCV in HP at the end of each turn",
        special: "Reduces Paralysis, Silence, Increase Damage Taken and Burn duration by 2 turns. If the enemy is delayed, boosts ATK against delayed enemies by 1.75x for 1 turn, delays all enemies for 1 turn otherwise.",
        specialName: "Heartwarming Soup",
        sailor: {
            "base": "Reduces Paralysis duration on this character by 2 turns",
            "level1": "Reduces Silence duration on this character by 2 turns",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 2 turns" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 2: Double Special Activation" },
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
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by 1 turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by 3 turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by 5 turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by 7 turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
                ]
            },
        ],
    },
    2276: {//Buggy
        captain: "Boosts ATK of characters with fewer than or equal to 4 stars by 2x and reduce damage received by ?%",
        special: "Boosts ATK of characters with fewer than or equal to 4 stars by 1.75x for 1 turn, Changes own orb into [INT] and delays all enemies for 1 turn.",
        specialName: "Pirate Charisma",
        sailor: "If this character has an [INT] orb and you hit a PERFECT with him, keep his [INT] orb for the next turn",
    },
    2277: {//Buggy
        captain: "Boosts ATK of characters with fewer than or equal to 4 stars by 2.5x and reduce damage received by 10%",
        special: "Boosts ATK of characters with fewer than or equal to 4 stars by 1.75x for 1 turn, Changes own orb into [INT] and delays all enemies for 1 turn.",
        specialName: "Pirate Charisma",
        sailor: "If this character has an [INT] orb and you hit a PERFECT with him, keep his [INT] orb for the next turn",
    },
    2278: {//Mohji & Richie
        captain: "Boosts ATK and HP of all characters by 1.25x",
        special: "Reduces Despair duration by 4 turns and deals ?x character's ATK in [PSY] damage to all enemies",
        specialName: "The Eating Beast",
    },
    2279: {//Cabaji
        captain: "Boosts ATK of [STR] characters by 1.2x and their HP by 1.1x",
        special: "Reduces damage received by 50% for 1 turn",
        specialName: "Sophisticated Acrobatic Show",
    },
    2280: {//Raid Judge
        captain: "Boosts ATK of [STR], [DEX] and [PSY] characters by 2x and their HP by 1.2x",
        special: "Deals 200,000 Fixed damage to one enemy, reduces crew's Increase Damage Taken, Chain Multiplier Limit and Chain Coefficient Reduction duration by 5 turns. If your crew has 3 or more [DEX] characters, boosts the Color Affinity of [STR], [DEX] and [PSY] characters by 2x for 1 turn",
        specialName: "Electro-Magnetic Shaft",
        sailor: "Boosts base HP, ATK and RCV of DEX characters by 30",
    },
    2281: {//Raid Judge
        captain: "Boosts ATK of [STR], [DEX] and [PSY] characters by 2.5x and their HP by 1.2x at the start of the chain. Boosts ATK of [STR], [DEX] and [PSY] characters by 3x following a chain of [STR] > [PSY] > [DEX] attacks no lower than Good",
        special: "Deals 200,000 Fixed damage to one enemy, reduces crew's Increase Damage Taken, Chain Multiplier Limit and Chain Coefficient Reduction duration by 5 turns. If your crew has 3 or more [DEX] characters, boosts the Color Affinity of [STR], [DEX] and [PSY] characters by 2x for 1 turn",
        specialName: "Electro-Magnetic Shaft",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of [DEX] characters by 30",
            "level1": "Boosts base ATK of Powerhouse characters by 50",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Powerhouse characters by 50" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
        ],
        support: [
            {
                "Characters": "Ichiji, Niji, Yonji and Reiju",
                "description": [
                    "Level 1: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2282: {//Sengoku
        captain: "Boosts ATK of Cerebral and Fighter characters by 2.25x and boosts ATK of characters with cost 30 or less by 1.1x.",
        captainNotes: "The bonus is cumulative. Cerebral and Fighter characters with 30 cost or less get a 2.475x bonus.",
        special: "Cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers. If your crew has 4 or more characters with the same Type Orb, makes the Dominant Type Orbs beneficial for all characters for 1 turn and amplifies the effect of orbs for all characters by 2x for 3 turns.",
        specialName: "Ruthless Straight Fist",
    },
    2283: {//Sengoku
        captain: "Boosts ATK of Cerebral and Fighter characters by 2.75x and boosts ATK of characters with cost 30 or less by 1.1x.",
        captainNotes: "The bonus is cumulative. Cerebral and Fighter characters with 30 cost or less get a 3.025x bonus.",
        special: "Cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers. If your crew has 4 or more characters with the same Type Orb, makes the Dominant Type Orbs beneficial for all characters for 1 turn and amplifies the effect of orbs for all characters by 2x for 3 turns.",
        specialName: "Ruthless Straight Fist",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of all characters by 50",
            "level2": "Makes [TND] orbs beneficial for all characters",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of all characters by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Makes [TND] orbs beneficial for all characters" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 120" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
    2284: {//Hody Jones
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Powerhouse characters by 2.75x and increases damage received by ?x.",
        special: "Deals 50x character's ATK in [STR] damage to all enemies, changes the orbs in the left column into [DEX], [STR] and [PSY], the orbs in the right column into [TND], [QCK] and [INT]. If your Friend Captain's orb is [STR], [DEX] or [RCV], amplifies the effect of orbs for Powerhouse characters by 2.25x for 1 turn.",
        specialName: "Shark Slicer",
        sailor: "Boosts base ATK of all characters by 50",
    },
    2285: {//Hody Jones
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Powerhouse characters by 3.25x and increases damage received by ?x.",
        special: "Deals 50x character's ATK in [STR] damage to all enemies, changes the orbs in the left column into [DEX], [STR] and [PSY], the orbs in the right column into [TND], [QCK] and [INT]. If your Friend Captain's orb is [STR], [DEX] or [RCV], amplifies the effect of orbs for Powerhouse characters by 2.25x for 1 turn.",
        specialName: "Shark Slicer",
        sailor: {
            "base": "Boosts base ATK of all characters by 50",
            "level1": "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs beneficial for this character",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs beneficial for this character" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
    2286: {//LRR Judge
        captain: "Boosts ATK of [STR] characters by 2.75x",
        special: "Reduces any damage received above 5,000 HP by 90% for 1 turn. If your Captain is a Powerhouse or Striker character, changes [G], [BLOCK] and [EMPTY] orbs into Matching orbs and boosts ATK of [STR] characters by 1.75x for 1 turn. If \"Clone Soldier Wall\" is used again in the same turn the special is activated in, boosts ATK of [STR] characters by 2.25x for 1 turn.",
        specialName: "Clone Soldier Wall",
        sailor: "Boosts base ATK of [STR] characters by 50",
    },
    2287: {//LRR Judge
        captain: "Boosts ATK of [STR] characters by 3.5x and their HP by 1.2x and makes [QCK] orbs beneficial to all characters",
        special: "Reduces any damage received above 5,000 HP by 90% for 1 turn. If your Captain is a Powerhouse or Striker character, changes [G], [BLOCK] and [EMPTY] orbs into Matching orbs and boosts ATK of [STR] characters by 1.75x for 1 turn. If \"Clone Soldier Wall\" is used again in the same turn the special is activated in, boosts ATK of [STR] characters by 2.25x for 1 turn.",
        specialName: "Clone Soldier Wall",
        sailor: {
            "base": "Boosts base ATK of [STR] characters by 50",
            "level1": "If this character has a [STR] orb and you hit a PERFECT with him, keep his [STR] orb for the next turn",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire Potential 1: Double Special Activation" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Sailor Ability 1: If this character has a [STR] orb and you hit a PERFECT with him, keep his [STR] orb for the next turn" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by 1 turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by 3 turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by 5 turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by 7 turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
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
    2288: {//Tamago
        captain: "Boosts ATK of Slasher and Striker characters by 2.25x",
        special: "Deals 120x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers and changes [EMPTY] orbs into Matching orbs. If your Captain's orb is [RCV] or [TND], adds 45x character's ATK as Additional Typeless Damage for 2 turns and changes [RCV] and [TND] orbs into Matching orbs. If your Captain's orb is [STR], [DEX], [QCK], [PSY] or [INT], changes orbs in the top row to [RCV], boosts RCV of all characters by 1.5x for 2 turns and reduces damage received by 60% for 2 turns.",
        specialName: "Chicken Wing Edge",
        sailor: "Boosts base ATK of Slasher and Striker characters by 50",
    },
    2289: {//Tamago
        captain: "Boosts ATK of Slasher and Striker characters by 2.25x and reduces damage received by 7%",
        special: "Deals 120x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers and changes [EMPTY] orbs into Matching orbs. If your Captain's orb is [RCV] or [TND], adds 45x character's ATK as Additional Typeless Damage for 2 turns and changes [RCV] and [TND] orbs into Matching orbs. If your Captain's orb is [STR], [DEX], [QCK], [PSY] or [INT], changes orbs in the top row to [RCV], boosts RCV of all characters by 1.5x for 2 turns and reduces damage received by 60% for 2 turns.",
        specialName: "Chicken Wing Edge",
        sailor: "Boosts base ATK of Slasher and Striker characters by 50",
    },
    2290: {//Tamago
        captain: "Boosts ATK of Slasher and Striker characters by 2.75x if they have a Matching orb, by 2.25x otherwise and reduces damage received by 7%",
        special: "Deals 120x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers and changes [EMPTY] orbs into Matching orbs. If your Captain's orb is [RCV] or [TND], adds 45x character's ATK as Additional Typeless Damage for 2 turns and changes [RCV] and [TND] orbs into Matching orbs. If your Captain's orb is [STR], [DEX], [QCK], [PSY] or [INT], changes orbs in the top row to [RCV], boosts RCV of all characters by 1.5x for 2 turns and reduces damage received by 60% for 2 turns.",
        specialName: "Chicken Wing Edge",
        sailor: {
            "base": "Boosts base ATK of Striker and Slasher characters by 50",
            "level1": "Makes [INT] orbs beneficial for this character",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs beneficial for this character" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 2: Double Special Activation" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 2% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by 1 turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by 3 turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by 5 turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by 7 turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
                ]
            },
        ],
    },
    2291: {//Vivi
        captain: "Boosts ATK of all characters by 1.5x and recovers 3x character's RCV in HP at the end of each turn",
        special: "Removes Blindness duration completely and reduces Paralysis duration by 2 turns. If your Captain is a Free Spirit or Cerebral character, reduces Special Cooldown of all characters by 1 turn and reduces enemy Barrier duration by 1 turn.",
        specialName: "The Witch's Tea Party",
        sailor: "Restores her own special cooldown by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
    },
    2292: {//Vivi
        captain: "Boosts ATK and RCV of all characters by 1.75x and recovers 5x character's RCV in HP at the end of each turn",
        special: "Removes Blindness duration completely and reduces Paralysis duration by 2 turns. If your Captain is a Free Spirit or Cerebral character, reduces Special Cooldown of all characters by 1 turn and reduces enemy Barrier duration by 1 turn.",
        specialName: "The Witch's Tea Party",
        sailor: "Restores her own special cooldown by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
    },
    2293: {//Katakuri
        captain: "Boosts ATK of all characters by 1.5x and deals 5x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Reduces Increase Damage Taken and ATK DOWN duration by 3 turns, changes [BLOCK], [BOMB] [EMPTY] and Badly Matching orbs into [RCV] orbs. If your Captain is a Cerebral character, boosts ATK of Cerebral characters by 1.5x for 1 turn and makes [RCV] orbs beneficial for Cerebral characters for 1 turn",
        specialName: "A Bliss for the Moment",
        sailor: "If your Captain is a Cerebral character, reduces Paralysis duration by 1 turn",
    },
    2294: {//Katakuri
        captain: "Boosts ATK of all characters by 1.75x, their HP by 1.2x and deals 5x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Reduces Increase Damage Taken and ATK DOWN duration by 3 turns, changes [BLOCK], [BOMB] [EMPTY] and Badly Matching orbs into [RCV] orbs. If your Captain is a Cerebral character, boosts ATK of Cerebral characters by 1.5x for 1 turn and makes [RCV] orbs beneficial for Cerebral characters for 1 turn",
        specialName: "A Bliss for the Moment",
        sailor: "If your Captain is a Cerebral character, reduces Paralysis duration by 1 turn",
    },
    2295: {//Moria
        captain: "Boosts ATK of [STR] characters by 1.75x",
        special: "Reduces Chain Multiplier Limit and Despair duration by 3 turns and deals 50x character's ATK as Typeless damage to all enemies at the end of the turn for 3 turns",
        specialName: "Undead Dance Hall",
    },
    2296: {//Rayleigh
        captain: "Boosts ATK of Cerebral characters by 1.75x",
        special: "Removes all positive buffs on your team and adds 0.5 to Chain multiplier for 1 turn. If you are on a Treasure Map, amplifies the effects of orbs for [STR], [DEX] and [PSY] characters depending on your Treasure Map Level for 1 turn",
        specialName: "Enjoying the Elegant Night",
        specialNotes: "Level 1-10: 1.75x orb boost<br\>Level 11-20: 2x orb boost<br\>Level 21+: 2.25x orb boost",
    },
    2297: {//Perona
        captain: "Boosts ATK of Driven characters by 1.5x and their RCV by 1.2x",
        special: "Reduces Special Cooldown of your right column by 1 turn, reduces enemy Damage Nullification duration by 1 turn and recovers 15x character's RCV in HP.",
        specialName: "Inject Hollow",
        sailor: "Restores her own special cooldown by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
    },
    2298: {//TM Hancock
        captain: "Boosts ATK of Shooter characters by 1.5x and their RCV by 1.1x",
        special: "Reduces the defense of all enemies by 80% for 1 turn, reduces enemies' Threshold Damage Reduction, ATK Up, End of Turn Heal and Resilience Buffs duration by 2 turns, recovers 10,310 HP, Changes Captain's [EMPTY] orb into an [INT] orb and locks Captain's orb for 1 turn. If your Captain's orb is [INT] at the time the special is activated, boosts ATK against enemies with reduced defense by 1.75x for 1 turn and changes Captain's orb into [PSY]. If your Captain's orb is [PSY] at the time the special is activated, amplifies the effect of orbs for Shooter characters by 2x for 1 turn and changes Captain's orb into [INT].",
        specialName: "Mischievous Love-Love Beam",
    },
    2299: {//TM Hancock
        captain: {
            "base": "Boosts ATK of Shooter characters by 1.5x and their RCV by 1.1x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 2.5x.",
            "level1": "Boosts ATK of Shooter characters by 1.75x and their RCV by 1.1x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 2.5x",
            "level2": "Boosts ATK of Shooter characters by 1.75x and their RCV by 1.2x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 2.5x",
            "level3": "Boosts ATK of Shooter characters by 2x and their RCV by 1.2x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 2.75x",
            "level4": "Boosts ATK of Shooter characters by 2x and their RCV by 1.2x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 3x",
            "level5": "Boosts ATK of Shooter characters by 2x and their RCV by 1.3x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 3x",
            "level6": "Boosts ATK of Shooter characters by 2.25x and their RCV by 1.3x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 3.25x.",
        },
        special: "Reduces the defense of all enemies by 80% for 1 turn, reduces enemies' Threshold Damage Reduction, ATK Up, End of Turn Heal and Resilience Buffs duration by 2 turns, recovers 10,310 HP, Changes Captain's [EMPTY] orb into an [INT] orb and locks Captain's orb for 1 turn. If your Captain's orb is [INT] at the time the special is activated, boosts ATK against enemies with reduced defense by 1.75x for 1 turn and changes Captain's orb into [PSY]. If your Captain's orb is [PSY] at the time the special is activated, amplifies the effect of orbs for Shooter characters by 2x for 1 turn and changes Captain's orb into [INT].",
        specialName: "Mischievous Love-Love Beam",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Shooter characters by 30",
            "level2": "Makes [RCV] orbs beneficial for Shooter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Barrier Penetration" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Shooter characters by 1.75x and their RCV by 1.1x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 2.5x" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Shooter characters by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Shooter characters by 1.75x and their RCV by 1.2x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 2.5x" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Shooter characters by 2x and their RCV by 1.2x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 2.75x" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Shooter characters by 2x and their RCV by 1.2x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 3x" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 2: Makes [RCV] orbs beneficial for Shooter characters" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Shooter characters by 2x and their RCV by 1.3x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 3x" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Shooter characters by 2.25x and their RCV by 1.3x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 6 times to a maximum of 3.25x" },
            { "description": "Acquire Potential 2: Double Special Activation" },
        ],
        potential: [
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 60% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
            {
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by 1 turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by 2 turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by 3 turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by 5 turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
                ]
            },
        ]
    },
    2300: {//Legend Franky
        captain: "If there are 6 characters in your crew with Fighter, Slasher, Shooter or Striker classes, boosts ATK of all characters by 3.25x and their HP by 1.3x and makes [RCV] and [TND] orbs beneficial for all characters. <br> <b>Action:</b> Franky brings the entire crew into General Franky for 1 turn and becomes immune to Blow Away inflicted to the crew. During this turn, boosts ATK of all characters by 4.25x instead and reduces damage taken by 38%",
        captainNotes: "All characters on your crew must have one of the 4 classes listed, but you do not need one of each. Franky Captain Action lasts one turn and can be reactivated after a 4 turn cooldown. Only 1 Franky Captain Action can be activated at once. <br\> During transformation:<br\>If you attack with a Fighter character, deal 1.25x damage to targeted enemy<br\>If you attack with a Slasher character, deal full damage to targeted enemy, but deal 0.1x damage to all enemies in the same row as the targeted enemy<br\>If you attack with a Striker character, deal 0.5x damage to all enemies on the stage<br\>If you attack with a Shooter character, deal 0.75x damage to targeted enemy but deal 0.3x damage to all other enemies on the stage",
        special: "Cuts the current HP of all enemies by 10% and randomizes all non-Matching orbs, including [BLOCK] orbs. If there are 3 enemies or more on the stage when the special is activated, boosts ATK of Fighter, Slasher, Shooter and Striker characters by 2.25x for 1 turn by 2x otherwise",
        specialName: "Franky Radical Beam",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Shooter, Slasher, Fighter and Striker characters by 50",
            "level2": "Makes [QCK] orbs beneficial for Shooter, Slasher, Fighter and Striker characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 2" },
            { "description": "Boosts base ATK by 2" },
            { "description": "Boosts base ATK by 38" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Shooter, Slasher, Fighter and Striker characters by 50" },
            { "description": "Boosts base RCV by 1" },
            { "description": "Boosts base RCV by 1" },
            { "description": "Boosts base RCV by 38" },
            { "description": "Boosts base ATK by 3" },
            { "description": "Boosts base ATK by 38" },
            { "description": "Boosts base ATK by 38" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 38" },
            { "description": "Boosts base RCV by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Acquire Sailor Ability 2: Makes [QCK] orbs beneficial for Shooter, Slasher, Fighter and Striker characters" },
            { "description": "Boosts base ATK by 38" },
            { "description": "Boosts base HP by 38" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
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
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
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
        ]
    },
    2301: {//Legend Capone
        captain: "Boosts ATK of Shooter characters by 3.75x and their HP by 1.35x and makes [PSY] and [INT] orbs beneficial for Shooter characters. If there are 6 Shooter characters in your crew, recovers 0.5x his RCV at the end of the turn each time you hit a PERFECT",
        special: "Boosts ATK of Shooter characters by 2x for 1 turn. If there are 6 characters in your crew at the time the special is activated, reduces crew's current HP by 85%, transforms crew into Big Father and turns the amount of HP subtracted into Big Father's Barrier.",
        specialNotes: "While Big Father is active, crew's HP isn't able to be reduced and becomes immune to Blow Away inflicted to the crew. Big Father deactivates when the Barrier HP is reduced to 0 HP. While in Big Father, you can not use Captain Swap, Captain Actions or Dual Unit Swap (last unconfirmed). If a Captain Swap or Captain Action is already active, you can not transform into Big Father.",
        specialName: "Full-Scale Rook! The Big Father",
    },
    2302: {//Legend Capone
        captain: "Boosts ATK of Shooter characters by 3.75x and their HP by 1.35x and makes [PSY] and [INT] orbs beneficial for Shooter characters. If there are 6 Shooter characters in your crew, recovers 0.5x his RCV at the end of the turn each time you hit a PERFECT",
        special: "Boosts ATK of Shooter characters by 2x for 1 turn. If there are 6 characters in your crew at the time the special is activated, reduces crew's current HP by 85%, transforms crew into Big Father and turns the amount of HP subtracted into Big Father's Barrier.",
        specialNotes: "While Big Father is active, crew's HP isn't able to be reduced and becomes immune to Blow Away inflicted to the crew. Big Father deactivates when the Barrier HP is reduced to 0 HP. While in Big Father, you can not use Captain Swap, Captain Actions or Dual Unit Swap (last unconfirmed). If a Captain Swap or Captain Action is already active, you can not transform into Big Father.",
        specialName: "Full-Scale Rook! The Big Father",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Shooter characters by 50",
            "level2": "Makes [PSY] and [INT] orbs beneficial for Shooter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Shooter characters by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 2: " },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers"
                ]
            },
        ]
    },
    2303: {//Charlotte Chiffon
        captain: "Reduces damage received by ?% if HP is above 99% at the start of the turn",
        special: [
            {
                "description": "Reduces Paralysis, Despair and Silence and ATK DOWN duration by 1 turn and recovers 3x character's RCV in HP at the end of each turn for 3 turns",
                "cooldown": [ 16, 10 ],
            },
            {
                "description": "Reduces Paralysis, Despair and Silence and ATK DOWN duration by 3 turns, recovers 10x character's RCV in HP at the end of each turn for 3 turns and if your crew has Threshold Damage Reduction, Percent Damage Reduction or Resilience, recovers all missing HP",
                "cooldown": [ 23, 17 ],
            },
        ],
        specialNotes: "#{silence}",
        specialName: "A Speech from a Fool",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    2304: {//Charlotte Chiffon
        captain: "Boosts ATK of all characters by 1.5x and reduces damage received by ?% if HP is above 99% at the start of the turn",
        special: [
            {
                "description": "Reduces Paralysis, Despair and Silence and ATK DOWN duration by 1 turn and recovers 3x character's RCV in HP at the end of each turn for 3 turns",
                "cooldown": [ 16, 10 ],
            },
            {
                "description": "Reduces Paralysis, Despair and Silence and ATK DOWN duration by 3 turns, recovers 10x character's RCV in HP at the end of each turn for 3 turns and if your crew has Threshold Damage Reduction, Percent Damage Reduction or Resilience, recovers all missing HP",
                "cooldown": [ 23, 17 ],
            },
        ],
        specialNotes: "#{silence}",
        specialName: "A Speech from a Fool",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "When HP is above 99% at the start of the turn, boosts base ATK of Shooter characters by 75",
        },
        sailorNotes: "#{silence}",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: When HP is above 99% at the start of the turn, boosts base ATK of Shooter characters by 75" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                ]
            },
        ]
    },
    2305: {//Gastino and totally not Caesar
        captain: "Boosts ATK of Cerebral characters by 2.75x until the first hit other than PERFECT",
        special: "Poisons all enemies. If your Captain is a Slasher or Cerebral character, boosts ATK against Poisoned and Strongly Poisoned enemies by 1.75x for 3 turns",
        specialName: "Blue Sword",
        sailor: "Boosts base ATK of Slasher and Cerebral characters by 75",
    },
    2306: {//Gastino and totally not Caesar
        captain: "Boosts ATK of Slasher and Cerebral characters by 2.75x until the first hit other than PERFECT and makes [STR] and [DEX] orbs beneficial for Slasher and Cerebral characters",
        special: "Poisons all enemies. If your Captain is a Slasher or Cerebral character, boosts ATK against Poisoned and Strongly Poisoned enemies by 1.75x for 3 turns",
        specialName: "Blue Sword",
        sailor: {
            "base": "Boosts base ATK of Slasher and Cerebral characters by 75",
            "level1": "Adds 2x character's ATK as Additional Damage",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Adds 2x character's ATK as Additional Damage" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 4% chance to deal 30% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 5% chance to deal 40% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 6% chance to deal 50% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 7% chance to deal 60% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 8% chance to deal 70% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2307: {//Vito
        captain: "Boosts ATK of Shooter characters by 2.25x and makes [DEX] orbs beneficial for Shooter characters",
        special: "Cuts the current HP of one enemy by 20%, changes orbs in the top row into Matching orbs, reduces enemies' Increased Defense and Percent Damage Reduction duration by 3 turns. If there are 6 Shooter characters in your crew when the special is activated, reduces damage received by 90% for 1 turn.",
        specialName: "Phantom Gun Shot",
        sailor: "If your Captain is a Shooter character, completely removes Blindness duration completely",
    },
    2308: {//Vito
        captain: "Boosts ATK of Shooter characters by 2.5x and makes [DEX] orbs beneficial for Shooter characters",
        special: "Cuts the current HP of one enemy by 20%, changes orbs in the top row into Matching orbs, reduces enemies' Increased Defense and Percent Damage Reduction duration by 3 turns. If there are 6 Shooter characters in your crew when the special is activated, reduces damage received by 90% for 1 turn.",
        specialName: "Phantom Gun Shot",
        sailor: {
            "base": "If your Captain is a Shooter character, completely removes Blindness duration completely",
            "level1": "Makes [DEX] orbs beneficial for Shooter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs beneficial for Shooter characters" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2309: {//Gotti
        captain: "Boosts ATK of Shooter and Driven characters by 2.25x and their HP by 1.2x",
        special: "Reduces any damage received above 5,000 HP by 95% for 3 turns and randomizes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK], [PSY] or [INT] orbs. If enemies have a barrier at the time the special was activated, makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for Shooter characters for 3 turns",
        specialName: "Assassin's Angry Roar",
        specialNotes: "The exact formula for the damage received is: 5000 + ((total damage) - 5000) * 0.05<br>#{beneficial}",
        sailor: "If this character has an [QCK] orb and you hit a PERFECT with him, keep his [QCK] orb for the next turn",
    },
    2310: {//Gotti
        captain: "Boosts ATK of Shooter and Driven characters by 2.5x and their HP by 1.2x",
        special: "Reduces any damage received above 5,000 HP by 95% for 3 turns and randomizes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK], [PSY] or [INT] orbs. If enemies have a barrier at the time the special was activated, makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for Shooter characters for 3 turns",
        specialName: "Assassin's Angry Roar",
        specialNotes: "The exact formula for the damage received is: 5000 + ((total damage) - 5000) * 0.05<br>#{beneficial}",
        sailor: {
            "base": "If this character has an [QCK] orb and you hit a PERFECT with him, keep his [QCK] orb for the next turn",
            "level1": "Makes [QCK] orbs beneficial for Shooter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs beneficial for Shooter characters" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                ]
            },
        ],
    },
    2311: {//Germa Fodder
        captain: "Boosts ATK of [STR] characters by 1.5x and reduces damage received by 5%",
        special: "Reduces damage received by 33%. Following the activation of the special, if during that turn you score 5 PERFECT hits, reduces damage received by 66% in the following turn",
        specialName: "Tough Body",
    },
    2312: {//Germa Fodder
        captain: "Boosts ATK of [DEX] characters by 1.5x and their HP by 1.25x",
        special: "Makes [DEX] and [TND] orbs beneficial for all characters for 1 turn. Following the activation of the special, if during that turn you score 4 PERFECT hits, makes [DEX], [PSY] and [INT] orbs beneficial for all characters for 1 turn",
        specialName: "Phantasmagoric Work",
    },
    2313: {//Germa Fodder
        captain: "Reduces cooldown of [QCK] specials by 1 turn at the start of the fight and boosts ATK of [QCK] characters by 1.5x",
        special: "Reduces Special Cooldown of [QCK] specials by 1 turn. Following the activation of the special, if during that turn you score 6 PERFECT hits, reduces Special Cooldown of Powerhouse specials by 1 turn in the following turn",
        specialName: "Rapid Trump Card",
    },
    2314: {//Sea Ant
        captain: "Boosts ATK of characters with fewer than or equal to 3 stars by 2x",
        special: "Reduces enemies' Threshold Damage Reduction, Percent Damage Reduction and Increased Defense Buffs duration by 1 turn and cuts the current HP of one enemy by 10%",
        specialName: "Amazing Bite",
    },
    2315: {//Negative Soul Homie
        captain: "Boosts ATK of [INT] characters by 1.5x and makes [INT] orbs beneficial for Free Spirit characters",
        special: "Changes [BLOCK] orbs into [G] orbs and [EMPTY] orbs into [INT] orbs",
        specialName: "Knowled\"G\"e Slot Change",
    },
    2316: {//Positive Soul Homie
        captain: "Boosts ATK of [PSY] characters by 1.5x and makes [PSY] orbs beneficial for Free Spirit characters",
        special: "Changes [BOMB] orbs into [RCV] orbs and Badly Matching orbs into [PSY] orbs",
        specialName: "Hearty Meal Slot Change",
    },
    2317: {//Story Yonji
        captain: "Boosts ATK of Powerhouse characters by 2.25x and boosts HP of [DEX] characters by 1.2x",
        special: "Increases damage received by 2x for 2 turns and boosts ATK of Powerhouse characters by 1.5x for 1 turn and amplifies orbs of Powerhouse characters by 1.5x for 1 turn",
        specialName: "Excessive Provocation",
    },
    2318: {//Story Judge
        captain: "Boosts ATK of Powerhouse characters by 2.75x when HP is below ?%, 2.5x otherwise and reduces damage received by 10%",
        special: "Makes [STR], [DEX] and [QCK] orbs beneficial for Powerhouse characters for 3 turns, reduces ATK DOWN duration by 2 turns and adds 0.5x to Chain multiplier for 2 turns",
        specialName: "Hand-in-Hand Combat \"Garuda\"",
    },
    2319: {//Story Niji
        captain: "Boosts ATK of Powerhouse characters by 2.25x and boosts HP of [STR] characters by 1.2x",
        special: "Deals 45x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers and reduces enemies' Threshold Damage Reduction and Resilience Buffs duration by 2 turns",
        specialName: "A Punishment for the Disgraced",
    },
    2320: {//Story Cracker
        captain: "Boosts ATK of Slasher characters by ?x and their HP by ?x and boosts chain by ?x if HP below ?% at the start of the turn",
        special: "Cuts the current HP of one enemy by 15%, reduces damage by 50% and deals 75x character's ATK as [INT] damage to all enemies at the end of the turn for 3 turns",
        specialName: "Baptism of the \"New World\"",
    },
    2321: {//Story Cracker
        captain: "Boosts ATK of Slasher characters by 2.5x and their HP by 1.2x and boosts chain by 1.4x if HP below 30% at the start of the turn",
        special: "Cuts the current HP of all enemies by 15%, reduces damage by 50% and deals 75x character's ATK as [INT] damage to all enemies at the end of the turn for 3 turns",
        specialName: "Baptism of the \"New World\"",
    },
    2322: {//Oven
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x. Deals 2 times the damage received in the previous turn in Typeless damage to all enemies at the end of each turn.",
        special: "Removes any Orb Rate Up and Orb Rate Down Buffs, empties all [STR], [DEX], [QCK], [PSY] or [INT] slots, deals [STR] damage based on number of [STR], [DEX], [QCK], [PSY] or [INT] slots emptied to one enemy. Changes all orbs into Matching orbs. If enemies have All Debuff Protection, Delay Debuff Protection or Poison Debuff Protection at the time the special was activated, amplifies the effect of orbs of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn. If during that turn you score 4 PERFECT hits, amplifies the effect of orbs of [STR], [DEX] and [QCK] characters by 1.75x for 2 turns in the following turn.",
        specialName: "Scorching Fist",
        specialNotes: "The exact multiplier used is chosen based on the number of [STR], [DEX], [QCK], [PSY] or [INT] orbs consumed: 0 orbs - 7x ATK; 1 orb - 52.5x ATK; 2 orbs - 105x ATK; 3 orbs - 157.5x ATK; 4 orbs - 210x ATK; 5 orbs - 262.5x ATK; 6 orbs - 350x ATK.",
        sailor: "Boosts base ATK of [STR], [DEX] and [QCK] characters by 40",
    },
    2323: {//Oven
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2.5x and their HP by 1.2x. Deals 3 times the damage received in the previous turn in Typeless damage to all enemies at the end of each turn.",
        special: "Removes any Orb Rate Up and Orb Rate Down Buffs, empties all [STR], [DEX], [QCK], [PSY] or [INT] slots, deals [STR] damage based on number of [STR], [DEX], [QCK], [PSY] or [INT] slots emptied to one enemy. Changes all orbs into Matching orbs. If enemies have All Debuff Protection, Delay Debuff Protection or Poison Debuff Protection at the time the special was activated, amplifies the effect of orbs of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn. If during that turn you score 4 PERFECT hits, amplifies the effect of orbs of [STR], [DEX] and [QCK] characters by 1.75x for 2 turns in the following turn.",
        specialName: "Scorching Fist",
        specialNotes: "The exact multiplier used is chosen based on the number of [STR], [DEX], [QCK], [PSY] or [INT] orbs consumed: 0 orbs - 7x ATK; 1 orb - 52.5x ATK; 2 orbs - 105x ATK; 3 orbs - 157.5x ATK; 4 orbs - 210x ATK; 5 orbs - 262.5x ATK; 6 orbs - 350x ATK.",
        sailor: {
            "base": "Boosts base ATK of [STR], [DEX] and [QCK] characters by 40",
            "level1": "Boosts base HP of [STR], [DEX] and [QCK] characters by 40",
        },
        limit: [
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of [STR], [DEX] and [QCK] characters by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 75% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ],
        support: [
            {
                "Characters": "[STR] Characters",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 2% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 3% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 4% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 5% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2324: {//Usopp
        captain: "Boosts ATK of Shooter characters by 3x following a chain of Good > Great > PERFECT hits.",
        special: "Cuts the current HP of one enemy by 20%, reduces enemies' Threshold Damage Reduction, ATK Up and End of Turn Damage/Percent Cut Buffs duration by 7 turns. If enemies have Delay Debuff Protection or All Debuff Protection at the time the special was activated, adds 0.75x to Chain multiplier for 1 turn and makes [STR], [DEX] and [QCK] orbs beneficial for Shooter characters for 3 turns",
        specialName: "Green Star: Skull Bombgrass",
        specialNotes: "#{beneficial}",
        sailor: "Reduces Silence duration on this character by 3 turns",
        specialNotes: "#{silence}",
    },
    2325: {//Usopp
        captain: "Boosts ATK of Shooter characters by 3.75x following a chain of Good > Great > PERFECT hits and reduces damage received by 7%.",
        special: "Cuts the current HP of one enemy by 20%, reduces enemies' Threshold Damage Reduction, ATK Up and End of Turn Damage/Percent Cut Buffs duration by 7 turns. If enemies have Delay Debuff Protection or All Debuff Protection at the time the special was activated, adds 0.75x to Chain multiplier for 1 turn and makes [STR], [DEX] and [QCK] orbs beneficial for Shooter characters for 3 turns",
        specialName: "Green Star: Skull Bombgrass",
        specialNotes: "#{beneficial}",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "Boosts base ATK and HP of Shooter characters by 75",
        },
        specialNotes: "#{silence}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 45" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of Shooter characters by 75" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers"
                ]
            },
        ],
    },
    2326: {//Amande
        captain: "Boosts ATK of Slasher characters by 2x, deals ?x character's ATK in [QCK] damage to all enemies at the end of each turn",
        special: "Cuts the current HP of all enemies by 10%, reduces enemies' Percent Damage Reduction and Resilience Buffs duration by 2 turns. If your Captain is a Slasher character, reduces damage received by 30% for 2 turns",
        specialName: "Slow Waltz",
    },
    2327: {//Amande
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.2x, deals 3x character's ATK in [QCK] damage to all enemies at the end of each turn",
        special: "Cuts the current HP of all enemies by 10%, reduces enemies' Percent Damage Reduction and Resilience Buffs duration by 2 turns. If your Captain is a Slasher character, reduces damage received by 30% for 2 turns",
        specialName: "Slow Waltz",
    },
    2328: {//Bobbin
        captain: "Boosts ATK of [DEX] characters by 1.75x and their HP by 1.2x",
        special: "Removes Blindness duration completely. Following the activation of the special, if you score 6 PERFECT hits, boosts ATK of Slasher characters by 1.5x in the following turn.",
        specialName: "The Disposer's Pursuit",
    },
    2329:{//Zephyr
        captain: "If there are 6 Shooter characters in your crew, boosts ATK of Shooter characters by 3.9x if they have a Matching orb, by 3.25x otherwise and reduces damage received by 10%",
        special: "Cuts the current HP of one enemy by 30%, adds 50x character's ATK as Additional Typeless Damage for 2 turns and changes all Shooter character's orbs, including [BLOCK] orbs, into Matching orbs.",
        specialNotes: "#{additionalDamage : 55x}",
        specialName: "Destroying All Evil: \"Smash Buster\"",
    },
    2330:{//Zephyr
        captain: "If there are 6 Shooter characters in your crew, boosts ATK of Shooter characters by 3.9x if they have a Matching orb, by 3.25x otherwise and reduces damage received by 10%",
        special: "Cuts the current HP of one enemy by 30%, adds 50x character's ATK as Additional Typeless Damage for 2 turns and changes all Shooter character's orbs, including [BLOCK] orbs, into Matching orbs.",
        specialNotes: "#{additionalDamage : 55x}",
        specialName: "Destroying All Evil: \"Smash Buster\"",
        sailor: {
            "base": "None",
            "level1": "Adds 4x character's ATK as Additional Damage",
            "level2": "Makes [TND] and [RCV] orbs beneficial for Shooter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 1: Adds 4x character's ATK as Additional Damage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 2: Enrage" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Sailor Ability 2: Makes [TND] and [RCV] orbs beneficial for Shooter characters" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 2%",
                    "Level 2: Reduce damage taken from [STR] characters by 3%",
                    "Level 3: Reduce damage taken from [STR] characters by 4%",
                    "Level 4: Reduce damage taken from [STR] characters by 5%",
                    "Level 5: Reduce damage taken from [STR] characters by 7%"
                ]
            },
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 100",
                    "Level 3: Boosts base ATK by 150",
                    "Level 4: Boosts base ATK by 200",
                    "Level 5: Boosts base ATK by 250"
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
        potentialNotes: "#{enrage}"
    },
    2331: {//Ain
        captain: "Boosts ATK and RCV of Shooter and Slasher characters by 1.25x",
        special: "Reduces enemies' Percent Damage Reduction and Increased Defense duration by 2 turns, reduces Bind and Despair duration by 2 turns and if your crew has Percent Damage Reduction, recovers 20% of crew's MAX HP, reduces damage received by 70% for 1 turn otherwise.",
        specialName: "Double Shot",
        sailor: "Completely resists Silence on this character",
    },
    2332: {//Ain
        captain: "Boosts ATK and RCV of Shooter and Slasher characters by 1.75x",
        special: "Reduces enemies' Percent Damage Reduction and Increased Defense duration by 2 turns, reduces Bind and Despair duration by 2 turns and if your crew has Percent Damage Reduction, recovers 20% of crew's MAX HP, reduces damage received by 70% for 1 turn otherwise.",
        specialName: "Double Shot",
        sailor: {
            "base": "Completely resists Silence on this character",
            "level1": "Makes [PSY] orbs beneficial for Shooter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 45" },
            { "description": "Acquire Potential 1: Barrier Penetration" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs beneficial for Shooter characters" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 65" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 2: Double Special Activation" },
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
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by 1 turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by 3 turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by 5 turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by 7 turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
                ]
            },
        ],
    },
    2333: {//Binz
        captain: "Boosts ATK of Shooter characters by 2.25x",
        special: "Deals 40x character's ATK in Typeless damage to all enemies, delays all enemies for 1 turn and if the HP of the enemy with the highest Maximum HP is equal to or less than 80%, amplifies the effect of orbs for Shooter characters by 1.75x for 3 turns",
        specialName: "Continuous Shuriken Throwing",
        sailor: "Boosts base HP of Shooter characters by 50",
    },
    2334: {//Binz
        captain: "Boosts ATK of Shooter characters by 2.5x and their HP by 1.25x",
        special: "Deals 40x character's ATK in Typeless damage to all enemies, delays all enemies for 1 turn and if the HP of the enemy with the highest Maximum HP is equal to or less than 80%, amplifies the effect of orbs for Shooter characters by 1.75x for 3 turns",
        specialName: "Continuous Shuriken Throwing",
        sailor: {
            "base": "Boosts base HP of Shooter characters by 50",
            "level1": "Makes [INT] orbs beneficial for Shooter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs beneficial for Shooter characters" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ],
    },
    2335: {//TM Law
        captain: "Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.1x",
        captainNotes: "The bonus is cumulative. Characters with 2 of the boosted classes get a 1.21x bonus",
        special: "Deals 30x character's ATK in [STR] damage to one enemy, reduces Bind and Despair duration by 2 turns, changes own orb and adjacent orbs into Matching orbs, adds 0.7x to Chain multiplier for 1 turn and reduces Special Cooldown of Fighter, Slasher, Cerebral and Free Spirit specials by 1 turn",
        specialName: "Counter-Shock",
    },
    2336: {//TM Law
        captain: {
            "base": "Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.2x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters.",
            "level1": "Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.3x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters.",
            "level2": "Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.4x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters.",
            "level3": "Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.5x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters.",
            "level4": "Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.6x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters.",
            "level5": "Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.7x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters.",
            "level6": "Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.8x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters.",
        },
        captainNotes: "The bonus is cumulative. Characters with 2 of the boosted classes get a 3.24x bonus",
        special: "Deals 30x character's ATK in [STR] damage to one enemy, reduces Bind and Despair duration by 2 turns, changes own orb and adjacent orbs into Matching orbs, adds 0.7x to Chain multiplier for 1 turn and reduces Special Cooldown of Fighter, Slasher, Cerebral and Free Spirit specials by 1 turn",
        specialName: "Counter-Shock",
        sailor: {
            "base": "None",
            "level1": "Makes [TND] and [RCV] orbs beneficial for this character",
            "level2": "Restores his own special cooldown by 2 turns when it is rewinded",
        },
        sailorNotes: "#{beneficial}<br>#{rewind : 2}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.3x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters." },
            { "description": "Acquire Sailor Ability 1: Makes [TND] and [RCV] orbs beneficial for this character" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.4x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters." },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.5x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters." },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.6x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters." },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 2: Restores his own special cooldown by 2 turns when it is rewinded" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.7x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters." },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Fighter, Slasher, Cerebral and Free Spirit characters by 1.8x and makes [RCV] and [TND] orbs beneficial for Fighter, Slasher, Cerebral and Free Spirit characters." },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 2 turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 3 turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 4 turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 6 turn at the start of the fight"
                ]
            },
        ]
    },
    2337: {//Legend Sulong Carrot
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight. For 12 turns after the start of the fight, boosts ATK of Fighter, Slasher, Striker, Shooter and Cerebral characters by 2x, boosts chances of getting Matching orbs and attacks will ignore defensive barriers and buffs. After 12 turns, boosts ATK of Fighter, Slasher, Striker, Shooter and Cerebral characters by 2.75x.",
        captainNotes: "The bonus is cumulative. Characters with 2 of the boosted classes get a 4x bonus for the first 12 turns<br>Attacks are still affected by DEF value. DEF boost buffs (Blue shield) still reduce your damage and you can not kill through Resilience, but Damage Negating (Yellow shield), % Damage Reduction (Rainbow shield), Barriers and Threshold Damage Reduction are ignored. Enemy attacks will go through YOUR defensive buffs.",
        special: "Reduces Special Cooldown of Fighter, Slasher, Striker, Shooter and Cerebral specials by 2 turns, amplifies the effects of orbs for Fighter, Slasher, Striker, Shooter and Cerebral characters by 2x for 1 turn, makes [QCK], [RCV] and [TND] orbs beneficial for all characters for 1 turn and swaps this unit with your captain for 1 turn.",
        specialNotes: "#{beneficial}",
        specialName: "Electrical Rush",
    },
    2338: {//Legend Sulong Carrot
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight. For 12 turns after the start of the fight, boosts ATK of Fighter, Slasher, Striker, Shooter and Cerebral characters by 2x, boosts chances of getting Matching orbs and attacks will ignore defensive barriers and buffs. After 12 turns, boosts ATK of Fighter, Slasher, Striker, Shooter and Cerebral characters by 2.75x.",
        captainNotes: "The bonus is cumulative. Characters with 2 of the boosted classes get a 4x bonus for the first 12 turns<br>Attacks are still affected by DEF value. DEF boost buffs (Blue shield) still reduce your damage and you can not kill through Resilience, but Damage Negating (Yellow shield), % Damage Reduction (Rainbow shield), Barriers and Threshold Damage Reduction are ignored. Enemy attacks will go through YOUR defensive buffs.",
        special: "Reduces Special Cooldown of Fighter, Slasher, Striker, Shooter and Cerebral specials by 2 turns, amplifies the effects of orbs for Fighter, Slasher, Striker, Shooter and Cerebral characters by 2x for 1 turn, makes [QCK], [RCV] and [TND] orbs beneficial for all characters for 1 turn and swaps this unit with your captain for 1 turn.",
        specialNotes: "#{beneficial}",
        specialName: "Electrical Rush",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of all characters by 30",
            "level2": "Restores her own special cooldown completely when it is rewinded",
        },
        sailorNotes: "#{rewind : all}",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of all characters by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 2: Restores her own special cooldown completely when it is rewinded" },
            { "description": "Boosts base ATK by 75" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 2%",
                    "Level 2: Reduce damage taken from [STR] characters by 3%",
                    "Level 3: Reduce damage taken from [STR] characters by 4%",
                    "Level 4: Reduce damage taken from [STR] characters by 5%",
                    "Level 5: Reduce damage taken from [STR] characters by 7%"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
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
        support: [
            {
                "Characters": "Nami, Jimbei, Chopper and Brook",
                "description": [
                    "Level 1: Adds 8% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 10% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 12% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 15% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 18% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2339: {//Stussy
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of Shooter and Cerebral characters by 2.25x",
        special: "Deals 50x character's ATK in [QCK] damage to one enemy, randomizes all non-Matching orbs and boosts ATK of Fighter, Slasher, Striker, Shooter and Cerebral characters by 1.5x for 1 turn. If \"Flying Finger Gun\" is used again in the same turn the special is activated in, boosts ATK of Fighter, Slasher, Striker, Shooter and Cerebral characters by 2.25x for 1 turn.",
        specialName: "Flying Finger Gun",
        sailor: "When any other character uses a special, reduces own cooldown by 1 turn",
    },
    2340: {//Stussy
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of Shooter and Cerebral characters by 2.5x",
        special: "Deals 50x character's ATK in [QCK] damage to one enemy, randomizes all non-Matching orbs and boosts ATK of Fighter, Slasher, Striker, Shooter and Cerebral characters by 1.5x for 1 turn. If \"Flying Finger Gun\" is used again in the same turn the special is activated in, boosts ATK of Fighter, Slasher, Striker, Shooter and Cerebral characters by 2.25x for 1 turn.",
        specialName: "Flying Finger Gun",
        sailor: {
            "base": "When any other character uses a special, reduces own cooldown by 1 turn",
            "level1": "Reduces Blindness duration by 3 turns",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Reduces Blindness duration by 3 turns" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 10",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 50",
                    "Level 4: Boosts base ATK by 75",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                ]
            },
        ],
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Shooter Characters",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, randomizes all orbs and boosts ATK of supported character by 1.2x for 1 turn.",
                    "Level 2: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, randomizes all orbs and boosts ATK of supported character by 1.2x for 1 turn.",
                    "Level 3: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, randomizes all non-Matching orbs and boosts ATK of supported character by 1.2x for 1 turn.",
                    "Level 4: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, randomizes all non-Matching orbs and boosts ATK of supported character by 1.3x for 1 turn.",
                    "Level 5: Once per an adventure, when the supported character uses a Damage Dealing or Health Cutting special, randomizes all non-Matching orbs and boosts ATK of supported character by 1.5x for 1 turn."
                ]
            }
        ]
    },
    2341: {//Opera
        captain: "Boosts ATK of Striker and Fighter characters by 2x",
        special: "Deals 80x character's ATK in Typeless damage to all enemies. If your crew has Orb Amplification, boosts the Color Affinity of Fighter, Slasher, Striker, Shooter and Cerebral characters by 1.75x for 1 turn, amplifies the effects of orbs for Fighter, Slasher, Striker, Shooter and Cerebral characters by 1.75x for 1 turn otherwise.",
        specialName: "Cream Flame",
        sailor: "Cannot be blown away",
    },
    2342: {//Opera
        captain: "Boosts ATK of Striker and Fighter characters by 2x, cuts the current HP of each enemy by 10% at the end of each turn",
        special: "Deals 80x character's ATK in Typeless damage to all enemies. If your crew has Orb Amplification, boosts the Color Affinity of Fighter, Slasher, Striker, Shooter and Cerebral characters by 1.75x for 1 turn, amplifies the effects of orbs for Fighter, Slasher, Striker, Shooter and Cerebral characters by 1.75x for 1 turn otherwise.",
        specialName: "Cream Flame",
        sailor: {
            "base": "Cannot be blown away",
            "level1": "Makes [PSY] orbs beneficial for Fighter characters",
        },
        sailorlNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs beneficial for Fighter characters" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Potential 2: Double Special Activation" },
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
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by 3 turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by 5 turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by 8 turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by 10 turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
                ]
            },
        ],
        support: [
            {
                "Characters": "Galette, Amande and Bobbin",
                "description": [
                    "Level 1: Adds 6% of this character's base HP to the supported character's base HP",
                    "Level 2: Adds 7% of this character's base HP to the supported character's base HP",
                    "Level 3: Adds 9% of this character's base HP to the supported character's base HP",
                    "Level 4: Adds 12% of this character's base HP to the supported character's base HP",
                    "Level 5: Adds 15% of this character's base HP to the supported character's base HP"
                ]
            }
        ]
    },
    2343: {//Bavarois
        captain: "Boosts ATK of Shooter characters by 2.25x and recovers 1000 HP at end of each turn",
        special: "Deals 8 hits of random Typeless damage to random enemies and changes left column orbs into Matching orbs. If your Captain's orb is [QCK], [PSY], [INT] or [TND], boosts ATK of Shooter characters by 1.75x for 3 turns.",
        specialNotes: "#{randomHits : 8}<br>#{random : ? : ? : for each hit}",
        specialName: "Ordering the Homie Cannonballs",
        sailor: "Boosts base ATK of Shooter characters by 50",
    },
    2344: {//Bavarois
        captain: "Boosts ATK of Shooter characters by 2.5x and recovers 1000 HP at end of each turn",
        special: "Deals 8 hits of random Typeless damage to random enemies and changes left column orbs into Matching orbs. If your Captain's orb is [QCK], [PSY], [INT] or [TND], boosts ATK of Shooter characters by 1.75x for 3 turns.",
        specialNotes: "#{randomHits : 8}<br>#{random : ? : ? : for each hit}",
        specialName: "Ordering the Homie Cannonballs",
        sailor: {
            "base": "Boosts base ATK of Shooter characters by 50",
            "level1": "Reduces Paralysis duration on this character by 3 turns",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis duration on this character by 3 turns" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ],
        support: [
            {
                "Characters": "Charlotte Linlin and Perospero",
                "description": [
                    "Level 1: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2345: {//Galette
        captain: "Boosts ATK of [QCK] and [INT] characters by 2.25x and makes [QCK] and [INT] orbs beneficial for [QCK] and [INT] characters",
        special: "Delays all enemies for 1 turn, reduces Special Cooldown of 1 character by 2 turns. If your Captain is a [QCK] or [INT] character, locks the chain multiplier at 3x for 1 turn.",
        specialName: "Left-Handed Haul",
        sailor: "Boosts base ATK, HP and RCV of all characters by 20",
    },
    2346: {//Galette
        captain: "Boosts ATK of [QCK] and [INT] characters by 2.5x and makes [QCK] and [INT] orbs beneficial for [QCK] and [INT] characters",
        special: "Delays all enemies for 1 turn, reduces Special Cooldown of 1 character by 2 turns. If your Captain is a [QCK] or [INT] character, locks the chain multiplier at 3x for 1 turn.",
        specialName: "Left-Handed Haul",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of all characters by 20",
            "level1": "Restores her own special cooldown by 3 turns when it is rewinded",
        },
        sailorNotes: "#{rewind : 3}",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Restores her own special cooldown by 3 turns when it is rewinded" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
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
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 3 turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 5 turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 7 turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 8 turn at the start of the fight"
                ]
            },
        ],
        support: [
            {
                "Characters": "Amande, Opera and Bobbin",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 2: Adds 4% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 3: Adds 5% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 4: Adds 6% of this character's base ATK and RCV to the supported character's base ATK and RCV",
                    "Level 5: Adds 8% of this character's base ATK and RCV to the supported character's base ATK and RCV"
                ]
            }
        ]
    },
    2347: {//Shanks
        captain: "Boosts ATK of [PSY] characters by 2.25x and recovers 500 HP at end of each turn",
        special: "Boosts ATK of [STR] and [PSY] characters by 1.5x for 1 turn and recovers 2,000 HP.",
        specialName: "A Promised Strawhat",
        sailor: "Boosts base ATK, HP and RCV of all characters by 20",
    },
    2348: {//Pedro
        captain: "Reduces cooldown of all specials by ? turn at the start of the fight. Boosts ATK of Slasher characters by 2.5x",
        special: "Cuts the current HP of one enemy by 10% and reduces the defense of all enemies by 100% for 1 turn. If your crew has 5 or more Slasher characters at the time the special is activated, boosts ATK against enemies with reduced defense by 2x for 1 turn and changes adjacent orbs into Matching Orbs.",
        specialName: "Dawn-break Sword",
    },
    2349: {//Pedro
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of Slasher characters by 2.75x and if you have 5 or more Slashers characters in your crew, boosts chain by 1.3x",
        special: "Cuts the current HP of one enemy by 10% and reduces the defense of all enemies by 100% for 1 turn. If your crew has 5 or more Slasher characters at the time the special is activated, boosts ATK against enemies with reduced defense by 2x for 1 turn and changes adjacent orbs into Matching Orbs.",
        specialName: "Dawn-break Sword",
        sailor: {
            "base": "If this character has a [DEX] orb and you hit a PERFECT with him, keep his [DEX] orb for the next turn",
            "level1": "Makes [DEX] orbs beneficial for Slasher characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs beneficial for Slasher characters" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
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
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2350: {//Compote
        captain: "Boosts HP of Powerhouse characters by 1.2x. Boosts ATK of Powerhouse characters by 2.5x following a chain of 3 same Type attacks no lower than Good",
        special: "Changes [RCV], [TND] and [BOMB] orbs into Matching orbs and reduces Chain Coefficient Reduction duration by 3 turns.",
        specialName: "Fruit Bowl",
    },
    2351: {//Perospero
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of [STR] characters by 2.25x and their HP by 1.2x.",
        special: "Locks all orbs for 2 turns, changes own orb to [STR] and boosts the Color Affinity of Striker and Cerebral characters by 1.3x for 2 turns",
        specialName: "Candy Man",
        support: [
            {
                "Characters": "Striker Characters",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2352: {//Mascarpone & Joscarpone
        captain: "Boosts ATK of Slasher characters by 1.75x and their RCV by 1.2x.",
        special: "Deals 2 hits of of 15x character's ATK in [QCK] damage to random enemies and removes Poison duration completely",
        specialName: "Flaming Arrows Aimed Through the Mirror",
    },
    2353: {//Magellan
        captain: "Boosts ATK of Shooter and Striker characters by 2.25x and recovers 1.5x character's RCV in HP at the end of each turn.",
        special: [
            {
                "description": "Poisons all enemies, reduces enemies' Threshold Damage Reduction and Percent Damage Reduction duration by 1 turn and boosts ATK against Poisoned enemies by 1.5x for 1 turn",
                "cooldown": [ 23, 9 ],
            },
            {
                "description": "Strongly Poisons one enemy, Poisons all other enemies, reduces the defense of all enemies by 100% for 2 turns, reduces enemies' Threshold Damage Reduction and Percent Damage Reduction duration by 2 turns and boosts ATK against Poisoned and Strongly Poisoned enemies by 1.75x for 1 turn",
                "cooldown": [ 27, 13 ],
            },
        ],
        specialNotes: "Strong Poison deals 300x character's ATK in Fixed damage at the end of each turn. Regular Poison deals 0.5x character's ATK in Fixed damage at the end of each turn.",
        specialName: "Chloro Ball",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes : "#{silence}",
    },
    2354: {//Magellan
        captain: "Boosts ATK of Shooter and Striker characters by 2.5x and recovers 3x character's RCV in HP at the end of each turn.",
        special: [
            {
                "description": "Poisons all enemies, reduces enemies' Threshold Damage Reduction and Percent Damage Reduction duration by 1 turn and boosts ATK against Poisoned enemies by 1.5x for 1 turn",
                "cooldown": [ 23, 9 ],
            },
            {
                "description": "Strongly Poisons one enemy, Poisons all other enemies, reduces the defense of all enemies by 100% for 2 turns, reduces enemies' Threshold Damage Reduction and Percent Damage Reduction duration by 2 turns and boosts ATK against Poisoned and Strongly Poisoned enemies by 1.75x for 1 turn",
                "cooldown": [ 27, 13 ],
            },
        ],
        specialNotes: "Strong Poison deals 300x character's ATK in Fixed damage at the end of each turn. Regular Poison deals 0.5x character's ATK in Fixed damage at the end of each turn.",
        specialName: "Chloro Ball",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "Completely resists Paralysis on this character",
        },
        sailorNotes : "#{silence}",
        limit: [
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Acquire Sailor Ability 1: Completely resists Paralysis on this character" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
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
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 75% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ],
        support: [
            {
                "Characters": "Hannyabal, Sadie and Saldeath",
                "description": [
                    "Level 1: Adds 4% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 2: Adds 5% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 3: Adds 6% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 4: Adds 8% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 5: Adds 10% of this character's base HP and RCV to the supported character's base HP and RCV"
                ]
            }
        ]
    },
    2355: {//Arlong
        captain: "Boosts ATK of Slasher characters by 2.25x, but boosts his OWN attack by 2.5x",
        special: "Deals ?x character's ATK in [STR] damage to one enemy, Reduces enemies' Increased Defense and Resilience Buffs duration by 3 turns, changes [BLOCK] orbs into Matching orbs and amplifies the effect of orbs for Slasher characters by 1.75x for 3 turns",
        specialName: "Kiribachi - Single Stroke Slice",
    },
    2356: {//Arlong
        captain: "Boosts ATK of Slasher characters by 2.75x, but boosts his OWN attack by 3x",
        special: "Deals ?x character's ATK in [STR] damage to one enemy, Reduces enemies' Increased Defense and Resilience Buffs duration by 3 turns, changes [BLOCK] orbs into Matching orbs and amplifies the effect of orbs for Slasher characters by 1.75x for 3 turns",
        specialName: "Kiribachi - Single Stroke Slice",
        sailor: {
            "base": "Makes QCK orbs beneficial for this character",
            "level1": "Boosts own base ATK by 200 if this character is the last in the chain to attack",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts own base ATK by 200 if this character is the last in the chain to attack" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 3: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 4: Reduces Slot Bind duration by 2 turn on this character",
                    "Level 5: Reduces Slot Bind duration by 3 turn on this character"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 50% chance to deal 2% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 60% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 4% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 6% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "Hatchan, Choo and Kuroobi",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 4% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 5% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 7% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 9% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2357: {//Cavendish
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 3x, but boosts his OWN attack by 4x",
        captainNotes: "Cavendish only boosts Friend or Sub Cavendish by 3x for a total of 12x boost with two Cavendish captains",
        special: "Removes all positive buffs on your team. Deals ?x the character's ATK as Typeless damage to all enemies. Boosts own ATK by 2.25x for 2 turns, amplifies the effect of own orb by 2x for 2 turns, locks own orb for 2 turns and changes own orb, including [BLOCK] orb, to [QCK].",
        specialNotes: "Boosted ATK and Orb Effectiveness only works for the character who uses their own Special.",
        specialName: "The Slashing Wind",
        sailor: {
            "base": "None",
            "level1": "If this character has an [QCK] orb and you hit a PERFECT with him, keep his [QCK] orb for the next turn",
            "level2": "Boosts own base ATK by 200 if this character is the last in the chain to attack",
        },
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: If this character has an [QCK] orb and you hit a PERFECT with him, keep his [QCK] orb for the next turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Boosts own base ATK by 200 if this character is the last in the chain to attack" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base HP by 120" },
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
        potentialNotes: "#{enrage}"
    },
    2358: {//Chopper
        captain: "Boosts amount of Beli received by 3x",
        captainNotes: "Beli boost does not take effect if he becomes your captain in the middle of the adventure.",
        special: "Reduces Silence duration by 2 turns and changes adjacent orbs into Matching Orbs. If you are on a Treasure Map, boosts ATK of Fighter, Slasher and Striker characters depending on your Treasure Map Level for 1 turn",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
        specialName: "The Ship's Doctor that Delivers a Merry Christmas",
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
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2359: {//Robin
        captain: "Boosts ATK of Cerebral characters by 1.5x",
        special: "If your crew has 4 or more characters with [STR], [QCK] or [INT] orbs, boosts the Color Affinity of Fighter and Cerebral characters by 1.75x for 1 turn",
        specialName: "A Cute Christmas Gift",
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
                    "Level 1: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 8 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    2360: {//Nekomamushi
        captain: "Boosts ATK of Striker characters by 1.5x",
        special: "Reduces Bind and Despair duration by 3 turns, reduces Special Cooldown of Fighter, Striker and Powerhouse specials by 1 turn and recovers 15x character's RCV in HP.",
        specialName: "The Guardian's Christmas Chicken",
        sailor: "Restores his own special cooldown by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
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
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 3 turn",
                    "Level 2: Reduces No Healing duration by 5 turn",
                    "Level 3: Reduces No Healing duration by 7 turns",
                    "Level 4: Reduces No Healing duration by 8 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
        ]
    },
    2361: {//TM Nami
        captain: "Boosts ATK of Striker and Cerebral characters by 1.5x",
        special: "Reduces Paralysis, ATK DOWN, Chain Multiplier Limit, Chain Coefficient Reduction, Burn and Blindness duration by 3 turns. Changes [BLOCK] and Badly Matching orbs into Matching orbs",
        specialName: "Mirage Tempo - Holy Night",
    },
    2362: {//TM Nami
        captain: {
            "base": "Boosts ATK of Striker and Cerebral characters by 1.75x if HP is above 50%, by 1.5x otherwise",
            "level1": "Not Translated",
            "level2": "Not Translated",
            "level3": "Not Translated",
            "level4": "Not Translated",
            "level5": "Not Translated",
            "level6": "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of Striker and Cerebral characters by 3x if HP is above 50%, by 2x otherwise",
        },
        special: "Reduces Paralysis, ATK DOWN, Chain Multiplier Limit, Chain Coefficient Reduction, Burn and Blindness duration by 3 turns. Changes [BLOCK] and Badly Matching orbs into Matching orbs",
        specialName: "Mirage Tempo - Holy Night",
        sailor: {
            "base": "None",
            "level1": "Reduces Silence duration on this character by 3 turns",
            "level2": "Makes [INT] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Makes [INT] orbs beneficial for this character" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire new Captain Ability: Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of Striker and Cerebral characters by 3x if HP is above 50%, by 2x otherwise" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 0.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 20% at the start of the turn, heals for 0.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 30% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 40% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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
        ]
    },
    2363: {//6+ Gear 4 Luffy
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of all characters by 3.25x, their HP by 1.35x, makes [DEX] and [INT] orbs beneficial for all characters. If you use 'Gomu Gomu no King Cobra' for 3 turns, on this Luffy boosts ATK of all characters by 4x at the start of the chain, by 4.25x after 3 PERFECTs in a row",
        special: [
            {
                "description": "Deals 150x character's ATK in Typeless damage to one enemy, adds 0.3 to Chain multiplier for 1 turn, amplifies the effect of orbs of all characters by 1.5x for 1 turn. If Luffy is your Captain or Friend/Guest Captain, makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for all characters for 3 turns",
                "cooldown": [ 12, 7 ],
            },
            {
                "description": "Deals 150x character's ATK in Typeless damage to one enemy, adds 0.7 to chain multiplier for 3 turns, amplifies the effect of orbs by 1.75x for 1 turn. If during that turn you score 3 PERFECT hits, amplifies the effect of orbs by 2x in the following turn. If Luffy is your Captain or Friend/Guest Captain, makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for all characters for 3 turns",
                "cooldown": [ 19, 14 ],
            },
        ],
        specialName: "Gomu Gomu no King Cobra",
        specialNotes: "#{beneficial}",
        sailor: {
            "base": "None",
            "level1": "Completely resists Paralysis on this character",
            "level2": "Boosts base ATK, HP and RCV for all characters by 50",
        },
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: Pinch Healing" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV for all characters by 50" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
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
        support: [
            {
                "Characters": "All Characters",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 8% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 9% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2364: {//Katakuri
        captain: "Boosts ATK of Fighter, Slasher, Shooter, Driven and Powerhouse characters by 1.825x, boosts the Color Affinity of all characters by 1.4x and makes [STR], [PSY], [RCV] and [TND] orbs beneficial for all characters. Recovers 50% of damage taken from enemies in the previous stage when entering a new stage.",
        captainNotes: "The bonus is cumulative. Characters with 2 of the boosted classes get a 3.330625x bonus<br>#{beneficial}",
        special: "Deals Typeless damage to all enemies equal to 30x the damage taken from enemies before the special is activated and adds Additional Typeless Damage equal to 15x the damage taken from enemies before the special is activated for 1 turn.",
        specialNotes: "The amount of damage possible caps at 200,000 damage taken, so 6,000,000 AOE Typeless damage and 3,000,000 Additional Damage.",
        specialName: "Burning Mochi",
    },
    2365: {//Katakuri
        captain: "Boosts ATK of Fighter, Slasher, Shooter, Driven and Powerhouse characters by 1.825x, boosts the Color Affinity of all characters by 1.4x and makes [STR], [PSY], [RCV] and [TND] orbs beneficial for all characters. Recovers 50% of damage taken from enemies in the previous stage when entering a new stage.",
        captainNotes: "The bonus is cumulative. Characters with 2 of the boosted classes get a 3.330625x bonus<br>#{beneficial}",
        special: "Deals Typeless damage to all enemies equal to 30x the damage taken from enemies before the special is activated and adds Additional Typeless Damage equal to 15x the damage taken from enemies before the special is activated for 1 turn.",
        specialNotes: "The amount of damage possible caps at 200,000 damage taken, so 6,000,000 AOE Typeless damage and 3,000,000 Additional Damage.",
        specialName: "Burning Mochi",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of all characters by 75",
            "level2": "Boosts this character's damage against [INT] characters by 1.1x",
        },
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of all characters by 75" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: Enrage" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Sailor Ability 2: Boosts this character's damage against [INT] characters by 1.1x" },
            { "description": "Boosts base ATK by 75" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 150",
                    "Level 2: Boosts base ATK by 200",
                    "Level 3: Boosts base ATK by 250",
                    "Level 4: Boosts base ATK by 300",
                    "Level 5: Boosts base ATK by 350"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 3 turns",
                    "Level 3: Reduces No Healing duration by 5 turns",
                    "Level 4: Reduces No Healing duration by 7 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Charlotte Linlin, Cracker, Brulee and Smoothie",
                "description": [
                    "Level 1: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 8% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 10% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 12% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2366: {//Flampe
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "Recovers 6x character's RCV in HP at the end of each turn for 3 turns. If during that turn, you hit 3 PERFECTS, boosts ATK of Fighter, Slasher, Shooter, Driven and Powerhouse characters by 1.75x for 3 turns in the following turn and protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Numbing Needle",
        sailor: "If this character has a [PSY] orb and you hit a PERFECT with her, keep his [PSY] orb for the next turn",
    },
    2367: {//Flampe
        captain: "Recovers 5x character's RCV in HP at the end of each turn",
        special: "Recovers 6x character's RCV in HP at the end of each turn for 3 turns. If during that turn, you hit 3 PERFECTS, boosts ATK of Fighter, Slasher, Shooter, Driven and Powerhouse characters by 1.75x for 3 turns in the following turn and protects from defeat as long as HP is above 50% for 1 turn",
        specialName: "Numbing Needle",
        sailor: {
            "base": "If this character has a [PSY] orb and you hit a PERFECT with her, keep his [PSY] orb for the next turn",
            "level1": "If your captain is a [STR] or [PSY] character, makes [INT] orbs beneficial for [STR] and [PSY] characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: If your captain is a [STR] or [PSY] character, makes [INT] orbs beneficial for [STR] and [PSY] characters" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
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
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        ],
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Charlotte Linlin and Katakuri",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses their special, reduces the defense of all enemies by 50% for 1 turn.",
                    "Level 2: Once per an adventure, when the supported character uses their special, reduces the defense of all enemies by 80% for 1 turn.",
                    "Level 3: Once per an adventure, when the supported character uses their special, reduces the defense of all enemies by 80% for 1 turn. Makes PERFECTs slightly easier to hit for 1 turn.",
                    "Level 4: Once per an adventure, when the supported character uses their special, reduces the defense of all enemies by 80% for 1 turn. Makes PERFECTs easier to hit for 1 turn.",
                    "Level 5: Once per an adventure, when the supported character uses their special, reduces the defense of all enemies by 80% for 1 turn. Makes PERFECTs significantly easier to hit for 1 turn."
                ]
            }
        ]
    },
    2368: {//Mont-d'Or
        captain: "Boosts ATK of [STR] and [PSY] characters by a variable factor between 2x and 2.5x based on the timing of the attack of the previous unit in the chain",
        captainNotes: "A hit below Good or a Miss will boost the ATK of the next unit by 2x, a Good hit by ?x, a Great hit by ?x and a PERFECT hit by 2.75x.",
        special: "Reduces enemies' Percent Damage Reduction and Increased Defense duration by 4 turns, reduces Silence, Increase Damage Taken and Burn duration by 4 turns. If your captain is a [STR] or [PSY] character, boosts the Color Affinity of [STR] and [PSY] characters by 1.75x for 2 turns",
        specialName: "Sealed Books",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    2369: {//Mont-d'Or
        captain: "Boosts ATK of [STR] and [PSY] characters by a variable factor between 2x and 2.75x based on the timing of the attack of the previous unit in the chain and recovers 700 HP at end of each turn",
        captainNotes: "A hit below Good or a Miss will boost the ATK of the next unit by 2x, a Good hit by 2.25x, a Great hit by 2.5x and a PERFECT hit by 2.75x.",
        special: "Reduces enemies' Percent Damage Reduction and Increased Defense duration by 4 turns, reduces Silence, Increase Damage Taken and Burn duration by 4 turns. If your captain is a [STR] or [PSY] character, boosts the Color Affinity of [STR] and [PSY] characters by 1.75x for 2 turns",
        specialName: "Sealed Books",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "If your captain is a [STR] or [PSY] character, makes [QCK] orbs beneficial for [STR] and [PSY] characters",
        },
        sailorNotes: "#{silence}<br>#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: If your captain is a [STR] or [PSY] character, makes [QCK] orbs beneficial for [STR] and [PSY] characters" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
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
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Katakuri, Charlotte Linlin, Galette and Opera",
                "description": [
                    "Level 1: Reduces damage received from [DEX] characters by 1%. Adds 2% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Reduces damage received from [DEX] characters by 2%. Adds 3% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Reduces damage received from [DEX] characters by 3%. Adds 5% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Reduces damage received from [DEX] characters by 4%. Adds 7% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Reduces damage received from [DEX] characters by 5%. Adds 9% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2370: {//Streusen
        captain: "Boosts ATK of [STR] characters by 2.25x and their RCV by 1.2x",
        special: "Removes Poison duration completely, reduces Bind and Despair duration by 5 turns, changes [TND], [BLOCK], [BOMB] and Badly Matching orbs into [RCV] orbs and makes [STR], [PSY] and [RCV] orbs beneficial for 3 turns",
        specialName: "Gourmetamorphosis",
        sailor: "Makes [RCV] orbs beneficial for this character",
        sailorNotes: "#{beneficial}",
    },
    2371: {//Streusen
        captain: "Boosts ATK of [STR] characters by 2.75x and their RCV by 1.3x",
        special: "Removes Poison duration completely, reduces Bind and Despair duration by 5 turns, changes [TND], [BLOCK], [BOMB] and Badly Matching orbs into [RCV] orbs and makes [STR], [PSY] and [RCV] orbs beneficial for 3 turns",
        specialName: "Gourmetamorphosis",
        sailor: {
            "base": "Makes [RCV] orbs beneficial for this character",
            "level1": "Changes all orbs into [RCV] orbs at the start of the fight",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Changes all orbs into [RCV] orbs at the start of the fight" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
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
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Charlotte Linlin, Pudding and Sanji",
                "description": [
                    "Level 1: Adds 5% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 2: Adds 6% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 3: Adds 8% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 4: Adds 10% of this character's base HP and RCV to the supported character's base HP and RCV",
                    "Level 5: Adds 12% of this character's base HP and RCV to the supported character's base HP and RCV"
                ]
            }
        ]
    },
    2372: {//Inuarashi
        captain: "Boosts ATK of Cerebral characters by 3x and if HP is below 30% at the start of the turn boosts chain by 1.5x",
        special: "Reduces crew's current HP by 80%, cuts the current HP of one enemy by 20% and adds 130x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 130x}",
        specialName: "Sword Attack of Reconciliation",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of Cerebral characters by 200",
            "level2": "Boosts own base ATK by 200 if this character is the last in the chain to attack",
        },
        limit: [
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 25" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Cerebral characters by 200" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Acquire Sailor Ability 2: Boosts own base ATK by 200 if this character is the last in the chain to attack" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Potential 3: Enrage" },
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
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 75",
                    "Level 2: Boosts base ATK by 100",
                    "Level 3: Boosts base ATK by 200",
                    "Level 4: Boosts base ATK by 250",
                    "Level 5: Boosts base ATK by 300"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2373: {//Nekomamushi
        captain: "Boosts HP of Striker characters by 1.25x, boosts chances of getting [STR], [QCK], [DEX], [PSY] and [INT] orbs and boosts ATK of Striker charcters by 3.75x if they have a [STR], [QCK], [DEX], [INT], [PSY] or [RAINBOW] orb",
        special: "Deals 60x character's ATK in [PSY] damage to one enemy, reduces Bind and ATK DOWN duration by 3 turns and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for Striker characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Spear Strike of Reconciliation",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Striker characters by 70",
            "level2": "Makes [INT] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Striker characters by 70" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 2: [PSY] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 2: Makes [INT] orbs beneficial for this character" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Boosts base ATK by 55" },
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 2%",
                    "Level 2: Reduce damage taken from [STR] characters by 3%",
                    "Level 3: Reduce damage taken from [STR] characters by 4%",
                    "Level 4: Reduce damage taken from [STR] characters by 5%",
                    "Level 5: Reduce damage taken from [STR] characters by 7%"
                ]
            },
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
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 2: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 10 turns on this character",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ]
    },
    2374: {//Smoothie
        captain: "Boosts ATK of Slasher and Powerhouse characters by 2x, and boosts their HP by 1.25x.",
        special: "Deals 100x character's ATK in [INT] damage to one enemy, makes [DEX], [QCK] and [INT] orbs beneficial for Slasher and Powerhouse characters for 1 turn. If your captain is a Slasher or Powerhouse character, boosts the Color Affinity of Slasher and Powerhouse characters by 1.75x for 3 turns",
        specialNotes: "#{beneficial}",
        specialName: "Juice Slash",
        sailor: "Boosts base ATK, HP and RCV of Slasher and Powerhouse characters by 50",
    },
    2375: {//Smoothie
        captain: "Boosts ATK of Slasher and Powerhouse characters by 2.75x if they have a Matching orb, by 2.25x otherwise, and boosts their HP by 1.25x.",
        special: "Deals 100x character's ATK in [INT] damage to one enemy, makes [DEX], [QCK] and [INT] orbs beneficial for Slasher and Powerhouse characters for 1 turn. If your captain is a Slasher or Powerhouse character, boosts the Color Affinity of Slasher and Powerhouse characters by 1.75x for 3 turns",
        specialNotes: "#{beneficial}",
        specialName: "Juice Slash",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of Slasher and Powerhouse characters by 50",
            "level1": "Makes [PSY] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs beneficial for this character" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[PSY] Damage Reduction",
                "description": [
                    "Level 1: Reduces Damage received from [PSY] enemies by 1%",
                    "Level 2: Reduces Damage received from [PSY] enemies by 2%",
                    "Level 3: Reduces Damage received from [PSY] enemies by 3%",
                    "Level 4: Reduces Damage received from [PSY] enemies by 4%",
                    "Level 5: Reduces Damage received from [PSY] enemies by 5%"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 60% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 70% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 80% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "Charlotte Linlin, Katakuri, Daifuku and Cracker",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 2: Adds 2% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 3: Adds 3% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 4: Adds 5% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 5: Adds 7% of this character's base ATK and HP to the supported character's base ATK and HP"
                ]
            }
        ]
    },
    2376: {//Mother Caramel
        captain: "Boosts ATK of Driven characters by 1.5x and their RCV by 1.2x",
        special: "Reduces enemies' ATK UP duration by 3 turns, changes orbs in the top row into [RCV] orbs and boosts ATK of characters in the top row by 1.75x for 1 turn.",
        specialName: "The Voice Given by the Holy Mother",
    },
    2377: {//Mother Caramel
        captain: "Boosts ATK of Driven characters by 2x and their RCV by 1.5x",
        special: "Reduces enemies' ATK UP duration by 3 turns, changes orbs in the top row into [RCV] orbs and boosts ATK of characters in the top row by 1.75x for 1 turn.",
        specialName: "The Voice Given by the Holy Mother",
        support: [
            {
                "Characters": "Charlotte Linlin and Hajrudin",
                "description": [
                    "Level 1: Adds 2% of this character's base RCV to the supported character's base RCV",
                    "Level 2: Adds 3% of this character's base RCV to the supported character's base RCV",
                    "Level 3: Adds 4% of this character's base RCV to the supported character's base RCV",
                    "Level 4: Adds 5% of this character's base RCV to the supported character's base RCV",
                    "Level 5: Adds 6% of this character's base RCV to the supported character's base RCV"
                ]
            }
        ]
    },
    2378: {//Hajrudin
        captain: "Boosts ATK of Slasher characters by 1.5x and their HP by 1.2x",
        special: "Changes own orb into [STR], boosts own ATK by 1.5x for 1 turn.",
        specialName: "The Pride of the Small Giant",
    },
    2379: {//Streusen
        captain: "Boosts ATK of Slasher characters by 2x and their RCV by 1.2x",
        special: "Recovers 3,000 HP and boosts RCV of all characters by 2x for 1 turn.",
        specialName: "The Cook's Expectation",
        support: [
            {
                "Characters": "Charlotte Linlin",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses their special, recovers 100 HP",
                    "Level 2: Once per an adventure, when the supported character uses their special, recovers 300 HP",
                    "Level 3: Once per an adventure, when the supported character uses their special, recovers 500 HP",
                    "Level 4: Once per an adventure, when the supported character uses their special, recovers 700 HP",
                    "Level 5: Once per an adventure, when the supported character uses their special, recovers 1,000 HP"
                ]
            }
        ]
    },
    2380: {//Young Big Mom
        captain: "Boosts ATK of Powerhouse characters by 2.25x and makes [RCV] orbs beneficial for Powerhouse characters.",
        captainNotes: "#{beneficial}",
        special: "Reduces ATK DOWN, Bind and Despair duration by 6 turns, changes own orb and adjacent orbs into [RCV] orbs boosts ATK of Driven and Powerhouse characters by 2.25x after 12th hit in the chain for 3 turns.",
        specialName: "Natural Born Destroyer",
    },
    2381: {//Young Big Mom
        captain: "Boosts ATK of Driven and Powerhouse characters by 2.75x and makes [RCV] orbs beneficial for Driven and Powerhouse characters.",
        captainNotes: "#{beneficial}",
        special: "Reduces ATK DOWN, Bind and Despair duration by 6 turns, changes own orb and adjacent orbs into [RCV] orbs boosts ATK of Driven and Powerhouse characters by 2.25x after 12th hit in the chain for 3 turns.",
        specialName: "Natural Born Destroyer",
        sailor: {
            "base": "None",
            "level1": "Boosts own base ATK by 300 if this character is the last in the chain to attack",
            "level2": "Boosts amount healed from [RCV] orbs by 250 each",
        },
        limit: [
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts own base ATK by 300 if this character is the last in the chain to attack" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 2: Boosts amount healed from [RCV] orbs by 250 each" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 110" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
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
                    "Level 2: Reduces No Healing duration by 3 turn",
                    "Level 3: Reduces No Healing duration by 5 turn",
                    "Level 4: Reduces No Healing duration by 7 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
        ],
        support: [
            {
                "Characters": "Mother Caramel and Streusen",
                "description": [
                    "Level 1: Adds 2% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 2: Adds 3% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 3: Adds 4% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 4: Adds 5% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 5: Adds 7% of this character's base ATK and HP to the supported character's base ATK and HP"
                ]
            }
        ]
    },
    2382: {//Support Sanji
        captain: "Boosts ATK of all characters by 2.25x and boosts EXP and amount of Beli received by 1.2x",
        special: "Deals 20,000 Fixed damage to one enemy and changes adjacent orbs into [RCV] orbs",
        specialName: "Kick of Separation",
        support: [
            {
                "Characters": "Luffy, Zoro, Nami, Usopp, Chopper, Robin, Franky and Brook",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses their special, changes supported character's orb to [RCV].",
                    "Level 2: Once per an adventure, when the supported character uses their special, changes supported character's orb to [RCV] and recovers 300 HP",
                    "Level 3: Once per an adventure, when the supported character uses their special, changes supported character's orb to [RCV] and recovers 500 HP",
                    "Level 4: Once per an adventure, when the supported character uses their special, changes supported character's orb to [RCV] and recovers 700 HP",
                    "Level 5: Once per an adventure, when the supported character uses their special, changes supported character's orb to [RCV] and recovers 1,000 HP"
                ]
            }
        ]
    },
    2383: {//Kid
        captain: "Boosts ATK of [QCK] characters by 1.5x",
        special: "Deals 30x character's ATK in [QCK] damage to one enemy and reduces ATK DOWN and Increase Damage Taken duration by 4 turns. If you are on a Treasure Map, boosts ATK of [STR], [QCK] and [PSY] characters depending on your Treasure Map Level for 1 turn",
        specialName: "Allied \"Captain\" Anger",
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
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ],
    },
    2384: {//Hawkins
        captain: "Boosts ATK of Fighter characters by 1.5x",
        special: "Reduces enemy Damage Nullification duration by 1 turn and amplifies the effect of orbs for all characters by 1.5x for 1 turn. If your captain is a [STR] or [PSY] character, boosts the Color Affinity of all characters by 1.5x for 1 turn",
        specialName: "Allied \"Magician\" Grief",
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
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 3 turn",
                    "Level 2: Reduces No Healing duration by 5 turn",
                    "Level 3: Reduces No Healing duration by 7 turn",
                    "Level 4: Reduces No Healing duration by 8 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
        ],
    },
    2385: {//Apoo
        captain: "Boosts ATK of Shooter characters by 1.5x",
        special: "Reduces enemy Percent Damage Reduction duration by 3 turns reduces Chain Multiplier Limit duration by 3 turns and makes [RCV] and [TND] orbs beneficial for [STR], [QCK] and [PSY] characters for 3 turns",
        specialName: "Allied \"Roar of the Sea\" Aggravation",
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
            { "description": "Acquire Potential 1: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 60% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers"
                ]
            },
        ],
    },
    2386: {//TM Kaido
        captain: "Boosts ATK of Powerhouse characters by 1.2x",
        special: "Removes all positive buffs on your team, cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers, amplifies the effect of orbs for all characters by 1.5x and boosts own ATK by 3.25x for a variable amount of turns",
        specialNotes: "ATK and Orb amplification buff duration is equal to the amount of [RCV] orbs consumed prior to the time the special was activated with a maximum of 6 turns.",
        specialName: "Kanabō of the Beasts",
    },
    2387: {//TM Kaido
        captain: {
            "base": "Boosts own ATK by 1.75x and boosts ATK of Driven and Powerhouse characters by 1.5x and their HP by 1.2x",
            "level1": "Not Translated",
            "level2": "Not Translated",
            "level3": "Not Translated",
            "level4": "Not Translated",
            "level5": "Not Translated",
            "level6": "Boosts own ATK by 3.25x and boosts ATK of Driven and Powerhouse characters by 2.75x and their HP by 1.2x",
        },
        special: "Removes all positive buffs on your team, cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers, amplifies the effect of orbs for all characters by 1.5x and boosts own ATK by 3.25x for a variable amount of turns",
        specialNotes: "ATK and Orb amplification buff duration is equal to the amount of [RCV] orbs consumed prior to the time the special was activated with a maximum of 6 turns.",
        specialName: "Kanabō of the Beasts",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Powerhouse and Driven characters by 50",
            "level2": "Cannot be Blown Away",
        },
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Powerhouse and Driven characters by 50" },
            { "description": "Boosts base HP by 20" },
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
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Cannot be Blown Away" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire new Captain Ability: Boosts own ATK by 3.25x and boosts ATK of Driven and Powerhouse characters by 2.75x and their HP by 1.2x" },
            { "description": "Acquire Potential 2: Critical Hit" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turn on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turn on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turn on this character"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 60% chance to deal 6% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 7% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 80% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "Jack and Doflamingo",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 2% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 4% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 6% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 8% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2388: {//Makino
        captain: "Reduces damage received by 20% and recovers 2x character's RCV in HP at the end of each turn",
        special: "Recovers 3,000 HP and reduces damage received by 60% for 2 turns.",
        specialName: "Female Bartender's Care",
        support: [
            {
                "Characters": "Luffy, Ace and Sabo",
                "description": [
                    "Level 1: Reduces damage received from [PSY] characters by 1%. Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Reduces damage received from [PSY] characters by 2%. Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Reduces damage received from [PSY] characters by 3%. Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Reduces damage received from [PSY] characters by 4%. Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Reduces damage received from [PSY] characters by 5%. Adds 9% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2389: {//Tsuru
        captain: "Boosts ATK of all characters by 1.75x and their HP by 1.2x.",
        special: "Reduces enemies' Percent Damage Reduction duration by 2 turns and boosts ATK of all characters by 1.3x for 2 turns and amplifies the effect of orbs by 1.3x for 2 turns.",
        specialName: "Great Staff Officer's Commands",
        support: [
            {
                "Characters": "Garp and Sengoku",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses their special, cuts the current HP of each enemy by 2% for 3 turns at the end of the turn.",
                    "Level 2: Once per an adventure, when the supported character uses their special, cuts the current HP of each enemy by 3% for 3 turns at the end of the turn.",
                    "Level 3: Once per an adventure, when the supported character uses their special, cuts the current HP of each enemy by 4% for 3 turns at the end of the turn.",
                    "Level 4: Once per an adventure, when the supported character uses their special, cuts the current HP of each enemy by 5% for 3 turns at the end of the turn.",
                    "Level 5: Once per an adventure, when the supported character uses their special, cuts the current HP of each enemy by 7% for 3 turns at the end of the turn."
                ]
            }
        ]
    },
    2390: {//Conis
        captain: "Boosts ATK and RCV of all Striker and Free Spirit characters by 1.5x.",
        special: "Removes Blindness duration completely and reduces Bind duration by 5 turns.",
        specialName: "Angel's Message",
        support: [
            {
                "Characters": "Ganfor, Aisa, Wyper, Nami, Sanji and Usopp",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK to the supported character's base ATK. Boosts the supported character's ATK by 1.5x against Enel. When the supported character hits a PERFECT, reduces enemies' Increased Defense duration by 1 turn.",
                    "Level 2: Adds 6% of this character's base ATK to the supported character's base ATK. Boosts the supported character's ATK by 1.5x against Enel. When the supported character hits a PERFECT, reduces enemies' Increased Defense duration by 1 turn.",
                    "Level 3: Adds 9% of this character's base ATK to the supported character's base ATK. Boosts the supported character's ATK by 1.5x against Enel. When the supported character hits a PERFECT, reduces enemies' Increased Defense duration by 1 turn.",
                    "Level 4: Adds 12% of this character's base ATK to the supported character's base ATK. Boosts the supported character's ATK by 1.5x against Enel. When the supported character hits a PERFECT, reduces enemies' Increased Defense duration by 1 turn.",
                    "Level 5: Adds 15% of this character's base ATK to the supported character's base ATK. Boosts the supported character's ATK by 1.5x against Enel. When the supported character hits a PERFECT, reduces enemies' Increased Defense duration by 1 turn."
                ]
            }
        ]
    },
    2391: {//Sabo
        captain: "Boosts ATK of Fighter and Free Spirit characters by 2.25x at the start of the chain, by 2.925x after 3 PERFECTs in a row.",
        special: "Changes own orb into [STR], amplifies the effect of orbs for Fighter and Free Spirit characters by 1.75x for 1 turn.",
        specialName: "Sworn Brother's Rescuer",
        support: [
            {
                "Characters": "Luffy, Koala and Hack",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses their special, boosts base ATK of the supported character by 1.2x until the next stage.",
                    "Level 2: Once per an adventure, when the supported character uses their special, boosts base ATK of the supported character by 1.25x until the next stage.",
                    "Level 3: Once per an adventure, when the supported character uses their special, boosts base ATK of the supported character by 1.3x until the next stage.",
                    "Level 4: Once per an adventure, when the supported character uses their special, boosts base ATK of the supported character by 1.35x until the next stage.",
                    "Level 5: Once per an adventure, when the supported character uses their special, boosts base ATK of the supported character by 1.5x until the next stage."
                ]
            }
        ]
    },
    2392: {//Iceberg
        captain: "Boosts ATK of Shooter characters by 2x and recovers 500 HP at end of each turn.",
        special: "Makes [DEX] orbs beneficial for Shooter characters for 3 turns.",
        specialName: "Senior Apprentice's Assistance",
        support: [
            {
                "Characters": "Franky",
                "description": [
                    "Level 1: Once per adventure, when you are inflicted with Despair or Silence, reduces Despair and Silence duration on the supported character by 1 turn.",
                    "Level 2: Once per adventure, when you are inflicted with Despair or Silence, reduces Despair and Silence duration on the supported character by 2 turn.",
                    "Level 3: Once per adventure, when you are inflicted with Despair or Silence, reduces Despair and Silence duration on the supported character by 3 turn.",
                    "Level 4: Once per adventure, when you are inflicted with Despair or Silence, reduces Despair and Silence duration on the supported character by 3 turn and reduces Special Cooldown of the supported character by 1 turn.",
                    "Level 5: Once per adventure, when you are inflicted with Despair or Silence, reduces Despair and Silence duration on the supported character by 3 turn and reduces Special Cooldown of the supported character by 2 turns."
                ]
            }
        ]
    },
    2398: {//Big Emperor
        captain: "Boosts ATK of Shooter characters by 2.5x and their HP by 1.2x. If you use \"Tactics Fifteen \"Big Emperor\"\" in this turn boosts ATK of Shooter characters by 2.75x instead.",
        special: "Increases damage received by 1.25x for 2 turns and amplifies the effect of orbs for Shooter characters by 1.75x for 2 turns. If during that turn you score 5 PERFECT hits, changes all orbs on Shooter characters into Matching orbs in the following turn.",
        specialName: "Tactics Fifteen \"Big Emperor\"",
        sailor: {
            "base": "Makes [STR] and [QCK] orbs beneficial for this character",
            "level1": "Makes [TND] orbs beneficial for Shooter characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Makes [TND] orbs beneficial for Shooter characters" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 75",
                    "Level 3: Boosts base ATK by 100",
                    "Level 4: Boosts base ATK by 125",
                    "Level 5: Boosts base ATK by 150"
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
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Shooter Characters",
                "description": [
                    "Level 1: Adds 1% of this character's base HP to the supported character's base HP.",
                    "Level 2: Adds 2% of this character's base HP to the supported character's base HP.",
                    "Level 3: Adds 3% of this character's base HP to the supported character's base HP.",
                    "Level 4: Adds 4% of this character's base HP to the supported character's base HP.",
                    "Level 5: Adds 5% of this character's base HP to the supported character's base HP."
                ]
            }
        ]
    },
    2399: {//Crocodile&Daz
        captain: {
            "character1": "Boosts ATK of [STR] and [DEX] characters by 2.75x if they have a Matching orb, by 2x otherwise and makes [TND] and [DEX] orbs beneficial for [STR] and [DEX] characters",
            "character2": "Boosts ATK of [STR] and [DEX] characters by 2.5x and reduce damage received by 10%",
            "combined": "Boosts ATK of [STR] and [DEX] characters by 2.75x if they have a Matching orb, by 2.5x otherwise, reduce damage received by 20% and makes [TND], [RCV], [STR] and [DEX] orbs beneficial for [STR] and [DEX] characters"
        },
        captainNotes: "#{beneficial}",
        special: "Cuts the current HP of one enemy by 10%, reduces damage received by 50% for 1 turn, changes own orb into a Matching orb, boosts ATK of [STR] and [DEX] characters by 1.5x for 1 turn and becomes Crocodile & Daz for 2 turns",
        swap: "When Change is activated, randomizes all non-Matching orbs, including [BLOCK] orbs, reduces Bind duration by 1 turn",
        specialName: "Neverending Sand and Blades",
        sailor: {
            "character1": "Boosts base ATK, HP and RCV of [DEX] characters by 30",
            "character2": "Boosts base ATK, HP and RCV of [STR] characters by 30",
            "combined": "Boosts base ATK, HP and RCV of [STR] and [DEX] characters by 50"
        },
    },
    2400: {//World Clash Luffy
        captain: "Boosts ATK of [STR] characters by 2x at the start of the chain, boosts ATK by 3x following a chain of [QCK] > [DEX] > [STR] attacks no lower than Good and boosts their HP by 1.2x",
        special: "Deals 200,000 Fixed damage to one enemy that will ignore damage negating abilities and barriers, reduces Bind and Despair duration by 4 turns. If your crew has 2 or more [DEX] or [QCK] characters, boosts ATK of [STR] characters by 2.25x for 1 turn, by 1.75x otherwise.",
        specialName: "Gum Gum Culverin",
        specialNotes: "#{ignoreBarrier}",
        sailor: "Boosts base ATK, HP and RCV of STR, DEX and QCK characters by 30",
    },
    2401: {//World Clash Luffy
        captain: "Boosts ATK of [STR] characters by 3x at the start of the chain, boosts ATK by 4x following a chain of [QCK] > [DEX] > [STR] attacks no lower than Good and boosts their HP by 1.2x",
        special: "Deals 200,000 Fixed damage to one enemy that will ignore damage negating abilities and barriers, reduces Bind and Despair duration by 4 turns. If your crew has 2 or more [DEX] or [QCK] characters, boosts ATK of [STR] characters by 2.25x for 1 turn, by 1.75x otherwise.",
        specialName: "Gum Gum Culverin",
        specialNotes: "#{ignoreBarrier}",
        sailor: "Boosts base ATK, HP and RCV of STR, DEX and QCK characters by 30",
    },
    2402: {//World Clash Blackbeard
        captain: "Boosts ATK of [DEX] characters by 2x at the start of the chain, boosts ATK by 3x following a chain of [STR] > [QCK] > [DEX] attacks no lower than Good and boosts their HP by 1.2x",
        special: "Cuts the current HP of each enemy by 15%, reduces enemies' Threshold Damage Reduction and Increased Defense duration by 5 turns and Barrier duration by 1 turn. If your crew has 2 or more [STR] or [QCK] characters, boosts ATK of [DEX] characters by 2.25x for 1 turn, by 1.75x otherwise.",
        specialName: "Epicenter of Destruction",
        sailor: "Boosts base ATK, HP and RCV of STR, DEX and QCK characters by 30",
    },
    2403: {//World Clash Blackbeard
        captain: "Boosts ATK of [DEX] characters by 3x at the start of the chain, boosts ATK by 4x following a chain of [STR] > [QCK] > [DEX] attacks no lower than Good and boosts their HP by 1.2x",
        special: "Cuts the current HP of each enemy by 15%, reduces enemies' Threshold Damage Reduction and Increased Defense duration by 5 turns and Barrier duration by 1 turn. If your crew has 2 or more [STR] or [QCK] characters, boosts ATK of [DEX] characters by 2.25x for 1 turn, by 1.75x otherwise.",
        specialName: "Epicenter of Destruction",
        sailor: "Boosts base ATK, HP and RCV of STR, DEX and QCK characters by 30",
    },
    2404: {//World Clash Akainu
        captain: "Boosts ATK of [QCK] characters by 2x at the start of the chain, boosts ATK by 3x following a chain of [DEX] > [STR] > [QCK] attacks no lower than Good and boosts their HP by 1.2x",
        special: "Reduces ATK DOWN and Increase Damage Taken duration by 5 turns, changes all orbs, including [BLOCK] orbs, on [STR] and [QCK] characters into Matching orbs. If your crew has 2 or more [STR] or [DEX] characters, boosts ATK of [QCK] characters by 2.25x for 1 turn, by 1.75x otherwise.",
        specialName: "Grave Threat",
        sailor: "Boosts base ATK, HP and RCV of STR, DEX and QCK characters by 30",
    },
    2405: {//World Clash Akainu
        captain: "Boosts ATK of [QCK] characters by 3x at the start of the chain, boosts ATK by 4x following a chain of [DEX] > [STR] > [QCK] attacks no lower than Good and boosts their HP by 1.2x",
        special: "Reduces ATK DOWN and Increase Damage Taken duration by 5 turns, changes all orbs, including [BLOCK] orbs, on [STR] and [QCK] characters into Matching orbs. If your crew has 2 or more [STR] or [DEX] characters, boosts ATK of [QCK] characters by 2.25x for 1 turn, by 1.75x otherwise.",
        specialName: "Grave Threat",
        sailor: "Boosts base ATK, HP and RCV of STR, DEX and QCK characters by 30",
    },
    2406: {//World Clash Ace
        captain: "Boosts ATK of all characters by ?x and recovers ? HP at end of each turn",
        special: "Binds self for 50 turns, changes all orbs into Matching orbs, boosts ATK of all characters by 1.75x for 2 turns, amplifies the effect of orbs of all characters by 1.75x for 2 turns and adds 0.7x to Chain multiplier for 1 turn",
        specialName: "Words Left To Family",
        sailor: "Boosts base ATK, HP and RCV of all characters by 30",
    },
    2407: {//World Clash Ace
        captain: "Boosts ATK of all characters by 3x and recovers 500 HP at end of each turn",
        special: "Binds self for 50 turns, changes all orbs into Matching orbs, boosts ATK of all characters by 1.75x for 2 turns, amplifies the effect of orbs of all characters by 1.75x for 2 turns and adds 0.7x to Chain multiplier for 1 turn",
        specialName: "Words Left To Family",
        sailor: "Boosts base ATK, HP and RCV of all characters by 30",
    },
    2408: {//World Clash Sabo
        captain: "Boosts ATK of Free Spirit characters by 2.5x and recovers 500 HP at end of each turn",
        special: "Reduces Bind duration for one character completely and changes [BLOCK] orbs into Matching orbs",
        specialName: "Inheriting the Will of Flame",
        sailor: "Boosts base ATK, HP and RCV of Free Spirit characters by 30",
    },
    2409: {//World Journey Luffy
        captain: "Boosts ATK of Fighter and Free Spirit characters by 2.5x and their HP by 1.2x",
        special: "Reduces enemies' Percent Damage Reduction and Threshold Damage Reduction Buffs duration by 3 turns. If you captain is a Fighter character, changes [BLOCK] orbs into Matching orbs",
        specialName: "Captain's Spinning Gun",
        sailor: "Boosts base ATK, HP and RCV of Fighter and Free Spirit characters by 50",
    },
    2410: {//World Journey Luffy
        captain: "Boosts ATK of Fighter and Free Spirit characters by 2.5x and their HP by 1.2x",
        special: "Reduces enemies' Percent Damage Reduction and Threshold Damage Reduction Buffs duration by 3 turns. If you captain is a Fighter character, changes [BLOCK] orbs into Matching orbs",
        specialName: "Captain's Spinning Gun",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of Fighter and Free Spirit characters by 50",
            "level1": "If this character has an [QCK] orb and you hit a PERFECT with him, keep his [QCK] orb for the next turn",
        },
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: If this character has an [QCK] orb and you hit a PERFECT with him, keep his [QCK] orb for the next turn" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 60% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ],
    },
    2411: {//World Journey Nami
        captain: "Reduces damage received by 20% and boosts ATK of Shooter and Striker characters proportionally to the crew's current HP, by 2.75x at max",
        captainNotes: "#{captainProportional : higher : ? + ? * ((remaining HP) / (total HP)) : ? : 2.75}",
        special: "Reduces Paralysis and Silence duration by 3 turns. if HP is above 80% at the time the special is activated, changes [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs",
        specialName: "Seductive Gun Play",
        sailor: "Reduces Paralysis duration on this character by 3 turns",
    },
    2412: {//World Journey Nami
        captain: "Reduces damage received by 20% and boosts ATK of Shooter and Striker characters proportionally to the crew's current HP, by 2.75x at max",
        captainNotes: "#{captainProportional : higher : ? + ? * ((remaining HP) / (total HP)) : ? : 2.75}",
        special: "Reduces Paralysis and Silence duration by 3 turns. if HP is above 80% at the time the special is activated, changes [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs",
        specialName: "Seductive Gun Play",
        sailor: {
            "base": "Reduces Paralysis duration on this character by 3 turns",
            "level1": "Reduces Silence duration on this character by 3 turns",
        },
        sailorNotes: "#{silence}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 30% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 30% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 40% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 40% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, recovers 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
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
        ],
    },
    2413: {//World Journey Zoro
        captain: "Boosts ATK of Shooter and Driven characters by 2.75x if they have a Matching orb, by 2.25x otherwise.",
        special: "If enemies have a barrier at the time the special was activated, changes all orbs, including [BLOCK] orbs, into Matching orbs and reduces enemy Barrier duration by 1 turn, changes adjacent orbs into Matching Orbs otherwise.",
        specialName: "Triple-Wielding Outlaw",
        sailor: "Boosts base ATK, HP and RCV of Shooter and Driven characters by 50",
    },
    2414: {//World Journey Zoro
        captain: "Boosts ATK of Shooter and Driven characters by 2.75x if they have a Matching orb, by 2.25x otherwise.",
        special: "If enemies have a barrier at the time the special was activated, changes all orbs, including [BLOCK] orbs, into Matching orbs and reduces enemy Barrier duration by 1 turn, changes adjacent orbs into Matching Orbs otherwise.",
        specialName: "Triple-Wielding Outlaw",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of Shooter and Driven characters by 50",
            "level1": "Reduces Silence duration by 1 turn",
        },
        sailorNotes: "#{silence}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration by 1 turn" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 80% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by ? turn on this character",
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by ? turns on this character"
                ]
            },
        ],
    },
    2415: {//Pica
        captain: "If this character becomes your captain in the middle of an island, reduces damage received by 30% and boosts his OWN attack by 3x and cuts the current HP of each enemy by 5% at the end of each turn.",
        special: "Deals 300,000 Fixed damage to one enemy. Swaps this unit with your captain for 3 turns",
        specialName: "Giant Rock Punch",
        sailor: "Restores his own special cooldown by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
    },
    2416: {//Pica
        captain: "If this character becomes your captain in the middle of an island, reduces damage received by 70% and boosts his OWN attack by 6x and cuts the current HP of each enemy by 10% at the end of each turn.",
        special: "Deals 300,000 Fixed damage to one enemy. Swaps this unit with your captain for 3 turns",
        specialName: "Giant Rock Punch",
        sailor: {
            "base": "Restores his own special cooldown by 2 turns when it is rewinded",
            "level1": "Reduces Silence duration on this character by 3 turns",
        },
        sailorNotes: "#{rewind : 2}<br>#{silence}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turn",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ],
        support: [
            {
                "Characters": "Doflamingo, Gladius, Buffalo and Baby 5",
                "description": [
                    "Level 1: Adds 5% of this character's base HP to the supported character's base HP.",
                    "Level 2: Adds 6% of this character's base HP to the supported character's base HP.",
                    "Level 3: Adds 8% of this character's base HP to the supported character's base HP.",
                    "Level 4: Adds 10% of this character's base HP to the supported character's base HP.",
                    "Level 5: Adds 13% of this character's base HP to the supported character's base HP."
                ]
            }
        ]
    },
    2417: {//Bartolomeo&Cavendish
        captain: {
            "character1": "Boosts ATK of Driven characters by 3.25x. If you don't attack with Bartolomeo, reduces damage received by 25% for that turn.",
            "character2": "Boosts ATK of Driven characters by 3.25x, but boosts his OWN attack by 3.75x",
            "combined": "Boosts ATK of Driven characters by 4.25x, reduce damage received by 25% and makes [STR], [DEX] and [QCK] orbs beneficial for Driven characters"
        },
        special: "Deals 75x the character's ATK as Typeless damage to all enemies, reduces any damage received above 5,000 HP by ?% for 1 turn, boosts ATK of Driven characters by 2.25x for 1 turn and becomes Bartolomeo & Cavendish for 3 turns",
        swap: "When Change is activated, amplifies the effect of own orb by 1.5x for 1 turn, reduces damage received by 25% for 1 turn, recovers 5% of crew's MAX HP and changes their own orb into a Matching orb.",
        specialName: "Beautiful Sword Barrier Barrage",
        sailor: {
            "character1": "Boosts base HP of Driven characters by 50",
            "character2": "Boosts base ATK of Driven characters by 50",
            "combined": "Boosts base ATK and HP of Driven characters by 100"
        },
    },
    2418: {//Bartolomeo&Cavendish
        captain: {
            "character1": "Boosts ATK of Driven characters by 3.25x. If you don't attack with Bartolomeo, reduces damage received by 25% for that turn.",
            "character2": "Boosts ATK of Driven characters by 3.25x, but boosts his OWN attack by 3.75x",
            "combined": "Boosts ATK of Driven characters by 4.25x, reduce damage received by 25% and makes [STR], [DEX] and [QCK] orbs beneficial for Driven characters"
        },
        special: "Deals 75x the character's ATK as Typeless damage to all enemies, reduces any damage received above 5,000 HP by ?% for 1 turn, boosts ATK of Driven characters by 2.25x for 1 turn and becomes Bartolomeo & Cavendish for 3 turns",
        swap: "When Change is activated, amplifies the effect of own orb by 1.5x for 1 turn, reduces damage received by 25% for 1 turn, recovers 5% of crew's MAX HP and changes their own orb into a Matching orb.",
        specialName: "Beautiful Sword Barrier Barrage",
        sailor: {
            "character1": "Boosts base HP of Driven characters by 50",
            "character2": "Boosts base ATK of Driven characters by 50",
            "combined": "Boosts base ATK and HP of Driven characters by 100",
            "level1": "Boosts own base ATK by 250 if this character is the last in the chain to attack"
        },
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Potential 2: [QCK] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts own base ATK by 250 if this character is the last in the chain to attack" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 1%",
                    "Level 2: Reduce damage taken from [STR] characters by 2%",
                    "Level 3: Reduce damage taken from [STR] characters by 3%",
                    "Level 4: Reduce damage taken from [STR] characters by 5%",
                    "Level 5: Reduce damage taken from [STR] characters by 7%"
                ]
            },
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 5%",
                    "Level 5: Reduce damage taken from [QCK] characters by 7%"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 4 turn on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turn on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turn on this character",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ],
    },
    2419: {//Ideo
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight boosts ATK of Driven and Fighter characters by 2x, but boosts his OWN attack by 2.5x",
        special: "Delays all enemies for 2 turns. If your Captain is a [DEX] or [INT] character, changes [G], [EMPTY] and [BLOCK] orbs into Matching orbs and locks the chain multiplier at 2.75x for 3 turns. If your Captain is a [QCK] or [PSY] character, changes [RCV], [TND] and [BOMB] orbs into Matching orbs and locks the chain multiplier at 3x for 1 turn.",
        specialName: "The Fist of Humanity and Duty",
        sailor: "Makes [QCK] orbs beneficial for this character",
        sailorNotes: "#{beneficial}",
    },
    2420: {//Ideo
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight boosts ATK of Driven and Fighter characters by 2.5x, but boosts his OWN attack by 2.75x",
        special: "Delays all enemies for 2 turns. If your Captain is a [DEX] or [INT] character, changes [G], [EMPTY] and [BLOCK] orbs into Matching orbs and locks the chain multiplier at 2.75x for 3 turns. If your Captain is a [QCK] or [PSY] character, changes [RCV], [TND] and [BOMB] orbs into Matching orbs and locks the chain multiplier at 3x for 1 turn.",
        specialName: "The Fist of Humanity and Duty",
        sailor: {
            "base": "Makes [QCK] orbs beneficial for this character",
            "level1": "Reduces Silence duration on this character by 3 turns"
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 55" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 55" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 2% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage"
                ]
            },
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
        ],
        support: [
            {
                "Characters": "Don Chinjao, Dagama, Abdullah & Jeet, Orlumbus, Blue Gilly, Suleiman, Cavendish, Don Sai, Elizabello and Hajrudin",
                "description": [
                    "Level 1: Adds 6% of this character's base HP to the supported character's base HP.",
                    "Level 2: Adds 7% of this character's base HP to the supported character's base HP.",
                    "Level 3: Adds 9% of this character's base HP to the supported character's base HP.",
                    "Level 4: Adds 12% of this character's base HP to the supported character's base HP.",
                    "Level 5: Adds 15% of this character's base HP to the supported character's base HP."
                ]
            }
        ]
    },
    2421: {//Hajrudin
        captain: "Boosts ATK of Driven and Powerhouse characters by 2.75x, reduces crew's current HP by 5% at the end of each turn, reduces his own ATK multiplier by approximately 0.06x at the end of each turn",
        captainNotes: "His ATK multiplier will be 2.75x on the first turn, 2.69x on the second, 2.63x on the third and so on. The reduction stops once the multiplier is 1x. The multiplier affects all Driven and Powerhouse characters. You will not die to the HP reduction",
        special: "Reduces Bind, Paralysis and Chain Coefficient Reduction duration by 4 turns, reduces Special Cooldown of Driven and Powerhouse characters by 1 turn. If your Captain is a Driven or Powerhouse character, boosts ATK against delayed enemies by 1.75x for 2 turns",
        specialName: "\"Gungnir\" - The Decree of the Giant",
        sailor: "Boosts base ATK, HP and RCV of Driven characters by 30",
    },
    2422: {//Hajrudin
        captain: "Boosts ATK of Driven and Powerhouse characters by 3.25x, reduces crew's current HP by 5% at the end of each turn, reduces his own ATK multiplier by approximately 0.06x at the end of each turn",
        captainNotes: "His ATK multiplier will be 3.25x on the first turn, 3.19x on the second, 3.13x on the third and so on. The reduction stops once the multiplier is 1x. The multiplier affects all Driven and Powerhouse characters. You will not die to the HP reduction",
        special: "Reduces Bind, Paralysis and Chain Coefficient Reduction duration by 4 turns, reduces Special Cooldown of Driven and Powerhouse characters by 1 turn. If your Captain is a Driven or Powerhouse character, boosts ATK against delayed enemies by 1.75x for 2 turns",
        specialName: "\"Gungnir\" - The Decree of the Giant",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of Driven characters by 30",
            "level1": "Boosts this character's damage against [DEX] characters by 2x"
        },
        limit: [
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts this character's damage against [DEX] characters by 2x" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 2 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ],
        support: [
            {
                "Characters": "Don Chinjao, Dagama, Abdullah & Jeet, Orlumbus, Blue Gilly, Suleiman, Cavendish, Don Sai, Ideo and Elizabello",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK and HP to the supported character's base ATK and HP.",
                    "Level 2: Adds 4% of this character's base ATK and HP to the supported character's base ATK and HP.",
                    "Level 3: Adds 5% of this character's base ATK and HP to the supported character's base ATK and HP.",
                    "Level 4: Adds 7% of this character's base ATK and HP to the supported character's base ATK and HP.",
                    "Level 5: Adds 9% of this character's base ATK and HP to the supported character's base ATK and HP."
                ]
            }
        ]
    },
    2423: {//Elizabello
        captain: "Boosts ATK of Driven characters by 1x. Increases his own ATK multiplier by 0.0875x at the end of each turn until it reaches a maximum 2.75x after 20 turns.",
        captainNotes: "His ATK multiplier will be 1x on the first turn, 1.0875x on the second, 1.175x on the third and so on. The increase stops once the multiplier is 2.75x.",
        special: "Reduces enemies' Percent Damage Reduction and Threshold Damage Reduction Buffs duration by 3 turns and locks all orbs for 1 turn. If enemies have a Increased Defense buff or a Defense Reduction debuff at the time the special was activated, amplifies the effect of orbs by 2x for 1 turn, amplifies the effect of orbs by 1.75x for Driven and Fighter characters for 3 turns otherwise",
        specialName: "Light Version: King Punch",
        sailor: "Boosts own base ATK by 150 if this character is the last in the chain to attack",
    },
    2424: {//Elizabello
        captain: "Boosts ATK of Driven characters by 1x. Increases his own ATK multiplier by 0.1125x at the end of each turn until it reaches a maximum 3.25x after 20 turns. Recovers 500 HP at end of each turn.",
        captainNotes: "His ATK multiplier will be 1x on the first turn, 1.1125x on the second, 1.225x on the third and so on. The increase stops once the multiplier is 3.25x.",
        special: "Reduces enemies' Percent Damage Reduction and Threshold Damage Reduction Buffs duration by 3 turns and locks all orbs for 1 turn. If enemies have a Increased Defense buff or a Defense Reduction debuff at the time the special was activated, amplifies the effect of orbs by 2x for 1 turn, amplifies the effect of orbs by 1.75x for Driven and Fighter characters for 3 turns otherwise",
        specialName: "Light Version: King Punch",
        sailor: {
            "base": "Boosts own base ATK by 150 if this character is the last in the chain to attack",
            "level1": "Makes [INT] orbs beneficial for Driven characters"
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs beneficial for Driven characters" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 2 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ],
        support: [
            {
                "Characters": "Don Chinjao, Dagama, Abdullah & Jeet, Orlumbus, Blue Gilly, Suleiman, Cavendish, Don Sai, Ideo and Hajrudin",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK to the supported character's base ATK.",
                    "Level 2: Adds 4% of this character's base ATK to the supported character's base ATK.",
                    "Level 3: Adds 5% of this character's base ATK to the supported character's base ATK.",
                    "Level 4: Adds 6% of this character's base ATK to the supported character's base ATK.",
                    "Level 5: Adds 7% of this character's base ATK to the supported character's base ATK."
                ]
            }
        ]
    },
    2425: {//Sai
        captain: "Boosts HP of Driven characters by 1.2x and boosts ATK of Driven characters by 2.25x if they have a Matching orb, by 1.5x otherwise",
        special: "Reduces Bind, Despair and Burn duration by 3 turns, reduces enemies' ATK Up, Enrage and Resilience Buffs duration by 3 turns, reduces the defense of all enemies by 80% for 1 turn and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for Driven characters for 1 turn",
        specialName: "Drill Dragon Nail - The Leader's Killing Strike",
        sailor: "Makes [RCV] and [TND] orbs beneficial for this character",
    },
    2426: {//Sai
        captain: "Boosts HP of Driven characters by 1.25x and boosts ATK of Driven characters by 2.75x if they have a Matching orb, by 1.5x otherwise",
        special: "Reduces Bind, Despair and Burn duration by 3 turns, reduces enemies' ATK Up, Enrage and Resilience Buffs duration by 3 turns, reduces the defense of all enemies by 80% for 1 turn and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for Driven characters for 1 turn",
        specialName: "Drill Dragon Nail - The Leader's Killing Strike",
        sailor: {
            "base": "Boosts base ATK of Driven characters by 50",
            "level1": "Makes [RCV] and [TND] orbs beneficial for this character"
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base HP by 120" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] and [TND] orbs beneficial for this character" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 120",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
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
        ],
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Don Chinjao, Dagama, Abdullah & Jeet, Orlumbus, Blue Gilly, Suleiman, Cavendish, Ideo, Elizabello and Hajrudin",
                "description": [
                    "Level 1: Adds 5% of this character's base HP and RCV to the supported character's base HP and RCV.",
                    "Level 2: Adds 6% of this character's base HP and RCV to the supported character's base HP and RCV.",
                    "Level 3: Adds 8% of this character's base HP and RCV to the supported character's base HP and RCV.",
                    "Level 4: Adds 10% of this character's base HP and RCV to the supported character's base HP and RCV.",
                    "Level 5: Adds 12% of this character's base HP and RCV to the supported character's base HP and RCV."
                ]
            }
        ]
    },
    2427: {//Cavendish
        captain: "Boosts ATK of Slasher characters by 1.75x, but boosts his OWN attack by 2.5x",
        special: "Deals 15x character's ATK in [PSY] damage to one enemy and amplifies the effect of orbs for Slasher characters by 1.5x and boosts ATK of Slasher characters by 1.5x for 1 turn",
        specialName: "Swan Lake Sword",
    },
    2428: {//Cavendish
        captain: "Boosts ATK of Slasher characters by 2x, but boosts his OWN attack by 2.75x",
        special: "Deals 15x character's ATK in [PSY] damage to one enemy and amplifies the effect of orbs for Slasher characters by 1.5x and boosts ATK of Slasher characters by 1.5x for 1 turn",
        specialName: "Swan Lake Sword",
        support: [
            {
                "Characters": "Suleiman, Bartolomeo",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 2: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 3: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 4: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 5: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV."
                ]
            }
        ]
    },
    2429: {//Suleiman
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Deals 15x character's ATK in [INT] damage to all enemies. If your Captain is a Slasher character, changes Slasher character's [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into Matching orbs and reduces the defense of all enemies by 50% for 1 turn.",
        specialName: "Ghost Execution",
        support: [
            {
                "Characters": "Cavendish",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK to the supported character's base ATK.",
                    "Level 2: Adds 1% of this character's base ATK to the supported character's base ATK.",
                    "Level 3: Adds 2% of this character's base ATK to the supported character's base ATK.",
                    "Level 4: Adds 2% of this character's base ATK to the supported character's base ATK.",
                    "Level 5: Adds 3% of this character's base ATK to the supported character's base ATK."
                ]
            }
        ]
    },
    2430: {//Pudding
        captain: "Boosts ATK of Driven characters by 2.5x and recovers 1x character's RCV in HP at the end of each turn",
        special: "Reduces Silence duration by 5 turns, reduces enemies' Percent Damage Reduction and Resilience Buffs duration by 5 turns, changes [BLOCK] and Badly Matching orbs into [G] orbs. If there are 6 Driven characters in your crew when the special is activated, changes [STR], [DEX], [QCK], [PSY], [INT] orbs into Matching orbs and recovers 5,000 HP at the end of the turn for 3 turns.",
        sailor: "Reduces Silence duration on this character by 5 turns",
        sailorNotes: "#{silence}",
        specialName: "Memory Filament: Flashback",
    },
    2431: {//Pudding
        captain: "Boosts ATK of Driven characters by 3x and recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces Silence duration by 5 turns, reduces enemies' Percent Damage Reduction and Resilience Buffs duration by 5 turns, changes [BLOCK] and Badly Matching orbs into [G] orbs. If there are 6 Driven characters in your crew when the special is activated, changes [STR], [DEX], [QCK], [PSY], [INT] orbs into Matching orbs and recovers 5,000 HP at the end of the turn for 3 turns.",
        sailor: {
            "base": "Reduces Silence duration on this character by 5 turns",
            "level1": "Makes [PSY] orbs beneficial for Driven characters"
        },
        sailorNotes: "#{beneficial}<br>#{silence}",
        specialName: "Memory Filament: Flashback",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs beneficial for Driven characters" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 60% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ],
        support: [
            {
                "Characters": "Sanji and Chiffon",
                "description": [
                    "Level 1: Adds 5% of this character's base ATK and RCV to the supported character's base ATK and RCV.",
                    "Level 2: Adds 6% of this character's base ATK and RCV to the supported character's base ATK and RCV.",
                    "Level 3: Adds 8% of this character's base ATK and RCV to the supported character's base ATK and RCV.",
                    "Level 4: Adds 10% of this character's base ATK and RCV to the supported character's base ATK and RCV.",
                    "Level 5: Adds 12% of this character's base ATK and RCV to the supported character's base ATK and RCV."
                ]
            }
        ]
    },
    2435: {//Dagama
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight and boosts ATK of Slasher and Driven characters by 2.25x",
        special: "Reduces Bind and ATK DOWN duration by 2 turns and boosts ATK of Slasher and Driven characters by 1.5x for 1 turn.",
        specialName: "Tactician's Twin Blade Slash",
        support: [
            {
                "Characters": "Elizabello, Chinjao, Sai, Ideo and Hajrudin",
                "description": [
                    "Level 1: Adds 5% of this character's base ATK to the supported character's base ATK, boosts the supported character's ATK by 1.5x against Bartolomeo and when the supported character hits a PERFECT, reduces enemies' End of Turn Damage/Percent Cut duration by 5 turns.",
                    "Level 2: Adds 7% of this character's base ATK to the supported character's base ATK, boosts the supported character's ATK by 1.5x against Bartolomeo and when the supported character hits a PERFECT, reduces enemies' End of Turn Damage/Percent Cut duration by 5 turns.",
                    "Level 3: Adds 10% of this character's base ATK to the supported character's base ATK, boosts the supported character's ATK by 1.5x against Bartolomeo and when the supported character hits a PERFECT, reduces enemies' End of Turn Damage/Percent Cut duration by 5 turns.",
                    "Level 4: Adds 15% of this character's base ATK to the supported character's base ATK, boosts the supported character's ATK by 1.5x against Bartolomeo and when the supported character hits a PERFECT, reduces enemies' End of Turn Damage/Percent Cut duration by 5 turns.",
                    "Level 5: Adds 20% of this character's base ATK to the supported character's base ATK, boosts the supported character's ATK by 1.5x against Bartolomeo and when the supported character hits a PERFECT, reduces enemies' End of Turn Damage/Percent Cut duration by 5 turns."
                ]
            }
        ]
    },
    2436: {//Orlumbus
        captain: "Boosts ATK of Striker characters by 2.7x if they have a Matching orb, by 2.25x otherwise",
        special: "Changes all orbs on all characters into Orlumbus's orb and locks all orbs for 1 turn.",
        specialName: "Adventurer's Assistance",
        support: [
            {
                "Characters": "Hajrudin, Cavendish, Ideo, Bartolomeo, Leo and Sai",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses their special, changes [RCV] orbs on Driven characters into the supported character's orb.",
                    "Level 2: Once per an adventure, when the supported character uses their special, changes [RCV] and [EMPTY] orbs on Driven characters into the supported character's orb.",
                    "Level 3: Once per an adventure, when the supported character uses their special, changes [RCV], [EMPTY] and [BOMB] orbs on Driven characters into the supported character's orb.",
                    "Level 4: Once per an adventure, when the supported character uses their special, changes [RCV], [TND], [EMPTY] and [BOMB] orbs on Driven characters into the supported character's orb.",
                    "Level 5: Once per an adventure, when the supported character uses their special, changes [RCV], [TND], [EMPTY] and [BOMB] orbs on Driven characters into the supported character's orb and locks the supported character's orb for 1 turn."
                ]
            }
        ]
    },
    2437: {//Corazon
        captain: "Boosts ATK of [PSY] characters by 1.5x",
        special: "Reduces enemy Percent Damage Reduction duration by 3 turns reduces Chain Multiplier Limit duration by 3 turns, reduces the defense of all enemies by ?% for 1 turn and adds 40x character's ATK as Additional Typeless Damage 1 turns",
        specialName: "The Gentle \"Heart\" Resolution",
        limit: [
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 60% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ],
    },
    2438: {//Law
        captain: "Boosts ATK of Slasher characters by 1.5x",
        special: "Deals 30x character's ATK in [DEX] damage to one enemy. If enemies have a Defense Reduction debuff at the time the special was activated, boosts the Color Affinity of all characters by 1.5x and if you are on a Treasure Map, boosts ATK against enemies with reduced defense depending on your Treasure Map Level for 1 turn",
        specialName: "Shambles - Kikoku's Strike",
        specialNotes: "Level 1-10: 1.75x conditional boost<br\>Level 11-20: 2x conditional boost<br\>Level 21+: 2.25x conditional boost",
        limit: [
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 60% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ],
    },
    2439: {//Ussop
        captain: "Boosts ATK of Free Spirit characters by 2.75x if HP is below ?% at the start of the turn, by 1.5x otherwise",
        special: "Reduces crew's current HP by 50%, delays all enemies for 1 turn, removes all positive buffs on your team and reduces Bind, Despair, Paralysis and Silence duration by 1 turn.",
        specialName: "Usoland's Great Scream",
        sailor: "Reduces Silence duration on this character by 2 turns",
        limit: [
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 70% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 60% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
        ],
    },
    2440: {//Sabo V2-3
        captain:  "Boosts chances of getting Matching orbs for Fighter, Shooter and Free Spirit characters. Boosts ATK of Fighter, Shooter and Free Spirit characters by 3x and their HP by 1.25x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 5 times to a maximum of 4.25x.",
        special: "Locks the chain multiplier at 3x for 1 turn and amplifies the effects of orbs for Fighter, Shooter and Free Spirit characters by 2.25x for 1 turn",
        specialName: "Recieving the Will of \"Fire Fist\"",
    },
    2441: {//Sabo V2-3
        captain:  "Boosts chances of getting Matching orbs for Fighter, Shooter and Free Spirit characters. Boosts ATK of Fighter, Shooter and Free Spirit characters by 3x and their HP by 1.25x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 5 times to a maximum of 4.25x.",
        special: "Locks the chain multiplier at 3x for 1 turn and amplifies the effects of orbs for Fighter, Shooter and Free Spirit characters by 2.25x for 1 turn",
        specialName: "Recieving the Will of \"Fire Fist\"",
        sailor: {
            "base": "None",
            "level1": "Makes [TND] and [RCV] orbs beneficial for Fighter, Shooter and Free Spirit characters",
            "level2": "Boosts base ATK, HP and RCV of Fighter, Shooter and Free Spirit characters by 60"
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Sailor Ability 1: Makes [TND] and [RCV] orbs beneficial for Fighter, Shooter and Free Spirit characters" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV of Fighter, Shooter and Free Spirit characters by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 110" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 5%",
                    "Level 5: Reduce damage taken from [QCK] characters by 7%"
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
        support: [
            {
                "Characters": "[DEX] Characters",
                "description": [
                    "Level 1: Reduces damage received from [QCK] characters by 1%. Adds 3% of this character's base HP to the supported character's base HP",
                    "Level 2: Reduces damage received from [QCK] characters by 2%. Adds 6% of this character's base HP to the supported character's base HP",
                    "Level 3: Reduces damage received from [QCK] characters by 3%. Adds 9% of this character's base HP to the supported character's base HP",
                    "Level 4: Reduces damage received from [QCK] characters by 4%. Adds 12% of this character's base HP to the supported character's base HP",
                    "Level 5: Reduces damage received from [QCK] characters by 5%. Adds 15% of this character's base HP to the supported character's base HP"
                ]
            }
        ]
    },
    2442: {//TM Doflamingo
        captain: "Boosts ATK of Driven characters by 1.5x.",
        special: "Removes RCV DOWN duration completely and reduces damage received by 80% for 2 turns. If your Captain is a Driven character, changes all Driven character's orbs, including [BLOCK] orbs, into Matching orbs",
        specialName: "Off White",
    },
    2443: {//TM Doflamingo
        captain: {
            "base": "Boosts ATK of Driven characters by 1.5x. If you use \"Off White\" in this turn boosts ATK of Driven characters by 2x instead.",
            "level1": "Not Translated",
            "level2": "Not Translated",
            "level3": "Not Translated",
            "level4": "Not Translated",
            "level5": "Not Translated",
            "level6": "Boosts ATK of Driven characters by 2.75x and recovers 500 HP at end of each turn. If you use \"Off White\" in this turn boosts ATK of Driven characters by 3.5x instead.",
        },
        special: "Removes RCV DOWN duration completely and reduces damage received by 80% for 2 turns. If your Captain is a Driven character, changes all Driven character's orbs, including [BLOCK] orbs, into Matching orbs",
        specialName: "Off White",
        sailor: {
            "base": "None",
            "level1": "Reduces Silence duration on this character by 3 turns",
            "level2": "Boosts base ATK, HP and RCV of Driven characters by 30",
        },
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV of Driven characters by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 2.75x and recovers 500 HP at end of each turn. If you use \"Off White\" in this turn boosts ATK of Driven characters by 3.5x instead." },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turn on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 4: Reduces Slot Bind duration by 4 turn on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turn on this character"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 2 turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 3 turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 4 turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 5 turn at the start of the fight"
                ]
            },
        ],
        support: [
            {
                "Characters": "Trebol, Pica and Diamante",
                "description": [
                    "Level 1: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 8% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2444: {//Doflamingo 6+
        captain: "Boosts ATK of Driven characters by 3.5x, their HP by 1.2x and makes [PSY] and [INT] orbs beneficial for Driven characters",
        captainNotes: "#{beneficial}",
        specialName: "Black Knight Ambushing the \"D\"",
        special: "Changes adjacent orbs into Matching orbs, amplifies the effect of orbs for Driven characters by 2.25x for 1 turn",
        specialNotes: "#{orb : 2x}",
        sailor: {
            "base": "None",
            "level1": "If this character has an [QCK] orb and you hit a PERFECT with him, keep his [QCK] orb for the next turn",
            "level2": "Makes [QCK] orbs beneficial for Driven characters",
        },
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 2: Pinch Healing" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: If this character has an [QCK] orb and you hit a PERFECT with him, keep his [QCK] orb for the next turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Makes [QCK] orbs beneficial for Driven characters" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base HP by 130" },
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 50% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 10% of this character's attack in extra damage"
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
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ]
    },
    2445: {//Sanji&Judge
        captain: {
            "character1": "If there are 6 Powerhouse characters in your crew, boosts ATK of Powerhouse characters by 3.5x, their HP by 1.25x and makes [RCV] and [TND] orbs beneficial for Powerhouse characters.",
            "character2": "If there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, boosts ATK of Powerhouse characters by 3.5x, their HP by 1.25x and makes [PSY] orbs beneficial for all characters.",
            "combined": "If there are 6 Powerhouse characters in your crew, boosts ATK of Powerhouse characters by 4.25x. If there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, boosts HP of Powerhouse characters by 1.25x and makes [PSY], [RCV] and [TND] orbs beneficial for all characters."
        },
        special: "Boosts ATK of Powerhouse characters by 2x for 1 turn, amplifies the effect of orbs for Powerhouse characters by 2x for 1 turn, reduces Paralysis duration by 5 turns and becomes Sanji & Judge for 3 turns",
        swap: "When Change is activated, this character removes all Silence on themselves, changes their own orb, including [BLOCK] orbs, into a [TND] orb and boosts Chain multiplier by 1.25x for 1 turn.",
        specialName: "Crack & Strike",
        sailor: {
            "character1": "Makes [TND] and [RCV] orbs beneficial for this character",
            "character2": "Boosts base ATK, HP and RCV of Powerhouse characters by 50",
            "combined": "Boosts base ATK, HP and RCV of Powerhouse characters by 75"
        },
    },
    2446: {//Sanji&Judge
        captain: {
            "character1": "If there are 6 Powerhouse characters in your crew, boosts ATK of Powerhouse characters by 3.5x, their HP by 1.25x and makes [RCV] and [TND] orbs beneficial for Powerhouse characters.",
            "character2": "If there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, boosts ATK of Powerhouse characters by 3.5x, their HP by 1.25x and makes [PSY] orbs beneficial for all characters.",
            "combined": "If there are 6 Powerhouse characters in your crew, boosts ATK of Powerhouse characters by 4.25x. If there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, boosts HP of Powerhouse characters by 1.25x and makes [PSY], [RCV] and [TND] orbs beneficial for all characters."
        },
        special: "Boosts ATK of Powerhouse characters by 2x for 1 turn, amplifies the effect of orbs for Powerhouse characters by 2x for 1 turn, reduces Paralysis duration by 5 turns and becomes Sanji & Judge for 3 turns",
        swap: "When Change is activated, this character removes all Silence on themselves, changes their own orb, including [BLOCK] orbs, into a [TND] orb and boosts Chain multiplier by 1.25x for 1 turn.",
        specialName: "Crack & Strike",
        sailor: {
            "character1": "Makes [TND] and [RCV] orbs beneficial for this character",
            "character2": "Boosts base ATK, HP and RCV of Powerhouse characters by 50",
            "combined": "Boosts base ATK, HP and RCV of Powerhouse characters by 75",
            "level1": "Makes [PSY], [TND] and [RCV] orbs beneficial for Powerhouse characters",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 120" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY], [TND] and [RCV] orbs beneficial for Powerhouse characters" },
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
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
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 2: Reduces Slot Bind duration by 4 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ]
    },
    2447: {//Ichiji
        captain: "Boosts ATK of Powerhouse characters by 2.25x and boosts ATK of [STR] characters by 1.2x. Boosts HP of Powerhouse characters by 1.2x.",
        captainNotes: "Attack boost stacks, so an [STR] Powerhouse character has a 2.7x ATK",
        special: "If there are 6 Powerhouse characters in your crew, deals 100x character's ATK as Typeless damage to all enemies at the end of the turn for 3 turns. If your Captain's orb or Friend Captain's orb is [TND], delays all enemies for 1 turn and reduces the defense of all enemies by 100% for 1 turn.",
        specialName: "Sparking Valkyrie: Spark Light Fists",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "If there are 6 Powerhouse characters in your crew, makes [STR] orbs beneficial for Powerhouse characters",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Sailor Ability 1: If there are 6 Powerhouse characters in your crew, makes [STR] orbs beneficial for Powerhouse characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 120",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turns on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 8 turns on this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Judge, Niji, Yonji and Reiju",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2448: {//Ichiji
        captain: "Boosts ATK of Powerhouse characters by 2.5x and boosts ATK of [STR] characters by 1.2x. Boosts HP of Powerhouse characters by 1.2x.",
        captainNotes: "Attack boost stacks, so an [STR] Powerhouse character has a 3x ATK",
        special: "If there are 6 Powerhouse characters in your crew, deals 120x character's ATK as Typeless damage to all enemies at the end of the turn for 3 turns. If your Captain's orb or Friend Captain's orb is [TND], removes enemies' Defense Reduction Debuff Protection duration completely, delays all enemies for 2 turns and reduces the defense of all enemies by 100% for 1 turn.",
        specialName: "Sparking Valkyrie: Spark Light Fists",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "If there are 6 Powerhouse characters in your crew, makes [STR] orbs beneficial for Powerhouse characters",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Sailor Ability 1: If there are 6 Powerhouse characters in your crew, makes [STR] orbs beneficial for Powerhouse characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 120",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by 1 turns on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 8 turns on this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}",
        support: [
            {
                "Characters": "Judge, Niji, Yonji and Reiju",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2449: {//Niji
        captain: "Boosts ATK of Powerhouse characters by 2.25x and boosts ATK of [QCK] characters by 1.2x. Boosts HP of Powerhouse characters by 1.2x.",
        captainNotes: "Attack boost stacks, so an [QCK] Powerhouse character has a 2.7x ATK",
        special: "If there are 6 Powerhouse characters in your crew, boosts ATK against enemies with reduced defense by 1.75x for 1 turn. If your Captain's orb or Friend Captain's orb is [TND], changes all orbs, including [BLOCK] orbs, into [TND] orbs and makes [TND] orbs beneficial for all characters for 1 turn.",
        specialName: "Lightspeed Blade: Henry Blazer",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "If there are 6 Powerhouse characters in your crew, makes [QCK] orbs beneficial for Powerhouse characters",
        },
        limit: [
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Sailor Ability 1: If there are 6 Powerhouse characters in your crew, makes [QCK] orbs beneficial for Powerhouse characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 2% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage"
                ]
            },
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
        support: [
            {
                "Characters": "Judge, Ichiji, Yonji and Reiju",
                "description": [
                    "Level 1: Adds 4% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 5% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 7% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 9% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 11% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2450: {//Niji
        captain: "Boosts ATK of Powerhouse characters by 2.5x and boosts ATK of [QCK] characters by 1.2x. Boosts HP of Powerhouse characters by 1.2x.",
        captainNotes: "Attack boost stacks, so an [QCK] Powerhouse character has a 3x ATK",
        special: "If there are 6 Powerhouse characters in your crew, boosts ATK against enemies with reduced defense by 2x for 1 turn. If your Captain's orb or Friend Captain's orb is [TND], changes all orbs, including [BLOCK] orbs, into [TND] orbs and makes [TND] orbs beneficial for all characters for 1 turn.",
        specialName: "Lightspeed Blade: Henry Blazer",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "If there are 6 Powerhouse characters in your crew, makes [QCK] orbs beneficial for Powerhouse characters",
        },
        limit: [
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Sailor Ability 1: If there are 6 Powerhouse characters in your crew, makes [QCK] orbs beneficial for Powerhouse characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 2% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage"
                ]
            },
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
        support: [
            {
                "Characters": "Judge, Ichiji, Yonji and Reiju",
                "description": [
                    "Level 1: Adds 4% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 5% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 7% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 9% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 11% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2451: {//Yonji
        captain: "Boosts ATK of Powerhouse characters by 2.25x and boosts ATK of [DEX] characters by 1.2x. Boosts HP of Powerhouse characters by 1.2x.",
        captainNotes: "Attack boost stacks, so an [DEX] Powerhouse character has a 2.7x ATK",
        special: "If there are 6 Powerhouse characters in your crew, reduces ATK DOWN, Bind and Despair duration by 4 turns. If your Captain's orb or Friend Captain's orb is [TND], boosts the Color Affinity of all characters by 1.75x for 1 turn.",
        specialName: "Winch Guillotine: Winch Danton",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "If there are 6 Powerhouse characters in your crew, makes [DEX] orbs beneficial for Powerhouse characters",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 1: If there are 6 Powerhouse characters in your crew, makes [DEX] orbs beneficial for Powerhouse characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
        support: [
            {
                "Characters": "Judge, Ichiji, Niji and Reiju",
                "description": [
                    "Level 1: Adds 6% of this character's base HP to the supported character's base HP",
                    "Level 2: Adds 7% of this character's base HP to the supported character's base HP",
                    "Level 3: Adds 9% of this character's base HP to the supported character's base HP",
                    "Level 4: Adds 12% of this character's base HP to the supported character's base HP",
                    "Level 5: Adds 15% of this character's base HP to the supported character's base HP"
                ]
            }
        ]
    },
    2452: {//Yonji
        captain: "Boosts ATK of Powerhouse characters by 2.5x and boosts ATK of [DEX] characters by 1.2x. Boosts HP of Powerhouse characters by 1.2x.",
        captainNotes: "Attack boost stacks, so an [DEX] Powerhouse character has a 3x ATK",
        special: "If there are 6 Powerhouse characters in your crew, reduces ATK DOWN, Bind and Despair duration by 5 turns. If your Captain's orb or Friend Captain's orb is [TND], boosts the Color Affinity of all characters by 2x for 1 turn.",
        specialName: "Winch Guillotine: Winch Danton",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "If there are 6 Powerhouse characters in your crew, makes [DEX] orbs beneficial for Powerhouse characters",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 1: If there are 6 Powerhouse characters in your crew, makes [DEX] orbs beneficial for Powerhouse characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
        support: [
            {
                "Characters": "Judge, Ichiji, Niji and Reiju",
                "description": [
                    "Level 1: Adds 6% of this character's base HP to the supported character's base HP",
                    "Level 2: Adds 7% of this character's base HP to the supported character's base HP",
                    "Level 3: Adds 9% of this character's base HP to the supported character's base HP",
                    "Level 4: Adds 12% of this character's base HP to the supported character's base HP",
                    "Level 5: Adds 15% of this character's base HP to the supported character's base HP"
                ]
            }
        ]
    },
    2453: {//Reiju
        captain: "Boosts ATK of Powerhouse characters by 2.25x and boosts ATK of [INT] characters by 1.2x. Boosts RCV of Powerhouse characters by 1.2x.",
        captainNotes: "Attack boost stacks, so an [INT] Powerhouse character has a 2.7x ATK",
        special: "If there are 6 Powerhouse characters in your crew, poisons all enemies and reduces damage received by 70% for 2 turns. If your Captain's orb or Friend Captain's orb is [TND], reduces enemies' Threshold Damage Reduction, Percent Damage Reduction and Increased Defense Buffs duration by 4 turns.",
        specialName: "Pink Hornet: Peach Poison Fang",
        specialNotes: "Poison deals ?x character's ATK in Fixed damage at the end of each turn.",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "If there are 6 Powerhouse characters in your crew, makes [INT] orbs beneficial for Powerhouse characters",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: If there are 6 Powerhouse characters in your crew, makes [INT] orbs beneficial for Powerhouse characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
        support: [
            {
                "Characters": "Judge, Ichiji, Niji and Yonji",
                "description": [
                    "Level 1: Adds 6% of this character's base RCV to the supported character's base RCV",
                    "Level 2: Adds 7% of this character's base RCV to the supported character's base RCV",
                    "Level 3: Adds 9% of this character's base RCV to the supported character's base RCV",
                    "Level 4: Adds 12% of this character's base RCV to the supported character's base RCV",
                    "Level 5: Adds 15% of this character's base RCV to the supported character's base RCV"
                ]
            }
        ]
    },
    2454: {//Reiju
        captain: "Boosts ATK of Powerhouse characters by 2.5x and boosts ATK of [INT] characters by 1.2x. Boosts RCV of Powerhouse characters by 1.2x.",
        captainNotes: "Attack boost stacks, so an [INT] Powerhouse character has a 3x ATK",
        special: "If there are 6 Powerhouse characters in your crew, poisons all enemies and reduces damage received by 70% for 2 turns. If your Captain's orb or Friend Captain's orb is [TND], reduces enemies' Threshold Damage Reduction, Percent Damage Reduction and Increased Defense Buffs duration by 5 turns.",
        specialNotes: "Poison deals 75x character's ATK in Fixed damage at the end of each turn.",
        specialName: "Pink Hornet: Peach Poison Fang",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "If there are 6 Powerhouse characters in your crew, makes [INT] orbs beneficial for Powerhouse characters",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: If there are 6 Powerhouse characters in your crew, makes [INT] orbs beneficial for Powerhouse characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
        support: [
            {
                "Characters": "Judge, Ichiji, Niji and Yonji",
                "description": [
                    "Level 1: Adds 6% of this character's base RCV to the supported character's base RCV",
                    "Level 2: Adds 7% of this character's base RCV to the supported character's base RCV",
                    "Level 3: Adds 9% of this character's base RCV to the supported character's base RCV",
                    "Level 4: Adds 12% of this character's base RCV to the supported character's base RCV",
                    "Level 5: Adds 15% of this character's base RCV to the supported character's base RCV"
                ]
            }
        ]
    },
    2455: {//Sora
        captain: "Boosts ATK and RCV of all characters by 1.75x and recovers 500 HP at end of each turn.",
        special: "Reduces crew's Chain Multiplier Limit and Chain Coefficient Reduction duration by 5 turns and boosts chances of getting [PSY] orbs for 3 turns.",
        specialName: "Mother's Empathy",
        support: [
            {
                "Characters": "Sanji, Judge, Reiju, Ichiji, Niji and Yonji",
                "description": [
                    "Level 1: Once per adventure, when you reach the final stage, changes supported character's orb into a [TND] orb",
                    "Level 2: Once per adventure, when you reach the final stage, changes supported character's orb into a [TND] orb and recovers 1,000 HP",
                    "Level 3: Once per adventure, when you reach the final stage, changes supported character's orb into a [TND] orb and recovers 2,000 HP",
                    "Level 4: Once per adventure, when you reach the final stage, changes supported character's orb into a [TND] orb, reduces Special Cooldown of supported character by 1 turn and recovers 3,000 HP",
                    "Level 5: Once per adventure, when you reach the final stage, changes supported character's orb, including [BLOCK] orbs, into a [TND] orb, reduces Special Cooldown of supported character by 1 turn and recovers 3,000 HP"
                ]
            }
        ]
    },
    2456: {//Pudding
        captain: "Boosts ATK of Cerebral characters by 2x.",
        special: "Binds self for 3 turns, reduces crew's ATK DOWN duration by 2 turns and adds 0.3x to Chain multiplier for 1 turn. If your Captain is a Fighter character, changes own orb and the Captain's orb into Matching orbs.",
        specialName: "Chocolatier's Love",
    },
    2457: {//Pudding
        captain: "Boosts ATK of Cerebral characters by 2x and their RCV by 1.2x.",
        special: "Binds self for 3 turns, reduces crew's ATK DOWN duration by 2 turns and adds 0.3x to Chain multiplier for 1 turn. If your Captain is a Fighter character, changes own orb and the Captain's orb into Matching orbs.",
        specialName: "Chocolatier's Love",
        support: [
            {
                "Characters": "Sanji",
                "description": [
                    "Level 1: Adds 1% of this character's base HP to the supported character's base HP. Boosts the supported character's ATK by 1.05x against Big Mom.",
                    "Level 2: Adds 1% of this character's base HP to the supported character's base HP. Boosts the supported character's ATK by 1.1x against Big Mom.",
                    "Level 3: Adds 2% of this character's base HP to the supported character's base HP. Boosts the supported character's ATK by 1.15x against Big Mom.",
                    "Level 4: Adds 2% of this character's base HP to the supported character's base HP. Boosts the supported character's ATK by 1.15x against Big Mom.",
                    "Level 5: Adds 3% of this character's base HP to the supported character's base HP. Boosts the supported character's ATK by 1.2x against Big Mom."
                ]
            }
        ]
    },
    2458: {//Chiffon
        captain: "Boosts ATK of [QCK] characters by 2x and their HP by 1.2x.",
        special: "Reduces Bind duration by 3 turns and reduces enemy Threshold Damage Reduction duration by 2 turns.",
        specialName: "Enforcing her Duty",
        support: [
            {
                "Characters": "Sanji and Pudding",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2459: {//Sanji
        captain: "Boosts ATK of Fighter characters by 2.25x and their HP by 1.2x. Boosts ATK of Fighter characters by 2.475x following a chain of [PSY] > [INT] > [QCK] attacks no lower than Good.",
        special: "Deals 15x character's ATK in [PSY] damage to all enemies and reduces enemies' Percent Damage Reduction duration by 2 turns. If your crew has 6 Fighter characters, delays all enemies for 1 turn.",
        specialName: "The Ultimate Fresh Cream",
        support: [
            {
                "Characters": "Pudding",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 1% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 2% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 2% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 3% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2460: {//Oven
        captain: "Boosts ATK of [STR] characters by 2.25x and boost HP of Powerhouse characters by 1.25x.",
        special: "Boosts ATK of STR characters by 1.75x for 1 turn and deals 50x character's ATK as [STR] damage to all enemies at the end of the turn for 2 turns.",
        specialName: "Overheated Anger",
        support: [
            {
                "Characters": "Charlotte Linlin, Katakuri, Cracker, Daifuku and Smoothie",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses their special, changes [TND] orbs on Powerhouse characters into [STR] orbs and boosts the Color Affinity of Powerhouse characters by 1.1x for 1 turn.",
                    "Level 2: Once per an adventure, when the supported character uses their special, changes [RCV] and [TND] orbs on Powerhouse characters into [STR] orbs and boosts the Color Affinity of Powerhouse characters by 1.1x for 1 turn.",
                    "Level 3: Once per an adventure, when the supported character uses their special, changes [RCV], [TND] and [BOMB] orbs on Powerhouse characters into [STR] orbs and boosts the Color Affinity of Powerhouse characters by 1.15x for 1 turn.",
                    "Level 4: Once per an adventure, when the supported character uses their special, changes [EMPTY], [RCV], [TND] and [BOMB] orbs on Powerhouse characters into [STR] orbs and boosts the Color Affinity of Powerhouse characters by 1.2x for 1 turn.",
                    "Level 5: Once per an adventure, when the supported character uses their special, changes all orbs on Powerhouse characters into [STR] orbs and boosts the Color Affinity of Powerhouse characters by 1.3x for 1 turn."
                ]
            }
        ]
    },
    2461: {//Pekoms/Mystoms
        captain: "Boosts ATK of Fighter characters by 2.25x and reduces damage received by 5%.",
        special: "Reduces enemy Threshold Damage Reduction duration by 2 turns and adds 0.5x to Chain multiplier for 1 turn.",
        specialName: "Disguised Determination",
        support: [
            {
                "Characters": "Luffy, Sanji, Carrot and Pedro",
                "description": [
                    "Level 1: Once per adventure, when you are inflicted with Paralysis or Special Rewind, reduces Paralysis duration on the supported character by 1 turn, reduces Special Cooldown of the supported character's special by 1 turn and reduces damage received by 25% for 1 turn.",
                    "Level 2: Once per adventure, when you are inflicted with Paralysis or Special Rewind, reduces Paralysis duration on the supported character by 2 turns, reduces Special Cooldown of the supported character's special by 2 turns and reduces damage received by 50% for 1 turn.",
                    "Level 3: Once per adventure, when you are inflicted with Paralysis or Special Rewind, reduces Paralysis duration on the supported character by 2 turns, reduces Special Cooldown of the supported character's special by 2 turns and reduces damage received by 75% for 1 turn.",
                    "Level 4: Once per adventure, when you are inflicted with Paralysis or Special Rewind, reduces Paralysis duration on the supported character by 2 turns, reduces Special Cooldown of the supported character's special by 2 turns and reduces damage received by 75% for 1 turn.",
                    "Level 5: Once per adventure, when you are inflicted with Paralysis or Special Rewind, reduces Paralysis duration on the supported character by 3 turns, reduces Special Cooldown of the supported character's special by 3 turns and reduces damage received by 75% for 1 turn."
                ]
            }
        ]
    },
    2462: {//Franky
        captain: "Boosts ATK of Powerhouse characters by ?x, their HP by ?x and makes [RCV] orbs beneficial for all characters.",
        special: "Deals 10 hits of random Typeless damage to random enemies. If enemies have ATK UP, Enrage, End of Turn Damage/Percent Cut or End of Turn Heal at the time the special was activated, boosts ATK of Powerhouse characters by 2.25x for 1 turn, boosts ATK of Powerhouse characters by 1.75x for 1 turn otherwise.",
        specialName: "Weapons Left",
        sailor: "Boosts base HP of Powerhouse characters by 100",
    },
    2463: {//Franky
        captain: "Boosts ATK of Powerhouse characters by 3x, their HP by 1.2x and makes [RCV] orbs beneficial for all characters.",
        special: "Deals 10 hits of random Typeless damage to random enemies. If enemies have ATK UP, Enrage, End of Turn Damage/Percent Cut or End of Turn Heal at the time the special was activated, boosts ATK of Powerhouse characters by 2.25x for 1 turn, boosts ATK of Powerhouse characters by 1.75x for 1 turn otherwise.",
        specialName: "Weapons Left",
        sailor: {
            "base": "Boosts base HP of Powerhouse characters by 100",
            "level1": "Makes [STR] orbs beneficial for Powerhouse characters",
        },
        limit: [
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: Barrier Penetration" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Sailor Ability 1: Makes [STR] orbs beneficial for Powerhouse characters" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's normal attack will ignore barriers if HP is above 99% at the start of the turn",
                    "Level 2: This character's normal attack will ignore barriers if HP is above 90% at the start of the turn",
                    "Level 3: This character's normal attack will ignore barriers if HP is above 80% at the start of the turn",
                    "Level 4: This character's normal attack will ignore barriers if HP is above 60% at the start of the turn",
                    "Level 5: This character's normal attack will ignore barriers if HP is above 50% at the start of the turn"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 2 turn",
                    "Level 2: Reduces No Healing duration by 3 turn",
                    "Level 3: Reduces No Healing duration by 4 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
        ],
        support: [
            {
                "Characters": "Powerhouse Characters",
                "description": [
                    "Level 1: Adds 5% of this character's base HP to the supported character's base HP",
                    "Level 2: Adds 6% of this character's base HP to the supported character's base HP",
                    "Level 3: Adds 8% of this character's base HP to the supported character's base HP",
                    "Level 4: Adds 10% of this character's base HP to the supported character's base HP",
                    "Level 5: Adds 12% of this character's base HP to the supported character's base HP"
                ]
            }
        ]
    },
    2464: {//Cracker
        captain: "Boosts ATK of Powerhouse characters by 3.75x. Boosts HP of Fighter, Slasher, Striker and Shooter characters by 1.35x.",
        special: "Changes [EMPTY], [BOMB], [RCV], [G], [BLOCK] and own orbs into Matching orbs. If your Captain is a Fighter, Slasher, Shooter or Striker character, adds 1.1x to Chain multiplier for 2 turns. If your Captain is a Free Spirit, Cerebral, Powerhouse or Driven character, boosts the Color Affinity of Free Spirit, Cerebral, Powerhouse and Driven characters by 1.75x for 2 turns.",
        specialName: "Roaring \"Honey Preztel\"",
        sailor: "When any other Powerhouse or Slasher character uses a special, reduces own cooldown by 1 turn",
    },
    2465: {//Cracker
        captain: "Boosts ATK of Powerhouse characters by 3.75x. Boosts HP of Fighter, Slasher, Striker and Shooter characters by 1.35x.",
        special: "Changes [EMPTY], [BOMB], [RCV], [G], [BLOCK] and own orbs into Matching orbs. If your Captain is a Fighter, Slasher, Shooter or Striker character, adds 1.1x to Chain multiplier for 2 turns. If your Captain is a Free Spirit, Cerebral, Powerhouse or Driven character, boosts the Color Affinity of Free Spirit, Cerebral, Powerhouse and Driven characters by 1.75x for 2 turns.",
        specialName: "Roaring \"Honey Preztel\"",
        sailor: {
            "base": "When any other Powerhouse or Slasher character uses a special, reduces own cooldown by 1 turn",
            "level1": "Boosts base ATK, HP and RCV of Slasher and Powerhouse characters by 100",
        },
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Slasher and Powerhouse characters by 100" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by 2%",
                    "Level 2: Reduce damage taken from [STR] characters by 3%",
                    "Level 3: Reduce damage taken from [STR] characters by 4%",
                    "Level 4: Reduce damage taken from [STR] characters by 5%",
                    "Level 5: Reduce damage taken from [STR] characters by 7%"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by 3 turn",
                    "Level 2: Reduces No Healing duration by 4 turns",
                    "Level 3: Reduces No Healing duration by 5 turns",
                    "Level 4: Reduces No Healing duration by 7 turns",
                    "Level 5: Reduces No Healing duration by 10 turns"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "Katakuri and Smoothie",
                "description": [
                    "Level 1: Once per adventure, when you are inflicted with Chain Coefficient Reduction or Chain Multiplier Limit, reduces crew's Chain Multiplier Limit and Chain Coefficient Reduction duration by 1 turn and adds 0.3x to Chain multiplier for 1 turn.",
                    "Level 2: Once per adventure, when you are inflicted with Chain Coefficient Reduction or Chain Multiplier Limit, reduces crew's Chain Multiplier Limit and Chain Coefficient Reduction duration by 1 turn and adds 0.4x to Chain multiplier for 1 turn.",
                    "Level 3: Once per adventure, when you are inflicted with Chain Coefficient Reduction or Chain Multiplier Limit, reduces crew's Chain Multiplier Limit and Chain Coefficient Reduction duration by 2 turns and adds 0.4x to Chain multiplier for 1 turn.",
                    "Level 4: Once per adventure, when you are inflicted with Chain Coefficient Reduction or Chain Multiplier Limit, reduces crew's Chain Multiplier Limit and Chain Coefficient Reduction duration by 2 turns and adds 0.5x to Chain multiplier for 1 turn.",
                    "Level 5: Once per adventure, when you are inflicted with Chain Coefficient Reduction or Chain Multiplier Limit, reduces crew's Chain Multiplier Limit and Chain Coefficient Reduction duration by 3 turns and adds 0.7x to Chain multiplier for 1 turn."
                ]
            }
        ]
    },
    2466: {//Jinbe
        captain: "Boosts ATK of Powerhouse characters by 1.5x",
        special: "Reduces Bind and Chain Multiplier Limit duration by 3 turns, deals 50x character's ATK as [QCK] damage to all enemies at the end of the turn for 3 turns. If you are on a Treasure Map, amplifies the effects of orbs for Powerhouse characters depending on your Treasure Map Level for 1 turn",
        specialName: "Black Tea Ocean Current Shoulder Throw",
        specialNotes: "Level 1-10: 1.75x orb boost<br\>Level 11-20: 2x orb boost<br\>Level 21+: 2.25x orb boost",
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
                    "Level 1: If you hit a PERFECT with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
    },
    2467: {//Pound
        captain: "Boosts ATK of [PSY] characters by 1.5x",
        special: "Reduces Silence and Increase Damage Taken duration by 2 turns and reduces enemies' Percent Damage Reduction duration by 3 turns.",
        specialName: "Attacking with All His Might in Order to Protect His Daughter",
        sailor: "Reduces Silence duration on this character by 2 turns",
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
    2468: {//Smoothie&Oven
        captain: {
            "character1": "Boosts ATK of [PSY] characters by ?x and boosts ATK of [QCK] and [INT] characters by ?x.",
            "character2": "Boosts ATK of [QCK] characters by ?x and boosts ATK of [PSY] and [INT] characters by ?x.",
            "combined": "Boosts ATK of [QCK], [PSY] and [INT] characters by 2.5x and recovers 1x character's RCV in HP at the end of each turn."
        },
        special: "Boosts chances of getting [QCK] and [PSY] orbs for 2 turns, randomizes all orbs, amplifies the effect of orbs on [QCK], [PSY] and [INT] characters by 2x for 2 turns and becomes Smoothie & Oven for 2 turns",
        swap: "When Change is activated, makes [QCK] and [PSY] orbs beneficial for [QCK], [PSY] and [INT] characters for 1 turn and deals 20x character's ATK in character's Type damage to all enemies at the end of the turn for 1 turn.",
        specialName: "Brother and Sister Chasing Intruders",
        sailor: {
            "character1": "Boosts base ATK, HP and RCV of [PSY] and [INT] characters by 25",
            "character2": "Boosts base ATK, HP and RCV of [QCK] and [INT] characters by 25",
            "combined": "Boosts base ATK, HP and RCV of [QCK], [PSY] and [INT] characters by 50",
        },
    },
    2469: {//Smoothie&Oven
        captain: {
            "character1": "Boosts ATK of [PSY] characters by 3x and boosts ATK of [QCK] and [INT] characters by 2.5x.",
            "character2": "Boosts ATK of [QCK] characters by 3x and boosts ATK of [PSY] and [INT] characters by 2.5x.",
            "combined": "Boosts ATK of [QCK], [PSY] and [INT] characters by 3.75x and recovers 3x character's RCV in HP at the end of each turn."
        },
        special: "Boosts chances of getting [QCK] and [PSY] orbs for 2 turns, randomizes all orbs, amplifies the effect of orbs on [QCK], [PSY] and [INT] characters by 2x for 2 turns and becomes Smoothie & Oven for 2 turns",
        swap: "When Change is activated, makes [QCK] and [PSY] orbs beneficial for [QCK], [PSY] and [INT] characters for 1 turn and deals 20x character's ATK in character's Type damage to all enemies at the end of the turn for 1 turn.",
        specialName: "Brother and Sister Chasing Intruders",
        sailor: {
            "character1": "Boosts base ATK, HP and RCV of [PSY] and [INT] characters by 25",
            "character2": "Boosts base ATK, HP and RCV of [QCK] and [INT] characters by 25",
            "combined": "Boosts base ATK, HP and RCV of [QCK], [PSY] and [INT] characters by 50",
            "level1": "Cannot be blown away",
        },
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Cannot be blown away" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 50% chance to deal 3% of this character's attack in extra damage",
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
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
                ]
            },
        ]
    },
    2470: {//Katakuri
        captain: "Boosts ATK of Powerhouse and Striker characters by 2x",
        captainNotes: "#{beneficial}",
        special: "Makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for Powerhouse and Striker characters for 2 turns. If there are 4 enemies or more on the stage at the time the special is activated, ignores Delay Debuff Protection and delays all enemies for 2 turns.",
        specialName: "Sharpened Bullets",
        sailor: "Boosts this character's damage against [PSY] characters by 1.1x",
    },
    2471: {//Katakuri
        captain: "Boosts ATK of Powerhouse and Striker characters by 2.75x and makes [INT] orbs beneficial for Powerhouse and Striker characters",
        captainNotes: "#{beneficial}",
        special: "Makes [STR], [DEX], [QCK], [PSY] and [INT] orbs beneficial for Powerhouse and Striker characters for 2 turns. If there are 4 enemies or more on the stage at the time the special is activated, ignores Delay Debuff Protection and delays all enemies for 2 turns.",
        specialName: "Sharpened Bullets",
        sailor: {
            "base": "Boosts this character's damage against [PSY] characters by 1.1x",
            "level1": "Restores his own special cooldown by 3 turns when it is rewinded",
        },
        sailorNotes: "#{rewind : 3}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
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
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 80% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "Charlotte Linlin",
                "description": [
                    "Level 1: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2472: {//Big Mom
        captain: "Boosts ATK of all characters by 2.5x if HP is below 50% at the start of the turn, 2x otherwise and reduces HP of all characters by 20%",
        special: "Reduces crew's current HP by 50%, deals 100x the amount of HP subtracted in Typeless damage to one enemy and randomizes all non-[RCV] orbs.",
        specialName: "Mama-Mash",
        sailor: "Reduces HP of all characters by 30% and boosts base RCV of all characters by 1.2x",
    },
    2473: {//Big Mom
        captain: "Boosts ATK of all characters by 3x if HP is below 50% at the start of the turn, 2.5x otherwise and reduces HP of all characters by 20%",
        special: "Reduces crew's current HP by 50%, deals 100x the amount of HP subtracted in Typeless damage to one enemy and randomizes all non-[RCV] orbs.",
        specialName: "Mama-Mash",
        sailor: {
            "base": "Reduces HP of all characters by 30% and boosts base RCV of all characters by 1.2x",
            "level1": "Boosts amount healed from [RCV] orbs by 300 each",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: Double Special Activation" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts amount healed from [RCV] orbs by 300 each" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by 1 turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by 2 turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by 3 turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by 5 turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by 1 turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by 2 turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by 3 turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 4 turn at the start of the fight"
                ]
            },
        ],
        support: [
            {
                "Characters": "Perospero, Daifuku and Bavarois",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 2: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 3: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 4: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV",
                    "Level 5: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV"
                ]
            }
        ]
    },
    2474: {//Mihawk
        captain: "If there are 6 Slasher characters in your crew, boosts chain multiplier by 4x and boosts ATK of Slasher characters by 1.75x. Boosts chances of getting [DEX] and [INT] orbs.",
        special: "Cuts the current HP of one enemy by 25%, If your crew has 4 or more characters with [DEX] or [INT] orbs, amplifies the effects of orbs for Slasher characters by 2.25x for 1 turn and locks all orbs for 1 turn, amplifies the effects of orbs for Slasher characters by 2x for 1 turn otherwise.",
        specialName: "Haki Sword",
    },
    2475: {//Mihawk
        captain: "If there are 6 Slasher characters in your crew, boosts chain multiplier by 4x and boosts ATK of Slasher characters by 1.75x. Boosts chances of getting [DEX] and [INT] orbs.",
        special: "Cuts the current HP of one enemy by 25%, If your crew has 4 or more characters with [DEX] or [INT] orbs, amplifies the effects of orbs for Slasher characters by 2.25x for 1 turn and locks all orbs for 1 turn, amplifies the effects of orbs for Slasher characters by 2x for 1 turn otherwise.",
        specialName: "Haki Sword",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Slasher characters by 75",
            "level2": "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs beneficial for this character if your Captain is a Slasher character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Slasher characters by 75" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Potential 2: Pinch Healing" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs beneficial for this character if your Captain is a Slasher character" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 130" },
            { "description": "Boosts base ATK by 70" },
            { "description": "Acquire Potential 3: Critical Hit" },
        ],
        potential: [
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
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 70% chance to deal 8% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 80% chance to deal 10% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 90% chance to deal 12% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "Zoro",
                "description": [
                    "Level 1: Adds 8% of this character's base ATK to the supported character's base ATK",
                    "Level 2: Adds 10% of this character's base ATK to the supported character's base ATK",
                    "Level 3: Adds 12% of this character's base ATK to the supported character's base ATK",
                    "Level 4: Adds 15% of this character's base ATK to the supported character's base ATK",
                    "Level 5: Adds 18% of this character's base ATK to the supported character's base ATK"
                ]
            }
        ]
    },
    2476: {//Zoro
        captain: "Boosts ATK of Slaher characters by 3.25x, their HP by 1.5x and makes [DEX] and [INT] orbs beneficial for Slasher characters. If a character has a [DEX] or [INT] orb, boosts their ATK by 4.0625x instead.",
        special: "Deals 120x character's ATK as Typeless damage to all enemies and makes [RCV] and [TND] orbs beneficial for Slasher characters for 3 turns. Boosts ATK of Slasher characters by 2x for 1 turn. If during that turn you score 4 PERFECT hits, boosts ATK of Slasher characters by 2.25x in the following turn.",
        specialName: "Three Sword Style - 1080 Pound Phoenix",
    },
    2477: {//Zoro
        captain: "Boosts ATK of Slaher characters by 3.25x, their HP by 1.5x and makes [DEX] and [INT] orbs beneficial for Slasher characters. If a character has a [DEX] or [INT] orb, boosts their ATK by 4.0625x instead.",
        special: "Deals 120x character's ATK as Typeless damage to all enemies and makes [RCV] and [TND] orbs beneficial for Slasher characters for 3 turns. Boosts ATK of Slasher characters by 2x for 1 turn. If during that turn you score 4 PERFECT hits, boosts ATK of Slasher characters by 2.25x in the following turn.",
        specialName: "Three Sword Style - 1080 Pound Phoenix",
        sailor: {
            "base": "None",
            "level1": "Reduces Silence duration on this character by 10 turns",
            "level2": "Makes [DEX] and [INT] orbs beneficial for Slasher characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 10 turns" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] and [INT] orbs beneficial for Slasher characters" },
            { "description": "Boosts base HP by 150" },
            { "description": "Acquire Potential 3: Critical Hit" },
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
                    "Level 1: Boosts base ATK by 50",
                    "Level 2: Boosts base ATK by 80",
                    "Level 3: Boosts base ATK by 120",
                    "Level 4: Boosts base ATK by 150",
                    "Level 5: Boosts base ATK by 200"
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
                "Characters": "Mihawk",
                "description": [
                    "Level 1: Adds 6% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 2: Adds 7% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 3: Adds 9% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 4: Adds 11% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 5: Adds 13% of this character's base ATK and HP to the supported character's base ATK and HP"
                ]
            }
        ]
    },
    2478: {//Mr. 1
        captain: "Boosts ATK of Slasher and Cerebral characters by 2.25x.",
        special: "Cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers, randomizes all non-Matching orbs, including [BLOCK] orbs, makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns and reduces enemies' Threshold Damage Reduction, Percent Damage Reduction and Increased Defense duration by 3 turns.",
        specialName: "Spiral Hollow",
        sailor: "If your Captain is a Slasher character, boosts own base ATK by 150",
    },
    2479: {//Mr. 1
        captain: "Boosts ATK of Slasher and Cerebral characters by 2.5x and their HP by 1.2x.",
        special: "Cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers, randomizes all non-Matching orbs, including [BLOCK] orbs, makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns and reduces enemies' Threshold Damage Reduction, Percent Damage Reduction and Increased Defense duration by 3 turns.",
        specialName: "Spiral Hollow",
        sailor: {
            "base": "If your Captain is a Slasher character, boosts own base ATK by 150",
            "level1": "Makes [PSY] orbs beneficial for Slasher characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs beneficial for Slasher characters" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 65" },
            { "description": "Acquire Potential 2: Critical Hit" },
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
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 80% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "Crocodile and Miss Doublefinger",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 2: Adds 4% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 3: Adds 5% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 4: Adds 7% of this character's base ATK and HP to the supported character's base ATK and HP",
                    "Level 5: Adds 9% of this character's base ATK and HP to the supported character's base ATK and HP"
                ]
            }
        ]
    },
    2480: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 2x at the start of the chain and boosts ATK by 2.5x following a chain of [INT] > [DEX] > [DEX] attacks no lower than Good.",
        special: "Strongly Poisons one enemy. Removes Blindness duration completely, reduces Despair and Silence duration by 5 turns, changes adjacent orbs into Matching Orbs and switches orbs between slots three times.",
        specialName: "Octopus Eight Sword Style - Poisonous Blade",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    2481: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 2.25x at the start of the chain, boosts ATK by 2.81x following a chain of [INT] > [DEX] > [DEX] attacks no lower than Good and boosts HP of Slasher characters by 1.2x.",
        special: "Strongly Poisons one enemy. Removes Blindness duration completely, reduces Despair and Silence duration by 5 turns, changes adjacent orbs into Matching Orbs and switches orbs between slots three times.",
        specialName: "Octopus Eight Sword Style - Poisonous Blade",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "Completely resists Paralysis on this character",
        },
        sailorNotes: "#{silence}",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
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
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 80% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "Hody, Ikaros, Daruma and Dosun",
                "description": [
                    "Level 1: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, reduces Despair and Silence duration by 1 turn.",
                    "Level 2: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, reduces Despair and Silence duration by 1 turn.",
                    "Level 3: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, reduces Despair and Silence duration by 2 turns.",
                    "Level 4: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, reduces Despair and Silence duration by 2 turns.",
                    "Level 5: Once per an adventure, when the supported character uses a Orb Converting or Orb Randomizing special, reduces Despair and Silence duration by 3 turns."
                ]
            }
        ]
    },
    2482: {//Kaku
        captain: "Boosts ATK of Slasher characters by 2x and their HP by 1.2x.",
        special: [
            {
                "description": "Deals 50,000 Fixed damage to one enemy, changes all orbs on adjacent characters into Kaku's orb and reduces ATK DOWN, Bind and Paralysis duration by 3 turns.",
                "cooldown": [ 17, 10 ]
            },
            {
                "description": "Deals 200,000 Fixed damage to one enemy, changes all orbs on all characters into Kaku's orb and reduces ATK DOWN, Bind and Paralysis duration by 5 turns.",
                "cooldown": [ 20, 13 ]
            }
        ],
        specialName: "Extreme Nose Gun - \"Kirimanjaro\"",
        sailor: "Boosts this character's damage against [DEX] characters by 2x",
    },
    2483: {//Kaku
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP and RCV by 1.2x.",
        special: [
            {
                "description": "Deals 50,000 Fixed damage to one enemy, changes all orbs on adjacent characters into Kaku's orb and reduces ATK DOWN, Bind and Paralysis duration by 3 turns.",
                "cooldown": [ 17, 10 ]
            },
            {
                "description": "Deals 200,000 Fixed damage to one enemy, changes all orbs on all characters into Kaku's orb and reduces ATK DOWN, Bind and Paralysis duration by 5 turns.",
                "cooldown": [ 20, 13 ]
            }
        ],
        specialName: "Extreme Nose Gun - \"Kirimanjaro\"",
        sailor: {
            "base": "Boosts this character's damage against [DEX] characters by 2x",
            "level1": "Restores his own special cooldown by 2 turns when it is rewinded",
        },
        sailorNotes: "#{rewind : 2}",
        limit: [
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Restores his own special cooldown by 2 turns when it is rewinded" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 2: Critical Hit" },
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
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 80% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ],
        support: [
            {
                "Characters": "Lucci, Jabra, Blueno, Fukuro, Kalifa and Kumadori",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 2: Adds 4% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 3: Adds 5% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 4: Adds 6% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 5: Adds 7% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV."
                ]
            }
        ]
    },
    2484: {//Ryuma
        captain: "Boosts ATK of [STR] characters by 2x and boosts HP of Slasher characters by 1.2x.",
        special: "If your Captain is a Slasher character, boosts ATK of Slasher characters by 1.75x for 1 turn and amplifies the effect of orbs by 1.75x for Slasher characters for 1 turn.",
        specialName: "Polka Remise",
        sailor: "Boosts base ATK of Slasher characters by 50",
    },
    2485: {//Ryuma
        captain: "Boosts ATK of [STR] characters by 2.5x and boosts HP of Slasher characters by 1.2x.",
        special: "If your Captain is a Slasher character, boosts ATK of Slasher characters by 1.75x for 1 turn and amplifies the effect of orbs by 1.75x for Slasher characters for 1 turn.",
        specialName: "Polka Remise",
        sailor: {
            "base": "Boosts base ATK of Slasher characters by 50",
            "level1": "Makes [QCK] orbs beneficial for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 120" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs beneficial for this character" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Double Special Activation" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a 10% chance to deal 1% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a 70% chance to deal 6% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Once per an adventure, reduce own Special Cooldown by 1 turn after the first time this special is used",
                    "Level 2: Once per an adventure, reduce own Special Cooldown by 3 turns after the first time this special is used",
                    "Level 3: Once per an adventure, reduce own Special Cooldown by 5 turns after the first time this special is used",
                    "Level 4: Once per an adventure, reduce own Special Cooldown by 7 turns after the first time this special is used",
                    "Level 5: Once per an adventure, sets your Special Gauge to MAX after the first time this special is used"
                ]
            },
        ],
        support: [
            {
                "Characters": "Slasher characters",
                "description": [
                    "Level 1: Adds 3% of this character's base ATK and RCV to the supported character's base ATK and RCV.",
                    "Level 2: Adds 4% of this character's base ATK and RCV to the supported character's base ATK and RCV.",
                    "Level 3: Adds 5% of this character's base ATK and RCV to the supported character's base ATK and RCV.",
                    "Level 4: Adds 7% of this character's base ATK and RCV to the supported character's base ATK and RCV.",
                    "Level 5: Adds 9% of this character's base ATK and RCV to the supported character's base ATK and RCV."
                ]
            }
        ]
    },
    2486: {//Kinemon
        captain: "Boosts ATK of Slasher characters by 2.5x and their HP by 1.2x.",
        special: "Deals 50x character's ATK in [QCK] damage to all enemies and reduces crew's Chain Multiplier Limit and Chain Coefficient Reduction duration by 7 turns. If your Captain is a Slasher character, boosts the Color Affinity of Slasher characters by 2x for 1 turn.",
        specialName: "Foxfire Style - Continuous Flame Split",
        sailor: "Boosts base ATK of Slasher characters by 50",
    },
    2487: {//Kinemon
        captain: "Boosts ATK of Slasher characters by 2.75x and their HP by 1.25x.",
        special: "Deals 50x character's ATK in [QCK] damage to all enemies and reduces crew's Chain Multiplier Limit and Chain Coefficient Reduction duration by 7 turns. If your Captain is a Slasher character, boosts the Color Affinity of Slasher characters by 2x for 1 turn.",
        specialName: "Foxfire Style - Continuous Flame Split",
        sailor: {
            "base": "Boosts base ATK of Slasher characters by 50",
            "level1": "Makes [QCK] orbs beneficial for Slasher characters",
        },
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 80" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs beneficial for Slasher characters" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Potential 2: Critical Hit" },
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
                "Characters": "Slasher characters",
                "description": [
                    "Level 1: Adds 2% of this character's base ATK to the supported character's base ATK.",
                    "Level 2: Adds 3% of this character's base ATK to the supported character's base ATK.",
                    "Level 3: Adds 5% of this character's base ATK to the supported character's base ATK.",
                    "Level 4: Adds 6% of this character's base ATK to the supported character's base ATK.",
                    "Level 5: Adds 8% of this character's base ATK to the supported character's base ATK."
                ]
            }
        ]
    },
    2488: {//Brook
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2.25x and their HP by 1.15x.",
        special: "Deals 90x character's ATK in Typeless Fixed damage to all enemies that will ignore damage negating abilities and barriers. If your crew has 5 or more Slasher characters at the time the special is activated, reduces damage received from [INT] enemies by 100% for 1 turn and cuts the current HP of each enemy by 15% at the end of the turn for 2 turns.",
        specialName: "Soul Solid - Song of Scratches: Blizzard Slice",
        sailor: "Boosts base HP of [PSY] characters by 40",
    },
    2489: {//Brook
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2.5x and their HP by 1.25x.",
        special: "Deals 90x character's ATK in Typeless Fixed damage to all enemies that will ignore damage negating abilities and barriers. If your crew has 5 or more Slasher characters at the time the special is activated, reduces damage received from [INT] enemies by 100% for 1 turn and cuts the current HP of each enemy by 15% at the end of the turn for 2 turns.",
        specialName: "Soul Solid - Song of Scratches: Blizzard Slice",
        sailor: {
            "base": "Boosts base HP of [PSY] characters by 40",
            "level1": "Boosts base ATK of Slasher and Free Spirit characters by 50",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Slasher and Free Spirit characters by 50" },
            { "description": "Boosts base HP by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
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
                    "Level 1: If HP is below 10% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 20% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 30% at the start of the turn, recovers 0.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 40% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, recovers 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
        support: [
            {
                "Characters": "Slasher characters",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK and HP to the supported character's base ATK and HP.",
                    "Level 2: Adds 2% of this character's base ATK and HP to the supported character's base ATK and HP.",
                    "Level 3: Adds 3% of this character's base ATK and HP to the supported character's base ATK and HP.",
                    "Level 4: Adds 4% of this character's base ATK and HP to the supported character's base ATK and HP.",
                    "Level 5: Adds 5% of this character's base ATK and HP to the supported character's base ATK and HP."
                ]
            }
        ]
    },
    2490: {//Hiriluk
        captain: "Boosts ATK of [DEX] and [INT] characters by 2x and their RCV by 1.2x.",
        special: "Reduces crew's current HP by 50%, reduces Despair, Paralysis and Chain Coefficient Reduction duration by 3 turns and changes [TND] and [RCV] orbs on all characters into Matching Orbs.",
        specialName: "Entrusting his Dream with this Final Cup",
    },
    2491: {//Hiriluk
        captain: "Boosts ATK of [DEX] and [INT] characters by 2.25x and their HP and RCV by 1.2x.",
        special: "Reduces crew's current HP by 50%, reduces Despair, Paralysis and Chain Coefficient Reduction duration by 3 turns and changes [TND] and [RCV] orbs on all characters into Matching Orbs.",
        specialName: "Entrusting his Dream with this Final Cup",
        support: [
            {
                "Characters": "Dr. Kureha and Chopper",
                "description": [
                    "Level 1: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 2: Adds 1% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 3: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 4: Adds 2% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV.",
                    "Level 5: Adds 3% of this character's base ATK, HP and RCV to the supported character's base ATK, HP and RCV."
                ]
            }
        ]
    },
    2492: {//Chopper
        captain: "Boosts ATK of Fighter characters by 1.5x.",
        special: "Reduces crew's current HP by 10%, removes Blindness duration completely and adds 0.3x to Chain multiplier for 1 turn.",
        specialName: "Skull Mark of the Amiudake",
    },
    2493: {//Kureha
        captain: "Boosts ATK and RCV of Free Spirit characters by 1.25x.",
        special: "Reduces Bind duration by 3 turns and makes [RCV] orbs beneficial for Free Spirit characters for 1 turn.",
        specialName: "Life Expectancy Declaration",
        specialNotes: "#{beneficial}",
    },
    2495: {//Pudding
        captain: "Boosts ATK Striker and Cerebral characters by 2x and recovers 1x character's RCV in HP at the end of each turn.",
        special: "Reduces Special Cooldown of all characters by 1 turn, changes adjacent orbs into Matching Orbs, reduces enemies' Percent Damage Reduction duration by 5 turns and reduces Burn duration by 5 turns.",
        specialName: "Cherry Blossoms Falling onto the Tea Party",
    },
    2496: {//Pudding
        captain: "Boosts ATK Striker and Cerebral characters by 2.75x and recovers 1.5x character's RCV in HP at the end of each turn.",
        special: "Reduces Special Cooldown of all characters by 1 turn, changes adjacent orbs into Matching Orbs, reduces enemies' Percent Damage Reduction duration by 5 turns and reduces Burn duration by 5 turns.",
        specialName: "Cherry Blossoms Falling onto the Tea Party",
    },
    2497: {//Big Mom
        captain: "Boosts ATK of characters with cost 40 or less by 2.5x and their HP by 1.2x. If you use \"Life or Sakura Mochi!?\" on this Charlotte Linlin boosts ATK of characters with cost 40 or less by 3x instead for 3 turns.",
        special: "Recovers 3,450 HP and boosts ATK of Striker and Driven characters by 1.75x for 2 turns. If there are 3 enemies or less on the stage when the special is activated, reduces crew's ATK DOWN duration by 7 turns, otherwise if there are 4 enemies or more on the stage when the special is activated, reduces Increase Damage Taken duration by 7 turns.",
        specialName: "Life or Sakura Mochi!?",
    },
    2498: {//Big Mom
        captain: "Boosts ATK of characters with cost 40 or less by 3x and their HP by 1.2x. If you use \"Life or Sakura Mochi!?\" on this Charlotte Linlin boosts ATK of characters with cost 40 or less by 3.5x instead and reduce damage received by 15% for 3 turns.",
        special: "Recovers 3,450 HP and boosts ATK of Striker and Driven characters by 1.75x for 2 turns. If there are 3 enemies or less on the stage when the special is activated, reduces crew's ATK DOWN duration by 7 turns, otherwise if there are 4 enemies or more on the stage when the special is activated, reduces Increase Damage Taken duration by 7 turns.",
        specialName: "Life or Sakura Mochi!?",
    },
    2499: {//Perona
        captain: "Boosts ATK Driven and Cerebral characters by 2.5x and their RCV by 1.25x.",
        special: "Reduces the defense of all enemies by 100% for 2 turns, reduces Special Cooldown of characters in the right column by 2 turns and changes the orbs in the top row into [QCK] orbs, changes the orbs in the middle row into [PSY] orbs, changes the orbs in the bottom row into [INT] orbs.",
        specialName: "Hollow Farewell",
        sailor: "Reduces Paralysis duration by 1 turn",
        potential: [
            {
                "Name": "Slot Bind Self-reduction",
                "description": [
                    "Level 1: Reduces Slot Bind duration by ? turn on this character",
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by 5 turns on this character"
                ]
            },
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by 10 turn at the start of the fight"
                ]
            },
        ],
        support: [
            {
                "Characters": "Zoro and Mihawk",
                "description": [
                    "Level 1: Once per adventure, when you reach the final stage, ?",
                    "Level 2: Once per adventure, when you reach the final stage, ?",
                    "Level 3: Once per adventure, when you reach the final stage, ?",
                    "Level 4: Once per adventure, when you reach the final stage, ?",
                    "Level 5: Once per adventure, when you reach the final stage, changes [STR], [QCK] and [PSY] orbs on Slasher characters orb into [DEX] and [INT] orbs and makes PERFECTs slightly easier to hit for 2 turns."
                ]
            }
        ]
    },
    
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

module.exports.db5 = db5;
