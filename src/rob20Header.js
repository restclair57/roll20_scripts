var Rob20 = Rob20 || (function() {
  
  var registeredEventHandlers = [];
  var registeredTables = {};
  var registeredCharacters = {};
  
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
  
  function registerCharacter(charData) {
    if(_.contains(_.keys(registeredCharacters), charData.name)) {
      log("duplicate character name found: '" + charData.name + "'");
      return null;
    };
    registeredCharacters[charData.name] = charData;
    return null;
  }
  
  function _registerKnownEventHandlers() {
    _.each(registeredEventHandlers, function(eHandler) {
      eHandler.call();
    });
    return null;
  };
  
  function _registerTables() {
    _.each(_.keys(registeredTables), function(tableName) {
      Rob20.RollableTableManager.findOrMake(registeredTables[tableName]);
    });
    return null;
  };
  
  function _registerMacros() {
    _.each(Rob20.Macros.desiredMacros, function(macroData) {
      Rob20.FindOrMakeObjector.findOrMake("macro", macroData);
    });
  };
  
  function _registerCharacters() {
    _.each(_.keys(registeredCharacters), function(charName) {
      Rob20.CharacterManager.findOrMake(registeredCharacters[charName]);
    });
    return null;
  };
  
  
  function onReady() {
    _registerKnownEventHandlers();
    _registerTables();
    _registerMacros();
    _registerCharacters();
  };
  
  var objectRefs = {
    onReady: onReady,
    registerEventHandler: registerEventHandler,
    registerTable: registerTable
  }
  
  return objectRefs;
  
  
}());

if(typeof module !== 'undefined') {
  module.exports = Rob20;
};
