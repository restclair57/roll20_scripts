var Rob20 = require('../rob20Header.js');
Rob20.Generators = Rob20.Generators || {};
Rob20.Generators.CharacterGenerator = Rob20.Generators.CharacterGenerator || (function(){
  var prompt = require('prompt');
  var fs = require('fs');
  
  var accumulatedData = [];
  
  function getSchema(schema, outFile) {
    // prompt.start({noHandleSIGINT: true});
    // process.on('SIGINT', function(){
      
    // });
    // while(true) {
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
    // };
  };
  
  function writeFile(outFile) {
    fs.writeFile(outFile, JSON.stringify(accumulatedData), (err)=>{console.log(err)});
  };
  
  return {getSchema: getSchema};
  
}());


module.exports = Rob20.Generators.CharacterGenerator;