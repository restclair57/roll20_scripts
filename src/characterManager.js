Rob20.CharacterManager = Rob20.CharacterManager || (function() {
  
  function findOrMake(charData) {
    var attrs = _.clone(charData.attributes);
    delete charData.attributes;
    var char = Rob20.FindOrMakeObjector.findOrMake("character", charData);
    ensureAllAttributes(char, attrs);
    return char;
  };
  
  function ensureAllAttributes(char, attrs) {
    log(JSON.stringify(char));
    _.each(_.keys(attrs), function(attrName) {
      Rob20.AttributeManager.findOrMake(char, attrName, attrs[attrName]);
    });
  };
  
  return {findOrMake: findOrMake};
}());

