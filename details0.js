var db0 = {
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
};

module.exports.db0 = db0;
