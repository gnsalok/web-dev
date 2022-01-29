// Array helper Methods: foreach, map, filter, find, every, some, reduce.

var colors = ["red", "blue", "green"];

//ES5 JS
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//ES6 way
//function passed in funtion in Iterator functoin.
colors.forEach(function (color) {
  console.log(color);
});

//Test

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;

nums.forEach(function (n) {
  sum += n;
});

console.log(sum);
