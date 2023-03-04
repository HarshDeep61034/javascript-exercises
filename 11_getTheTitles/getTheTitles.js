const getTheTitles = function(books) {
    const x = books.length;
    let arr = [];
    for (let i = 0; i < x; i++) {
       arr.push(books[i].title);
    }
    return arr;
  };

// Do not edit below this line
module.exports = getTheTitles;
