var Rob20 = require('../rob20Header.js');
Rob20.Generators = Rob20.Generators || (function() {
  const prompt = require('prompt');
  
  const continueSchema = {
    properties: {
      continue: {
        default: 'y'
      }
    }
  };
  
  function shouldContinue() {
    prompt.get(continueSchema, (err,results) => {
      return results.continue.toLowerCase().indexOf('y') !== -1;
    });
  };
  
  return {shouldContinue: shouldContinue};
}());

module.exports = Rob20.Generators;