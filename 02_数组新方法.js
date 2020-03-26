/*
 * @Author: your name
 * @Date: 2020-03-26 17:43:46
 * @LastEditTime: 2020-03-26 20:37:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Es6/02_数组新方法.js
 */
/* forEach()  遍历数组, 将每个元素交给回调函数
map() 将每个元素交给回调函数, 并将处理结果存储到一个新数组, 作为返回值返回
filter()  返回符合条件到元素, 返回一个新数组
some()  对每个元素判断, 是否有符合条件的
every() 对每个元素判断, 是否都符合条件
find()  查找第一个满足条件对元素
findIndex() 查找数组中第一个满足条件的元素的索引值*/

// let arr = [22,33,44,55,66]
// foreach类似for循环
/* arr.forEach((v, i, arr) => {
  // 当前元素 当前元素索引 当前元素所属数组
  // console.log(v, i);
   console.log(v * 2);
   
}) */

// arr.forEach((v, i) => {
//   arr[i] = v * 2
// })
// console.log(arr);
// let arr2 = arr.map((v, i) => {
//   return v * 2
// })
// console.log(arr2);

// let age = [3, 103, 13, 23, 33, 83, 133]
// let r = age.filter((v, i) => {
//   return v >= 100
// })
// console.log(r);

// 判断是否有小于18的元素
// let res = age.some((v, i) => {
//   return v < 18
// })
// console.log(res);
// let a = age.find((v, i) => {
//   return v > 100
// })
// console.log(a);
// let b = age.findIndex(v => v > 100)
// console.log(b);

let arr = [11, 22, 33, 44]
arr = arr.map(v => v * 2)
console.log(arr);
