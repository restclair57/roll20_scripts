const minorMagicItems = {
  "name": "minorMagicItems",
  "showplayers": false,
  "entries": [
    [1,4,"[[1t[minorMagicArmorAndShields]]]"],
    [5,9,"[[1t[minorMagicWeapons]]]"],
    [10,44,"[[1t[minorMagicPotions]]]"],
    [45,46,"[[1t[minorMagicRings]]]"],
    [47,56,"[[1t[minorMagicDivineScrolls]]]"],
    [57,81,"[[1t[minorMagicArcaneScrolls]]]"],
    [82,91,"[[1t[minorMagicWands]]]"],
    [92,100,"[[1t[minorWondrousItems]]]"]
  ]
};

const minorMagicArmorAndShields = {
  "name": "minorMagicArmorAndShields",
  "showplayers": false,
  "entries": [
    [1,60,"+1 [[1t[basicShields]]]"],
    [61,80,"+1 [[1t[basicArmors]]]"],
    [81,85,"+2 [[1t[basicShields]]]"],
    [86,87,"+2 [[1t[basicArmors]]]"],
    [88,89,"[[1t[minorMagicArmors]]]"],
    [90,91,"[[1t[minorMagicShields]]]"],
    [92,100,"special ability and roll again"]
  ]
};
const minorMagicWeapons = {
  "name": "minorMagicWeapons",
  "showplayers": false,
  "entries": [
    [1,70,"+1 [[1t[randomWeaponsTable]]]"],
    [71,85,"+2 [[1t[randomWeaponsTable]]]"],
    [86,90,"[[1t[minorMagicWeapons]]]"],
    [91,100,"special ability and roll again"]
  ]
};
const minorMagicPotions = {
  "name": "minorMagicPotions",
  "showplayers": false,
  "entries": [
    [1,10,"Cure light wounds (potion)"],
    [11,13,"Endure elements (potion)"],
    [14,15,"Hide from animals (potion)"],
    [16,17,"Hide from undead (potion)"],
    [18,19,"Jump (potion)"],
    [20,22,"Mage armor (potion)"],
    [23,25,"Magic fang (potion)"],
    [26,26,"Magic stone (oil)"],
    [27,29,"Magic weapon (oil)"],
    [30,30,"Pass without trace (potion)"],
    [31,32,"Protection from (alignment) (potion)"],
    [33,34,"Remove fear (potion)"],
    [35,35,"Sanctuary (potion)"],
    [36,38,"Shield of faith +2 (potion)"],
    [39,39,"Shillelagh (oil)"],
    [40,41,"Bless weapon (oil)"],
    [42,44,"Enlarge person (potion)"],
    [45,45,"Reduce person (potion)"],
    [46,47,"Aid (potion)"],
    [48,50,"Barkskin +2 (potion)"],
    [51,53,"Bear’s endurance (potion)"],
    [54,56,"Blur (potion)"],
    [57,59,"Bull’s strength (potion)"],
    [60,62,"Cat’s grace (potion)"],
    [63,67,"Cure moderate wounds (potion)"],
    [68,68,"Darkness (oil)"],
    [69,71,"Darkvision (potion)"],
    [72,74,"Delay poison (potion)"],
    [75,76,"Eagle’s splendor (potion)"],
    [77,78,"Fox’s cunning (potion)"],
    [79,81,"Invisibility (potion or oil)"],
    [82,84,"Lesser restoration (potion)"],
    [85,86,"Levitate (potion or oil)"],
    [87,87,"Misdirection (potion)"],
    [88,89,"Owl’s wisdom (potion)"],
    [90,91,"Protection from arrows 10/magic (potion)"],
    [92,93,"Remove paralysis (potion)"],
    [94,96,"Resist energy (type) 10 (potion)"],
    [97,97,"Shield of faith +3 (potion)"],
    [98,99,"Spider climb (potion)"],
    [100,100,"Cure light wounds (potion)"]
  ]
};
const minorMagicRings = {
  "name": "minorMagicRings",
  "showplayers": false,
  "entries": [
    [1,18,"Protection +1"],
    [19,28,"Feather falling"],
    [29,36,"Sustenance"],
    [37,44,"Climbing"],
    [45,52,"Jumping"],
    [53,60,"Swimming"],
    [61,70,"Counterspells"],
    [71,75,"Mind shielding"],
    [76,80,"Protection +2"],
    [81,85,"Force shield"],
    [86,90,"Ram ([[d50]] charges)"],
    [91,93,"Animal friendship"]
    [94,96,"minor Energy resistance"]
    [97,98,"Chameleon power"]
    [99,100,"Water walking"]
  ]
};
const minorMagicDivineScrolls = {
  "name": "minorMagicDivineScrolls",
  "showplayers": false,
  "entries": [
    [1,5 ,  "[[ [[1d3]]t[divineZeroSpells] ]]"],
    [6,50,  "[[ [[1d3]]t[divineOneSpells] ]]"],
    [51,95, "[[ [[1d3]]t[divineTwoSpells] ]]"],
    [96,100,"[[ [[1d3]]t[divineThreeSpells] ]]"]
  ]
};
const minorMagicArcaneScrolls = {
  "name": "minorMagicArcaneScrolls",
  "showplayers": false,
  "entries": [
    [1,5 ,  "[[ [[1d3]]t[arcaneZeroSpells] ]]"],
    [6,50,  "[[ [[1d3]]t[arcaneOneSpells] ]]"],
    [51,95, "[[ [[1d3]]t[arcaneTwoSpells] ]]"],
    [96,100,"[[ [[1d3]]t[arcaneThreeSpells] ]]"]
  ]
};
const minorMagicWands = {
  "name": "minorMagicWands",
  "showplayers": false,
  "entries": [
    [1,2,"Detect magic ([[d50]] charges)"],
    [3,4,"Light ([[d50]] charges)"],
    [5,7,"Burning hands ([[d50]] charges)"],
    [8,10,"Charm animal ([[d50]] charges)"],
    [11,13,"Charm person ([[d50]] charges)"],
    [14,16,"Color spray ([[d50]] charges)"],
    [17,19,"Cure light wounds ([[d50]] charges)"],
    [20,22,"Detect secret doors ([[d50]] charges)"],
    [23,25,"Enlarge person ([[d50]] charges)"],
    [26,28,"Magic missile (1st) ([[d50]] charges)"],
    [29,31,"Shocking grasp ([[d50]] charges)"],
    [32,34,"Summon monster I ([[d50]] charges)"],
    [35,36,"Magic missile (3rd) ([[d50]] charges)"],
    [37,37,"Magic missile (5th) ([[d50]] charges)"],
    [38,40,"Bear’s endurance ([[d50]] charges)"],
    [41,43,"Bull’s strength ([[d50]] charges)"],
    [44,46,"Cat’s grace ([[d50]] charges)"],
    [47,49,"Cure moderate wounds ([[d50]] charges)"],
    [50,51,"Darkness ([[d50]] charges)"],
    [52,54,"Daze Monster ([[d50]] charges)"],
    [55,57,"Delay poison ([[d50]] charges)"],
    [58,60,"Eagle’s splendor ([[d50]] charges)"],
    [61,63,"False life ([[d50]] charges)"],
    [64,66,"Fox’s cunning ([[d50]] charges)"],
    [67,68,"Ghoul touch ([[d50]] charges)"],
    [69,71,"Hold person ([[d50]] charges)"],
    [72,74,"Invisibility ([[d50]] charges)"],
    [75,77,"Knock ([[d50]] charges)"],
    [78,80,"Levitate ([[d50]] charges)"],
    [81,83,"Acid arrow ([[d50]] charges)"],
    [84,86,"Mirror image ([[d50]] charges)"],
    [87,89,"Owl’s wisdom ([[d50]] charges)"],
    [90,91,"Shatter ([[d50]] charges)"],
    [92,94,"Silence ([[d50]] charges)"],
    [95,97,"Summon monster II ([[d50]] charges)"],
    [98,100,"Web ([[d50]] charges)"]
  ]
};
const minorWondrousItems = {
  "name": "minorWondrousItems",
  "showplayers": false,
  "simpleEntries": [
    "Feather token, anchor",
    "Universal solvent",
    "Elixir of love",
    "Unguent of timelessness",
    "Feather token, fan",
    "Dust of tracelessness",
    "Elixir of hiding",
    "Elixir of sneaking",
    "Elixir of swimming",
    "Elixir of vision",
    "Silversheen",
    "Feather token, bird",
    "Feather token, tree",
    "Feather token, swan boat",
    "Elixir of truth",
    "Feather token, whip",
    "Dust of dryness",
    "Bag of tricks, gray",
    "Hand of the mage",
    "Bracers of armor +1",
    "Cloak of resistance +1",
    "Pearl of power, 1st-level spell",
    "Phylactery of faithfulness",
    "Salve of slipperiness",
    "Elixir of fire breath",
    "Pipes of the sewers",
    "Dust of illusion",
    "Goggles of minute seeing",
    "Brooch of shielding",
    "Necklace of fireballs type I",
    "Dust of appearance",
    "Hat of disguise",
    "Pipes of sounding",
    "Efficient quiver",
    "Amulet of natural armor +1",
    "Handy haversack",
    "Horn of fog",
    "Elemental gem",
    "Robe of bones",
    "Sovereign glue",
    "Bag of holding type I",
    "Boots of elvenkind",
    "Boots of the winterlands",
    "Candle of truth",
    "Cloak of elvenkind",
    "Eyes of the eagle",
    "Scarab, golembane",
    "Necklace of fireballs type II",
    "Stone of alarm",
    "Bag of tricks, rust",
    "Bead of force",
    "Chime of opening",
    "Horseshoes of speed",
    "Rope of climbing",
    "Dust of disappearance",
    "Lens of detection",
    "Figurine of wondrous power, silver raven",
    "Amulet of health +2",
    "Bracers of armor +2",
    "Cloak of Charisma +2",
    "Cloak of resistance +2",
    "Gauntlets of ogre power",
    "Gloves of arrow snaring",
    "Gloves of Dexterity +2",
    "Headband of intellect +2",
    "Ioun stone, clear spindle",
    "Restorative ointment",
    "Marvelous pigments",
    "Pearl of power, 2nd-level spell",
    "Periapt of Wisdom +2",
    "Stone salve",
    "Necklace of fireballs type III",
    "Circlet of persuasion",
    "Slippers of spider climbing",
    "Incense of meditation",
    "Bag of holding type II",
    "Bracers of archery, lesser",
    "Ioun stone, dusty rose prism",
    "Helm of comprehend languages and read magic",
    "Vest of escape",
    "Eversmoking bottle",
    "Sustaining spoon",
    "Necklace of fireballs type IV",
    "Boots of striding and springing",
    "Wind fan",
    "Necklace of fireballs type V",
    "Amulet of mighty fists +1",
    "Horseshoes of a zephyr",
    "Pipes of haunting",
    "Gloves of swimming and climbing",
    "Bag of tricks, tan",
    "Circlet of blasting, minor",
    "Horn of goodness/evil",
    "Shrouds of disintegration",
    "Robe of useful items",
    "Boat, folding",
    "Cloak of the manta ray",
    "Bottle of air",
    "Bag of holding type III",
    "Periapt of health"
  ]
};


