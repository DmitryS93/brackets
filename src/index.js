module.exports = function check(str, bracketsConfig) {
  let config = {}
  let open_brackets = []
    for (let i = 0; i < bracketsConfig.length; i++) {
      config[bracketsConfig[i][1]] = bracketsConfig[i][0];
      open_brackets.push(bracketsConfig[i][0]);    
    }
  
    console.log(config)
    let stack = []
  
    for (let i=0; i<str.length; i++) {
      let currentSymbol = str[i];
      if (currentSymbol === '|' && stack.length !== 0 && config[currentSymbol] === stack[stack.length - 1]) {
            stack.pop()
      } else if (currentSymbol === '7' && stack.length !== 0 && config[currentSymbol] === stack[stack.length - 1]) {
            stack.pop()
      } else if (currentSymbol=== '8' && stack.length !== 0 && config[currentSymbol] === stack[stack.length - 1]) {
            stack.pop()
      } else if (open_brackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
        console.log(stack)
      } else {
        if (stack.length === 0) {
          return false;
        }   
        if (config[currentSymbol] === stack[stack.length - 1]) {
          stack.pop()
        } else {
          return false;
        }
      }
    }
    if (stack.length === 0) {
      return true
    } else return false
    
  }
