Rob20.TreasureRoller = Rob20.TreasureRoller || (function(){
  
  const regex = {
      treasureRollerCmd: /^(!rob20treasure)(?:\[([^\]]*)\])?(?:\s+|$)/
  };
  
  const numeralToWord = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'];
  
  function handleInput(msg_orig) {
    var msg = _.clone(msg_orig);
    if(msg.type !== "api") {
      return;
    };
    var cmd = (msg.content.match(regex.treasureRollerCmd)||[]).splice(1);
    var args = msg.content.replace(regex.treasureRollerCmd,'').trim().split(/\s+/);
    switch(cmd[0]) {
      case '!rob20treasure':
        rollTreasure(args[0]);
        break;
    };
  };
  
  
  function rollTreasure(levelNumeral) {
    var levelWord, coinageRoll, goodsRoll, itemsRoll;
    var coinageResult, goodsResult, itemsResult;
    levelWord = numeralToWord[parseInt(levelNumeral)];
    coinageRoll = "!rt [[1t[Rob20-Tables-Treasure-coinage" + levelWord + "]]]";
    goodsRoll =  " [[1t[Rob20-Tables-Treasure-BasicGoods" + levelWord + "]]]";
    itemsRoll = " [[1t[Rob20-Tables-Equipment-BasicItems" + levelWord + "]]]";
    all = coinageRoll + goodsRoll + itemsRoll;
    // sendChat('', coinageRoll, function(cResult) {
      // coinageResult = cResult;
      // sendChat('', goodsRoll, function(gResult){
        // goodsResult = gResult;
        // sendChat('', itemsRoll, function(iResult){
          // itemsResult = iResult;
          // sendChat('Treasure!', coinageResult + "<br>" + goodsResult + "<br>" + itemsResult);
        // });
      // });
    // });
    sendChat("Treasure", all);
  };
  
  function chatEventHandler() {
    on("chat:message", handleInput);
  };
  
  
  return {chatEventHandler: chatEventHandler};
  
}());
Rob20.registerEventHandler(Rob20.TreasureRoller.chatEventHandler);


