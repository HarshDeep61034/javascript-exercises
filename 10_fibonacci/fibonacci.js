const fibonacci = function (x) {
    let result = 0;
    let arr = [];
    if(x<0){
        return "OOPS"
      }
    for (let i = 1; i <= x; i++) {
        if (i < 3) {
            arr.splice(0, 0, 1);
        }
        else if (i >= 3) {
            for (let x in arr) {
                result = arr[0] + arr[1];
            }
            arr.splice(0, 0, result);
        }
    }
    return arr[0];
};


// Do not edit below this line
module.exports = fibonacci;
