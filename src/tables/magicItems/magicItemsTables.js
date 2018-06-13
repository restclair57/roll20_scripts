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


on("ready", function() {
  var magicItems = [
    minorMagicItems,
    mediumMagicItems,
    majorMagicItems
  ];
  _.each(magicItems, function(tableData) {
    RollableTableManager.findOrMake(tableData);
  });
});


