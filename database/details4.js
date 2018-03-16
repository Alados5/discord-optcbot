//Copied from the optc-db.github.io database files. All credit goes to them.

var db4 = {

    1501: {//Caribou
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of characters with cost 15 or less by 2x",
        special: "Reduces crew's current HP by 50%, boosts ATK of all characters by 1.3x for 1 turn",
        specialName: "Conviction of God's Will",
    },
    1502: {//Coribou
        captain: "Reduces damage received from [PSY] and [INT] enemies by 30%",
        special: "For Driven characters, randomizes non-matching orbs",
        specialName: "Confession Burial",
    },
    1503: {//Hammond
        captain: "Boosts ATK of Powerhouse characters proportionally to the crew's current HP",
        captainNotes: "#{captainProportional : lower : ??? + ??? * (1 - (remaining HP) / (total HP)) : ??? : 2.25}",
        special: "Changes own orb into [QCK] and changes adjacent orbs into [EMPTY] orbs",
        specialName: "Absurd Invitation",
    },
    1504: {//Vander Decken IX
        captain: "Boosts ATK of Driven characters by 2x. After scoring 3 Perfects in a row, boosts ATK of Driven characters by 2.4x instead.",
        special: "Changes the orbs in the middle row into [EMPTY] orbs and deals 20x character's ATK as [DEX] damage to all enemies at the end of the turn for 2 turns",
        specialName: "Inescapable Pursuit",
    },
    1505: {//Hody Jones
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Powerhouse characters by 2.25x if HP is below 30% at the start of the turn",
        special: "Deals 15x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers, makes Perfects harder to hit for 1 turn, reduces crew's current HP by 90%, boosts own ATK by 2.25x for 1 turn.",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Shark Arrows",
    },
    1506: {//Hody Jones
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Powerhouse characters by 2.5x if HP is below 30% at the start of the turn, 2.25x otherwise",
        special: "Deals 15x character's ATK in [STR] damage to all enemies that will ignore damage negating abilities and barriers, makes Perfects harder to hit for 1 turn, reduces crew's current HP by 90%, boosts own ATK by 2.25x for 1 turn.",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Shark Arrows",
    },
    1507: {//White Day Sanji
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.3x",
        captainNotes: "Boosts stack, so a Fighter/Powerhouse character gets 1.69x ATK",
        special: "Deals 15x character's ATK in [QCK] damage to one enemy, boosts ATK of Fighter characters by 1.75x for 1 turn",
        sailor: "Boosts base ATK of all characters by 15",
        specialName: "Diable Jambe - Concassé Baked",
    },
    1508: {//White Day Sanji
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.5x. Recovers 2x character's RCV in HP at the end of each turn",
        captainNotes: "Boosts stack, so a Fighter/Powerhouse character gets 2.25x ATK",
        special: "Deals 15x character's ATK in [QCK] damage to one enemy, boosts ATK of Fighter characters by 1.75x for 1 turn",
        sailor: "Boosts base ATK of all characters by 15",
        specialName: "Diable Jambe - Concassé Baked",
    },
    1509: {//Haruta
        captain: "Reduces cooldown of Slasher and Cerebral specials by 1 turn at the start of the fight. Boosts ATK of [INT] characters by 2x.",
        special: "Deals 12x character's ATK in INT damage to one enemy and reduces damage received from PSY enemies by 80%.",
        specialName: "Honorable Blade",
        sailor: "Reduces Silence duration against this unit by 2 turns",
        sailorNotes: "#{silence}",
    },
    1510: {//Speed Jiru
        captain: "Boosts ATK of Driven and Striker characters by 2x",
        special: "Deals 12,500 fixed damage to one enemy",
        specialName: "Acceleration Lance",
        sailor: "When HP is above 70% at the start of the turn, boosts ATK of Striker characters by 20",
    },
    1511: {//Atmos
        captain: "Boosts ATK of PSY characters by 2x",
        special: "Reduces Despair duration by 3 turns, boosts own ATK by 1.5x for 1 turn",
        specialName: "Buffalo Roar",
        sailor: "Boosts base ATK of Powerhouse characters by 20 if your captain is a Powerhouse character",
    },
    1512: {//Kingdew
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x",
        special: "Removes Poison, boosts ATK of Powerhouse characters by 1.5x for 1 turn if HP is below 30%",
        specialName: "Enlightened Spirit",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit if your captain is a Powerhouse character",
        sailorNotes: "#{beneficial}",
    },
    1513: {//Anniversary Sanji
        captain: "Boosts ATK of Fighter characters by 1.75x and RCV of Powerhouse characters by 1.2x",
        special: "Randomizes all orbs, including [BLOCK] orbs, reduces Special Cooldown of 1 character by 1 turn",
        specialName: "Unfamiliar Escort",
    },
    1514: {//Anniversary Sanji
        captain: "Boosts ATK of Fighter characters by 2.5x and RCV of Powerhouse characters by 1.2x",
        special: "Randomizes all orbs, including [BLOCK] orbs, reduces Special Cooldown of 1 character by 1 turn",
        specialName: "Unfamiliar Escort",
    },
    1515: {//White Day Brook
        captain: "Boosts ATK of [STR] and [QCK] characters by 1.5x",
        special: "Cuts the current HP of each enemy by 10% and makes [RCV] orbs \"beneficial\" for all characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Three-Verse Humming: Arrow-Notch Slash - Hail",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1516: {//White Day Brook
        captain: "Boosts ATK of [STR] and [QCK] characters by 2x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Cuts the current HP of each enemy by 10% and makes [RCV] orbs \"beneficial\" for all characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Three-Verse Humming: Arrow-Notch Slash - Hail",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1517: {//Raid Bellamy
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Cuts the current HP of one enemy by 10%, makes [PSY] and [INT] orbs \"beneficial\" for 1 turn and amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Spring Hopper - Bullet",
    },
    1518: {//Raid Bellamy
        captain: "Boosts ATK of Driven characters by 2.5x",
        special: "Cuts the current HP of one enemy by 10%, makes [PSY] and [INT] orbs \"beneficial\" for 1 turn and amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Spring Hopper - Bullet",
    },
    1519: {//Dadan
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of Slasher characters by 1.5x",
        special: "Cuts the current HP of one enemy by 10%, if HP is full at the time the special was activated, changes top row orbs into matching orbs",
        specialName: "Break by the Fireplace",
    },
    1520: {//Dadan
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of Slasher characters by 2x",
        special: "Cuts the current HP of one enemy by 10%, if HP is full at the time the special was activated, changes top row orbs into matching orbs",
        specialName: "Break by the Fireplace",
    },
    1521: {//Dogra
        captain: "Boosts ATK of [QCK] and Slasher characters by 1.2x",
        captainNotes: "The bonus is cumulative. [QCK] Slasher characters get a 1.44x bonus.",
        special: "Reduces Despair duration by 1 turn, recovers 1,000 HP at the end of each turn for 2 turns",
        specialName: "Affectionate Circumstances",
    },
    1522: {//Ace
        captain: "Boosts ATK of [DEX] characters by 1.75x and their HP by 1.2x",
        special: "Removes blindness, boosts own ATK by 1.75x for 1 turn",
        specialName: "Demon's Temper",
    },
    1523: {//Spring Chopper
        captain: "Boosts ATK of [PSY] characters by 1.75x and recovers 1,000 HP at end of each turn",
        special: "Changes top row orbs into matching orbs, changes any other [BLOCK] or Badly Matching orbs into [G] orbs",
        specialName: "The Life Risked for the 'Sakura' Miracle",
        sailor: "Boosts amount healed from [RCV] orbs by 124 each",
    },
    1524: {//Spring Chopper
        captain: "Boosts ATK of [PSY] characters by 2.25x and recovers 1,224 HP at end of each turn",
        special: "Changes top row orbs into matching orbs, changes any other [BLOCK] or Badly Matching orbs into [G] orbs",
        specialName: "The Life Risked for the 'Sakura' Miracle",
        sailor: "Boosts amount healed from [RCV] orbs by 124 each",
    },
    1525: {//Sulieman
        captain: "Boosts ATK of Slasher characters by 3.25x, reduces his own ATK multiplier by 0.0625x at the end of each turn until it is 2x",
        special: "Deals 3 hits of random typeless damage to random enemies, delays all enemies for 1 turn, boosts ATK against delayed enemies by 1.3x for 2 turns",
        specialNotes: "#{randomHits : 3}<br>#{random : 50,000 : 150,000 : per hit}",
        specialName: "Sorrowful Execution",
    },
    1526: {//Arlong
        captain: "Boosts ATK of [INT] characters by 1.75x",
        special: [
            {
                "description": "Reduces Special Cooldown of your top row by 1 turn, boosts ATK of the characters in the top row by 1.5x for 1 turn",
                "cooldown": [ 16, 7 ],
            },
            {
                "description": "Reduces Special Cooldown of your top row by 1 turn, boosts ATK of the characters in the top row by 1.75x for 1 turn",
                "cooldown": [ 21, 12 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Just 'Water Play'",
    },
    1527: {//Arlong
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of [INT] characters by 2x",
        special: [
            {
                "description": "Reduces Special Cooldown of your top row by 1 turn, boosts ATK of the characters in the top row by 1.5x for 1 turn",
                "cooldown": [ 16, 7 ],
            },
            {
                "description": "Reduces Special Cooldown of your top row by 1 turn, boosts ATK of the characters in the top row by 1.75x for 1 turn",
                "cooldown": [ 21, 12 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Just 'Water Play'",
    },
    1528: {//Blenheim
        captain: "Boosts ATK of Powerhouse characters by 2.25x",
        special: "Reduces Despair duration by 2 turns, makes STR, DEX and QCK orbs \"beneficial\" to Powerhouse characters for 1 turn if HP is below 30% at the start of the turn",
        specialNotes: "#{beneficial}",
        sailor: "Makes [TND] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        specialName: "Australian Army Aid Blade",
    },
    1529: {//Cavendish
        captain: "Boosts ATK of all characters by 1.5x, but boosts his OWN attack by 3x",
        special: "For Slasher characters, if HP is above 50% at the time the special was activated, amplifies the effects of orbs by 2.25x for 1 turn, 2x otherwise",
        sailor: "Reduces ATK of all characters by .5x if your captain is a [STR] or [QCK] character",
        specialName: "Blue Bird Sword",
    },
    1530: {//Cavendish
        captain: "Boosts ATK of all characters by 1.75x, but boosts his OWN attack by 3.5x",
        special: "For Slasher characters, if HP is above 50% at the time the special was activated, amplifies the effects of orbs by 2.25x for 1 turn, 2x otherwise",
        sailor: "Reduces ATK of all characters by .5x if your captain is a [STR] or [QCK] character",
        specialName: "Blue Bird Sword",
    },
    1531: {//Legend Usopp
        captain: "Boosts ATK of all characters by 1.5x if HP is below 50% or by 1.75x if HP is below 30% at the start of the turn. Makes [STR], [DEX], [QCK], [PSY], [INT], [RCV] and [TND] orbs \"beneficial\" to all characters.",
        captainNotes: "#{beneficial}",
        special: [
            {
                "description": "Delays all enemies for 3 turns",
                "cooldown": [ 13, 10 ],
            },
            {
                "description": "Delays all enemies for 4 turns, adds 0.2x to Chain multiplier for 4 turns",
                "cooldown": [ 18, 15 ],
            },
            {
                "description": "Delays all enemies for 5 turns, adds 0.3x to Chain multiplier for 4 turns",
                "cooldown": [ 24, 21 ],
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Completely resists Blindness",
        specialName: "Long-Range Attack: Bagworm",
    },
    1532: {//Legend Usopp
        captain: "Boosts ATK of all characters by 1.5x if HP is below 50% or by 1.75x if HP is below 30% at the start of the turn. Makes [STR], [DEX], [QCK], [PSY], [INT], [RCV] and [TND] orbs \"beneficial\" to all characters.",
        captainNotes: "#{beneficial}",
        special: [
            {
                "description": "Delays all enemies for 3 turns",
                "cooldown": [ 13, 10 ],
            },
            {
                "description": "Delays all enemies for 4 turns, adds 0.2x to Chain multiplier for 4 turns",
                "cooldown": [ 18, 15 ],
            },
            {
                "description": "Delays all enemies for 5 turns, adds 0.3x to Chain multiplier for 4 turns",
                "cooldown": [ 24, 21 ],
            },
        ],
        specialNotes: "#{stages}",
        sailor: {
            "base": "Completely resists Blindness",
            "level1": "Boosts base HP of Shooter characters by 100",
        },
        specialName: "Long-Range Attack: Bagworm",
        limit: [
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Shooter characters by 100" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
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
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers if HP is above 30%"
                ]
            },
        ]
    },
    1533: {//Rayleigh
        captain: "Boosts ATK of [QCK] characters by 2x and their HP by 1.2x at the start of the chain, by 2.5x after the 4th Perfect in a row.",
        special: "Changes all orbs, including [BLOCK] orbs, to [QCK] orbs",
        sailor: "Makes [STR], [INT] and [DEX] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        specialName: "The Teacher's Final Ordeal",
    },
    1534: {//Rayleigh
        captain: "Boosts ATK of [QCK] characters by 2.5x and their HP by 1.2x at the start of the chain, by 3x after the 4th Perfect in a row.",
        special: "Changes all orbs, including [BLOCK] orbs, to [QCK] orbs",
        specialName: "The Teacher's Final Ordeal",
        sailor: {
            "base": "Makes [STR], [INT] and [DEX] orbs \"beneficial\" for this unit",
            "level1": "Boosts base ATK, HP and RCV of all characters by 30",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of all characters by 30" },
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
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1535: {//Duval
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of [PSY] characters by 2.5x if they have matching orbs",
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of PSY characters by 1.75x for 1 turn",
        sailor: "Makes [INT] orbs \"beneficial\" for [PSY] characters",
        sailorNotes: "#{beneficial}",
        specialName: "Prideful Memories",
    },
    1536: {//Duval
        captain: "Reduces cooldown of all specials by 3 turns at the start of the fight, boosts ATK of [PSY] characters by 3x if they have matching orbs",
        special: "Reduces damage received by 50% for 1 turn, boosts ATK of PSY characters by 1.75x for 1 turn",
        specialName: "Prideful Memories",
        sailor: {
            "base": "Makes [INT] orbs \"beneficial\" for [PSY] characters",
            "level1": "Boosts base ATK and HP of [PSY] characters by 50",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of [PSY] characters by 50" },
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
                    "Level 1: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    1537: {//Heracles'n
        captain: "Boosts ATK of [STR] characters by 2x and boosts HP of Shooter and Striker characters by 1.2x",
        special: "Cuts the current HP of each enemy by 20%, changes right column [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Shooter and Striker characters",
        sailor: "Boosts base HP of STR characters by 150",
        specialName: "Greenstone Threat",
    },
    1538: {//Heracles'n
        captain: "Boosts ATK of [STR] characters by 2.5x and boosts HP of Shooter and Striker characters by 1.25x",
        special: "Cuts the current HP of each enemy by 20%, changes right column [STR], [QCK], [DEX], [PSY] and [INT] orbs into Matching orbs for Shooter and Striker characters",
        sailor: "Boosts base HP of STR characters by 150",
        specialName: "Greenstone Threat",
    },
    1539: {//Perona
        captain: "Boosts ATK and RCV of characters with cost 20 or less by 1.5x",
        special: "Reduces damage received by 90% for 1 turn, reduces the defense of all enemies by 90% for 1 turn, reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 2 turns",
        sailor: "Boosts base ATK of INT characters by 50",
        specialName: "Negative Hollow: You're All Rotten Imbeciles",
    },
    1540: {//Perona
        captain: "Boosts ATK of characters with cost 30 or less by 2.25x and their RCV by 1.5x",
        special: "Reduces damage received by 90% for 1 turn, reduces the defense of all enemies by 90% for 1 turn, reduces enemy's Threshold Damage Reduction and Percent Damage Reduction duration by 2 turns",
        sailor: {
            "base": "Boosts base ATK of INT characters by 50",
            "level1": "Boosts base HP of Driven characters by 50",
        },
        specialName: "Negative Hollow: You're All Rotten Imbeciles",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Driven characters by 50" },
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
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by ? turns on this character"
                ]
            },
        ]
    },
    1541: {//Elizabeth
        captain: "Boosts ATK by 2x following a chain of [STR] > [DEX] > [QCK] attacks no lower than Good",
        special: "Recovers 13x character's RCV in HP, adds .5x to Chain multiplier and reduces the defense of all enemies by 100% for 1 turn",
        sailor: "Restores her own special by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 1}",
        specialName: "Soft and Gentle Fluffy Kisses",
    },
    1542: {//Elizabeth
        captain: "Boosts RCV and HP by 1.2x, boosts ATK by 2.5x following a chain of [STR] > [DEX] > [QCK] attacks no lower than Good",
        special: "Recovers 13x character's RCV in HP, adds .5x to Chain multiplier and reduces the defense of all enemies by 100% for 1 turn",
        sailorNotes: "#{rewind : 1}",
        specialName: "Soft and Gentle Fluffy Kisses",
        sailor: {
            "base": "Restores her own special by 2 turns when it is rewinded",
            "level1": "Boosts base HP of all characters by 100",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of all characters by 100" },
            { "description": "Acquire Potential 2: Pinch Healing" },
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
    1543: {//6+ Usopp
        captain: "Boosts ATK of Shooter characters by 1.5x if HP is below 50% or by 1.75x if HP is below 30% at the start of the turn. Makes [STR], [DEX], [QCK], [PSY], [INT], [RCV] and [TND] orbs \"beneficial\" to Shooter characters. At the beginning of each Stage, increases the Attack Timer of all enemies by 1 turn",
        captainNotes: "The Attack Timer increase is NOT a delay, so the enemies can still be delayed. Attack Timer increase ignores Debuff Prevention barriers<br>#{beneficial}",
        special: "Cuts the current HP of each enemy by 10%. If enemies have Delay Prevention, ignores it and Delays all enemies for 1 turn. Otherwise, Delays all enemies for 3 turns",
        sailor: {
            "base": "Completely resists Blindness",
            "level1": "Boosts base HP of Shooter characters by 100",
        },
        specialName: "Green Star, Impact Wolf",
        limit: [
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Shooter characters by 100" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
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
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 90%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers if HP is above 30%"
                ]
            },
        ]
    },
    1544: {//Sakura Koala
        captain: "Boosts ATK of Fighter characters by 1.75x and heals for .3x her RCV at the end of the turn each time you hit a Perfect",
        special: "Changes Captain orb into matching and boosts ATK of Fighter characters by 1.5x for 1 turn",
        specialName: "Bean Paste under the Petal Snow",
    },
    1545: {//Sakura Koala
        captain: "Boosts ATK of Fighter characters by 2.25x and heals for .5x her RCV at the end of the turn each time you hit a Perfect",
        special: "Changes Captain orb into matching and boosts ATK of Fighter characters by 1.5x for 1 turn",
        specialName: "Bean Paste under the Petal Snow",
    },
    1546: {//Soul King Brook
        captain: "Boosts ATK of [QCK] characters by 1.5x and boosts HP of Free Spirit characters by 1.2x",
        special: "Boosts ATK of Free Spirit characters by 1.5x and makes Badly Matching and [BLOCK] orbs not reduce damage for 1 turn",
        specialNotes: "Ex. A STR character with a QCK orb will still deal regular damage",
        specialName: "Dawn of A Big Star",
    },
    1547: {//Soul King Brook
        captain: "Boosts ATK of [QCK] characters by 2x and boosts HP of Free Spirit characters by 1.3x",
        special: "Boosts ATK of Free Spirit characters by 1.5x and makes Badly Matching and [BLOCK] orbs not reduce damage for 1 turn",
        specialNotes: "Ex. A STR character with a QCK orb will still deal regular damage",
        specialName: "Dawn of A Big Star",
    },
    1548: {//Soul King Managers
        captain: "Boosts ATK of Driven characters by 1.5x",
        special: "Delays all enemies for 1 turn. Adds .2x to Chain multiplier for 1 turn",
        specialName: "Former Thief's Box Office",
    },
    1549: {//5+ Robin
        captain: "Boosts ATK of [PSY] characters by 2.25x and recovers 3x character's RCV in HP at the end of each turn",
        special: "Reduces Bind, Despair and Silence duration by 3 turns and reduces Special Cooldown of all characters by 1 turn",
        specialName: "Mil Fluer: Campo de Flores",
        specialNotes: "#{silence}",
        sailor: {
            "base": "None",
            "level1": "Reduces Paralysis duration on this character for 3 turns",
            "level2": "Reduces Silence duration on this character by 3 turns",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis duration for 3 turns for herself" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire Sailor Ability 2: Reduces Silence duration on this character by 3 turns" },
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
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1550: {//5+ Franky
        captain: "Boosts ATK of [INT] characters by 2.5x, reduces damage received by 10%",
        special: "Deals 35x character's ATK in [INT] damage to all enemies. Changes [TND] and [RCV] orbs on Shooter and Free Spirit characters into Matching Orbs.",
        specialName: "Franky's Rocket Launcher",
    },
    1551: {//5+ Brook
        captain: "Boosts ATK of Free Spirit characters by 2.5x and recovers 430 HP at end of each turn",
        special: "Delays all enemies for 1 turn and locks all orbs for 1 turn",
        specialName: "Song of Scratches: Blizzard Slash",
    },
    1552: {//Coliseum Hajrudin
        captain: "Boosts ATK of characters with 40 cost by 2.5x",
        special: "Deals 300,000 Fixed damage to one enemy, boosts ATK of characters with 40 cost by 1.75x, reduces enemy Barrier duration by 1 turn",
        specialName: "Thunder Giant",
    },
    1553: {//Coliseum Hajrudin
        captain: "Boosts ATK of characters with 40 cost by 2.75x",
        special: "Deals 300,000 Fixed damage to one enemy, boosts ATK of characters with 40 cost by 1.75x, reduces enemy Barrier duration by 1 turn",
        specialName: "Thunder Giant",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of all characters by 100",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of all characters by 100" },
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
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 30",
                    "Level 3: Boosts base ATK by 40",
                    "Level 4: Boosts base ATK by 50",
                    "Level 5: Boosts base ATK by 100"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1554: {//Coliseum Ryuma
        captain: "Boosts ATK of [DEX] characters by 2x",
        special: "Boosts ATK of [DEX] characters and amplifies the effect of orbs for [DEX] characters by 1.35x for 1 turn",
        specialName: "Pure Body and Soul",
    },
    1555: {//Coliseum Ryuma
        captain: "Boosts ATK of [DEX] characters by 2.25x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Boosts ATK of [DEX] characters and amplifies the effect of orbs for [DEX] characters by 1.35x for 1 turn",
        specialName: "Pure Body and Soul",
    },
    1556: {//Wadatsumi
        captain: "Boosts HP of STR characters by 2x",
        special: "If the HP of the enemy with the highest HP percentage is above 3,000,000 HP, boosts own ATK by 2x for 1 turn",
        specialName: "Sailboat Sinking Fist",
    },
    1557: {//Zeo
        captain: "Boosts ATK of Striker characters by 3x, reduces own ATK multiplier by 0.1x at the end of each turn, reduces crew's current HP by 10% at the end of each turn",
        special: "Makes Badly Matching and [BLOCK] orbs not reduce damage for 2 turns",
        specialNotes: "Ex. A STR character with a QCK orb will still deal regular damage",
        specialName: "Super Sole Headbutt",
    },
    1558: {//Ikaros
        captain: "Boosts ATK of Shooter characters by 3x, reduces own ATK multiplier by 0.1x at the end of each turn, reduces crew's current HP by 10% at the end of each turn",
        special: "Cuts the current HP of each enemy by 15%",
        specialName: "Stamping Press",
    },
    1559: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 3x, reduces own ATK multiplier by 0.1x at the end of each turn, reduces crew's current HP by 10% at the end of each turn",
        special: "Reduces crew's HP by 50%, deals 55x ATK in Typeless damage to all enemies",
        specialName: "Disorderly Drunken Frenzy Killing",
    },
    1560: {//Daruma
        captain: "Boosts ATK of Fighter characters by 3x, reduces own ATK multiplier by 0.1x at the end of each turn, reduces crew's current HP by 10% at the end of each turn",
        special: "Empties all slots including those with [BLOCK] orbs",
        specialName: "Daruma Drop",
    },
    1561: {//Dosun
        captain: "Boosts ATK of [INT] characters by 3x, reduces own ATK multiplier by 0.1x at the end of each turn, reduces crew's current HP by 10% at the end of each turn",
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn, deals 25x character's ATK in [INT] damage to one enemy",
        specialName: "Explosive Nail Hammer",
    },
    1562: {//Hody Jones
        captain: "Boosts ATK of Powerhouse characters by 3.5x, reduces own ATK multiplier by 0.1x at the end of each turn until it is 1.5x, reduces crew's current HP by 10% at the end of each turn",
        special: "Deals 60x character's ATK in [QCK] damage to one enemy, increases damage received by 2x for 2 turns, boosts ATK of Powerhouse characters by 1.75x for 1 turn",
        specialName: "Drugs From Heaven",
    },
    1563: {//Elizabello
        captain: "Boosts ATK of Fighter and Powerhouse characters by 1.75x at the start of the chain and by 2.1875x after the 5th Perfect in a row",
        special: [
            {
                "description": "Changes own orb into [STR], deals 10 hits of 3x character's ATK in typeless damage to random enemies",
                "cooldown": [ 17, 9 ],
            },
            {
                "description": "Changes own orb into [STR], deals 10 hits of 15x character's ATK in typeless damage to random enemies and adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 24, 16 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Battle Royale Rush",
        sailor: "Boosts own base ATK by 350 if this character is the last in the chain to attack",
    },
    1564: {//Elizabello
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x at the start of the chain and by 3x after the 5th Perfect in a row",
        special: [
            {
                "description": "Changes own orb into [STR], deals 10 hits of 3x character's ATK in typeless damage to random enemies",
                "cooldown": [ 17, 9 ],
            },
            {
                "description": "Changes own orb into [STR], deals 10 hits of 15x character's ATK in typeless damage to random enemies and adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 24, 16 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Battle Royale Rush",
        sailor: "Boosts own base ATK by 350 if this character is the last in the chain to attack",
    },
    1565: {//Dagama
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of all characters by 1.75x",
        special: "Reduces Special Cooldown of all characters by 1 turn and reduces crew's current HP by 10%",
        specialName: "War of Mislead Order",
    },
    1566: {//Dagama
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of all characters by 2x",
        special: "Reduces Special Cooldown of all characters by 1 turn and reduces crew's current HP by 10%",
        specialName: "War of Mislead Order",
    },
    1567: {//Kid Boa
        captain: "Boosts ATK and RCV of [QCK] characters by 1.5x",
        special: "Recovers 13x character's RCV in HP, amplifies the effect of orbs by 1.5x for 3 turns",
        specialName: "The Princess' Principle",
    },
    1568: {//Kid Boa
        captain: "Boosts ATK and RCV of [QCK] characters by 2x",
        special: "Recovers 13x character's RCV in HP, amplifies the effect of orbs by 1.5x for 3 turns",
        specialName: "The Princess' Principle",
    },
    1569: {//Anniversary Law
        captain: "Boosts ATK of all characters by 2.25x and boosts EXP and amount of Beli received by 1.2x",
        special: "Randomizes all non-matching orbs, including [BLOCK] orbs and switches orbs between slots three times",
        specialName: "ROOM Shambles・Junction",
    },
    1570: {//Inuarashi
        captain: "Boosts ATK of Cerebral characters by 2.75x and chain by 1.5x if HP is below 30% at the start of the turn, boosts ATK of Cerebral characters by 2.5x otherwise",
        special: "Reduces crew's current HP by 80%, deals 60x character's ATK in STR damage to one enemy. Adds 80x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 80x}",
        specialName: "King Sword Shine",
    },
    1571: {//Inuarashi
        captain: "Boosts ATK of Cerebral characters by 2.75x and chain by 1.5x if HP is below 30% at the start of the turn, boosts ATK of Cerebral characters by 2.5x otherwise",
        special: "Reduces crew's current HP by 80%, deals 60x character's ATK in STR damage to one enemy. Adds 80x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 80x}",
        specialName: "King Sword Shine",
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
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
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
    1572: {//Wanda
        captain: "Boosts ATK of Cerebral characters by 2x and their RCV by 1.2x",
        special: "Randomly changes all orbs, including [BLOCK] orbs into [STR], [DEX], [QCK], [INT], or [PSY] orbs, boosts ATK of Cerebral characters by 1.75x for 3 turns",
        sailor: "Reduces Paralysis duration by 1 turn",
        specialName: "Ruler's Aide Flight",
    },
    1573: {//Wanda
        captain: "Boosts ATK of Cerebral characters by 2.5x and their RCV by 1.2x",
        special: "Randomly changes all orbs, including [BLOCK] orbs into [STR], [DEX], [QCK], [INT], or [PSY] orbs, boosts ATK of Cerebral characters by 1.75x for 3 turns",
        specialName: "Ruler's Aide Flight",
        sailor: {
            "base": "Reduces Paralysis duration by 1 turn",
            "level1": "Boosts base ATK, HP and RCV of Cerebral characters by 40",
        },
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Cerebral characters by 40" },
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
    1574: {//Sicilian
        captain: "Boosts ATK of [INT] characters by 2.25x",
        special: "Delays all enemies for 1 turn, deals 25x character's ATK [INT] damage to all enemies and changes [STR], [DEX], [QCK], [INT] and [PSY] orbs on Cerebral characters into Matching orbs.",
        sailor: "When HP is below 30% at the start of the turn, boosts own base ATK by 200",
        specialName: "Dash - Dive - Destroy",
    },
    1575: {//Sicilian
        captain: "Boosts ATK of [INT] characters by 2.5x and their HP by 1.25x",
        special: "Delays all enemies for 1 turn, deals 25x character's ATK [INT] damage to all enemies and changes [STR], [DEX], [QCK], [INT] and [PSY] orbs on Cerebral characters into Matching orbs.",
        specialName: "Dash - Dive - Destroy",
        sailor: {
            "base": "When HP is below 30% at the start of the turn, boosts own base ATK by 200",
            "level1": "Reduces Paralysis duration by 1 turn",
        },
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis duration by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
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
                    "Level 2: Boosts base ATK by ??",
                    "Level 3: Boosts base ATK by ??",
                    "Level 4: Boosts base ATK by ??",
                    "Level 5: Boosts base ATK by ??"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1576: {//Kin'emon
        captain: "Boosts ATK by 2.5x following a chain of Good > Great > Perfect hits",
        special: "Deals 60x character's ATK in typeless damage to all enemies and changes all orbs on all characters into Kinemon's orb.",
        specialNotes: "Upon activating the special, all orbs will be changed to the orb Kinemon has, including [RAINBOW] and [BLOCK] orbs. This will not override other [BLOCK] orbs.",
        sailor: "Makes [STR] and [QCK] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        specialName: "Flaming Flash",
    },
    1577: {//Kin'emon
        captain: "Recovers 3x character's RCV in HP at the end of each turn. Boosts ATK by 3.5x following a chain of Good > Great > Perfect hits",
        special: "Deals 60x character's ATK in typeless damage to all enemies and changes all orbs on all characters into Kinemon's orb.",
        specialNotes: "Upon activating the special, all orbs will be changed to the orb Kinemon has, including [RAINBOW] and [BLOCK] orbs. This will not override other [BLOCK] orbs.",
        specialName: "Flaming Flash",
        sailor: {
            "base": "Makes [STR] and [QCK] orbs \"beneficial\" for this unit",
            "level1": "Makes [RCV] and [TND] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
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
                    "Level 1: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ??x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    1578: {//Momonosuke
        captain: "Protects from defeat as long as HP is above 50%",
        special: [
            {
                "description": "Adds .2x to Chain multiplier for 1 turn",
                "cooldown": [ 8, 3 ],
            },
            {
                "description": "Switches orbs between slots once and adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Switches orbs between slots once and adds .5x to Chain multiplier for 1 turn",
                "cooldown": [ 14, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        sailor: "Makes [STR], [QCK], [DEX] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        specialName: "Miraculous Flying Dragon",
    },
    1579: {//Momonosuke
        captain: "Boosts ATK, HP and RCV of all characters by 1.25x, protects from defeat as long as HP is above 50%",
        special: [
            {
                "description": "Adds .2x to Chain multiplier for 1 turn",
                "cooldown": [ 8, 3 ],
            },
            {
                "description": "Switches orbs between slots once and adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 11, 6 ],
            },
            {
                "description": "Switches orbs between slots once and adds .5x to Chain multiplier for 1 turn",
                "cooldown": [ 14, 9 ],
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Miraculous Flying Dragon",
        sailor: {
            "base": "Makes [STR], [QCK], [DEX] and [INT] orbs \"beneficial\" for this unit",
            "level1": "Reduces Silence duration by 1 turn",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration by 1 turn" },
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
                    "Level 1: If HP is below 20% at the start of the turn, heals for .5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below ??% at the start of the turn, heals for ?x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    1580: {//Fortnight Law
        captain: "Boosts ATK of Free Spirit characters by 1.5x and boosts RCV of DEX characters by 1.2x",
        special: "Changes orbs in right column to [DEX], [PSY], [INT] from top to bottom, switches orbs between slots twice, amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "ROOM Tact",
    },
    1581: {//Fortnight Law
        captain: "Boosts ATK of Free Spirit characters by 2x and boosts RCV of DEX characters by 1.5x",
        special: "Changes orbs in right column to [DEX], [PSY], [INT] from top to bottom, switches orbs between slots twice, amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "ROOM Tact",
    },
    1582: {//Fortnight Monet
        captain: "Boosts ATK and RCV of Cerebral characters by 1.2x",
        special: "Recovers 10x character's RCV in HP. Boosts ATK and RCV of Cerebral characters by 1.5x for 1 turn",
        specialName: "Observing within the Snow Storm",
    },
    1583: {//Coliseum Orlumbus
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Locks all orbs for 1 turn. If there are 4 enemies or more on the stage, amplifies the effect of orbs for Striker characters by 2x for 1 turn, otherwise amplifies the effect of orbs for Striker characters by 1.5x for 1 turn",
        specialName: "Admiral Hug",
    },
    1584: {//Coliseum Orlumbus
        captain: "Boosts ATK of Striker characters by 3x if HP is below 30% at the start of the turn, by 2.5x otherwise",
        special: "Locks all orbs for 1 turn. If there are 4 enemies or more on the stage, amplifies the effect of orbs for Striker characters by 2x for 1 turn, otherwise amplifies the effect of orbs for Striker characters by 1.5x for 1 turn",
        specialName: "Admiral Hug",
        sailor: {
            "base": "None",
            "level1": "Makes [TND] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
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
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a ??% chance to deal ?% of this character's attack in extra damage"
                ]
            },
        ]
    },
    1585: {//Coliseum Helmeppo
        captain: "Boosts ATK and RCV of Slasher and Driven characters by 1.5x",
        special: "If HP is below 5,000, boosts ATK of Driven and Slasher characters by 1.75x for 1 turn and recovers 10x character's RCV in HP",
        specialName: "Firey Morale",
    },
    1586: {//Coliseum Helmeppo
        captain: "Boosts ATK of Slasher and Driven characters by 2x and their RCV by 1.5x",
        special: "If HP is below 5,000, boosts ATK of Driven and Slasher characters by 1.75x for 1 turn and recovers 10x character's RCV in HP",
        specialName: "Firey Morale",
    },
    1587: {//Legend Sanji
        captain: "Boosts ATK of all characters by 2.5x and their HP by 1.3x <br> <b>Action:</b> Sanji Sky Walks into the air for 1 turn, preventing all debuffs to himself (Including, but not limited to, Bind, Despair, Silence and Paralysis). This does not remove the his own Captain boost while he is unable to attack. During the next turn, boosts own ATK by 6.25x instead",
        captainNotes: "Sanji Captain Action lasts for 2 turns and can be reactivated after no cooldown. Even while Sky Walking, will still boost all characters by 2.5x. Sky Walk is not a type boost and will stack with other boosts",
        special: "Deals 100,000 fixed damage to all enemies. Changes [BLOCK], [TND], adjacent orbs and own orb into Matching orbs. Boosts own attack by 2x for 1 turn",
        sailor: "Makes [RCV] orbs \"beneficial\" for all characters",
        sailorNotes: "#{beneficial}",
        specialName: "Hell Memories",
    },
    1588: {//Legend Sanji
        captain: "Boosts ATK of all characters by 2.5x and their HP by 1.3x <br> <b>Action:</b> Sanji Sky Walks into the air for 1 turn, preventing all debuffs to himself (Including, but not limited to, Bind, Despair, Silence and Paralysis). This does not remove the his own Captain boost while he is unable to attack. During the next turn, boosts own ATK by 6.25x instead",
        captainNotes: "Sanji Captain Action lasts for 2 turns and can be reactivated after no cooldown. Even while Sky Walking, will still boost all characters by 2.5x. Sky Walk is not a type boost and will stack with other boosts",
        special: "Deals 100,000 fixed damage to all enemies. Changes [BLOCK], [TND], adjacent orbs and own orb into Matching orbs. Boosts own attack by 2x for 1 turn",
        sailor: "Makes [RCV] orbs \"beneficial\" for all characters",
        sailorNotes: "#{beneficial}",
        specialName: "Hell Memories",
    },
    1589: {//Anniversary Shanks
        captain: "Boosts Chain Multiplier by 3x",
        special: "Recovers 50% of crew's MAX HP, changes bottom row orbs into matching orbs",
        specialName: "Sharing a Cup Filled with Emotions",
    },
    1590: {//Anniversary Shanks
        captain: "Boosts Chain Multiplier by 3.5x, Boosts HP and RCV of all characters by 1.2x",
        special: "Recovers 50% of crew's MAX HP, changes bottom row orbs into matching orbs",
        specialName: "Sharing a Cup Filled with Emotions",
    },	
    1591: {//Anniversary Boa
        captain: "Boosts ATK and RCV of Fighter and Free Spirit characters by 1.5x",
        special: "Recovers 3,000 HP and boosts ATK of Free Spirit and Fighter characters by 1.75x for 1 turn",
        specialName: "Immoral Gaze",
    },
    1592: {//Anniversary Boa
        captain: "Boosts ATK of Fighter and Free Spirit characters by 2.25x and their RCV by 1.75x",
        special: "Recovers 3,000 HP and boosts ATK of Free Spirit and Fighter characters by 1.75x for 1 turn",
        specialName: "Immoral Gaze",
    },
    1593: {//Gear 4 Luffy
        captain: "Boosts ATK of Fighter characters by 2.5x. If you use \"King Kong Gun\" THIS LUFFY boosts ATK of Fighter characters by 4x instead for 3 turns and reduces damage taken by 56% for 3 turns.",
        special: [
            {
                "description": "Deals 100x character's ATK in typeless damage to one enemy and makes [STR], [DEX], [PSY], [INT], [TND] and [RCV] orbs \"beneficial\" for Fighter characters for 1 turn.  After 3 turns, Binds and Despairs himself for 7 turns.",
                "cooldown": [ 13, 8 ],
            },
            {
                "description": "Deals 200x character's ATK in typeless damage to one enemy and makes [STR], [DEX], [PSY], [INT], [TND] and [RCV] orbs \"beneficial\" for Fighter and Free Spirit characters for 3 turns. After 3 turns, Binds and Despairs himself for 7 turns.",
                "cooldown": [ 18, 13 ],
            },
        ],
        specialNotes: "#{stages}<br>#{beneficial}",
        sailor: "Completely resists Paralysis on this character",
        specialName: "King Kong Gun",
    },
    1594: {//Fujitora
        captain: "Cuts the current HP of each enemy by 10% at the end of each turn",
        special: "Deals 50x character's ATK in [PSY] damage to all enemies that will ignore damage negating abilities and barriers, changes adjacent orbs into Matching Orbs, amplifies the effect of orbs for Powerhouse characters by 2x for 1 turn",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Gravity Blade: Fierce Tiger",
    },
    1595: {//Fujitora
        captain: "Boosts ATK of Powerhouse characters by 2.25x and their HP by 1.2x, cuts the current HP of each enemy by 10% at the end of each turn",
        special: "Deals 50x character's ATK in [PSY] damage to all enemies that will ignore damage negating abilities and barriers, changes adjacent orbs into Matching Orbs, amplifies the effect of orbs for Powerhouse characters by 2x for 1 turn",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Gravity Blade: Fierce Tiger",
    },
    1596: {//Shirahoshi
        captain: "Boosts ATK and RCV of [INT] characters by 1.5x",
        special: "Reduces Bind, Despair and Paralysis duration by 2 turns, reduces damage received by 70% for 1 turn",
        specialName: "Great Dinner Buffet",
    },
    1597: {//Shirahoshi
        captain: "Boosts ATK and RCV of [INT] characters by 1.75x",
        special: "Reduces Bind, Despair and Paralysis duration by 2 turns, reduces damage received by 70% for 1 turn",
        specialName: "Great Dinner Buffet",
    },
    1598: {//Ryuboshi
        captain: "Boosts HP of Powerhouse characters by 1.5x",
        special: "Boosts ATK of all characters by 1.2x and recovers 5x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Musical Scale",
    },
    1599: {//Manboshi
        captain: "Boosts ATK of Powerhouse characters by 1.75x",
        special: "Reduces the defense of all enemies by 50% for 1 turn. Changes own orb into [QCK]",
        specialName: "Happy Dance",
    },
    1600: {//3rd Anniversary Luffy
        captain: "Boosts ATK of [PSY] and [INT] characters by 2.5x",
        special: "Deals 20x character's ATK in [PSY] damage to one enemy, locks orbs for 1 turn and amplifies the effect of orbs on [PSY] and [INT] characters by 1.75x for 1 turn",
        specialName: "Right Leg Armament: Gum-Gum Battle Axe",
    },
    1601: {//Power Creep Shiryu
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Instantly defeats all enemies with HP equal to or below 75x character's ATK, removes Poison and reduces damage received by 50% for 3 turns,",
        specialName: "Blood Stained 'Iron Wall'",
        sailor: "Boosts own base ATK by 100 if this character is the last in the chain to attack",
    },
    1602: {//Power Creep Shiryu
        captain: "Boosts ATK of Slasher characters by 2x at the start of the chain, by 3x after the 3rd Perfect in a row",
        special: "Instantly defeats all enemies with HP equal to or below 75x character's ATK, removes Poison and reduces damage received by 50% for 3 turns,",
        specialName: "Blood Stained 'Iron Wall'",
        sailor: "Boosts own base ATK by 100 if this character is the last in the chain to attack",
    },
    1603: {//McGuy
        captain: "Boosts ATK of [STR] characters by 2.25x and their RCV by 1.25x",
        special: "Delays all enemies for 2 turns",
        specialName: "Numb Crosscut",
    },
    1604: {//Training Forest Ace
        captain: "Boosts ATK of [STR] characters by 1.5x",
        special: "Randomizes all non-matching orbs and deals 13x character's ATK in [STR] damage to all enemies",
        specialName: "Fist of the Demon's Child 'Fire'",
    },
    1605: {//Training Forest Ace
        captain: "Boosts ATK of [STR] characters by 2x and recovers 500 HP at end of each turn",
        special: "Randomizes all non-matching orbs and deals 13x character's ATK in [STR] damage to all enemies",
        specialName: "Fist of the Demon's Child 'Fire'",
    },
    1606: {//Lafitte
        captain: "Boosts ATK and RCV of [PSY] characters by 1.75x",
        special: "Randomly shuffles non-matching orbs on Shooter characters, reduces the defense of all enemies by 50% for 1 turn and delays all enemies for 1 turn",
        specialName: "Deprivation of Self-Consciousness",
    },
    1607: {//Van augur
        captain: "Boosts ATK of Shooters by 2x",
        special: "Deals 10x character's ATK in [DEX] damage to one enemy, locks orbs for 1 turn and boosts ATK of Shooter characters by 1.5x for 1 turn",
        specialName: "Painless Bullet",
    },
    1608: {//Doc Q
        captain: "Boosts ATK and RCV of [INT] characters by 1.5x",
        special: "For each enemy, has an extremely small chance to instantly defeat that enemy.",
        specialNotes: "#{instantKill : <1%}",
        specialName: "Vile Fruit",
    },
    1609: {//Legend Enel
        captain: "Reduces HP of all characters by 20%, boosts chances of getting [RCV] orbs, makes [RCV] orbs \"beneficial\" to all characters, boosts ATK of all characters proportionally to the amount healed in the last turn.",
        captainNotes: "The range of ATK boost is from 2x to 3.25x. The exact boost is calculated as 2 + <HP recovered in the previous turn> * 0.000125 and maxes at 10k HP healed. This ignores your max HP, so it doesn't stop counting if you over-heal.<br>#{beneficial}",
        special: "Deals typeless damage to all enemies equal to 10x how much excess healing done before the special is activated.",
        specialNotes: "The excess healing is counted from the last time the special is used and accumulates when you heal more than your maximum HP. For example, if you are at max HP and you heal 1,000 HP, you will add 10k damage to the special. The amount of damage possible caps at 2,000,000 damage.",
        specialName: "Heavy Thunder",
    },
    1610: {//Legend Enel
        captain: "Reduces HP of all characters by 20%, boosts chances of getting [RCV] orbs, makes [RCV] orbs \"beneficial\" to all characters, boosts ATK of all characters proportionally to the amount healed in the last turn.",
        captainNotes: "The range of ATK boost is from 2x to 3.25x. The exact boost is calculated as 2 + <HP recovered in the previous turn> * 0.000125 and maxes at 10k HP healed. This ignores your max HP, so it doesn't stop counting if you over-heal.<br>#{beneficial}",
        special: "Deals typeless damage to all enemies equal to 10x how much excess healing done before the special is activated.",
        specialNotes: "The excess healing is counted from the last time the special is used and accumulates when you heal more than your maximum HP. For example, if you are at max HP and you heal 1,000 HP, you will add 10k damage to the special. The amount of damage possible caps at 2,000,000 damage.",
        specialName: "Heavy Thunder",
    },
    1611: {//Kuma
        captain: "Boosts ATK of Shooter characters by 1.75x and their HP by 1.2x",
        special: "Reduces Bind and Despair duration by 7 turns.  Recovers 20% of crew's MAX HP and has low chance to eliminate all enemies",
        specialNotes: "#{instantKill : 10%}",
        specialName: "Paw Paw Fruit: Scatter and Fly Away",
        sailor: "If this character has a [PSY] orb and you hit a Perfect with him, keep his [PSY] orb for the next turn",
    },
    1612: {//Kuma
        captain: "Boosts ATK of Shooter characters by 2.5x and their HP by 1.2x",
        special: "Reduces Bind and Despair duration by 7 turns.  Recovers 20% of crew's MAX HP and has low chance to eliminate all enemies",
        specialNotes: "#{instantKill : 10%}",
        specialName: "Paw Paw Fruit: Scatter and Fly Away",
        sailor: "If this character has a [PSY] orb and you hit a Perfect with him, keep his [PSY] orb for the next turn",
    },
    1613: {//Rob Lucci
        captain: "Boosts ATK of Fighter characters by 2.25x",
        special: "Cuts the current HP of each enemy by 10%, reduces the defense of all enemies by 50% and amplifies the effects of orbs by 1.75x for 1 turn",
        specialName: "4000 Power Level Technique: Tempest Kick",
        sailor: "Adds 2x character's ATK as Additional Typeless Damage",
        sailorNotes: "#{additionalDamage : 2x}",
    },
    1614: {//Rob Lucci
        captain: "Boosts ATK of Fighter characters by 2.5x and their HP by 1.25x",
        special: "Cuts the current HP of each enemy by 10%, reduces the defense of all enemies by 50% and amplifies the effects of orbs by 1.75x for 1 turn",
        specialName: "4000 Power Level Technique: Tempest Kick",
        sailor: "Adds 2x character's ATK as Additional Typeless Damage",
        sailorNotes: "#{additionalDamage : 2x}",
    },
    1615: {//Crocodile
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Deals 20x character's ATK in [INT] damage to all enemies, reduces Special Cooldown of Striker characters by 1 turn and boosts ATK of Striker characters and amplifies orbs of Striker characters by 1.5x for 1 turn",
        specialName: "Desert Spada",
        sailor: "Restores his own special by 2 turns when it is rewinded",
        sailorNotes: "#{rewind : 2}",
    },
    1616: {//Crocodile
        captain: "Boosts ATK of Striker characters by 2.5x and recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Deals 20x character's ATK in [INT] damage to all enemies, reduces Special Cooldown of Striker characters by 1 turn and boosts ATK of Striker characters and amplifies orbs of Striker characters by 1.5x for 1 turn",
        specialName: "Desert Spada",
        sailor: {
            "base": "Restores his own special by 2 turns when it is rewinded",
            "level1": "Reduces Silence duration against this character by 3 turns",
        },
        sailorNotes: "#{rewind : 2}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration against this character by 3 turns" },
            { "description": "Boosts base ATK by 45" },
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
    1617: {//Moria
        captain: "Boosts ATK of [STR], [INT] and [DEX] characters by 2x",
        special: "For [STR], [INT] and [DEX] characters, randomizes all non-matching orbs and boosts ATK of [STR], [INT], [DEX] characters by 1.75x for 2 turns",
        specialName: "Shadow Asgard: \"Baptism\" from the Royal Shichibukai",
        sailor: "When any other character uses a special, reduces own cooldown by 1 turn",
    },
    1618: {//Moria
        captain: "Boosts ATK of [STR], [INT] and [DEX] characters by 2.5x",
        special: "For [STR], [INT] and [DEX] characters, randomizes all non-matching orbs and boosts ATK of [STR], [INT], [DEX] characters by 1.75x for 2 turns",
        specialName: "Shadow Asgard: \"Baptism\" from the Royal Shichibukai",
        sailor: "When any other character uses a special, reduces own cooldown by 1 turn",
    },
    1619: {//6+ Raybae/Rayleigh
        captain: "Boosts chain multiplier by 4x and boosts HP and RCV of all characters by 1.2x",
        special: "Reduces Bind, Despair and Paralysis duration by 7 turns, delays all enemies for 1 turn and makes Perfects easier to hit for 1 turn",
        specialName: "Netherworld Conqueror",
    },
    1620: {//Log Kid
        captain: "Boosts ATK of Strikers characters by 2.5x if HP is below 30% at the start of the turn",
        special: "Reduces crew's current HP by 80%, boosts ATK of Striker characters by 2x for 1 turn",
        specialName: "Double Steel Magnetic Arm",
    },
    1621: {//Log Kid
        captain: "Boosts ATK of Striker characters by 3x if HP is below 30% at the start of the turn, by 2.5x otherwise and boosts HP of Striker characters by 1.2x",
        special: "Reduces crew's current HP by 80%, boosts ATK of Striker characters by 2x for 1 turn",
        specialName: "Double Steel Magnetic Arm",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Striker characters by 75",
            "level2": "Boosts base HP of Driven characters by 75",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Striker characters by 75" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 2: Boosts base HP of Driven characters by 75" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
    1622: {//Reborn Doffy
        special: "Switches orbs between slots twice, amplifies the effect of orbs by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        specialName: "Overheat [Neo]",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    1623: {//Reborn Doffy
        special: "Switches orbs between slots twice, amplifies the effect of orbs by 2x for 1 turn",
        specialNotes: "#{orb : 2x}",
        specialName: "Overheat [Neo]",
        captain: "Boosts ATK and HP of Slasher characters by 2x"
    },
    1624: {//Hyouzou
        captain: "Boosts ATK of Slasher characters by 1.5x and boosts HP of Powerhouse characters by 1.25x",
        special: "Randomizes all orbs, cuts the current HP of all enemies by 10% and Poisons all enemies.",
        specialName: "Flexible Six Swords",
    },
    1625: {//Daruma
        captain: "Boosts ATK of Powerhouse and Fighter characters by 1.75x",
        special: "Randomizes all orbs, including [BLOCK] orbs and reduces damage received by 50% for 1 turn.",
        specialName: "Arching Fangs",
    },
    1626: {//Dosun
        captain: "Boosts ATK of Powerhouse characters by 2.5x following a chain of Good > Great > Perfect hits",
        special: "Deals 20x character's ATK in [PSY] damage to one enemy, boosts ATK of [PSY] characters by 1.5x for 1 turn",
        specialName: "The Calm Before The Storm",
    },
    1627: {//Mach Vise
        captain: "Boosts ATK Free Spirit characters by 2x",
        special: [
            {
                "description": "Reduces Chain Multiplier Limit duration by 1 turn and boosts the Color Affinity of Striker characters by 1.25x for 1 turn",
                "cooldown": [ 23, 9 ]
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 3 turns and boosts the Color Affinity of Striker characters by 1.5x for 1 turn",
                "cooldown": [ 27, 13 ]
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 5 turns and boosts the Color Affinity of Striker characters by 1.75x for 1 turn",
                "cooldown": [ 31, 17 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Thousand Ton Destruction",
    },
    1628: {//Mach Vise
        captain: "Boosts ATK Free Spirit and Striker characters by 2.25x and their RCV by 1.5x",
        special: [
            {
                "description": "Reduces Chain Multiplier Limit duration by 1 turn and boosts the Color Affinity of Striker characters by 1.25x for 1 turn",
                "cooldown": [ 23, 9 ]
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 3 turns and boosts the Color Affinity of Striker characters by 1.5x for 1 turn",
                "cooldown": [ 27, 13 ]
            },
            {
                "description": "Reduces Chain Multiplier Limit duration by 5 turns and boosts the Color Affinity of Striker characters by 1.75x for 1 turn",
                "cooldown": [ 31, 17 ]
            },
        ],
        specialNotes: "#{stages}",
        specialName: "Thousand Ton Destruction",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Striker characters by 35",
            "level2": "Makes [STR] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Striker characters by 35" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Makes [STR] orbs \"beneficial\" for this unit" },
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
                    "Level 2: Reduces Slot Bind duration by ? turns on this character",
                    "Level 3: Reduces Slot Bind duration by ? turns on this character",
                    "Level 4: Reduces Slot Bind duration by ? turns on this character",
                    "Level 5: Reduces Slot Bind duration by ? turns on this character"
                ]
            },
        ]
    },
    1629: {//Ikaros Much
        captain: "Boosts ATK and HP of Striker characters by 1.5x",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into [STR], [DEX], [QCK], [INT], or [PSY] orbs and changes own orb into [INT]",
        specialName: "The Spear that Penetrated the Undersea Mountain",
    },
    1630: {//Ikaros Much
        captain: "Boosts ATK of Striker characters by 2x and their HP by 1.5x",
        special: "Randomly changes all orbs, including [BLOCK] orbs, into [STR], [DEX], [QCK], [INT], or [PSY] orbs and changes own orb into [INT]",
        specialName: "The Spear that Penetrated the Undersea Mountain",
    },
    1631: {//Fisher Tiger
        captain: "Boosts ATK of Powerhouse characters by 2.25x",
        special: "Boosts ATK of Powerhouse characters by 1.75x for 3 turns",
        specialName: "Rebellion against the \"Prohibition\" - Taboo",
        sailor: "When any other Powerhouse character uses a special, reduces own cooldown by 1 turn",
    },
    1632: {//Fisher Tiger
        captain: "Boosts ATK of Powerhouse characters by 2.75x",
        special: "Boosts ATK of Powerhouse characters by 1.75x for 3 turns",
        specialName: "Rebellion against the \"Prohibition\" - Taboo",
        sailor: {
            "base": "When any other Powerhouse character uses a special, reduces own cooldown by 1 turn",
            "level1": "Boosts base ATK of Powerhouse characters by 50",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Powerhouse characters by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
    1633: {//Punk Hazard Dragon
        captain: "Boosts ATK of [STR] characters by 1.75x and the HP of Powerhouse characters by 1.2x",
        special: "Deals 15x character's ATK in [STR] damage to all enemies and amplifies the effect of orbs by 1.25x for 1 turn",
        specialName: "Flame Breath",
    },
    1634: {//Rock and Scotch
        captain: "Boosts HP of [INT] characters by 2x",
        special: "Reduces damage received by 50% for 1 turn",
        specialName: "COOL Ambush",
    },
    1635: {//Brownbeard
        captain: "Boosts OWN ATK by 1.5x and the ATK of Cerebral characters by 2x",
        special: "Cuts the HP of all enemies by 20% and binds himself for 5 turns",
        specialName: "Crocodile Thrust",
    },
    1636: {//Caesar Clown
        captain: "Boosts ATK of Cerebral characters by 2x",
        special: "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 turns and changes [BOMB] orbs into matching orbs",
        specialName: "Gastanet",
    },
    1637: {//Caesar Clown Evolved
        captain: "Boosts ATK of Cerebral characters by 2.25x and reduces damage received by 15%",
        special: "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.3x for 3 turns and changes [BOMB] orbs into matching orbs",
        specialName: "Gastanet",
    },
    1638: {//STR Gas Mask Fodder
        special: "Boosts chances of getting [RCV] orbs for 2 turns",
        specialName: "Meat for Meat",
    },
    1639: {//QCK Gas Mask Fodder
        special: "Reduces Paralysis duration by 1 turn",
        specialName: "Shock Recovery: Light",
    },
    1640: {//DEX Gas Mask Fodder
        special: "For 1 turn, makes STR orb \"beneficial\" for Shooter characters",
        specialNotes: "#{beneficial}",
        specialName: "Shooter Beneficial Slot: STR",
    },
    1641: {//INT Gas Mask Fodder
        special: "Boosts ATK against Poisoned and Strongly Poisoned enemies by 1.2x for 1 turn",
        specialName: "Rising Damage: Poison",
    },
    1642: {//PSY Gas Mask Fodder
        special: "Deals 3x character's ATK in typeless damage to all enemies, Poisons all enemies",
        specialNotes: "#{poison}",
        specialName: "Poison Attack",
    },
    1643: {//STR Centaur Fodder
        captain: "Reduces cooldown of Slasher specials by 2 turns at the start of the fight",
        special: "Boosts ATK of Slasher characters for 1 turn",
        specialName: "Attack Boost: Slasher",
    },
    1644: {//QCK Centaur Fodder
        captain: "Boosts ATK of [QCK] characters by 2x, reduces crew's current HP by ???% at the end of each turn",
        special: "Reduces Silence duration by 1 turn",
        specialNotes: "#{silence}",
        specialName: "Special Seal Recovery: Light",
    },
    1645: {//DEX Centaur Fodder
        captain: "Boosts ATK of [DEX] characters by 1.5x and Slasher characters by 1.3x",
        captainNotes: "The bonus is cumulative. [DEX] Slasher characters get a 1.95x bonus.",
        special: "Deals 5 hits of random typeless damage to random enemies",
        specialNotes: "#{randomHits : 5}",
        specialName: "Random Light Blows",
    },
    1646: {//Reborn Pica
        captain: "Boosts ATK of Powerhouse characters by 1.5x and their HP by 1.5x",
        specialName: "Rock Domination Wall [Neo]",
        special: [
            {
                "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 20, 11 ]
            },
            {
                "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 26, 17 ]
            }
        ],
        specialNotes: "#{stages}"	
        },
    1647: {//Reborn Pica
        captain: "Boosts ATK of Powerhouse characters by 2.25x and their HP by 1.5x",
        specialName: "Rock Domination Wall [Neo]",
        special: [
            {
                "description": "For Driven and Powerhouse characters, changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 10%",
                "cooldown": [ 20, 11 ]
            },
            {
                "description": "Changes [EMPTY] and Badly Matching orbs into Matching orbs. Cuts the current HP of all enemies by 20%",
                "cooldown": [ 26, 17 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    1648: {//Giolla
        captain: "Boosts ATK of all characters by 1.2x. Boosts ATK by 2.4x after scoring 4 Perfects in a row",
        special: "Reduces damage received by 90% for 1 turn and randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX] or [QCK] orbs",
        specialName: "Sprouting with Beautiful Passion",
    },
    1649: {//Giolla
        captain: "Boosts ATK of all characters by 1.2x. Boosts ATK by 3x after scoring 4 Perfects in a row",
        special: "Reduces damage received by 90% for 1 turn and randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX] or [QCK] orbs",
        specialName: "Sprouting with Beautiful Passion",
    },
    1650: {//Brook x5
        captain: "Boosts RCV of [DEX] characters by 1.5x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise.",
        special: "Changes [BLOCK], [TND], [EMPTY] and [BOMB] orbs into [DEX] orbs and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Eyes Blinded by True Beauty",
    },
    1651: {//Nekomamushi
        captain: "Boosts HP of Striker characters by 1.25x and boosts ATK by 3.75x if they have a [STR], [QCK], [DEX], [INT], [PSY] or [RAINBOW] orb",
        special: "Deals 60x character's ATK in [PSY] damage to one enemy and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for Striker characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Daybreak Ruler's Spear",
    },
    1652: {//Nekomamushi
        captain: "Boosts HP of Striker characters by 1.25x and boosts ATK by 3.75x if they have a [STR], [QCK], [DEX], [INT], [PSY] or [RAINBOW] orb",
        special: "Deals 60x character's ATK in [PSY] damage to one enemy and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for Striker characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Daybreak Ruler's Spear",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Striker characters by 70",
            "level2": "Makes [INT] orbs \"beneficial\" for this unit",
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
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 2: Makes [INT] orbs \"beneficial\" for this unit" },
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
                    "Level 1: Reduces Slot Bind duration by 3 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 10 turns on this character",
                    "Level 5: Reduces Slot Bind completely on this character"
                ]
            },
        ]
    },
    1653: {//Pedro
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Reduces crew's HP to 1, deals 7x the amount of HP subtracted in typeless damage to all enemies, amplifies the effect of orbs by 1.75x for 1 turn",
        sailor: "Makes INT orbs \"beneficial\" for Slasher and Cerebral characters",
        sailorNotes: "#{beneficial}",
        specialName: "Charge Drive",
    },
    1654: {//Pedro
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of [INT] characters by 2.5x",
        special: "Reduces crew's HP to 1, deals 7x the amount of HP subtracted in typeless damage to all enemies, amplifies the effect of orbs by 1.75x for 1 turn",
        sailor: {
            "base": "Makes INT orbs \"beneficial\" for Slasher and Cerebral characters",
            "level1": "If this character has an [INT] orb and you hit a Perfect with him, keep his [INT] orb for the next turn",
        },
        sailorNotes: "#{beneficial}",
        specialName: "Charge Drive",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: If this character has an [INT] orb and you hit a Perfect with him, keep his [INT] orb for the next turn" },
            { "description": "Acquire Potential 2: Critical Hit" },
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
    1655: {//Carrot
        captain: "Boosts ATK and RCV of [QCK] characters by 1.5x",
        special: "Boosts ATK of QCK characters by 2x for 1 turn",
        sailor: "Boosts base ATK and RCV of [QCK] characters by 75",
        specialName: "Electric Fist",
    },
    1656: {//Carrot
        captain: "Boosts ATK of [QCK] characters by 2.25x and their RCV by 1.5x",
        special: "Boosts ATK of QCK characters by 2x for 1 turn",
        sailor: "Boosts base ATK and RCV of [QCK] characters by 75",
        specialName: "Electric Fist",
    },
    1657: {//Kanjuro
        captain: "Boosts ATK of Striker and Free Spirit characters by 2x",
        special: "Reduces Bind and Despair duration by 5 turns. If your Captain is a Striker character, locks the chain multiplier at 2.75x for 1 turn",
        sailor: "Makes [DEX] orbs \"beneficial\" for Striker characters if your Captain is a Striker character",
        sailorNotes: "#{beneficial}",
        specialName: "Summon Dragon",
    },
    1658: {//Kanjuro
        captain: "Boosts ATK of Striker and Free Spirit characters by 2.5x",
        special: "Reduces Bind and Despair duration by 5 turns. If your Captain is a Striker character, locks the chain multiplier at 2.75x for 1 turn",
        sailor: "Makes [DEX] orbs \"beneficial\" for Striker characters if your Captain is a Striker character",
        sailorNotes: "#{beneficial}",
        specialName: "Summon Dragon",
    },
    1659: {//Raizo
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Reduces Paralysis and Silence duration by 3 turns, switches orbs between slots 3 times",
        sailorNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        specialNotes: "#{silence}",
        specialName: "Ninja Arts - Bunshin no Jutsu",
    },
    1660: {//Raizo
        captain: "Boosts ATK of Shooter characters by 2.5x and makes [TND] and [RCV] orbs \"beneficial\" to Shooter characters",
        captainNotes: "#{beneficial}",
        special: "Reduces Paralysis and Silence duration by 3 turns, switches orbs between slots 3 times",
        sailorNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        specialNotes: "#{silence}",
        specialName: "Ninja Arts - Bunshin no Jutsu",
    },
    1661: {//Corazon
        captain: "Boosts ATK of [PSY], [QCK] and [DEX] characters by 2x and recovers 300 HP at end of each turn",
        special: [
            {
                "description": "Reduces Special Cooldown of Cerebral and Free Spirit characters by 1 turn.",
                "cooldown": [ 6, 6 ]
            },
            {
                "description": "Locks the chain multiplier at 2.5x for 1 turn and reduces Special Cooldown of Cerebral and Free Spirit characters by 1 turn.",
                "cooldown": [ 10, 10 ]
            }
        ],
        specialName: "The Sun under the Rain",
    },
    1662: {//Corazon
        captain: "Boosts ATK of [PSY], [QCK] and [DEX] characters by 2.5x and recovers 500 HP at end of each turn",
        special: [
            {
                "description": "Reduces Special Cooldown of Cerebral and Free Spirit characters by 1 turn.",
                "cooldown": [ 6, 6 ]
            },
            {
                "description": "Locks the chain multiplier at 2.5x for 1 turn and reduces Special Cooldown of Cerebral and Free Spirit characters by 1 turn.",
                "cooldown": [ 10, 10 ]
            }
        ],
        specialName: "The Sun under the Rain",
    },
    1663: {//6+ Rob Lucci
        special: "Deals 75x character's ATK in typeless damage to one enemy, greatly boosts chances of getting matching orbs for 3 turns",
        specialName: "Six Powers Supreme: Six King Gun",
        captain: "Boosts ATK of Powerhouse characters by 3.5x if they have a matching orb, by 2.5x otherwise, reduces crew's RCV to 0",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Powerhouse characters by 30",
            "level2": "Makes [RCV] and [TND] orbs \"beneficial\" for Powerhouse characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Powerhouse characters by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: Enrage" },
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
            { "description": "Acquire Sailor Ability 2: Makes [RCV] and [TND] orbs \"beneficial\" for Powerhouse characters" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
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
        potentialNotes: "#{enrage}"
    },
    1664: {//STR Aokiji
        captain: "Boosts ATK of Shooter characters by 2.5x",
        special: "Locks all orbs for 1 turn. If during that turn, you hit 2 PERFECTS and your Captain is a Shooter character, boosts ATK of Shooter characters by 2x for 1 turn in the following turn.",
        specialName: "Ice Saber",
    },
    1665: {//STR Aokiji
        captain: "Boosts ATK of Shooter characters by 2.5x and boosts ATK of Shooters by 3.25x after scoring 3 PERFECTS in a row",
        special: "Locks all orbs for 1 turn. If during that turn, you hit 2 PERFECTS and your Captain is a Shooter character, boosts ATK of Shooter characters by 2x for 1 turn in the following turn.",
        specialName: "Ice Saber",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of Shooter characters by 50",
            "level2": "Boosts base ATK of Shooter characters by 50",
        },
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Shooter characters by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of Shooter characters by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: If there are 6 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 2: If there are 6 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 3: If there are 6 Shooter characters in your crew, reduces No Healing duration by 1 turn",
                    "Level 4: If there are 6 Shooter characters in your crew, reduces No Healing duration by 2 turns",
                    "Level 5: If there are 6 Shooter characters in your crew, reduces No Healing duration by 3 turns"
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
    1666: {//Kyros
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Changes adjacent orbs into Matching Orbs and if HP is above 70%, amplifies the effect of orbs for Striker and Powerhouse characters by 1.5x for 1 turn",
        specialName: "Trueno Bastardo",
    },
    1667: {//Kyros
        captain: "Boosts HP of Striker characters by 1.2x and boosts ATK of Striker characters by 2.75x if HP is below 30% at the start of the turn, 2.25x otherwise",
        special: "Changes adjacent orbs into Matching Orbs and if HP is above 70%, amplifies the effect of orbs for Striker and Powerhouse characters by 1.5x for 1 turn",
        specialName: "Trueno Bastardo",
    },
    1668: {//Reborn Aokiji
        special: "Boosts ATK of Striker characters by 1.75x for 2 turns, locks all orbs for 2 turns",
        specialName: "Ice Block - Pheasant Beak [Neo]",
        captain: "Boosts ATK of Striker characters by 2x"
    },
    1669: {//Reborn Aokiji
        special: "Boosts ATK of Striker characters by 1.75x for 2 turns, locks all orbs for 2 turns",
        specialName: "Ice Block - Pheasant Beak [Neo]",
        captain: "Boosts ATK and HP of Striker characters by 2x"
    },
    1670: {//Shyarly
        captain: "Boosts ATK of [DEX] characters by 1.75x and their RCV by 1.2x",
        special: "Randomizes all non-matching orbs, switches orbs between slots two times and delays all enemies for 1 turn",
        specialName: "A Warning to the Fool",
    },
    1671: {//Camie
        captain: "Boosts RCV of Free Spirit characters by 1.5x",
        special: "Recovers 15% of crew's MAX HP and amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Cheerfulness that Shines in the Deep Sea",
    },
    1672: {//Pappagu
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        special: "Binds himself for 2 turns and reduces Despair and Silence duration by 3 turns",
        specialName: "A Starfish Reaching for His Beliefs",
    },
    1673: {//Swinsuit Perona
        captain: "Boosts ATK of all characters by 1.75x and boosts EXP gained by 1.2x",
        special: "Reduces damage received by 70% for 1 turn, reduces the defense of all enemies by 90% for 1 turn and reduces Silence duration by 2 turns.",
        specialNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
        specialName: "Romantic Princess",
    },
    1674: {//Swinsuit Perona
        captain: "Boosts ATK of all characters by 2.25x and boosts EXP gained by 1.5x",
        special: "Reduces damage received by 70% for 1 turn, reduces the defense of all enemies by 90% for 1 turn and reduces Silence duration by 2 turns.",
        specialNotes: "#{silence}",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
        specialName: "Romantic Princess",
    },
    1675: {//Kimono Zoro
        captain: "Boosts chain multiplier by 2x",
        special: "Boosts ATK of Slasher and Driven characters by 1.5x for 1 turn. If your Captain is a Slasher or Driven character, changes adjacent orbs into matching orbs and reduces Paralysis and Despair duration by 2 turns",
        sailor: "Reduces Blindness duration by 1 turn",
        specialName: "Great Swordsman Under the Umbrella",
    },
    1676: {//Kimono Zoro
        captain: "Boosts chain multiplier by 3.25 and reduce damage received by 10%",
        special: "Boosts ATK of Slasher and Driven characters by 1.5x for 1 turn. If your Captain is a Slasher or Driven character, changes adjacent orbs into matching orbs and reduces Paralysis and Despair duration by 2 turns",
        sailor: "Reduces Blindness duration by 1 turn",
        specialName: "Great Swordsman Under the Umbrella",
    },
    1677: {//Log Law
        captain: "Boosts ATK of Slasher characters by 2.5x",
        special: "Boosts the Color Affinity of Slasher by 1.5x for 1 turn, changes middle row orbs into matching orbs and switches orbs between slots three times",
        specialName: "ROOM: Kikoku",
    },
    1678: {//Log Law
        captain: "Boosts ATK of Slasher characters by 2.5x at the start of the chain, by 3.25x after the 3rd Perfect in a row",
        special: "Boosts the Color Affinity of Slasher by 1.5x for 1 turn, changes middle row orbs into matching orbs and switches orbs between slots three times",
        specialName: "ROOM: Kikoku",
        sailor: {
            "base": "None",
            "level1": "Completely resists Silence on this character",
            "level2": "Reduces Paralysis duration by 1 turn",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Acquire Sailor Ability 1: Completely resists Silence on this character" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 85" },
            { "description": "Acquire Sailor Ability 2: Reduces Paralysis duration by 1 turn" },
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
    1679: {//Kai Mihawk
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Black Blade Ship Cutter [Neo]",
        captain: "Boosts ATK of Slasher characters by 2x"
    },
    1680: {//Kai Mihawk
        special: "Cuts the current HP of each enemy by 30%",
        specialName: "Black Blade Ship Cutter [Neo]",
        captain: "Boosts ATK of Slasher characters by 2.5x"
    },
    1681: {//20th Anni Luffy
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x",
        special: "Cuts the current HP of each enemy by 20%, if Luffy is your Captain or Friend/Guest Captain, changes left column into Matching orbs, otherwise, adds .5x to Chain multiplier for 1 turn.",
        specialName: "Gomu Gomu no Tako Stamp",
        sailor: "Boosts base HP and ATK of all characters by 56",
    },
    1682: {//20th Anni Luffy
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x at the start of the chain and their HP by 1.3x, boosts all characters by 1.4x, 3.5x for characters with cost 30 or less, after the 3rd Perfect in a row",
        special: "Cuts the current HP of each enemy by 20%, if Luffy is your Captain or Friend/Guest Captain, changes left column into Matching orbs, otherwise, adds .5x to Chain multiplier for 1 turn.",
        specialName: "Gomu Gomu no Tako Stamp",
        sailor: "Boosts base HP and ATK of all characters by 56",
    },
    1683: {//20th Anni Robin
        captain: "Boosts ATK of Cerebral characters by 2x and their RCV by 1.3x",
        special: "Binds self for 1 turn, empties all slots with [BLOCK] orbs, deals several times the character's ATK in typeless damage to one enemy and boosts ATK against enemies with reduced defense by 1.5x for 2 turns",
        specialName: "Mil Fleur: Gigantesco Mano",
        specialNotes: "The exact multiplier used is chosen based on the number of [BLOCK] orbs consumed: 0 orbs - Unknown; 1 orb - 36x ATK; 2 orbs - 60x ATK; 3 orbs - 105x ATK; 4 orbs - 195x ATK; 5 orbs - 300x ATK; 6 orbs - 450x ATK.",
        sailor: "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a Fighter character",
        sailorNotes: "#{beneficial}",
    },
    1684: {//20th Anni Robin
        captain: "Boosts ATK of Cerebral characters by 2.5x and their RCV by 1.3x",
        special: "Binds self for 1 turn, empties all slots with [BLOCK] orbs, deals several times the character's ATK in typeless damage to one enemy and boosts ATK against enemies with reduced defense by 1.5x for 2 turns",
        specialName: "Mil Fleur: Gigantesco Mano",
        specialNotes: "The exact multiplier used is chosen based on the number of [BLOCK] orbs consumed: 0 orbs - Unknown; 1 orb - 36x ATK; 2 orbs - 60x ATK; 3 orbs - 105x ATK; 4 orbs - 195x ATK; 5 orbs - 300x ATK; 6 orbs - 450x ATK.",
        sailor: "Makes [TND] orbs \"beneficial\" for all characters if your Captain is a Fighter character",
        sailorNotes: "#{beneficial}",
    },
    1685: {//20th Anni Usopp
        captain: "Boosts ATK of Shooter characters by 2.75x following a chain of Good > Great > Perfect hits",
        special: "Changes [EMPTY] orbs into Matching orbs, changes Badly Matching orbs into [RCV] orbs and delays all enemies for 1 turn",
        specialName: "Green Star: Bamboo Javelin-Grove",
        sailor: "Reduces Silence duration on this character by 4 turns",
        sailorNotes: "#{silence}",
    },
    1686: {//20th Anni Usopp
        captain: "Boosts ATK of Shooter characters by 3.25x following a chain of Good > Great > Perfect hits",
        special: "Changes [EMPTY] orbs into Matching orbs, changes Badly Matching orbs into [RCV] orbs and delays all enemies for 1 turn",
        specialName: "Green Star: Bamboo Javelin-Grove",
        sailor: "Reduces Silence duration on this character by 4 turns",
        sailorNotes: "#{silence}",
    },
    1687: {//20th Anni Franky
        captain: "Boosts ATK of Fighter characters by 2x and reduce damage received by 10%",
        special: "Changes own orb into [DEX], deals 15 hits of random typeless damage to random enemies and reduces the defense of all enemies by 100% for 2 turns",
        specialNotes: "#{randomHits : 15}<br>#{random : ??? : ??? : for each hit}",
        specialName: "Franky Iron BOXING",
        sailor: "Restores his own special by 3 turns when it is rewinded",
        sailorNotes: "#{rewind : 3}",
    },
    1688: {//20th Anni Franky
        captain: "Boosts ATK of Fighter characters by 2.5x and reduce damage received by 15%",
        special: "Changes own orb into [DEX], deals 15 hits of random typeless damage to random enemies and reduces the defense of all enemies by 100% for 2 turns",
        specialNotes: "#{randomHits : 15}<br>#{random : ??? : ??? : for each hit}",
        specialName: "Franky Iron BOXING",
        sailor: "Restores his own special by 3 turns when it is rewinded",
        sailorNotes: "#{rewind : 3}",
    },
    1689: {//Fortnight Kid
        captain: "Boosts ATK of all characters by 1.5x at the start of the chain, by 2.25x following a chain of STR > DEX > INT attacks no lower than Good",
        special: "Cuts the current HP of one enemy by 20% and and boosts own ATK by 2x for 1 turn",
        specialName: "Iron Giant Palm Slam",
    },
    1690: {//Fortnight Kid
        captain: "Boosts ATK of all characters by 2x at the start of the chain, by 3x following a chain of STR > DEX > INT attacks no lower than Good",
        special: "Cuts the current HP of one enemy by 20% and and boosts own ATK by 2x for 1 turn",
        specialName: "Iron Giant Palm Slam",
    },
    1691: {//Heat
        captain: "Boosts ATK of Shooter characters by 1.75x",
        special: "Boosts ATK against enemies with reduced defense by 1.3x for 1 turn, changes the captain's [STR], [DEX], [QCK], [INT], or [PSY] orbs into Matching orbs.",
        specialName: "Aim and Burn",
    },
    1692: {//Wire
        captain: "Boosts HP of Driven characters by 1.5x",
        special: "Adds .3x to Chain multiplier and reduces the defense of all enemies by 50% for 1 turn",
        specialName: "Three Wind Tunnels",
    },
    1693: {//Inuarashi
        captain: "Boosts ATK of [PSY] characters by 2x",
        special: "Reduces crew's current HP by 50%, deals 50000 Fixed damage to one enemy, boosts own ATK by 1.75x for 1 turn, amplifies the effect of own orb by 1.75x for 1 turn and changes own orb to [PSY].",
        specialNotes: "Boosted ATK and Orb Effectiveness only works for the character who uses their own Special.",
        specialName: "King's Lightning Burial",
    },
    1694: {//Inuarashi
        captain: "Boosts ATK of [PSY] characters by 2.75x",
        special: "Reduces crew's current HP by 50%, deals 50000 Fixed damage to one enemy, boosts own ATK by 1.75x for 1 turn, amplifies the effect of own orb by 1.75x for 1 turn and changes own orb to [PSY].",
        specialNotes: "Boosted ATK and Orb Effectiveness only works for the character who uses their own Special.",
        specialName: "King's Lightning Burial",
    },
    1695: {//Vergo
        captain: "Boosts ATK of Striker characters by 2x",
        special: "Deals 50x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Striker characters by 1.75x for 1 turn and reduces damage received by 50% for 1 turn",
        specialName: "The Darkest Demon",
    },
    1696: {//Vergo
        captain: "Boosts ATK of Striker characters by 2.5x and reduces damage received by 10%",
        special: "Deals 50x character's ATK in [DEX] damage to one enemy, amplifies the effect of orbs for Striker characters by 1.75x for 1 turn and reduces damage received by 50% for 1 turn",
        specialName: "The Darkest Demon",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Striker characters by 25",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Striker characters by 25" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: [QCK] Damage Reduction" },
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
    1697: {//Magellan
        captain: "Boosts ATK of all characters by 2.25x and their HP by 1.5x if there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew. Cuts the current HP of each enemy by 15% at the end of each turn",
        special: "Inflicts Toxic to all enemies, recovers 13x character's RCV in HP at the end of each turn for 3 turns",
        specialNotes: "Toxic starts at 50x character's attack and increases by 2x at the end of every turn until 2,000,000 damage per turn.",
        specialName: "Venom Cloud",
    },
    1698: {//Magellan
        captain: "Boosts ATK of all characters by 2.25x and their HP by 1.5x if there's a [STR], [DEX], [QCK], [PSY] and [INT] character in your crew. Cuts the current HP of each enemy by 15% at the end of each turn",
        special: "Inflicts Toxic to all enemies, recovers 13x character's RCV in HP at the end of each turn for 3 turns",
        specialNotes: "Toxic starts at 50x character's attack and increases by 2x at the end of every turn until 2,000,000 damage per turn.",
        specialName: "Venom Cloud",
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
                    "Level 1: If HP is below 10% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 30% at the start of the turn, heals for 3x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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
    1699: {//Jinbe
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.2x",
        special: "Adds .3x to Chain multiplier for 2 turns, reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 3 turns",
        specialName: "Gentle Ultrasound Wave",
        sailor: "Boosts base ATK of Fighter characters by 75",
    },
    1700: {//Jinbe
        captain: "Boosts ATK of Fighter characters by 2.5x and their HP by 1.3x",
        special: "Adds .3x to Chain multiplier for 2 turns, reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 3 turns",
        specialName: "Gentle Ultrasound Wave",
        sailor: {
            "base": "Boosts base ATK of Fighter characters by 75",
            "level1": "Boost HP of all characters by 40 if your Captain is a Fighter character",
        },
        limit: [
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Sailor Ability 1: Boost HP of all characters by 40 if your Captain is a Fighter character" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Potential 2: Enrage" },
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
    1701: {//Ivankov
        captain: "Boosts ATK of Free Spirit characters by 2x",
        special: [
            {
                "description": "Randomizes all orbs",
                "cooldown": [ 9, 4 ]
            },
            {
                "description": "Changes [BLOCK] orbs into Matching orbs",
                "cooldown": [ 12, 7 ]
            },
            {
                "description": "Changes [BLOCK] and Badly Matching orbs into Matching orbs",
                "cooldown": [ 15, 10 ]
            }
        ],
        specialName: "Hair Removal Fist",
        specialNotes: "#{stages}",
        sailor: "Completely resists Paralysis on this character",
    },
    1702: {//Ivankov
        captain: "Boosts ATK of Free Spirit characters by 2.5x, recovers 2x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Randomizes all orbs",
                "cooldown": [ 9, 4 ]
            },
            {
                "description": "Changes [BLOCK] orbs into Matching orbs",
                "cooldown": [ 12, 7 ]
            },
            {
                "description": "Changes [BLOCK] and Badly Matching orbs into Matching orbs",
                "cooldown": [ 15, 10 ]
            }
        ],
        specialName: "Hair Removal Fist",
        specialNotes: "#{stages}",
        sailor: {
            "base": "Completely resists Paralysis on this character",
            "level1": "When any other Free Spirit character uses a special, reduces own cooldown by 1 turn",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: When any other Free Spirit character uses a special, reduces own cooldown by 1 turn" },
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
                    "Level 5: If you hit a perfect with this character, there is a 30% chance to deal 7% of this character's attack in extra damage"
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
    1703: {//Hannyabal
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Reduces damage received by 50% for 2 turns and boosts ATK against enemies inflicted with Toxic by 1.75x for 2 turns",
        specialName: "Inferno Hell Wheel",
        sailor: "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this unit if your Captain is a Striker character",
        sailorNotes: "#{beneficial}",
    },
    1704: {//Hannyabal
        captain: "Boosts ATK of [INT] characters by 2.5x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces damage received by 50% for 2 turns and boosts ATK against enemies inflicted with Toxic by 1.75x for 2 turns",
        specialName: "Inferno Hell Wheel",
        sailor: {
            "base": "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this unit if your Captain is a Striker character",
            "level1": "Makes [RCV] and [TND] orbs \"beneficial\" for this unit if your Captain is a Driven character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] and [TND] orbs \"beneficial\" for this unit if your Captain is a Driven character" },
            { "description": "Boosts base HP by 200" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Enrage" },
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
    1705: {//Bon Clay
        captain: "Boosts ATK of [STR] characters by 2x",
        special: "Removes all positive buffs on your team. If the special is activated with more than 50% health remaining, protects from defeat for 1 turn",
        specialName: "A Speech Left in Hell",
        sailor: "Boosts base ATK, HP and RCV of all characters by 50",
    },
    1706: {//Bon Clay
        captain: "Boosts ATK of [STR] characters by 2.5x at the start of the chain and boosts ATK of [STR] characters by 3.125x after scoring 3 Perfects in a row",
        special: "Removes all positive buffs on your team. If the special is activated with more than 50% health remaining, protects from defeat for 1 turn",
        specialName: "A Speech Left in Hell",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of all characters by 50",
            "level1": "Restores his own special by 2 turns when it is rewinded",
        },
        limit: [
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 130" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Restores his own special by 2 turns when it is rewinded" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Enrage" },
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
    1707: {//Shanks 6+
        captain: "Boosts ATK of [PSY] characters by 2.75x and their HP by 1.3x. Boosts chances of getting [PSY] orbs proportionally to the crew's current HP.",
        captainNotes: "At 1 HP, the rate of [PSY] orbs is ???% and at full HP, the rate of [PSY] orbs is ???%",
        special: "Reduces the defense of all enemies by 100% for 1 turn, deals 75x character's ATK in typeless damage to one enemy and changes all orbs to [PSY] orbs",
        specialName: "One-Armed Man that Splits the Heavens",
    },
    1708: {//Summer Nami
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Striker and Cerebral characters by 1 turn, reduces Paralysis duration by 2 turns and randomizes all non-matching orbs",
        specialName: "Cat Burglar's Eye Contact",
        sailor: "Makes [TND] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1709: {//Summer Nami
        captain: "Boosts ATK of all characters by 1.5x, recovers 4x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Striker and Cerebral characters by 1 turn, reduces Paralysis duration by 2 turns and randomizes all non-matching orbs",
        specialName: "Cat Burglar's Eye Contact",
        sailor: "Makes [TND] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1710: {//Summer Robin
        captain: "Boosts ATK and RCV of Cerebral characters by 1.2x",
        special: "Amplifies the effect of orbs for Cerebral characters by 1.75x for 1 turn and reduces damage received by 30% for 2 turns",
        specialName: "Charmed by a Lovely Adult",
        sailor: "Reduces Blindness duration by 2 turns",
    },
    1711: {//Summer Robin
        captain: "Boosts RCV of Cerebral characters by 1.2x and boosts ATK by 3x if they have a matching orb, by 1.5x otherwise.",
        special: "Amplifies the effect of orbs for Cerebral characters by 1.75x for 1 turn and reduces damage received by 30% for 2 turns",
        specialName: "Charmed by a Lovely Adult",
        sailor: "Reduces Blindness duration by 2 turns",
    },
    1712: {//Akainu
        captain: "Boosts ATK of Driven characters by 2.5x.",
        special: "Deals 50x character's ATK as typeless damage to all enemies. Amplifies the effect of orbs for Driven characters by 2x for 1 turn.",
        specialName: "Blazing Hound Crimson Lotus",
    },
    1713: {//Akainu
        captain: "Boosts ATK of Driven characters by 2.5x. If you defeat an enemy last turn, increases ATK boost slightly. Stacks up to 3 times to a maximum of 3.25x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Deals 50x character's ATK as typeless damage to all enemies. Amplifies the effect of orbs for Driven characters by 2x for 1 turn.",
        specialName: "Blazing Hound Crimson Lotus",
        sailor: {
            "base": "None",
            "level1": "Makes [STR] orbs \"beneficial\" for this unit",
            "level2": "Makes [INT] orbs \"beneficial\" for Driven characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Sailor Ability 1: Makes [STR] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 2: Makes [INT] orbs \"beneficial\" for Driven characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
    1714: {//Monet
        captain: "Boosts ATK of INT characters by 2x. Recovers 2x character's RCV in HP at the end of each turn",
        special: "Deals 10x character's ATK in [INT] damage to all enemies. Randomly changes all orbs into either [TND], [BOMB] or [RCV] orbs.",
        specialName: "Devouring Blizzard",
    },
    1715: {//Vergo
        captain: "Boosts ATK of Striker characters by 2.5x if they have a matching orb, by 2x otherwise",
        special: "Changes own orb into [QCK], locks all orbs for 1 turn",
        specialName: "Sealed Mouth Exterminator",
    },
    1716: {//Caesar
        captain: "Reduces HP of all characters by 50%, boosts ATK of Driven characters by 1.2x, increases his own ATK multiplier by 0.1x at the end of each turn until it reaches 3x",
        special: "Delays all enemies for 1 turn. For Driven characters, Changes [EMPTY] orbs into Matching orbs. Boosts ATK of Driven characters by 1.75x if HP is below 30% when the special is activated.",
        specialName: "Massacre GAS",
    },
    1717: {//Vegapunk Dragon
        captain: "Reduces cooldown of Shooter specials by 2 turns at the start of the fight",
        special: "Deals 3x character's ATK in [QCK] damage to all enemies",
        specialName: "High Maneuverable Fireball Blast",
    },
    1718: {//Buffalo
        captain: "Boosts ATK of Driven characters by 2.5x until the first hit other than Perfect",
        special: "Boosts ATK of Driven characters by 1.25x for 5 turns",
        specialName: "Rolling Rotation",
    },
    1719: {//Baby 5
        captain: "Boosts ATK of [PSY] characters by 2x if they have matching orbs, makes INT orbs \"beneficial\" to PSY characters",
        captainNotes: "#{beneficial}",
        special: "Changes adjacent orbs into [G] orbs",
        specialName: "Phantasmagoric \"Weapon-Morphosis\"",
    },
    1720: {//Secret Jinbe
        captain: "Boosts ATK of Fighter characters by 2.5x",
        special: "If your Captain is a Fighter character, changes adjacent orbs into matching orbs and locks the chain multiplier at 2.5x for 1 turn",
        specialName: "Passive Aggressive Boss"
    },
    1721: {//Secret Jinbe
        captain: "Boosts HP of Fighter characters by 1.4x and boosts ATK by 2.75x if they have a matching orb, by 2.5x otherwise.",
        special: "If your Captain is a Fighter character, changes adjacent orbs into matching orbs and locks the chain multiplier at 2.5x for 1 turn",
        specialName: "Passive Aggressive Boss",
        sailor: {
            "base": "None",
            "level1": "Makes [STR] and [DEX] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 1: Makes [STR] and [DEX] orbs \"beneficial\" for this unit" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
    1722: {//Neptune
        captain: "Boosts ATK of Striker characters by 2x.",
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn and Changes own orb into [PSY] if HP is below 30% when the special is activated and deals 20,000 Fixed damage to one enemy.",
        specialName: "Sea God's Strike"
    },
    1723: {//Neptune
        captain: "Boosts ATK of Striker characters by 2x and their RCV by 1.2x.",
        special: "Boosts ATK of Striker characters by 1.5x for 1 turn and Changes own orb into [PSY] if HP is below 30% when the special is activated and deals 20,000 Fixed damage to one enemy.",
        specialName: "Sea God's Strike"
    },
    1724: {//Fukaboshi
        captain: "Boosts ATK of Powerhouse characters by 1.5x",
        special: "Reduces crew's current HP by 50%, adds 25x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 25x}",
        specialName: "Sun's Hope"
    },
    1725: {//Fukaboshi
        captain: "Slightly boosts chances Powerhouse characters of getting Matching orbs, boosts ATK of Powerhouse characters by 1.5x",
        special: "Reduces crew's current HP by 50%, adds 25x character's ATK as Additional Typeless Damage for 1 turn",
        specialNotes: "#{additionalDamage : 25x}",
        specialName: "Sun's Hope"
    },
    1726: {//Sabo
        captain: "Boosts ATK of Free Spirit characters by 2.75x following a chain of Good > Great > Perfect hits",
        specialName: "Dragon Claw Fist: Dragon's Breath [Neo]",
        special: "Deals random typeless damage to all enemies. Adds 55x character's ATK as Additional Typeless Damage for 2 turns",
        specialNotes: "#{random : 10,000 : 30,000} <br> Extra Damage can only be boosted by conditional Boosters"
    },
    1727: {//Sabo
        captain: "Boosts ATK of Free Spirit characters by 3.5x following a chain of Good > Great > Perfect hits",
        specialName: "Dragon Claw Fist: Dragon's Breath [Neo]",
        special: "Deals random typeless damage to all enemies. Adds 55x character's ATK as Additional Typeless Damage for 2 turns",
        specialNotes: "#{random : 10,000 : 30,000} <br> Extra Damage can only be boosted by conditional Boosters"
    },
    1728: {//Tashigi
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2x",
        special: "Randomly changes all orbs, includiong [BLOCK] orbs, into either [STR], [DEX] or [QCK] orbs, removes enemies' ATK Up Buffs and recovers 2,000 HP",
        sailor: "Boosts base ATK, HP and RCV of [STR], [DEX] and [QCK] characters by 30",
        specialName: "Destructive Water Splash",
    },
    1729: {//Tashigi
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.25x and their HP by 1.25x. Recovers 3x character's RCV in HP at the end of each turn",
        special: "Randomly changes all orbs, includiong [BLOCK] orbs, into either [STR], [DEX] or [QCK] orbs, removes enemies' ATK Up Buffs and recovers 2,000 HP",
        sailor: "Boosts base ATK, HP and RCV of [STR], [DEX] and [QCK] characters by 30",
        specialName: "Destructive Water Splash",
    },
    1730: {//Vivi
        captain: "Boosts ATK of all characters by 2x",
        special: "Reduces Special Cooldown of all characters by 2 turns, reduces Paralysis duration by 3 turns, reduces damage received by 60% for 2 turns",
        sailor: "Restores her own special by 3 turns when it is rewinded",
        sailorNotes: "#{rewind : 3}",
        specialName: "Shining Brightly Upon the Oasis",
    },
    1731: {//Vivi
        captain: "Boosts amount of Beli received by 2.5x and boosts ATK of all characters by 2x",
        special: "Reduces Special Cooldown of all characters by 2 turns, reduces Paralysis duration by 3 turns, reduces damage received by 60% for 2 turns",
        sailor: "Restores her own special by 3 turns when it is rewinded",
        sailorNotes: "#{rewind : 3}",
        specialName: "Shining Brightly Upon the Oasis",
    },
    1732: {//Nekomamushi
        captain: "Boosts ATK of [STR] characters by 2x, boosts HP of Striker and Powerhouse characters by 1.1x",
        special: "Deals 50x character's ATK in fixed typeless damage to one enemy that will ignore damage negating abilities and barriers. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, boosts ATK of Striker and Powerhouse characters by 1.75x for 1 turn and changes all orbs, including [BLOCK] orbs, into Matching orbs",
        specialNotes: "#{ignoreBarrier}<br\>#{fixed}",
        specialName: "Battle Guardian",
    },
    1733: {//Nekomamushi
        captain: "Boosts ATK of [STR] characters by 2.5x, boosts HP of Striker and Powerhouse characters by 1.25x",
        special: "Deals 50x character's ATK in fixed typeless damage to one enemy that will ignore damage negating abilities and barriers. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, boosts ATK of Striker and Powerhouse characters by 1.75x for 1 turn and changes all orbs, including [BLOCK] orbs, into Matching orbs",
        specialNotes: "#{ignoreBarrier}<br\>#{fixed}",
        specialName: "Battle Guardian",
    },
    1734: {//Sugar
        captain: "Boosts ATK of Cerebral and Fighter characters by 1.5x and recovers 3x character's RCV in HP at the end of each turn",
        special: "Changes bottom right orb to [STR] and bottom left orb to [INT]. Switches orbs between slots twice.",
        specialName: "Toy's Close Combat",
    },
    1735: {//Sugar
        captain: "Boosts ATK of Cerebral and Fighter characters by 1.75x and recovers 3x character's RCV in HP at the end of each turn",
        special: "Changes bottom right orb to [STR] and bottom left orb to [INT]. Switches orbs between slots twice.",
        specialName: "Toy's Close Combat",
    },
    1736: {//Trebol
        captain: "Boosts ATK of [INT] characters by 2.25x. Reduces damage received by 10%",
        special: "Delays all enemies for 1 turn and deals 20x character's ATK as [INT] damage to all enemies at the end of the turn for 2 turns",
        specialName: "Sticky Sticky Burning Explosion",
    },
    1737: {//Trebol
        captain: "Boosts ATK of [INT] characters by 2.25x and their HP by 1.2x. Reduces damage received by 10%",
        special: "Delays all enemies for 1 turn and deals 20x character's ATK as [INT] damage to all enemies at the end of the turn for 2 turns",
        specialName: "Sticky Sticky Burning Explosion",
    },
    1738: {//Raid Bellamy
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Cuts the current HP of one enemy by 10%, makes [PSY] and [INT] orbs \"beneficial\" for 1 turn and amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Spring Hopper - Bullet [Neo]",
    },
    1739: {//Raid Bellamy
        captain: "Boosts ATK of Driven characters by 2.5x",
        special: "Cuts the current HP of one enemy by 10%, makes [PSY] and [INT] orbs \"beneficial\" for 1 turn and amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Spring Hopper - Bullet [Neo]",
    },
    1740: {//Sandersonia
        captain: "Boosts ATK of Striker and Powerhouse characters by 2x and boosts HP of [DEX] characters by 1.1x",
        special: "Changes all orbs to [DEX] orbs, reduces the defense of all enemies by 80% for 2 turns and boosts ATK of Striker and Powerhouse characters by 1.75x for 2 turns",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        specialName: "Snake Hair Possession: Eight-Headed Serpent",
    },
    1741: {//Sandersonia
        captain: "Boosts ATK of Striker and Powerhouse characters by 2.5x and boosts HP of [DEX] characters by 1.3x",
        special: "Changes all orbs to [DEX] orbs, reduces the defense of all enemies by 80% for 2 turns and boosts ATK of Striker and Powerhouse characters by 1.75x for 2 turns",
        sailor: {
            "base": "Makes [STR] orbs \"beneficial\" for this unit",
            "level1": "Boosts this character's attack against [STR] characters by 2x",
        },
        sailorNotes: "#{beneficial}",
        specialName: "Snake Hair Possession: Eight-Headed Serpent",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts this character's attack against [STR] characters by 2x" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1742: {//Marigold
        captain: "Boosts ATK of Striker and Powerhouse characters by 2x and boosts HP of [STR] characters by 1.1x",
        special: "Changes [QCK] and [DEX] orbs into Matching orbs, boosts ATK against enemies with reduced defense by 1.75x for 2 turns and reduces damage received by 60% for 1 turn",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        specialName: "Snake Hair Possession: Salamander",
    },
    1743: {//Marigold
        captain: "Boosts ATK of Striker and Powerhouse characters by 2.5x and boosts HP of [STR] characters by 1.3x",
        special: "Changes [QCK] and [DEX] orbs into Matching orbs, boosts ATK against enemies with reduced defense by 1.75x for 2 turns and reduces damage received by 60% for 1 turn",
        sailor: {
            "base": "Makes [DEX] orbs \"beneficial\" for this unit",
            "level1": "Boosts this character's attack against [QCK] characters by 2x",
        },
        sailorNotes: "#{beneficial}",
        specialName: "Snake Hair Possession: Salamander",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts this character's attack against [QCK] characters by 2x" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
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
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 1 turn",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1744: {//Marguerite
        captain: "Boosts ATK of Shooter characters by 2x",
        special: "Cuts the current HP of one enemy by 7% and amplifies the effect of orbs for Shooter characters by 1.75x for 3 turns",
        sailor: "Boosts base ATK, HP and RCV of Shooter characters by 30",
        specialName: "Defender's Spade-Shaped Arrow",
    },
    1745: {//Marguerite
        captain: "Boosts ATK of Shooter characters by 2x and recovers 2x character's RCV in HP at the end of each turn",
        special: "Cuts the current HP of one enemy by 7% and amplifies the effect of orbs for Shooter characters by 1.75x for 3 turns",
        sailor: {
            "base": "Boosts base ATK, HP and RCV of Shooter characters by 30",
            "level1": "Reduces Blindness duration by 3 turns",
        },
        specialName: "Defender's Spade-Shaped Arrow",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Reduces Blindness duration by 3 turns" },
            { "description": "Boosts base HP by 70" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire 1 additional Socket slot" },
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
    1746: {//Boa Hancock
        captain: "Boosts ATK of Shooter characters by a variable factor between 2.5x and 3.25x based on the timing of the attack of the previous unit in the chain and recovers 1,000 HP at end of each turn. Greatly reduces chances of getting [TND] and [RCV] orbs",
        captainNotes: "A hit below Good or a Miss will boost the ATK of the next unit by 2.5x, a Good hit by 2.75x, a Great hit by 3x and a Perfect hit by 3.25x. This bonus is applied only to Shooter characters.",
        special: "Deals 6 hits of 20,000 fixed damage to random enemies, delays all enemies for 1 turn and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for Shooter characters for 2 turns",
        specialNotes: "#{beneficial}",
        specialName: "Pistol Kisses",
    },
    1747: {//Boa Hancock
        captain: "Boosts ATK of Shooter characters by a variable factor between 2.5x and 3.25x based on the timing of the attack of the previous unit in the chain and recovers 1,000 HP at end of each turn. Greatly reduces chances of getting [TND] and [RCV] orbs",
        captainNotes: "A hit below Good or a Miss will boost the ATK of the next unit by 2.5x, a Good hit by 2.75x, a Great hit by 3x and a Perfect hit by 3.25x. This bonus is applied only to Shooter characters.",
        special: "Deals 6 hits of 20,000 fixed damage to random enemies, delays all enemies for 1 turn and makes [STR], [DEX], [QCK], [PSY] and [INT] orbs \"beneficial\" for Shooter characters for 2 turns",
        specialNotes: "#{beneficial}",
        specialName: "Pistol Kisses",
        sailor: {
            "base": "None",
            "level1": "Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this unit if your Captain is a Free Spirit character",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 1: Makes [STR], [QCK], [DEX], [PSY] and [INT] orbs \"beneficial\" for this unit if your Captain is a Free Spirit character" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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
    1748: {//Bepo
        captain: "Boosts ATK and HP of QCK characters by 1.5x",
        special: "Cuts the current HP of one enemy by 15% and reduces enemy's Threshold Damage Reduction duration by 5 turns",
        sailor: "If this character has a [QCK] orb and you hit a Perfect with him, keep his [QCK] orb for the next turn",
        specialName: "Bear Rush Out",
    },
    1749: {//Bepo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK and HP of QCK characters by 2x",
        special: "Cuts the current HP of one enemy by 15% and reduces enemy's Threshold Damage Reduction duration by 5 turns",
        sailor: {
            "base": "If this character has a [QCK] orb and you hit a Perfect with him, keep his [QCK] orb for the next turn",
            "level1": "Makes [DEX] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        specialName: "Bear Rush Out",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire 1 additional Socket slot" },
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
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    1750: {//Korea Law
        captain: "Boosts ATK of Striker characters by 3x and heals for .5x his RCV at the end of the turn each time you hit a Perfect",
        special: [
            {
                "description": "Deals 50,000 fixed damage to one enemy and amplifies the effect of orbs for Striker characters by 1.75x for 1 turn",
                "cooldown": [ 15, 10 ]
            },
            {
                "description": "Deals 300,000 fixed damage to one enemy and amplifies the effect of orbs for Striker characters by 2.25x for 1 turn",
                "cooldown": [ 20, 15 ]
            }
        ],
        specialNotes:"#{stages}",
        specialName: "Injection Shot",
    },
    1751: {//Korea Law
        captain: "Boosts ATK of Striker characters by 3x and heals for .5x his RCV at the end of the turn each time you hit a Perfect",
        special: [
            {
                "description": "Deals 50,000 fixed damage to one enemy and for Striker characters, amplifies the effect of orbs by 1.75x for 1 turn",
                "cooldown": [ 15, 10 ]
            },
            {
                "description": "Deals 300,000 fixed damage to one enemy and for Striker characters, amplifies the effect of orbs by 2.25x for 1 turn",
                "cooldown": [ 20, 15 ]
            }
        ],
        specialNotes:"#{stages}",
        specialName: "Injection Shot",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Striker characters by 50",
            "level2": "Makes [RCV] and [TND] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Striker characters by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 2: Reduce No Healing Duration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 2: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 2 turns",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 80%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
        ]
    },
    1752: {//20th Anni Zoro
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x",
        special: "Deals 60x character's ATK in [INT] damage to one enemy. Boosts ATK of characters with 30 cost or less by 1.75x for 1 turn. If Zoro is a Capain or Friend/Guest Captain, then if during that turn you score 4 Perfect hits, boosts ATK of characters with 30 cost or less by 2x in the following turn.",
        sailor: "Boosts base ATK of Slasher characters by 50",
        specialName: "Three Sword Style: Ultra Tiger Hunting",
    },
    1753: {//20th Anni Zoro
        captain: "Boosts ATK of characters with cost 30 or less by 2.5x at the start of the chain and their HP by 1.3x, boosts all characters by 1.4x, 3.5x for characters with cost 30 or less, after the 3rd Perfect in a row",
        special: "Deals 60x character's ATK in [INT] damage to one enemy. Boosts ATK of characters with 30 cost or less by 1.75x for 1 turn. If Zoro is a Capain or Friend/Guest Captain, then if during that turn you score 4 Perfect hits, boosts ATK of characters with 30 cost or less by 2x in the following turn.",
        sailor: "Boosts base ATK of Slasher characters by 50",
        specialName: "Three Sword Style: Ultra Tiger Hunting",
    },
    1754: {//20th Anni Sanji
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2x",
        special: "Cuts the current HP of one enemy by 15%, removes Poison and amplifies the effects of orbs by 1.75x for 1 turn",
        sailor: "Boosts base ATK, HP and RCV of all characters by 40",
        specialName: "Diable Jambe: Collier Strike",
    },
    1755: {//20th Anni Sanji
        captain: "Boosts ATK of Fighter and Powerhouse characters by 2.5x and their HP by 1.2x",
        special: "Cuts the current HP of one enemy by 15%, removes Poison and amplifies the effects of orbs by 1.75x for 1 turn",
        sailor: "Boosts base ATK, HP and RCV of all characters by 40",
        specialName: "Diable Jambe: Collier Strike",
    },
    1756: {//20th Anni Nami
        captain: "Recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces damage received by 80% for 1 turn, reduces enemy's Threshold Damage Reduction and ATK UP duration by 3 turns",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        specialName: "Gust Sword",
    },
    1757: {//20th Anni Nami
        captain: "Recovers 5x character's RCV in HP at the end of each turn",
        special: "Reduces damage received by 80% for 1 turn, reduces enemy's Threshold Damage Reduction and ATK UP duration by 3 turns",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        specialName: "Gust Sword",
    },
    1758: {//20th Anni Brook
        captain: "Boosts ATK of Free Spirit characters by 2x and their RCV by 1.1x",
        special: "Delays all enemies for 1 turn, reduces Paralysis, Bind and Despair duration by 1 turn.",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        specialName: "Party Music: Quinte Tierce Fantasia",
    },
    1759: {//20th Anni Brook
        captain: "Boosts ATK of Free Spirit characters by 2.5x and their RCV by 1.2x",
        special: "Delays all enemies for 1 turn, reduces Paralysis, Bind and Despair duration by 1 turn.",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        specialName: "Party Music: Quinte Tierce Fantasia",
    },
    1760: {//20th Anni Chopper
        captain: "Boosts ATK of [DEX] and [INT] characters by 2x",
        special: "Changes the orbs in the left column into [INT], [RCV] and [DEX], the orbs in the right column into [INT], [PSY] and [DEX]",
        sailor: "Restores his own special by 2 turns when it is rewinded and reduces Silence duration on this character by 2 turns",
        sailorNotes: "#{silence}<br>#{rewind : 2}",
        specialName: "Intelligent Monster",
    },
    1761: {//20th Anni Chopper
        captain: "Boosts ATK of [DEX] and [INT] characters by 2.5x",
        special: "Changes the orbs in the left column into [INT], [RCV] and [DEX], the orbs in the right column into [INT], [PSY] and [DEX]",
        sailor: "Restores his own special by 2 turns when it is rewinded and reduces Silence duration on this character by 2 turns",
        sailorNotes: "#{silence}<br>#{rewind : 2}",
        specialName: "Intelligent Monster",
    },
    1762: {//Rob Lucci
        captain: "Boosts ATK of Powerhouse characters by 2.5x and their HP by 1.2x at the start of the chain. Reduces RCV of all characters by 50%.<br>Boosts ATK of Powerhouse characters by 2.75x after the 1st Perfect in a row, by 3.025x after the 2nd Perfect in a row, by 3.3275x after the 3rd Perfect in a row, by 3.66025x after the 4th Perfect in a row and by 4.026275x after the 5th Perfect in a row.",
        special: "Reduces the defense of all enemies by 80% for 2 turns, deals 50x character's ATK in typeless damage to all enemies and changes all orbs on Powerhouse characters into Matching orbs, recovers 20% of crew's MAX HP.",
        specialName: "Flying Finger Gun: Fire Sting",
    },
    1763: {//Rob Lucci
        captain: "Boosts ATK of Powerhouse characters by 2.5x and their HP by 1.2x at the start of the chain. Reduces RCV of all characters by 50%.<br>Boosts ATK of Powerhouse characters by 2.75x after the 1st Perfect in a row, by 3.025x after the 2nd Perfect in a row, by 3.3275x after the 3rd Perfect in a row, by 3.66025x after the 4th Perfect in a row and by 4.026275x after the 5th Perfect in a row.",
        special: "Reduces the defense of all enemies by 80% for 2 turns, deals 50x character's ATK in typeless damage to all enemies and changes all orbs on Powerhouse characters into Matching orbs, recovers 20% of crew's MAX HP.",
        specialName: "Flying Finger Gun: Fire Sting",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Powerhouse characters by 50",
            "level2": "Completely resists Paralysis on this character",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Powerhouse characters by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 2: Enrage" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 2: Completely resists Paralysis on this character" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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
    1764: {//6+ Aokiji
        captain: "Boosts ATK of all characters by 2.25x and their HP by 1.25x. If you defeat an enemy, increases ATK boost slightly. Stacks up to 5 times to a maximum of 3.5x.",
        captainNotes: "If a character dies and revives, it counts as killing a character. If you did not defeat an enemy, lose all ATK boost stacks.",
        special: "Increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 1 turn, locks the chain multiplier at 2.5x for 1 turn and deals 100,000 fixed damage to all enemies that will ignore damage negating abilities and barriers.",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Determined Man's Ice Attack",
    },
    1765: {//Blue Gilly
        captain: "Boosts ATK of Fighter characters by 1.5x",
        special: "Deals 10 hits of 5x character's ATK in typeless damage to random enemies, reduces the defense of all enemies by 50% for 1 turn, randomizes non-matching orbs, including [BLOCK] orbs",
        specialName: "Jao Kun Do Consecutive Thrusting Kick",
    },
    1766: {//Blue Gilly
        captain: "Boosts chain multiplier by 1.5x and boosts ATK of Fighter characters by 1.5x",
        special: "Deals 10 hits of 5x character's ATK in typeless damage to random enemies, reduces the defense of all enemies by 50% for 1 turn, randomizes non-matching orbs, including [BLOCK] orbs",
        specialName: "Jao Kun Do Consecutive Thrusting Kick",
    },
    1767: {//Funk Bros
        captain: "Boosts ATK of Fighter characters by 1.75x",
        special: "Delays all enemies for 1 turn, following the activation of the special, if every unit scores a Great hit, boosts ATK of Fighter characters by 1.5x in the following turn",
        specialName: "Prideless Surprise Attack",
    },
    1768: {//Abdullah and Jeet
        captain: "Boosts ATK of Striker and Slasher characters by 1.5x",
        special: "At the end of the turn, cuts the current HP of each enemy by 10% for 2 turns",
        specialName: "Nasty Final Blow",
    },
    1769: {//Ben Beckman
        captain: "Boosts ATK of Cerebral characters by 2.5x",
        special: "Delays all enemies for 1 turn. If your captain is a Cerebral Character, boosts ATK against delayed enemies by 1.5x for 1 turn and changes adjacent orbs into Matching Orbs",
        specialName: "Restraining Gunpoint",
    },
    1770: {//Ben Beckman
        captain: "Boosts ATK of Cerebral characters by 2.5x and their HP by 1.2x at the start of the chain and boosts ATK of Cerebral characters by 3.25x following a chain of Good > Great > Perfect hits",
        special: "Delays all enemies for 1 turn. If your captain is a Cerebral Character, boosts ATK against delayed enemies by 1.5x for 1 turn and changes adjacent orbs into Matching Orbs",
        specialName: "Restraining Gunpoint",
        sailor: {
            "base": "None",
            "level1": "Reduces Blindness duration by 3 turns",
            "level2": "Adds 2x character's ATK as Additional Typeless Damage",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 1: Reduces Blindness duration by 3 turns" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 2: Adds 2x character's ATK as Additional Typeless Damage" },
            { "description": "Acquire Potential 2: Enrage" },
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
                    "Level 2: Boosts base ATK by 50",
                    "Level 3: Boosts base ATK by 80",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1771: {//Kuma
        captain: "Boosts ATK and HP of Cerebral characters by 2x",
        specialName: "Thrust Pad Cannon [Neo]",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into Matching orbs, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{orb : 1.75x}"
    },
    1772: {//Kuma
        captain: "Boosts ATK and HP of Cerebral characters by 2x, deals 5 times the damage received in the previous turn in [INT] damage to all enemies at the end of each turn",
        specialName: "Thrust Pad Cannon [Neo]",
        special: "Changes [RCV], [TND], [EMPTY], [BLOCK] and [BOMB] orbs into Matching orbs, amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{orb : 1.75x}"
    },
    1773: {//Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2x and their HP by 1.2x and reduces damage received by 10%",
        special: "Deals 20x character's ATK in [INT] damage to one enemy, amplifies the effect of orbs for Free Spirit characters by 1.5x for 1 turn",
        sailor: "Boosts base ATK of Free Spirit characters by 25"
    },
    1774: {//Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2.25x and their HP by 1.25x and reduces damage received by 15%",
        special: "Deals 20x character's ATK in [INT] damage to one enemy, amplifies the effect of orbs for Free Spirit characters by 1.75x for 1 turn",
        sailor: "Boosts base ATK of Free Spirit characters by 25"
    },
    1775: {//Momonosuke
        captain: "Boosts ATK and RCV of QCK characters by 1.5x and slightly boosts chances of getting [QCK] orbs",
        special: "Reduces damage received by 50% for 1 turn and switches orbs between slots twice",
    },
    1776: {//Momonosuke
        captain: "Boosts ATK and RCV of QCK characters by 1.75x, boosts chances of getting [QCK] orbs",
        special: "Reduces damage received by 50% for 1 turn and switches orbs between slots twice",
    },
    1777:{//Kizaru
        captain: "Boosts ATK of Free Spirit characters by 2.5x",
        special: "Deals 50x character's ATK in typeless damage to one enemy that will ignore damage negating abilities and barriers, changes [BLOCK], [STR] and [INT] orbs into Matching orbs for Free Spirit characters and adds .2x to Chain multiplier for 3 turns",
        specialName: "Devil Destroyer's Light Arrow",
        specialNotes: "#{ignoreBarrier}"
    },
    1778:{//Kizaru
        captain: "Boosts ATK of Free Spirit characters by 2.5x and their HP by 1.2x. Recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Deals 50x character's ATK in typeless damage to one enemy that will ignore damage negating abilities and barriers, changes [BLOCK], [STR] and [INT] orbs into Matching orbs for Free Spirit characters and adds .2x to Chain multiplier for 3 turns",
        specialName: "Devil Destroyer's Light Arrow",
        specialNotes: "#{ignoreBarrier}",
        sailor: {
            "base": "None",
            "level1": "Makes [DEX] orbs \"beneficial\" for this unit",
            "level2": "Boosts base ATK, HP and RCV of Shooter and Free Spirit characters by 50",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 1: Makes [DEX] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV of Shooter and Free Spirit characters by 50" },
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
    1779:{//Kizaru
        captain: "Boosts ATK of Shooter characters by 2x",
        specialName: "Yata no Kagami (Sacred Mirror) Neo",
        special: [
            {
                "description": "Changes own orb into [DEX]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn",
                "cooldown": [ 14, 5 ]
            },
            {
                "description": "Changes own orb into [DEX]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn. Adds .5x to Chain multiplier for 2 turns",
                "cooldown": [ 20, 11 ]
            }
        ],
        specialNotes: "#{stages}"
    },
    1780:{//Kizaru
        captain: "Reduces cooldown of Shooter specials by 2 turns at the start of the fight, boosts ATK of Shooter characters by 2.25x and boosts HP of Shooter characters by 1.5x",
        specialName: "Yata no Kagami (Sacred Mirror) Neo",
        special: [
            {
                "description": "Changes own orb into [DEX]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn",
                "cooldown": [ 14, 5 ]
            },
            {
                "description": "Changes own orb into [DEX]. Reduces Special Cooldown of Shooter and Fighter specials by 1 turn. Adds .5x to Chain multiplier for 2 turns",
                "cooldown": [ 20, 11 ]
            }
        ],
        specialNotes: "#{stages}",
    },
    1781: {//Fighting Fish
        captain: "Boosts ATK of Powerhouse characters by 1.75x. Makes [TND] and [RCV] orbs \"beneficial\" to Powerhouse characters",
        captainNotes: "#{beneficial}",
        special: "Boosts own ATK by 1.3x for 1 turn, changes own orb into STR and deals 5x character's ATK in [STR] damage to all enemies",
        specialName: "Piercing Twin Horns",
    },
    1782: {//Chinjao
        captain: "Boosts ATK of [QCK] characters by 2.25x, boosts damage of QCK specials by 1.75x",
        captainNotes: "#{noFixedPerc}",
        special: "Delays all enemies for 2 turns, deals 25x character's ATK in [QCK] damage to all enemies",
        specialName: "Military Head",
    },
    1783: {//Hajrudin
        captain: "Boosts ATK and HP of Powerhouse characters by 1.5x",
        special: "Locks all orbs for 1 turn. If during that turn you score 4 Perfect hits, amplifies the effect of orbs by 1.5x for 1 turn.",
        specialName: "War Giant's Iron Fist",
    },
    1784: {//Fujitora
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of characters with fewer than 4 stars by 2.5x",
        special: "Deals random [INT] damage to all enemies, reduces Special Cooldown of all characters by 1 turn and boosts ATK of all characters by 1.5x for 1 turn",
        specialName: "Floating Interval",
    },
    1785: {//Spartan
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "Recovers 3000 HP and amplifies the effect of orbs by 1.25x for 1 turn",
        specialName: "Boiling Fighting Spirit",
    },
    1786: {//Dressrosa Fodder
        special: "Makes [QCK] orbs \"beneficial\" to Shooter characters for 1 turn",
        specialNotes: "#{beneficial}",
        specialName: "Shooter Beneficial Slot: [QCK]"
    },
    1787: {//Dressrosa Fodder
        special: "Reduces crew's current HP by 50%, deals 5x the amount of HP subtracted in typeless damage to one enemy",
        specialName: "Risky Attack"
    },
    1788: {//Dressrosa Fodder
        special: "Boosts ATK of Shooter characters by 1.2x for 1 turn",
        specialName: "Attack Boost: Shooter"
    },
    1789: {//Dressrosa Fodder
        special: "Boosts chances of getting [RCV] orbs for 2 turns",
        specialName: "Meat for Meat",
    },
    1790: {//Dressrosa Fodder
        special: "Recovers 3x character's RCV in HP at the end of each turn for 3 turns",
        specialName: "Auto Light Recovery"
    },
    1791:{//Lucy Luffy
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.5x after scoring 3 Perfects in a row",
        special: "Cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers. Changes the orbs in the top row into [STR] orbs, changes the orbs in the middle row into [QCK] orbs, changes the orbs in the bottom row into [DEX] orbs and amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{ignoreBarrier}",
        sailor: "If your captain is a [STR] character, boosts this character's attack against [STR] characters by 1.5x",
        specialName: "Gomu Gomu no Hawk Rifle",
    },
    1792:{//Lucy Luffy
        captain: "Boosts RCV of [STR], [DEX] and [QCK] characters by 1.2x and boosts ATK of [STR], [DEX] and [QCK] characters by 3.25x after scoring 3 Perfects in a row",
        special: "Cuts the current HP of one enemy by 20% that will ignore damage negating abilities and barriers. Changes the orbs in the top row into [STR] orbs, changes the orbs in the middle row into [QCK] orbs, changes the orbs in the bottom row into [DEX] orbs and amplifies the effect of orbs by 1.75x for 1 turn",
        specialNotes: "#{ignoreBarrier}",
        sailor: {
            "base": "If your captain is a [STR] character, boosts this character's attack against [STR] characters by 1.5x",
            "level1": "Boosts base ATK and HP of DEX and QCK characters by 75 if your Captain is a [STR] character",
        },
        specialName: "Gomu Gomu no Hawk Rifle",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of DEX and QCK characters by 75 if your Captain is a [STR] character" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Potential 2: Enrage" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
                ]
            },
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
        ],
        potentialNotes: "#{enrage}"
    },
    1793:{//Lucy Sabo
        captain: "If there is a [STR], [DEX] and [QCK] character in your crew, boosts ATK of [STR], [DEX] and [QCK] characters by 2.75x and their HP by 1.3x, lowers chances of getting [STR] orbs and makes [DEX] and [QCK] orbs \"beneficial\" to [STR], [DEX] and [QCK] characters. If there are not [PSY] or [INT] characters on your crew, boosts ATK by 3.7125x instead.",
        captainNotes: "Sabo boosts ATK by 3.7125x if you have [STR], [DEX] and [QCK] type characters and no [PSY] or [INT] characters at all.<br>#{beneficial}",
        special: "Boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn. If during that turn you score 4 Perfect hits, boosts ATK of [STR], [DEX] and [QCK] characters by 2x in the following turn.",
        specialName: "Dragon's Claw: Reverse Wave Motion",
    },
    1794:{//Lucy Sabo
        captain: "If there is a [STR], [DEX] and [QCK] character in your crew, boosts ATK of [STR], [DEX] and [QCK] characters by 2.75x and their HP by 1.3x, lowers chances of getting [STR] orbs and makes [DEX] and [QCK] orbs \"beneficial\" to [STR], [DEX] and [QCK] characters. If there are not [PSY] or [INT] characters on your crew, boosts ATK by 3.7125x instead.",
        captainNotes: "Sabo boosts ATK by 3.7125x if you have [STR], [DEX] and [QCK] type characters and no [PSY] or [INT] characters at all.<br>#{beneficial}",
        special: "Boosts ATK of [STR], [DEX] and [QCK] characters by 1.75x for 1 turn. If during that turn you score 4 Perfect hits, boosts ATK of [STR], [DEX] and [QCK] characters by 2x in the following turn.",
        specialName: "Dragon's Claw: Reverse Wave Motion",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Sailor Ability 1: Restores his own special by 2 turns when it is rewinded" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 2: Enrage" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 85" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV of [STR], [DEX] and [QCK] characters by 50" },
            { "description": "Boosts base HP by 100" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 20% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 50% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 10% of this character's attack in extra damage"
                ]
            },
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
    1795:{//Diamante
        captain: "Boosts ATK of Slasher and Driven characters by 2x",
        special: "Delays all enemies for 2 turns, reduces enemies Percent Damage Reduction and Increased Defense duration by 3 turns and changes right column [STR], [DEX], [QCK], [PSY] and [INT] orbs into Matching orbs",
        sailor: "Boosts this character's attack against [STR] characters by 1.1x",
        specialName: "Snake Sword",
    },
    1796:{//Diamante
        captain: "Boosts ATK of Slasher and Driven characters by 2.5x",
        special: "Delays all enemies for 2 turns, reduces enemies Percent Damage Reduction and Increased Defense duration by 3 turns and changes right column [STR], [DEX], [QCK], [PSY] and [INT] orbs into Matching orbs",
        sailor: {
            "base": "Boosts this character's attack against [STR] characters by 1.1x",
            "level1": "Reduces Silence duration on this character by 3 turns",
        },
        specialName: "Snake Sword",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: Barrier Penetration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
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
                "Name": "Slot Bind Self-reduction",
                "description": [ 
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    1797:{//Jesus Burgess
        captain: "Boosts ATK of Fighter characters by 2.25x",
        special: [
            {
                "description": "Cuts the current HP of each enemy by 10%",
                "cooldown": [ 15, 9 ]
            },
            {
                "description": "Cuts the current HP of each enemy by 20%",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "Cuts the current HP of each enemy by 20% and boosts ATK against delayed enemies by 1.5x for 2 turns.",
                "cooldown": [ 21, 15 ]
            }
        ],
        specialNotes: "#{stages}",
        sailor: "Boosts base ATK and HP of [STR], [DEX] and [QCK] characters by 75",
        specialName: "Shockwave Elbow",
    },
    1798:{//Jesus Burgess
        captain: "Boosts ATK of Fighter characters by 2.5x, boosts HP of Powerhouse and Driven characters by 1.25x",
        special: [
            {
                "description": "Cuts the current HP of each enemy by 10%",
                "cooldown": [ 15, 9 ]
            },
            {
                "description": "Cuts the current HP of each enemy by 20%",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "Cuts the current HP of each enemy by 20% and boosts ATK against delayed enemies by 1.5x for 2 turns.",
                "cooldown": [ 21, 15 ]
            }
        ],
        specialNotes: "#{stages}",
        sailor: {
            "base": "Boosts base ATK and HP of [STR], [DEX] and [QCK] characters by 75",
            "level1": "Reduces Silence duration on this character by 3 turns",
        },
        specialName: "Shockwave Elbow",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Reduces Silence duration on this character by 3 turns" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Enrage" },
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
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 50",
                    "Level 3: Boosts base ATK by 70",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1799:{//Cavendish
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.25x",
        special: "Changes [BLOCK] orbs into Matching orbs, locks all orbs for 1 turn, boosts ATK against enemies with reduced defense by 1.75x for 2 turns",
        sailor: "Makes [INT] and [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
        specialName: "Beautiful Sword: Round Table",
    },
    1800:{//Cavendish
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.5x and their RCV by 1.2x",
        special: "Changes [BLOCK] orbs into Matching orbs, locks all orbs for 1 turn, boosts ATK against enemies with reduced defense by 1.75x for 2 turns",
        sailor: {
            "base": "Makes [INT] and [PSY] orbs \"beneficial\" for this unit",
            "level1": "Boosts base ATK, HP and RCV of [STR], [DEX] and [QCK] characters by 50",
        },
        sailorNotes: "#{beneficial}",
        specialName: "Beautiful Sword: Round Table",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of [STR], [DEX] and [QCK] characters by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire 1 additional Socket slot" },
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
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    1801:{//Bartolomeo
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2x and if you don't attack with Bartolomeo, reduces damage received by 10% for that turn.",
        special: "Deal 30x character's ATK in [QCK] damage to all enemies, reduces damage received by 90% for 1 turn and reduces the defense of all enemies by 80% for 2 turns",
        sailor: "Reduces Paralysis duration for 3 turns for himself",
        specialName: "Barrier Bulls",
    },
    1802:{//Bartolomeo
        captain: "Boosts ATK of [STR], [DEX] and [QCK] characters by 2.5x and if you don't attack with Bartolomeo, reduces damage received by 15% for that turn.",
        special: "Deal 30x character's ATK in [QCK] damage to all enemies, reduces damage received by 90% for 1 turn and reduces the defense of all enemies by 80% for 2 turns",
        sailor: {
            "base": "Reduces Paralysis duration for 3 turns for himself",
            "level1": "Boosts base ATK, HP and RCV of [STR], [DEX] and [QCK] characters by 50",
        },
        specialName: "Barrier Bulls",
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of [STR], [DEX] and [QCK] characters by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire 1 additional Socket slot" },
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
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    1803: {//Zoro
        captain: "Boosts ATK of Slasher characters by 2x",
        special: "Deals 13x character's ATK in [DEX] to one enemy, removes enemies' End of Turn Damage/Percent Cut and randomizes all orbs, including [BLOCK] orbs",
        specialName: "To Become Stronger. Santoryu Ogi: Sanzen Sekai",
    },
    1804: {//Zoro
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.3x",
        special: "Deals 13x character's ATK in [DEX] to one enemy, removes enemies' End of Turn Damage/Percent Cut and randomizes all orbs, including [BLOCK] orbs",
        specialName: "To Become Stronger. Santoryu Ogi: Sanzen Sekai",
    },
    1805: {//Buggy
        captain: "Boosts ATK of characters with cost 30 or less by 1.5x and their HP by 1.2x",
        special: "Reduces the defense of all enemies by 100% for 1 turn, reduces damage received from STR enemies by 80% for 1 turn, Amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Deceiving the World with the Most Evil Show",
    },
    1806: {//Buggy
        captain: "Boosts ATK of characters with cost 30 or less by 2.25x and their HP by 1.2x",
        special: "Reduces the defense of all enemies by 100% for 1 turn, reduces damage received from STR enemies by 80% for 1 turn, Amplifies the effect of orbs by 1.5x for 1 turn",
        specialName: "Deceiving the World with the Most Evil Show",
    },
    1807: {//Mihawk
        captain: "If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 1.35x for 1 turn",
        special: "Deals 100x character's ATK in typeless damage to all enemies, if your Captain is a Slasher character, amplifies the effects of orbs for Slasher characters by 2x for 1 turn and locks the chain multiplier at 2.75x for 1 turn",
        specialName: "Black Blade • The Ultimate Sword",
    },
    1808: {//Mihawk
        captain: {
            "base": "Boosts ATK of Slasher characters by 1.2x and their HP by 1.1x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 1.62x instead for 1 turn.",
            "level1": "Boosts ATK of Slasher characters by 1.35x and their HP by 1.1x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 1.8225x instead for 1 turn.",
            "level2": "Boosts ATK of Slasher characters by 1.6x and their HP by 1.1x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.16x instead for 1 turn.",
            "level3": "Boosts ATK of Slasher characters by 1.8x and their HP by 1.2x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.43x instead for 1 turn.",
            "level4": "Boosts ATK of Slasher characters by 2x and their HP by 1.2x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.7x instead for 1 turn.",
            "level5": "Boosts ATK of Slasher characters by 2x and their HP by 1.3x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.7x instead for 1 turn.",
            "level6": "Boosts ATK of Slasher characters by 2.5x and their HP by 1.3x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 3.5x instead for 1 turn.",
        },
        special: "Deals 100x character's ATK in typeless damage to all enemies, if your Captain is a Slasher character, amplifies the effects of orbs for Slasher characters by 2x for 1 turn and locks the chain multiplier at 2.75x for 1 turn",
        specialName: "Black Blade • The Ultimate Sword",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Slasher characters by 50",
            "level2": "Makes [QCK] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Slasher characters by 1.35x and their HP by 1.1x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 1.8225x instead for 1 turn." },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Slasher characters by 50" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Slasher characters by 1.6x and their HP by 1.1x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.16x instead for 1 turn." },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Slasher characters by 1.8x and their HP by 1.2x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.43x instead for 1 turn." },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 65" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Slasher characters by 2x and their HP by 1.2x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.7x instead for 1 turn." },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Slasher characters by 2x and their HP by 1.3x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 2.7x instead for 1 turn." },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Slasher characters by 2.5x and their HP by 1.3x. If you use \"Black Blade • The Ultimate Sword\" boosts ATK of Slasher characters by 3.5x instead for 1 turn." },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 25% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
                ]
            },
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
        ],
    },
    1809: {//Wanda
        captain: "Boosts ATK by 2.25x after scoring 2 Perfects in a row",
        special: "Reduces Bind and Paralysis duration by 2 turns. If your Captain is a Slasher character, makes Perfects easier to hit for 1 turn",
        sailor: "Reduces Paralysis for 1 turn for herself",
        specialName: "Super Express Beast Path",
    },
    1810: {//Wanda
        captain: "Boosts chances of getting Matching orbs, boosts ATK by 2.25x after scoring 2 Perfects in a row",
        special: "Reduces Bind and Paralysis duration by 2 turns. If your Captain is a Slasher character, makes Perfects easier to hit for 1 turn",
        sailor: "Reduces Paralysis for 1 turn for herself",
        specialName: "Super Express Beast Path",
    },
    1811: {//Carrot
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Fighter characters by 2x",
        special: "Reduces Special Cooldown of your top row by 2 turns, boosts ATK of Fighter characters by 1.5x for 1 turn",
        specialName: "Rabbit Mink's Air Step",
    },
    1812: {//Carrot
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of Fighter characters by 2.25x",
        special: "Reduces Special Cooldown of your top row by 2 turns, boosts ATK of Fighter characters by 1.5x for 1 turn",
        specialName: "Rabbit Mink's Air Step",
    },
    1813: {//Koala
        captain: "Boosts ATK of all characters by 2.25x and boosts EXP and amount of Beli received by 1.2x",
        special: "Changes Captain's orb into Matching and boosts ATK of your Captain by 1.5x for 1 turn",
        specialName: "Revolutionary Soldier's Anger",
    },
    1814: {//Raid Sanji
        captain: "Boosts ATK of Powerhouse characters by 2.5x until the first hit other than Perfect and recovers 100 HP at end of each turn",
        specialName: "Joue Shoot",
        special: "Deal 150x character's ATK in typeless damage to one enemy, boosts ATK of Powerhouse characters by 2x for 1 turn",
    },
    1815: {//Raid Sanji
        captain: "Boosts ATK of Powerhouse characters by 2.75x until the first hit other than Perfect and recovers 300 HP at end of each turn",
        specialName: "Joue Shoot",
        special: "Deal 150x character's ATK in typeless damage to one enemy, boosts ATK of Powerhouse characters by 2x for 1 turn",
        sailor: {
            "base": "None",
            "level1": "Makes [RCV] orbs \"beneficial\" for all characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for all characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
    1816: {// Ace 6+
        special: "Reduces crew's current HP by 40%, deals 15x the amount of HP subtracted in typeless damage to all enemies, boosts ATK of Shooter characters by 2x for 1 turn",
        specialName: "Great Flame Commandment: Flame Emperor • Flame Wheel",
        captain: "Boosts HP of Shooter characters by 1.5x and boosts ATK by 3.25x if they have a matching orb, by 2.25x otherwise"
    },
    1817: {// Riku
        captain: "Boosts ATK by 2x after scoring 3 Greats in a row",
        special: "Cuts the current HP of one enemy by 7%, boosts ATK of the characters in the bottom and middle row by 1.2x for 1 turn and reduces special cooldown of all non-Captain specials by 1 turn",
        specialName: "Divine Sword",
        sailor: "Restores his own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    1818: {// Riku
        captain: "Boosts ATK of all characters by 1.5x and their HP by 1.2x, boosts ATK by 2.5x after scoring 3 Greats in a row",
        special: "Cuts the current HP of one enemy by 7%, boosts ATK of the characters in the bottom and middle row by 1.2x for 1 turn and reduces special cooldown of all non-Captain specials by 1 turn",
        specialName: "Divine Sword",
        sailor: "Restores his own special by 1 turn when it is rewinded",
        sailorNotes: "#{rewind : 1}",
    },
    1819: {//Tank
        captain: "Boosts ATK of Powerhouse and Stiker characters by 1.75x",
        special: "Boosts own ATK by 1.75x for 1 turn",
        specialName: "Shameful Hidden Activity",
    },
    1820: {//Scarlet
        captain: "Boosts HP and RCV of [PSY] characters by 1.5x",
        special: "Locks all orbs for 1 turn and recovers 5x character's RCV in HP.",
        specialName: "Frontier Love",
    },
    1821: {//Sanji
        captain: "Boosts ATK of all characters by 1.5x. Recovers 1x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Recovers 4x character's RCV in HP, reduces damage received by 50% for 1 turn. Randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK] or [RCV] orbs.",
                "cooldown": [ 8, 8 ]
            },
            {
                "description": "Recovers 10x character's RCV in HP, reduces damage received by 50% for 1 turn. Randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK] or [RCV] orbs.",
                "cooldown": [ 14, 14 ]
            },
        ],
        specialName: "Suite ・ Decoration",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1822: {//Sanji
        captain: "Boosts ATK of all characters by 2x. Recovers 2x character's RCV in HP at the end of each turn",
        special: [
            {
                "description": "Recovers 4x character's RCV in HP, reduces damage received by 50% for 1 turn. Randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK] or [RCV] orbs.",
                "cooldown": [ 8, 8 ]
            },
            {
                "description": "Recovers 10x character's RCV in HP, reduces damage received by 50% for 1 turn. Randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK] or [RCV] orbs.",
                "cooldown": [ 14, 14 ]
            },
        ],
        specialName: "Suite ・ Decoration",
        sailor: "Makes [RCV] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1823: {//World
        captain: "Boosts ATK of Shooter characters by 1.5x at the start of the chain.<br>Boosts ATK of Shooter characters by 1.65x after the 1st Perfect in a row, by 1.815x after the 2nd Perfect in a row, by 1.9965x after the 3rd Perfect in a row, by 2.19615x after the 4th Perfect in a row and by 2.415765x after the 5th Perfect in a row.",
        special: [
            {
                "description": "Deals 100,000 fixed damage to one enemy and removes ATK DOWN debuff from your team",
                "cooldown": [ 14, 10 ]
            },
            {
                "description": "Deals 300,000 fixed damage to one enemy and removes ATK DOWN debuff from your team",
                "cooldown": [ 18, 14 ]
            },
            {
                "description": "Deals 500,000 fixed damage to one enemy, removes ATK DOWN debuff from your team and reduces enemy Barrier duration by 1 turn",
                "cooldown": [ 22, 18 ]
            }
        ],
        specialNotes:"#{stages}",
        specialName: "More More: Hundredfold Artillery Cannon",
    },
    1824: {//World
        captain: "Boosts ATK of Shooter characters by 2.2x at the start of the chain.<br>Boosts ATK of Shooter characters by 2.42x after the 1st Perfect in a row, by 2.662x after the 2nd Perfect in a row, by 2.9282x after the 3rd Perfect in a row, by 3.22102x after the 4th Perfect in a row and by 3.543122x after the 5th Perfect in a row.",
        special: [
            {
                "description": "Deals 100,000 fixed damage to one enemy and removes ATK down debuff from your team",
                "cooldown": [ 14, 10 ]
            },
            {
                "description": "Deals 300,000 fixed damage to one enemy and removes ATK down debuff from your team",
                "cooldown": [ 18, 14 ]
            },
            {
                "description": "Deals 500,000 fixed damage to one enemy, removes ATK down debuff from your team and reduces enemy Barrier duration by 1 turn",
                "cooldown": [ 22, 18 ]
            }
        ],
        specialNotes:"#{stages}",
        specialName: "More More: Hundredfold Artillery Cannon",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of Shooter characters by 150",
            "level2": "Boosts base ATK of Shooter characters by 75",
        },
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Shooter characters by 150" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of Shooter characters by 75" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
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
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above ??%",
                    "Level 2: This character's attack will ignore barriers if HP is above ??%",
                    "Level 3: This character's attack will ignore barriers if HP is above ??%",
                    "Level 4: This character's attack will ignore barriers if HP is above ??%",
                    "Level 5: This character's attack will ignore barriers if HP is above ??%"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1825: {//Akainu
        captain: "Boosts ATK by 2.5x following a chain of [INT] > [INT] > [INT] attacks no lower than Good",
        special: "Deals 50x character's ATK in [INT] damage to all enemies. Changes orbs for [INT] characters into [INT] orbs. Boosts the Color Affinity of [INT] characters by 1.75x for 1 turn",
        specialNotes: "#{colorAffinity : 1.75}",
        specialName: "Great Eruption [Neo]",
    },
    1826: {//Akainu
        captain: "Boosts ATK by 3x following a chain of [INT] > [INT] > [INT] attacks no lower than Good",
        special: "Deals 50x character's ATK in [INT] damage to all enemies. Changes orbs for [INT] characters into [INT] orbs. Boosts the Color Affinity of [INT] characters by 1.75x for 1 turn",
        specialNotes: "#{colorAffinity : 1.75}",
        specialName: "Great Eruption [Neo]",
    },
    1827: {//Sicilian Colo
        captain: "Boosts ATK of [INT] characters by 2x",
        special: "Reduce crew's current HP by 50%, Boosts ATK of [INT] characters by 2x for 1 turn and randomize non-matching orbs, including [BLOCK] orbs",
        specialName: "Explosive Spirit",
    },
    1828: {//Sicilian Colo
        captain: "Boosts ATK of [INT] characters by 3x if HP is below 30% at the start of the turn, by 2.5x otherwise",
        special: "Reduce crew's current HP by 50%, Boosts ATK of [INT] characters by 2x for 1 turn and randomize non-matching orbs, including [BLOCK] orbs",
        specialName: "Explosive Spirit",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Slasher characters by 40",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Slasher characters by 40" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
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
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 20% chance to deal 10% of this character's attack in extra damage"
                ]
            },
        ]
    },
    1829: {//Raid Caesar
        captain: "Boosts ATK of Cerebral and Driven characters by 2x",
        special: "Deals 45x character's ATK in typeless damage to all enemies, amplifies the effect of orbs by 1.75x for Cerebral and Driven characters for 2 turns and poisons all enemies",
        spcialName: "Flammable Type: Miok GAS",
    },
    1830: {//Raid Caesar
        captain: "Boosts ATK of Cerebral and Driven characters by 2.5x",
        special: "Deals 45x character's ATK in typeless damage to all enemies, amplifies the effect of orbs by 1.75x for Cerebral and Driven characters for 2 turns and poisons all enemies",
        spcialName:"Flammable Type: Miok GAS",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Cerebral and Driven characters by 50",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Cerebral and Driven characters by 50" },
            { "description": "Boosts base ATK by 55" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: [PSY] Damage Reduction" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 30% chance to deal 9% of this character's attack in extra damage"
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
    1831: {//6* Judge
        captain: "Increase the rate of PSY orbs, reduces damage received by 15%, boosts the HP of all characters by 1.25x and if there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, boosts ATK of all characters by 3.9375x if they have a matching orb, by 2.25x otherwise",
        special: "Reduces bind duration by 7 turns and amplifies the effect of orbs by 2x for 1 turn.  If this character is the captain or the friend captain, slightly boosts the rate of [PSY] orbs and randomly shuffles all orbs including [BLOCK] orbs",
        specialName: "Dengi Crack",
    },
    1832: {//6* Judge
        captain: "Increase the rate of PSY orbs, reduces damage received by 15%, boosts the HP of all characters by 1.25x and if there is a [STR], [DEX], [QCK], [PSY] and [INT] characters in your crew, boosts ATK of all characters by 3.9375x if they have a matching orb, by 2.25x otherwise",
        special: "Reduces bind duration by 7 turns and amplifies the effect of orbs by 2x for 1 turn.  If this character is the captain or the friend captain, slightly boosts the rate of [PSY] orbs and randomly shuffles all orbs including [BLOCK] orbs",
        specialName: "Dengi Crack",
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
    1833: {//Reiju
        captain: "Boosts ATK of [INT] characters by 1.75x and Powerhouse characters by 1.2x and the RCV of Powerhouse characters by 1.1x",
        captainNotes: "Attack boost stacks, so an [INT] Powerhouse unit has 2.1x ATK",
        special: "If your captain is [INT] or [PSY], recovers 7,000 HP, removes poison and reduces the duration of paralysis, despair and silence by 3 turns.  If the captain is a Powerhouse character, reduces damage received by 70% for 2 turns ",
        specialName: "Dangerous Healing",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1834: {//Reiju
        captain: "Boosts ATK of [INT] characters by 2.25x and Powerhouse characters by 1.3x and the RCV of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [INT] Powerhouse unit has 2.925x ATK",
        special: "If your captain is [INT] or [PSY], recovers 7,000 HP, removes poison and reduces the duration of paralysis, despair and silence by 3 turns.  If the captain is a Powerhouse character, reduces damage received by 70% for 2 turns ",
        specialName: "Dangerous Healing",
        sailor: {
            "base": "Makes [PSY] orbs \"beneficial\" for this unit",
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
    1835: {//Ichiji
        captain: "Boosts ATK of [STR] characters by 1.75x, boosts ATK of Powerhouse characters by 1.2x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [STR] Powerhouse unit has 2.1x ATK",
        special: "If your captain is [STR] or[PSY] character, locks the chain multiplier at 2.5x for 2 turns. If your Captain is a Powerhouse character, delays all enemies for 2 turns",
        specialName: "Majestic Impact",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1836: {//Ichiji
        captain: "Boosts ATK of [STR] characters by 2.25x, boosts ATK of Powerhouse characters by 1.3x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [STR] Powerhouse unit has 2.925x ATK",
        special: "If your captain is [STR] or[PSY] character, locks the chain multiplier at 2.5x for 2 turns. If your Captain is a Powerhouse character, delays all enemies for 2 turns",
        specialName: "Majestic Impact",
        sailor: {
            "base": "Makes [PSY] orbs \"beneficial\" for this unit",
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
    1837: {//Niji
        captain: "Boosts ATK of [QCK] characters by 1.75x, boosts ATK of Powerhouse characters by 1.2x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [QCK] Powerhouse unit has 2.1x ATK",
        special: "If your captain is a [QCK] or [PSY] character, boosts ATK of all characters by 1.75x for 2 turns. If your captain is a Powerhouse character, locks all orbs for 1 turn",
        specialName: "Blitz Needle",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1838: {//Niji
        captain: "Boosts ATK of [QCK] characters by 2.25x, boosts ATK of Powerhouse characters by 1.3x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [QCK] Powerhouse unit has 2.925x ATK",
        special: "If your captain is a [QCK] or [PSY] character, boosts ATK of all characters by 1.75x for 2 turns. If your captain is a Powerhouse character, locks all orbs for 1 turn",
        specialName: "Blitz Needle",
        sailor: {
            "base": "Makes [PSY] orbs \"beneficial\" for this unit",
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
    1839: {//Yonji
        captain: "Boosts ATK of [DEX] characters by 1.75x, boosts ATK of Powerhouse characters by 1.2x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [DEX] Powerhouse unit has 2.1x ATK",
        special: "If your captain is a [DEX] or [PSY] character, boosts ATK against delayed enemies by 1.75x for 1 turn. If your captain is a Powerhouse character, adds 40x characters ATK as additional typeless damage for 1 turn",
        specialName: "Burst End Kick",
        specialNotes: "Extra Damage can only be boosted by conditional Boosters.",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1840: {//Yonji
        captain: "Boosts ATK of [DEX] characters by 2.25x, boosts ATK of Powerhouse characters by 1.3x and the HP of Powerhouse characters by 1.2x",
        captainNotes: "Attack boost stacks, so an [DEX] Powerhouse unit has 2.925x ATK",
        special: "If your captain is a [DEX] or [PSY] character, boosts ATK against delayed enemies by 1.75x for 1 turn. If your captain is a Powerhouse character, adds 40x characters ATK as additional typeless damage for 1 turn",
        specialName: "Burst End Kick",
        specialNotes: "Extra Damage can only be boosted by conditional Boosters.",
        sailor: {
            "base": "Makes [PSY] orbs \"beneficial\" for this unit",
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
    1841: {//Caribou
        captain: "Boosts ATK of Driven characters by 1.5x, deals 2x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Boosts ATK of Driven characters by 1.5x for 1 turn, reduces enemy's Threshold Damage Reduction by 2 turns and ATK Up duration by 3 turns",
        specialName: "Fathomless Infinite Hell",
        sailor: "When any other character uses a special, reduces own cooldown by 5 turns",
    },
    1842: {//Caribou
        captain: "Boosts ATK of Driven characters by 1.5x, deals 4x character's ATK in [DEX] damage to all enemies at the end of each turn",
        special: "Boosts ATK of Driven characters by 1.5x for 1 turn, reduces enemy's Threshold Damage Reduction by 2 turns and ATK Up duration by 3 turns",
        specialName: "Fathomless Infinite Hell",
        sailor: "When any other character uses a special, reduces own cooldown by 5 turns",        
    },
    1843: {//Coribou
        captain: "Boosts ATK of Driven and Striker characters by 1.5x",
        special: "Removes blindness and recovers 4x character's RCV in HP",
        specialName: "Frantic Funeral",
    },
    1844: {//Coribou
        captain: "Boosts ATK of Driven and Striker characters by 1.75x",
        special: "Removes blindness and recovers 4x character's RCV in HP",
        specialName: "Frantic Funeral",
    },
    1845: {//Garp
        captain: "Boosts ATK of Fighter characters by 2.5x and reduce damage received by 5%",
        special: "Reduces the defense of all enemies by 100% for 1 turn. If the targeted enemy has less than 25% HP, instantly defeats them, otherwise, cuts the current HP of one enemy by 30%",
        specialName: "Crushing Armament Fist",
    },
    1846: {//Garp
        captain: "Boosts ATK of Fighter characters by 2.75x and reduce damage received by 15%",
        special: "Reduces the defense of all enemies by 100% for 1 turn. If the targeted enemy has less than 25% HP, instantly defeats them, otherwise, cuts the current HP of one enemy by 30%",
        specialName: "Crushing Armament Fist",
    },
    1847: {//Sengoku+
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boost ATK of characters that are 29 cost or lower by 3.25x and their HP by 1.2x, boost ATK of characters with cost 54 by 3x",
        captainNotes: "His captain ability also affects his evolved forms, his base form will NOT receive the boost. All evolved and plus evolved Sengoku characters in the team are included in the bonus.",
        special: "Deals random large INT Damage to all enemies, boost ATK of all characters by 1.5x for 1 turn, changes orbs to matching orbs for characters that are 29 cost or lower",
        specialName: "Requiem Shockwave",
    },
    1848: {//Treasure Map Akainu
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Deals 50x character's ATK in STR damage to one enemy, reduces enemy Barrier duration by 1 turn and reduces any damage above 3000 by 80% for 1 turn",
        specialName: "Hellhound Bite",
        sailor: "Makes [PSY] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1849: {//Treasure Map Akainu
        captain: "Boosts ATK of Powerhouse characters by 2.25x and their HP by 1.3x",
        special: "Deals 50x character's ATK in STR damage to one enemy, reduces enemy Barrier duration by 1 turn and reduces any damage above 3000 by 80% for 1 turn",
        specialName: "Hellhound Bite",
        sailor: "Makes [PSY] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1850: {//Treasure Map Squard
        captain: "Boosts ATK of Driven characters by 2x",
        special: "Deals 40x character's ATK in DEX damage to one enemy that will ignore damage negating abilities and barriers, makes Perfects easier to hit for 1 turn and adds .5x to Chain multiplier for 1 turn",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Piercing Hatred",
        sailor: "Makes [PSY] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1851: {//Treasure Map Squard
        captain: "Boosts ATK of Driven characters by 2.25x and their HP by 1.3x",
        special: "Deals 40x character's ATK in DEX damage to one enemy that will ignore damage negating abilities and barriers, makes Perfects easier to hit for 1 turn and adds .5x to Chain multiplier for 1 turn",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Piercing Hatred",
        sailor: "Makes [PSY] and [INT] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1852: {//Whitebeard
        captain: "Boosts ATK of all characters proportionally to the crew's current HP and their HP by 1.2x",
        captainNotes: "#{captainProportional : lower : 1 + 1 * (1 - (remaining HP) / (total HP)) : 1 : 2}",
        special: "Changes own orb into [INT], deals 100x character's ATK in typeless damage to all enemies that will ignore damage negating abilities and barriers. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 2x for 1 turn. If enemies have a barrier at the time the special was activated, boosts own ATK by 2.25x",
        specialNotes: "#{ignoreBarrier}",
        specialName: "The Epicenter of the Halberd",
    },
    1853: {//Whitebeard
        captain: {
            "base": "Boosts ATK of all characters proportionally to the crew's current HP, by 2.25x at max and their HP by 1.2x",
            "level1": "Boosts ATK of all characters proportionally to the crew's current HP, by 2.45x at max and their HP by 1.2x",
            "level2": "Boosts ATK of all characters proportionally to the crew's current HP, by 2.55x at max and their HP by 1.2x",
            "level3": "Boosts ATK of all characters proportionally to the crew's current HP, by 2.55x at max and their HP by 1.2x",
            "level4": "Boosts ATK of all characters proportionally to the crew's current HP, by 2.65x at max and their HP by 1.2x",
            "level5": "Boosts ATK of all characters proportionally to the crew's current HP, by 2.75x at max and their HP by 1.35x",
            "level6": "Boosts ATK of all characters proportionally to the crew's current HP, by 3.25x at max and their HP by 1.35x",
        },
        captainNotes: "#{captainProportional : lower : 1 + 1.25 * (1 - (remaining HP) / (total HP)) : 1 : 2.25}",
        special: "Changes own orb into [INT], deals 100x character's ATK in typeless damage to all enemies that will ignore damage negating abilities and barriers. If enemies have All Debuff Protection or Delay Debuff Protection at the time the special was activated, amplifies the effect of orbs by 2x for 1 turn. If enemies have a barrier at the time the special was activated, boosts own ATK by 2.25x",
        specialNotes: "#{ignoreBarrier}",
        specialName: "The Epicenter of the Halberd",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of all characters by 100",
            "level2": "Boosts base ATK of all characters by 50",
        },
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters proportionally to the crew's current HP, by 2.35x at max and their HP by 1.2x" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of all characters by 100" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters proportionally to the crew's current HP, by 2.45x at max and their HP by 1.2x" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters proportionally to the crew's current HP, by 2.55x at max and their HP by 1.2x" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 65" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters proportionally to the crew's current HP, by 2.65x at max and their HP by 1.2x" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of all characters by 50" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 85" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters proportionally to the crew's current HP, by 2.75x at max and their HP by 1.35x" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire new Captain Ability: Boosts ATK of all characters proportionally to the crew's current HP, by 3.25x at max and their HP by 1.35x" },
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
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 120",
                    "Level 5: Boosts base ATK by 200"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1854: {//Apoo
        captain: "Boosts ATK of Free Spirit characters by 2x",
        special: "Amplifies the effect of orbs for Free Spirit characters by 1.5x and boosts ATK of Free Spirit characters by 1.5x for 1 turn",
        specialName: "Fighting Musical Performance",
    },
    1855: {//Apoo
        captain: "Boosts ATK of Free Spirit characters by 2x at the start of the chain, by 2.5x after the 3rd Perfect in a row and by 3x after the 5th Perfect in a row",
        special: "Amplifies the effect of orbs for Free Spirit characters by 1.5x and boosts ATK of Free Spirit characters by 1.5x for 1 turn",
        specialName: "Fighting Musical Performance",
    },
    1856: {//X Drake
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Cuts the current HP of each enemy by 7%. Boosts the Color Affinity of Powerhouse characters by 1.25x",
        specialName: "Intervening A Fierce Battle",
    },
    1857: {//X Drake
        captain: "Boosts ATK of Powerhouse characters by 2.5 and recovers 200 HP at end of each turn",
        special: "Cuts the current HP of each enemy by 7%. Boosts the Color Affinity of Powerhouse characters by 1.25x",
        specialName: "Intervening A Fierce Battle",
    },
    1858: {//Leo
        captain: "Boosts ATK of Striker characters by 2x at the start of the chain. Boosts ATK of Striker characters by 2.4x after scoring 3 Perfects in a row.",
        special: "Reduce 3 turns of paralysis, randomize non-matching orbs, including [BLOCK] orbs, Adds 65x character's ATK as Additional Typeless Damage for 1 turn, when the captain is a Striker Character reduces enemies Percent Damage Reduction duration by 3 turns",
        sailor: "If this character has an [INT] orb and you hit a Perfect with him, keep his [INT] orb for the next turn",
    },
    1859: {//Leo
        captain: "Boosts ATK of Striker characters by 2.5x and their HP by 1.2x at the start of the chain. Boosts ATK of Striker characters by 3.25x after scoring 3 Perfects in a row.",
        special: "Reduce 3 turns of paralysis, randomize non-matching orbs, including [BLOCK] orbs, Adds 65x character's ATK as Additional Typeless Damage for 1 turn, when the captain is a Striker Character reduces enemies Percent Damage Reduction duration by 3 turns",
        sailor: {
            "base": "If this character has an [INT] orb and you hit a Perfect with him, keep his [INT] orb for the next turn",
            "level1": "Makes [PSY] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [PSY] orbs \"beneficial\" for this unit" },
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
    1860: {//Coloseum Raizo
        captain: "Boosts ATK of Shooter characters by 2x",
        special: [
            {
                "description": "Deals 3x character's ATK in QCK damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs,",
                "cooldown": [ 19, 4 ]
            },
            {
                "description": "Deals 7x character's ATK in QCK damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs. If your captain is a Shooter Character, boosts ATK against delayed enemies by 1.35x for 1 turn",
                "cooldown": [ 24, 9 ]
            },
            {
                "description": "Deals 11x character's ATK in QCK damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs. If your captain is a Shooter Character, boosts ATK against delayed enemies by 1.75x for 1 turn",
                "cooldown": [ 30, 15 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Flower Shuriken",
    },
    1861: {//Coloseum Raizo
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, boosts ATK of Shooter characters by 2.5x",
        special: [
            {
                "description": "Deals 3x character's ATK in QCK damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs,",
                "cooldown": [ 19, 4 ]
            },
            {
                "description": "Deals 7x character's ATK in QCK damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs. If your captain is a Shooter Character, boosts ATK against delayed enemies by 1.35x for 1 turn",
                "cooldown": [ 24, 9 ]
            },
            {
                "description": "Deals 11x character's ATK in QCK damage to all enemies, changes [TND] and [RCV] orbs on Shooter characters into Matching Orbs. If your captain is a Shooter Character, boosts ATK against delayed enemies by 1.75x for 1 turn",
                "cooldown": [ 30, 15 ]
            }
        ],
        specialNotes: "#{stages}",
        specialName: "Flower Shuriken",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Shooter characters by 30",
            "level2": "Boosts base ATK of Shooter characters by 50",
        },
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Shooter characters by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of Shooter characters by 50" },
            { "description": "Acquire Potential 2: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Critical Hit",
                "description": [ 
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 30% chance to deal 9% of this character's attack in extra damage"
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
    1862: {//Neo Coliseum Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2x, recovers 1x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Slasher and Free Spirit characters by 1 turn and changes adjacent orbs into Matching Orbs",
        specialName: "Poof [Neo]",
    },
    1863: {//Neo Coliseum Kinemon
        captain: "Boosts ATK of Free Spirit characters by 2.5x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Reduces Special Cooldown of Slasher and Free Spirit characters by 1 turn and changes adjacent orbs into Matching Orbs",
        specialName: "Poof [Neo]",
    },
    1864: {//Urouge FN
        captain: "Protects from defeat as long as HP is above 50%",
        specialNotes: "PERFECT hits don't count, it has to GREAT hits",
        special: "Recovers 5,000 HP, boosts ATK of Striker characters by 1.5x for 1 turn. If during that turn you score 4 Great hits, boosts ATK of Striker characters by 1.75x in the following turn.",
        specialName: "Culling the Criminals from this Earthly World"
    },
    1865: {//Urouge FN
        captain: "Boosts ATK of Striker characters by 1.75x, protects from defeat as long as HP is above 50%",
        specialNotes: "PERFECT hits don't count, it has to GREAT hits",
        special: "Recovers 5,000 HP, boosts ATK of Striker characters by 1.5x for 1 turn. If during that turn you score 4 Great hits, boosts ATK of Striker characters by 1.75x in the following turn.",
        specialName: "Culling the Criminals from this Earthly World"
    },
    1866: {//Hawkins FN
        captain: "Boosts ATK of Cerebral characters by 2x",
        special: "Cuts the current HP of each enemy by 10%. At the end of the turn, cuts the current HP of each enemy by 10% for 3 turns. Reduces damage received by 40% for 3 turns.",
        specialName: "Fortune-Telling from the Shadow of Death"
    },
    1867: {//Hawkins FN
        captain: "Boosts ATK of Cerebral characters by 2x, boosts chain multiplier by 1.5x",
        special: "Cuts the current HP of each enemy by 10%. At the end of the turn, cuts the current HP of each enemy by 10% for 3 turns. Reduces damage received by 40% for 3 turns.",
        specialName: "Fortune-Telling from the Shadow of Death"
    },
    1868: {//Fujitora
        captain: "Increases damage received by 1.2x, Boosts ATK of Slasher characters by 3.25x at the start of the chain and their HP by 1.2x and boosts ATK of Slasher characters by 4.225x following a chain of Good > Great > Perfect hits",
        special: "Deals 10 hits of 20x character's ATK in typeless damage to random enemies, if this character is your Captain or Friend/Guest Captain, Changes all orbs on Slasher characters into Matching orbs and delays all enemies for 1 turn.",
        specialName: "The Rain of War's End"
    },
    1869: {//Fujitora
        captain: "Increases damage received by 1.2x, Boosts ATK of Slasher characters by 3.25x at the start of the chain and their HP by 1.2x and boosts ATK of Slasher characters by 4.225x following a chain of Good > Great > Perfect hits",
        special: "Deals 10 hits of 20x character's ATK in typeless damage to random enemies, if this character is your Captain or Friend/Guest Captain, Changes all orbs on Slasher characters into Matching orbs and delays all enemies for 1 turn.",
        specialName: "The Rain of War's End",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Slasher characters by 40",
            "level2": "Makes [STR], [QCK], [DEX] and [PSY] orbs \"beneficial\" for this unit if your Captain is a Slasher character",
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
            { "description": "Acquire Sailor Ability 2: Makes [STR], [QCK], [DEX] and [PSY] orbs \"beneficial\" for this unit if your Captain is a Slasher character" },
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
                    "Level 1: If HP is below 10% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character"
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
        ],
        potentialNotes: "#{enrage}"
    },
    1870: {//Bellamy
        captain: "Boosts ATK of Driven characters by 2.25x",
        special: "Reduces crew's current HP by 50%, deals 10x the amount of HP subtracted in typeless damage to one enemy, reduces enemy's Threshold Damage Reduction, Increased Defense and ATK UP duration by 3 turns and changes own orb into [PSY]",
        specialName: "Spring Death Knock",
        sailor: "Boosts this character's attack against [INT] characters by 1.1x"
    },
    1871: {//Bellamy
        captain: "Boosts ATK of Driven characters by 2.75x",
        special: "Reduces crew's current HP by 50%, deals 10x the amount of HP subtracted in typeless damage to one enemy, reduces enemy's Threshold Damage Reduction, Increased Defense and ATK UP duration by 3 turns and changes own orb into [PSY]",
        specialName: "Spring Death Knock",
        sailor: {
            "base": "Boosts this character's attack against [INT] characters by 1.1x",
            "level1": "If this character has a [PSY] orb and you hit a Perfect with him, keep his [PSY] orb for the next turn",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 1: If this character has a [PSY] orb and you hit a Perfect with him, keep his [PSY] orb for the next turn" },
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
                    "Level 5: Reduces Slot Bind duration by 8 turns on this character"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1872: {//Kyros
        captain: "Boosts ATK of Slasher and Striker characters by 2.25x",
        special: "Deals 30x character's ATK in [STR] damage to one enemy, reduces Bind and Despair duration by 2 turns and boosts ATK of Slasher characters by 1.75x for 3 turns",
        specialName: "The Forefront Reclaiming His Country",
        sailor: "Adds 2x character's ATK as Additional Typeless Damage",
        sailorNotes: "#{additionalDamage : 2x}",
    },
    1873: {//Kyros
        captain: "Boosts ATK of Slasher and Striker characters by 2.5x and their HP by 1.25x",
        special: "Deals 30x character's ATK in [STR] damage to one enemy, reduces Bind and Despair duration by 2 turns and boosts ATK of Slasher characters by 1.75x for 3 turns",
        specialName: "The Forefront Reclaiming His Country",
        sailor: {
            "base": "Adds 2x character's ATK as Additional Typeless Damage",
            "level1": "Boosts base ATK and HP of Slasher characters by 50",
        },
        sailorNotes: "#{additionalDamage : 2x}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of Slasher characters by 50" },
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
    1874: {//Violet
        captain: "Boosts amount of Beli received by 2.5x",
        special: "Changes [RCV], [TND], [EMPTY] and [BLOCK] orbs into Matching orbs, reduces Paralysis and Silence duration by 2 turns and adds .5x to Chain multiplier for 1 turn",
        specialName: "Violent Interrogation of Passion",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
    },
    1875: {//Violet
        captain: "Boosts ATK of all characters by 1.5x. Boosts amount of Beli received by 2.5x",
        special: "Changes [RCV], [TND], [EMPTY] and [BLOCK] orbs into Matching orbs, reduces Paralysis and Silence duration by 2 turns and adds .5x to Chain multiplier for 1 turn",
        specialName: "Violent Interrogation of Passion",
        sailor: {
            "base": "Completely resists Silence on this character",
            "level1": "Reduces Paralysis duration for 1 turn for herself",
        },
        sailorNotes: "#{silence}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Reduces Paralysis duration for 1 turn for herself" },
            { "description": "Acquire Potential 2: Critical Hit" },
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
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    1876: {//Rebecca
        captain: "Boosts ATK of Striker characters by 2x and reduces damage received by 10%",
        special: "Deals 50,000 fixed damage to one enemy, reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 5 turns and changes adjacent orbs into matching orbs",
        specialName: "Strike of Determination",
        sailor: "Makes [STR] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1877: {//Rebecca
        captain: "Boosts ATK of Striker characters by 2.25x and reduces damage received by 15%",
        special: "Deals 50,000 fixed damage to one enemy, reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 5 turns and changes adjacent orbs into matching orbs",
        specialName: "Strike of Determination",
        sailor: {
            "base": "Makes [STR] orbs \"beneficial\" for this unit",
            "level1": "Boosts base ATK, HP and RCV of Striker and Slasher characters by 50",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Striker and Slasher characters by 50" },
            { "description": "Acquire Potential 2: Critical Hit" },
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
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
                ]
            },
        ]
    },
    1878: {//Bartolomeo
        captain: "Boosts ATK of all characters by 1.5x and reduces damage received by 10%. If you use \"Barrier Crash\" boosts ATK of all characters by 2.25x instead.",
        specialName: "Barrier Crash",
        special: [
            {
                "description": "Reduces any damage received above 5,000 HP by 97% for 2 turn, recovers 20% of crew's MAX HP, reduces enemies' ATK Up and Enrage Buffs by 5 turns.",
                "cooldown": [ 28, 13 ],
            },
            {
                "description": "Reduces any damage received above 3,000 HP by 97% for 2 turn, recovers 50% of crew's MAX HP, reduces enemies' ATK Up, Enrage, End of Turn Damage/Percent Cut and Resilience Buffs by 5 turns.",
                "cooldown": [ 33, 18 ],
            },
        ],
    },
    1879: {//Bartolomeo
        captain: "Boosts ATK of all characters by 2.25x and their HP by 1.35x and reduces damage received by 10%. If you use \"Barrier Crash\" boosts ATK of all characters by 2.75x instead.",
        specialName: "Barrier Crash",
        special: [
            {
                "description": "Reduces any damage received above 5,000 HP by 97% for 2 turn, recovers 20% of crew's MAX HP, reduces enemies' ATK Up and Enrage Buffs by 5 turns.",
                "cooldown": [ 28, 13 ],
            },
            {
                "description": "Reduces any damage received above 3,000 HP by 97% for 2 turn, recovers 50% of crew's MAX HP, reduces enemies' ATK Up, Enrage, End of Turn Damage/Percent Cut and Resilience Buffs by 5 turns.",
                "cooldown": [ 33, 18 ],
            },
        ],
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of all characters by 150",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of all characters by 150" },
            { "description": "Acquire Potential 2: [INT] Damage Reduction" },
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
    1880: {//Hody Jones 6+
        captain: "Reduces cooldown of all specials by 2 turns at the start of the fight, reduces crew's current HP by 10% at the end of each turn, boosts ATK of Powerhouse characters by 3.25x if there are 6 Powerhouse characters in your crew and boosts HP of Powerhouse characters by up to 2x depending on how many Powerhouse characters are in your crew.",
        captainNotes: "Hody's HP boost is dependent on how many Powerhouse characters are in your crew. With 6 Powerhouse characters, the boost is 2x, with 5 the boost is 1.5x, with 4 the boost is 1.4x, with 3 the boost is 1.3x, with 2 the boost is 1.2x and with 1 the boost is 1.1x. [BASED ON 6*]",
        special: [
            {
                "description": "Deals 10x character's ATK in [INT] damage to all enemies that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 1 turn, reduces damage received by 60% for 1 turn",
                "cooldown": [ 12, 7 ],
            },
            {
                "description": "Deals 60x character's ATK in [INT] damage to all enemies that will ignore damage negating abilities and barriers, reduces Special Cooldown of Powerhouse characters by 2 turns, reduces damage received by 90% for 1 turn",
                "cooldown": [ 21, 16 ],
            },
        ],
        specialNotes: "#{ignoreBarrier}<br>#{stages}",
        specialName: "Swarm of Sharks",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of Powerhouse characters by 60",
            "level2": "Restores his own special by 2 turns when it is rewinded",
        },
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of Powerhouse characters by 60" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: Critical Hit" },
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
            { "description": "Acquire Sailor Ability 2: Restores his own special by 2 turns when it is rewinded" },
            { "description": "Boosts base HP by 90" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
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
    1881: {//Mihawk 6+
        captain: "Boosts ATK of Slasher characters by a variable factor between 1.5x and 3.5x based on the timing of the attack of the previous unit in the chain",
        captainNotes: "A hit below Good or a Miss will boost the ATK of the next unit by 1.5x, a Good hit by 2x, a Great hit by 2.75x and a Perfect hit by 3.5x. This bonus is applied only to Slasher characters.",
        special: [
            {
                "description": "Deals 30% of the damage dealt in the previous turn as typeless damage to all enemies",
                "cooldown": [ 18, 12 ]
            },
            {
                "description": "Deals 60% of the damage dealt in the previous turn as typeless damage to all enemies",
                "cooldown": [ 24, 18 ]
            }
        ],
        specialNotes: "The special only includes the damage inflicted through normal attacks. If the enemy dies by End-Of-Turn damage, your inflicted Damage dealt last turn will be 0.<br>#{stages}",
        specialName: "Flash of [Yoru]",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of Slasher characters by 120",
            "level2": "Boosts base ATK of Slasher characters by 50",
        },
        limit: [
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 15" },
            { "description": "Acquire Potential 1: Enrage" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Slasher characters by 120" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Potential 2: [PSY] Damage Reduction" },
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
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of Slasher characters by 50" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 3: Critical Hit" },
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
    1882: {//Rayleigh V2
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of all characters by 3.5x and boosts chances of getting Matching orbs if HP is below 30% at the start of the turn, 2.5x otherwise and boosts the HP and RCV of all characters by 1.25x",
        special: "Deals 200,000 fixed damage to one enemy that will ignore damage negating abilities and barriers, locks the chain multiplier at 3x for 1 turn, amplifies the effect of orbs by 1.75x for 1 turn and if HP is below 30% at the time the special is activated, reduces damage received by 95% for 1 turn and changes [RCV], [TND], [EMPTY] and [BLOCK] orbs into Matching orbs",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Signaling the Beginning of a Bright Future",
    },
    1883: {//Rayleigh V2
        captain: "Reduces cooldown of all specials by 1 turn at the start of the fight. Boosts ATK of all characters by 3.5x and boosts chances of getting Matching orbs if HP is below 30% at the start of the turn, 2.5x otherwise and boosts the HP and RCV of all characters by 1.25x",
        special: "Deals 200,000 fixed damage to one enemy that will ignore damage negating abilities and barriers, locks the chain multiplier at 3x for 1 turn, amplifies the effect of orbs by 1.75x for 1 turn and if HP is below 30% at the time the special is activated, reduces damage received by 95% for 1 turn and changes [RCV], [TND], [EMPTY] and [BLOCK] orbs into Matching orbs",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Signaling the Beginning of a Bright Future",
        sailor: {
            "base": "None",
            "level1": "Boosts ATK, HP and RCV of all characters by 50",
            "level2": "Makes [STR] and [QCK] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Sailor Ability 1: Boosts ATK, HP and RCV of all characters by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 55" },
            { "description": "Acquire Sailor Ability 2: Makes [STR] and [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
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
                    "Level 1: If you hit a perfect with this character, there is a 30% chance to deal 4% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 50% chance to deal 6% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 60% chance to deal 7% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 70% chance to deal 8% of this character's attack in extra damage"
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
    1884: {//Robin
        captain: "Boosts ATK of Cerebral characters by 1.75x and their HP by 1.1x",
        special: "Reduces Paralysis duration by 2 turns, Changes [EMPTY] orbs into Matching orbs and delays all enemies for 1 turn",
        specialName: "Blooming Flower Spear",
    },
    1885: {//Robin
        captain: "Boosts ATK of Cerebral characters by 2.25x and their HP by 1.2x",
        special: "Reduces Paralysis duration by 2 turns, Changes [EMPTY] orbs into Matching orbs and delays all enemies for 1 turn",
        specialName: "Blooming Flower Spear",
    },
    1886: {//Gladius
        captain: "Boosts ATK of Driven characters by 1.75x and their HP by 1.1x",
        special: "Reduces crew's current HP by 80%, Empties all slots with [BOMB] orbs, deals severe typeless damage based on number of [BOMB] slots emptied to all enemies and boosts ATK against delayed enemies by 1.5x for 2 turns",
        specialName: "Fashion Pop",
        specialNotes: "The exact multiplier used is chosen based on the number of [BOMB] orbs consumed: 0 orbs - 10x ATK; 1 orb - 20x ATK; 2 orbs - 40x ATK; 3 orbs - 80x ATK; 4 orbs - 150x ATK; 5 orbs - 250x ATK; 6 orbs - 400x ATK."
    },
    1887: {//Gladius
        captain: "Boosts ATK of Driven characters by 2.25x and their HP by 1.2x",
        special: "Reduces crew's current HP by 80%, Empties all slots with [BOMB] orbs, deals severe typeless damage based on number of [BOMB] slots emptied to all enemies and boosts ATK against delayed enemies by 1.5x for 2 turns",
        specialName: "Fashion Pop",
        specialNotes: "The exact multiplier used is chosen based on the number of [BOMB] orbs consumed: 0 orbs - 10x ATK; 1 orb - 20x ATK; 2 orbs - 40x ATK; 3 orbs - 80x ATK; 4 orbs - 150x ATK; 5 orbs - 250x ATK; 6 orbs - 400x ATK."
    },
    1888: {//Cavendish
        captain: "Boosts ATK of Driven characters by 1.2x, recovers 0.5x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 1.32x following a chain of same type attacks no lower than Good",
        special: "Removes all positive buffs on your team, recovers 1,224 HP, changes Badly Matching orbs into Matching orbs. Boosts ATK of Driven characters by 1.75x for 1 turn and amplifies the effect of orbs by 1.75x for Driven characters for 1 turn",
        specialName: "A Star Descending from the Twinkling Night Sky",
    },
    1889: {//Cavendish
        captain: {
            "base": "Boosts ATK of Driven characters by 1.5x, recovers 1.5x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 1.8x following a chain of same type attacks no lower than Good",
            "level1": "Boosts ATK of Driven characters by 1.5x, recovers 1.6x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 1.95x following a chain of same type attacks no lower than Good",
            "level2": "Boosts ATK of Driven characters by 1.5x, recovers 1.7x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 2.1x following a chain of same type attacks no lower than Good",
            "level3": "Boosts ATK of Driven characters by 1.5x, recovers 1.8x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 2.25x following a chain of same type attacks no lower than Good",
            "level4": "Boosts ATK of Driven characters by 1.75x, recovers 1.9x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 2.625x following a chain of same type attacks no lower than Good",
            "level5": "Boosts ATK of Driven characters by 2x, recovers 2x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 3x following a chain of same type attacks no lower than Good",
            "level6": "Boosts ATK of Driven characters by 2.5x, recovers 2 character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 3.75x following a chain of same type attacks no lower than Good",
        },
        special: "Removes all positive buffs on your team, recovers 1,224 HP, changes Badly Matching orbs into Matching orbs. Boosts ATK of Driven characters by 1.75x for 1 turn and amplifies the effect of orbs by 1.75x for Driven characters for 1 turn",
        specialName: "A Star Descending from the Twinkling Night Sky",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Driven characters by 50",
            "level2": "Makes [PSY] orbs \"beneficial\" for Driven characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 1.5x, recovers 1.6x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 1.95x following a chain of same type attacks no lower than Good" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Driven characters by 50" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 1.5x, recovers 1.7x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 2.1x following a chain of same type attacks no lower than Good" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 1.5x, recovers 1.8x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 2.25x following a chain of same type attacks no lower than Good" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 65" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 1.75x, recovers 1.9x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 2.625x following a chain of same type attacks no lower than Good" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] orbs \"beneficial\" for Driven characters" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 85" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 2x, recovers 2x character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 3x following a chain of same type attacks no lower than Good" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Driven characters by 2.5x, recovers 2 character's RCV in HP at the end of each turn. Boosts ATK of Driven characters by 3.75x following a chain of same type attacks no lower than Good" },
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
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 10% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 40% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ],
    },
    1890: {//Perona
        captain: "Boosts ATK of Shooter characters by 2x and their HP by 1.2x",
        special: "Reduces damage received by 50% for 2 turns, makes Badly Matching and [BLOCK] orbs not reduce damage for 2 turns and recovers 2,000 HP at the end of the turn for 3 turns",
        specialNotes: "Ex. A STR character with a QCK orb will still deal regular damage",
        specialName: "Gothic Angel",
        sailor: "Boosts base RCV of Shooter characters by 50"
    },
    1891: {//Perona
        captain: "Boosts ATK of Shooter characters by 2.25x and their HP by 1.2x. Reduce damage received by 10%",
        special: "Reduces damage received by 50% for 2 turns, makes Badly Matching and [BLOCK] orbs not reduce damage for 2 turns and recovers 2,000 HP at the end of the turn for 3 turns",
        specialNotes: "Ex. A STR character with a QCK orb will still deal regular damage",
        specialName: "Gothic Angel",
        sailor: "Boosts base RCV of Shooter characters by 50"
    },
    1892: {//Mihawk
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.5x",
        special: [
            {
                "description": "Reduces crew's current HP by 50%, deals 2x the amount of HP subtracted in typeless damage to all enemies.",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Reduces crew's current HP by 50%, deals 2x the amount of HP subtracted in typeless damage to all enemies. Delays all enemies for 1 turn",
                "cooldown": [ 19, 14 ],
            },
            {
                "description": "Reduces crew's current HP by 80%, deals 6x the amount of HP subtracted in typeless damage to all enemies. Delays all enemies for 1 turn",
                "cooldown": [ 23, 18 ],
            },
        ],
        specialName: "A Test Against the Black Blade",
        specialNotes: "#{stages}",
        sailor: "When HP is below 50% at the start of the turn, boosts own base ATK by 1.25x"
    },
    1893: {//Mihawk
        captain: "Boosts ATK of Slasher and Cerebral characters by 1.75x",
        special: [
            {
                "description": "Reduces crew's current HP by 50%, deals 2x the amount of HP subtracted in typeless damage to all enemies.",
                "cooldown": [ 15, 10 ],
            },
            {
                "description": "Reduces crew's current HP by 50%, deals 2x the amount of HP subtracted in typeless damage to all enemies. Delays all enemies for 1 turn",
                "cooldown": [ 19, 14 ],
            },
            {
                "description": "Reduces crew's current HP by 80%, deals 6x the amount of HP subtracted in typeless damage to all enemies. Delays all enemies for 1 turn",
                "cooldown": [ 23, 18 ],
            },
        ],
        specialName: "A Test Against the Black Blade",
        specialNotes: "#{stages}",
        sailor: "When HP is below 50% at the start of the turn, boosts own base ATK by 1.25x"
    },
    1894: {//Urouge
        captain: "Boosts ATK of Fighter characters by 2x and their HP by 1.2x",
        special: "If HP is below 50% at the time the special is activated, deal 75x character's ATK in [QCK] damage to one enemy, boosts ATK of Fighter characters by 2x for 1 turn",
        specialName: "The Collapsing Arhat",
    },
    1895: {//Urouge
        captain: "Boosts ATK of Fighter characters by 3.0375x if HP is below 50% at the start of the turn, 2.25x otherwise and boosts the HP of Fighter characters by 1.25x",
        special: "If HP is below 50% at the time the special is activated, deal 75x character's ATK in [QCK] damage to one enemy, boosts ATK of Fighter characters by 2x for 1 turn",
        specialName: "The Collapsing Arhat",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of Fighter characters by 50",
            "level2": "When HP is below ??% at the start of the turn, boosts base ATK of Fighter characters by 75",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Fighter characters by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: When HP is below ??% at the start of the turn, boosts base ATK of Fighter characters by 75" },
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
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    1896: {//Enel
        captain: "Boosts ATK of Driven characters proportionally to the crew's current HP, by 2.25x at max",
        captainNotes: "#{captainProportional : higher : 1.25 + 1 * ((remaining HP) / (total HP)) : 2.25 : 1.25}",
        special: [
            {
                "description": "Changes own orb into [STR], reduces crew's ATK DOWN, Chain Multiplier Limit and Paralysis duration by 2 turns. If your Captain is a Driven character, adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 23, 9 ],
            },
            {
                "description": "Changes own orb into [STR], reduces crew's ATK DOWN, Chain Multiplier Limit and Paralysis duration by 5 turns. If your Captain is a Driven character, adds .7x to Chain multiplier for 1 turn",
                "cooldown": [ 28, 14 ],
            },
        ],
        specialName: "30,000,000 Volt: Hino",
        specialNotes: "#{stages}",
    },
    1897: {//Enel
        captain: "Boosts ATK of Driven characters proportionally to the crew's current HP, by 2.75x at max and their RCV by 1.3x",
        captainNotes: "#{captainProportional : higher : 1.5 + 1.25 * ((remaining HP) / (total HP)) : 2.75 : 1.5}",
        special: [
            {
                "description": "Changes own orb into [STR], reduces crew's ATK DOWN, Chain Multiplier Limit and Paralysis duration by 2 turns. If your Captain is a Driven character, adds .3x to Chain multiplier for 1 turn",
                "cooldown": [ 23, 9 ],
            },
            {
                "description": "Changes own orb into [STR], reduces crew's ATK DOWN, Chain Multiplier Limit and Paralysis duration by 5 turns. If your Captain is a Driven character, adds .7x to Chain multiplier for 1 turn",
                "cooldown": [ 28, 14 ],
            },
        ],
        specialName: "30,000,000 Volt: Hino",
        specialNotes: "#{stages}",
        sailor: {
            "base": "None",
            "level1": "Boosts base RCV of Driven characters by 25",
            "level2": "Boosts base ATK of Driven characters by 40",
        },
        limit: [
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base RCV of Driven characters by 25" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK of Driven characters by 40" },
            { "description": "Acquire Potential 2: Pinch Healing" },
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
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    1898: {//Neo Killer
        captain: "Boosts ATK of Striker and Slasher characters by 2x, reduces crew's RCV to 0.",
        special: "Changes [STR], [DEX] and [QCK] orbs on Striker and Slasher characters into matching orbs, cuts the current HP of one enemy by 8%",
        specialName: "Hitting Size [Neo]"
    },
    1899: {//Neo Killer
        captain: "Boosts ATK of Striker and Slasher characters by 2.75x if they have a Matching orb, by 2x otherwise, reduces crew's RCV to 0.",
        special: "Changes [STR], [DEX] and [QCK] orbs on Striker and Slasher characters into matching orbs, cuts the current HP of one enemy by 8%",
        specialName: "Hitting Size [Neo]",
    },
    1900: {//EXP Zoro
        captain: "Boosts ATK of all characters by 2.25x and boosts EXP and amount of Beli received by 1.2x",
        special: "Changes own orb into [QCK], boosts own ATK by 1.5x for 1 turn, deals 15x character's ATK in [QCK] damage to one enemy",
        specialName: "One Sword Style: Baki",
    },
    1901:{//Pica
        captain: "Boosts ATK of Driven characters by 1.2x and their HP by 1.75x",
        special: "Cuts the current HP of one enemy by 20%, reduces Bind and Despair duration by 4 turns, changes all orbs including [BLOCK] orbs on Driven characters into [G] orbs",
        specialNotes: "#{gOrbs}",
        specialName: "The Toughest Trump Card",
        sailor: "Cannot be Blown Away",
    },
    1902:{//Pica
        captain: "Boosts ATK of Driven characters by 1.75x and their HP by 2.25x",
        special: "Cuts the current HP of one enemy by 20%, reduces Bind and Despair duration by 4 turns, changes all orbs including [BLOCK] orbs on Driven characters into [G] orbs",
        specialNotes: "#{gOrbs}",
        specialName: "The Toughest Trump Card",
        sailor: {
            "base": "Cannot be Blown Away",
            "level1": "Makes [INT] orbs \"beneficial\" for Driven characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 5" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 65" },
            { "description": "Acquire Sailor Ability 1: Makes [INT] orbs \"beneficial\" for Driven characters" },
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
                    "Level 1: Reduces Slot Bind duration by 1 turn on this character",
                    "Level 2: Reduces Slot Bind duration by 2 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 7 turns on this character"
                ]
            },
        ]
    },
    1903:{//Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 2.25x",
        special: "Reduces enemy Barrier duration by 1 turn, Reduces enemies Damage Nullification duration by 1 turn and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Diaper Bomb",
        sailor: "Makes [DEX] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1904:{//Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 2.75x",
        special: "Reduces enemy Barrier duration by 1 turn, Reduces enemies Damage Nullification duration by 1 turn and deals 30x character's ATK in [QCK] damage to all enemies",
        specialName: "Diaper Bomb",
        sailor: {
            "base": "Makes [DEX] orbs \"beneficial\" for this unit",
            "level1": "Boosts base ATK, HP and RCV of Free Spirit characters by 50",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 80" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Free Spirit characters by 50" },
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
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    1905:{//Sugar
        captain: "Boosts ATK of Driven and Cerebral characters by 2x",
        special: "Changes [RCV], [TND] and [G] orbs into Matching orbs and amplifies the effect of orbs for Driven characters by 1.75x for 3 turns. Locks orbs for 1 turn.",
        specialName: "March of the Decapitating Dolls",
        sailor: "Reduces Paralysis duration by 1 turn",
    },
    1906:{//Sugar
        captain: "Boosts ATK of Driven and Cerebral characters by 2.25x and their RCV by 1.5x",
        special: "Changes [RCV], [TND] and [G] orbs into Matching orbs and amplifies the effect of orbs for Driven characters by 1.75x for 3 turns. Locks orbs for 1 turn.",
        specialName: "March of the Decapitating Dolls",
        sailor: {
            "base": "Reduces Paralysis duration by 1 turn",
            "level1": "Makes [RCV] orbs \"beneficial\" for Driven characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Makes [RCV] orbs \"beneficial\" for Driven characters" },
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
        ]
    },
    1907:{//Trebol
        captain: "Boosts ATK of Driven characters by 3x, reduces crew's current HP by 10% at the end of each turn, reduces his own ATK multiplier by 4% at the end of each turn",
        captainNotes: "His ATK multiplier will be 3x on the first turn, 2.?x on the second, 2.?x on the third and so on. The reduction stops once the multiplier is ???x. The multiplier affects all Driven characters. You will not die to the HP reduction",
        special: "Reduces enemies Threshold Damage Reduction, Percent Damage Reduction and Increased Defense duration by 4 turns. If there are 6 Driven characters in your crew, Boosts ATK of Driven characters by 2x for 1 turn and reduces Special Cooldown of your top row by 1 turn.",
        specialName: "Beta Betton Meteora",
        sailor: "Boosts base ATK of the characters in the top row by 100",
    },
    1908:{//Trebol
        captain: "Boosts ATK of Driven characters by 3.5x, reduces crew's current HP by 10% at the end of each turn, reduces his own ATK multiplier by 4% at the end of each turn",
        captainNotes: "His ATK multiplier will be 3.5x on the first turn, 3.?x on the second, 3.?x on the third and so on. The reduction stops once the multiplier is ???x. The multiplier affects all Driven characters. You will not die to the HP reduction",
        special: "Reduces enemies Threshold Damage Reduction, Percent Damage Reduction and Increased Defense duration by 4 turns. If there are 6 Driven characters in your crew, Boosts ATK of Driven characters by 2x for 1 turn and reduces Special Cooldown of your top row by 1 turn.",
        specialName: "Beta Betton Meteora",
        sailor: {
            "base": "Boosts base ATK of the characters in the top row by 100",
            "level1": "Makes [TND] orbs \"beneficial\" for Driven characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 1: Makes [TND] orbs \"beneficial\" for Driven characters" },
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
                    "Level 5: Reduces Slot Bind duration by 8 turns on this character"
                ]
            },
        ]
    },
    1909:{//V2 Doflamingo
        captain: "If there are 6 Driven characters in your crew, boosts ATK of Driven characters by 3.9x if they have a matching orb, by 3.25x otherwise and their HP by 1.2x. Lowers chances of getting STR orbs and makes DEX and QCK orbs \"beneficial\" to Driven characters",
        captainNotes: "#{beneficial}",
        special: "Deals 200% of the damage dealt in Overkill Damage in the previous turn as typeless damage to all enemies.",
        specialNotes: "Overkill Damage is damage dealt over the enemy's current HP with normal attacks that killed them. For example, dealing 2,100,000 damage to an enemy with 1,000,000 HP will count as 1,100,000 Overkill Damage. This stacks for each enemy killed in the previous turn. If the enemy dies by End-Of-Turn damage, your Overkill Damage dealt last turn will be 0.",
        specialName: "Flap Thread",
    },
    1910:{//V2 Doflamingo
        captain: "If there are 6 Driven characters in your crew, boosts ATK of Driven characters by 3.9x if they have a matching orb, by 3.25x otherwise and their HP by 1.2x. Lowers chances of getting STR orbs and makes DEX and QCK orbs \"beneficial\" to Driven characters",
        captainNotes: "#{beneficial}",
        special: "Deals 200% of the damage dealt in Overkill Damage in the previous turn as typeless damage to all enemies.",
        specialNotes: "Overkill Damage is damage dealt over the enemy's current HP with normal attacks that killed them. For example, dealing 2,100,000 damage to an enemy with 1,000,000 HP will count as 1,100,000 Overkill Damage. This stacks for each enemy killed in the previous turn. If the enemy dies by End-Of-Turn damage, your Overkill Damage dealt last turn will be 0.",
        specialName: "Flap Thread",
        sailor: {
            "base": "None",
            "level1": "Makes [QCK] orbs \"beneficial\" for this unit",
            "level2": "Makes [DEX] orbs \"beneficial\" for Driven characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 25" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base RCV by 35" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Boosts base HP by 20" },
            { "description": "Acquire Potential 2: Reduce No Healing duration" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 55" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base ATK by 55" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs \"beneficial\" for Driven characters" },
            { "description": "Acquire Potential 3: Slot Bind Self-reduction" },
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
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 4 turns",
                    "Level 5: Reduces No Healing duration by 5 turns"
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
        ]
    },
    1911:{//Kimono Urouge
        captain: "Boosts ATK of Striker and Powerhouse characters by 1.5x. Boosts EXP gained by 1.25x",
        special: "Changes [RCV], [TND], [G], [BLOCK] and [BOMB] orbs into Matching orbs, recovers 7,600 HP and reduces damage received by 76% for 1 turn",
        specialName: "Prayers of Paradise",
    },
    1912:{//Kimono Urouge
        captain: "Boosts ATK of Striker and Powerhouse characters by 1.75x and their HP by 1.5x. Boosts EXP gained by 1.5x",
        special: "Changes [RCV], [TND], [G], [BLOCK] and [BOMB] orbs into Matching orbs, recovers 7,600 HP and reduces damage received by 76% for 1 turn",
        specialName: "Prayers of Paradise",
    },
    1913:{//Kimono Vivi
        captain: "Boosts ATK of Free Spirit and Cerebral characters by 1.5x. Boosts Beli gained by 1.5x",
        special: "Randomizes all non-matching orbs, recovers 2,018 HP and amplifies the effects of orbs for Cerebral and Free Spirit characters by 1.75x for 1 turn",
        specialName: "Blossoming a New Year Celebration",
    },
    1914:{//Kimono Vivi
        captain: "Boosts ATK of Free Spirit and Cerebral characters by 1.75x and their HP by 1.5x. Boosts Beli gained by 2.5x",
        special: "Randomizes all non-matching orbs, recovers 2,018 HP and amplifies the effects of orbs for Cerebral and Free Spirit characters by 1.75x for 1 turn",
        specialName: "Blossoming a New Year Celebration",
    },
    1915: {//G4 Luffy
        captain: "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 3 Perfects in a row",
        special: "Randomizes all orbs, including [BLOCK] orbs, changes own orb into [QCK], deals 300x character's ATK in typeless damage to one enemy and boosts the Color Affinity of all characters by 1.75x for 1 turns",
        specialName: "Gomu Gomu no Leo Bazooka",
    },
    1916: {//G4 Luffy
        captain: {
            "base": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row",
            "level1": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row and reduce damage received by 2%",
            "level2": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row and reduce damage received by 4%",
            "level3": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row, boosts by 3x after scoring 4 Perfects in a row and reduce damage received by 4%",
            "level4": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row, boosts by 3.25x after scoring 4 Perfects in a row and reduce damage received by 4%",
            "level5": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row, boosts by 3.5x after scoring 4 Perfects in a row and reduce damage received by 4%",
            "level6": "Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row, boosts by 4x after scoring 4 Perfects in a row and reduce damage received by 4%",
        },
        special: "Randomizes all orbs, including [BLOCK] orbs, changes own orb into [QCK], deals 300x character's ATK in typeless damage to one enemy and boosts the Color Affinity of all characters by 1.75x for 1 turns",
        specialName: "Gomu Gomu no Leo Bazooka",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Free Spirit characters by 30",
            "level2": "Boosts base ATK, HP and RCV of Powerhouse characters by 30",
        },
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row and reduce damage received by 2%" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Free Spirit characters by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row and reduce damage received by 4%" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row, boosts by 3x after scoring 4 Perfects in a row and reduce damage received by 4%" },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 65" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row, boosts by 3.25x after scoring 4 Perfects in a row and reduce damage received by 4%" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Acquire Sailor Ability 2: Boosts base ATK, HP and RCV of Powerhouse characters by 30" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base HP by 85" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row, boosts by 3.5x after scoring 4 Perfects in a row and reduce damage received by 4%" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base HP by 100" },
            { "description": "Acquire new Captain Ability: Boosts ATK of Powerhouse and Free Spirit characters by 2x after scoring 2 Perfects in a row, boosts by 4x and reduce damage received by 4% after scoring 4 Perfects in a row" },
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
                    "Level 1: Boosts base ATK by 30",
                    "Level 2: Boosts base ATK by 60",
                    "Level 3: Boosts base ATK by 90",
                    "Level 4: Boosts base ATK by 100",
                    "Level 5: Boosts base ATK by 150"
                ]
            },
        ]
    },
    1917: {//Reiju
        captain: "Boosts ATK of STR characters by 2x and reduces damage received by 10%",
        special: "Reduces Bind duration by 2 turns, boosts ATK of [STR] characters by 1.75x for 1 turn",
        specialName: "Brute Force Rescue",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1918: {//Reiju
        captain: "Boosts ATK of STR characters by 2.25x and reduce damage received by 15%",
        special: "Reduces Bind duration by 2 turns, boosts ATK of [STR] characters by 1.75x for 1 turn",
        specialName: "Brute Force Rescue",
        sailor: "Makes [PSY] orbs \"beneficial\" for this unit",
        sailorNotes: "#{beneficial}",
    },
    1919: {//Sanji
        captain: "Recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Reduces enemies Percent Damage Reduction and Increased Defense duration by 2 turns and switches orbs between slots twice",
        specialName: "Iron Mask of Dreams",
    },
    1920: {//Sanji
        captain: "Recovers 3x character's RCV in HP at the end of each turn",
        special: "Reduces enemies Percent Damage Reduction and Increased Defense duration by 2 turns and switches orbs between slots twice",
        specialName: "Iron Mask of Dreams",
    },
    1921:{//6+ Zoro
        captain: "Boosts ATK of Slasher characters by 3x and their HP by 1.5x",
        special: "Deals 120x character's ATK as typeless damage to all enemies. If Zoro is your Captain or Friend/Guest Captain, boosts ATK of Slasher characters by 2x for 1 turn. If he is a Sailor, boosts ATK of Slasher characters by 1.75x for 1 turn and locks the chain multiplier at 2.5x for 1 turn instead",
        specialName: "Santoryu Ogi: Ichidai Sanzen Daisen Sekai",
    },
    1922:{//6+ Law
        captain: "Boosts ATK of Cerebral characters by 3x, HP by 1.25x and heals for 0.5x his RCV at the end of the turn each time you hit a PERFECT",
        special: "Reduces enemy Barrier duration by 1 turn, deals 200,000 fixed damage to all enemies and amplifies the effect of orbs for Cerebral characters by 2.25x for 1 turn",
        specialName: "Radio Knife",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Striker characters by 50",
            "level2": "Makes [RCV] and [TND] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Striker characters by 50" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 2: Reduce No Healing Duration" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire Sailor Ability 2: Makes [RCV] and [TND] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base HP by 90" },
            { "description": "Acquire Potential 3: Barrier Penetration" },
        ],
        potential: [
            {
                "Name": "Pinch Healing",
                "description": [ 
                    "Level 1: If HP is below 10% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 2x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 1 turn",
                    "Level 3: Reduces No Healing duration by 2 turns",
                    "Level 4: Reduces No Healing duration by 2 turns",
                    "Level 5: Reduces No Healing duration by 3 turns"
                ]
            },
            {
                "Name": "Barrier Penetration",
                "description": [ 
                    "Level 1: This character's attack will ignore barriers if HP is above 99%",
                    "Level 2: This character's attack will ignore barriers if HP is above 80%",
                    "Level 3: This character's attack will ignore barriers if HP is above 70%",
                    "Level 4: This character's attack will ignore barriers if HP is above 50%",
                    "Level 5: This character's attack will ignore barriers"
                ]
            },
        ]
    },
    1923: {//Rayleigh
        captain: "Boosts ATK of Slasher and Cerebral characters by 2x",
        special: "Randomizes all non-matching orbs, boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Maelstrom at Sea",
    },
    1924: {//Rayleigh
        captain: "Boosts ATK of Slasher and Cerebral characters by 2.5x, recovers 2x character's RCV in HP at the end of each turn",
        special: "Randomizes all non-matching orbs, boosts ATK of all characters by 1.75x for 1 turn",
        specialName: "Maelstrom at Sea",
    },
    1925: {//Coby
        captain: "Not Translated",
        special: "Reduces Bind duration for one character completely, locks all orbs for 1 turn and boosts ATK of Driven characters by 1.75x for 3 turns",
        specialName: "Unshameful Fist of Justice",
    },
    1926: {//Coby
        captain: "Boosts ATK of Driven characters by 2.5x, recovers 2x character's RCV in HP at the end of each turn and reduce damage received by 7%",
        special: "Reduces Bind duration for one character completely, locks all orbs for 1 turn and boosts ATK of Driven characters by 1.75x for 3 turns",
        specialName: "Unshameful Fist of Justice",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of Driven characters by 75",
            "level2": "Makes PSY orbs \"beneficial\" for Driven characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Pinch Healing" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Driven characters by 75" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Sailor Ability 2: Makes PSY orbs \"beneficial\" for Driven characters" },
            { "description": "Acquire Potential 2: Slot Bind Self-reduction" },
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
    1927: {//Crocodile
        special: "Cuts the current HP of each enemy by 20% and boosts ATK of Cerebral characters by 2x",
        specialName: "Desert Girasole",
        captain: "Boosts ATK of Cerebral characters proportionally to the crew's current HP, by 3.5x at max",
        captainNotes: "#{captainProportional : lower : 2 + 1.5 * (1 - (remaining HP) / (total HP)) : 2 : 3.5}",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Cerebral characters by 50",
            "level2": "Makes DEX orbs \"beneficial\" for Cerebral characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 5" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Cerebral characters by 50" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 75" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 75" },
            { "description": "Acquire Sailor Ability 2: Makes DEX orbs \"beneficial\" for Cerebral characters" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 55" },
            { "description": "Acquire Potential 3: Enrage" },
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
    1928: {//Bartolomeo
        captain: "Boosts ATK of Striker and Driven characters by 3x. If you don't attack with Bartolomeo, reduces damage received by 30% for that turn.",
        special: "Protects from defeat for 1 turn and boosts ATK of Striker and Driven characters and amplifies orbs of Striker and Driven characters by 1.5x for 1 turn",
        specialNotes: "#{zombie}",
        specialName: "An Oath of One's Life and Soul",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of Striker characters by 60",
            "level2": "Completely resists Paralysis on this character",
        },
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base HP by 35" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of Striker characters by 60" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 45" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Potential 2: Enrage" },
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
            { "description": "Acquire Sailor Ability 2: Completely resists Paralysis on this character" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 45" },
            { "description": "Acquire Potential 3: Reduce No Healing duration" },
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
        potentialNotes: "#{enrage}"
    },
    1929: {//Enel Neo
        special: "Reduces crew's current HP by 90%, deals 20,000 fixed damage to all enemies, boosts ATK of DEX characters by 2x for 1 turn",
        specialName: "200,000,000 Volt Amaru [Neo]",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of DEX characters by 2x",
    },
    1930: {//Enel Neo
        special: "Reduces crew's current HP by 90%, deals 20,000 fixed damage to all enemies, boosts ATK of DEX characters by 2x for 1 turn",
        specialName: "200,000,000 Volt Amaru [Neo]",
        specialNotes: "#{fixed}",
        captain: "Boosts ATK of DEX characters by 2.25x, recovers 5x character's RCV in HP at the end of each turn",
    },
    1931: {//Sandersonia
        captain: "Boosts ATK of Free Spirit characters by 1.75x",
        special: "Adds .25x to Chain multiplier for 1 turn and boosts ATK of Fighter characters by 1.5x for 1 turn. If \"The Trio Crawling Away from the Heavens: The Eldest Daughter\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 1.75x instead.",
        specialNotes: "This special is boosted if you use Boa Hancock's [1933] special in the same turn",
        specialName: "The Trio Crawling Away from the Heavens: The Second Daughter",
        sailor: "Boosts own base ATK by 100 if this character is the 2nd in the chain to attack",
    },
    1932: {//Marigold
        captain: "Boosts ATK of Fighter characters by 1.75x",
        special: "Amplifies the effect of orbs for Fighter characters by 1.25x for 1 turn and boosts ATK of Fighter characters by 1.5x for 1 turn. If \"The Trio Crawling Away from the Heavens: The Second Daughter\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 1.75x instead.",
        specialNotes: "This special is boosted if you use Boa Sandersonia's [1931] special in the same turn",
        specialName: "The Trio Crawling Away from the Heavens: The Third Daughter",
        sailor: "Boosts own base ATK by 100 if this character is the 3rd in the chain to attack",
    },
    1933: {//Hancock
        captain: "Boosts ATK of Fighter characters by 1.75x and boosts ATK of Free Spirit characters by 1.5x",
        captainNotes: "The bonus is cumulative. Fighter + Free Spirit characters get a 2.625x bonus.",
        special: "Makes [DEX] orb \"beneficial\" for Fighter characters for 1 turn and boosts ATK of Fighter characters by 1.5x for 1 turn. If \"The Trio Crawling Away from the Heavens: The Third Daughter\" is used again in the same turn the special is activated in, boosts ATK of Fighter characters by 1.75x instead.",
        specialNotes: "This special is boosted if you use Boa Marigold's [1932] special in the same turn<br>#{beneficial}",
        specialName: "The Trio Crawling Away from the Heavens: The Eldest Daughter",
        sailor: "Boosts own base ATK by 100 if this character is the 1st in the chain to attack",
    },
    1934: {//Legend Franky
        captain: "Boosts ATK of all characters by 3x and their HP by 1.3x if there are 6 characters in your crew with Fighter, Slasher, Shooter or Striker classes. <br> <b>Action:</b> Franky brings the entire crew into General Franky for 1 turn, immune to Blow Away inflicted to the crew. During this turn, boosts ATK of all characters by 4x instead and reduces damage taken by 38%",
        captainNotes: "All characters on your crew must have one of the 4 classes listed, but you do not need one of each. Franky Captain Action lasts one turn and can be reactivated after a 4 turn cooldown. Only 1 Franky Captain Action can be activated at once. <br\> During transformation:<br\>If you attack with a Fighter character, deal 1.25x damage to targeted enemy<br\>If you attack with a Slasher character, deal full damage to targeted enemy, but partial damage (??%) to all enemies in the same row<br\>If you attack with a Striker character, deal 0.5x damage to all enemies on the stage<br\>If you attack with a Shooter character, deal .75x damage to targeted enemy but deal 0.3x damage to all other enemies on the stage",
        special: "Cuts the current HP of all enemies by 10%, randomizes all non-matching orbs, including [BLOCK] orbs and boosts ATK of Fighter, Slasher, Shooter and Striker characters by 2x for 1 turn",
        specialName: "Franky Cannon",
    },
    1935: {//Legend Franky
        captain: "Boosts ATK of all characters by 3x and their HP by 1.3x if there are 6 characters in your crew with Fighter, Slasher, Shooter or Striker classes. <br> <b>Action:</b> Franky brings the entire crew into General Franky for 1 turn, immune to Blow Away inflicted to the crew. During this turn, boosts ATK of all characters by 4x instead and reduces damage taken by 38%",
        captainNotes: "All characters on your crew must have one of the 4 classes listed, but you do not need one of each. Franky Captain Action lasts one turn and can be reactivated after a 4 turn cooldown. Only 1 Franky Captain Action can be activated at once. <br\> During transformation:<br\>If you attack with a Fighter character, deal 1.25x damage to targeted enemy<br\>If you attack with a Slasher character, deal full damage to targeted enemy, but partial damage (??%) to all enemies in the same row<br\>If you attack with a Striker character, deal 0.5x damage to all enemies on the stage<br\>If you attack with a Shooter character, deal .75x damage to targeted enemy but deal 0.3x damage to all other enemies on the stage",
        special: "Cuts the current HP of all enemies by 10%, randomizes all non-matching orbs, including [BLOCK] orbs and boosts ATK of Fighter, Slasher, Shooter and Striker characters by 2x for 1 turn",
        specialName: "Franky Cannon",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Shooter, Slasher, Fighter and Striker characters by 50",
            "level2": "Makes [QCK] orbs \"beneficial\" for Shooter, Slasher, Fighter and Striker characters",
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
            { "description": "Acquire Potential 2: Reduce No Healing Duration" },
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
            { "description": "Acquire Sailor Ability 2: Makes [QCK] orbs \"beneficial\" for Shooter, Slasher, Fighter and Striker characters" },
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
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turn",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
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
    1936: {//Blackbeard
        captain: "Boosts ATK of [INT] characters by 1.75x",
        special: "Adds 15x character's ATK as Additional Typeless Damage for 2 turns. If you are on a Training Map, Cuts the current HP of all enemies depending on your Treasure Map Level that will ignore damage negating abilities and barriers",
        specialNotes: "Level 1-20: 10% Health Cut<br\>Level 21+: 25% Health Cut<br>#{ignoreBarrier}",
        specialName: "Sacred Flames: Unknown Fire",
    },
    1937: {//Blackbeard
        captain: "Boosts ATK of [INT] characters by 1.75x and their HP by 1.5x",
        special: "Adds 15x character's ATK as Additional Typeless Damage for 2 turns. If you are on a Training Map, Cuts the current HP of all enemies depending on your Treasure Map Level that will ignore damage negating abilities and barriers",
        specialNotes: "Level 1-20: 10% Health Cut<br\>Level 21+: 25% Health Cut<br>#{ignoreBarrier}",
        specialName: "Sacred Flames: Unknown Fire",
    },
    1938: {//Thatch
        captain: "Boosts ATK of [DEX] characters by 1.75x",
        special: "Deals 13x character's ATK in [DEX] damage to one enemy, changes adjacent orbs into Matching Orbs, if there are 4 enemies or more on the stage, amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Gliding Twin Swords",
    },
    1939: {//Thatch
        captain: "Boosts ATK of [DEX] characters by 1.75x and their HP by 1.5x",
        special: "Deals 13x character's ATK in [DEX] damage to one enemy, changes adjacent orbs into Matching Orbs, if there are 4 enemies or more on the stage, amplifies the effect of orbs by 1.75x for 1 turn",
        specialName: "Gliding Twin Swords",
    },
    1940: {//Ace
        captain: "If there is a [STR], [QCK] and [PSY] character in your crew, boosts ATK of [STR], [QCK] and [PSY] characters by 1.75x and their HP and RCV by 1.05x",
        special: "Changes all orbs, including [BLOCK] orbs, to [STR] orbs, boosts ATK of [STR], [QCK] and [PSY] characters by 1.75x for 1 turn, makes [STR] orbs \"beneficial\" for [STR], [QCK] and [PSY] characters if your Captain is a Free Spirit character",
        specialNotes: "#{beneficial}",
        specialName: "Sacred Flames: Unknown Fire",
    },
    1941: {//Ace
        captain: {
            "base": "If there is a [STR], [QCK] and [PSY] character in your crew, boosts ATK of [STR], [QCK] and [PSY] characters by 2x and their HP and RCV by 1.1x",
            "level1": "Not Translated",
            "level2": "Not Translated",
            "level3": "Not Translated",
            "level4": "Not Translated",
            "level5": "Not Translated",
            "level6": "If there is a [STR], [QCK] and [PSY] character in your crew, boosts ATK of [STR], [QCK] and [PSY] characters by 3.44x if they have a [STR] orb, by 2.75x otherwise and their HP and RCV by 1.2x",
        },
        special: "Changes all orbs, including [BLOCK] orbs, to [STR] orbs, boosts ATK of [STR], [QCK], [PSY] characters by 1.75x for 1 turn, makes [STR] orbs \"beneficial\" for [STR], [QCK] and [PSY] characters if your Captain is a Free Spirit character",
        specialNotes: "#{beneficial}",
        specialName: "Sacred Flames: Unknown Fire",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Free Spirit characters by 30",
            "level2": "Makes [PSY] orbs \"beneficial\" for this unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Free Spirit characters by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 55" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] orbs \"beneficial\" for this unit" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 60" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire new Captain Ability: " },
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
                    "Level 2: Reduces Slot Bind duration by 3 turns on this character",
                    "Level 3: Reduces Slot Bind duration by 5 turns on this character",
                    "Level 4: Reduces Slot Bind duration by 7 turns on this character",
                    "Level 5: Reduces Slot Bind duration by 10 turns on this character"
                ]
            },
        ]
    },
    1942: {//Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 2x",
        special: "Changes own orb into [STR], reduces Chain Multiplier Limit and Chain Coefficient Reduction by 3 turns. If your captain is a Free Spirit Character, boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Manly Synchronized Swimming",
    },
    1943: {//Senor Pink
        captain: "Boosts ATK of Free Spirit characters by 2.5x and recovers 1.5x character's RCV in HP at the end of each turn",
        special: "Changes own orb into [STR], reduces Chain Multiplier Limit and Chain Coefficient Reduction by 3 turns. If your captain is a Free Spirit Character, boosts ATK against delayed enemies by 1.75x for 1 turn",
        specialName: "Manly Synchronized Swimming",
        sailor: {
            "base": "None",
            "level1": "Boosts base HP of Free Spirit characters by 50",
            "level2": "Boosts base RCV of Free Spirit characters by 50",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 15" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base HP by 95" },
            { "description": "Acquire Sailor Ability 1: Boosts base HP of Free Spirit characters by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Sailor Ability 2: Boosts base RCV of Free Spirit characters by 50" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire Potential 2: Pinch Healing" },
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
                    "Level 1: If HP is below 5% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 5% at the start of the turn, heals for 1.25x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 5% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 10% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 20% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ]
    },
    1944: {//Pedro
        captain: "Boosts ATK of Cerebral characters by 2x",
        special: "Reduces crew's current HP by 95%, deals 50x character's ATK in typeless damage to all enemies that will ignore damage negating abilities and barriers, boosts the Color Affinity of Cerebral characters by 1.75x for 2 turns",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Explosive Reply",
    },
    1945: {//Pedro
        captain: "Boosts ATK of Cerebral characters by 2.5x and makes [PSY] and [INT] orbs \"beneficial\" to Cerebral characters",
        captainNotes: "#{beneficial}",
        special: "Reduces crew's current HP by 95%, deals 50x character's ATK in typeless damage to all enemies that will ignore damage negating abilities and barriers, boosts the Color Affinity of Cerebral characters by 1.75x for 2 turns",
        specialNotes: "#{ignoreBarrier}",
        specialName: "Explosive Reply",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK of Cerebral characters by 35",
            "level2": "Makes [PSY] orbs \"beneficial\" for Cerebral characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK of Cerebral characters by 35" },
            { "description": "Boosts base RCV by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 75" },
            { "description": "Boosts base HP by 100" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY] orbs \"beneficial\" for Cerebral characters" },
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
    1946: {//Vander Decken
        captain: "Boosts ATK of all characters by 1.75x.",
        special: "Locks orbs for 1 turn, amplifies the effect of orbs by 1.5x for 1 turn and deals several times character's ATK in Typeless damage to one enemy",
        specialNotes: "#{specialProportional : higher : 85 * ( (remaining HP) / (total HP) )}",
        specialName: "Shooting at the Heart",
    },
    1947: {//Vander Decken
        captain: "Boosts ATK of all characters by 2x. Recovers 2x character's RCV in HP at the end of each turn.",
        special: "Locks orbs for 1 turn, amplifies the effect of orbs by 1.5x for 1 turn and deals several times character's ATK in Typeless damage to one enemy",
        specialNotes: "#{specialProportional : higher : 85 * ( (remaining HP) / (total HP) )}",
        specialName: "Shooting at the Heart",
    },
    1948: {//Wadatsumi
        captain: "Boosts ATK of Powerhouse characters by 2x",
        special: "Increases damage received by 2x for 2 turns and reduces Special Cooldown of Fighter and Powerhouse characters by 2 turns",
        specialName: "Expanding Superpower",
    },
    1949: {//Wadatsumi
        captain: "Boosts ATK of Powerhouse characters by 2.25x, boosts HP of Fighter characters by 1.5x",
        special: "Increases damage received by 2x for 2 turns and reduces Special Cooldown of Fighter and Powerhouse characters by 2 turns",
        specialName: "Expanding Superpower",
    },
    1950:{//Robin
        captain: "Boosts ATK of Cerebral characters by 3.25x and their RCV by 1.5x, makes [RCV] orbs \"beneficial\" to Cerebral characters and reduce damage received by 20%",
        captainNotes: "#{beneficial}",
        special: "Reduces damage received by 100% for 1 turn. If your Captain is a Cerebral character, changes adjacent orbs into [RCV] orbs",
        specialName: "Moth Orchid",
    },
    1951:{//Robin
        captain: "Boosts ATK of Cerebral characters by 3.25x and their RCV by 1.5x, makes [RCV] orbs \"beneficial\" to Cerebral characters and reduce damage received by 20%",
        captainNotes: "#{beneficial}",
        special: "Reduces damage received by 100% for 1 turn. If your Captain is a Cerebral character, changes adjacent orbs into [RCV] orbs",
        specialName: "Moth Orchid",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK and HP of Cerebral characters by 50",
            "level2": "Makes [PSY], [RCV] and [TND] orbs \"beneficial\" for Cerebral characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK and HP of Cerebral characters by 50" },
            { "description": "Boosts base HP by 25" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 45" },
            { "description": "Acquire Potential 2: Critical Hit" },
            { "description": "Boosts base HP by 45" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 35" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 65" },
            { "description": "Acquire Sailor Ability 2: Makes [PSY], [RCV] and [TND] orbs \"beneficial\" for Cerebral characters" },
            { "description": "Boosts base HP by 65" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 3: Enrage" },
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
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 30% chance to deal 3% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 40% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 50% chance to deal 7% of this character's attack in extra damage"
                ]
            },
            {
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 150",
                    "Level 2: Boosts base ATK by 200",
                    "Level 3: Boosts base ATK by 250",
                    "Level 4: Boosts base ATK by 300",
                    "Level 5: Boosts base ATK by 400"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1952: {//Koala
        captain: "Boosts ATK of [INT] characters by 2.5x",
        special: "Reduces Bind and Despair duration by 3 turns and changes own orb into [RCV]. If your Captain is a Cerebral character, adds .7x to Chain multiplier for 1 turn and changes bottom row orbs into matching orbs",
        specialName: "Vigorous Straight Fist",
        sailor: "If this character has a [RCV] orb and you hit a Perfect with her, keep her [RCV] orb for the next turn",
    },
    1953: {//Koala
        captain: "Boosts ATK of [INT] characters by 2.75x",
        special: "Reduces Bind and Despair duration by 3 turns and changes own orb into [RCV]. If your Captain is a Cerebral character, adds .7x to Chain multiplier for 1 turn and changes bottom row orbs into matching orbs",
        specialName: "Vigorous Straight Fist",
        sailor: {
            "base": "If this character has a [RCV] orb and you hit a Perfect with her, keep her [RCV] orb for the next turn",
            "level1": "Boosts base ATK, HP and RCV of Fighter and Cerebral characters by 35",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [PSY] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Fighter and Cerebral characters by 35" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
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
                    "Level 1: Reduce Special Cooldown by 1 turn at the start of the fight",
                    "Level 2: Reduce Special Cooldown by 3 turn at the start of the fight",
                    "Level 3: Reduce Special Cooldown by 6 turn at the start of the fight",
                    "Level 4: Reduce Special Cooldown by 9 turn at the start of the fight",
                    "Level 5: Reduce Special Cooldown by 12 turn at the start of the fight"
                ]
            },
        ]
    },
    1954: {//Nami
        captain: "Boosts ATK of Cerebral Characters by 2x",
        special: "Cuts the current HP of all enemies by 10% and changes own orb into [RCV]. Boosts ATK of Cerebral characters by 1.75x for 1 turn. If during that turn you score 5 Perfect hits, boosts ATK of Cerebral characters by 2.25x in the following turn.",
        specialName: "Thunder Trap",
        sailor: "If this character has a [RCV] orb and you hit a Perfect with her, keep her [RCV] orb for the next turn",
    },
    1955: {//Nami
        captain: "Boosts ATK of Cerebral Characters by 3x if they have a matching orb, by 2x otherwise",
        special: "Cuts the current HP of all enemies by 10% and changes own orb into [RCV]. Boosts ATK of Cerebral characters by 1.75x for 1 turn. If during that turn you score 5 Perfect hits, boosts ATK of Cerebral characters by 2.25x in the following turn.",
        specialName: "Thunder Trap",
        sailor: {
            "base": "If this character has a [RCV] orb and you hit a Perfect with her, keep her [RCV] orb for the next turn",
            "level1": "Makes [QCK] orbs \"beneficial\" for Cerebral characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability 1: Makes [QCK] orbs \"beneficial\" for Cerebral characters" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
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
    1956: {//Carrot
        captain: "Boosts ATK of [STR] characters by 2x and their RCV by 1.2x",
        special: "Reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 3 turns and locks the chain multiplier at 2.75x for 1 turn",
        specialName: "Hopping Crash",
        sailor: "Makes [RCV] orbs \"beneficial\" for all characters",
        sailorNotes: "#{beneficial}",
    },
    1957: {//Carrot
        captain: "Boosts ATK of [STR] characters by 2.5x and their RCV by 1.25x",
        special: "Reduces Chain Multiplier Limit and Chain Coefficient Reduction duration by 3 turns and locks the chain multiplier at 2.75x for 1 turn",
        specialName: "Hopping Crash",
        sailor: {
            "base": "Makes [RCV] orbs \"beneficial\" for all characters",
            "level1": "Adds 2.5x character's ATK as Additional Typeless Damage",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: [DEX] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 1: Adds 2.5x character's ATK as Additional Typeless Damage" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
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
                    "Level 2: Reduces No Healing duration by 2 turns",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
                ]
            },
        ],
    },
    1958: {//Shirahoshi
        captain: "Reduce damage received by 15%.",
        special: "Reduces Paralysis and Silence  and ATK DOWN duration by 5 turns, recovers 7,000 HP at the end of the turn for 3 turns and changes orbs in the top row into Matching orbs",
        specialName: "An Important Confession from the Mermaid Princess",
        sailor: "Completely resists Silence on this character",
        sailorNotes: "#{silence}",
    },
    1959: {//Shirahoshi
        captain: "Boosts ATK of all characters by 2.25x and reduce damage received by 15%.",
        special: "Reduces Paralysis and Silence  and ATK DOWN duration by 5 turns, recovers 7,000 HP at the end of the turn for 3 turns and changes orbs in the top row into Matching orbs",
        specialName: "An Important Confession from the Mermaid Princess",
        sailor: {
            "base": "Completely resists Silence on this character",
            "level1": "Changes all orbs into [RCV] orbs at the start of the fight",
        },
        sailorNotes: "#{silence}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Potential 1: [QCK] Damage Reduction" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire Sailor Ability 1: Changes all orbs into [RCV] orbs at the start of the fight" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 80" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Acquire Potential 2: Enrage" },
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
    1960: {//Sanji
        captain: "Boosts ATK of [PSY] and Fighter characters by 2x",
        special: "Changes [RCV], [TND] and [BOMB] orbs into Matching orbs, reduces Special Cooldown of Powerhouse and Fighter specials by 1 turn and delays all enemies by 1 turn",
        specialName: "A Broad Smile of Life and Death",
        sailor: "Restores his own special by 3 turns when it is rewinded",
        sailorNotes: "#{rewind : 3}",
    },
    1961: {//Sanji
        captain: "Boosts ATK of [PSY] and Fighter characters by 2.25x and their HP by 1.2x. If you use \"Tears of Attraction\" this turn, boosts their ATK by 2.925x instead.",
        captainNotes: "This effect is boosted if you use Charlotte Pudding's [1962/1963] special in the same turn",
        special: "Changes [RCV], [TND] and [BOMB] orbs into Matching orbs, reduces Special Cooldown of Powerhouse and Fighter specials by 1 turn and delays all enemies by 1 turn",
        specialName: "A Broad Smile of Life and Death",
        sailor: "Restores his own special by 3 turns when it is rewinded",
        sailorNotes: "#{rewind : 3}",
    },
    1962: {//Pudding
        captain: "Boosts ATK of [INT] and Fighter characters by 2x",
        captainNotes: "This effect is boosted if you use Sanji's [1960/1961] special in the same turn",
        special: "Changes [G], [BLOCK] and Badly Matching orbs into Matching orbs, reduces Bind and Silence duration by 3 turns and locks the chain multiplier at 2.5x for 1 turn",
        specialName: "Tears of Attraction",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    1963: {//Pudding
        captain: "Boosts ATK of [INT] and Fighter characters by 2.25x and their HP by 1.2x. If you use \"A Broad Smile of Life and Death\" this turn, boosts their ATK by 2.925x instead.",
        captainNotes: "This effect is boosted if you use Sanji's [1960/1961] special in the same turn",
        special: "Changes [G], [BLOCK] and Badly Matching orbs into Matching orbs, reduces Bind and Silence duration by 3 turns and locks the chain multiplier at 2.5x for 1 turn",
        specialName: "Tears of Attraction",
        specialNotes: "#{silence}",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    1964: {//Oars
        captain: "Boosts ATK of Powerhouse characters by 2.25x if HP is above ??% at the start of the turn",
        special: "Deals ??x character's ATK in Typeless damage to all enemies, delays all enemies for 1 turn and changes adjacent orbs into [RCV] orbs",
        specialName: "Gomu Gomu no Butt Stomp",
    },
    1965: {//Oars
        captain: "Boosts ATK of Powerhouse characters by 2.75x if HP is above 70% at the start of the turn",
        special: "Deals ??x character's ATK in Typeless damage to all enemies, delays all enemies for 1 turn and changes adjacent orbs into [RCV] orbs",
        specialName: "Gomu Gomu no Butt Stomp",
    },
    1966: {//Hogback
        captain: "Boosts ATK of Cerebral characters by 2.25x and boosts chances of getting [RCV] orbs",
        special: "Boosts ATK against delayed enemies by 1.5x for 1 turn",
        specialName: "Affirmative Miracle",
    },
    1967: {//Boa Hancock
        captain: "Boosts amount of Beli received by 2x",
        captainNotes: "Beli boost does not take effect if she becomes your captain in the middle of the adventure.",
        special: "Changes [BLOCK], [STR], [DEX], [QCK], [INT] and [PSY] orbs on Shooter and Cerebral characters into Matching orbs. If you are on a Treasure Map, amplifies the effects of orbs for Cerebral and Shooter characters depending on your Treasure Map Level for 1 turn",
        specialName: "An Important Confession from the Snake Princess",
        specialNotes: "Level 1-10: 1.75x orb boost<br\>Level 11-20: 2x orb boost<br\>Level 21+: 2.25x orb boost",
    },
    1968: {//Boa Hancock
        captain: "Boosts amount of Beli received by 3x",
        captainNotes: "Beli boost does not take effect if she becomes your captain in the middle of the adventure.",
        special: "Changes [BLOCK], [STR], [DEX], [QCK], [INT] and [PSY] orbs on Shooter and Cerebral characters into Matching orbs. If you are on a Treasure Map, amplifies the effects of orbs for Cerebral and Shooter characters depending on your Treasure Map Level for 1 turn",
        specialName: "An Important Confession from the Snake Princess",
        specialNotes: "Level 1-10: 1.75x orb boost<br\>Level 11-20: 2x orb boost<br\>Level 21+: 2.25x orb boost",
    },
    1969: {//Miss Valentine
        captain: "Boosts HP of [DEX] characters by 1.5x and their RCV by 1.2x.",
        special: "Reduces Paralysis and Despair duration by 3 turns. Cuts the current HP of one enemy by 10%",
        specialName: "10,000 Kilo Guillotine - Cake Slice",
    },
    1970: {//Miss Valentine
        captain: "Boosts HP of [DEX] characters by 2x and their RCV by 1.5x.",
        special: "Reduces Paralysis and Despair duration by 3 turns. Cuts the current HP of one enemy by 10%",
        specialName: "10,000 Kilo Guillotine - Cake Slice",
    },
    1971: {//Sabo
        captain: "Boosts ATK of Cerebral characters by 1.3x and their HP and RCV by 1.05x and boosts chain by 1.1x if HP is above 70% or below 30% at the start of the turn",
        special: "If your Captain is a Cerebral character, changes [STR], [DEX], [QCK], [INT] and [PSY] orbs on Cerebral characters into Matching orbs, reduces the defense of all enemies by 100% and boosts ATK against enemies with reduced defense by 1.75x for 1 turn",
        specialName: "Blissful Selection",
    },
    1972: {//Sabo
        captain: {
            "base": "Boosts ATK of Cerebral characters by 1.5x and their HP and RCV by 1.05x and boosts chain by 1.2x if HP is above 70% or below 30% at the start of the turn",
            "level1": "Not Translated",
            "level2": "Not Translated",
            "level3": "Not Translated",
            "level4": "Not Translated",
            "level5": "Not Translated",
            "level6": "Boosts ATK of Cerebral characters by 2.25x and their HP and RCV by 1.2x and boosts chain by 1.5x if HP is above 70% or below 30% at the start of the turn",
        },
        special: "If your Captain is a Cerebral character, changes [STR], [DEX], [QCK], [INT] and [PSY] orbs on Cerebral characters into Matching orbs, reduces the defense of all enemies by 100% and boosts ATK against enemies with reduced defense by 1.75x for 1 turn",
        specialName: "Blissful Selection",
        sailor: {
            "base": "None",
            "level1": "Boosts base ATK, HP and RCV of Cerebral characters by 30",
            "level2": "Makes [DEX] orbs \"beneficial\" for Cerebral characters unit",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Boosts base RCV by 5" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Sailor Ability 1: Boosts base ATK, HP and RCV of Cerebral characters by 30" },
            { "description": "Boosts base ATK by 15" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base RCV by 10" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Reduce base Special Cooldown by 2 turns" },
            { "description": "Boosts base ATK by 25" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 3 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Reduce base Special Cooldown by 4 turns" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability 2: Makes [DEX] orbs \"beneficial\" for Cerebral characters unit" },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 50" },
            { "description": "Boosts base RCV by 50" },
            { "description": "Reduce base Special Cooldown by 5 turns" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Boosts base ATK by 50" },
            { "description": "Boosts base HP by 60" },
            { "description": "Acquire new Captain Ability: " },
            { "description": "Acquire Potential 2: Enrage" },
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
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 100",
                    "Level 2: Boosts base ATK by 150",
                    "Level 3: Boosts base ATK by 200",
                    "Level 4: Boosts base ATK by 250",
                    "Level 5: Boosts base ATK by 300"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1973: {//Hawkins
        captain: "Boosts ATK of Cerebral characters by 2.5x and makes [STR] orbs \"beneficial\" to Cerebral characters",
        captainNotes: "#{beneficial}",
        special: [
            {
                "description": "Cuts the current HP of one enemy by 10% and changes [TND], [EMPTY] and Badly Matching orbs into Matching orbs and if your Captain is a Cerebral character, reduces Paralysis duration by 2 turns",
                "cooldown": [ 14, 9 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 15% and changes [TND], [EMPTY] and Badly Matching orbs into Matching orbs and if your Captain is a Cerebral character, reduces Paralysis duration by 5 turns",
                "cooldown": [ 17, 12 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 20% and changes [TND], [EMPTY] and Badly Matching orbs into Matching orbs and if your Captain is a Cerebral character, reduces Paralysis duration completely",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialName: "Raging Strike",
        specialNotes: "#{stages}",
        sailor: "Boosts base ATK of Cerebral characters by 75",
    },
    1974: {//Hawkins
        captain: "Boosts ATK of Cerebral characters by 3.25x if they have a matching orb, by 2.5x otherwise and makes [STR] orbs \"beneficial\" to Cerebral characters",
        captainNotes: "#{beneficial}",
        special: [
            {
                "description": "Cuts the current HP of one enemy by 10% and changes [TND], [EMPTY] and Badly Matching orbs into Matching orbs and if your Captain is a Cerebral character, reduces Paralysis duration by 2 turns",
                "cooldown": [ 14, 9 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 15% and changes [TND], [EMPTY] and Badly Matching orbs into Matching orbs and if your Captain is a Cerebral character, reduces Paralysis duration by 5 turns",
                "cooldown": [ 17, 12 ],
            },
            {
                "description": "Cuts the current HP of one enemy by 20% and changes [TND], [EMPTY] and Badly Matching orbs into Matching orbs and if your Captain is a Cerebral character, reduces Paralysis duration completely",
                "cooldown": [ 20, 15 ],
            },
        ],
        specialName: "Raging Strike",
        specialNotes: "#{stages}",
        sailor: {
            "base": "Boosts base ATK of Cerebral characters by 75",
            "level1": "Adds 2x character's ATK as Additional Typeless Damage",
        },
        limit: [
            { "description": "Boosts base RCV by 10" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire Sailor Ability: Adds 2x character's ATK as Additional Typeless Damage" },
            { "description": "Boosts base HP by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Potential 2: Enrage" },
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
                "Name": "Enrage",
                "description": [ 
                    "Level 1: Boosts base ATK by 20",
                    "Level 2: Boosts base ATK by 40",
                    "Level 3: Boosts base ATK by 60",
                    "Level 4: Boosts base ATK by 80",
                    "Level 5: Boosts base ATK by 120"
                ]
            },
        ],
        potentialNotes: "#{enrage}"
    },
    1975: {//X Drake
        captain: "Boosts ATK of all characters by 2x if HP is below 30% at the start of the turn",
        special: "Deals 50x ATK in [QCK] damage to one enemy, changes own orb into [QCK] and locks all orbs for 1 turn. If HP above 70% then changes [RCV], [TND], [EMPTY], [BOMB] and [BLOCK] orbs into matching orbs and if HP below 30% then changes adjacent orbs into matching orbs",
        specialName: "Double Edge of Revolt [Neo]",
        sailor: "When HP is below 30% at the start of the turn, boosts base ATK of all characters by 40",
    },
    1976: {//X Drake
        captain: "Boosts ATK of all characters by 2.5x if HP is below 30% at the start of the turn",
        special: "Deals 50x ATK in [QCK] damage to one enemy, changes own orb into [QCK] and locks all orbs for 1 turn. If HP above 70% then changes [RCV], [TND], [EMPTY], [BOMB] and [BLOCK] orbs into matching orbs and if HP below 30% then changes adjacent orbs into matching orbs",
        specialName: "Double Edge of Revolt [Neo]",
        sailor: "When HP is below 30% at the start of the turn, boosts base ATK of all characters by 40",
    },
    1977: {//Rayleigh
        captain: "Boosts chances of getting Matching orbs, boosts ATK of Free Spirit and Slasher characters by 2x",
        special: "Cuts the current HP of one enemy by 20%, reduces Bind and Silence duration by 3 turns, boosts chances of getting [DEX], [PSY] and [INT] orbs for 3 turns and makes [DEX], [PSY] and [INT] orbs \"beneficial\" to Free Spirit characters for 3 turns",
        specialNotes: "#{beneficial}",
        specialName: "Unabated Surge",
        sailor: "Reduces Silence duration on this character by 3 turns",
        sailorNotes: "#{silence}",
    },
    1978: {//Rayleigh
        captain: "Boosts chances of getting Matching orbs, boosts ATK of Free Spirit and Slasher characters by 2.5x",
        special: "Cuts the current HP of one enemy by 20%, reduces Bind and Silence duration by 3 turns, boosts chances of getting [DEX], [PSY] and [INT] orbs for 3 turns and makes [DEX], [PSY] and [INT] orbs \"beneficial\" to Free Spirit characters for 3 turns",
        specialNotes: "#{beneficial}",
        specialName: "Unabated Surge",
        sailor: {
            "base": "Reduces Silence duration on this character by 3 turns",
            "level1": "Boosts base ATK of Free Spirit characters by 35",
        },
        sailorNotes: "#{silence}",
        limit: [
            { "description": "Boosts base ATK by 10" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 1: Slot Bind Self-reduction" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Sailor Ability: Boosts base ATK of Free Spirit characters by 35" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 30" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Acquire Potential 2: [QCK] Damage Reduction" },
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
                "Name": "[QCK] Damage Reduction",
                "description": [ 
                    "Level 1: Reduce damage taken from [QCK] characters by 1%",
                    "Level 2: Reduce damage taken from [QCK] characters by 2%",
                    "Level 3: Reduce damage taken from [QCK] characters by 3%",
                    "Level 4: Reduce damage taken from [QCK] characters by 4%",
                    "Level 5: Reduce damage taken from [QCK] characters by 5%"
                ]
            },
        ],
    },
    1979: {//Capone
        captain: "Boosts ATK of Shooter characters by 1.75x",
        special: "Reduces Special Cooldown of Shooter specials by 1 turn and changes orbs in the top row into Matching orbs",
        specialName: "Angry Threatening Command",
    },
    1980: {//Capone
        captain: "Boosts HP of Shooter characters by 1.2x and boosts ATK by 2.5x if they have a matching orb, by 2x otherwise",
        special: "Reduces Special Cooldown of Shooter specials by 1 turn and changes orbs in the top row into Matching orbs",
        specialName: "Angry Threatening Command",
    },
    1981: {//Bonney
        captain: "Boosts ATK of Fighter characters by 1.75x",
        special: "Changes [RCV] orbs into matching orbs and recovers 15x character's RCV in HP at the end of the turn for 2 turns",
        specialName: "Glutonous Meal",
    },
    1982: {//Bonney
        captain: "Boosts RCV of Fighter characters by 1.2x and boosts ATK of Fighter characters by 2.25x if HP is above ??% at the start of the turn, by 2x otherwise",
        special: "Changes [RCV] orbs into matching orbs and recovers 15x character's RCV in HP at the end of the turn for 2 turns",
        specialName: "Glutonous Meal",
    },
    1983: {//Smoker&Tashigi
        captain: {
            "character1": "Boosts ATK of [INT] and [PSY] characters by 2.5x, reduce damage received by 7% and makes [INT] and [PSY] orbs \"beneficial\" to [INT] and [PSY] characters",
            "character2": "Boosts ATK of [INT] and [PSY] characters by 2.5x and recovers 300 HP at end of each turn",
            "combined": "Boosts ATK of [INT] and [PSY] characters by 2.75x, reduce damage received by 7%, recovers 1,000 HP at end of each turn and makes [TND], [INT] and [PSY] orbs \"beneficial\" to [INT] and [PSY] characters"
        },
        captainNotes: "#{beneficial}",
        special: "Deals 5,000 fixed damage to one enemy, changes own orb into a Matching orb, reduces damage received by 50% for 1 turn, boosts ATK of [PSY] and [INT] characters by 1.5x for 1 turn and becomes Smoker & Tashigi for 2 turns",
        specialNotes: "Change Action: When Change is activated, Recovers 2x character's RCV",
        specialName: "White Slash",
        sailor: {
            "character1": "Boosts base ATK of [INT] and [PSY] characters by 50",
            "character2": "Boosts base RCV of [INT] and [PSY] characters by 30",
            "combined": "Boosts base ATK, HP and RCV of [INT] and [PSY] characters by 75"
        },
    },
    1984: {//Luffy&Ace
        captain: {
            "character1": "Boosts ATK of Free Spirit characters by 3x and their HP by 1.2x and reduce damage received by 15%",
            "character2": "Boosts HP of Free Spirit characters by 1.2x and boosts ATK by 3.5x if they have a matching orb, by 2.25x otherwise",
            "combined": "Boosts HP of Free Spirit characters by 1.2x and boosts ATK by 4.25x if they have a matching orb, by 3x otherwise and reduce damage received by 20%"
        },
        special: "Deals 75x character's ATK in typeless damage to all enemies, changes [STR], [DEX], [QCK], [INT], and [PSY] orbs on Free Spirit characters into Matching orbs, amplifies the effect of orbs by 2x for 1 turn and becomes Luffy & Ace for 3 turns",
        specialNotes: "Change Action: When Change is activated, this character removes all Despair, Paralysis, and Slot Bind on themselves and changes their own orb, including [BLOCK] orbs, into a Matching orb",
        specialName: "Brotherly Bond",
        sailor: {
            "character1": "Makes [QCK] orbs \"beneficial\" for Free Spirit characters",
            "character2": "Makes [STR] orbs \"beneficial\" for Free Spirit characters",
            "combined": "None"
        },
        sailorNotes: "#{beneficial}",
    },
    1985: {//Luffy&Ace
        captain: {
            "character1": "Boosts ATK of Free Spirit characters by 3x and their HP by 1.2x and reduce damage received by 15%",
            "character2": "Boosts HP of Free Spirit characters by 1.2x and boosts ATK by 3.5x if they have a matching orb, by 2.25x otherwise",
            "combined": "Boosts HP of Free Spirit characters by 1.2x and boosts ATK by 4.25x if they have a matching orb, by 3x otherwise and reduce damage received by 20%"
        },
        special: "Deals 75x character's ATK in typeless damage to all enemies, changes [STR], [DEX], [QCK], [INT], and [PSY] orbs on Free Spirit characters into Matching orbs, amplifies the effect of orbs by 2x for 1 turn and becomes Luffy & Ace for 3 turns",
        specialNotes: "Change Action: When Change is activated, this character removes all Despair, Paralysis, and Slot Bind on themselves and changes their own orb, including [BLOCK] orbs, into a Matching orb",
        specialName: "Brotherly Bond",
        sailor: {
            "character1": "Makes [QCK] orbs \"beneficial\" for Free Spirit characters",
            "character2": "Makes [STR] orbs \"beneficial\" for Free Spirit characters",
            "combined": "None"
        },
        sailorNotes: "#{beneficial}",
        limit: "This character has a Limit Break Tree"
    },
    1986: {//Marco
        captain: "Boosts ATK of Fighter characters by 2.25x and their RCV by 1.2x. Recovers 2x character's RCV in HP at the end of each turn.",
        special: [
            {
                "description": "Reduces Bind and Chain Coefficient Reduction and ATK DOWN duration by 3 turns, reduces damage received by 50% for 1 turn. If your crew has 3 or more [STR] characters, adds .5x to Chain multiplier for 1 turn",
                "cooldown": [ 16, 10 ],
            },
            {
                "description": "Reduces Bind and Chain Coefficient Reduction and ATK DOWN duration by 5 turns, reduces damage received by 90% for 1 turn. If your crew has 3 or more [STR] characters, adds .75x to Chain multiplier for 1 turn",
                "cooldown": [ 20, 14 ],
            },
        ],
        specialName: "Establishing an Oath of Immortality",
        sailor: "Boosts amount healed from [RCV] orbs by 150 each",
    },
    1987: {//Marco
        captain: "Boosts ATK of Fighter characters by 2.5x and their RCV by 1.3x. Recovers 3x character's RCV in HP at the end of each turn.",
        special: [
            {
                "description": "Reduces Bind and Chain Coefficient Reduction and ATK DOWN duration by 3 turns, reduces damage received by 50% for 1 turn. If your crew has 3 or more [STR] characters, adds .5x to Chain multiplier for 1 turn",
                "cooldown": [ 16, 10 ],
            },
            {
                "description": "Reduces Bind and Chain Coefficient Reduction and ATK DOWN duration by 5 turns, reduces damage received by 90% for 1 turn. If your crew has 3 or more [STR] characters, adds .75x to Chain multiplier for 1 turn",
                "cooldown": [ 20, 14 ],
            },
        ],
        specialName: "Establishing an Oath of Immortality",
        sailor: {
            "base": "Boosts amount healed from [RCV] orbs by 150 each",
            "level1": "Makes [TND] and [RCV] orbs \"beneficial\" for Free Spirit characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 30" },
            { "description": "Acquire Potential 1: Reduce No Healing duration" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability: Makes [TND] and [RCV] orbs \"beneficial\" for Free Spirit characters" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Boosts base HP by 70" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Acquire Potential 2: Pinch Healing" },
        ],
        potential: [
            {
                "Name": "Reduce No Healing duration",
                "description": [ 
                    "Level 1: Reduces No Healing duration by 1 turn",
                    "Level 2: Reduces No Healing duration by 2 turn",
                    "Level 3: Reduces No Healing duration by 3 turns",
                    "Level 4: Reduces No Healing duration by 5 turns",
                    "Level 5: Reduces No Healing duration by 7 turns"
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
        ],
    },
    1988: {//Oars
        captain: "Boosts ATK of Slasher characters by 2.25x and their RCV by 1.2x",
        special: "Cuts the current HP of one enemy by 10% and reduces Paralysis and Silence duration by 3 turns. If your captain is a Slasher Character, boosts ATK against delayed enemies by 1.75x for 2 turns",
        specialName: "Unfaltering Trump Card",
        sailor: "Reduces Paralysis duration by 1 turn",
    },
    1989: {//Oars
        captain: "Boosts ATK of Slasher characters by 2.5x and their RCV by 1.5x",
        special: "Cuts the current HP of one enemy by 10% and reduces Paralysis and Silence duration by 3 turns. If your captain is a Slasher Character, boosts ATK against delayed enemies by 1.75x for 2 turns",
        specialName: "Unfaltering Trump Card",
        sailor: {
            "base": "Reduces Paralysis duration by 1 turn",
            "level1": "Boosts base ATK of Slasher and Powerhouse characters by 75",
        },
        limit: [
            { "description": "Boosts base HP by 10" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [INT] Damage Reduction" },
            { "description": "Boosts base HP by 40" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Acquire Sailor Ability: Boosts base ATK of Slasher and Powerhouse characters by 75" },
            { "description": "Boosts base HP by 50" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 70" },
            { "description": "Boosts base ATK by 60" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
            { "description": "Boosts base ATK by 60" },
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
                    "Level 1: If you hit a perfect with this character, there is a 10% chance to deal 3% of this character's attack in extra damage",
                    "Level 2: If you hit a perfect with this character, there is a 10% chance to deal 5% of this character's attack in extra damage",
                    "Level 3: If you hit a perfect with this character, there is a 15% chance to deal 5% of this character's attack in extra damage",
                    "Level 4: If you hit a perfect with this character, there is a 20% chance to deal 5% of this character's attack in extra damage",
                    "Level 5: If you hit a perfect with this character, there is a 40% chance to deal 7% of this character's attack in extra damage"
                ]
            },
        ],
    },
    1990: {//Garp
        captain: "Boosts ATK of Free Spirit characters by 2.5x until the first hit other than Perfect",
        special: "Delays all enemies for 2 turns. If your Captain is a [STR] or [QCK] character, adds 55x character's ATK as Additional Typeless Damage for 1 turn",
        specialName: "An Outcry of Bitterness",
        sailor: "Makes [STR] orbs \"beneficial\" for Free Spirit characters",
        sailorNotes: "#{beneficial}",
    },
    1991: {//Garp
        captain: "Boosts ATK of Free Spirit characters by 2.75x until the first hit other than Perfect",
        special: "Delays all enemies for 2 turns. If your Captain is a [STR] or [QCK] character, adds 55x character's ATK as Additional Typeless Damage for 1 turn",
        specialName: "An Outcry of Bitterness",
        sailor: {
            "base": "Makes [STR] orbs \"beneficial\" for Free Spirit characters",
            "level1": "Boosts base ATK of Free Spirit characters by 75",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: Critical Hit" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base ATK by 30" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability: Boosts base ATK of Free Spirit characters by 75" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
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
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ],
    },
    1992: {//Coby
        captain: "Boosts ATK of Free Spirit and Fighter characters by 2.25x and reduce damage received by 10%",
        special: [
            {
                "description": "Deals 30x character's ATK in QCK damage to one enemy and randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK], [PSY] or [INT] orbs. If your crew has 3 or more QCK characters, boosts ATK of Free Spirit characters by 1.75x for 1 turn",
                "cooldown": [ 16, 10 ],
            },
            {
                "description": "Deals 50x character's ATK in QCK damage to one enemy and randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK], [PSY] or [INT] orbs. If your crew has 3 or more QCK characters, boosts ATK of Free Spirit characters by 2x for 1 turn",
                "cooldown": [ 19, 13 ],
            },
        ],
        specialName: "Determined Counterattack",
        sailor: "Boosts base ATK of Free Spirit characters by 50",
    },
    1993: {//Coby
        captain: "Boosts ATK of Free Spirit and Fighter characters by 2.5x and reduce damage received by 15%",
        special: [
            {
                "description": "Deals 30x character's ATK in QCK damage to one enemy and randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK], [PSY] or [INT] orbs. If your crew has 3 or more QCK characters, boosts ATK of Free Spirit characters by 1.75x for 1 turn",
                "cooldown": [ 16, 10 ],
            },
            {
                "description": "Deals 50x character's ATK in QCK damage to one enemy and randomly changes all orbs, including [BLOCK] orbs, into either [STR], [DEX], [QCK], [PSY] or [INT] orbs. If your crew has 3 or more QCK characters, boosts ATK of Free Spirit characters by 2x for 1 turn",
                "cooldown": [ 19, 13 ],
            },
        ],
        specialName: "Determined Counterattack",
        sailor: {
            "base": "Boosts base ATK of Free Spirit characters by 50",
            "level1": "Makes [QCK] orbs \"beneficial\" for Free Spirit characters",
        },
        sailorNotes: "#{beneficial}",
        limit: [
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 20" },
            { "description": "Boosts base HP by 40" },
            { "description": "Acquire Potential 1: [STR] Damage Reduction" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base RCV by 20" },
            { "description": "Boosts base ATK by 20" },
            { "description": "Boosts base HP by 60" },
            { "description": "Boosts base RCV by 30" },
            { "description": "Acquire 1 additional Socket slot" },
            { "description": "Boosts base HP by 80" },
            { "description": "Boosts base ATK by 40" },
            { "description": "Acquire Sailor Ability: Makes [QCK] orbs \"beneficial\" for Free Spirit characters" },
            { "description": "Reduce base Special Cooldown by 1 turn" },
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
                    "Level 1: If HP is below 10% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 2: If HP is below 15% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 3: If HP is below 20% at the start of the turn, heals for 1x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 4: If HP is below 30% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character",
                    "Level 5: If HP is below 50% at the start of the turn, heals for 1.5x this character's RCV at the end of the turn each time you hit a Perfect with this character"
                ]
            },
        ],
    },
    1994: {//FN Marco
        captain: "Boosts ATK of Fighter characters by 1.75x",
        special: "Changes adjacent orbs into [RCV] orbs, reduces Paralysis and Despair duration by 2 turns and reduces damage received by 40% for 1 turn",
        specialName: "Sharing Vigorous Inspiration",
    },
    1995: {//FN Marco
        captain: "Boosts ATK of Fighter characters by 2.25x and reduce damage received by 5%",
        special: "Changes adjacent orbs into [RCV] orbs, reduces Paralysis and Despair duration by 2 turns and reduces damage received by 40% for 1 turn",
        specialName: "Sharing Vigorous Inspiration",
    },
    1996: {//FN Vista
        captain: "Boosts ATK of Slasher characters by 1.75x",
        special: "Deals 15x character's ATK in [STR] damage to all enemies, randomizes own non-matching orb, including [BLOCK] orbs, and delays all enemies for 1 turn",
        specialName: "Fast Revolving Strike",
    },
    1997: {//FN Vista
        captain: "Reduces cooldown of Shooter specials by 2 turns at the start of the fight, boosts ATK of Slasher characters by 2.475x after scoring 3 Greats in a row, by 2.25x otherwise.",
        special: "Deals 15x character's ATK in [STR] damage to all enemies, randomizes own non-matching orb, including [BLOCK] orbs, and delays all enemies for 1 turn",
        specialName: "Fast Revolving Strike",
    },
    1998: {//Sanji
    },
    1999: {//Zoro
    },
    2000: {//TM Sanji & Zoro
        captain: {
            "character1": "Reduces cooldown of all specials by 2 turns at the start of the fight. Boosts ATK of [PSY] characters by 2.75x and boosts ATK of [DEX] characters by 2x",
            "character2": "Reduces cooldown of all specials by 2 turns at the start of the fight. Boosts ATK of [DEX] characters by 2.75x and boosts ATK of [PSY] characters by 2x",
            "combined": "Boosts ATK of [DEX] and [PSY] characters by 3.75x and makes [PSY] and [DEX] orbs \"beneficial\" to [PSY] and [DEX] characters"
        },  
        captainNotes: "#{beneficial}",
        special: "Deals 30x character's ATK in Typeless damage to one enemy that will ignore damage negating abilities and barriers, amplifies the effect of orbs on [PSY] and [DEX] characters by 2.25x for 1 turn and becomes Sanji & Zoro for 1 turn",
        specialNotes: "Change Action: When Change is activated, randomizes all non-matching orbs on [PSY] and [DEX] characters and adds .5x to Chain multiplier for 1 turn<br>#{ignoreBarrier}",
        specialName: "Armée de L'Air Power Shoot",
        sailor: {
            "character1": "Boosts base ATK of [PSY] characters by 30",
            "character2": "Boosts base ATK of [DEX] characters by 30",
            "combined": "Boosts base HP, ATK and RCV of [DEX] and [PSY] characters by 50",
            "level1": "Makes [TND] orbs \"beneficial\" for [DEX] and [PSY] characters",
        },
        sailorNotes: "#{beneficial}",
        limit: "This character has a limit break tree"
    },

};

module.exports.db4 = db4;
