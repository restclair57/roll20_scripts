Rob20.RobsPlayerId = Rob20.RobsPlayerId || (function () {
  
  'use strict';
  
  const version = '0.0.1';
  const robsUserId = "657852";
  
  function getRobsPlayerId() {
    var playerObjects = findObjs({"_type": "player", "_d20userid": robsUserId});
    var robsPlayerObject = _.first(playerObjects);
    var robsPlayerId = robsPlayerObject.id;
    return robsPlayerId;
  };
  
  return { Get: getRobsPlayerId, get: getRobsPlayerId, getRobsPlayerId: getRobsPlayerId, GetRobsPlayerId: getRobsPlayerId };
}());

