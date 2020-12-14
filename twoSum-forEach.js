// 典型题目
let arr = [1, 2];
arr.forEach((item, index) => {
    arr.splice(index, 1);
    console.log('arr-0',arr)
    console.log(1); //输出几次？
});
console.log(arr) //?
// 语法
arr.forEach(function(item, index, arr){},this);
// 稀疏数组（未定义的项会被忽略）
let arr1 = [ 1, 3, , 7];
let count = 0;
arr1.forEach(function(item, index, arr){
    console.log(item);
    console.log('arr1['+ index + ']=' +  item);
    count++;
})
console.log('count',count)
// 使用arr本身来去重
let arr2 = [1, 4, 3, 8, 3, 4, 9, 0];
let res1 = [];
arr2.forEach((item, index, arr)=>{
    arr.indexOf(item) === index? res1.push(item): null;
})
console.log('res1', res1);
// 使用this
// 注：如果使用箭头函数，则this会被忽略
function Counter() {
    this.sum = 0;
    this.count = 0;
}
Counter.prototype.add = function (arr) {
    arr.forEach(function(entry){
        this.sum += entry;
        ++this.count;
    }, this)
}
let arr3 = [3, 7, 4];
let obj = new Counter();
obj.add(arr3);
console.log('obj.sum', obj.sum);  //14
console.log('obj.count', obj.count);  //3




