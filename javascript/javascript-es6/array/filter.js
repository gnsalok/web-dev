var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

//this function is returning a brand new array
var filteredNumbers = numbers.filter(function (number) {
  return number > 50;
});

console.log(typeof filteredNumbers);
console.log(filteredNumbers);
