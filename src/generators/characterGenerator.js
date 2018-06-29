var Rob20 = require('../rob20Header.js');
Rob20.Generators = require('./generators.js');

Rob20.Generators.CharacterGenerator = Rob20.Generators.CharacterGenerator || (function(){
  var prompt = require('prompt');
  var fs = require('fs');
  
  var accumulatedData = [];
  
  function getSchema(schema, outFile) {
    prompt.get(schema, function(err, results){
      accumulatedData.push(results);
      Rob20.Generators.shouldContinue(() => {
        getSchema(schema, outFile);
      }, () => {
        writeFile(outFile);
      });
    });
  };
  
  function writeFile(outFile) {
    var outString;
    for(var i=0; i<accumulatedData.length; i++) {
      outString = `Rob20.registerCharacter(${JSON.stringify(accumulatedData[i], null, 2)});\n\n`;
      fs.appendFile(outFile, outString, (err)=>{ if (err) console.log(err) });
    };
    fs.appendFile(outFile, "\n\n", (err)=>{ if (err) console.log(err) });
  };
  
  return {getSchema: getSchema};
  
}());


module.exports = Rob20.Generators.CharacterGenerator;