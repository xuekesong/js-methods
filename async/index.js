/**
 * async + await 原理 是 Generate + yield 的语法糖
 * 在Generate方式的函数中 里面的代码会分段执行 看到 yield 就会分一段，yield类似暂停标记
 * 采用next()方法来得到暂停值
 */

function* helloWorldGenerator() {
  yield 'hello'; // yield 类似 暂停标记
  yield 'world';
  yield 'ending';
}

let hw = helloWorldGenerator();
console.log(hw); // 返回一个对象而不是 hello
console.log(hw.next()); // 返回对象，其中value对应的是函数中的暂停值{ value: 'hello', done: false }
console.log(hw.next()); // 返回对象，其中value对应的是函数中的暂停值{ value: 'world', done: false }
console.log(hw.next()); // 返回对象，其中value对应的是函数中的暂停值{ value: 'ending', done: false }