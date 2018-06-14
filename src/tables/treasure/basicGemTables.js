Rob20.registerTable({
  "name": "Rob20.Tables.Treasure.gemDescsOne",
  "showplayers": false,
  "entryType": "simple",
  "entries": ["banded agate", "eye agate", "moss agate", "azurite", "blue quartz", "hematite", "lapis lazuli", "malachite", "obsidian", "rhodochrosite", "tiger eye turquoise", "freshwater (irregular) pearl"]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Treasure.gemDescsTwo",
  "showplayers": false,
  "entryType": "simple",
  "entries": ["bloodstone", "carnelian", "chalcedony", "chrysoprase", "citrine", "iolite", "jasper", "moonstone", "onyx", "peridot", "rock crystal (clear quartz)", "sard", "sardonyx", "rose quartz", "smoky quartz", "star rose quartz", "zircon"]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Treasure.gemDescsThree",
  "showplayers": false,
  "entryType": "simple",
  "entries": ["amber", "amethyst", "chrysoberyl", "coral", "red garnet", "brown-green garnet", "jade", "jet", "white pearl", "golden pearl", "pink pearl", "silver pearl", "red spinel", "brown spinel", "deep green spinel", "tourmaline"]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Treasure.gemDescsFour",
  "showplayers": false,
  "entryType": "simple",
  "entries": ["alexandrite", "aquamarine", "violet garnet", "black pearl", "deep blue spinel", "golden yellow topaz"]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Treasure.gemDescsFive",
  "showplayers": false,
  "entryType": "simple",
  "entries": ["emerald", "white opal", "black opal", "fire opal", "blue sapphire", "fiery yellow corundum", "rich purple corundum", "blue star sapphire", "black star sapphire", "star ruby"]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Treasure.gemDescsSix",
  "showplayers": false,
  "entryType": "simple",
  "entries": ["clearest bright green emerald", "blue diamond", "white diamond", "canary diamond", "pink diamond", "brown diamond", "blue diamond", "jacinth"]
});

Rob20.registerTable({
  "name": "Rob20.Tables.Treasure.basicGems",
  "showplayers": false,
  "entryType": "rollWeights",
  "entries": [
    [1,25,"[[1t[Rob20.Tables.Treasure.gemDescsOne]]] ([[4d4]] gp)"],
    [26,50,"[[1t[Rob20.Tables.Treasure.gemDescsTwo]]] ([[2d4*10]] gp)"],
    [51,70,"[[1t[Rob20.Tables.Treasure.gemDescsThree]]] ([[4d4*10]] gp)"],
    [71,90,"[[1t[Rob20.Tables.Treasure.gemDescsFour]]] ([[2d4*100]] gp)"],
    [91,99,"[[1t[Rob20.Tables.Treasure.gemDescsFive]]] ([[4d4*100]] gp)"],
    [100,100,"[[1t[Rob20.Tables.Treasure.gemDescsSix]]] ([[2d4*1000]] gp)"]
  ]
});


