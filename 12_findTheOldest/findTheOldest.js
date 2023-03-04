const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]
const findTheOldest = function (people) {
    function diff(a, b) {
        return a - b;
    }
    let arr = [];
    const x = people.length
    for (let i = 0; i < x; i++) {
        if (typeof people[i].yearOfDeath === 'undefined') {
            const today = new Date();
            const year = today.getFullYear();
            people[i].yearOfDeath = year;
        }
        var yearOfDeath = people[i].yearOfDeath
        var yearOfBirth = people[i].yearOfBirth
        const agespan = yearOfDeath - yearOfBirth;
        arr.push(agespan);
    }

    arr.sort(diff);
    arr.reverse();
    console.log(arr);
    let maxAge = arr[0];
    for (let i = 0; i < x; i++) {
        var yearOfDeath = people[i].yearOfDeath
        var yearOfBirth = people[i].yearOfBirth
        const agespan = yearOfDeath - yearOfBirth;
        if (maxAge == agespan) {
            var person = people[i];
        }
    }
    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
