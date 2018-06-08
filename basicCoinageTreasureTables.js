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