const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
  let sum = 0;
	for( let i in arr){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for(let i in arr){
    product *= arr[i];
  }
  return product;
};

const power = function(x, y) {
  let pwr = 1;
	for(let i = 1; i<=y; i++){
    pwr *= x;
  }
  return pwr;
};

const factorial = function(x) {
	let fact = 1;
  for(let i = x; i>0; i--){
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
