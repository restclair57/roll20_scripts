var Rob20 = require('../rob20Header.js');
Rob20.Generators = Rob20.Generators || {};
Rob20.Generators.CharacterGenerator = Rob20.Generators.CharacterGenerator || (function(){
  var prompt = require('prompt');
  var fs = require('fs');
  
  var accumulatedData = [];
  
  function getSchema(schema, outFile) {
    prompt.get(schema, function(err, results){
      accumulatedData.push(results);
      prompt.get("continue", (err,results) => {
        if(results.continue.toLowerCase().indexOf('y') !== -1) {
          getSchema(schema, outFile);
        } else {
          writeFile(outFile);
        };
      });
    });
  };
  
  function writeFile(outFile) {
    var outString;
    fs.writeFile(outFile, "", (err)=>{});
    for(var i=0; i<accumulatedData.length; i++) {
      outString = `Rob20.registerCharacter(${JSON.stringify(accumulatedData[i], null, 2)});\n\n`;
      fs.appendFile(outFile, outString, (err)=>{console.log(err)});
    };
    fs.appendFile(outString, "\n\n", (err)=>{console.log(err)});
  };
  
  return {getSchema: getSchema};
  
}());


module.exports = Rob20.Generators.CharacterGenerator;