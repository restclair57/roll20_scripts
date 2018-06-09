const basicArmors = {
  "name": "basicArmors",
  "showplayers": false,
  "entries": [
    [1,1,"padded"],
    [2,2,"leather"],
    [3,17,"studded leather"],
    [18,32,"chain shirt"],
    [33,42,"hide"],
    [43,43,"scale mail"],
    [44,44,"chainmail"],
    [45,57,"breastplate"],
    [58,58,"splint mail"],
    [59,59,"banded mail"],
    [60,60,"half plate"],
    [61,100,"full plate"],
  ]
};

const basicShields = {
  "name": "basicShields",
  "showplayers": false,
  "entries": [
    [1,10,"buckler"],
    [11,15,"light wooden shield"],
    [16,20,"light steel shield"],
    [21,30,"heavy wooden shield"],
    [31,95,"heavy steel shield"],
    [96,100,"tower shield"],
  ]
};

on("ready", function() {
  var basicArmorsTables = [basicArmors, basicShields];
  _.each(basicArmorsTables, function(tableData) {
    RollableTableManager.findOrMake(tableData);
  });
});