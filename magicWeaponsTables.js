const minorMagicWeapons = {
  "name": "minorMagicWeapons",
  "showplayers": false,
  "entries": [
    [1,15,"Sleep arrow"],
    [16,25,"Screaming bolt"],
    [26,45,"masterwork Silver dagger"],
    [46,65,"masterwork Cold iron longsword"],
    [66,75,"Javelin of lightning"],
    [76,80,"Slaying arrow"],
    [81,90,"Adamantine dagger"],
    [91,100,"Adamantine battleaxe"]
  ]
};

const mediumMagicWeapons = {
  "name": "mediumMagicWeapons",
  "showplayers": false,
  "entries": [
    [1,9,"Javelin of lightning"],
    [10,15,"Slaying arrow"],
    [16,24,"Adamantine dagger"],
    [25,33,"Adamantine battleaxe"],
    [34,37,"Slaying arrow (greater)"],
    [38,40,"Shatterspike"],
    [41,46,"Dagger of venom"],
    [47,51,"Trident of warning"],
    [52,57,"Assassin’s dagger"],
    [58,62,"Shifter’s sorrow"],
    [63,66,"Trident of fish command"],
    [67,74,"Flame tongue"],
    [75,79,"Luck blade (0 wishes)"],
    [80,86,"Sword of subtlety"],
    [87,91,"Sword of the planes"],
    [92,95,"Nine lives stealer"],
    [96,98,"Sword of life stealing"],
    [99,100,"Oathbow"]
  ]
};

const majorMagicWeapons = {
  "name": "majorMagicWeapons",
  "showplayers": false,
  "entries": [
    [1,4,"Assassin’s dagger"],
    [5,7,"Shifter’s sorrow"],
    [8,9,"Trident of fish command"],
    [10,13,"Flame tongue"],
    [14,17,"Luck blade (0 wishes)"],
    [18,24,"Sword of subtlety"],
    [25,31,"Sword of the planes"],
    [32,37,"Nine lives stealer"],
    [38,42,"Sword of life stealing"],
    [43,46,"Oathbow"],
    [47,51,"Mace of terror"],
    [52,57,"Lifedrinker"],
    [58,62,"Sylvan scimitar"],
    [63,67,"Rapier of puncturing"],
    [68,73,"Sun blade"],
    [74,79,"Frost brand"],
    [80,84,"Dwarven thrower"],
    [85,91,"Luck blade (1 wish)"],
    [92,95,"Mace of smiting"],
    [96,97,"Luck blade (2 wishes)"],
    [98,99,"Holy avenger"],
    [100,100,"Luck blade (3 wishes)"]
  ]
};

on("ready", function() {
  var specificMagicWeapons = [
    minorMagicWeapons,
    mediumMagicWeapons,
    majorMagicWeapons
  ];
  _.each(specificMagicWeapons, function(tableData) {
    RollableTableManager.findOrMake(tableData);
  });
});

