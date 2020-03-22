module.exports = function check(str, bracketsConfig) {
    let arr = bracketsConfig.toString().split(",");
    let newArr = arr
        .map((j, i) => arr[i].concat(arr[i + 1]))
        .filter((j, i) => (i % 2 == 0 ? arr[i] : ""));
    let index = 0;
    do {
        str = str.replace(newArr[index], "");
        index = newArr.findIndex((j, i) => str.indexOf(j) != -1);
    } while (index != -1);
    return str.length == 0;
};
