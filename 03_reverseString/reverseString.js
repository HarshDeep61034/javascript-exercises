const reverseString = function(Hello) {
    let arr = [];
    for(let i in Hello){
        arr.splice(0, 0, Hello[i]);
    }
  var result = arr.join("")
  return result
};

// Do not edit below this line
module.exports = reverseString;
