const repeatString = function(string, num) {
    var str = string;
    if(num > 0){
for(let i = 1; i<num; i++ ){
    str += string;
}
    
return str
    }
    else if(num === 0){
        return "";
    }
    else{
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = repeatString;
