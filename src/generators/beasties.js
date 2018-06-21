var Rob20 = require('../rob20Header.js');
Rob20.Generators = Rob20.Generators || {};
Rob20.Generators.CharacterGenerator = require('./characterGenerator.js');
Rob20.Generators.Beasties = Rob20.Generators.Beasties || (function() {
  const schema = {
    properties: {
      name: {
        required: true
      },
      strength: {
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
      hdType: {
        required: true
      },
      numHd: {
        required: true
      },
      natArmor: {
        required: false
      },
    
    }
  };
  
  return {schema: schema};
}());


if(require.main === module) {
  Rob20.Generators.CharacterGenerator.getSchema(Rob20.Generators.Beasties.schema, "build/beasties.js");
};