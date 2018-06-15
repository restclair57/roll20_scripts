Rob20.RollableTableManager = Rob20.RollableTableManager || (function () {
  
  'use strict';
  
  const version = '0.0.1';
  
  
  function findOrMake(tableData) {
    var fomObject, tableObject;
    
    fomObject = _.clone(tableData);
    delete fomObject.entries;
    delete fomObject.entryType;
    tableObject = Rob20.FindOrMakeObjector.findOrMake("rollabletable", fomObject);
    
    var minRoll, maxRoll, itemName, weight, entryType;
    entryType = tableData.entryType;
    _.each(tableData.entries, function(itemData) {
      weight = getWeight(itemData, entryType);
      itemName = _.isString(itemData) ? itemData : _.last(itemData);
      // log(itemData);
      Rob20.FindOrMakeObjector.findOrMake("tableitem", {"name": itemName, "weight": weight, "_rollabletableid": tableObject.id});
    });
    
  };
  
  function getWeight(iData, eType) {
    switch(eType) {
      case 'simple': return 1;
      case 'rollWeights': return ((iData[1] - iData[0])+1);
      case 'specified': return iData[0];
    };
  };
  
  
  return { findOrMake: findOrMake, fOm: findOrMake };
}());

