Rob20.AttributeManager = Rob20.CharacterManager || (function() {
  
  function findOrMake(characterObj, attrName, attrVal) {
    var attr = Object.assign({"characterid": characterObj.id}, attrData);
    return Rob20.FindOrMakeObjector.findOrMake(attr);
  };
  
  
  return {findOrMake: findOrMake};
}());