'use strict';

function validateBrackets(expression) {
  if (typeof expression === 'string') {
    let stack = [];
    for (let i = 0; i < expression.length; i++) {
      let x = expression[i];
      if (x === '(' || x === '[' || x === '{') {
        stack.push(x);
        continue;
      }
      if (stack.length === 0) return false;
      let check;
      if (x === ')') {
        check = stack.pop();
        if (check === '{' || check === '[') return false;
      } else if (x === '}') {
        check = stack.pop();
        if (check === '(' || check === '[') return false;
      } else if (x === ']') {
        check = stack.pop();
        if (check === '(' || check === '{') return false;
      }
    }
    return stack.length === 0;
  } else {
    console.error('expression should be a string');
  }
}

module.exports = validateBrackets;
