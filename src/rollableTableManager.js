var RollableTableManager = RollableTableManager || (function () {
  
  'use strict';
  
  const version = '0.0.1';
  
  
  function findOrMake(tableData) {
    var fomObject, tableObject;
    
    FindOrMakeObjector.setMode("rollabletable");
    
    fomObject = _.clone(tableData);
    delete fomObject.entries;
    delete fomObject.entryType;
    tableObject = FindOrMakeObjector.findOrMake(fomObject);
    
    FindOrMakeObjector.setMode("tableitem");
    var minRoll, maxRoll, itemName, weight, entryType;
    entryType = tableData.entryType;
    _.each(tableData.entries, function(itemData) {
      weight = getWeight(itemData, entryType);
      itemName = _.last(itemData);
      log(itemData);
      FindOrMakeObjector.findOrMake({"name": itemName, "weight": weight, "_rollabletableid": tableObject.id});
    });
    
  };
  
  function getWeight(iData, eType) {
    log(eType);
    switch(eType) {
      case 'simple': return 1;
      case 'rollWeights': return ((iData[1] - iData[0])+1);
      case 'specified': return iData[0];
    };
  };
  
  
  return { findOrMake: findOrMake, fOm: findOrMake };
}());
