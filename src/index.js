module.exports = function check(str, pairsConfig) {

  let brackets = pairsConfig.join('').replace(/,/g, '');
  let stack = [];
for (let bracket of str) {
      let bracketsIndex = brackets.indexOf(bracket)

      if (bracketsIndex % 2 === 0) {
          
          if (bracket === brackets[bracketsIndex + 1] && stack[stack.length - 1] === bracketsIndex){
              stack.pop();
          } else if (bracket === brackets[bracketsIndex + 1] && stack[stack.length - 1] !== bracketsIndex) {
              stack.push(bracketsIndex)
          }
          else{
              stack.push(bracketsIndex)
          }
      } 
      else {
          if (stack.pop() !== bracketsIndex-1){
              return false;
          }
      }
      
  }
  return stack.length === 0

}


//   console.log("str==", str);
//   console.log("pairsConfig==", pairsConfig);
//   const firstSymbol = [], pair = {}, stack = [];

//   for (let i = 0; i < pairsConfig.length; i++) {
//     for (let j = 0; j < pairsConfig[i].length - 1; j++) {
//       firstSymbol.push(pairsConfig[i][j]);
//       pair[pairsConfig[i][j + 1]] = pairsConfig[i][j];
//     }
//   }
//   console.log("firstSymbol==", firstSymbol);
//   console.log("pair==", pair);

//     for (let i = 0; i < str.length; i++) {
//     let topElement = stack[stack.length - 1];

//     if ((firstSymbol.includes(str[i]) && pair[str[i]] != str[i]) || (pair[str[i]] = str[i] && topElement != pair[str[i]])) {      //   && topElement != str[i] || pair[i] != str[i] && firstSymbol.includes(str[i]) если  в полученной строке есть один из символов влюченных в 'firstSymbol', то
//       stack.push(str[i]);                    // добавляем символ в стек
//       console.log(pair[i] == str[i]);

//     } else {
//       if (pair[str[i]] === topElement) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   console.log("stack==", stack);
//   return stack.length === 0;
// };

//       if((pair[currentSymbol] == currentSymbol && topElement !=pair[currentSymbol]) || (pair[currentSymbol] != currentSymbol && firstSymbol.includes(currentSymbol))) {
//         stack.push(currentSymbol);
//       } else {
//         if (stack.length === 0) {
//           return false;
//         }

//         let openingBracketForCurrentSymbol = pair[currentSymbol];

//         if (openingBracketForCurrentSymbol == topElement) {
//           stack.pop();
//         } else {
//           return false;
//         }
//       }
//     }
//      if (stack.length === 0) {
//        return true;
//      } else {
//        return false;
//      }
//   }
//   return isPairsOk(str);
// };
