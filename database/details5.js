//Copied from the optc-db.github.io database files. All credit goes to them.
var g4v2captain = "Boosts HP of all characters by 1.25x, boosts chances of getting [STR], [QCK], and [PSY] orbs. <br> <b>Action:</b> If Gear Gauge is at 4/8 or more, change between Gears 2nd and 3rd. If it is maxed, change between Gears 2nd, 3rd and 4th (Boundman). Each Gear has a different Captain Ability: \n - __G2:__ Boosts ATK of all characters by 3x, slightly boosts chances of getting [RCV] orbs and makes [QCK] orbs \"beneficial\" to all characters. \n - __G3:__ Boosts ATK of all characters by 3.5x after 2 consecutive PERFECTs, boosts chances of getting [RCV] orbs and makes [STR] orbs \"beneficial\" to all characters \n - __G4 Boundman:__ Boosts ATK of all characters by 4x, reduce damage received by 20%, boosts chances of getting [RCV] orbs and makes [STR], [QCK] and [PSY] orbs \"beneficial\" to all characters \n - __G4 Tankman:__ Boosts own ATK by 4.25x, boosts ATK of all other characters by 4x, reduce damage received by 50% and makes [STR], [QCK] and [PSY] orbs \"beneficial\" to all characters.";
var g4v2special = "Deals 150x character's ATK in Typeless damage to all enemies, boosts ATK of all characters by 2x for 1 turn, makes [RCV] and [TND] orb \"beneficial\" for all characters for 3 turns. If Luffy is Captain or Friend/Guest Captain, transform into Gear 4th. \n If you use this special after consuming 10 [RCV] orbs, transform into Tankman, otherwise transform into Boundman";