const mediumMagicItems = {
  "name": "mediumMagicItems",
  "showplayers": false,
  "entries": [
    [1,10,"[[1t[mediumMagicArmorAndShields]]]"],
    [11,20,"[[1t[mediumMagicWeapons]]]"],
    [21,30,"[[1t[mediumMagicPotions]]]"],
    [31,40,"[[1t[mediumMagicRings]]]"],
    [41,50,"[[1t[mediumMagicRods]]]"],
    [51,55,"[[1t[mediumMagicDivineScrolls]]]"],
    [56,65,"[[1t[mediumMagicArcaneScrolls]]]"],
    [66,68,"[[1t[mediumMagicStaffs]]]"],
    [69,83,"[[1t[mediumMagicWands]]]"],
    [84,100,"[[1t[mediumWondrousItems]]]"]
  ]
};

const mediumMagicArmorAndShields = {
  "name": "mediumMagicArmorAndShields",
  "showplayers": false,
  "entries": [
    [1,5,"+1 [[1t[basicShields]]]"],
    [6,10,"+1 [[1t[basicArmors]]]"],
    [11,20,"+2 [[1t[basicShields]]]"],
    [21,30,"+2 [[1t[basicArmors]]]"],
    [31,40,"+3 [[1t[basicShields]]]"],
    [41,50,"+3 [[1t[basicArmors]]]"],
    [51,55,"+4 [[1t[basicShields]]]"],
    [56,57,"+4 [[1t[basicArmors]]]"],
    [58,60,"[[1t[mediumMagicArmors]]]"],
    [61,63,"[[1t[mediumMagicShields]]]"],
    [64,100,"special ability and roll again"]
  ]
};
const mediumMagicWeapons = {
  "name": "mediumMagicWeapons",
  "showplayers": false,
  "entries": [
    [1,10,"+1 [[1t[randomWeaponsTable]]]"],
    [11,29,"+2 [[1t[randomWeaponsTable]]]"].
    [30,58,"+3 [[1t[randomWeaponsTable]]]"],
    [59,62,"+4 [[1t[randomWeaponsTable]]]"],
    [63,68,"[[1t[mediumMagicWeapons]]]"],
    [69,100,"special ability and roll again"]
  ]
};
const mediumMagicPotions = {
  "name": "mediumMagicPotions",
  "showplayers": false,
  "entries": [
    [1,2,"Bless weapon (oil)"],
    [3,4,"Enlarge person (potion)"],
    [5,5,"Reduce person (potion)"],
    [6,6,"Aid (potion)"],
    [7,7,"Barkskin +2 (potion)"],
    [8,10,"Bear’s endurance (potion)"],
    [11,13,"Blur (potion)"],
    [14,16,"Bull’s strength (potion)"],
    [17,19,"Cat’s grace (potion)"],
    [20,27,"Cure moderate wounds (potion)"],
    [28,28,"Darkness (oil)"],
    [29,30,"Darkvision (potion)"],
    [31,31,"Delay poison (potion)"],
    [32,33,"Eagle’s splendor (potion)"],
    [34,35,"Fox’s cunning (potion)"],
    [36,37,"Invisibility (potion or oil)"],
    [38,38,"Lesser restoration (potion)"],
    [39,39,"Levitate (potion or oil)"],
    [40,40,"Misdirection (potion)"],
    [41,42,"Owl’s wisdom (potion)"],
    [43,43,"Protection from arrows 10/magic (potion)"],
    [44,44,"Remove paralysis (potion)"],
    [45,46,"Resist energy (type) 10 (potion)"],
    [47,48,"Shield of faith +3 (potion)"],
    [49,49,"Spider climb (potion)"],
    [50,50,"Undetectable alignment (potion)"],
    [51,51,"Barkskin +3 (potion)"],
    [52,52,"Shield of faith +4 (potion)"],
    [53,55,"Resist energy (type) 20 (potion)"],
    [56,60,"Cure serious wounds (potion)"],
    [61,61,"Daylight (oil)"],
    [62,64,"Displacement (potion)"],
    [65,65,"Flame arrow (oil)"],
    [66,68,"Fly (potion)"],
    [69,69,"Gaseous form (potion)"],
    [70,71,"Greater magic fang +1 (potion)"],
    [72,73,"Greater magic weapon +1 (oil)"],
    [74,75,"Haste (potion)"],
    [76,78,"Heroism (potion)"],
    [79,80,"Keen edge (oil)"],
    [81,81,"Magic circle against (alignment) (potion)"],
    [82,83,"Magic vestment +1 (oil)"],
    [84,86,"Neutralize poison (potion)"],
    [87,88,"Nondetection (potion)"],
    [89,91,"Protection from energy (type) (potion)"],
    [92,93,"Rage (potion)"],
    [94,94,"Remove blindness/deafness (potion)"],
    [95,95,"Remove curse (potion)"],
    [96,96,"Remove disease (potion)"],
    [97,97,"Tongues (potion)"],
    [98,99,"Water breathing (potion)"],
    [100,100,"Water walk (potion)"]
  ]
};
const mediumMagicRings = {
  "name": "mediumMagicRings",
  "showplayers": false,
  "entries": [
    [1,5,"Counterspells"],
    [6,8,"Mind shielding"],
    [9,18,"Protection +2"],
    [19,23,"Force shield"],
    [24,28,"Ram ([[d50]] charges)"],
    [29,34,"improved Climbing"],
    [35,40,"improved Jumping"],
    [41,46,"improved Swimming"],
    [47,51,"Animal friendship"],
    [52,56,"minor Energy resistance"],
    [57,61,"Chameleon power"],
    [62,66,"Water walking"],
    [67,71,"Protection +3"],
    [72,76,"minor Spell storing"],
    [77,81,"Invisibility"],
    [82,85,"Wizardry (I)"],
    [86,89,"Evasion"],
    [90,92,"X-ray vision"],
    [93,95,"Blinking"],
    [96,98,"Meld into Stone"],
    [99,100,"major Energy resistance"],
  ]
};
const mediumMagicRods = {
  "name": "mediumMagicRods",
  "showplayers": false,
  "entries": [
    [1,7,"Metamagic, Enlarge, lesser"],
    [8,14,"Metamagic, Extend, lesser"],
    [15,21,"Metamagic, Silent, lesser"],
    [22,28,"Immovable"],
    [29,35,"Metamagic, Empower, lesser"],
    [36,42,"Metal and mineral detection"],
    [43,53,"Cancellation"],
    [54,57,"Metamagic, Enlarge"],
    [58,61,"Metamagic, Extend"],
    [62,65,"Metamagic, Silent"],
    [66,71,"Wonder"],
    [72,79,"Python"],
    [80,83,"Metamagic, Maximize, lesser"],
    [84,89,"Flame extinguishing"],
    [90,97,"Viper"],
    [98,99,"Metamagic, Empower"],
    [100,100,"Metamagic, Quicken, lesser"]
  ]
};
const mediumMagicDivineScrolls = {
  "name": "mediumMagicDivineScrolls",
  "showplayers": false,
  "entries": [
    [1,5,   "[[ [[1d4]]t[divineTwoSpells] ]]"],
    [6,65,  "[[ [[1d4]]t[divineThreeSpells] ]]"],
    [66,95, "[[ [[1d4]]t[divineFourSpells] ]]"],
    [96,100,"[[ [[1d4]]t[divineFiveSpells] ]]"]
  ]
};
const mediumMagicArcaneScrolls = {
  "name": "mediumMagicArcaneScrolls",
  "showplayers": false,
  "entries": [
    [1,5,   "[[ [[1d4]]t[arcaneTwoSpells] ]]"],
    [6,65,  "[[ [[1d4]]t[arcaneThreeSpells] ]]"],
    [66,95, "[[ [[1d4]]t[arcaneFourSpells] ]]"],
    [96,100,"[[ [[1d4]]t[arcaneFiveSpells] ]]"]
  ]
};
const mediumMagicStaffs = {
  "name": "mediumMagicStaffs",
  "showplayers": false,
  "entries": [
    [1,15,"Charming ([[d50]] charges)"],
    [16,30,"Fire ([[d50]] charges)"],
    [31,40,"Swarming insects ([[d50]] charges)"],
    [41,60,"Healing ([[d50]] charges)"],
    [61,75,"Size alteration ([[d50]] charges)"],
    [76,90,"Illumination ([[d50]] charges)"],
    [91,95,"Frost ([[d50]] charges)"],
    [96,100,"Defense ([[d50]] charges)"]
  ]
};
const mediumMagicWands = {
  "name": "mediumMagicWands",
  "showplayers": false,
  "entries": [
    [1,3,"Magic missile (5th) ([[d50]] charges)"],
    [4,7,"Bear’s endurance ([[d50]] charges)"],
    [8,11,"Bull’s strength ([[d50]] charges)"],
    [12,15,"Cat’s grace ([[d50]] charges)"],
    [16,20,"Cure moderate wounds ([[d50]] charges)"],
    [21,22,"Darkness ([[d50]] charges)"],
    [23,24,"Daze Monster ([[d50]] charges)"],
    [25,27,"Delay poison ([[d50]] charges)"],
    [28,31,"Eagle’s splendor ([[d50]] charges)"],
    [32,33,"False life ([[d50]] charges)"],
    [34,37,"Fox’s cunning ([[d50]] charges)"],
    [38,38,"Ghoul touch ([[d50]] charges)"],
    [39,39,"Hold person ([[d50]] charges)"],
    [40,42,"Invisibility ([[d50]] charges)"],
    [43,44,"Knock ([[d50]] charges)"],
    [45,45,"Levitate ([[d50]] charges)"],
    [46,47,"Acid arrow ([[d50]] charges)"],
    [48,49,"Mirror image ([[d50]] charges)"],
    [50,53,"Owl’s wisdom ([[d50]] charges)"],
    [54,54,"Shatter ([[d50]] charges)"],
    [55,56,"Silence ([[d50]] charges)"],
    [57,57,"Summon monster II ([[d50]] charges)"],
    [58,59,"Web ([[d50]] charges)"],
    [60,62,"Magic missile (7th) ([[d50]] charges)"],
    [63,64,"Magic missile (9th) ([[d50]] charges)"],
    [65,67,"Call lightning (5th) ([[d50]] charges)"],
    [68,68,"Charm person, heightened (3rd-level spell) ([[d50]] charges)"],
    [69,70,"Contagion ([[d50]] charges)"],
    [71,74,"Cure serious wounds ([[d50]] charges)"],
    [75,77,"Dispel magic ([[d50]] charges)"],
    [78,81,"Fireball (5th) ([[d50]] charges)"],
    [82,83,"Keen edge ([[d50]] charges)"],
    [84,87,"Lightning bolt (5th) ([[d50]] charges)"],
    [88,89,"Major image ([[d50]] charges)"],
    [90,91,"Slow ([[d50]] charges)"],
    [92,94,"Suggestion ([[d50]] charges)"],
    [95,97,"Summon monster III ([[d50]] charges)"],
    [98,98,"Fireball (6th) ([[d50]] charges)"],
    [99,99,"Lightning bolt (6th) ([[d50]] charges)"],
    [100,100,"Searing light (6th) ([[d50]] charges)"]
  ]
};
const mediumWondrousItems = {
  "name": "mediumWondrousItems",
  "showplayers": false,
  "simpleEntries": [
    "Boots of levitation",
    "Harp of charming",
    "Amulet of natural armor +2",
    "Golem manual, flesh",
    "Hand of glory",
    "Ioun stone, deep red sphere",
    "Ioun stone, incandescent blue sphere",
    "Ioun stone, pale blue rhomboid",
    "Ioun stone, pink and green sphere",
    "Ioun stone, pink rhomboid",
    "Ioun stone, scarlet and blue sphere",
    "Deck of illusions",
    "Necklace of fireballs type VI",
    "Candle of invocation",
    "Necklace of fireballs type VII",
    "Bracers of armor +3",
    "Cloak of resistance +3",
    "Decanter of endless water",
    "Necklace of adaptation",
    "Pearl of power, 3rd-level spell",
    "Figurine of wondrous power, serpentine owl",
    "Strand of prayer beads, lesser",
    "Bag of holding type IV",
    "Figurine of wondrous power, bronze griffon",
    "Figurine of wondrous power, ebony fly",
    "Glove of storing",
    "Ioun stone, dark blue rhomboid",
    "Stone horse, courser",
    "Vestment, druid’s",
    "Cape of the mountebank",
    "Phylactery of undead turning",
    "Gauntlet of rust",
    "Boots of speed",
    "Goggles of night",
    "Golem manual, clay",
    "Medallion of thoughts",
    "Pipes of pain",
    "Blessed book",
    "Belt, monk’s",
    "Gem of brightness ([[d50]] charges)",
    "Lyre of building",
    "Cloak of arachnida",
    "Stone horse, destrier",
    "Belt of dwarvenkind",
    "Periapt of wound closure",
    "Horn of the tritons",
    "Pearl of the sirines",
    "Figurine of wondrous power, onyx dog",
    "Amulet of health +4",
    "Belt of giant Strength +4",
    "Boots, winged",
    "Bracers of armor +4",
    "Cloak of Charisma +4",
    "Cloak of resistance +4",
    "Gloves of Dexterity +4",
    "Headband of intellect +4",
    "Pearl of power, 4th-level spell",
    "Periapt of Wisdom +4",
    "Scabbard of keen edges",
    "Figurine of wondrous power, golden lions",
    "Chime of interruption",
    "Broom of flying",
    "Figurine of wondrous power, marble elephant",
    "Amulet of natural armor +3",
    "Ioun stone, iridescent spindle",
    "Bracelet of friends",
    "Carpet of flying, 5 ft. by 5 ft.",
    "Horn of blasting",
    "Ioun stone, pale lavender ellipsoid",
    "Ioun stone, pearly white spindle",
    "Portable hole",
    "Stone of good luck (luckstone)",
    "Figurine of wondrous power, ivory goats",
    "Rope of entanglement",
    "Golem manual, stone",
    "Mask of the skull",
    "Mattock of the titans",
    "Circlet of blasting, major",
    "Amulet of mighty fists +2",
    "Cloak of displacement, minor",
    "Helm of underwater action",
    "Bracers of archery, greater",
    "Bracers of armor +5",
    "Cloak of resistance +5",
    "Eyes of doom",
    "Pearl of power, 5th-level spell",
    "Maul of the titans",
    "Strand of prayer beads",
    "Cloak of the bat",
    "Iron bands of binding",
    "Cube of frost resistance",
    "Helm of telepathy",
    "Periapt of proof against poison",
    "Robe of scintillating colors",
    "Manual of bodily health +1",
    "Manual of gainful exercise +1",
    "Manual of quickness of action +1",
    "Tome of clear thought +1",
    "Tome of leadership and influence +1",
    "Tome of understanding +1"
  ]
};


