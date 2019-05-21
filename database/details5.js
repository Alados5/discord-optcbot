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
            "level2": "Makes [INT], [RCV] and [TND] orbs \"beneficial\" for this unit"
        },
        sailorNotes: "#{beneficial}",
        special: "Makes Damage and Health Cutting Specials of all characters bypass all defensive Buffs, deals 100x character's ATK in [PSY] damage to one enemy, reduces Special Cooldown of all characters by 1 turn",
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
            { "description": "Acquire Sailor Ability 2: Makes [INT], [RCV] and [TND] orbs \"beneficial\" for this unit" },
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
    2002: {//Story Senor Pink
        captain: "Increases damage received by 1.2x. Reduces cooldown of all specials by 2 turns at the start of the fight and boosts ATK of all characters by 2.5x.",
        special: "Reduces Bind, Despair and Paralysis duration by 3 turns and deals several times character's ATK in Typeless damage to all enemies",
        specialNotes: "#{specialProportional : lower : ??? * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "The Man Standing Tall",
    },
    2003: {//Story Doflamingo
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.5x",
        special: "Changes own orb into [STR], boosts own ATK by 2x for 1 turn and deals 30x character's ATK in Typeless damage to all enemies",
        specialName: "Bullet Thread",
    },
    2004: {//Story Doflamingo
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.5x. If you use \"Bullet Thread\" THIS DOFLAMINGO boosts ATK of Slasher characters by 2.75x instead for 3 turns",
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
        captain: "If your crew has 4 or more characters of the same Type, boosts ATK all characters by 3.5x, by 2.75x otherwise and boosts HP of all characters by 1.3x.",
        special: "Adds .9x to Chain multiplier for 1 turn. If your crew has 4 or more characters of the same Type, boosts ATK of the Dominant Type characters by 2.25x and changes all orbs, including [BLOCK] orbs, to Dominant Type orbs",
        sailor: "If your crew has 4 or more characters of the same Type, boosts base ATK of the Dominant Type by 125",
        specialName: "Closing Declaration",
    },
    2007: {//V2 Shanks
        captain: "If your crew has 4 or more characters of the same Type, boosts ATK all characters by 3.5x, by 2.75x otherwise and boosts HP of all characters by 1.3x.",
        special: "Adds .9x to Chain multiplier for 1 turn. If your crew has 4 or more characters of the same Type, boosts ATK of the Dominant Type characters by 2.25x and changes all orbs, including [BLOCK] orbs, to Dominant Type orbs",
        sailor: {
            "base": "If your crew has 4 or more characters of the same Type, boosts base ATK of the Dominant Type by 125",
            "level1": "Makes [PSY] orbs \"beneficial\" all characters",
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
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" all characters" },
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
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2008: {//Kuma
        captain: "Boosts ATK of [STR] and [INT] characters by 1.2x",
        special: "Cuts the current HP of each enemy by 10%, reduces Special Cooldown of your top row by 2 turns and boosts the Color Affinity of [STR] and [INT] characters depending on your Treasure Map Level for 1 turn",
        specialName: "Proof of a Human Weapon",
        specialNotes: "Level 1-10: 1.5x affinity boost<br\>Level 11-20: 1.75x affinity boost<br\>Level 21+: 2x affinity boost",
    },
    2009: {//Kuma
        captain: "Boosts ATK of [STR] and [INT] characters by 1.5x and their HP by 1.2x",
        special: "Cuts the current HP of each enemy by 10%, reduces Special Cooldown of your top row by 2 turns and boosts the Color Affinity of [STR] and [INT] characters depending on your Treasure Map Level for 1 turn",
        specialName: "Proof of a Human Weapon",
        specialNotes: "Level 1-10: 1.5x affinity boost<br\>Level 11-20: 1.75x affinity boost<br\>Level 21+: 2x affinity boost",
    },
    2010: {//Monet
        captain: "Boosts ATK of Free Spirit characters by 1.2x",
        special: "Deals 50,000 fixed damage to one enemy and reduces Bind and enemy's Threshold Damage Reduction duration by 3 turns",
        specialName: "Fangs of Crushing Ice",
    },
    2011: {//Monet
        captain: "Boosts ATK of Free Spirit characters by 1.5x and their RCV by 1.2x",
        special: "Deals 50,000 fixed damage to one enemy and reduces Bind and enemy's Threshold Damage Reduction duration by 3 turns",
        specialName: "Fangs of Crushing Ice",
    },
    2012: {//Limited Bonney
        captain: "Boosts ATK of Free Spirit characters by 3.25x if they have a [RCV] orb, by 2x otherwise, boosts chances of getting [RCV] orbs and reduces RCV of all characters by 80%",
        special: [
            {
                "description": "Reduces Bind and Paralysis duration by 3 turns and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your captain is a Free Spirit Character, reduces RCV DOWN and Blindness duration by 5 turns",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Reduces Bind and Paralysis duration by 10 turns, recovers 50x character's RCV in HP, and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your captain is a Free Spirit Character, reduces RCV DOWN, Silence, and Blindness duration by 5 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialnotes: "#{silence}",
        specialName: "A Small Dine and Dash",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    2013: {//Limited Bonney
        captain: "Boosts ATK of Free Spirit characters by 3.25x if they have a [RCV] orb, by 2.25x otherwise, boosts chances of getting [RCV] orbs, makes [RCV] orbs \"beneficial\" to Free Spirit characters and reduces RCV of all characters by 80%",
        captainNotes: "#{beneficial}",
        special: [
            {
                "description": "Reduces Bind and Paralysis duration by 3 turns and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your captain is a Free Spirit Character, reduces RCV DOWN and Blindness duration by 5 turns",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Reduces Bind and Paralysis duration by 10 turns, recovers 50x character's RCV in HP, and changes [BLOCK] and [BOMB] orbs into [RCV] orbs. If your captain is a Free Spirit Character, reduces RCV DOWN, Silence, and Blindness duration by 5 turns",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialnotes: "#{silence}",
        specialName: "A Small Dine and Dash",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "Makes [RCV] orbs \"beneficial\" for all characters",
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
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for all characters" },
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
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 25% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
        ],
    },
    2014: {//Raid Lucci
        captain: "Boosts ATK of Fighter characters by 2.25x and set crew's RCV to 0. If you defeated an enemy in the last turn, boosts ATK of Fighter characters by 2.75x instead and boosts ATK of all other characters by 1.2x",
        special: "Deals 100x character's ATK in [INT] damage to one enemy and if there is only one enemy on the stage, delays that enemy for 1 turn and boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Sai Dai Rin: Rokuogan (Ultimate Radius: Rokuogan)",
    },
    2015: {//Raid Lucci
        captain: "Boosts ATK of Fighter characters by 2.5x and set crew's RCV to 0. If you defeated an enemy in the last turn, boosts ATK of Fighter characters by 3x instead and boosts ATK of all other characters by 1.2x",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Deals 100x character's ATK in [INT] damage to one enemy and if there is only one enemy on the stage, delays that enemy for 1 turn and boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Sai Dai Rin: Rokuogan (Ultimate Radius: Rokuogan)",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Fighter characters by 100",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
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
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
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
        special: "Reduces Bind and Despair duration by 2 turns, if the captain is a Free Spirit Character changes [BLOCK] orbs into matching orbs",
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
        captain: "Boosts ATK of [PSY] and [INT] characters by 2.5x if they have a matching orb, by 1.75x otherwise and their HP by 1.2x",
        special: "Changes the orbs in the top row into [INT] orbs, changes the orbs in the middle row into [RCV] orbs, changes the orbs in the bottom row into [PSY] orbs and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Taste of \"Treasure Payment\"",
    },
    2022: {//Akainu V2
        captain: "Boosts ATK of [STR] and [INT] characters by 3.25x and makes [STR] and [INT] orbs \"beneficial\" to [STR] and [INT] characters. Deals up to 500x character's ATK in Typeless damage to one enemy at the end of each turn depending on how many PERFECTs scored that turn.",
        captainNotes: "End of turn damage is based on how many PERFECTs you hit this turn: 0 PERFECTs - 0x ATK; 1 PERFECT - 5x ATK; 2 PERFECTs - 13x ATK; 3 PERFECTs - 32x ATK; 4 PERFECTs - 80x ATK; 5 PERFECTs - 200x ATK; 6 PERFECTs - 500x ATK<br>#{beneficial}",
        special: "Randomizes all orbs, including [BLOCK] orbs, into either [STR] or [INT] orbs and amplifies the effect of orbs on [STR] and [INT] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Scorched Earth",
    },
    2023: {//Akainu V2
        captain: "Boosts ATK of [STR] and [INT] characters by 3.25x and makes [STR] and [INT] orbs \"beneficial\" to [STR] and [INT] characters. Deals up to 500x character's ATK in Typeless damage to one enemy at the end of each turn depending on how many PERFECTs scored that turn.",
        captainNotes: "End of turn damage is based on how many PERFECTs you hit this turn: 0 PERFECTs - 0x ATK; 1 PERFECT - 5x ATK; 2 PERFECTs - 13x ATK; 3 PERFECTs - 32x ATK; 4 PERFECTs - 80x ATK; 5 PERFECTs - 200x ATK; 6 PERFECTs - 500x ATK<br>#{beneficial}",
        special: "Randomizes all orbs, including [BLOCK] orbs, into either [STR] or [INT] orbs and amplifies the effect of orbs on [STR] and [INT] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Scorched Earth",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of [STR] and [INT] characters by 100",
            "level2": "Makes [PSY] and [QCK] orbs \"beneficial\" for this unit",
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
            { "description": "Acquire Sailor Ability 2: Makes [PSY] and [QCK] orbs \"beneficial\" for this unit" },
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
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
        ]
    },
    2024: {//Aokiji V2
        captain: "Boosts ATK of [QCK] and [PSY] characters by 3.25x and their HP by 1.35x at the start of the chain and makes [QCK] and [PSY] orbs \"beneficial\" to [QCK] and [PSY] characters. Boosts ATK of [QCK] and [PSY] characters by 4.0625x following a chain of [PSY] > [PSY] > [QCK] attacks no lower than Good",
        captainNotes: "#{beneficial}",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into either [QCK] or [PSY] orbs and boosts ATK of [QCK] and [PSY] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Frozen Sea",
    },
    2025: {//Aokiji V2
        captain: "Boosts ATK of [QCK] and [PSY] characters by 3.25x and their HP by 1.35x at the start of the chain and makes [QCK] and [PSY] orbs \"beneficial\" to [QCK] and [PSY] characters. Boosts ATK of [QCK] and [PSY] characters by 4.0625x following a chain of [PSY] > [PSY] > [QCK] attacks no lower than Good",
        captainNotes: "#{beneficial}",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into either [QCK] or [PSY] orbs and boosts ATK of [QCK] and [PSY] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Frozen Sea",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP and ATK of [QCK] and [PSY] characters by 100",
            "level2": "Makes [STR] and [INT] orbs \"beneficial\" for this unit",
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
            { "description": "Acquire Sailor Ability 2: Makes [STR] and [INT] orbs \"beneficial\" for this unit" },
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
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
        ]
    },
    2026: {//Hina
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2x",
        special: "Delays all enemies for 1 turn. If your Captain is a [QCK] or [PSY] character, boosts the Color Affinity of [QCK] and [PSY] by 2x for 1 turn",
        specialNotes: "#{colorAffinity : 2}",
        specialName: "Kimino Sleeve Cage: Lock",
        sailor: "Boosts base ATK of [PSY] and [QCK] characters by 50",
    },
    2027: {//Hina
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2.25x and their RCV by 1.2x",
        special: "Delays all enemies for 1 turn. If your Captain is a [QCK] or [PSY] character, boosts the Color Affinity of [QCK] and [PSY] by 2x for 1 turn",
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
        ]
    },
    2028: {//Sengoku
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, Boosts ATK of [QCK] characters by 2x",
        special: "Reduces Despair and ATK DOWN duration by 4 turns. If your crew has 4 or more [QCK] or [PSY] characters, amplifies the effect of orbs by 2x for 1 turn and makes [RCV] and [TND] orb \"beneficial\" for all characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Instant Suppression",
        sailor: "Makes [DEX] orbs \"beneficial\" for this character",
        sailorNotes: "#{beneficial}",
    },
    2029: {//Sengoku
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, Boosts ATK of [QCK] characters by 2.5x and their HP by 1.2x",
        special: "Reduces Despair and ATK DOWN duration by 4 turns. If your crew has 4 or more [QCK] or [PSY] characters, amplifies the effect of orbs by 2x for 1 turn and makes [RCV] and [TND] orb \"beneficial\" for all characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Instant Suppression",
        sailor: {
            "base": "Makes [DEX] orbs \"beneficial\" for this character",
            "level1": "Makes [QCK] orbs \"beneficial\" for [PSY] characters",
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
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for [PSY] characters" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 25% chance to deal 4% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 35% chance to deal 6% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
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
        special: "Reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 4 turns and makes [QCK], [PSY], [RCV] and [TND] orbs \"beneficial\" to [STR] and [INT] characters for 3 turns",
        specialNotes: "#{beneficial}",
        specialName: "Reporting on a Bizarre Incident",
        sailor: "Boosts base ATK, HP and RCV for [INT] characters by 50",
    },
    2031: {//Brannew
        captain: "Boosts ATK of [STR] and [INT] characters by 2.5x and reduces damage received by 7%",
        special: "Reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 4 turns and makes [QCK], [PSY], [RCV] and [TND] orbs \"beneficial\" to [STR] and [INT] characters for 3 turns",
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
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Shooter characters by 30" },
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
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2032: {//Luffy Tankman
        captain: "Boosts ATK and HP of [PSY] characters by 0.5x",
        special: "Boosts ATK of all characters by 1.5x for 1 turn. If your Captain is a [PSY] character, amplifies the effect of orbs by 1.5x for 1 turn, adds .3x to Chain multiplier for 1 turn, adds 20x character's ATK as Additional Typeless Damage for 1 turn and reduces damage received by 40% for 1 turn.",
        specialName: "The Heavy Tank's Critical Breakthrough",
    },
    2033: {//Luffy Tankman
        captain: "Boosts ATK of [PSY] characters by 2.5x and their HP by 1.5x",
        special: "Boosts ATK of all characters by 1.5x for 1 turn. If your Captain is a [PSY] character, amplifies the effect of orbs by 1.5x for 1 turn, adds .3x to Chain multiplier for 1 turn, adds 20x character's ATK as Additional Typeless Damage for 1 turn and reduces damage received by 40% for 1 turn.",
        specialName: "The Heavy Tank's Critical Breakthrough",
    },
    2034: {//Kizaru 6+
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of all characters by 2x and boosts RCV of all characters by 1.35x. If you use \"Yasakani no Magatama: Divine Light\" boosts ATK of all characters by 3.5x instead.",
        special: [
            {
                "description": "For Shooter and Slasher characters, randomizes all non-matching orbs. Recovers 6x character's RCV in HP. Deals 20 hits of random typeless damage to random enemies.",
                "cooldown": [ 9, 6 ],
            },
            {
                "description": "Changes all orbs on Shooter and Slasher characters into Matching orbs. Recovers 15x character's RCV in HP. Deals 20 hits of large random typeless damage to random enemies.",
                "cooldown": [ 15, 12 ],
            },
        ],
        specialNotes: "#{randomHits : 20}<br>#{random : ??? : ??? : for each hit on Stage 1}<br>#{random : ??? : ??? : for each hit on Stage 2}<br>#{stages}",
        specialName: "Yasakani no Magatama: Divine Light",
    },
    2035: {//Buggy 6+
        captain: "Boosts ATK of characters with cost 40 or less by 1.75x and reduces the HP and ATK of characters with cost 41 and greater by 0.5x. Guarantees duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if he was not your captain upon starting the island. Stacks with other additional drop captains, giving you two chances of getting an extra drop.",
        special: "Boosts ATK of characters with cost 40 or less by 2x for 2 turns",
        specialName: "The Greatest Villain's Bluff",
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
            "level2": "Makes [INT] orbs \"beneficial\" for Fighter characters",
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
            { "description": "Acquire Sailor Ability 2: Makes [INT] orbs \"beneficial\" for Fighter characters" },
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
        special: "Recovers 3,960 HP, reduces enemies ATK Up and End of Turn Damage/Percent Cut Buff duration by 7 turns and reduces damage received by 80% for 1 turn.",
        sailor: {
            "base": "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a [QCK] or [PSY] character",
            "base2": "Boosts base ATK, HP and RCV of [QCK] and [PSY] characters by 40",
        },
        specialName: "Glorious Scenery",
    },
    2039: {//Boa Hancock
        captain: "Boosts ATK of [QCK] and Free Spirit characters by 1.75x",
        captainNotes: "Attack boost stacks, so a [QCK] Free Spirit character has a 3.0625x ATK",
        special: "Recovers 3,960 HP, reduces enemies ATK Up and End of Turn Damage/Percent Cut Buff duration by 7 turns and reduces damage received by 80% for 1 turn.",
        sailor: {
            "base": "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a [QCK] or [PSY] character",
            "base2": "Boosts base ATK, HP and RCV of [QCK] and [PSY] characters by 40",
        },
        sailorNotes: "#{beneficial}",
        specialName: "Glorious Scenery",
    },
    2040: {//Whitebeard
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x",
        special: "Randomizes all orbs, into either [G] or [RCV] orbs and boosts own ATK by 2.25x. If your Captain is a Fighter character, locks orbs for 1 turn.",
        sailor: {
            "base": "Makes [RCV] orbs \"beneficial\" for all characters if your Captain is a Fighter character",
            "base2": "Boosts base ATK, HP and RCV of Fighter characters by 40",
        },
        sailorNotes: "#{beneficial}",
        specialName: "The Gentle Breeze of the Feast",
    },
    2041: {//Whitebeard
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2.25x and their HP and RCV by 1.25x",
        special: "Randomizes all orbs, into either [G] or [RCV] orbs and boosts own ATK by 2.25x. If your Captain is a Fighter character, locks orbs for 1 turn.",
        sailor: {
            "base": "Makes [RCV] orbs \"beneficial\" for all characters if your Captain is a Fighter character",
            "base2": "Boosts base ATK, HP and RCV of Fighter characters by 40",
        },
        specialName: "The Gentle Breeze of the Feast",
    },
    2042: {//Kizaru
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Free Spirit and Shooter characters by 1.75x",
        special: "If your crew has 2 or more characters of the same Type, reduces Special Cooldown of characters of that Type by 1 turn and changes adjacent orbs into Matching Orbs",
        specialNotes: "How the Cooldown Reduction works exactly is not tested.",
        sailor: "Boosts base ATK, HP and RCV of all characters by 20",
        specialName: "The Afterglow of a Fight",
    },
    2043: {//Kizaru
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Free Spirit and Shooter characters by 2.25x and their HP by 1.2x",
        special: "If your crew has 2 or more characters of the same Type, reduces Special Cooldown of characters of that Type by 1 turn and changes adjacent orbs into Matching Orbs",
        specialNotes: "How the Cooldown Reduction works exactly is not tested.",
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
        sailor: "If this character has a [STR] orb and you hit a PERFECT with him, keep his [STR] orb for the next turn",
        specialName: "Exquisite Aim",
    },
    2047: {//Koala
        captain: "Boosts ATK of Fighter characters by 2.5x if they have a matching orb, by 2x otherwise",
        special: "Deals 20x character's ATK in [QCK] damage to all enemies. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 2x for 1 turn and changes all orbs, including [BLOCK] orbs, on Fighter characters into Matching orbs",
        specialName: "Fishman Karate Mid-Air Roundhouse Kick",
        sailor: "Boosts own base ATK by 250 if this character is the last in the chain to attack",
    },
    2048: {//Koala
        captain: "Boosts ATK of Fighter characters by 3.25x if they have a matching orb, by 2x otherwise",
        special: "Deals 20x character's ATK in [QCK] damage to all enemies. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 2x for 1 turn and changes all orbs, including [BLOCK] orbs, on Fighter characters into Matching orbs",
        specialName: "Fishman Karate Mid-Air Roundhouse Kick",
        sailor: {
            "base": "Boosts own base ATK by 250 if this character is the last in the chain to attack",
            "level1": "Makes [QCK] orbs \"beneficial\" for Fighter characters",
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
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for Fighter characters" },
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
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
         ],
        potentialNotes: "#{enrage}"
    },
    2049: {//Moria
        captain: "Boosts ATK of Powerhouse and Fighter characters by ?x, reduces crew's current HP by ?% at the end of each turn, reduces his own ATK multiplier by ?x at the end of each turn",
        special: "Locks the chain multiplier at 3x for 1 turn and reduces Increase Damage Taken duration by 5 turns. If enemies are delayed at the time the special was activated, deals 1,000,000 fixed damage to all enemies",
        specialName: "Ressurected Nightmare Attack",
        sailor: "Makes [INT] orbs \"beneficial\" for Powerhouse characters",
        sailorNotes: "#{beneficial}",
    },
    2050: {//Moria
        captain: "Boosts ATK of Powerhouse and Fighter characters by 3.5x, reduces crew's current HP by ?% at the end of each turn, reduces his own ATK multiplier by ?x at the end of each turn",
        special: "Locks the chain multiplier at 3x for 1 turn and reduces Increase Damage Taken duration by 5 turns. If enemies are delayed at the time the special was activated, deals 1,000,000 fixed damage to all enemies",
        specialName: "Ressurected Nightmare Attack",
        sailorNotes: "#{beneficial}",
        sailor: {
            "base": "Makes [INT] orbs \"beneficial\" for Powerhouse characters",
            "level1": "If your Captain is a Powerhouse character, completely resists Blindness",
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
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: If your Captain is a Powerhouse character, " },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
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
            {
                "Name": "Cooldown Reduction",
                "description": [
                    "Level 1: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 2: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by ? turn at the start of the fight"
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
        captain: "If you have 5 or more Fighter characters in your crew, boosts ATK of Fighter characters by 2.5x and their HP by 1.2, and reduces damage received by 10%",
        special: "Deals 35x character's ATK in [QCK] damage to one enemy and boosts ATK of Fighter characters by 1.75x for 2 turns. If Pica is your Captain or Friend/Guest Captain, Reduces damage received by 20% for 1 turn. If he is a Sailor, Increases damage received by 2x for 1 turn instead.",
        specialName: "Bitestone",
    },
    2053: {//Bastille
        captain: "Boosts ATK of [INT] characters by 2.5x",
        special: "Deals 75x character's ATK in [INT] damage to all enemies",
        specialName: "Double Edge Long Blade Slash",
    },
    2054: {//Headcracker Doll
        captain: "Boosts ATK of all characters by 1.75x, reduces crew's RCV to 0 and protects from defeat as long as HP is above ??%",
        special: "If there are 3 enemies or more on the stage, deals 50,000 fixed damage to all enemies",
        specialName: "Unrelentless Physical Work",
    },
    2055: {//Kyuin
        captain: "Boosts ATK of Powerhouse and Striker characters by 2.25x",
        special: "Cuts the current HP of each enemy by 10% and recovers 10% of crew's MAX HP.",
        specialName: "Cruel Suction",
    },
    2056: {//Ichiji
        captain: "Boosts ATK of Fighter characters by 2.5x and reduces their RCV to 0",
        special: "Deals 15x character's ATK in [INT] damage to one enemy, changes top row orbs into [PSY] orbs and makes [PSY] orb \"beneficial\" for all characters for 1 turn.",
        specialName: "Scornful Gang Up (First Son)",
        specialNotes: "#{beneficial}",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    2057: {//Niji
        captain: "Boosts ATK of Fighter characters by 1.75x and their HP by 1.2x",
        special: "Deals 15x character's ATK in [DEX] damage to one enemy, changes the orbs in the middle row into [PSY] orbs and boosts ATK of characters with 15 cost or less by 1.75x for 1 turn.",
        specialName: "Scornful Gang Up (Second Son)",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    2058: {//Yonji
        captain: "Boosts ATK of Fighter characters by 1.25x and their HP by 1.5x",
        special: "Deals 15x character's ATK in [QCK] damage to one enemy, changes the orbs in the bottom row into [PSY] orbs and Amplifies the effect of orbs for characters with 15 cost or less by 1.75x for 1 turn.",
        specialName: "Scornful Gang Up (Fourth Son)",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    2059: {//Beckman
        captain: "Boosts ATK of Cerebral characters by 1.2x",
        special: "Reduces enemies Increased Defense duration by 3 turns, changes own orb into [STR], amplifies the effect of orbs by 1.5x for 1 turn and locks the chain multiplier depending on your Treasure Map Level for 1 turn",
        specialName: "Trial of Annihilation",
        specialNotes: "Level 1-10: 2.5x chain lock<br\>Level 11-20: 2.75x chain lock<br\>Level 21+: 3x chain lock",
    },
    2060: {//Beckman
        captain: "Boosts ATK of Cerebral characters by 1.5x and their HP by 1.2x",
        special: "Reduces enemies Increased Defense duration by 3 turns, changes own orb into [STR], amplifies the effect of orbs by 1.5x for 1 turn and locks the chain multiplier depending on your Treasure Map Level for 1 turn",
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
            "level1": "Restores his own special by 3 turns when it is rewinded",
            "level2": "Makes [DEX] orbs \"beneficial\" for all characters",
        },
        sailorNotes: "#{rewind : 1}<br/>#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Acquire new Captain Ability: Boosts ATK of [DEX], [PSY] and [INT] characters by 2.25x" },
            { "description": "Acquire Sailor Ability 1: Restores his own special by 3 turns when it is rewinded" },
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
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs \"beneficial\" for all characters" },
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
                    "Level 1: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 2: If HP is below 25% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 3: If HP is below 35% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 4: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a PERFECT with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a PERFECT with this character"
                ]
            },
         ],
    },
    2065: {//EXP Pudding
        captain: "Boosts ATK of all characters by 2.25x and boosts EXP and amount of Beli received by 1.2x",
        captainNotes: "EXP and Beli boost does not take effect if she becomes your captain in the middle of the adventure.",
        special: "Changes Badly Matching orbs into Matching orbs, randomizes non-matching orbs and recovers 2,000 HP",
        specialName: "Complex Feelings",
    },
    2066: {//6+ Jinbe
        captain: "Boosts ATK of Fighter characters by 3x, their HP by 1.5x and reduces damage received by 7%",
        specialName: "Shark Fist Tile Breaker: Great Earth Wave",
        special: "Deals 60x character's ATK in [INT] damage to all enemies, changes all orbs on Fighter characters into matching orbs and reduces enemy's Percent Damage Reduction and Increased Defense duration by 5 turns.",
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
            "level1": "Makes [PSY] orbs \"beneficial\" for Slasher characters",
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
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for Slasher characters" },
            { "description": "Acquire Potential 2: Cooldown Reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 2% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 40% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 50% chance to deal 4% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 60% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 6% of this character's attack in extra damage"
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
        ]
    },
    2069: {//Neo Boa
        captain: "Boosts ATK of Free Spirit characters by 2x",
        specialName: "Slave Arrow [Neo]",
        special: "Locks the chain multiplier at 2.5x for 3 turns, delays all enemies for 1 turn and changes own orb and the captain's orb into matching"
    },
    2070: {//Neo Boa
        captain: "Boosts ATK and HP of Free Spirit characters by 2x",
        specialName: "Slave Arrow [Neo]",
        special: "Locks the chain multiplier at 2.5x for 3 turns, delays all enemies for 1 turn and changes own orb and the captain's orb into matching"
    },
    2071: {//Anni Chopper
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "Reduces the defense of all enemies by 80% for 1 turn, reduces enemy's Threshold Damage Reduction and Enrage duration by 5 turns, makes [INT], [PSY] and [DEX] orb \"beneficial\" for all characters for 1 turn and adds .6x to Chain multiplier for 1 turn.",
        sailor: "Changes all orbs into [RCV] orbs at the start of the fight",
        specialName: "A Man's Stratagem to Victory",
    },
    2072: {//Anni Chopper
        captain: "Recovers 5x character's RCV in HP at the end of each turn",
        special: "Reduces the defense of all enemies by 80% for 1 turn, reduces enemy's Threshold Damage Reduction and Enrage duration by 5 turns, makes [INT], [PSY] and [DEX] orb \"beneficial\" for all characters for 1 turn and adds .6x to Chain multiplier for 1 turn.",
        specialName: "A Man's Stratagem to Victory",
        sailor: {
            "base": "Changes all orbs into [RCV] orbs at the start of the fight",
            "level1": "Makes [INT] orbs \"beneficial\" for Fighter characters",
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
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs \"beneficial\" for Fighter characters" },
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
        //captain: "<b>Always Active: </b>Boosts HP of all characters by 1.25x, boosts chances of getting [STR], [QCK], [PSY] orbs.<br><b>Gear 2 Captain: </b>Boosts ATK of all characters by 3x, slightly boosts chances of getting [RCV] orbs and makes [QCK] orbs \"beneficial\" to all characters<br><b>Gear 3 Captain: </b>Boosts ATK of all characters by 3.5x after 2 consecutive PERFECTs, boosts chances of getting [RCV] orbs and makes [STR] orbs \"beneficial\" to all characters<br><b>Gear 4 - Boundman Captain: </b>Boosts ATK of all characters by 4x, reduce damage received by 20%, boosts chances of getting [RCV] orbs and makes [STR], [QCK] and [PSY] orbs \"beneficial\" to all characters<br><b>Gear 4 - Tankman Captain: </b>Boosts own ATK by 4.25x, boosts ATK of all other characters by 4x, reduce damage received by 50% and makes [STR], [QCK] and [PSY] orbs \"beneficial\" to all characters<br><b>Action: </b>Based on how full Gear Power Gauge is, transforms Luffy. If Gear Power is above 50%, change between Gear 2 and Gear 3. If Gear Power is full, change into Gear 4 - Boundman. This can be used an unlimited amount of times per turn.",
        captain: g4v2captain,
        //captainnotes: "In order to increase Gear Power Gauge level, you must hit a PERFECT with Luffy or consume [RCV] orbs. MAX Gear Power Gauge level is 8. Hitting a perfect with Luffy and consuming a [RCV] orb increases Gauge level by 1. If Luffy gets swapped out in battle, Gear Gauge Power will go to 0. While in Gear 4, Luffy will stay in that form until Gauge Power goes to 0. Attacking with any character while in Gear 4 reduces Gear Power Gauge by 3.",
        special: g4v2special,
        //specialNotes: "If you use this special after consuming 10 [RCV] orbs since the last time this character used his special, transform into Tankman, otherwise transform into Boundman",
        specialName: "Gomu Gomu no Kong Organ",
        sailor: {
            "base": "None",
            "level1": "Completely resists Paralysis on this character",
            "level2": "Not Translated",
        },
        limit: "Not Translated",
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
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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

    2075: {//Legend Nami
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of [DEX] characters by 3.75x and makes [STR] and [QCK] orbs \"beneficial\" to [DEX] characters",
        special: "If your Captain is a Free Spirit, Cerebral, Powerhouse or Driven character, boosts the Color Affinity of Free Spirit, Cerebral, Powerhouse and Driven characters by 1.75x for 1 turn and amplifies the effects of orbs for Free Spirit, Cerebral, Powerhouse and Driven characters by 2x for 1 turn",
        specialName: "Weather Egg: Thunderbreed Tempo",
    },
    2076: {//Legend Nami
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of [DEX] characters by 3.75x and makes [STR] and [QCK] orbs \"beneficial\" to [DEX] characters",
        special: "If your Captain is a Free Spirit, Cerebral, Powerhouse or Driven character, boosts the Color Affinity of Free Spirit, Cerebral, Powerhouse and Driven characters by 1.75x for 1 turn and amplifies the effects of orbs for Free Spirit, Cerebral, Powerhouse and Driven characters by 2x for 1 turn",
        specialName: "Weather Egg: Thunderbreed Tempo",
        sailor: {
            "base": "None",
            "level1": "Reduces Paralysis on all characters by 1 turn",
            "level2": "Makes [DEX] orbs \"beneficial\" for all characters",
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
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis on all characters by 1 turn" },
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
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs \"beneficial\" for all characters" },
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
        ]
    },
    2077: {//Carrot
        captain: "Boosts ATK of Fighter characters by 2x",
        special: "Reduces Paralysis and Despair duration by 4 turns, delays all enemies for 1 turn, changes [STR], [DEX], [QCK], [INT] and [PSY] orbs into [PSY] orbs and boosts ATK against enemies with reduced defense by 1.75x for ? turns",
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
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
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
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2079: {//Brook
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2x",
        special: "Deals 8 hits of of 20x character's ATK in typeless damage to random enemies. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, Changes [BLOCK] orbs into Matching orbs and boosts the Color Affinity of all characters by 1.75x for 1 turn",
        specialName: "The Spherical Song that Resonates the Soul",
        sailor: "If this character has a [STR] orb and you hit a PERFECT with him, keep his [STR] orb for the next turn",
    },
    2080: {//Brook
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2x and boosts chain multiplier by 1.5x",
        special: "Deals 8 hits of of 20x character's ATK in typeless damage to random enemies. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, Changes [BLOCK] orbs into Matching orbs and boosts the Color Affinity of all characters by 1.75x for 1 turn",
        specialName: "The Spherical Song that Resonates the Soul",
        sailor: {
            "base": "If this character has a [STR] orb and you hit a PERFECT with him, keep his [STR] orb for the next turn",
            "level1": "Makes [RCV] and [TND] orbs \"beneficial\" for himself",
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
            { "description": "Acquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for himself" },
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
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
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
            "level1": "Makes [DEX] orbs \"beneficial\" for himself",
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
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs \"beneficial\" for himself" },
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
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2083: {//Reiju
        captain: "Boosts ATK of [DEX] and [QCK] characters by 2.25x",
        special: "Removes Poison, changes left column [STR], [DEX], [QCK], [PSY], or [INT] orbs into Matching orbs and amplifies the effect of orbs on [DEX], [QCK] and [PSY] characters by 1.75x for 1 turn",
        specialName: "Celebration at the Flower Garden",
    },
    2084: {//Reiju
        captain: "Boosts ATK of [DEX] and [QCK] characters by 2.5x and their RCV by 1.2x",
        special: "Removes Poison, changes left column [STR], [DEX], [QCK], [PSY], or [INT] orbs into Matching orbs and amplifies the effect of orbs on [DEX], [QCK] and [PSY] characters by 1.75x for 1 turn",
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
        captain: "Boosts ATK of all characters by 2x. If you use \"Gomu Gomu no Octopus Stamp: Banquet\"  boosts ATK of all characters by 2.6x instead.",
        special: "Deals 15x character's ATK in [STR] damage to all enemies, recovers 2,000 HP and adds .5x to Chain multiplier for 1 turn.",
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
        captain: "Boosts ATK of all characters by 2x. If you use \"One Sword Style: Yakkodori - Banquet\"  boosts ATK of all characters by 2.6x instead.",
        special: "Deals 15x character's ATK in [PSY] damage to all enemies, reduces the defense of all enemies by 50% and boosts ATK against enemies with reduced defense by 1.5x for 1 turn.",
        specialName: "One Sword Style: Yakkodori - Banquet",
    },
    2093: {//Pizza Chopper
        captain: "Boosts ATK of Fighter and Free Spirit characters by 1.5x and their RCV by 1.2x",
        special: "Removes Poison and boosts ATK against delayed enemies by 1.5x for 1 turn",
        specialName: "Overflowing Happiness",
    },
    2094: {//Pizza Brook
        captain: "Boosts ATK of Free Spirit characters by 1.75x",
        special: "Reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 3 turns and reduces damage received by 60% for 1 turn",
        specialName: "An Enchanted Bliss that Pierces the Bones",
    },
    2095: {//Pizza Robin
        captain: "Boosts ATK of [INT] characters by 1.5x and their HP and RCV by 1.2x",
        special: "Reduces Blindness duration by 3 turns, boosts chances of getting matching orbs for 3 turns and randomizes non-matching orbs including [BLOCK] orbs.",
        specialName: "Gorgeous Small Break",
    },
    2096: {//Raid Zoro
        captain: "Boosts Slasher and Driven character's ATK by 2.25x, by 2.5x after 2 consecutive PERFECTs, by 2.75x after 5 consecutive PERFECTs.",
        special: "Deals 55x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers, reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 5 turns. If HP is full at the time the special was activated, boosts the Color Affinity of Slasher and Driven characters by 2x for 1 turn, by 1.75x for 2 turns otherwise",
        specialName: "One Sword Style: Great Dragon Shock",
        specialNotes: "#{ignoreBarrier}<br>#{colorAffinity : 2}",
        sailor: "If this character has a [QCK] orb and you hit a GOOD or GREAT with him, keep his [QCK] orb for the next turn",
    },
    2097: {//Raid Zoro
        captain: "Boosts Slasher and Driven character's ATK by 2.75x and their HP by 1.2x, by 3x after 2 consecutive PERFECTs, by 3.3x after 5 consecutive PERFECTs.",
        special: "Deals 55x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers, reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 5 turns. If HP is full at the time the special was activated, boosts the Color Affinity of Slasher and Driven characters by 2x for 1 turn, by 1.75x for 2 turns otherwise",
        specialName: "One Sword Style: Great Dragon Shock",
        specialNotes: "#{ignoreBarrier}<br>#{colorAffinity : 2}",
        sailor: {
            "base": "If this character has a [QCK] orb and you hit a GOOD or GREAT with him, keep his [QCK] orb for the next turn",
            "level1": "Boosts ATK, HP and RCV of Slasher and Driven characters by 50",
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
        potentialNotes: "#{enrage}"
    },
    2098: {//Tesoro
        captain: "If you have a Striker, Shooter, Fighter, Slasher, Free Spirit, Cerebral, Powerhouse and Driven character on your crew, boosts ATK of all characters by 3.75x, their HP by 1.35x and boosts chances of getting Matching orbs. Boosts ATK of all characters by 4.5 after scoring 4 GREATs in a row. Scoring a PERFECT reduces ATK boost for the next attack by 30%.",
        captainNotes: "Scoring a Perfect will reduce the ATK boost for the next character in the chain, not for the rest of the battle.",
        special: "Deals 200,000 fixed damage to all enemies, changes top and bottom row orbs into matching orbs and locks the chain multiplier at 3.25x for 1 turn.",
        specialName: "Gon Inferno",
    },
    2099: {//Tesoro
        captain: "If you have a Striker, Shooter, Fighter, Slasher, Free Spirit, Cerebral, Powerhouse and Driven character on your crew, boosts ATK of all characters by 3.75x, their HP by 1.35x and boosts chances of getting Matching orbs. Boosts ATK of all characters by 4.5 after scoring 4 GREATs in a row. Scoring a PERFECT reduces ATK boost for the next attack by 30%.",
        captainNotes: "Scoring a Perfect will reduce the ATK boost for the next character in the chain, not for the rest of the battle.",
        special: "Deals 200,000 fixed damage to all enemies, changes top and bottom row orbs into matching orbs and locks the chain multiplier at 3.25x for 1 turn.",
        specialName: "Gon Inferno",
        sailor: {
            "base": "None",
            "level1": "Makes [STR], [DEX], [RCV], [TND] orbs \"beneficial\" for this unit",
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
            { "description": "Acquire Sailor Ability 1: Makes [STR], [DEX], [RCV], [TND] orbs \"beneficial\" for this unit" },
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
                    "Level 1: If you hit a perfect with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 60% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 70% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 80% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2100: {//Dice
        captain: "Boosts ATK of Powerhouse characters by 1.75x and [STR] characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [STR] Powerhouse character has a 2.1x ATK",
        special: "Cuts the current HP of each enemy by 15% and reduces enemy Barrier duration by 1 turn. If your captain is [STR] or [QCK], Changes own orb into [STR] and boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Furious Armored Tank",
        sailor: "If this character has a [STR] orb and you hit a GOOD or GREAT with him, keep his [STR] orb for the next turn",
    },
    2101: {//Dice
        captain: "Boosts ATK of Powerhouse characters by 2.25x and [STR] characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [STR] Powerhouse character has a 2.7x ATK",
        special: "Cuts the current HP of each enemy by 15% and reduces enemy Barrier duration by 1 turn. If your captain is [STR] or [QCK], Changes own orb into [STR] and boosts ATK of all characters by 1.75x for 1 turn",
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
        special: "Deal 77x character's ATK in typeless damage to all enemies and reduces crew's ATK DOWN, Chain Multiplier Limit and Paralysis duration by 3 turns. If your captain is [INT] or [QCK], Changes own orb into [INT] and amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Lucky Coin of Victory",
        sailor: "If this character has a [INT] orb and you hit a GOOD or GREAT with her, keep her [INT] orb for the next turn",
    },
    2103: {//Baccarat
        captain: "Boosts ATK of all characters by 1.5x. Gives chance of duplicating a drop upon completion of the island.",
        captainNotes: "Does not work if she was not your captain upon starting the island. Stacks with other additional drop captains, giving you two chances of getting an extra drop.",
        special: "Deal 77x character's ATK in typeless damage to all enemies and reduces crew's ATK DOWN, Chain Multiplier Limit and Paralysis duration by 3 turns. If your captain is [INT] or [QCK], Changes own orb into [INT] and amplifies the effect of orbs by 1.75x for 1 turn",
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
        special: "Deal 40x character's ATK in typeless damage to one enemy that will ignore damage negating abilities and barriers and reduces enemies ATK UP, Increased Defense and Enrage duration by 3 turns. If your captain is [DEX] or [QCK], Changes own orb into [DEX] and adds 40x characters ATK as additional typeless damage for 1 turn",
        specialName: "A Tormenting Show",
        sailor: "If this character has a [DEX] orb and you hit a GOOD or GREAT with him, keep his [DEX] orb for the next turn",
    },
    2105: {//Mr. Tanaka
        captain: "Boosts ATK of Free Spirit and Shooter characters by 2.25x and boosts HP of [DEX] characters by 1.2x",
        special: "Deal 40x character's ATK in typeless damage to one enemy that will ignore damage negating abilities and barriers and reduces enemies ATK UP, Increased Defense and Enrage duration by 3 turns. If your captain is [DEX] or [QCK], Changes own orb into [DEX] and adds 40x characters ATK as additional typeless damage for 1 turn",
        specialName: "A Tormenting Show",
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
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 99%",
                    "Level 3: This character's attack will ignore barriers if HP is above 99%",
                    "Level 4: This character's attack will ignore barriers if HP is above 80%",
                    "Level 5: This character's attack will ignore barriers if HP is above 50%"
                ]
            },
        ]
    },
    2106: {//Carina
        captain: "Boosts ATK of [PSY] characters by 2.25x",
        special: "Reduces enemy's Threshold Damage Reduction, Percent Damage Reduction, Resilience, End of Turn Damage and Percent Cut Buffs duration by 4 turns, changes adjacent orbs and [BLOCK] orbs into Matching orbs, randomizes non-matching orbs and reduces damage received by 70% for 2 turns.",
        specialName: "The Great Final Act of One's Victory",
        sailor: "If this character has a [PSY] orb and you hit a GOOD or GREAT with her, keep her [PSY] orb for the next turn",
    },
    2107: {//Carina
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of [PSY] characters by 2.5x and their RCV by 1.2x",
        special: "Reduces enemy's Threshold Damage Reduction, Percent Damage Reduction, and Resilience and End of Turn Damage/Percent Cut Buffs duration by 4 turns, changes adjacent orbs and [BLOCK] orbs into Matching orbs, randomizes non-matching orbs and reduces damage received by 70% for 2 turns.",
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
        special: "Removes all positive buffs on your team, changes all orbs, including [BLOCK] orbs into [G] orbs, amplifies the effect of orbs by 3x for 1 turn, boosts ATK of all characters by 1.25x for 1 turn and boosts the Color Affinity of all characters by 1.25x for 1 turn",
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
        special: "Removes all positive buffs on your team, changes all orbs, including [BLOCK] orbs into [G] orbs, amplifies the effect of orbs by 3x for 1 turn, boosts ATK of all characters by 1.25x for 1 turn and boosts the Color Affinity of all characters by 1.25x for 1 turn",
        specialName: "The Harmony that Interweaves the Souls",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] orbs \"beneficial\" for this unit",
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
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for this unit" },
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
        captain: "Boosts ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 1.825x, reduce damage received by 20% and makes [QCK], [PSY], [RCV] and [TND] orbs \"beneficial\" to all characters. Has a chance to delay all enemies by 1 turn based on damage dealt in previous turn.",
        captainNotes: "The bonus is cumulative. Characters with 2 of the boosted classes get a 3.330625x bonus<br>Delay chance is based on damage dealt with normal attacks and does not stack with any other delay specials or effects<br><b>100,000 damage or more:</b> 20% chance to delay<br><b>500,000 damage or more:</b> 50% chance to delay<br><b>1,000,000 damage or more:</b> 100% chance to delay<br><b>2,000,000 damage or more:</b> 100% chance to delay ignoring Delay Debuff Protection",
        special: "Boosts ATK against delayed enemies by 1.75x for Fighter, Striker, Shooter, Cerebral and Powerhouse characters for 2 turns, changes [STR], [QCK], [DEX], [PSY], [INT] and [BLOCK] orbs on Fighter, Striker, Shooter, Cerebral and Powerhouse characters into Matching orbs and reduces Special Cooldown of Fighter, Striker, Shooter, Cerebral and Powerhouse specials by 1 turn",
        specialName: "Peerless Donuts: Mochi Singing Result",
    },
    2113: {//Katakuri
        captain: "Boosts ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 1.825x, reduce damage received by 20% and makes [QCK], [PSY], [RCV] and [TND] orbs \"beneficial\" to all characters. Has a chance to delay all enemies by 1 turn based on damage dealt in previous turn.",
        captainNotes: "The bonus is cumulative. Characters with 2 of the boosted classes get a 3.330625x bonus<br>Delay chance is based on damage dealt with normal attacks and does not stack with any other delay specials or effects<br><b>100,000 damage or more:</b> 20% chance to delay<br><b>500,000 damage or more:</b> 50% chance to delay<br><b>1,000,000 damage or more:</b> 100% chance to delay<br><b>2,000,000 damage or more:</b> 100% chance to delay ignoring Delay Debuff Protection",
        special: "Boosts ATK against delayed enemies by 1.75x for Fighter, Striker, Shooter, Cerebral and Powerhouse characters for 2 turns, changes [STR], [QCK], [DEX], [PSY], [INT] and [BLOCK] orbs on Fighter, Striker, Shooter, Cerebral and Powerhouse characters into Matching orbs and reduces Special Cooldown of Fighter, Striker, Shooter, Cerebral and Powerhouse specials by 1 turn",
        specialName: "Peerless Donuts: Mochi Singing Result",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 50",
            "level2": "Boosts this character's attack against [STR] characters by 2x",
        },
        limit: "Not Translated",
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
                    "Level 1: If you hit a perfect with this character, there is a 40% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 70% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 80% chance to deal 8% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 90% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2114: {//Brulee
        captain: "Boosts ATK and RCV of [PSY] characters by ?x and cuts the current HP of each enemy by ?% at the end of each turn",
        special: [
            {
                "description": "Changes [TND] and [RCV] orbs into [PSY] orbs, changes all other orbs on all characters into Brûlée's orb. Adds 30x character's ATK as Additional Typeless Damage for 3 turns",
                "cooldown": [ 18, null ],
            },
            {
                "description": "Changes [TND] and [RCV] orbs into [PSY] orbs, changes all other orbs on all characters into Brûlée's orb. Adds 30x character's ATK as Additional Typeless Damage for 5 turns",
                "cooldown": [ 22, null ],
            },
        ],
        specialNotes: "Upon activating the special, all orbs will be changed to the orb Brûlée has, including [RAINBOW] and [BLOCK] orbs. This will not override other [BLOCK] orbs.",
        specialName: "Light Reflecting a Virtual Image",
        sailor: "Makes PSY orbs \"beneficial\" for Cerebral characters",
        sailorNotes: "#{beneficial}",
    },
    2115: {//Brulee
        captain: "Boosts ATK and RCV of [PSY] characters by 1.5x and cuts the current HP of each enemy by 15% at the end of each turn",
        special: [
            {
                "description": "Changes [TND] and [RCV] orbs into [PSY] orbs, changes all other orbs on all characters into Brûlée's orb. Adds 30x character's ATK as Additional Typeless Damage for 3 turns",
                "cooldown": [ 18, null ],
            },
            {
                "description": "Changes [TND] and [RCV] orbs into [PSY] orbs, changes all other orbs on all characters into Brûlée's orb. Adds 30x character's ATK as Additional Typeless Damage for 5 turns",
                "cooldown": [ 22, null ],
            },
        ],
        specialNotes: "Upon activating the special, all orbs will be changed to the orb Brûlée has, including [RAINBOW] and [BLOCK] orbs. This will not override other [BLOCK] orbs.",
        specialName: "Light Reflecting a Virtual Image",
        sailor: {
            "base": "Makes PSY orbs \"beneficial\" for Cerebral characters",
        },
        sailorNotes: "#{beneficial}",
        limit: "Not Translated",
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
    2116: {//Amande
        captain: "Boosts ATK of Slasher characters by ?x and reduces crew's RCV to 0",
        special: [
            {
                "description": "Reduces the defense of all enemies by 100% for 1 turn, reduces enemy Barrier duration by 2 turns and cuts the current HP of one enemy by 20%",
                "cooldown": [ 20, null ],
            },
            {
                "description": "Reduces the defense of all enemies by 100% for 1 turn, reduces enemy Barrier duration by 3 turns and cuts the current HP of one enemy by 50%",
                "cooldown": [ 37, null ],
            },
        ],
        specialName: "Slow Ballad",
        sailor: "Makes PSY orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    2117: {//Amande
        captain: "Boosts ATK of Slasher characters by 2.75x and reduces crew's RCV to 0",
        special: [
            {
                "description": "Reduces the defense of all enemies by 100% for 1 turn, reduces enemy Barrier duration by 2 turns and cuts the current HP of one enemy by 20%",
                "cooldown": [ 20, null ],
            },
            {
                "description": "Reduces the defense of all enemies by 100% for 1 turn, reduces enemy Barrier duration by 3 turns and cuts the current HP of one enemy by 50%",
                "cooldown": [ 37, null ],
            },
        ],
        specialName: "Slow Ballad",
        sailor: {
            "base": "Makes PSY orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: "Not Translated",
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
                    "Level 1: Boosts base ATK by ?",
                    "Level 2: Boosts base ATK by ?",
                    "Level 3: Boosts base ATK by ?",
                    "Level 4: Boosts base ATK by ?",
                    "Level 5: Boosts base ATK by ?"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2118: {//Bobbin
        captain: "Boosts ATK of [QCK] and [PSY] characters by ?x",
        special: "Reduces enemy's Threshold Damage Reduction, Percent Damage Reduction, Increased Defense and End of Turn Heal duration by 5 turns, crew's ATK DOWN duration by 5 turns and changes adjacent orbs into Matching Orbs.",
        specialName: "Death-Inducing Lullaby",
        sailor: "Boosts own base ATK by 350 if this character is the last in the chain to attack",
        limit: "This character has a limit break."
    },
    2119: {//Bobbin
        captain: "Boosts ATK of [QCK] and [PSY] characters by 2.5x",
        special: "Reduces enemy's Threshold Damage Reduction, Percent Damage Reduction, Increased Defense and End of Turn Heal duration by 5 turns, crew's ATK DOWN duration by 5 turns and changes adjacent orbs into Matching Orbs.",
        specialName: "Death-Inducing Lullaby",
        sailor: {
            "base": "Boosts own base ATK by 350 if this character is the last in the chain to attack",
        },
        limit: "Not Translated",
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
                    "Level 2: Reduces No Healing duration by ? turns",
                    "Level 3: Reduces No Healing duration by ? turns",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
        ]
    },
    2120: {//Oven
        captain: "Boosts ATK of Powerhouse and Fighter characters by ?x and reduces damage received by ?%",
        captainNotes: "The bonus is cumulative. Powerhouse + Fighter characters get a ?x bonus",
        special: "If enemies are delayed at the time the special was activated, boost ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 2x for 1 turn, boosts Fighter and Powerhouse characters by 1.75x for 3 turns otherwise.",
        specialName: "Grilled Scorch Blow",
        sailor: "Boosts this character's attack against [STR] characters by 2x",
    },
    2121: {//Oven
        captain: "Boosts ATK of Powerhouse and Fighter characters by 1.65x and reduces damage received by 7%",
        captainNotes: "The bonus is cumulative. Powerhouse + Fighter characters get a 2.7225x bonus",
        special: "If enemies are delayed at the time the special was activated, boost ATK of Fighter, Striker, Shooter, Cerebral and Powerhouse characters by 2x for 1 turn, boosts Fighter and Powerhouse characters by 1.75x for 3 turns otherwise.",
        specialName: "Grilled Scorch Blow",
        sailor: {
            "base": "Boosts this character's attack against [STR] characters by 2x",
        },
        limit: "Not Translated",
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by ?%",
                    "Level 3: Reduce damage taken from [QCK] characters by ?%",
                    "Level 4: Reduce damage taken from [QCK] characters by ?%",
                    "Level 5: Reduce damage taken from [QCK] characters by ?%"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above ?%",
                    "Level 3: This character's attack will ignore barriers if HP is above ?%",
                    "Level 4: This character's attack will ignore barriers if HP is above ?%",
                    "Level 5: This character's attack will ignore barriers if HP is above ?%"
                ]
            },
        ]
    },
    2122: {//Neptune
        captain: "Boosts ATK of all characters by ?x, EXP gained by ?x and recovers ?x character's RCV in HP at the end of each turn",
        captainNotes: "EXP boost does not take effect if he becomes your captain in the middle of the adventure.",
        special: "Reduces Despair and ATK DOWN duration by 5 turns and reduces enemies' Resilience Buffs by 5 turns. Reduces the defense of all enemies by ?% and amplifies the effect of orbs by 1.75x for Cerebral and Powerhouse characters for 3 turns",
        sailor: "Boosts base ATK, HP and RCV of Cerebral characters by 75",
        specialName: "Great Ocean Current of Resuscitation",
    },
    2123: {//Neptune
        captain: "Boosts ATK of all characters by 2x, EXP gained by 1.5x and recovers 5x character's RCV in HP at the end of each turn",
        captainNotes: "EXP boost does not take effect if he becomes your captain in the middle of the adventure.",
        special: "Reduces Despair and ATK DOWN duration by 5 turns and reduces enemies' Resilience Buffs by 5 turns. Reduces the defense of all enemies by ?% and amplifies the effect of orbs by 1.75x for Cerebral and Powerhouse characters for 3 turns",
        sailor: "Boosts base ATK, HP and RCV of Cerebral characters by 75",
        specialName: "Great Ocean Current of Resuscitation",
    },
    
    //MYSTERY 2124-2125-2126?
    
    
    2127: {//Brulee
        captain: "Boosts RCV of Cerebral characters by 1.2x and boosts ATK of Cerebral characters by 2.75x if they have a matching orb, by 1.75x otherwise",
        special: "Reduces Bind duration by 2 turns and amplifies the effect of orbs for Cerebral characters by 1.5x and boosts ATK of Cerebral characters by 1.5x for 1 turn.",
        specialName: "The Witch's Meal",
    },
    2128: {//Randolph
        captain: "Boosts ATK of DEX characters by 2x and boosts chain multiplier by 1.2x",
        special: "Reduces Special Cooldown of your right column by 1 turn and makes [DEX] and [RCV] orbs \"beneficial\" for Slasher and Striker characters for 1 turn",
        specialName: "Cutting Lifelines",
    },
    2129: {//Noble Croc
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Boosts ATK of all characters by 1.2x for 3 turns",
        specialName: "Anticipation of Unknown Food",
    },
    2130: {//Diesel
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of [QCK] characters by 1.5x",
        special: "Reduces Paralysis duration by 2 turns and changes the captain's orb into a Matching orb",
        specialName: "The Fast Runner's Emergency Report",
    },
    2131: {//Ivankov
        captain: "Boosts ATK of Cerebral characters by 1.2x",
        special: "Removes Poison and reduces Paralysis duration by 4 turns. If you are on a Treasure Map, boosts ATK of Fighter, Shooter and Cerebral characters depending on your Treasure Map Level for 1 turn",
        specialName: "Laser Treatment Fist",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
    },
    2132: {//Ivankov
        captain: "Boosts ATK of Cerebral characters by 1.5x and their RCV by 1.2x",
        special: "Removes Poison and reduces Paralysis duration by 4 turns. If you are on a Treasure Map, boosts ATK of Fighter, Shooter and Cerebral characters depending on your Treasure Map Level for 1 turn",
        specialName: "Laser Treatment Fist",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
    },
    2133: {//Jozu
        captain: "Boosts ATK of Powerhouse characters by 1.2x",
        special: "Reduces crew's ATK DOWN duration by 3 turns, makes [PSY] orbs \"beneficial\" for all characters for 3 turns and locks all orbs for 1 turn",
        specialName: "Destroy - Charge",
    },
    2134: {//Jozu
        captain: "Boosts ATK of Powerhouse characters by 1.5x and their HP by 1.2x",
        special: "Reduces crew's ATK DOWN duration by 3 turns, makes [PSY] orbs \"beneficial\" for all characters for 3 turns and locks all orbs for 1 turn",
        specialName: "Destroy - Charge",
    },
    2135: {//Mr. 1
        captain: "Boosts ATK of [QCK] characters by 1.3x",
        special: "Deals 15x character's ATK in [QCK] damage to one enemy, changes own orb into [QCK] and amplifies the effect of orbs for [QCK] characters by 1.75x for 1 turn",
        specialName: "Sparkling Daisy",
    },
    2136: {//Crocodile TM
        captain: "Not Translated",
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
            "level6": "Boosts ATK of all characters by 2.5x and makes [STR], [DEX] and [INT] orbs \"beneficial\" to all characters. If this character becomes your captain in the middle of an island, boosts ATK of all characters by 4x instead",
        },
        captainNotes: "#{beneficial}",
        special: "Deals 30x character's ATK in [INT] damage to one enemy, boosts own ATK by 2x and swaps this unit with your captain for 1 turn",
        specialNotes: "This is the same type of ability as raid boss Shiki's swap. You cannot use it if another effect swaps your captain. (Such as if Shiki swaps first)",
        specialName: "Scorpion Tail",
        sailor: {
            "base": "None",
            "level1": "Makes [PSY] orbs \"beneficial\" for this unit",
            "level2": "Makes [TND] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for this unit" },
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
            { "description": "Acquire Sailor Ability 2: Makes [TND] orbs \"beneficial\" for this unit" },
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
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2138: {//6+ Judge
        captain: "Increase the rate of [INT] orbs, reduces damage received by 15%, boosts the HP of all characters by 1.25x and if there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, makes Badly Matching orbs \"beneficial\" to all characters boosts ATK of all characters by 3.9375x if they have a matching orb, by 2.25x otherwise",
        special: "Reduces damage received by 30% for 2 turns and boost ATK of Fighter, Driven and Powerhouse characters by 2x for 1 turn. If this character is the captain or the friend captain, changes all orbs, including [BLOCK] orbs, to [INT] orbs",
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
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
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
        ]
    },
    2139: {//Reiju
        captain: "Boosts ATK of [PSY] characters by 2.25x and Powerhouse characters by 1.4x and the RCV of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [PSY] Powerhouse character has a 3.15x ATK",
        special: "If your captain is [INT] or [PSY], reduces crew's ATK DOWN and Silence duration by 3 turns and inflicts Toxic to all enemies. If the captain is a Powerhouse character, boosts ATK against enemies inflicted with Toxic by 1.75x for 1 turn",
        specialName: "Dangerous Butterfly",
        specialNotes: "Toxic starts at 20x character's attack and increases by ?x at the end of every turn until 500,000 damage per turn.",
        sailor: {
            "base": "Makes [INT] orbs \"beneficial\" for this unit",
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
        ]
    },
    2140: {//Ichiji
        captain: "Boosts ATK of [QCK] characters by 2.25x, boosts ATK of Powerhouse characters by 1.4x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [STR] Powerhouse character has a 3.15x ATK",
        special: "If your captain is [QCK] or [INT] character, amplifies the effect of orbs by 2x for 1 turn. If your Captain is a Powerhouse character, reduces Increase Damage Taken duration by 3 turns",
        specialName: "Sparking Figure",
        sailor: {
            "base": "Makes [INT] orbs \"beneficial\" for this unit",
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
        potentialNotes: "#{enrage}"
    },
    2141: {//Niji
        captain: "Boosts ATK of [DEX] characters by 2.25x, boosts ATK of Powerhouse characters by 1.4x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [DEX] Powerhouse character has a 3.15x ATK",
        special: "If your captain is a [DEX] or [INT] character, locks the chain multiplier at 2.75x for 2 turns. If your captain is a Powerhouse character, reduces enemies' ATK Up and Enrage Buffs by 3 turn",
        specialName: "Super Blue Twin Step",
        sailor: {
            "base": "Makes [INT] orbs \"beneficial\" for this unit",
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
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 30% chance to deal 9% of this character's attack in extra damage"
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
        ]
    },
    2142: {//Yonji
        captain: "Boosts ATK of [STR] characters by 2.25x, boosts ATK of Powerhouse characters by 1.4x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so a [STR] Powerhouse character has a 3.15x ATK",
        special: "If your captain is a [STR] or [INT] character, adds 55x characters ATK as additional typeless damage for 1 turn. If your captain is a Powerhouse character, reduces enemies Percent Damage Reduction and Increased Defense duration by 3 turns",
        specialName: "Burst End Iron Arm",
        specialNotes: "Extra Damage can only be boosted by conditional Boosters.",
        sailor: {
            "base": "Makes [INT] orbs \"beneficial\" for this unit",
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
        ]
    },
    2143: {//Diamante
        captain: "Boosts ATK of Slasher characters by ?x and their HP by ?x",
        special: "Deals 20x character's ATK in [DEX] damage to one enemy and boosts ATK of Slasher characters by 1.5x for 3 turns",
        specialName: "Diamante Special",
    },
    2144: {//Diamante
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.2x",
        special: "Deals 20x character's ATK in [DEX] damage to one enemy and boosts ATK of Slasher characters by 1.5x for 3 turns",
        specialName: "Diamante Special",
    },
    2145: {//Rebecca
        captain: "Boosts ATK of Striker characters by ?x and their HP by ?x",
        special: "Reduces enemy's Threshold Damage Reduction duration by 2 turns and reduces any damage received above 3,000 HP by ?% for 2 turns",
        specialName: "Rebecca Special",
    },
    2146: {//Rebecca
        captain: "Boosts ATK of Striker characters by 2x and their HP by 1.2x",
        special: "Reduces enemy's Threshold Damage Reduction duration by 2 turns and reduces any damage received above 3,000 HP by ?% for 2 turns",
        specialName: "Rebecca Special",
    },
    2147: {//Sanji V2
        captain: "If there are 6 Fighter characters in your crew, boosts chain multiplier by 4x and boosts ATK of Fighter characters by 1.75x. Lowers chances of getting Matching orbs proportionally to the crew's current HP.",
        captainNotes: "At 1 HP, the rate of Matching orbs is ???% (lower) and at full HP, the rate of Matching orbs is ???%",
        special: "Deals 150x character's ATK in [PSY] damage to one enemy. If HP is above 50% at the time the special is activated, boosts ATK of Fighter characters by 2.25x for 1 turn. If Sanji is your Captain or Friend/Guest Captain, reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 10 turns",
        specialName: "Full Course of Hell",
    },
    2148: {//Sanji V2
        captain: "If there are 6 Fighter characters in your crew, boosts chain multiplier by 4x and boosts ATK of Fighter characters by 1.75x. Lowers chances of getting Matching orbs proportionally to the crew's current HP.",
        captainNotes: "At 1 HP, the rate of Matching orbs is ???% (lower) and at full HP, the rate of Matching orbs is ???%",
        special: "Deals 150x character's ATK in [PSY] damage to one enemy. If HP is above 50% at the time the special is activated, boosts ATK of Fighter characters by 2.25x for 1 turn. If Sanji is your Captain or Friend/Guest Captain, reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 10 turns",
        specialName: "Full Course of Hell",
        sailor: {
            "base": "None",
            "level1": "Boosts this character's attack against [INT] characters by 1.2x",
            "level2": "Makes [PSY] orbs \"beneficial\" for Fighter characters",
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
            { "description": "Acquire Sailor Ability 1: Boosts this character's attack against [INT] characters by 1.2x" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] orbs \"beneficial\" for Fighter characters" },
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
            "level1": "Boosts this character's attack against [DEX] characters by 1.2x",
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
            { "description": "Acquire Sailor Ability 1: Boosts this character's attack against [DEX] characters by 1.2x" },
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
        ]
    },
    2153: {//Tamago
        captain: "Boosts ATK of Fighter Characters by 2.5x if they have a matching orb, by 2.25x otherwise",
        special: "Deals 75x character's ATK in [DEX] damage to one enemy that will ignore damage negating abilities and barriers. If your Captain is a Fighter character, changes all orbs, including [BLOCK] orbs, on Fighter characters into Matching orbs",
        specialName: "Legs Benedict",
        specialNotes: "#{ignoreBarrier}",
        sailor: "When HP is above 50% at the start of the turn, boosts ATK of Fighter characters by 125",
    },
    2154: {//Tamago
        captain: "Boosts ATK of Fighter Characters by 2.75x if they have a matching orb, by 2.5x otherwise",
        special: "Deals 75x character's ATK in [DEX] damage to one enemy that will ignore damage negating abilities and barriers. If your Captain is a Fighter character, changes all orbs, including [BLOCK] orbs, on Fighter characters into Matching orbs",
        specialName: "Legs Benedict",
        specialNotes: "#{ignoreBarrier}",
        sailor: {
            "base": "When HP is above 50% at the start of the turn, boosts ATK of Fighter characters by 125",
            "level1": "Makes [DEX] orbs \"beneficial\" for Fighter characters",
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
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs \"beneficial\" for Fighter characters" },
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
        special: "Cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers and removes enemies Increased Defense buff",
        specialName: "Flicker Power Knuckle",
        specialNotes: "#{ignoreBarrier}",
    },
    2156: {//Pekoms
        captain: "Boosts ATK of Fighter characters by 1.75x, protects from defeat as long as HP is above ?%",
        special: "Cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers and removes enemies Increased Defense buff",
        specialName: "Flicker Power Knuckle",
        specialNotes: "#{ignoreBarrier}",
        sailor: {
            "base": "Reduces Blindness duration by 5 turns",
            "level1": "Makes [INT] orbs \"beneficial\" for Fighter characters",
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
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs \"beneficial\" for Fighter characters" },
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
                "description": "Changes all orbs to [DEX] orbs, makes [DEX] orbs \"beneficial\" for all characters and cuts the current HP of one enemy by 10% that will ignore damage negating abilities and barriers.",
                "cooldown": [ 26, 11 ],
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 5 turns, changes all orbs, including [BLOCK] orbs, to [DEX] orbs, makes [DEX] orbs \"beneficial\" for all characters and cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers.",
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
                "description": "Changes all orbs to [DEX] orbs, makes [DEX] orbs \"beneficial\" for all characters and cuts the current HP of one enemy by 10% that will ignore damage negating abilities and barriers.",
                "cooldown": [ 26, 11 ],
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 5 turns, changes all orbs, including [BLOCK] orbs, to [DEX] orbs, makes [DEX] orbs \"beneficial\" for all characters and cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers.",
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
            "level1": "Makes [QCK] orbs \"beneficial\" for Shooter characters",
        },
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for Shooter characters" },
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
        sailor: "Makes [STR] orbs \"beneficial\" for Fighter characters",
    },
    2163: {//Opera
        captain: "Boosts ATK of Fighter characters by 2.5x and their HP by 1.25x",
        special: "Cuts the current HP of each enemy by 20%. If your crew has 5 or more Fighter characters, reduces Increase Damage Taken, Blindness and Despair duration by 7 turns and delays all enemies for 1 turn.",
        specialName: "Cream Monster",
        sailor: {
            "base": "Makes [STR] orbs \"beneficial\" for Fighter characters",
            "level1": "Reduces Silence duration on this character by 3 turns",
        },
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
        ]
    },
    2164: {//Baby 5
        captain: "Boosts ATK of Slasher, Striker and Shooter characters by 1.5x",
        special: "Changes the captain's orb into [DEX], amplifies the effect of orbs for Fighter characters by 1.75x for 1 turn",
        specialName: "Irritation of Love",
        sailor: "If your Captain is a Fighter character, adds 1.5x character's ATK as Additional Typeless Damage",
    },
    2165: {//Baby 5
        captain: "Boosts ATK of Slasher, Striker and Shooter characters by 1.75x",
        special: "Changes the captain's orb into [DEX], amplifies the effect of orbs for Fighter characters by 1.75x for 1 turn",
        specialName: "Irritation of Love",
        sailor: "If your Captain is a Fighter character, adds 1.5x character's ATK as Additional Typeless Damage",
    },
    2166: {//Don Sai
        captain: "Boosts ATK of Striker and Fighter characters by 2x after scoring 3 GREATS in a row, by 1.5x otherwise.",
        special: "Deals 50,000 fixed damage to one enemy that will ignore damage negating abilities and barriers. If your captain is a Fighter or Striker character, randomizes orbs, including [BLOCK] orbs.",
        specialName: "Eight Fists",
        specialNotes:"#{ignoreBarrier}",
    },
    2167: {//Don Sai
        captain: "Boosts ATK of Striker and Fighter characters by 2.5x after scoring 3 GREATS in a row, by 2x otherwise.",
        special: "Deals 50,000 fixed damage to one enemy that will ignore damage negating abilities and barriers. If your captain is a Fighter or Striker character, randomizes orbs, including [BLOCK] orbs.",
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
        special: "Deals 15x character's ATK in [DEX] damage to all enemies, delays all enemies for 1 turn and if enemies have a barrier at the time the special was activated, boosts ATK of all characters by 1.75x, 1.5x otherwise.",
        specialName: "Lightning Slash",
    },
    2171: {//Sicilian
        captain: "Boosts ATK of [DEX] characters by 2.25x",
        special: "Deals 15x character's ATK in [DEX] damage to all enemies, delays all enemies for 1 turn and if enemies have a barrier at the time the special was activated, boosts ATK of all characters by 1.75x, 1.5x otherwise.",
        specialName: "Lightning Slash",
    },
    2172: {//Swimsuit Shirahoshi
        captain: "Boosts ATK of Striker characters by 1.75x, recovers 1x character's RCV in HP at the end of each turn",
        special: "Reduces enemy's Percent Damage Reduction and crew's Chain Coefficient Reduction duration by 4 turns, changes Badly Matching orbs into Matching orbs and adds .65x to Chain multiplier for 1 turn.",
        specialName: "Spending Some Time with Megalo",
    },
    2173: {//Swimsuit Shirahoshi
        captain: "Boosts ATK of Striker characters by 2.25x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces enemy's Percent Damage Reduction and crew's Chain Coefficient Reduction duration by 4 turns, changes Badly Matching orbs into Matching orbs and adds .65x to Chain multiplier for 1 turn.",
        specialName: "Spending Some Time with Megalo",
    },
    2174: {//Jack TM
        captain: "Boosts ATK of Powerhouse characters by 1.75x and reduces damage received by 5%",
        special: "Reduces enemies Percent Damage Reduction, Increased Defense and Damage Nullification duration by 2 turns and deals fixed Typeless damage, proportional to the number of enemies on the stage, to one enemy that will ignore damage negating abilities and barriers.",
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
        special: "Reduces enemies Percent Damage Reduction, Increased Defense and Damage Nullification duration by 2 turns and deals fixed Typeless damage, proportional to the number of enemies on the stage, to one enemy that will ignore damage negating abilities and barriers.",
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
        special: "Reduces Bind duration by 2 turns and changes own orb into [QCK]. If your Captain is a Striker character, adds .5x to Chain multiplier for 2 turns.",
        specialName: "Cat Toy",
    },
    2177: {//Nekomamushi
        captain: "Boosts ATK of Striker characters by 2.25x and their HP by 1.1x",
        special: "Reduces Bind duration by 2 turns and changes own orb into [QCK]. If your Captain is a Striker character, adds .5x to Chain multiplier for 2 turns.",
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
            "character1": "Boosts ATK of [PSY] characters by 3.5x, boosts ATK of all other characters by 2.75x, reduce damage received by 20% and makes [PSY] orbs \"beneficial\" to all characters",
            "character2": "Boosts ATK of [INT] characters by 3.5x, boosts ATK of all other characters by 2.75x, boosts RCV of all characters by 1.25x and makes [INT] orbs \"beneficial\" to all characters",
            "combined": "Boosts ATK of [PSY] and [INT] characters by 4.25x, boosts ATK of all other characters by 3x, boosts RCV of all characters by 1.5x, reduce damage received by 20% and makes [PSY] and [INT] orbs \"beneficial\" to all characters"
        },
        special: "Cuts the current HP of each enemy by 30%, recovers 20,000 HP, randomizes all orbs into either [PSY], [INT] or [RCV] orbs and becomes Whitebeard & Marco for 3 turns",
        specialNotes: "Change Action: When Change is activated, reduces Paralysis and Silence duration by 1 turn, makes [RCV] orbs \"beneficial\" for all characters for 1 turn and changes their own orb into a [RCV] orb<br>#{beneficial}",
        specialName: "Immortal Blue Flame Shockwave",
        sailor: {
            "character1": "Boosts base ATK of [PSY] and [INT] characters by 75",
            "character2": "Boosts base HP and RCV of [PSY] and [INT] characters by 75",
            "combined": "Boosts base ATK, HP and RCV of [PSY] and [INT] characters by 100"
        },
    },
    2181: {//Whitebeard&Marco
        captain: {
            "character1": "Boosts ATK of [PSY] characters by 3.5x, boosts ATK of all other characters by 2.75x, reduce damage received by 20% and makes [PSY] orbs \"beneficial\" to all characters",
            "character2": "Boosts ATK of [INT] characters by 3.5x, boosts ATK of all other characters by 2.75x, boosts RCV of all characters by 1.25x and makes [INT] orbs \"beneficial\" to all characters",
            "combined": "Boosts ATK of [PSY] and [INT] characters by 4.25x, boosts ATK of all other characters by 3x, boosts RCV of all characters by 1.5x, reduce damage received by 20% and makes [PSY] and [INT] orbs \"beneficial\" to all characters"
        },
        special: "Cuts the current HP of each enemy by 30%, recovers 20,000 HP, randomizes all orbs into either [PSY], [INT] or [RCV] orbs and becomes Whitebeard & Marco for 3 turns",
        specialNotes: "Change Action: When Change is activated, reduces Paralysis and Silence duration by 1 turn, makes [RCV] orbs \"beneficial\" for all characters for 1 turn and changes their own orb into a [RCV] orb<br>#{beneficial}",
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
            "level1": "Makes [STR], [QCK], [DEX] and [INT] orbs \"beneficial\" for this character if your Captain is a [PSY] or [INT] character",
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
            { "description": "Acquire Sailor Ability 1: Makes [STR], [QCK], [DEX] and [INT] orbs \"beneficial\" for this character if your Captain is a [PSY] or [INT] character" },
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
        special: "Deal 50x character's ATK in typeless damage to one enemy and reduces enemy Barrier duration by 1 turn. If your crew has 3 or more [PSY] characters, changes own orb into [PSY] and amplifies the effect of orbs by 2x for 1 turn",
        specialName: "Hawk Eyes' Instantaneous Killing",
        sailor: "Boosts base ATK and HP of [PSY] and [INT] characters by 50",
    },
    2185: {//Mihawk
        captain: "Boosts ATK of Slasher characters by 2.5x and boosts HP of [PSY] characters by 1.3x",
        special: "Deal 50x character's ATK in typeless damage to one enemy and reduces enemy Barrier duration by 1 turn. If your crew has 3 or more [PSY] characters, changes own orb into [PSY] and amplifies the effect of orbs by 2x for 1 turn",
        specialName: "Hawk Eyes' Instantaneous Killing",
        sailor: {
            "base": "Boosts base ATK and HP of [PSY] and [INT] characters by 50",
            "level1": "Boosts this character's attack against [INT] characters by 1.1x",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts this character's attack against [INT] characters by 1.1x" },
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
            "level1": "Makes [INT] orbs \"beneficial\" for this character",
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
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs \"beneficial\" for this character" },
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
        special: "Reduces Bind, Despair, ATK DOWN and Chain Multiplier Limit duration by 2 turns, reduces enemy Barrier duration by 1 turn and deals 50,000 fixed damage to one enemy",
        specialName: "Heartful Twin Slashes",
        sailor: "When any other [PSY] or [INT] character uses a special, reduces own cooldown by 3 turns",
    },
    2189: {//Strawberry
        captain: "Boosts ATK of Slasher and Cerebral characters by 2.25x and reduce damage received by 10%",
        special: "Reduces Bind, Despair, ATK DOWN and Chain Multiplier Limit duration by 2 turns, reduces enemy Barrier duration by 1 turn and deals 50,000 fixed damage to one enemy",
        specialName: "Heartful Twin Slashes",
        sailor: {
            "base": "When any other [PSY] or [INT] character uses a special, reduces own cooldown by 3 turns",
            "level1": "Makes [TND] orbs \"beneficial\" for [PSY] and [INT] characters",
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
            { "description": "Acquire Sailor Ability 1: Makes [TND] orbs \"beneficial\" for [PSY] and [INT] characters" },
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
        ]
    },
    2190: {//Rebecca
        captain: "Boosts ATK of Striker and Slasher characters proportionally to the crew's current HP, by 2.25x at max and reduce damage received by 7%",
        special: "Reduces enemy's Threshold Damage Reduction duration by 5 turns and boosts ATK of Slasher and Striker characters by 1.75x for 1 turn. If your Captain is a Slasher or Striker character, reduces RCV DOWN and Increase Damage Taken duration by 3 turns.",
        specialName: "Heart-Throbbing Beach Volleyball",
        sailor: "If your Captain is a Slasher or Striker character, reduces Blindness duration by 5 turns",
    },
    2191: {//Rebecca
        captain: "Boosts ATK of Striker and Slasher characters proportionally to the crew's current HP, by 2.5x at max and reduce damage received by 15%",
        special: "Reduces enemy's Threshold Damage Reduction duration by 5 turns and boosts ATK of Slasher and Striker characters by 1.75x for 1 turn. If your Captain is a Slasher or Striker character, reduces RCV DOWN and Increase Damage Taken duration by 3 turns.",
        specialName: "Heart-Throbbing Beach Volleyball",
        sailor: "If your Captain is a Slasher or Striker character, reduces Blindness duration by 5 turns",
    },
    2192: {//Kuma
        captain: "Boosts ATK of Shooter characters by 2x and recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 3 turns and changes adjacent orbs into [RCV] orbs. If there are 2 enemies or more on the stage, instantly defeats one enemy with HP equal to or below 350x character's ATK, cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers otherwise",
        specialName: "Erasing Palm Strike",
        sailor: "Boosts base HP of Shooter characters by 75",
    },
    2193: {//Kuma
        captain: "Boosts ATK of Shooter characters by 2.5x and recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 3 turns and changes adjacent orbs into [RCV] orbs. If there are 2 enemies or more on the stage, instantly defeats one enemy with HP equal to or below 350x character's ATK, cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers otherwise",
        specialName: "Erasing Palm Strike",
        sailor: {
            "base": "Boosts base HP of Shooter characters by 75",
            "level1": "Makes [PSY] orbs \"beneficial\" for Shooter characters",
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
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for Shooter characters" },
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
        captain: "Boosts ATK of all characters proportionally to the crew's current HP, by 3x at max. Recovers 1.5x his RCV at the end of the turn each time you hit a Good. Recovers .5x his RCV at the end of the turn each time you hit a Great",
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
                    "Level 2: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 3: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 4: Reduce own Special Cooldown by ? turn at the start of the fight",
                    "Level 5: Reduce own Special Cooldown by ? turn at the start of the fight"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2196: {//Blackbeard
        captain: "Boosts ATK of Driven characters by 3.75x when HP is 10% or below, 2x otherwise and boosts HP of Driven characters by 1.2x",
        special: "Reduces enemy's Threshold Damage Reduction, Percent Damage Reduction, End of Turn Damage/Percent Cut, End of Turn Heal, Increased Defense, Damage Nullification, Barrier, ATK Up, Enrage and Resilience Buffs duration by 1 turn. Boosts ATK of all characters by 2x if HP is below 10% at the time the special is activated.",
        specialName: "Blackbeard Special",
    },
    2197: {//Blackbeard
        captain: "Boosts ATK of Driven characters by 3.75x when HP is 10% or below, 2x otherwise and boosts HP of Driven characters by 1.2x",
        special: "Reduces enemy's Threshold Damage Reduction, Percent Damage Reduction, End of Turn Damage/Percent Cut, End of Turn Heal, Increased Defense, Damage Nullification, Barrier, ATK Up, Enrage and Resilience Buffs duration by 1 turn. Boosts ATK of all characters by 2x if HP is below 10% at the time the special is activated.",
        specialName: "Blackbeard Special",
        sailor: {
            "base": "None",
            "level1": "When HP is below 10% at the start of the turn, boosts base ATK of all characters by 100",
            "level2": "Makes [PSY] orbs \"beneficial\" for this character",
        },
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
        captain: "Boosts ATK of Striker characters by ?x and their HP by ?x. If you defeat an enemy, increases ATK boost slightly. Stacks up to ? times to a maximum of ?x.",
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
            "level1": "Boosts this character's attack against [PSY] characters by 1.2x"
        },
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
        captain: "Boosts ATK of [DEX], [QCK] and [INT] characters by 2.75x at the start of the chain, boosts ATK by 4x following a chain of [DEX] > [INT] > [QCK] attacks no lower than Good and boosts HP by 1.35x. Makes [TND] and [RCV] orbs \"beneficial\" to all characters",
        special: "Reduces crew's current HP by 99%, deals 30x the amount of HP subtracted in typeless damage to all enemies and changes all orbs, including [BLOCK] orbs, into [RCV] orbs",
        specialName: "Lion's Threat: Earth Bind",
    },
    2201: {//Shiki
        captain: "Boosts ATK of [DEX], [QCK] and [INT] characters by 2.75x at the start of the chain, boosts ATK by 4x following a chain of [DEX] > [INT] > [QCK] attacks no lower than Good and boosts HP by 1.35x. Makes [TND] and [RCV] orbs \"beneficial\" to all characters",
        special: "Reduces crew's current HP by 99%, deals 30x the amount of HP subtracted in typeless damage to all enemies and changes all orbs, including [BLOCK] orbs, into [RCV] orbs",
        specialName: "Lion's Threat: Earth Bind",
        sailor: {
            "base": "None",
            "level1": "Makes [DEX], [RCV] and [TND] orbs \"beneficial\" for this character",
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
            { "description": "Acquire Sailor Ability 1: Makes [DEX], [RCV] and [TND] orbs \"beneficial\" for this character" },
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
            { "description": "Acquire Sailor Ability 2: " },
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
        special: "If HP is below 10%, amplifies the effect of orbs by 2x for 1 turn. If your Captain is a Driven character, reduces enemies' ATK Up, Enrage and End of Turn Damage/Percent Cut duration by 5 turns.",
        specialName: "Chemical Juggling",
        sailor: "If your Captain is a Driven character, boosts own base ATK by 100",
    },
    2205: {//Scarlet
        captain: "Boosts ATK of Fighter and Powerhouse characters by 3.25x following a chain of Good > Great > PERFECT hits",
        special: "If HP is below 10%, amplifies the effect of orbs by 2x for 1 turn. If your Captain is a Driven character, reduces enemies' ATK Up, Enrage and End of Turn Damage/Percent Cut duration by 5 turns.",
        specialName: "Chemical Juggling",
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
        special: "Reduces enemy Barrier duration by 1 turn, reduces the defense of all enemies by 100% for 1 turn and boosts ATK of [DEX], [QCK] and [INT] characters depending on your Treasure Map Level for 1 turn",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
        specialName: "Gomu Gomu no Fireworks: Golden Peony",
    },
    2207: {//Luffy
        captain: "Boosts ATK of Striker characters by 1.75x",
        special: "Reduces enemy Barrier duration by 1 turn, reduces the defense of all enemies by 100% for 1 turn and boosts ATK of [DEX], [QCK] and [INT] characters depending on your Treasure Map Level for 1 turn",
        specialNotes: "Level 1-10: 1.75x ATK boost<br\>Level 11-20: 2x ATK boost<br\>Level 21+: 2.25x ATK boost",
        specialName: "Gomu Gomu no Fireworks: Golden Peony",
    },
    2208: {//Gan Fall
        captain: "Boosts ATK of [INT] characters by 1.25x",
        special: "Reduces crew's ATK DOWN and Bind duration by 3 turns and changes bottom row orbs into matching orbs",
        specialName: "Heavenly Charge",
    },
    2209: {//Gan Fall
        captain: "Boosts ATK of [INT] characters by 1.5x and their HP by 1.2x",
        special: "Reduces crew's ATK DOWN and Bind duration by 3 turns and changes bottom row orbs into matching orbs",
        specialName: "Heavenly Charge",
    },
    2210: {//Enel TM
        captain: "Boosts ATK of all characters by 1.5x, deals 5656 in [PSY] damage to all enemies at the end of each turn and recovers 51 HP at end of each turn",
        special: "Deals 565,600 fixed damage to all enemies and locks all orbs for 1 turn.",
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
        special: "Deals 565,600 fixed damage to all enemies and locks all orbs for 1 turn.",
        specialName: "God's Judgement: El Thor",
        sailor: {
            "base": "None",
            "level1": "When any other character uses a special, reduces own cooldown by 5 turns",
            "level2": "Makes [RCV] orbs \"beneficial\" for this character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Sailor Ability 1: When any other character uses a special, reduces own cooldown by 5 turns" },
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
            { "description": "Acquire Sailor Ability 2: Makes [RCV] orbs \"beneficial\" for this character" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire new Captain Ability: " },
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
        captain: "Boosts ATK of Cerebral characters by ?x and their RCV by ?x",
        special: "Recovers 7,000 HP, Reduces crew's ATK DOWN and enemy's Resilience Buffs duration by 5 turns and changes adjacent orbs into Matching Orbs",
        specialName: "Eyes Hiding Shyness",
        sailor: "Reduces Paralysis duration by 1 turn",
    },
    2213: {//Pudding
        captain: "Boosts ATK of Cerebral characters by 2.25x and their RCV by 1.2x",
        special: "Recovers 7,000 HP, Reduces crew's ATK DOWN and enemy's Resilience Buffs duration by 5 turns and changes adjacent orbs into Matching Orbs",
        specialName: "Eyes Hiding Shyness",
        sailor: "Reduces Paralysis duration by 1 turn",
    },
    2214: {//Reiju
        captain: "Boosts ATK of all characters by ?x and their RCV by ?x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 8 times to a maximum of ?x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: [
            {
                "description": "Delays all enemies for 1 turn and makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns.",
                "cooldown": [ 14, 7 ],
            },
            {
                "description": "Delays all enemies for 1 turn, reduces Paralysis, Bind, Despair and Silence duration by 1 turn and makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns.",
                "cooldown": [ 18, 11 ],
            },
            {
                "description": "Delays all enemies for 2 turn, reduces Paralysis, Bind, Despair and Silence duration by 2 turn and makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns.",
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
                "cooldown": [ 14, 7 ],
            },
            {
                "description": "Delays all enemies for 1 turn, reduces Paralysis, Bind, Despair and Silence duration by 1 turn and makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns.",
                "cooldown": [ 18, 11 ],
            },
            {
                "description": "Delays all enemies for 2 turn, reduces Paralysis, Bind, Despair and Silence duration by 2 turn and makes Badly Matching and [BLOCK] orbs not reduce damage for 3 turns.",
                "cooldown": [ 22, 15 ],
            },
        ],
        specialName: "Tropical Country Flowers",
        specialNotes: "#{stages}",
        sailor: "Reduces Silence duration on this character by 3 turns",
    },
    2216: {//Conis
        captain: "Boosts ATK, HP and RCV of all characters by ?x",
        special: "Removes Poison, reduces RCV DOWN duration by 10 turns, boosts RCV of all characters by 1.5x for 1 turn and reduces Special Cooldown of your top row by 1 turn.",
        specialName: "Angel Cruising",
    },
    2217: {//Conis
        captain: "Boosts ATK, HP and RCV of all characters by 1.75x",
        special: "Removes Poison, reduces RCV DOWN duration by 10 turns, boosts RCV of all characters by 1.5x for 1 turn and reduces Special Cooldown of your top row by 1 turn.",
        specialName: "Angel Cruising",
    },
    2218: {//Inuarashi
        captain: "Boosts ATK of Cerebral characters by ?x and their HP by ?x",
        special: "Reduces enemies Increased Defense duration by 2 turns and changes own orb into [STR]. If your Captain is a Cerebral character, Locks the chain multiplier at 2.5x for 1 turn.",
        specialName: "Dog Treat",
    },
    2219: {//Inuarashi
        captain: "Boosts ATK of Cerebral characters by 2.25x and their HP by 1.2x",
        special: "Reduces enemies Increased Defense duration by 2 turns and changes own orb into [STR]. If your Captain is a Cerebral character, Locks the chain multiplier at 2.5x for 1 turn.",
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
        special: "Reduces Paralysis duration by 2 turns and adds .25x to Chain multiplier for 1 turn.",
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
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight and boosts ATK of Shooter characters by 2.25x",
        special: "Deals 12 hits of random typeless damage to random enemies and locks all orbs for 1 turn. If HP is above ?% at the time the special is activated, boosts the Color Affinity of Shooter characters by 1.5x for 1 turn.",
        specialName: "Leader's Orders \"Simultaneous Sweep\"",
    },
    2230: {//Sheepshead
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Boosts own ATK by 2x for 1 turn and adds .4x to Chain multiplier for 1 turn.",
        specialName: "Cruel Questioning",
    },
    2231: {//Jack
        captain: "Boosts ATK of Powerhouse characters by 2.5x and their HP by 1.2x and recovers ?x character's RCV in HP at the end of each turn",
        special: "If the HP of the enemy with the highest current HP is above 50%, cuts the current HP of one enemy by 25%, otherwise, deals 120x character's ATK in typeless damage to one enemy.",
        specialName: "The Start of Destruction",
    },
    2232: {//Legend Enel
        captain: "Reduces HP of all characters by 20%, reduces damage received by 13%, boosts chances of getting [RCV] orbs, makes [RCV] orbs \"beneficial\" to all characters, boosts ATK of all characters proportionally to the amount healed in the last turn, by 3.75 at max.",
        captainNotes: "The range of ATK boost is from 2x to 3.75x. The exact boost is calculated as 2 + <HP recovered in the previous turn> * ? and maxes at ?k HP healed. This ignores your max HP, so it doesn't stop counting if you over-heal.<br>#{beneficial}",
        special: "Deals typeless damage to all enemies equal to 25x how much excess healing done before the special is activated.",
        specialNotes: "The excess healing is counted from the last time the special is used and accumulates when you heal more than your maximum HP. For example, if you are at max HP and you heal 1,000 HP, you will add 25k damage to the special. The amount of damage possible caps at 5,000,000 damage.",
        specialName: "Kingdom Come",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] orbs \"beneficial\" for all characters",
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
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for all characters" },
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
        captain: "<b>Always Active: </b>Boosts HP of [STR], [DEX] and [QCK] characters by 1.2x, makes [SEMLA] orbs \"beneficial\" to all characters.<br><b>Standard Captain: </b>Boosts ATK of [STR], [DEX] and [QCK] characters by 3.5x<br><b>Powered Up Captain: </b>Boosts ATK of [STR], [DEX] and [QCK] characters by 4x and reduce damage received by 15%<br><b>Rampage Captain: </b>Boosts own ATK by 10x and own attacks will ignore defensive barriers and buffs, boosts ATK of [STR], [DEX] and [QCK] characters by 3.75x",
        captainNotes: "[SEMLA] orbs replace [RCV] orbs and heal at the end of the enemy turn and can not be swapped by special abilities.<br>In order to Power Up Big Mom, you must eat a [SEMLA] orb and will be powered up the following turn.<br>While in Rampage, Big Mom will always attack a random enemy on her own, even while Binded or Paralyzed, and hit a HUNGRY, which deals the same damage as a PERFECT. This attack occurs after your chain, so Big Mom's attack will not be affected by Chain Limiters, Chain Boosters, or Chain Lockers (still untested with 2 Big Mom captains). You can not activate Big Mom's special while in Rampage. To exit Rampage, you must consume a [SEMLA] orb.",
        special: "Deals 250x character's ATK in Typeless damage to one enemy and changes own orb into [STR]. If Big Mom is your Captain or Friend/Guest Captain, boosts ATK of characters in the top row by 2x and amplifies the effects of orbs for characters in the top row by 2x for 3 turns. If she is a Sailor, boosts ATK of characters in the top row by 2x and amplifies the effects of orbs for characters in the top row by 2x for 1 turn instead",
        specialName: "Temper Tantrum",
    },
    2234: {//Big Mom
        captain: "<b>Always Active: </b>Boosts HP of [STR], [DEX] and [QCK] characters by 1.2x, makes [SEMLA] orbs \"beneficial\" to all characters.<br><b>Standard Captain: </b>Boosts ATK of [STR], [DEX] and [QCK] characters by 3.5x<br><b>Powered Up Captain: </b>Boosts ATK of [STR], [DEX] and [QCK] characters by 4x and reduce damage received by 15%<br><b>Rampage Captain: </b>Boosts own ATK by 10x and own attacks will ignore defensive barriers and buffs, boosts ATK of [STR], [DEX] and [QCK] characters by 3.75x",
        captainNotes: "[SEMLA] orbs replace [RCV] orbs and heal at the end of the enemy turn and can not be swapped by special abilities.<br>In order to Power Up Big Mom, you must eat a [SEMLA] orb and will be powered up the following turn.<br>While in Rampage, Big Mom will always attack a random enemy on her own, even while Binded or Paralyzed, and hit a HUNGRY, which deals the same damage as a PERFECT. This attack occurs after your chain, so Big Mom's attack will not be affected by Chain Limiters, Chain Boosters, or Chain Lockers (still untested with 2 Big Mom captains). You can not activate Big Mom's special while in Rampage. To exit Rampage, you must consume a [SEMLA] orb.",
        special: "Deals 250x character's ATK in Typeless damage to one enemy and changes own orb into [STR]. If Big Mom is your Captain or Friend/Guest Captain, boosts ATK of characters in the top row by 2x and amplifies the effects of orbs for characters in the top row by 2x for 3 turns. If she is a Sailor, boosts ATK of characters in the top row by 2x and amplifies the effects of orbs for characters in the top row by 2x for 1 turn instead",
        specialName: "Temper Tantrum",
        sailor: {
            "base": "None",
            "level1": "Boosts own base ATK by 350 if this character is the last in the chain to attack",
            "level2": "Makes [DEX] and [QCK] orbs \"beneficial\" for this character",
        },
        sailorNotes: "#{beneficial}",
        potential: [
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
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by ?",
                    "Level 2: Boosts base ATK by ?",
                    "Level 3: Boosts base ATK by ?",
                    "Level 4: Boosts base ATK by ?",
                    "Level 5: Boosts base ATK by ?"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a ?% chance to deal ?% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2235: {//Brook
        captain: "Boosts ATK of all characters by 2.75x if HP is above 99% at the start of the turn, by 2x otherwise, cuts the current HP of each enemy by 10% at the end of each turn and revives the team after a GAME OVER once per adventure.",
        captainNotes: "This is not Resilience as you still die, but (still unconfirmed) after revive you will get full HP and your buffs and debuffs will be cleared, similarly to using a gem to revive.",
        special: "Recovers 14,343, reduces damage received by 90% for 1 turn and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for all characters for 2 turns. If the HP of the enemy with the highest Maximum HP is below 434,300, instantly defeats all enemies, otherwise, delays all enemies for 1 turn, cuts the current HP of each enemy by 20%.",
        specialNotes: "#{beneficial}",
        specialName: "Tenacious Shout of the Soul",
    },
    2236: {//Brook
        captain: "Boosts ATK of all characters by 2.75x if HP is above 99% at the start of the turn, by 2x otherwise, cuts the current HP of each enemy by 10% at the end of each turn and revives the team after a GAME OVER once per adventure.",
        captainNotes: "This is not Resilience as you still die, but (still unconfirmed) after revive you will get full HP and your buffs and debuffs will be cleared, similarly to using a gem to revive.",
        special: "Recovers 14,343, reduces damage received by 90% for 1 turn and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for all characters for 2 turns. If the HP of the enemy with the highest Maximum HP is below 434,300, instantly defeats all enemies, otherwise, delays all enemies for 1 turn, cuts the current HP of each enemy by 20%.",
        specialNotes: "#{beneficial}",
        specialName: "Tenacious Shout of the Soul",
        sailor: {
            "base": "None",
            "level1": "Completely resists Paralysis on this character",
            "level2": "Makes [RCV] orbs \"beneficial\" for all characters",
        },
        sailorNotes: "#{beneficial}",
        potential: [
            {
                "Name": "[QCK] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [QCK] characters by ?%",
                    "Level 2: Reduce damage taken from [QCK] characters by ?%",
                    "Level 3: Reduce damage taken from [QCK] characters by ?%",
                    "Level 4: Reduce damage taken from [QCK] characters by ?%",
                    "Level 5: Reduce damage taken from [QCK] characters by ?%"
                ]
            },
            {
                "Name": "[STR] Damage Reduction",
                "description": [
                    "Level 1: Reduce damage taken from [STR] characters by ?%",
                    "Level 2: Reduce damage taken from [STR] characters by ?%",
                    "Level 3: Reduce damage taken from [STR] characters by ?%",
                    "Level 4: Reduce damage taken from [STR] characters by ?%",
                    "Level 5: Reduce damage taken from [STR] characters by ?%"
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
        ]
    },
    2237: {//Smoothie
        captain: "Boosts ATK of all characters by ?x following a chain of Good > Great > PERFECT hits and recovers ? HP at end of each turn",
        special: "Recovers 5,000, removes Poison, reduces Paralysis, Bind, Despair and Burn duration by 2 turns, changes adjacent orbs into Matching Orbs and switches orbs between slots three times",
        specialNotes: "We don't know what Burn is yet.",
        specialName: "Human Juicer",
        sailor: "Boosts base ATK of characters in the top row by 50",
    },
    2238: {//Smoothie
        captain: "Boosts ATK of all characters by 3.5x following a chain of Good > Great > PERFECT hits and recovers 500 HP at end of each turn",
        special: "Recovers 5,000, removes Poison, reduces Paralysis, Bind, Despair and Burn duration by 2 turns, changes adjacent orbs into Matching Orbs and switches orbs between slots three times",
        specialNotes: "We don't know what Burn is yet.",
        specialName: "Human Juicer",
        sailor: {
            "base": "Boosts base ATK of characters in the top row by 50",
            "level1": "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this character if your Captain is a [STR] character",
        },
        sailorNotes: "#{beneficial}",
        potential: [
            {
                "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by ?",
                    "Level 2: Boosts base ATK by ?",
                    "Level 3: Boosts base ATK by ?",
                    "Level 4: Boosts base ATK by ?",
                    "Level 5: Boosts base ATK by ?"
                ]
            },
            {
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Reduce own Special Cooldown by ? turn after the first time this special is used",
                    "Level 2: Reduce own Special Cooldown by ? turns after the first time this special is used",
                    "Level 3: Reduce own Special Cooldown by ? turns after the first time this special is used",
                    "Level 4: Reduce own Special Cooldown by ? turns after the first time this special is used",
                    "Level 5: Reduce own Special Cooldown by ? turns after the first time this special is used"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2239: {//Perospero
        captain: "Boosts ATK of characters with cost 50 or greater by ?x and their HP and RCV by ?x",
        special: "Locks all orbs for 1 turn, cuts the current HP of one enemy by 10%, reduces Special Cooldown of all characters by 1 turn and boosts the Color Affinity of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn",
        specialName: "Candy Maiden",
        sailor: "Restores his own special cooldown by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
    },
    2240: {//Perospero
        captain: "Boosts ATK of characters with cost 50 or greater by 3.5x and their HP and RCV by 1.2x",
        special: "Locks all orbs for 1 turn, cuts the current HP of one enemy by 10%, reduces Special Cooldown of all characters by 1 turn and boosts the Color Affinity of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn",
        specialName: "Candy Maiden",
        sailor: {
            "base": "Restores his own special cooldown by 2 turns when it is rewinded",
            "level1": "Boosts base ATK and HP of all characters by 50 if your Captain is a [STR], [DEX] or [QCK] character",
        },
        sailorNotes: "#{rewind : 2}",
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by ? turn",
                    "Level 2: Reduces No Healing duration by ? turns",
                    "Level 3: Reduces No Healing duration by ? turns",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
            {
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Reduce own Special Cooldown by ? turn after the first time this special is used",
                    "Level 2: Reduce own Special Cooldown by ? turns after the first time this special is used",
                    "Level 3: Reduce own Special Cooldown by ? turns after the first time this special is used",
                    "Level 4: Reduce own Special Cooldown by ? turns after the first time this special is used",
                    "Level 5: Reduce own Special Cooldown by ? turns after the first time this special is used"
                ]
            },
        ]
    },
    2241: {//Cracker
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by ?x and their HP by ?x",
        special: "If your Captain is a [STR], [DEX] or [QCK] character, boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn and amplifies the effect of orbs by 1.75x for [STR], [DEX] and [QCK] characters for 1 turn and changes [BLOCK] orbs into Matching orbs. If your Captain is a [PSY] or [INT] character, boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x for 3 turns and amplifies the effect of orbs by 1.75x for [STR], [DEX] and [QCK] characters for 3 turns and changes all orbs into [G] orbs.",
        specialName: "Infinite Biscuit Soldiers",
        sailor: "Boosts this character's attack against [DEX] characters by 2x",
    },
    2242: {//Cracker
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.75x and their HP by 1.25x",
        special: "If your Captain is a [STR], [DEX] or [QCK] character, boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn and amplifies the effect of orbs by 1.75x for [STR], [DEX] and [QCK] characters for 1 turn and changes [BLOCK] orbs into Matching orbs. If your Captain is a [PSY] or [INT] character, boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x for 3 turns and amplifies the effect of orbs by 1.75x for [STR], [DEX] and [QCK] characters for 3 turns and changes all orbs into [G] orbs.",
        specialName: "Infinite Biscuit Soldiers",
        sailor: {
            "base": "Boosts this character's attack against [DEX] characters by 2x",
            "level1": "Makes [TND] orbs \"beneficial\" for [STR], [DEX] and [QCK] characters",
        },
        sailorNotes: "#{beneficial}",
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [
                    "Level 1: Reduces No Healing duration by ? turn",
                    "Level 2: Reduces No Healing duration by ? turns",
                    "Level 3: Reduces No Healing duration by ? turns",
                    "Level 4: Reduces No Healing duration by ? turns",
                    "Level 5: Reduces No Healing duration by ? turns"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a PERFECT with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 2: If you hit a PERFECT with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a PERFECT with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a PERFECT with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a PERFECT with this character, there is a ?% chance to deal ?% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2243: {//Daifuku
        captain: "Boosts ATK of Powerhouse characters by ?x and reduces damage received by ?%",
        special: "Reduces enemy's Percent Damage Reduction, End of Turn Heal, Increased Defense and Resilience Buffs duration by 2 turns, changes own orb into [QCK] and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Genie-uine Rage Split",
        sailor: "Boosts base HP of all characters by 75",
    },
    2244: {//Daifuku
        captain: "Boosts ATK of Powerhouse characters by 2.5x and reduces damage received by 20%",
        special: "Reduces enemy's Percent Damage Reduction, End of Turn Heal, Increased Defense and Resilience Buffs duration by 2 turns, changes own orb into [QCK] and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Genie-uine Rage Split",
        sailor: {
            "base": "Boosts base HP of all characters by 75",
            "level1": "Makes [DEX] orbs \"beneficial\" for this character",
        },
        sailorNotes: "#{beneficial}",
        potential: [
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
            {
                "Name": "Double Special Activation",
                "description": [
                    "Level 1: Reduce own Special Cooldown by ? turn after the first time this special is used",
                    "Level 2: Reduce own Special Cooldown by ? turns after the first time this special is used",
                    "Level 3: Reduce own Special Cooldown by ? turns after the first time this special is used",
                    "Level 4: Reduce own Special Cooldown by ? turns after the first time this special is used",
                    "Level 5: Reduce own Special Cooldown by ? turns after the first time this special is used"
                ]
            },
        ]
    },
    2246: {//Vivi
        captain: "Boosts ATK of Free Spirit characters proportionally to the crew's current HP, by ?x at max and recovers ?x character's RCV in HP at the end of each turn",
        captainNotes: "#{captainProportional : higher : ? + ? * ((remaining HP) / (total HP)) : 3.25 : ?}",
        special: "Reduces Special Cooldown of all characters by 1 turn and changes [BLOCK] and adjacent orbs into [RCV] orbs. If during that turn, you hit 2 PERFECTS, locks the chain multiplier at 3x for 3 turns.",
        specialName: "The Mark of Friendship",
        sailor: "Reduces Silence duration by 1 turn",
        sailorNotes: "#{beneficial}",
    },
    2247: {//Vivi
        captain: "Boosts ATK of Free Spirit characters proportionally to the crew's current HP, by 3.25x at max and recovers 1.5x character's RCV in HP at the end of each turn",
        captainNotes: "#{captainProportional : higher : ? + ? * ((remaining HP) / (total HP)) : 3.25 : ?}",
        special: "Reduces Special Cooldown of all characters by 1 turn and changes [BLOCK] and adjacent orbs into [RCV] orbs. If during that turn, you hit 2 PERFECTS, locks the chain multiplier at 3x for 3 turns.",
        specialName: "The Mark of Friendship",
        sailor: {
            "base": "Reduces Silence duration by 1 turn",
            "level1": "Makes [RCV] orbs \"beneficial\" for all characters",
        },
        sailorNotes: "#{beneficial}",
    },
    2248: {//Daifuku
        captain: "Boosts ATK of Slasher and Powerhouse characters by 2.5x at the start of the chain and their HP by 1.25x, by 2.85x after scoring 3 PERFECTs in a row.",
        special: [
            {
                "description": "Deals ?x character's ATK in [DEX] damage to all enemies that will ignore damage negating abilities and barriers. If your crew has 4 or more characters with [STR] or [DEX] orbs, Delays all enemies for ? turns and adds .?x to Chain multiplier for ? turns. If your crew has 4 or more characters with [PSY] or [INT] orbs, boosts the Color Affinity of all characters by ?x for ? turns and makes [PSY] and [INT] orbs \"beneficial\" to all characters for ? turns.",
                "cooldown": [ null, null ],
            },
            {
                "description": "Deals 75x character's ATK in [DEX] damage to all enemies that will ignore damage negating abilities and barriers. If your crew has 4 or more characters with [STR] or [DEX] orbs, Delays all enemies for 2 turns and adds .8x to Chain multiplier for 2 turns. If your crew has 4 or more characters with [PSY] or [INT] orbs, boosts the Color Affinity of all characters by 1.75x for 2 turns and makes [PSY] and [INT] orbs \"beneficial\" to all characters for 2 turns.",
                "cooldown": [ null, null ],
            },
        ],
        specialName: "The Genie's Flashy Strike",
        sailor: "If this character has a [DEX] orb and you hit a PERFECT with him, keep his [DEX] orb for the next turn",
    },
    2249: {//Daifuku
        captain: "Boosts ATK of Slasher and Powerhouse characters by 2.5x at the start of the chain and their HP by 1.25x, by 2.85x after scoring 3 PERFECTs in a row.",
        special: [
            {
                "description": "Deals ?x character's ATK in [DEX] damage to all enemies that will ignore damage negating abilities and barriers. If your crew has 4 or more characters with [STR] or [DEX] orbs, Delays all enemies for ? turns and adds .?x to Chain multiplier for ? turns. If your crew has 4 or more characters with [PSY] or [INT] orbs, boosts the Color Affinity of all characters by ?x for ? turns and makes [PSY] and [INT] orbs \"beneficial\" to all characters for ? turns.",
                "cooldown": [ null, null ],
            },
            {
                "description": "Deals 75x character's ATK in [DEX] damage to all enemies that will ignore damage negating abilities and barriers. If your crew has 4 or more characters with [STR] or [DEX] orbs, Delays all enemies for 2 turns and adds .8x to Chain multiplier for 2 turns. If your crew has 4 or more characters with [PSY] or [INT] orbs, boosts the Color Affinity of all characters by 1.75x for 2 turns and makes [PSY] and [INT] orbs \"beneficial\" to all characters for 2 turns.",
                "cooldown": [ null, null ],
            },
        ],
        specialName: "The Genie's Flashy Strike",
        sailor: {
            "base": "If this character has a [DEX] orb and you hit a PERFECT with him, keep his [DEX] orb for the next turn",
            "level1": "Makes [DEX] orbs \"beneficial\" for Slasher characters",
        },
        sailorNotes: "#{beneficial}",
    },


    
    
    


    2499: {//Doflamingo Raid v2
        captain: "Boosts ATK of Driven and Cerebral characters by 2.5x when HP is 50% or below, 1.5x otherwise",
        special: "Randomizes all non-matching orbs, including [BLOCK] slots and locks all orbs for 1 turn. If Captain is a Cerebral or Driven character, increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 2 turns",
        specialName: "Athlete",
    },
    2500: {//Doflamingo Raid v2
        captain: "Boosts ATK of Driven and Cerebral characters by 3x when HP is 50% or below, 1.5x otherwise",
        special: "Randomizes all non-matching orbs, including [BLOCK] slots and locks all orbs for 1 turn. If Captain is a Cerebral or Driven character, increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 2 turns",
        specialName: "Athlete",
    },

};

module.exports.db5 = db5;
