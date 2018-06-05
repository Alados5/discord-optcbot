//Copied from the optc-db.github.io database files. All credit goes to them.

var shipfx = {  
    0: { // 0
        name: 'Dinghy',
        thumb: 'ship_0001_c.png',
        description: 'Boosts HP by 1.3x, boosts captain\'s RCV by 120 units',
    },
    1: { // 1
        name: 'Merry Go',
        thumb: 'ship_0002_c.png',
        description: 'Boosts ATK by 1.5x, boosts captain\'s HP by 300 units',
    },
    2: { // 2
        name: 'Navy Ship',
        thumb: 'ship_0003_c.png',
        description: 'Boosts HP by 1.5x, boosts ATK of Shooter characters by 100 units',
    },
    3: { // 3
        name: 'Baratie',
        thumb: 'ship_0004_c.png',
        description: 'Boosts captain\'s HP by 2000 units',
    },
    4: { // 4
        name: 'Coffin Boat',
        thumb: 'ship_0005_c.png',
        description: 'Boosts ATK and HP of Slasher characters by 1.5x, reduces captain\'s RCV by 700 units',
    },
    5: { // 5
        name: 'Miss Love Duck',
        thumb: 'ship_0006_c.png',
        description: 'Reduces damage received by 10%, boosts ATK of Striker characters by 100 units',
    },
    6: { // 6
        name: 'Merry Go Flying',
        thumb: 'ship_0007_c.png',
        description: 'Boosts ATK by 1.2x, recovers 350 HP at the end of the turn',
    },
    7: { // 7
        name: 'Moby Dick',
        thumb: 'ship_0008_c1.png',
        description: 'Boosts ATK by 1.5x, boosts HP by 1.4x, reduces HP by 50% at the start of the fight',
    },
    8: { // 8
        name: 'Big Top',
        thumb: 'ship_0009_c1.png',
        description: 'Boosts ATK of characters with 20 cost or less by 1.5x, boosts HP of characters with 4 stars and below by 1.4x',
    },
    9: { // 9
        name: 'Bezan Black',
        thumb: 'ship_0010_c1.png',
        description: 'Reduces cooldown of all specials by 1 turn at the start of the fight, boosts ATK of QCK characters by 1.4x and their HP by 1.3x',
    },
    10: { // 10
        name: 'Aokiji\'s Bike',
        thumb: 'ship_0011_c1.png',
        description: 'Boosts ATK and HP of Striker characters by 1.5x, greatly reduces the appearance of RCV orbs',
    },
    11: { // 11
        name: 'Ace\'s Striker',
        thumb: 'ship_0012_c1.png',
        description: 'Boosts ATK of Shooter characters by 1.5x and their HP by 1.3x, reduces cooldown of all specials by 1 turn at the start of the fight',
    },
    12: { // 12
        name: 'Dreadnaught Sabre',
        thumb: 'ship_0014_c1.png',
        description: 'Boosts HP by 1.5x, deals 5,000 typeless damage at the end of the turn',
    },
    13: { // 13
        name: 'Thousand Sunny',
        thumb: 'ship_0013_c.png',
        description: 'Boosts ATK by 1.5x. Special: deals 50,000 typeless damage to all enemies (cooldown: 15 turns).',
    },
    14: { //14
        name: 'Kuja Pirate Ship',
        thumb: 'ship_0015_c1.png',
        description: 'Boosts ATK of Free Spirit characters by 1.5x and their HP by 1.35x, reduces the HP of everyone else by 99%. Special: heals the crew by 6,500HP (cooldown: 15 turns).',
    },
    15: { //15
        name: 'Ark Maxim',
        thumb: 'ship_0016_c1.png',
        description: 'Boosts ATK of QCK and PSY characters by 1.5x and their HP by 1.2x. Special: Deals 56560 fixed Damage to all enemies (cooldown: 17 Turns)',
    },
    16: { // 16
        name: 'Red Force',
        thumb: 'ship_0017_c1.png',
        description: 'Boosts ATK of Cerebral characters by 1.5x and their HP by 1.35x, Increased Orb Rate for Cerebral characters.',
    },
    17: { // 17
        name: '2nd Anniversary Thousand Sunny',
        thumb: 'ship_0018_c1.png',
        description: '__Boosted Ability:__ Boosts ATK by 1.5x. At the start of the adventure, all specials start at MAX charge. \n __Base Ability:__ Boosts ATK by 1.2x.',
    }, 
    18: { // 18
        name: 'Sun Pirates Ship',
        thumb: 'ship_0019_c.png',
        description: 'Boosts ATK and HP of Fighter characters depending on the number of Fighters on the team. Sharply reduces ATK and HP of non-Fighter units.',
    },
    19: { // 19
        name: "Doflamingo Ship",
        thumb: 'ship_0020_c.png',
        description: 'Boosts ATK of Driven Characters by 1.5x and their HP by 1.35x. Makes Perfects easier to Hit for Driven characters. Special: Adds 0.2 to Chain  (cooldown MAX: 15 Turns)',
    },
    20: { // 19.2
        name: "Doflamingo Ship - Special ACTIVATED",
        thumb: 'ship_0020_c.png',
        description: 'Boosts ATK of Driven Characters by 1.5x and their HP by 1.35x. Makes Perfects easier to Hit for Driven characters. ACTIVATED Special: Adds 0.2 to Chain  (cooldown MAX: 15 Turns)',
    },   
    21: { // 20
        name: 'The Rocket Man',
        thumb: 'ship_0021_c.png',
        description: 'Boosts ATK of Powerhouse characters by 1.55x, and heals at the end of every turn for a variable amount depending on the number of Powerhouse characters on the team. (At MAX, heals 900 per turn with 6 Powerhouse characters) Sharply reduces HP of non-Powerhouse units. Special: Deals 99,999 typeless damage to one unit.  (cooldown MAX: 17 Turns)',
    },
    22: { // 21
        name: 'Burning Moby Dick',
        thumb: 'ship_0022_c.png',
        description: '__Boosted Ability:__ Boosts ATK by 1.5x and HP by 1.4x, reduces HP by 7% at the end of the turn. Special: Cuts the current HP of each enemy by 20% (cooldown: 18 turns). \n __Base Ability:__ Boosts HP by 1.3x.',
    },
    23: { // 22
        name: 'Garp Ship',
        thumb: 'ship_0023_c.png',
        description: 'Boosts ATK of [STR] and [PSY] characters by 1.5x, and their HP by 1.25x',
    },
    24: { //23
        name: 'Polar Tang',
        thumb: 'ship_0024_c.png',
        description: 'Boosts ATK of Slashers and Free Spirit characters by 1.5x and their HP by 1.25x. Makes Perfects easier to Hit. Special: Heals for 10k when under 20% HP. (cooldown MAX: 18 turns)',
    },
    25: { // 24
        name: 'New Year\'s Big Top',
        thumb: 'ship_0025_c.png',
        description: '__Boosted Ability:__ Boosts ATK of all units by 1.5x. Boosts EXP gained by 1.5x and Beli gained by 1.5x. \n __Base Ability:__ Boosts ATK of characters with 20 cost or less by 1.2x',
    },
    26: { // 25
        name: 'Thousand Sunny: Coated',
        thumb: 'ship_0026_c.png',
        description: 'Boosts ATK by 1.5x. Special: reduces damage received by 50% for 1 turn (cooldown: 16 turns).',
    },
    27: { // 26
        name: 'Kizaru\'s Cannonball',
        thumb: 'ship_0027_c.png',
        description: 'Boosts ATK of Shooter characters by 1.55x and their HP by 1.2x, reduces cooldown of Shooter characters specials by 2 turns at the start of the fight. Special: Cuts the current HP of each enemy by 7% (cooldown: 15 turns).',
    },
    28: { // 27
        name: 'Going Luffy SENPAI!',
        thumb: 'ship_0028_c.png',
        description: 'Boosts ATK of Striker characters by 1.5x and their HP by 1.2x if there are 6 Striker characters in your crew. Reduces special cooldown of Striker characters by 1 at the start of the adventure.  Special: Reduces any damage received above 10,000 HP by 97% (cooldown: 17 turns).',
    },
    29: { //28
        name: "Thriller Bark",
        thumb: 'ship_0029_c.png',
        description: 'Boosts ATK of [DEX] and [INT] characters by 1.5x and their HP by 1.25x',
    },
    30: { //29
        name: "Karasumaru Ship",
        thumb: 'ship_0030_c.png',
        description: '__Boosted Ability:__ Boosts ATK and HP of Shooter Only characters by 2x and boosts the ATK of all other characters by 1.5x and their HP by 1.02x. Special: Delays all enemies for 2 turns (cooldown: 12 turns). \n __Base Ability:__ Boosts ATK and Shooter characters by 1.2x. ACTIVATED Special: Delays all enemies for 1 turn (cooldown: 16 turns).',
    },
    31: { //29.2
        name: "Karasumaru Ship - Special ACTIVATED",
        thumb: 'ship_0030_c.png',
        description: '__Boosted Ability:__ Boosts ATK and HP of Shooter Only characters by 2x and boosts the ATK of all other characters by 1.5x and their HP by 1.02x. Special: Delays all enemies for 2 turns (cooldown: 12 turns). \n __Base Ability:__ Boosts ATK and Shooter characters by 1.2x. ACTIVATED Special: Delays all enemies for 1 turn (cooldown: 16 turns).',
    },
    32: { //30
        name: "3rd Anniversary Thousand Sunny",
        thumb: 'ship_0032_c.png',
        description: '__Boosted Ability 1:__ Boosts ATK by 1.5x. At the start of the adventure, all specials start at MAX charge. \n __Boosted Ability 2:__ Boosts ATK by 1.5x. Boosts EXP gained by 3x. \n __Base Ability:__ Boosts ATK by 1.2x.',
    },
    33: { //31
        name: "Flying Dutchman",
        thumb: 'ship_0033_c.png',
        description: 'Boosts ATK by 1.5x. Boosts EXP gained by 1.5x. Special: Reduces the defense of all enemies by 25% for 1 turn (cooldown: 16 turns).',
    },
    34: { //31.2
        name: "Flying Dutchman - Special ACTIVATED",
        thumb: 'ship_0033_c.png',
        description: 'Boosts ATK by 1.5x. Boosts EXP gained by 1.5x. ACTIVATED Special: Reduces the defense of all enemies by 25% for 1 turn (cooldown: 16 turns).',
    },
    35: { //32
        name: "Marshall D. Teach Pirate Ship",
        thumb: 'ship_0034_c.png',
        description: 'Boosts HP by 1.25x and reduces special cooldown of all characters by 1 at the start of the adventure. Boosts ATK by 1.55x if you have a Striker, Shooter, Fighter, and Slasher character on your crew.',
    },
    36: { //33
        name: "Revolutionary Black Crow",
        thumb: 'ship_0035_c.png',
        description: 'Boosts HP by 1.2x and reduces special cooldown of all characters by 1 at the start of the adventure. Boosts ATK of [STR], [DEX] and [QCK] characters by 1.55x if you have a [STR], [DEX] and [QCK] character on your crew.',
    },
    37: { //34
        name: "Zunisha",
        thumb: 'ship_0036_c.png',
        description: 'Boost ATK of Powerhouse and Cerebral units by 1.55x and their HP by 1.25x, makes Perfects easier to hit, and makes TND and Meat orbs beneficial to Powerhouse and Cerebral units.',
    },
    38: { //35
        name: "Laboon",
        thumb: 'ship_0038_c.png',
        description: '__Boosted Ability:__ Boosts ATK of all units by 1.5x. At the start of the adventure, all specials start at MAX charge. \n __Default Ability:__ Boosts ATK of all units by 1.2x',
    },
    39: { //36
        name: "Sexy Foxy",
        thumb: 'ship_0037_c.png',
        description: 'Boosts ATK of all units by 1.5x. Boosts EXP gained by 1.2x and Beli gained by 2x.',
    },
    40: { //38
        name: "4th Anniversary Thousand Sunny",
        thumb: 'ship_0039_c.png',
        description: '__Boosted Ability 1:__ Boosts ATK of all units by 1.5x. Boosts EXP gained by 3x and Beli gained by 3x. \n __Boosted Ability 2:__ Boosts ATK of all units by 1.5x. At the start of the adventure, all specials start at MAX charge. \n __Default Ability:__ Boosts ATK of all units by 1.2x',
    },
    41: { //38
        name: "Nostra Castello",
        thumb: 'ship_0040_c.png',
        description: 'Boosts ATK of all units by 1.55x and their HP by 1.3x. Makes PERFECTS easier to Hit. Cuts the current HP of each enemy by 3% at the end of each turn. Reduces ATK based on how many Slasher, Free Spirit or Powerhouse characters you have on your crew.',
    }

};

module.exports.shipfx = shipfx;
