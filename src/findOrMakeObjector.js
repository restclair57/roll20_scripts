var FindOrMakeObjector = FindOrMakeObjector || (function () {
  
  'use strict';
  
  const version = '0.0.1';
  
  function find(objectType, objectData) {
    var toFind = Object.assign({"_type": objectType}, objectData);
    return findObjs(toFind);
  }
  
  function make(objectType, objectData) {
    var toCreate = Object.assign({"playerid": RobsPlayerId.get()}, objectData);
    return createObj(objectType, toCreate);
  }
  
  function findOrMake(objectType, objectData) {
    var foundObjects = find(objectType, objectData);
    if(_.isEmpty(foundObjects)) {
      log("creating " + objectType + " object with name " + objectData.name);
      return make(objectType, objectData);
    } else {
      log("found " + objectType + " object with name " + objectData.name);
      return _.first(foundObjects);
    };
  };
  
  
  return { findOrMake: findOrMake, fOm: findOrMake };
}());
