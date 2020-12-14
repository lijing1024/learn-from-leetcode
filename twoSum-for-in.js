// for in 以任意顺序遍历对象的除symbol以外的其他可枚举属性, 仅迭代自身的属性
// for...in不应该用于迭代一个关注索引顺序的 Array。


let obj1 = {
    a: 1,
    b: 2,
    c: 3
};
let arr1 = [1, 2, 3, 4, 5];

for(let key in obj1) {
    console.log('obj1-key', key);
};
for(let key in arr1) {
    console.log('arr1-key', key);
};




