Rob20.Tests = Rob20.Tests || {};
Rob20.Tests.TableTester = Rob20.Tests.TableTester || (function(){
  
  function testAllTables() {
    _.each(getTables(), function(tableObj){
      testTable(tableObj);
    })
  };
  
  function getTables() {
    return findObjs({"_type": "rollabletable"});
  };
  
  function testTable(tableObj) {
    _.each(collectTableItems(tableObj), function(tableItem) {
      evaluateTableItem(tableItem);
    })
  };
  
  function collectTableItems(tableObj) {
    return findObjs({"_type": "tableitem", "_rollabletableid": tableObj.id});
  };
  
  function evaluateTableItem(tableItem) {
    var tableItemName = tableItem.get("name");
    if(tableItemName.indexOf('t[') !== -1 && tableItemName.indexOf(/[csgp]p/) == -1) {
      var nextTableName = extractTableName(tableItemName);
      var foundTables = findObjs({"_type": "rollabletable", "name": nextTableName});
      if(foundTables.length !== 1) {
        log("found " + foundTables.length + " tables from tableItem named '" + tableItemName + "' and was looking for '" + nextTableName + "'");
      };
      // var msg = "!rt " + nextTableName;
      // sendChat("Rob20.Tests.TableTester", msg);
    };
      
  };
  
  
  function extractTableName(tableItemName) {
    var edited = tableItemName.replace(/^.*t\[/,"");
    edited = edited.replace(/\] *\] *\].*/,"");
    return edited;
  }
  
  on("ready", function(){
    setTimeout(testAllTables, 2000);
  });
  
}());


