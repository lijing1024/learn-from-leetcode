// for of 遍历具有迭代器的对象(部署了Iterator接口，就表示是可迭代的);
// 原生具有Iterator接口的数据类型：Array、Set、Map、String、函数的arguments、NodeList对象、TypedArray
// 一种数据结构，如果具有Symbol.iterator属性，就是可迭代的iterable，Symbol.iterator本身是个函数，返回一个迭代器
function mkIterator(arr){
    let index = 0;
    return {
        next: function(){
            return index < arr.length? {value: arr[index++], done: false}: {value: undefined, done: true}
        }
    }
}
let it = mkIterator(['a', 'b', 'c']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
let arr1 = [1, 3, 4, 5, 8];
for(let item of arr1) {
    console.log('item', item)
}
let obj1 = {
    a: 1, 
    b: 4, 
    c: 8
}
// for(let val of obj1) {
//     console.log('val', val)   // Uncaught TypeError: obj1 is not iterable
// }
let obj2 = {
    [Symbol.iterator]: function () {
      return {
          next: function() {
              return {
                value: 1,
                done: true
              }
          }
      }  
    }
}
console.log(obj2[Symbol.iterator])

Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};
let arr2 = [3, 7, 9];
arr2.foo = 'hello';
for(let i in arr2) {
    console.log('item-for-in',i);   // 遍历的是对象的可枚举的key，包含原型上的属性
}
for(let item of arr2) {
    console.log('item-for-of', item);  // 遍历的是对象自身的值，不包含原型上的
}

