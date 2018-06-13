const basicCoinageTreasureTables = [
  [1,1,14,"nothing"],
  [1,15,29,"[[1d6*1000]] cp"],
  [1,30,52,"[[1d8*100]] sp"],
  [1,53,95,"[[2d8*10]] gp"],
  [1,96,100,"[[1d4*10]] pp"],
  [2,1,13,"nothing"],
  [2,14,23,"[[1d10*1000]] cp"],
  [2,24,43,"[[2d10*100]] sp"],
  [2,44,95,"[[4d10*10]] gp"],
  [2,96,100,"[[2d8*10]] pp"],
  [3,1,11,"nothing"],
  [3,12,21,"[[2d10*1000]] cp"],
  [3,22,41,"[[4d8*100]] sp"],
  [3,42,95,"[[1d4*100]] gp"],
  [3,96,100,"[[1d10*10]] pp"],
  [4,1,11,"nothing"],
  [4,12,21,"[[3d10*1000]] cp"],
  [4,22,41,"[[4d12*1000]] sp"],
  [4,42,95,"[[1d6*100]] gp"],
  [4,96,100,"[[1d8*10]] pp"],
  [5,1,10,"nothing"],
  [5,11,19,"[[1d4*10000]] cp"],
  [5,20,38,"[[1d6*1000]] sp"],
  [5,39,95,"[[1d8*100]] gp"],
  [5,96,100,"[[1d10*10]] pp"],
  [6,1,10,"nothing"],
  [6,11,18,"[[1d6*10000]] cp"],
  [6,19,37,"[[1d8*1000]] sp"],
  [6,38,95,"[[1d10*100]] gp"],
  [6,96,100,"[[1d12*10]] pp"],
  [7,1,11,"nothing"],
  [7,12,18,"[[1d10*10000]] cp"],
  [7,19,35,"[[1d12*1000]] sp"],
  [7,36,93,"[[2d6*100]] gp"],
  [7,94,100,"[[3d4*10]] pp"],
  [8,1,10,"nothing"],
  [8,11,15,"[[1d12*10000]] cp"],
  [8,16,29,"[[2d6*1000]] sp"],
  [8,30,87,"[[2d8*100]] gp"],
  [8,88,100,"[[3d6*10]] pp"],
  [9,1,10,"nothing"],
  [9,11,15,"[[2d6*10000]] cp"],
  [9,16,29,"[[2d8*1000]] sp"],
  [9,30,85,"[[5d4*100]] gp"],
  [9,86,100,"[[2d12*10]] pp"],
  [10,1,10,"nothing"],
  [10,11,24,"[[2d10*1000]] sp"],
  [10,25,79,"[[6d4*100]] gp"],
  [10,80,100,"[[5d6*10]] pp"],
  [11,1,8,"nothing"],
  [11,9,14,"[[3d10*1000]] sp"],
  [11,15,75,"[[4d8*100]] gp"],
  [11,76,100,"[[4d10*10]] pp"],
  [12,1,8,"nothing"],
  [12,9,14,"[[3d12*1000]] sp"],
  [12,15,75,"[[1d4*1000]] gp"],
  [12,76,100,"[[1d4*100]] pp"],
  [13,1,8,"nothing"],
  [13,9,75,"[[1d4*1000]] gp"],
  [13,76,100,"[[1d10*100]] pp"],
  [14,1,8,"nothing"],
  [14,9,75,"[[1d6*1000]] gp"],
  [14,76,100,"[[1d12*100]] pp"],
  [15,1,3,"nothing"],
  [15,4,74,"[[1d8*1000]] gp"],
  [15,75,100,"[[3d4*100]] pp"],
  [16,1,3,"nothing"],
  [16,4,74,"[[1d12*1000]] gp"],
  [16,75,100,"[[3d4*100]] pp"],
  [17,1,3,"nothing"],
  [17,4,68,"[[3d4*1000]] gp"],
  [17,69,100,"[[2d10*100]] pp"],
  [18,1,2,"nothing"],
  [18,3,65,"[[3d6*1000]] gp"],
  [18,66,100,"[[5d4*100]] pp"],
  [19,1,2,"nothing"],
  [19,3,65,"[[3d8*1000]] gp"],
  [19,66,100,"[[3d10*100]] pp"],
  [20,1,2,"nothing"],
  [20,3,65,"[[4d8*1000]] gp"],
  [20,66,100,"[[4d10*100]] pp"]
];


on("ready", function() {
  var tableLevel, minRoll, maxRoll, itemDesc, coinageTableForLevel, tableName, tableData, weight, rollabletableid, itemData;
  _.each(basicCoinageTreasureTables, function(dataObj) {
    FindOrMakeObjector.setMode("rollabletable");
    [tableLevel, minRoll, maxRoll, itemDesc] = dataObj;
    tableName = "Coinage_" + tableLevel;
    tableData = {"name": tableName, "showplayers": false};
    coinageTableForLevel = FindOrMakeObjector.findOrMake(tableData);

    FindOrMakeObjector.setMode("tableitem");
    weight = (maxRoll - minRoll) + 1;
    rollabletableid = coinageTableForLevel.id;
    itemData = {"_rollabletableid": rollabletableid, "name": itemDesc, "weight": weight}
    FindOrMakeObjector.findOrMake(itemData);
  });
  
})