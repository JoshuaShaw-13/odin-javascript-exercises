const removeFromArray = function() {
    let arr = arguments[0]
    let content = []
    for (let i = 1; i < arguments.length; i++) {
        content.push(arguments[i])
    }
    //console.log(content)
    //console.log(arr.length)
    const limit = content.length

    for (let i = 0; i < limit; i++) {
        while (arr.includes(content[i])) {
            let pos = arr.indexOf(content[i])
            arr.splice(pos, 1); 
        }
    }
    //console.log(arr)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
// removeFromArray([1, 2, 3, 4], 3, 2);
