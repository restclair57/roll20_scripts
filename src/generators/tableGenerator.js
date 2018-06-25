var Rob20 = require('../rob20Header.js');
Rob20.Generators = Rob20.Generators || {};
Rob20.Generators.TableGenerator = Rob20.Generators.TableGenerator || (function(){
  var prompt = require('prompt');
  var fs = require('fs');
  
  const continueSchema = {
    properties: {
      continue: {
        default: 'y'
      }
    }
  };
  
  const tableSchema = {
    properties: {
      name: {
        required: true,
        before: (v) => {return `Rob20-Tables-${Rob20.Generators.TableGenerator.worldName}-${Rob20.Generators.TableGenerator.tableGroup}-${v}`}
      },
      showplayers: {
        required: true,
        default: false,
        type: 'boolean'
      },
      entryType: {
        required: true,
        default: 'rollWeights',
        conform: (v) => { return ["rollweights", "simple", "specified"].indexOf(v.toLowerCase()) !== -1 }
      }
    }
  };
  
  const rollWeightRowSchema = {
    properties: {
      minRoll: {
        required: true,
        type: 'integer'
      },
      maxRoll: {
        required: true,
        type: 'integer'
      },
      entry: {
        required: false
      }
    }
  };
  
  const specifiedWeightRowSchema = {
    properties: {
      weight: {
        required: true,
        type: 'integer'
      },
      entry: {
        required: false
      }
    }
  };
  
  const simpleWeightRowSchema = {
    properties: {
      entry: {
        required: true,
        type: 'string',
        before: (v) => { var ary=v.split(';'); return ary;}
      }
    }
  }
  
  
  var tables = [];
  var worldName, tableGroup, tableSubGroup;
  
  function generate(worldNameParam, tableGroupParam, tableSubGroupParam) {
    Rob20.Generators.TableGenerator.worldName = worldNameParam;
    Rob20.Generators.TableGenerator.tableGroup = tableGroupParam;
    Rob20.Generators.TableGenerator.tableSubGroup = tableSubGroupParam;
    generateTable();
  };
  
  function generateTable() {
    prompt.get(tableSchema, function(err, results) {
      var tbl = results;
      tbl["entries"] = [];
      getRow(tbl);
    });
  };
  
  function getRow(tbl) {
    switch(tbl.entryType) {
      case "simple": getSimpleRow(tbl); break;
      case "rollWeights": getRollWeightsRow(tbl); break;
      case "specified": getSpecifiedWeightsRow(tbl); break;
    };
  };
  
  function getSimpleRow(tbl) {
    prompt.get(simpleWeightRowSchema, function(err, results) {
      tbl["entries"].push(results);
      tables.push(tbl);
      getContinue();
    });
  };
  
  function getRollWeightsRow(tbl) {
    prompt.get(rollWeightRowSchema, function(err, results){
      var line = [results["minRoll"], results["maxRoll"], results["entry"]];
      tbl["entries"].push(line);
      if(results["maxRoll"] !== 100) {
        getRow(tbl);
      } else {
        tables.push(tbl);
        getContinue();
      };
    });
  };
  
  function getSpecifiedWeightsRow(tbl) {
    prompt.get(specifiedWeightRowSchema, function(err, results) {
      if(results["weight"] !== 0) {
        var line = [results["weight"], results["entry"]];
        tbl["entries"].push(line);
        getSpecifiedWeightsRow(tbl);
      } else {
        tables.push(tbl);
        getContinue();
      };
    });
  };
  
  function getContinue() {
    prompt.get(continueSchema, (err,results) => {
      if(results.continue.toLowerCase().indexOf('y') !== -1) {
        generateTable();
      } else {
        writeFile();
      };
    });
  };
  
  function writeFile() {
    var worldDir = "./src/generated/" + Rob20.Generators.TableGenerator.worldName;
    fs.existsSync(worldDir) || fs.mkdirSync(worldDir);
    var worldTablesDir =  worldDir + "/tables";
    fs.existsSync(worldTablesDir) || fs.mkdirSync(worldTablesDir);
    var destinationDir = worldTablesDir + "/" + Rob20.Generators.TableGenerator.tableGroup;
    fs.existsSync(destinationDir) || fs.mkdirSync(destinationDir);
    var outFile = destinationDir + "/" + Rob20.Generators.TableGenerator.tableSubGroup + "Tables.js";
    
    var outString;
    
    for(var i=0; i<tables.length; i++) {
      outString = `Rob20.registerTable(${JSON.stringify(tables[i], null, 2)});\n\n`;
      fs.appendFile(outFile, outString, (err) => { if(err) console.log(err) });
    };
    fs.appendFile(outFile, "\n\n", (err) => { if(err) console.log(err) });
  };
  
  return {generate: generate};
  
}());


if(require.main === module) {
  Rob20.Generators.TableGenerator.generate(process.argv[2], process.argv[3], process.argv[4]);
};
