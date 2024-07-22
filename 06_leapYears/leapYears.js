const leapYears = function(year) {
    let isLeap = false;
    if (year%4 == 0) {
        if (year%100 == 0) {
            if (year%400 == 0) {
                isLeap = true;
            }
        }
        else {
            isLeap = true;
        }
    }
    return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
