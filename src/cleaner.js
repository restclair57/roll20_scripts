var Cleaner = Cleaner || (function() {
  
  const regex = {
      cleanerCmd: /^(!cleaner)(?:\[([^\]]*)\])?(?:\s+|$)/
  };
  
  function macros() {
    setTimeout(function() {
      var macros = findObjs({"_type": "macro"});
      _.each(macros, function(obj){ 
        log(obj);
        obj.remove();
      });
    }, 5000);
  };
  
  function tables() {
    setTimeout(function() {
      var tables = findObjs({"_type": "rollabletable"});
      _.each(tables, function(obj){ 
        log(obj);
        obj.remove();
      });
    }, 5000);
  };
  
  function tableItems() {
    setTimeout(function() {
      var tableItems = findObjs({"_type": "tableitem"});
      _.each(tableItems, function(obj){ 
        log(obj);
        obj.remove();
      });
    }, 5000);
  };
  
  function all() {
    tableItems();
    tables();
    macros();
  };
  
  function handleInput(msg_orig) {
    var msg = _.clone(msg_orig);
    if(msg.type !== "api") {
      return;
    };
    var cmd = (msg.content.match(regex.cleanerCmd)||[]).splice(1);
    var args = msg.content.replace(regex.cleanerCmd,'').trim().split(/\s+/);
    switch(cmd[0]) {
      case '!cleaner':
        switch(args[0]) {
          case 'all': all(); break;
          case 'tableItems': tableItems(); break;
          case 'tables': tables(); break;
          case 'macros': macros(); break;
        };
        break;
    };
  };
  
  function RegisterEventHandlers() {
    on("chat:message", handleInput);
  };
  
  return {
    RegisterEventHandlers: RegisterEventHandlers
  };
  
}());

on("ready", function() {
  'use strict';
  Cleaner.RegisterEventHandlers();
});