const minorMagicArmors = {
  "name": "minorMagicArmors",
  "showplayers": false,
  "entries": [
    [1,50,"Mithral shirt"],
    [51,80,"Dragonhide plate"],
    [81,100,"Elven chain"]
  ]
};


const mediumMagicArmors = {
  "name": "mediumMagicArmors",
  "showplayers": false,
  "entries": [
    [1,25,"Mithral shirt"],
    [26,45,"Dragonhide plate"],
    [46,57,"Elven chain"],
    [58,67,"Rhino hide"],
    [68,82,"Adamantine breastplate"],
    [83,97,"Dwarven plate"],
    [98,100,"Banded mail of luck"]
  ]
};


const majorMagicArmors = {
  "name": "majorMagicArmors",
  "showplayers": false,
  "entries": [
    [1,10,"Adamantine breastplate"],
    [11,20,"Dwarven plate"],
    [21,32,"Banded mail of luck"],
    [33,50,"Celestial armor"],
    [51,60,"Plate armor of the deep"],
    [61,75,"Breastplate of command"],
    [76,90,"Mithral full plate of speed"],
    [91,100,"Demon armor"]
  ]
};


const minorMagicShields = {
  "name": "minorMagicShields",
  "showplayers": false,
  "entries": [
    [1,30,"Darkwood buckler"],
    [31,80,"Darkwood shield"],
    [81,95,"Mithral heavy shield"],
    [96,100,"Caster’s shield"]
  ]
};

const mediumMagicShields = {
  "name": "mediumMagicShields",
  "showplayers": false,
  "entries": [
    [1,20,"Darkwood buckler"],
    [21,45,"Darkwood shield"],
    [46,70,"Mithral heavy shield"],
    [71,85,"Caster’s shield"],
    [86,90,"Spined shield"],
    [91,95,"Lion’s shield"],
    [96,100,"Winged shield"]
  ]
};

const majorMagicShields = {
  "name": "majorMagicShields",
  "showplayers": false,
  "entries": [
    [1,20,"Caster’s shield"],
    [21,40,"Spined shield"],
    [41,60,"Lion’s shield"],
    [61,90,"Winged shield"],
    [91,100,"Absorbing shield"]
  ]
};




on("ready", function() {
  var specificMagicArmors = [
    minorMagicArmors,
    mediumMagicArmors,
    majorMagicArmors,
    minorMagicShields,
    mediumMagicShields,
    majorMagicShields
  ];
  _.each(specificMagicArmors, function(tableData) {
    RollableTableManager.findOrMake(tableData);
  });
});
