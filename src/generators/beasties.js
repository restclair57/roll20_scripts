var fs = require('fs');
var Rob20 = require('../rob20Header.js');
Rob20.Generators = Rob20.Generators || {};
Rob20.Generators.CharacterGenerator = require('./characterGenerator.js');
Rob20.Generators.Beasties = Rob20.Generators.Beasties || (function() {
  const schema = {
    properties: {
      name: {
        required: true
      },
      attributes: {
        properties: {
          str: {
            required: true
          },
          dex: {
            required: true
          },
          con: {
            required: true
          },
          int: {
            required: true
          },
          wis: {
            required: true
          },
          cha: {
            required: true
          },
          hitdie: {
            required: true
          },
          naturalarmor1bonus: {
            required: false
          },
        }
      }
    }
  };
  
  return {schema: schema};
}());


if(require.main === module) {
  var destinationDir = "./src/generated/" + process.argv[2];
  fs.existsSync(destinationDir) || fs.mkdirSync(destinationDir);
  Rob20.Generators.CharacterGenerator.getSchema(Rob20.Generators.Beasties.schema, destinationDir + "/beasties.js");
};