var db5 = {

    2001: {//6+ PSY Law
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
            { "description": "Acquire Potential 3: Critical Hit" },
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
                    "Level 1: Reduce damage taken from [INT] characters by 1%",
                    "Level 2: Reduce damage taken from [INT] characters by 2%",
                    "Level 3: Reduce damage taken from [INT] characters by 3%",
                    "Level 4: Reduce damage taken from [INT] characters by 5%",
                    "Level 5: Reduce damage taken from [INT] characters by 7%"
                ]
            },
            {
                "Name": "Pinch Healing",
                "description": [
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 25% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ],
    },
    2014: {//Raid Lucci
        captain: "Boosts ATK of Fighter characters by 2.25x and set crew's RCV to 0. If you defeated an enemy in the last turn, boosts ATK of Fighter characters by 2.75x instead and boosts ATK of all other characters by 1.2x",
        special: "Deals 100x character's ATK in INT damage to one enemy and if there is only one enemy on the stage, delays that enemy for 1 turn and boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Sai Dai Rin: Rokuogan (Ultimate Radius: Rokuogan)",
    },
    2015: {//Raid Lucci
        captain: "Boosts ATK of Fighter characters by 2.5x and set crew's RCV to 0. If you defeated an enemy in the last turn, boosts ATK of Fighter characters by 3x instead and boosts ATK of all other characters by 1.2x",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Deals 100x character's ATK in INT damage to one enemy and if there is only one enemy on the stage, delays that enemy for 1 turn and boosts ATK against delayed enemies by 1.75x for 1 turn",
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
        captain: "Boosts ATK of Free Spirit characters by 2x and their HP by 1.2x at the start of the chain, by 2.6x after the 3rd Perfect in a row",
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
        captain: "Boosts ATK of [STR] and [INT] characters by 3.25x and makes [STR] and [INT] orbs \"beneficial\" to [STR] and [INT] characters. Deals up to 500x character's ATK in Typeless damage to one enemy at the end of each turn depending on how many Perfects scored that turn.",
        captainNotes: "End of turn damage is based on how many Perfects you hit this turn: 0 Perfects - 0x ATK; 1 Perfect - 5x ATK; 2 Perfects - 13x ATK; 3 Perfects - 32x ATK; 4 Perfects - 80x ATK; 5 Perfects - 200x ATK; 6 Perfects - 500x ATK<br>#{beneficial}",
        special: "Randomizes all orbs, including [BLOCK] orbs, into either [STR] or [INT] orbs and amplifies the effect of orbs on [STR] and [INT] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Scorched Earth",
    },
    2023: {//Akainu V2
        captain: "Boosts ATK of [STR] and [INT] characters by 3.25x and makes [STR] and [INT] orbs \"beneficial\" to [STR] and [INT] characters. Deals up to 500x character's ATK in Typeless damage to one enemy at the end of each turn depending on how many Perfects scored that turn.",
        captainNotes: "End of turn damage is based on how many Perfects you hit this turn: 0 Perfects - 0x ATK; 1 Perfect - 5x ATK; 2 Perfects - 13x ATK; 3 Perfects - 32x ATK; 4 Perfects - 80x ATK; 5 Perfects - 200x ATK; 6 Perfects - 500x ATK<br>#{beneficial}",
        special: "Randomizes all orbs, including [BLOCK] orbs, into either [STR] or [INT] orbs and amplifies the effect of orbs on [STR] and [INT] characters by 2.25x for 1 turn",
        specialName: "The Natural Disaster's Final Attack: Scorched Earth",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of [STR] and [INT] characters by 100",
            "level2": "Makes [PSY] and [QCK] orbs \"beneficial\" for all characters",
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
            { "description": "Acquire Sailor Ability 2: Makes [PSY] and [QCK] orbs \"beneficial\" for all characters" },
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
            "level2": "Makes [STR] and [INT] orbs \"beneficial\" for all characters",
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
            { "description": "Acquire Sailor Ability 2: Makes [STR] and [INT] orbs \"beneficial\" for all characters" },
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
            "level1": "If this character has a [PSY] orb and you hit a Perfect with her, keep her [PSY] orb for the next turn",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Sailor Ability 1: If this character has a [PSY] orb and you hit a Perfect with her, keep her [PSY] orb for the next turn" },
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
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, Boosts ATK of [QCK] and [PSY] characters by 2x",
        special: "Reduces Despair and ATK DOWN duration by 4 turns. If your crew has 4 or more [QCK] or [PSY] characters, amplifies the effect of orbs by 2x for 1 turn and makes [RCV] and [TND] orb \"beneficial\" for all characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Instant Suppression",
        sailor: "Makes [DEX] orbs \"beneficial\" for this character",
        sailorNotes: "#{beneficial}",
    },
    2029: {//Sengoku
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, Boosts ATK of [QCK] and [PSY] characters by 2.5x and their HP by 1.2x",
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
        captain: "Boosts ATK and HP of PSY characters by 0.5x",
        special: "Boosts ATK of all characters by 1.5x for 1 turn. If your Captain is a [PSY] character, amplifies the effect of orbs by 1.5x for 1 turn, adds .3x to Chain multiplier for 1 turn, adds 20x character's ATK as Additional Typeless Damage for 1 turn and reduces damage received by 40% for 1 turn.",
        specialName: "The Heavy Tank's Critical Breakthrough",
    },
    2033: {//Luffy Tankman
        captain: "Boosts ATK of PSY characters by 2.5x and their HP by 1.5x",
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
        captain: "Boosts ATK of Fighter characters by 2.5x at the start of the chain, by 3.75x after scoring 4 Perfects in a row.",
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
        captain: "Not Translated",
        special: "Recovers 3,960 HP, reduces enemies' ATK Up and End of Turn Damage/Percent Cut Buff duration by 7 turns and reduces damage received by 80% for 1 turn.",
        sailor: {
            "base": "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a [QCK] or [PSY] character",
            "base2": "Boosts base ATK, HP and RCV of [QCK] and [PSY] characters by 40",
        },
        specialName: "Glorious Scenery",
    },
    2039: {//Boa Hancock
        captain: "Boosts ATK of [QCK] and Free Spirit characters by 1.75x",
        captainNotes: "The bonus is cumulative. [QCK] Free Spirit characters get a 3.0625x bonus.",
        special: "Recovers 3,960 HP, reduces enemies' ATK Up and End of Turn Damage/Percent Cut Buff duration by 7 turns and reduces damage received by 80% for 1 turn.",
        sailor: {
            "base": "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a [QCK] or [PSY] character",
            "base2": "Boosts base ATK, HP and RCV of [QCK] and [PSY] characters by 40",
        },
        sailorNotes: "#{beneficial}",
        specialName: "Glorious Scenery",
    },
    2040: {//Whitebeard
        captain: "Not Translated",
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
        captain: "Not Translated",
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
        sailor: "If this character has a [STR] orb and you hit a Perfect with him, keep his [STR] orb for the next turn",
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
        limit: "Not Translated",
        potential: [
            {
               "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by ?",
                    "Level 2: Boosts base ATK by ?",
                    "Level 3: Boosts base ATK by ?",
                    "Level 4: Boosts base ATK by ?",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal ?% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
         ],
        potentialNotes: "#{enrage}"
    },

    
    
    2051: {//Pica
        captain: "If you have 5 or more Fighter characters in your crew, boosts ATK of Fighter characters by 2x and reduces damage received by 5%",
        special: "Deals 35x character's ATK in QCK damage to one enemy, boosts ATK of Fighter characters by 1.75x for 2 turns. If Pica is your Captain or Friend/Guest Captain, Reduces damage received by 20% for 1 turn. If he is a Sailor, Increases damage received by 2x for 1 turn instead",
        specialName: "Bitestone",
    },
    2052: {//Pica
        captain: "If you have 5 or more Fighter characters in your crew, boosts ATK of Fighter characters by 2.5x and their HP by 1.2, and reduces damage received by 10%",
        special: "Deals 35x character's ATK in QCK damage to one enemy, boosts ATK of Fighter characters by 1.75x for 2 turns. If Pica is your Captain or Friend/Guest Captain, Reduces damage received by 20% for 1 turn. If he is a Sailor, Increases damage received by 2x for 1 turn instead",
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
        special: "Deals 15x character's ATK in [INT] damage to one enemy, changes captain's orb into a [PSY] orb and makes [PSY] orb \"beneficial\" for all characters for 1 turn.",
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
        limit: "Not Translated",
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
                    "Level 1: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 25% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 35% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 50% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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
        special: "Deals 60x character's ATK in [INT] damage to all enemies, changes all orbs on Fighter characters into matching orbs and reduces enemies Percent Damage Reduction and Increased Defense duration by 5 turns.",
    },
    2067: {//Tashigi
        captain: "Boosts ATK of Slasher characters by 2x at the start of the chain, by 2.5x after scoring 3 Perfects in a row and recovers 1.25x character's RCV in HP at the end of each turn",
        special: "Reduces ATK DOWN and Increase Damage Taken duration by 5 turns, changes [BLOCK], [STR] and [QCK] orbs into Matching orbs and locks the chain multiplier at 2.75x for 3 turns",
        specialName: "Spinning Jump Attack",
        sailor: "Boosts base ATK, HP and RCV for Slasher characters by 50",
    },
    2068: {//Tashigi
        captain: "Boosts ATK of Slasher characters by 2.75x at the start of the chain, by 3.4375x after scoring 3 Perfects in a row and recovers 1.25x character's RCV in HP at the end of each turn",
        special: "Reduces ATK DOWN and Increase Damage Taken duration by 5 turns, changes [BLOCK], [STR] and [QCK] orbs into Matching orbs and locks the chain multiplier at 2.75x for 3 turns",
        specialName: "Spinning Jump Attack",
        sailor: {
            "base": "Boosts base ATK, HP and RCV for Slasher characters by 50",
            "level1": "Makes [PSY] orbs \"beneficial\" for Slasher characters",
        },
        sailorNotes: "#{beneficial}",
        limit: "Not Translated",
        potential: [
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 2% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 6% of this character's attack in extra damage"
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
        limit: "Not Translated",
        potential: [
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
        limit: "Not Translated",
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
                    "Level 1: Reduces Slot Bind duration by 3 turn on this character",
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
                    "Level 2: Reduces No Healing duration by 2 turn",
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
    },
    2078: {//Carrot
        captain: "Boosts ATK of Fighter characters by 2.5x and boosts HP of Free Spirit characters by 1.2x",
        special: "Reduces Paralysis and Despair duration by 4 turns, delays all enemies for 1 turn, changes [STR], [DEX], [QCK], [INT] and [PSY] orbs into [PSY] orbs and boosts ATK against enemies with reduced defense by 1.75x for 1 turn",
        specialName: "Eleclaw",
        sailor: {
            "base": "Completely resists Paralysis on this character",
            "level1": "Boosts base ATK and HP of Fighter characters by 40",
        },
        limit: "Not Translated",
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
                    "Level 2: If you hit a perfect with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2079: {//Brook
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2x",
        special: "Deals 8 hits of of 20x character's ATK in typeless damage to random enemies. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, Changes [BLOCK] orbs into Matching orbs and boosts the Color Affinity of all characters by 1.75x for 1 turn",
        specialName: "The Spherical Song that Resonates the Soul",
    },
    2080: {//Brook
        captain: "Boosts ATK of Slasher and Free Spirit characters by 2x and boosts chain multiplier by 1.5",
        special: "Deals 8 hits of of 20x character's ATK in typeless damage to random enemies. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, Changes [BLOCK] orbs into Matching orbs and boosts the Color Affinity of all characters by 1.75x for 1 turn",
        specialName: "The Spherical Song that Resonates the Soul",
        sailor: {
            "base": "If this character has a [STR] orb and you hit a Perfect with him, keep his [STR] orb for the next turn",
            "level1": "Makes [RCV] and [TND] orbs \"beneficial\" for himself",
        },
        sailorNotes: "#{beneficial}",
        limit: "Not Translated",
        potential: [
            {
               "Name": "Enrage",
                "description": [
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by ?",
                    "Level 3: Boosts base ATK by ?",
                    "Level 4: Boosts base ATK by ?",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
            {
                "Name": "Critical Hit",
                "description": [
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    2081: {//Pedro
        captain: "Boosts ATK of Slasher characters by 2.25x",
        special: "Cuts the current HP of one enemy by 10%. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 1.75x for 1 turn and boosts the ATK of all characters by 1.75x for 1 turn",
        specialName: "Risky Diversion",
    },
    2082: {//Pedro
        captain: "Boosts ATK of Slasher characters by 2.75x and reduces damage received by 7%",
        special: "Cuts the current HP of one enemy by 10%. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 1.75x for 1 turn and boosts the ATK of all characters by 1.75x for 1 turn",
        specialName: "Risky Diversion",
        sailor: {
            "base": "Boosts base ATK of Slasher characters by 40",
            "level1": "Makes [DEX] orbs \"beneficial\" for himself",
        },
        sailorNotes: "#{beneficial}",
        limit: "Not Translated",
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
                    "Level 2: If you hit a perfect with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ?% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    2083: {//Reiju
        captain: "Boosts ATK of [DEX] and [QCK] characters by ?x",
        special: "Removes Poison, changes left column orbs into Matching orbs and amplifies the effect of orbs on [DEX], [QCK] and [PSY] characters by 1.75x for 1 turn",
        specialName: "Celebration at the Flower Garden",
    },
    2084: {//Reiju
        captain: "Boosts ATK of [DEX] and [QCK] characters by 2.25x",
        special: "Removes Poison, changes left column orbs into Matching orbs and amplifies the effect of orbs on [DEX], [QCK] and [PSY] characters by 1.75x for 1 turn",
        specialName: "Celebration at the Flower Garden",
    },
    2085: {//Sanji
        captain: "Boosts ATK of [DEX] and [QCK] characters by ?x",
        special: "Recovers 3,000 HP, changes right column orbs into Matching orbs and boosts ATK of [DEX], [QCK] and [INT] characters by 1.75x for 1 turn",
        specialName: "A Full Bloom Bright Smile",
    },
    2086: {//Sanji
        captain: "Boosts ATK of [DEX] and [QCK] characters by 2.25x",
        special: "Recovers 3,000 HP, changes right column orbs into Matching orbs and boosts ATK of [DEX], [QCK] and [INT] characters by 1.75x for 1 turn",
        specialName: "A Full Bloom Bright Smile",
    },
    2087: {//Pizza Luffy
        captain: "Boosts ATK of all characters by 2x. If you use \"Gomu Gomu no Octopus Stamp: Banquet\"  THIS LUFFY boosts ATK of all characters by 2.6x instead for 3 turns",
        captainNotes: "Using Luffy's special will change his own captain boost to 2.6x. If both Luffy's specials are used, the total ATK boost will be 6.76x",
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
        special: "Reduces Bind duration by 3 turns. If HP is full at the time the special was activated, boosts ATK of all characters by 1.5x for 1 turn.",
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
        
    2110: {//Kid
        captain: "Boosts ATK of Striker and Shooter characters by ?x and deals ?x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Deals 5 hits of random [DEX] damage to random enemies and reduces Special Cooldown of Striker and Shooter specials by 2 turns. If your Captain is a Striker or Shooter character, deals 350x character's ATK as [DEX] damage to all enemies at the end of the turn for 2 turns",
        specialNotes: "#{randomHits : 5}",
        specialName: "Coliseum Kid V2 Special",
    },
    2111: {//Kid
        captain: "Boosts ATK of Striker and Shooter characters by 2.5x and deals 5x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Deals 5 hits of random [DEX] damage to random enemies and reduces Special Cooldown of Striker and Shooter specials by 2 turns. If your Captain is a Striker or Shooter character, deals 350x character's ATK as [DEX] damage to all enemies at the end of the turn for 2 turns",
        specialNotes: "#{randomHits : 5}",
        specialName: "Coliseum Kid V2 Special",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of [DEX] characters by 20",
            "level2": "Boosts base ATK of Striker characters by 30",
        },
    },


    


    2200: {//Doflamingo Raid v2
        captain: "Boosts ATK of Driven and Cerebral characters by 2.5x when HP is 50% or below, 1.5x otherwise",
        special: "Randomizes all non-matching orbs, including [BLOCK] slots and locks all orbs for 1 turn. If Captain is a Cerebral or Driven character, increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 2 turns",
        specialName: "Athlete",
    },
    2201: {//Doflamingo Raid v2
        captain: "Boosts ATK of Driven and Cerebral characters by 3x when HP is 50% or below, 1.5x otherwise",
        special: "Randomizes all non-matching orbs, including [BLOCK] slots and locks all orbs for 1 turn. If Captain is a Cerebral or Driven character, increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 2 turns",
        specialName: "Athlete",
    },

};

module.exports.db5 = db5;
