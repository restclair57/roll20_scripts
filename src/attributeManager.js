Rob20.AttributeManager = Rob20.AttributeManager || (function() {
  
  function findOrMake(characterObj, attrName, attrVal) {
    var attrData = {name: attrName, current: attrVal, max: attrVal, characterid: characterObj.id};
    return Rob20.FindOrMakeObjector.findOrMake("attribute", attrData);
  };
  
  
  return {findOrMake: findOrMake};
}());

