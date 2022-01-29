// function to balance parens
function balanceParens(string) {
  //first parameter is accumulator and second one is splitted string, value of acc(previous) passed as 0 after function param.
  return !string.split("").reduce(function (previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    //if this validate first mean value will zero and returns false.
    if (char === ")") {
      return --previous;
    }

    return previous;
  }, 0);
}

console.log(balanceParens("((()())("));
