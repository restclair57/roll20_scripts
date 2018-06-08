const artDescriptionsData = [
  ["artDescs1", ["silver ewer", "carved bone statuette", "carved ivory statuette", "finely wrought small gold bracelet"]],
  ["artDescs2", ["cloth of gold vestments", "black velvet mask with numerous citrines", "silver chalice with lapis lazuli gems"]],
  ["artDescs3", ["large well-made wool tapestry", "brass mug with jade inlays"]],
  ["artDescs4", ["silver comb with moonstones", "silver-plated steel longsword with jet jewel in hilt"]],
  ["artDescs5", ["carved harp of exotic wood with ivory inlay and zircon gems", "solid gold idol (10 lb.)"]],
  ["artDescs6", ["gold dragon comb with red garnet eye", "gold and topaz bottle stopper cork", "ceremonial electrum dagger with a star ruby in the pommel"]],
  ["artDescs7", ["eyepatch with mock eye of sapphire and moonstone", "fire opal pendant on a fine gold chain", "old masterpiece painting"]],
  ["artDescs8", ["embroidered silk and velvet mantle with numerous moonstones", "sapphire pendant on gold chain"]],
  ["artDescs9", ["embroidered and bejeweled glove", "jeweled anklet", "gold music box"]],
  ["artDescs10", ["golden circlet with four aquamarines", "a string of small pink pearls (necklace)"]],
  ["artDescs11", ["jeweled gold crown", "jeweled electrum ring"]],
  ["artDescs12", ["gold and ruby ring", "gold cup set with emeralds"]]
];

const artData = [
  [1,10,   "[[1t[artDescs1]]] ([[1d10*10]] gp)"],
  [11,25,  "[[1t[artDescs2]]] ([[3d6*10]] gp)"],
  [26,40,  "[[1t[artDescs3]]] ([[1d6*100]] gp)"],
  [41,50,  "[[1t[artDescs4]]] ([[1d10*100]] gp)"],
  [51,60,  "[[1t[artDescs5]]] ([[2d6*100]] gp)"],
  [61,70,  "[[1t[artDescs6]]] ([[3d6*100]] gp)"],
  [71,80,  "[[1t[artDescs7]]] ([[4d6*100]] gp)"],
  [81,85,  "[[1t[artDescs8]]] ([[5d6*100]] gp)"],
  [86,90,  "[[1t[artDescs9]]] ([[1d4*1000]] gp)"],
  [91,95,  "[[1t[artDescs10]]] ([[1d6*1000]] gp)"],
  [96,99,  "[[1t[artDescs11]]] ([[2d4*1000]] gp)"],
  [100,100,"[[1t[artDescs12]]] ([[2d6*1000]] gp)"]
];


on("ready", function() {
  var tableName, artDescTable, artValuesTable, minRoll, maxRoll, valueAndDescriptionRoll, weight;
  
  _.each(artDescriptionsData, function(artDescLine) {
    FindOrMakeObjector.setMode("rollabletable");
    tableName = artDescLine.shift();
    artDescTable = FindOrMakeObjector.findOrMake({"name": tableName, "showplayers": false});
    FindOrMakeObjector.setMode("tableitem");
    _.each(artDescLine.shift(), function(artDesc) {
      FindOrMakeObjector.findOrMake({"name": artDesc, "_rollabletableid": artDescTable.id});
    });
  });

  FindOrMakeObjector.setMode("rollabletable");
  artValuesTable = FindOrMakeObjector.findOrMake({"name": "artObjects", "showplayers": false});
  FindOrMakeObjector.setMode("tableitem");
  _.each(artData, function(artDataLine) {
    [minRoll, maxRoll, valueAndDescriptionRoll] = artDataLine;
    weight = (maxRoll - minRoll) + 1;
    FindOrMakeObjector.findOrMake({"name": valueAndDescriptionRoll, "weight": weight, "_rollabletableid": artValuesTable.id});
  })
});


