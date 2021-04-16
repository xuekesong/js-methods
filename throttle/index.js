var ipt = document.getElementById('ipt');
var ipt_value = document.getElementById('ipt_value');

function getValue () {
  ipt_value.innerHTML = ipt.value
}

// 节流
// 方法1. 定时器实现 固定的时间发送请求
function throttle(func, wait) {
  var timeout;
  return function () {
    if (!timeout) {// 定时器是否存在
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(this);
      }, wait)
    }
  }
}

// 方法2. 时间戳实现 不适合输入框实时输入
// function throttle(func, wait) {
//   var prev = 0; // 上次记录的时间
//   return function () {
//     let now = Date.now(); // 当前时间
//     if (now - prev > wait) { // 当前时间 - 上次时间 > 等待时间
//       prev = now; // 重置上次记录的时间
//       func.apply(this); // 执行函数 发送请求
//     }
//   }
// }

ipt.oninput = throttle(getValue, 1000);