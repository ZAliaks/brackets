module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    for (let j = 0; j < bracketsConfig[i].length - 1; j++) {
      openBrackets.push(bracketsConfig[i][j]);
      closeBrackets[bracketsConfig[i][j + 1]] = bracketsConfig[i][j];
    }
  }
  console.log
  function isBracketsOk(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      let topElement = stack[stack.length - 1];

      if((closeBrackets[currentSymbol] == currentSymbol && topElement !=closeBrackets[currentSymbol]) || (closeBrackets[currentSymbol] != currentSymbol && openBrackets.includes(currentSymbol))) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let openingBracketForCurrentSymbol = closeBrackets[currentSymbol];

        if (openingBracketForCurrentSymbol == topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
     if (stack.length === 0) {
       return true;
     } else {
       return false;
     }
  }
  return isBracketsOk(str);
};
