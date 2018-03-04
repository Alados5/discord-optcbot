//Copied from the optc-db.github.io database files. All credit goes to them.

var db5 = {

    2001: {//6+ PSY Law
        captain: "Boosts Slasher and Free Spirit character's ATK by 2.5x, by 3.5x after 3 consecutive PERFECTs, by 4x after 5 consecutive PERFECTs. Recover 1,000 HP at the end of each turn",
        specialName: "Sterben",
        sailor: {
            "base": "None",
            "level1": "When HP is below 10% at the start of the turn, boosts base RCV of Slasher and Free Spirit characters by 300",
            "level2": "Makes [INT], [RCV] and [TND] orbs \"beneficial\" for this unit"
        },
        special: "Makes Damage and Health Cutting Specials of all characters bypass all defensive Buffs, deals 100x character's ATK in [PSY] damage to one enemy, reduces Special Cooldown of all characters by 1 turn",
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
    2002: {//Senor Pink
        captain: "Increases damage received by 1.2x. Reduces cooldown of all specials by 2 turns at the start of the fight and boosts ATK of all characters by 2.5x.",
        special: "Reduces Bind, Despair and Paralysis duration by 3 turns and deals several times character's ATK in Typeless damage to all enemies",
        specialNotes: "#{specialProportional : lower : ??? * ( 1 - (remaining HP) / (total HP) )}",
        specialName: "The Man Standing Tall",
    },
    2003: {//Doflamingo
        captain: "Not Translated",
        special: "Changes own orb into [STR], boosts own ATK by 2x for 1 turn and deals 30x character's ATK in Typeless damage to all enemies",
        specialName: "Bullet Thread",
    },
    2004: {//Doflamingo
        captain: "Boosts ATK of Slasher characters by 2.25x and their HP by 1.5x. If you use \"Bullet Thread\" THIS DOFLAMINGO boosts ATK of Slasher characters by 2.75x instead for 3 turns",
        captainNotes: "Using Doflamingo's special will change his own captain boost to 2.75x. If both Doflamingo's specials are used, the total ATK boost will be 7.5625x",
        special: "Changes own orb into [STR], boosts own ATK by 2x for 1 turn and deals 30x character's ATK in Typeless damage to all enemies",
        specialName: "Bullet Thread",
    },
    2005: {//Sugar
        captain: "Boosts ATK of [PSY] characters by 2.25x, boosts HP of Slasher characters by 1.2x and boosts RCV of Free Spirit characters by 1.2x",
        special: "Deals 40x character's ATK in [PSY] damage to all enemies, boosts chances of getting [PSY] orbs for 3 turns",
        specialName: "Little Black Bears",
    },
    2024: {//Doflamingo Raid v2
        captain: "Boosts ATK of Driven and Cerebral characters by 2.5x when HP is 50% or below, 1.5x otherwise",
        special: "Randomizes all non-matching orbs, including [BLOCK] slots and locks all orbs for 1 turn. If Captain is a Cerebral or Driven character, increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 2 turns",
        specialName: "Athlete",
    },
    2025: {//Doflamingo Raid v2
        captain: "Boosts ATK of Driven and Cerebral characters by 3x when HP is 50% or below, 1.5x otherwise",
        special: "Randomizes all non-matching orbs, including [BLOCK] slots and locks all orbs for 1 turn. If Captain is a Cerebral or Driven character, increases duration of any Class/Type boosting buffs and Orb Amplification buffs by 2 turns",
        specialName: "Athlete",
    },

};

module.exports.db5 = db5;
