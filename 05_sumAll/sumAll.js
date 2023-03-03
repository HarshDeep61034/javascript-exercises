const sumAll = function(x, y) {
    if (x < 0 || y < 0 || typeof x !== 'number' || typeof y !== 'number') return "ERROR";
    if(y > x){
      var a = x;
      var b = y;
    }
    else{
      var b = x;
      var a = y;
    }
      var sum = 0;
      for(let i = a; i<=b; i++){
        sum += i;
      }
      return sum
    };

// Do not edit below this line
module.exports = sumAll;
