Rob20.registerTable({
  "name": "Rob20.Tables.Equipment.alchemicalItems",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,12,"[[1d4 flasks alchemist’s fire]]"],
    [13,24,"[[2d4 flasks acid]]"],
    [25,36,"[[1d4 smokesticks]]"],
    [37,48,"[[1d4 flasks holy water]]"],
    [49,62,"[[1d4 doses antitoxin]]"],
    [63,74,"everburning torch"],
    [75,88,"[[1d4 tanglefoot bags]]"],
    [89,100,"[[1d4 thunderstones]]"]
  ]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Equipment.armorItems",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,12,"chain shirt"],
    [13,18,"masterwork studded leather"],
    [19,26,"breastplate"],
    [27,34,"banded mail"],
    [35,54,"half plate"],
    [55,80,"full plate"],
    [81,90,"[[1d[Rob20.Tables.Equipment.darkwoodShieldsItems]]]"],
    [91,100,"masterwork [[1d[Rob20.Tables.Equipment.masterworkShieldsItems]]]"]
  ]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Equipment.darkwoodShieldsItems",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,50,"buckler"],
    [51,100,"shield"]
  ]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Equipment.masterworkShieldsItems",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,17,"buckler"],
    [18,40,"light wooden shield"],
    [41,60,"light steel shield"],
    [61,83,"heavy wooden shield"],
    [84,100,"heavy steel shield"]
  ]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Equipment.weaponsItems",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,50,"masterwork [[1t[Rob20.Tables.Equipment.commonMeleeWeaponsItems]]]"],
    [51,70,"masterwork [[1t[Rob20.Tables.Equipment.uncommonMeleeWeaponsItems]]]"],
    [71,100,"masterwork [[1t[Rob20.Tables.Equipment.commonRangedWeaponsItems]]]"]
  ]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Equipment.toolsAndGearItems",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,3,"empty backpack"],
    [4,6,"crowbar"],
    [7,11,"bullseye lantern"],
    [12,16,"simple lock"],
    [17,21,"average lock"],
    [22,28,"good lock"],
    [29,35,"superior lock"],
    [36,40,"masterwork manacles"],
    [41,43,"small steel mirror"],
    [44,46,"50 feet of silk rope"],
    [47,53,"spyglass"],
    [54,58,"masterwork artisan’s tools"],
    [59,63,"climber’s kit"],
    [64,68,"disguise kit"],
    [69,73,"healer’s kit"],
    [74,77,"silver holy symbol"],
    [78,81,"hourglass"],
    [82,88,"magnifying glass"],
    [89,95,"masterwork musical instrument"],
    [96,100,"masterwork thieves’ tools"]
  ]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Equipment.mundaneItems",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,17,"[[1t[Rob20.Tables.Equipment.alchemicalItems]]]"],
    [18,21,"small [[1t[Rob20.Tables.Equipment.armorItems]]]"],
    [22,50,"medium [[1t[Rob20.Tables.Equipment.armorItems]]]"],
    [51,83,"[[1t[Rob20.Tables.Equipment.weaponsItems]]]"],
    [84,100,"[[1t[Rob20.Tables.Equipment.toolsAndGearItems]]]"]
  ]
});


