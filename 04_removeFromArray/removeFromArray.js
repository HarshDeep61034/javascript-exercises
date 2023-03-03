const removeFromArray = function(Array, num) {
    Array.splice(Array.indexOf(num), 1);
    return Array;
};

// Do not edit below this line
module.exports = removeFromArray;
