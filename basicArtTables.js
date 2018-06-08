const artDescs1 = {
  "name": "artDescs1",
  "showplayers": false,
  "simpleEntries": ["silver ewer", "carved bone statuette", "carved ivory statuette", "finely wrought small gold bracelet"]
};
  
const artDescs2 = {
  "name":  "artDescs2",
  "showplayers": false,
  "simpleEntries": ["cloth of gold vestments", "black velvet mask with numerous citrines", "silver chalice with lapis lazuli gems"]
};

const artDescs3 = {
  "name":  "artDescs3",
  "showplayers": false,
  "simpleEntries": ["large well-made wool tapestry", "brass mug with jade inlays"]
};

const artDescs4 = {
  "name":  "artDescs4",
  "showplayers": false,
  "simpleEntries": ["silver comb with moonstones", "silver-plated steel longsword with jet jewel in hilt"]
};

const artDescs5 = {
  "name":  "artDescs5",
  "showplayers": false,
  "simpleEntries": ["carved harp of exotic wood with ivory inlay and zircon gems", "solid gold idol (10 lb.)"]
};

const artDescs6 = {
  "name":  "artDescs6",
  "showplayers": false,
  "simpleEntries": ["gold dragon comb with red garnet eye", "gold and topaz bottle stopper cork", "ceremonial electrum dagger with a star ruby in the pommel"]
};

const artDescs7 = {
  "name":  "artDescs7",
  "showplayers": false,
  "simpleEntries": ["eyepatch with mock eye of sapphire and moonstone", "fire opal pendant on a fine gold chain", "old masterpiece painting"]
};

const artDescs8 = {
  "name":  "artDescs8",
  "showplayers": false,
  "simpleEntries": ["embroidered silk and velvet mantle with numerous moonstones", "sapphire pendant on gold chain"]
};

const artDescs9 = {
  "name":  "artDescs9",
  "showplayers": false,
  "simpleEntries": ["embroidered and bejeweled glove", "jeweled anklet", "gold music box"]
};

const artDescs10 = {
  "name":  "artDescs10",
  "showplayers": false,
  "simpleEntries": ["golden circlet with four aquamarines", "a string of small pink pearls (necklace)"]
};

const artDescs11 = {
  "name":  "artDescs11",
  "showplayers": false,
  "simpleEntries": ["jeweled gold crown", "jeweled electrum ring"]
};

const artDescs12 = {
  "name":  "artDescs12",
  "showplayers": false,
  "simpleEntries": ["gold and ruby ring", "gold cup set with emeralds"]
};


const basicArtItems = {
  "name": "basicArtObjects",
  "showplayers": false,
  "entries": [
    [1,10,"[[1t[artDescs1]]] ([[1d10*10]] gp)"],
    [11,25,"[[1t[artDescs2]]] ([[3d6*10]] gp)"],
    [26,40,"[[1t[artDescs3]]] ([[1d6*100]] gp)"],
    [41,50,"[[1t[artDescs4]]] ([[1d10*100]] gp)"],
    [51,60,"[[1t[artDescs5]]] ([[2d6*100]] gp)"],
    [61,70,"[[1t[artDescs6]]] ([[3d6*100]] gp)"],
    [71,80,"[[1t[artDescs7]]] ([[4d6*100]] gp)"],
    [81,85,"[[1t[artDescs8]]] ([[5d6*100]] gp)"],
    [86,90,"[[1t[artDescs9]]] ([[1d4*1000]] gp)"],
    [91,95,"[[1t[artDescs10]]] ([[1d6*1000]] gp)"],
    [96,99,"[[1t[artDescs11]]] ([[2d4*1000]] gp)"],
    [100,100,"[[1t[artDescs12]]] ([[2d6*1000]] gp)"]
  ]
};


on("ready", function() {
  var artTables = [
    artDescs1,
    artDescs2,
    artDescs3,
    artDescs4,
    artDescs5,
    artDescs6,
    artDescs7,
    artDescs8,
    artDescs9,
    artDescs10,
    artDescs11,
    artDescs12,
    basicArtItems
  ];
  _.each(artTables, function(tableData) {
    RollableTableManager.findOrMake(tableData);
  });
});


