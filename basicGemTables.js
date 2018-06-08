const gemDescs1 = {
  "name": "gemDescs1",
  "showplayers": false,
  "simpleEntries": ["banded agate", "eye agate", "moss agate", "azurite", "blue quartz", "hematite", "lapis lazuli", "malachite", "obsidian", "rhodochrosite", "tiger eye turquoise", "freshwater (irregular) pearl"]
};

const gemDescs2 = {
  "name": "gemDescs2",
  "showplayers": false,
  "simpleEntries": ["bloodstone", "carnelian", "chalcedony", "chrysoprase", "citrine", "iolite", "jasper", "moonstone", "onyx", "peridot", "rock crystal (clear quartz)", "sard", "sardonyx", "rose quartz", "smoky quartz", "star rose quartz", "zircon"]
};

const gemDescs3 = {
  "name": "gemDescs3",
  "showplayers": false,
  "simpleEntries": ["amber", "amethyst", "chrysoberyl", "coral", "red garnet", "brown-green garnet", "jade", "jet", "white pearl", "golden pearl", "pink pearl", "silver pearl", "red spinel", "brown spinel", "deep green spinel", "tourmaline"]
};

const gemDescs4 = {
  "name": "gemDescs4",
  "showplayers": false,
  "simpleEntries": ["alexandrite", "aquamarine", "violet garnet", "black pearl", "deep blue spinel", "golden yellow topaz"]
};

const gemDescs5 = {
  "name": "gemDescs5",
  "showplayers": false,
  "simpleEntries": ["emerald", "white opal", "black opal", "fire opal", "blue sapphire", "fiery yellow corundum", "rich purple corundum", "blue star sapphire", "black star sapphire", "star ruby"]
};

const gemDescs6 = {
  "name": "gemDescs6",
  "showplayers": false,
  "simpleEntries": ["clearest bright green emerald", "blue diamond", "white diamond", "canary diamond", "pink diamond", "brown diamond", "blue diamond", "jacinth"]
};

const basicGems = {
  "name": "basicGems",
  "showplayers": false,
  "entries": [
    [1,25,"[[1t[gemDescs1]]] ([[4d4]] gp)"],
    [26,50,"[[1t[gemDescs2]]] ([[2d4*10]] gp)"],
    [51,70,"[[1t[gemDescs3]]] ([[4d4*10]] gp)"],
    [71,90,"[[1t[gemDescs4]]] ([[2d4*100]] gp)"],
    [91,99,"[[1t[gemDescs5]]] ([[4d4*100]] gp)"],
    [100,100,"[[1t[gemDescs6]]] ([[2d4*1000]] gp)"]
  ]
};




on("ready", function() {
  var gemTables = [
    gemDescs1,
    gemDescs2,
    gemDescs3,
    gemDescs4,
    gemDescs5,
    gemDescs6,
    basicGems
  ];
  _.each(gemTables, function(tableData) {
    RollableTableManager.findOrMake(tableData);
  });
});