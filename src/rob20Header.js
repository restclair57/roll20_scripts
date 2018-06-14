var Rob20 = Rob20 || (function() {
  
  var registeredEventHandlers = [];
  var registeredTables = {};
  
  function registerEventHandler(eHandler) {
    registeredEventHandlers.push(eHandler);
    return null;
  };
  
  function registerTable(tableData) {
    if(_.contains(_.keys(registeredTables), tableData.name)) {
      log("duplicate table name found: '" + tableData.name + "'");
      return null;
    };
    registeredTables[tableData.name] = tableData;
    return null;
  };
  
  function _registerKnownEventHandlers() {
    _.each(registeredEventHandlers, function(eHandler) {
      eHandler.call();
    });
  };
  
  function _registerTables() {
    _.each(_.keys(registeredTables), function(tableName) {
      Rob20.RollableTableManager.findOrMake(registeredTables[tableName]);
    });
  };
  
  
  function onReady() {
    _registerKnownEventHandlers();
    _registerTables();
  };
  
  var objectRefs = {
    onReady: onReady,
    registerEventHandler: registerEventHandler,
    registerTable: registerTable
  }
  
  return objectRefs;
  
  
}());

