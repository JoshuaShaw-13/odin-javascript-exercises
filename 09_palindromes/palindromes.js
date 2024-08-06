const palindromes = function (test_str) {
    let test_arr = test_str.toLowerCase().split("");

    //console.log(test_arr);

    test_arr = test_arr.filter((char) => {
        if ("abcdefghijklmnopqrstuvwxyz1234567890".includes(char)) {
            return char;
        };
    });

    //console.log(test_arr);

    let size = test_arr.length;
    if (size%2 != 0) {
        size -= 1;
    }
    size = size/2;

    //console.log(size);

    from_front = [];
    from_back = [];
    for (i = 0; i < size; i++) {
        from_front.push(test_arr.shift());
        from_back.push(test_arr.pop());
    };

    //console.log(from_front);
    //console.log(from_back);

    return (from_front.join('') == from_back.join(''));

};

//let test = "racecar";
//console.log(test);
//let outcome = palindromes(test);
//console.log(outcome);



// Do not edit below this line
module.exports = palindromes;
