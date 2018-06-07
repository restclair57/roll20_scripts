var FindOrMakeObjector = FindOrMakeObjector || (function () {
  
  'use strict';
  
  const version = '0.0.1';
  
  function find(objectData) {
    var toFind = Object.assign({"_type": FindOrMakeObjector.mode}, objectData);
    return findObjs(toFind);
  }
  
  function make(objectData) {
    var toCreate = Object.assign({"playerid": RobsPlayerId.get()}, objectData);
    return createObj(FindOrMakeObjector.mode, toCreate);
  }
  
  function findOrMake(objectData) {
    var foundObjects = find(objectData);
    if(_.isEmpty(foundObjects)) {
      log("creating " + FindOrMakeObjector.mode + " object with data " + objectData);
      return make(objectData);
    } else {
      log("found " + FindOrMakeObjector.mode + " object with data " + objectData);
      return _.first(foundObjects);
    };
  };
  
  function setMode(objectType) {
    FindOrMakeObjector.mode = objectType;
  };
  
  
  return { setMode: setMode, findOrMake: findOrMake, fOm: findOrMake };
}());

FindOrMakeObjector.mode = null;