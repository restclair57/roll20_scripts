on("ready", function() {
  const robsPlayerId = RobsPlayerId.get();
  _.each(desiredMacros, function(dataObj) {
    var toFind = Object.assign({"_type": "macro"}, dataObj);
    var matchedMacros = findObjs(toFind);
    if(_.isEmpty(matchedMacros)) {
      log("creating macro named '" + dataObj["name"] + "'");
      var toCreate = Object.assign({"playerid": robsPlayerId}, dataObj);
      createObj("macro", toCreate);
    } else {
      log("found macro named '" + dataObj["name"] + "'");
    };
  });
  
})