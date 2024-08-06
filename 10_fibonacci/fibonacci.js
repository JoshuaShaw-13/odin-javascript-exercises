const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {
        return "OOPS";
    };
    fib = [0,1];
    if (num >= 2) {
        let i = 2;
        while (fib.length < num+1) {
            fib.push(fib[i-1]+fib[i-2]);
            i++;
        }
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
