/*
 * @Author: your name
 * @Date: 2020-03-26 15:48:06
 * @LastEditTime: 2020-03-26 17:22:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Es6/01_let.js
 */
// let num = 100

// console.log(num)

// function num1() {
//   console.log('hello')
// }

// let 定义特点
//  1.变量不提升, 所以都是先定义后使用
//  2.变量不能重复定义
//  3.let 和 const 定义的变量都是块级作用域
// console.log(num);
// let num = 100
// console.log(num)

// 作用域包括: 全局作用域 函数作用域 块级作用域
// let num = 10
// if(num > 5) {
//   let test = '测试数据'
//   console.log(test);
// }

// console.log(test);

// const 定义常量, 在程序运行中值不能发生改变

// const PI = Math.PI

// PI = 100
// console.log(PI);
// for (let i = 0; i < 100; i++) {
//   const PI = 3.14
//   console.log(PI);
// }

// for (var i = 0; i < 10; i++) {
//   (function(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i*1000);  
// }
for (var i = 0; i < 10; i++) {
  function fn() {
    let count = 0

    let inner = setTimeout(() => {
      console.log(i);
      count++
      console.log(count);
    }, i*1000);  
    return inner
  }
  let ret = fn()
  ret();
}


// function outer() {
//   let num = 0
//   function inner() {
//     num++
//     console.log(num);
//   }
//   return inner
// }

// let ret = outer()
// ret()