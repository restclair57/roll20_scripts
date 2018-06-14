Rob20.registerTable({
  "name": "Rob20.Tables.Equipment.commonMeleeWeaponsItems",
  "showplayers": true,
  "entryType": "rollWeights",
  "entries": [
    [1,4,"dagger"],
    [5,14,"greataxe"],
    [15,24,"greatsword"],
    [25,28,"kama"],
    [29,41,"longsword"],
    [42,45,"light mace"],
    [46,50,"heavy mace"],
    [51,54,"nunchaku"],
    [55,57,"quarterstaff"],
    [58,61,"rapier"],
    [62,66,"scimitar"],
    [67,70,"shortspear"],
    [71,74,"siangham"],
    [75,84,"bastard sword"],
    [85,89,"short sword"],
    [90,100,"dwarven waraxe"]
  ]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Equipment.uncommonWeaponsItems",
  "showplayers": true,
  "entryType": "rollWeights",
  "entries": [
    [1,3,"orc double axe"],
    [4,7,"battleaxe"],
    [8,10,"spiked chain"],
    [11,12,"club"],
    [13,16,"hand crossbow"],
    [17,19,"repeating crossbow"],
    [20,21,"punching dagger"],
    [22,23,"falchion"],
    [24,26,"dire flail"],
    [27,31,"heavy flail"],
    [32,35,"flail"],
    [36,37,"gauntlet"],
    [38,39,"spiked gauntlet"],
    [40,41,"glaive"],
    [42,43,"greatclub"],
    [44,45,"guisarme"],
    [46,48,"halberd"],
    [49,51,"spear"],
    [52,54,"gnome hooked hammer"],
    [55,56,"light hammer"],
    [57,58,"handaxe"],
    [59,61,"kukri"],
    [62,64,"lance"],
    [65,67,"longspear"],
    [68,70,"morningstar"],
    [71,72,"net"],
    [73,74,"heavy pick"],
    [75,76,"light pick"],
    [77,78,"ranseur"],
    [79,80,"sap"],
    [81,82,"scythe"],
    [83,84,"50 shuriken"],
    [85,86,"sickle"],
    [87,89,"twobladed sword"],
    [90,91,"trident"],
    [92,94,"dwarven urgrosh"],
    [95,97,"warhammer"],
    [98,100,"whip"]
  ]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Equipment.commonRangedWeaponsItems",
  "showplayers": true,
  "entryType": "rollWeights",
  "entries": [
    [1,10,"[[1t[commonAmmunitionItems]]]"],
    [11,15,"throwing axe"],
    [16,25,"heavy crossbow"],
    [26,35,"light crossbow"],
    [36,39,"dart"],
    [40,41,"javelin"],
    [42,46,"shortbow"],
    [47,51,"composite (+0 Str bonus) shortbow"],
    [52,56,"composite (+1 Str bonus) shortbow"],
    [57,61,"composite (+2 Str bonus) shortbow"],
    [62,65,"sling"],
    [66,75,"longbow"],
    [76,80,"composite (+0 Str bonus) longbow"],
    [81,85,"composite (+1 Str bonus) longbow"],
    [86,90,"composite (+2 Str bonus) longbow"],
    [91,95,"composite (+3 Str bonus) longbow"],
    [96,100,"composite (+4 Str bonus) longbow"]
  ]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Equipment.commonAmmunitionItems",
  "showplayers": true,
  "entryType": "rollWeights",
  "entries": [
    [1,50,"50 Arrows"],
    [51,75,"50 crossbow bolts"],
    [76,80,"50 repeating crossbow bolts"],
    [81,100,"50 sling bullets"]
  ]
});


Rob20.registerTable({
  "name": "Rob20.Tables.Equipment.randomWeaponsTable",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,70,"[[1t[commonMeleeWeaponsItems]]]"],
    [71,80,"[[1t[uncommonWeaponsItems]]]"],
    [81,100,"[[1t[commonRangedWeaponsItems]]]"]
  ]
});


