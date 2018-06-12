const minorMagicWeapons = {
  "name": "minorMagicWeapons",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,70,"+1 [[1t[minorMagicRandomWeaponsGateway]]]"],
    [71,85,"+2 [[1t[minorMagicRandomWeaponsGateway]]]"],
    [86,90,"[[1t[minorMagicSpecificWeaponsGateway]]]"]
  ]
};

const minorMagicRandomWeaponsGateway = {
  "name": "minorMagicRandomWeaponsGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,70,"[[1t[commonMeleeWeaponsItems]]] [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [71,80,"[[1t[minorMagicUncommonWeaponsGateway]]]"],
    [81,100,"[[1t[commonRangedWeaponsItems]]] [[1t[minorMagicRangedWeaponAbilitiesGateway]]]"]
  ]
};

const minorMagicUncommonWeaponsGateway = {
  "name": "minorMagicUncommonWeaponsGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,3,"orc double axe [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [4,7,"battleaxe [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [8,10,"spiked chain [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [11,12,"club [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [13,16,"hand crossbow [[1t[minorMagicRangedWeaponAbilitiesGateway]]]"],
    [17,19,"repeating crossbow [[1t[minorMagicRangedWeaponAbilitiesGateway]]]"],
    [20,21,"punching dagger [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [22,23,"falchion [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [24,26,"dire flail [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [27,31,"heavy flail [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [32,35,"flail [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [36,37,"gauntlet [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [38,39,"spiked gauntlet [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [40,41,"glaive [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [42,43,"greatclub [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [44,45,"guisarme [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [46,48,"halberd [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [49,51,"spear [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [52,54,"gnome hooked hammer [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [55,56,"light hammer [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [57,58,"handaxe [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [59,61,"kukri [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [62,64,"lance [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [65,67,"longspear [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [68,70,"morningstar [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [71,72,"net [[1t[minorMagicRangedWeaponAbilitiesGateway]]]"],
    [73,74,"heavy pick [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [75,76,"light pick [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [77,78,"ranseur [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [79,80,"sap [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [81,82,"scythe [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [83,84,"50 shuriken [[1t[minorMagicRangedWeaponAbilitiesGateway]]]"],
    [85,86,"sickle [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [87,89,"twobladed sword [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [90,91,"trident [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [92,94,"dwarven urgrosh [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [95,97,"warhammer [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [98,100,"whip [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"]
  ]
};

const minorMagicSpecificWeaponsGateway = {
  "name": "minorMagicSpecificWeaponsGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,15,"Sleep arrow [[1t[minorMagicRangedWeaponAbilitiesGateway]]]"],
    [16,25,"Screaming bolt [[1t[minorMagicRangedWeaponAbilitiesGateway]]]"],
    [26,45,"masterwork Silver dagger [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [46,65,"masterwork Cold iron longsword [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [66,75,"Javelin of lightning [[1t[minorMagicRangedWeaponAbilitiesGateway]]]"],
    [76,80,"Slaying arrow ([[1t[baneTargets]]]) [[1t[minorMagicRangedWeaponAbilitiesGateway]]]"],
    [81,90,"Adamantine dagger [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"],
    [91,100,"Adamantine battleaxe [[1t[minorMagicMeleeWeaponAbilitiesGateway]]]"]
  ]
};

const minorMagicMeleeWeaponAbilitiesGateway = {
  "name": "minorMagicMeleeWeaponAbilitiesGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,90,""],
    [91,100,"[[1t[minorMagicMeleeWeaponAbilities]]]"]
  ]
};

const minorMagicMeleeWeaponAbilities = {
  "name": "minorMagicMeleeWeaponAbilities",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,10,"Bane ([[1t[baneTargets]]])"],
    [11,17,"Defending"],
    [18,27,"Flaming"],
    [28,37,"Frost"],
    [38,47,"Shock"],
    [48,56,"Ghost touch"],
    [57,67,"Keen"],
    [68,71,"Ki Focus"],
    [72,75,"Merciful"],
    [76,82,"Mighty cleaving"],
    [83,87,"Spell storing"],
    [88,91,"Throwing"],
    [92,95,"Thundering"],
    [96,99,"Vicious"],
    [100,100,"[[1t[minorMagicMeleeWeaponAbilities]]] [[1t[minorMagicMeleeWeaponAbilities]]]"]
  ]
};

const minorMagicRangedWeaponAbilitiesGateway = {
  "name": "minorMagicRangedWeaponAbilitiesGateway",
  "showplayers": false,
  "entryType":"rollWeights",
  "entries": [
    [1,90,""],
    [91,100,"[[1t[minorMagicRangedWeaponAbilities]]]"]
  ]
};

const minorMagicRangedWeaponAbilities = {
  "name": "minorMagicRangedWeaponAbilities",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,12,"Bane ([[1t[baneTargets]]])"],
    [13,25,"Distance"],
    [26,40,"Flaming"],
    [41,55,"Frost"],
    [56,60,"Merciful"],
    [61,68,"Returning"],
    [69,83,"Shock"],
    [84,93,"Seeking"],
    [94,99,"Thundering"],
    [100,100,"[[1t[minorMagicRangedWeaponAbilities]]] [[1t[minorMagicRangedWeaponAbilities]]]"]
  ]
};



const mediumMagicWeapons = {
  "name": "mediumMagicWeapons",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,10,"+1 [[1t[mediumMagicRandomWeaponsGateway]]]"],
    [11,29,"+2 [[1t[mediumMagicRandomWeaponsGateway]]]"],
    [30,58,"+3 [[1t[mediumMagicRandomWeaponsGateway]]]"],
    [59,62,"+4 [[1t[mediumMagicRandomWeaponsGateway]]]"],
    [63,68,"[[1t[mediumMagicSpecificWeaponsGateway]]]"]
  ]
};

const mediumMagicRandomWeaponsGateway = {
  "name": "mediumMagicRandomWeaponsGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,70,"[[1t[commonMeleeWeaponsItems]]] [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [71,80,"[[1t[mediumMagicUncommonWeaponsGateway]]]"],
    [81,100,"[[1t[commonRangedWeaponsItems]]] [[1t[mediumMagicRangedWeaponAbilitiesGateway]]]"]
  ]
};

const mediumMagicUncommonWeaponsGateway = {
  "name": "mediumMagicUncommonWeaponsGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,3,"orc double axe [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [4,7,"battleaxe [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [8,10,"spiked chain [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [11,12,"club [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [13,16,"hand crossbow [[1t[mediumMagicRangedWeaponAbilitiesGateway]]]"],
    [17,19,"repeating crossbow [[1t[mediumMagicRangedWeaponAbilitiesGateway]]]"],
    [20,21,"punching dagger [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [22,23,"falchion [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [24,26,"dire flail [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [27,31,"heavy flail [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [32,35,"flail [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [36,37,"gauntlet [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [38,39,"spiked gauntlet [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [40,41,"glaive [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [42,43,"greatclub [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [44,45,"guisarme [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [46,48,"halberd [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [49,51,"spear [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [52,54,"gnome hooked hammer [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [55,56,"light hammer [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [57,58,"handaxe [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [59,61,"kukri [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [62,64,"lance [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [65,67,"longspear [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [68,70,"morningstar [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [71,72,"net [[1t[mediumMagicRangedWeaponAbilitiesGateway]]]"],
    [73,74,"heavy pick [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [75,76,"light pick [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [77,78,"ranseur [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [79,80,"sap [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [81,82,"scythe [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [83,84,"50 shuriken [[1t[mediumMagicRangedWeaponAbilitiesGateway]]]"],
    [85,86,"sickle [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [87,89,"twobladed sword [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [90,91,"trident [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [92,94,"dwarven urgrosh [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [95,97,"warhammer [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [98,100,"whip [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"]
  ]
};

const mediumMagicSpecificWeaponsGateway = {
  "name": "mediumMagicSpecificWeaponsGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,9,"Javelin of lightning [[1t[mediumMagicRangedWeaponAbilitiesGateway]]]"],
    [10,15,"Slaying arrow [[1t[mediumMagicRangedWeaponAbilitiesGateway]]]"],
    [16,24,"Adamantine dagger [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [25,33,"Adamantine battleaxe [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [34,37,"Slaying arrow (greater) ([[1t[baneTargets]]]) [[1t[mediumMagicRangedWeaponAbilitiesGateway]]]"],
    [38,40,"Shatterspike [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [41,46,"Dagger of venom [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [47,51,"Trident of warning [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [52,57,"Assassin’s dagger [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [58,62,"Shifter’s sorrow [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [63,66,"Trident of fish command [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [67,74,"Flame tongue [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [75,79,"Luck blade (0 wishes) [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [80,86,"Sword of subtlety [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [87,91,"Sword of the planes [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [92,95,"Nine lives stealer [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [96,98,"Sword of life stealing [[1t[mediumMagicMeleeWeaponAbilitiesGateway]]]"],
    [99,100,"Oathbow [[1t[mediumMagicRangedWeaponAbilitiesGateway]]]"]
  ]
};

const mediumMagicMeleeWeaponAbilitiesGateway = {
  "name": "mediumMagicMeleeWeaponAbilitiesGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,68,""],
    [69,100,"[[1t[mediumMagicMeleeWeaponAbilities]]]"]
  ]
};

const mediumMagicMeleeWeaponAbilities = {
  "name": "mediumMagicMeleeWeaponAbilities",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,6,"Bane ([[1t[baneTargets]]])"],
    [7,12,"Defending"],
    [13,19,"Flaming"],
    [20,26,"Frost"],
    [27,33,"Shock"],
    [34,38,"Ghost touch"],
    [39,44,"Keen"],
    [45,48,"Ki Focus"],
    [49,50,"Merciful"],
    [51,54,"Mighty cleaving"],
    [55,59,"Spell storing"],
    [60,63,"Throwing"],
    [64,65,"Thundering"],
    [66,69,"Vicious"],
    [70,72,"Anarchic"],
    [73,75,"Axiomatic"],
    [76,78,"Disruption"],
    [79,81,"Flaming burst"],
    [82,84,"Icy burst"],
    [85,87,"Holy"],
    [88,90,"Shocking burst"],
    [91,93,"Unholy"],
    [94,95,"Wounding"],
    [96,100,"[[1t[mediumMagicMeleeWeaponAbilities]]] [[1t[mediumMagicMeleeWeaponAbilities]]]"]
  ]
};

const mediumMagicRangedWeaponAbilitiesGateway = {
  "name": "mediumMagicRangedWeaponAbilitiesGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,68,""],
    [69,100,"[[1t[mediumMagicRangedWeaponAbilities]]]"]
  ]
};

const mediumMagicRangedWeaponAbilities = {
  "name": "mediumMagicRangedWeaponAbilities",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,8,"Bane ([[1t[baneTargets]]])"],
    [9,16,"Distance"],
    [17,28,"Flaming"],
    [29,40,"Frost"],
    [41,42,"Merciful"],
    [43,47,"Returning"],
    [48,59,"Shock"],
    [60,64,"Seeking"],
    [65,68,"Thundering"],
    [69,71,"Anarchic"],
    [72,74,"Axiomatic"],
    [75,79,"Flaming burst"],
    [80,82,"Holy"],
    [83,87,"Icy burst"],
    [88,92,"Shocking burst"],
    [93,95,"Unholy"],
    [96,100,"[[1t[mediumMagicRangedWeaponAbilities]]] [[1t[mediumMagicRangedWeaponAbilities]]]"]
  ]
};



const majorMagicWeapons = {
  "name": "majorMagicWeapons",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,20,"+3 [[1t[majorMagicRandomWeaponsGateway]]]"],
    [21,38,"+4 [[1t[majorMagicRandomWeaponsGateway]]]"],
    [39,49,"+5 [[1t[majorMagicRandomWeaponsGateway]]]"],
    [50,63,"[[1t[majorMagicSpecificWeaponsGateway]]]"]
  ]
};

const majorMagicRandomWeaponsGateway = {
  "name": "majorMagicRandomWeaponsGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,70,"[[1t[commonMeleeWeaponsItems]]] [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [71,80,"[[1t[majorMagicUncommonWeaponsGateway]]]"],
    [81,100,"[[1t[commonRangedWeaponsItems]]] [[1t[majorMagicRangedWeaponAbilitiesGateway]]]"]
  ]
};

const majorMagicUncommonWeaponsGateway = {
  "name": "majorMagicUncommonWeaponsGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,3,"orc double axe [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [4,7,"battleaxe [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [8,10,"spiked chain [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [11,12,"club [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [13,16,"hand crossbow [[1t[majorMagicRangedWeaponAbilitiesGateway]]]"],
    [17,19,"repeating crossbow [[1t[majorMagicRangedWeaponAbilitiesGateway]]]"],
    [20,21,"punching dagger [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [22,23,"falchion [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [24,26,"dire flail [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [27,31,"heavy flail [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [32,35,"flail [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [36,37,"gauntlet [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [38,39,"spiked gauntlet [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [40,41,"glaive [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [42,43,"greatclub [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [44,45,"guisarme [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [46,48,"halberd [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [49,51,"spear [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [52,54,"gnome hooked hammer [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [55,56,"light hammer [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [57,58,"handaxe [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [59,61,"kukri [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [62,64,"lance [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [65,67,"longspear [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [68,70,"morningstar [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [71,72,"net [[1t[majorMagicRangedWeaponAbilitiesGateway]]]"],
    [73,74,"heavy pick [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [75,76,"light pick [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [77,78,"ranseur [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [79,80,"sap [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [81,82,"scythe [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [83,84,"50 shuriken [[1t[majorMagicRangedWeaponAbilitiesGateway]]]"],
    [85,86,"sickle [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [87,89,"twobladed sword [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [90,91,"trident [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [92,94,"dwarven urgrosh [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [95,97,"warhammer [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [98,100,"whip [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"]
  ]
};

const majorMagicSpecificWeaponsGateway = {
  "name": "majorMagicSpecificWeaponsGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,4,"Assassin’s dagger [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [5,7,"Shifter’s sorrow [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [8,9,"Trident of fish command [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [10,13,"Flame tongue [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [14,17,"Luck blade (0 wishes) [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [18,24,"Sword of subtlety [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [25,31,"Sword of the planes [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [32,37,"Nine lives stealer [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [38,42,"Sword of life stealing [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [43,46,"Oathbow [[1t[majorMagicRangedWeaponAbilitiesGateway]]]"],
    [47,51,"Mace of terror [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [52,57,"Lifedrinker [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [58,62,"Sylvan scimitar [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [63,67,"Rapier of puncturing [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [68,73,"Sun blade [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [74,79,"Frost brand [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [80,84,"Dwarven thrower [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [85,91,"Luck blade (1 wish) [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [92,95,"Mace of smiting [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [96,97,"Luck blade (2 wishes) [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [98,99,"Holy avenger [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"],
    [100,100,"Luck blade (3 wishes) [[1t[majorMagicMeleeWeaponAbilitiesGateway]]]"]
  ]
};

const majorMagicMeleeWeaponAbilitiesGateway = {
  "name": "majorMagicMeleeWeaponAbilitiesGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,63,""],
    [64,100,"[[1t[majorMagicMeleeWeaponAbilities]]]"]
  ]
};

const majorMagicMeleeWeaponAbilities = {
  "name": "majorMagicMeleeWeaponAbilities",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,3,"Bane ([[1t[baneTargets]]])"],
    [4,6,"Flaming"],
    [7,9,"Frost"],
    [10,12,"Shock"],
    [13,15,"Ghost touch"],
    [16,19,"Ki Focus"],
    [20,21,"Mighty cleaving"],
    [22,24,"Spell storing"],
    [25,28,"Throwing"],
    [29,32,"Thundering"],
    [33,36,"Vicious"],
    [37,41,"Anarchic"],
    [42,46,"Axiomatic"],
    [47,49,"Disruption"],
    [50,54,"Flaming burst"],
    [55,59,"Icy burst"],
    [60,64,"Holy"],
    [65,69,"Shocking burst"],
    [70,74,"Unholy"],
    [75,78,"Wounding"],
    [79,83,"Speed"],
    [84,86,"Brilliant energy"],
    [87,88,"Dancing"],
    [89,90,"Vorpal"],
    [91,100,"[[1t[majorMagicMeleeWeaponAbilities]]] [[1t[majorMagicMeleeWeaponAbilities]]]"]
  ]
};

const majorMagicRangedWeaponAbilitiesGateway = {
  "name": "majorMagicRangedWeaponAbilitiesGateway",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,63,""],
    [64,100,"[[1t[majorMagicRangedWeaponAbilities]]]"]
  ]
};

const majorMagicRangedWeaponAbilities = {
  "name": "majorMagicRangedWeaponAbilities",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,4,"Bane ([[1t[baneTargets]]])"],
    [5,8,"Distance"],
    [9,12,"Flaming"],
    [13,16,"Frost"],
    [17,21,"Returning"],
    [22,25,"Shock"],
    [26,27,"Seeking"],
    [28,29,"Thundering"],
    [30,34,"Anarchic"],
    [35,39,"Axiomatic"],
    [40,49,"Flaming burst"],
    [50,54,"Holy"],
    [55,64,"Icy burst"],
    [65,74,"Shocking burst"],
    [75,79,"Unholy"],
    [80,84,"Speed"],
    [85,90,"Brilliant energy"],
    [91,100,"[[1t[majorMagicRangedWeaponAbilities]]] [[1t[majorMagicRangedWeaponAbilities]]]"]
  ]
};






const baneTargets = {
  "name": "baneTargets",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,5,"Aberrations"],
    [6,9,"Animals"],
    [10,16,"Constructs"],
    [17,22,"Dragons"],
    [23,27,"Elementals"],
    [28,32,"Fey"],
    [33,39,"Giants"],
    [40,40,"Humanoids, aquatic"],
    [41,42,"Humanoids, dwarf"],
    [43,44,"Humanoids, elf"],
    [45,45,"Humanoids, gnoll"],
    [46,46,"Humanoids, gnome"],
    [47,49,"Humanoids, goblinoid"],
    [50,50,"Humanoids, halfling"],
    [51,54,"Humanoids, human"],
    [55,57,"Humanoids, reptilian"],
    [58,60,"Humanoids, orc"],
    [61,65,"Magical beasts"],
    [66,70,"Monstrous humanoids"],
    [71,72,"Oozes"],
    [73,73,"Outsiders, air"],
    [74,76,"Outsiders, chaotic"],
    [77,77,"Outsiders, earth"],
    [78,80,"Outsiders, evil"],
    [81,81,"Outsiders, fire"],
    [82,84,"Outsiders, good"],
    [85,87,"Outsiders, lawful"],
    [88,88,"Outsiders, water"],
    [89,90,"Plants"],
    [91,98,"Undead"],
    [99,100,"Vermin"]
  ]
};


on("ready", function() {
  var magicWeaponsTables = [
    minorMagicWeapons,
    minorMagicRandomWeaponsGateway,
    minorMagicUncommonWeaponsGateway,
    minorMagicSpecificWeaponsGateway,
    minorMagicMeleeWeaponAbilitiesGateway,
    minorMagicMeleeWeaponAbilities,
    minorMagicRangedWeaponAbilitiesGateway,
    minorMagicRangedWeaponAbilities,
    
    mediumMagicWeapons,
    mediumMagicRandomWeaponsGateway,
    mediumMagicUncommonWeaponsGateway,
    mediumMagicSpecificWeaponsGateway,
    mediumMagicMeleeWeaponAbilitiesGateway,
    mediumMagicMeleeWeaponAbilities,
    mediumMagicRangedWeaponAbilitiesGateway,
    mediumMagicRangedWeaponAbilities,
    
    majorMagicWeapons,
    majorMagicRandomWeaponsGateway,
    majorMagicUncommonWeaponsGateway,
    majorMagicSpecificWeaponsGateway,
    majorMagicMeleeWeaponAbilitiesGateway,
    majorMagicMeleeWeaponAbilities,
    majorMagicRangedWeaponAbilitiesGateway,
    majorMagicRangedWeaponAbilities,
    
    
    baneTargets
  ];
  _.each(magicWeaponsTables, function(tableData) {
    RollableTableManager.findOrMake(tableData);
  });
});

