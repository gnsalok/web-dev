function sumArr(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

var numbers = [10, 20, 30, 40]; // sums to 100
console.log(sumArr(numbers));