const majorMagicItems = {
  "name": "majorMagicItems",
  "showplayers": false,
  "entries": [
    [1,10,"[[1t[majorMagicArmorAndShields]]]"],
    [11,20,"[[1t[majorMagicWeapons]]]"],
    [21,25,"[[1t[majorMagicPotions]]]"],
    [26,35,"[[1t[majorMagicRings]]]"],
    [36,45,"[[1t[majorMagicRods]]]"],
    [46,48,"[[1t[majorMagicDivineScrolls]]]"],
    [49,55,"[[1t[majorMagicArcaneScrolls]]]"],
    [56,75,"[[1t[majorMagicStaffs]]]"],
    [76,90,"[[1t[majorMagicWands]]]"],
    [81,100,"[[1t[majorWondrousItems]]]"]
  ]
};

const majorMagicArmorAndShields = {
  "name": "majorMagicArmorAndShields",
  "showplayers": false,
  "entries": [
    [1,8,"+3 [[1t[basicShields]]]"],
    [9,16,"+3 [[1t[basicArmors]]]"],
    [17,27,"+4 [[1t[basicShields]]]"],
    [28,38,"+4 [[1t[basicArmors]]]"],
    [39,49,"+5 [[1t[basicShields]]]"],
    [50,57,"+5 [[1t[basicArmors]]]"],
    [58,60,"[[1t[majorMagicArmors]]]"],
    [61,63,"[[1t[majorMagicShields]]]"],
    [64,100,"special ability and roll again"]
  ]
};
const majorMagicWeapons = {
  "name": "majorMagicWeapons",
  "showplayers": false,
  "entries": [
    [1,20,"+3 [[1t[randomWeaponsTable]]]"],
    [21,38,"+4 [[1t[randomWeaponsTable]]]"],
    [39,49,"+5 [[1t[randomWeaponsTable]]]"],
    [50,63,"[[1t[majorMagicWeapons]]]"],
    [64,100,"special ability and roll again"]
  ]
};
const majorMagicPotions = {
  "name": "majorMagicPotions",
  "showplayers": false,
  "entries": [
    [1,2,"blur (potion)"],
    [3,7,"cure moderate wounds (potion)"],
    [8,9,"darkvision (potion)"],
    [10,11,"invisibility (potion or oil)"],
    [12,12,"lesser restoration (potion)"],
    [13,13,"remove paralysis (potion)"],
    [14,14,"shield of faith +3 (potion)"],
    [15,15,"undetectable alignment (potion)"],
    [16,16,"barkskin +3 (potion)"],
    [17,18,"shield of faith +4 (potion)"],
    [19,20,"Resist energy (type) 20 (potion)"],
    [21,28,"Cure serious wounds (potion)"],
    [29,29,"Daylight (oil)"],
    [30,32,"Displacement (potion)"],
    [33,33,"Flame arrow (oil)"],
    [34,38,"Fly (potion)"],
    [39,39,"Gaseous form (potion)"],
    [40,41,"Haste (potion)"],
    [42,44,"Heroism (potion)"],
    [45,46,"Keen edge (oil)"],
    [47,47,"Magic circle against (alignment) (potion)"],
    [48,50,"Neutralize poison (potion)"],
    [51,52,"Nondetection (potion)"],
    [53,54,"Protection from energy (type) (potion)"],
    [55,55,"Rage (potion)"],
    [56,56,"Remove blindness/deafness (potion)"],
    [57,57,"Remove curse (potion)"],
    [58,58,"Remove disease (potion)"],
    [59,59,"Tongues (potion)"],
    [60,60,"Water breathing (potion)"],
    [61,61,"Water walk (potion)"],
    [62,63,"Barkskin +4 (potion)"],
    [64,64,"Shield of faith +5 (potion)"],
    [65,65,"Good hope (potion)"],
    [66,68,"Resist energy (type) 30 (potion)"],
    [69,69,"Barkskin +5 (potion)"],
    [70,73,"Greater magic fang +2 (potion)"],
    [74,77,"Greater magic weapon +2 (oil)"],
    [78,81,"Magic vestment +2 (oil)"],
    [82,82,"Protection from arrows 15/magic (potion)"],
    [83,85,"Greater magic fang +3 (potion)"],
    [86,88,"Greater magic weapon +3 (oil)"],
    [89,91,"Magic vestment +3 (oil)"],
    [92,93,"Greater magic fang +4 (potion)"],
    [94,95,"Greater magic weapon +4 (oil)"],
    [96,97,"Magic vestment +4 (oil)"],
    [98,98,"Greater magic fang +5 (potion)"],
    [99,99,"Greater magic weapon +5 (oil)"],
    [100,100,"Magic vestment +5 (oil)"]
  ]
};
const majorMagicRings = {
  "name": "majorMagicRings",
  "showplayers": false,
  "entries": [
    [1,2,"minor Energy resistance"],
    [3,7,"Protection +3"],
    [8,10,"minor Spell storing"],
    [11,15,"Invisibility"],
    [16,19,"Wizardry (I)"],
    [20,25,"Evasion"],
    [26,28,"X-ray vision"],
    [29,32,"Blinking"],
    [33,36,"Meld into Stone"],
    [37,43,"major Energy resistance"],
    [44,50,"Protection +4"],
    [51,55,"Wizardry (II)"],
    [56,60,"Freedom of movement"],
    [61,63,"greater Energy resistance"],
    [64,65,"Friend shield (pair)"],
    [66,70,"Protection +5"],
    [71,74,"Shooting stars"],
    [75,79,"Spell storing"],
    [80,83,"Wizardry (III)"],
    [84,86,"Telekinesis"],
    [87,88,"Regeneration"],
    [89,89,"Three wishes ([[d3]] rubies)"],
    [90,92,"Spell turning"],
    [93,94,"Wizardry (IV)"],
    [95,95,"Djinni calling"],
    [96,96,"Elemental command (air)"],
    [97,97,"Elemental command (earth)"],
    [98,98,"Elemental command (fire)"],
    [99,99,"Elemental command (water)"],
    [100,100,"major Spell storing"],
  ]
};
const majorMagicRods = {
  "name": "majorMagicRods",
  "showplayers": false,
  "entries": [
    [1,4,"Cancellation"],
    [5,6,"Metamagic, Enlarge"],
    [7,8,"Metamagic, Extend"],
    [9,10,"Metamagic, Silent"],
    [11,14,"Wonder"],
    [15,18,"Python"],
    [19,21,"Flame extinguishing"],
    [22,25,"Viper"],
    [26,30,"Enemy detection"],
    [31,36,"Metamagic, Enlarge, greater"],
    [37,42,"Metamagic, Extend, greater"],
    [43,48,"Metamagic, Silent, greater"],
    [49,53,"Splendor"],
    [54,58,"Withering"],
    [59,64,"Metamagic, Empower"],
    [65,69,"Thunder and lightning"],
    [70,73,"Metamagic, Quicken, lesser"],
    [74,77,"Negation"],
    [78,80,"Absorption"],
    [81,84,"Flailing"],
    [85,86,"Metamagic, Maximize"],
    [87,88,"Rulership"],
    [89,90,"Security"],
    [91,92,"Lordly might"],
    [93,94,"Metamagic, Empower, greater"],
    [95,96,"Metamagic, Quicken"],
    [97,98,"Alertness"],
    [99,99,"Metamagic, Maximize, greater"],
    [100,100,"Metamagic, Quicken, greater"]
  ]
};
const majorMagicDivineScrolls = {
  "name": "majorMagicDivineScrolls",
  "showplayers": false,
  "entries": [
    [1,5,   "[[ [[1d6]]t[divineFourSpells] ]]"],
    [6,50,  "[[ [[1d6]]t[divineFiveSpells] ]]"],
    [51,70, "[[ [[1d6]]t[divineSixSpells] ]]"],
    [71,85, "[[ [[1d6]]t[divineSevenSpells] ]]"],
    [86,95, "[[ [[1d6]]t[divineEightSpells] ]]"],
    [96,100,"[[ [[1d6]]t[divineNineSpells] ]]"]
  ]
};
const majorMagicArcaneScrolls = {
  "name": "majorMagicArcaneScrolls",
  "showplayers": false,
  "entries": [
    [1,5,   "[[ [[1d6]]t[arcaneFourSpells] ]]"],
    [6,50,  "[[ [[1d6]]t[arcaneFiveSpells] ]]"],
    [51,70, "[[ [[1d6]]t[arcaneSixSpells] ]]"],
    [71,85, "[[ [[1d6]]t[arcaneSevenSpells] ]]"],
    [86,95, "[[ [[1d6]]t[arcaneEightSpells] ]]"],
    [96,100,"[[ [[1d6]]t[arcaneNineSpells] ]]"]
  ]
};
const majorMagicStaffs = {
  "name": "majorMagicStaffs",
  "showplayers": false,
  "entries": [
    [1,3,"Charming ([[d50]] charges)"],
    [4,9,"Fire ([[d50]] charges)"],
    [10,11,"Swarming insects ([[d50]] charges)"],
    [12,17,"Healing ([[d50]] charges)"],
    [18,19,"Size alteration ([[d50]] charges)"],
    [20,24,"Illumination ([[d50]] charges)"],
    [25,31,"Frost ([[d50]] charges)"],
    [32,38,"Defense ([[d50]] charges)"],
    [39,43,"Abjuration ([[d50]] charges)"],
    [44,48,"Conjuration ([[d50]] charges)"],
    [49,53,"Enchantment ([[d50]] charges)"],
    [54,58,"Evocation ([[d50]] charges)"],
    [59,63,"Illusion ([[d50]] charges)"],
    [64,68,"Necromancy ([[d50]] charges)"],
    [69,73,"Transmutation ([[d50]] charges)"],
    [74,77,"Divination ([[d50]] charges)"],
    [78,82,"Earth and stone ([[d50]] charges)"],
    [83,87,"Woodlands ([[d50]] charges)"],
    [88,92,"Life ([[d50]] charges)"],
    [93,97,"Passage ([[d50]] charges)"],
    [98,100,"Power ([[d50]] charges)"]
  ]
};
const majorMagicWands = {
  "name": "majorMagicWands",
  "showplayers": false,
  "entries": [
    [1,2,"Magic missile (7th) ([[d50]] charges)"],
    [3,5,"Magic missile (9th) ([[d50]] charges)"],
    [6,7,"Call lightning (5th) ([[d50]] charges)"],
    [8,8,"Charm person, heightened (3rd-level spell) ([[d50]] charges)"],
    [9,10,"Contagion ([[d50]] charges)"],
    [11,13,"Cure serious wounds ([[d50]] charges)"],
    [14,15,"Dispel magic ([[d50]] charges)"],
    [16,17,"Fireball (5th) ([[d50]] charges)"],
    [18,19,"Keen edge ([[d50]] charges)"],
    [20,21,"Lightning bolt (5th) ([[d50]] charges)"],
    [22,23,"Major image ([[d50]] charges)"],
    [24,25,"Slow ([[d50]] charges)"],
    [26,27,"Suggestion ([[d50]] charges)"],
    [28,29,"Summon monster III ([[d50]] charges)"],
    [30,31,"Fireball (6th) ([[d50]] charges)"],
    [32,33,"Lightning bolt (6th) ([[d50]] charges)"],
    [34,35,"Searing light (6th) ([[d50]] charges)"],
    [36,37,"Call lightning (8th) ([[d50]] charges)"],
    [38,39,"Fireball (8th) ([[d50]] charges)"],
    [40,41,"Lightning bolt (8th) ([[d50]] charges)"],
    [42,45,"Charm monster ([[d50]] charges)"],
    [46,50,"Cure critical wounds ([[d50]] charges)"],
    [51,52,"Dimensional anchor ([[d50]] charges)"],
    [53,55,"Fear ([[d50]] charges)"],
    [56,59,"Greater invisibility ([[d50]] charges)"],
    [60,60,"Hold person, heightened (4th level) ([[d50]] charges)"],
    [61,65,"Ice storm ([[d50]] charges)"],
    [66,68,"Inflict critical wounds ([[d50]] charges)"],
    [69,72,"Neutralize poison ([[d50]] charges)"],
    [73,74,"Poison ([[d50]] charges)"],
    [75,77,"Polymorph ([[d50]] charges)"],
    [78,78,"Ray of enfeeblement, heightened (4th level) ([[d50]] charges)"],
    [79,79,"Suggestion, heightened (4th level) ([[d50]] charges)"],
    [80,82,"Summon monster IV ([[d50]] charges)"],
    [83,86,"Wall of fire ([[d50]] charges)"],
    [87,90,"Wall of ice ([[d50]] charges)"],
    [91,91,"Dispel magic (10th) ([[d50]] charges)"],
    [92,92,"Fireball (10th) ([[d50]] charges)"],
    [93,93,"Lightning bolt (10th) ([[d50]] charges)"],
    [94,94,"Chaos hammer (8th) ([[d50]] charges)"],
    [95,95,"Holy smite (8th) ([[d50]] charges)"],
    [96,96,"Order’s wrath (8th) ([[d50]] charges)"],
    [97,97,"Unholy blight (8th) ([[d50]] charges)"],
    [98,99,"Restoration ([[d50]] charges)"],
    [100,100,"Stoneskin ([[d50]] charges)"]
  ]
};
const majorWondrousItems = {
  "name": "majorWondrousItems",
  "showplayers": false,
  "simpleEntries": [
    "Dimensional shackles",
    "Figurine of wondrous power, obsidian steed",
    "Drums of panic",
    "Ioun stone, orange",
    "Ioun stone, pale green prism",
    "Lantern of revealing",
    "Robe of blending",
    "Amulet of natural armor +4",
    "Amulet of proof against detection and location",
    "Carpet of flying, 5 ft. by 10 ft.",
    "Golem manual, iron",
    "Amulet of health +6",
    "Belt of giant Strength +6",
    "Bracers of armor +6",
    "Cloak of Charisma +6",
    "Gloves of Dexterity +6",
    "Headband of intellect +6",
    "Ioun stone, vibrant purple prism",
    "Pearl of power, 6th-level spell",
    "Periapt of Wisdom +6",
    "Scarab of protection",
    "Ioun stone, lavender and green ellipsoid",
    "Ring gates",
    "Crystal ball",
    "Golem manual, greater stone",
    "Orb of storms",
    "Boots of teleportation",
    "Bracers of armor +7",
    "Pearl of power, 7th-level spell",
    "Amulet of natural armor +5",
    "Cloak of displacement, major",
    "Crystal ball with see invisibility",
    "Horn of Valhalla",
    "Crystal ball with detect thoughts",
    "Carpet of flying, 6 ft. by 9 ft.",
    "Amulet of mighty fists +3",
    "Wings of flying",
    "Cloak of etherealness",
    "Instant fortress",
    "Manual of bodily health +2",
    "Manual of gainful exercise +2",
    "Manual of quickness of action +2",
    "Tome of clear thought +2",
    "Tome of leadership and influence +2",
    "Tome of understanding +2",
    "Eyes of charming",
    "Robe of stars",
    "Carpet of flying, 10 ft. by 10 ft.",
    "Darkskull",
    "Cube of force",
    "Bracers of armor +8",
    "Pearl of power, 8th-level spell",
    "Crystal ball with telepathy",
    "Horn of blasting, greater",
    "Pearl of power, two spells",
    "Helm of teleportation",
    "Gem of seeing",
    "Robe of the archmagi",
    "Mantle of faith",
    "Crystal ball with true seeing",
    "Pearl of power, 9th-level spell",
    "Well of many worlds",
    "Manual of bodily health +3",
    "Manual of gainful exercise +3",
    "Manual of quickness of action +3",
    "Tome of clear thought +3",
    "Tome of leadership and influence +3",
    "Tome of understanding +3",
    "Apparatus of the crab",
    "Mantle of spell resistance",
    "Mirror of opposition",
    "Strand of prayer beads, greater",
    "Amulet of mighty fists +4",
    "Eyes of petrification",
    "Bowl of commanding water elementals",
    "Brazier of commanding fire elementals",
    "Censer of controlling air elementals",
    "Stone of controlling earth elementals",
    "Manual of bodily health +4",
    "Manual of gainful exercise +4",
    "Manual of quickness of action +4",
    "Tome of clear thought +4",
    "Tome of leadership and influence +4",
    "Tome of understanding +4",
    "Amulet of the planes",
    "Robe of eyes",
    "Helm of brilliance",
    "Manual of bodily health +5",
    "Manual of gainful exercise +5",
    "Manual of quickness of action +5",
    "Tome of clear thought +5",
    "Tome of leadership and influence +5",
    "Tome of understanding +5",
    "Efreeti bottle",
    "Amulet of mighty fists +5",
    "Chaos diamond",
    "Cubic gate",
    "Iron flask",
    "Mirror of mental prowess",
    "Mirror of life trapping"
  ]
};



on("ready", function() {
  var magicItems = [
    minorMagicItems,
    minorMagicArmorAndShields,
    minorMagicWeapons,
    minorPotions,
    minorRings,
    minorScrolls,
    minorWands,
    minorWondrousItems,
    
    mediumMagicItems,
    mediumMagicArmorAndShields,
    mediumMagicWeapons,
    mediumPotions,
    mediumRings,
    mediumRods,
    mediumScrolls,
    mediumStaffs,
    mediumWands,
    mediumWondrousItems,
    
    majorMagicItems,
    majorMagicArmorAndShields,
    majorMagicWeapons,
    majorPotions,
    majorRings,
    majorRods,
    majorScrolls,
    majorStaffs,
    majorWands,
    majorWondrousItems,
    
  ]
  _.each(magicItems, function(tableData) {
    RollableTableManager.findOrMake(tableData);
  });
});