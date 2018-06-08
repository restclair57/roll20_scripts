on("ready", function() {
  FindOrMakeObjector.setMode("macro");
  _.each(desiredMacros, function(dataObj) {
    FindOrMakeObjector.findOrMake(dataObj);
  });
})