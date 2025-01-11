const _ = require("lodash");

const arr = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "aaa", "ccc", "fff"];

console.log(_.chunk(arr, 3));
console.log(_.uniq(arr));
