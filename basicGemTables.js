const gemDescriptionsData = [
  ["gemDescs1", ["banded agate", "eye agate", "moss agate", "azurite", "blue quartz", "hematite", "lapis lazuli", "malachite", "obsidian", "rhodochrosite", "tiger eye turquoise", "freshwater (irregular) pearl"]],
  ["gemDescs2", ["bloodstone", "carnelian", "chalcedony", "chrysoprase", "citrine", "iolite", "jasper", "moonstone", "onyx", "peridot", "rock crystal (clear quartz)", "sard", "sardonyx", "rose quartz", "smoky quartz", "star rose quartz", "zircon"]],
  ["gemDescs3", ["amber", "amethyst", "chrysoberyl", "coral", "red garnet", "brown-green garnet", "jade", "jet", "white pearl", "golden pearl", "pink pearl", "silver pearl", "red spinel", "brown spinel", "deep green spinel", "tourmaline"]],
  ["gemDescs4", ["alexandrite", "aquamarine", "violet garnet", "black pearl", "deep blue spinel", "golden yellow topaz"]],
  ["gemDescs5", ["emerald", "white opal", "black opal", "fire opal", "blue sapphire", "fiery yellow corundum", "rich purple corundum", "blue star sapphire", "black star sapphire", "star ruby"]],
  ["gemDescs6", ["clearest bright green emerald", "blue diamond", "white diamond", "canary diamond", "pink diamond", "brown diamond", "blue diamond", "jacinth"]]
]


const gemData = [
  [1,25,"[[1t[gemDescs1]]] ([[4d4]] gp)"],
  [26,50,"[[1t[gemDescs2]]] ([[2d4*10]] gp)"],
  [51,70,"[[1t[gemDescs3]]] ([[4d4*10]] gp)"],
  [71,90,"[[1t[gemDescs4]]] ([[2d4*100]] gp)"],
  [91,99,"[[1t[gemDescs5]]] ([[4d4*100]] gp)"],
  [100,100,"[[1t[gemDescs6]]] ([[2d4*1000]] gp)"]
]




on("ready", function() {
  var tableName, gemDescTable, gemValuesTable, minRoll, maxRoll, valueAndDescriptionRoll, weight;
  
  _.each(gemDescriptionsData, function(gemDescLine) {
    FindOrMakeObjector.setMode("rollabletable");
    tableName = gemDescLine.shift();
    gemDescTable = FindOrMakeObjector.findOrMake({"name": tableName, "showplayers": false});
    FindOrMakeObjector.setMode("tableitem");
    _.each(gemDescLine.shift(), function(gemDesc) {
      FindOrMakeObjector.findOrMake({"name": gemDesc, "_rollabletableid": gemDescTable.id});
    });
  });

  FindOrMakeObjector.setMode("rollabletable");
  gemValuesTable = FindOrMakeObjector.findOrMake({"name": "gems", "showplayers": false});
  FindOrMakeObjector.setMode("tableitem");
  _.each(gemData, function(gemDataLine) {
    [minRoll, maxRoll, valueAndDescriptionRoll] = gemDataLine;
    weight = (maxRoll - minRoll) + 1;
    FindOrMakeObjector.findOrMake({"name": valueAndDescriptionRoll, "weight": weight, "_rollabletableid": gemValuesTable.id});
  })
});