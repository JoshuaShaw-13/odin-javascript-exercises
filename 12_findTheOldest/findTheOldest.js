const findTheOldest = function(people) {
    let oldest = 0;
    let cur_age = 0;
    let old_age = 0;

    for (i = 0; i < people.length; i++) {
        let birth = people[i].yearOfBirth;
        let death = people[i].yearOfDeath;
        if (people[i].yearOfDeath == undefined) {
            death = 2024;
        };
        cur_age = death - birth;
        if (cur_age > old_age) {
            old_age = cur_age;
            oldest = i;
        }
    }

    return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
