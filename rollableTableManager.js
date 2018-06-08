var RollableTableManager = RollableTableManager || (function () {
  
  'use strict';
  
  const version = '0.0.1';
  
  
  function findOrMake(tableData) {
    var fomObject, tableObject;
    
    FindOrMakeObjector.setMode("rollabletable");
    
    fomObject = _.clone(tableData);
    delete fomObject.entries;
    delete fomObject.simpleEntries;
    tableObject = FindOrMakeObjector.findOrMake(fomObject);
    
    FindOrMakeObjector.setMode("tableitem");
    var minRoll, maxRoll, itemName, weight;
    if(tableData.hasOwnProperty('entries')) {
      _.each(tableData.entries, function(itemData) {
        [minRoll, maxRoll, itemName] = itemData;
        weight = (maxRoll - minRoll) + 1;
        FindOrMakeObjector.findOrMake({"name": itemName, "weight": weight, "_rollabletableid": tableObject.id});
      });
    } else {
      _.each(tableData.simpleEntries, function(entryName) {
        FindOrMakeObjector.findOrMake({"name": entryName, "_rollabletableid": tableObject.id});
      });
    }
    
  };
  
  
  return { findOrMake: findOrMake, fOm: findOrMake };
}());
