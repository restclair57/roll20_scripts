var RollableTableManager = RollableTableManager || (function () {
  
  'use strict';
  
  const version = '0.0.1';
  
  
  function findOrMake(tableData) {
    var fomObject, tableObject;
    
    FindOrMakeObjector.setMode("rollabletable");
    
    fomObject = _.clone(tableData);
    delete fomObject.entries;
    tableObject = FindOrMakeObjector.findOrMake(fomObject);
    
    FindOrMakeObjector.setMode("tableitem");
    var minRoll, maxRoll, itemName, weight;
    _.each(tableData.entries, function(itemData) {
      [minRoll, maxRoll, itemName] = itemData;
      weight = (maxRoll - minRoll) + 1;
      FindOrMakeObjector.findOrMake({"name": itemName, "weight": weight, "_rollabletableid": tableObject.id});
    });
    
  };
  
  
  return { findOrMake: findOrMake, fOm: findOrMake };
}());
