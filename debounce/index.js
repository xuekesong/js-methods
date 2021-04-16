var content = document.getElementById('content');
var contentDelay = document.getElementById('content-delay');
var num = 1;
var numDelay = 1;

// 需要展示的内容
function count() {
  content.innerHTML = num++;
}

function countDelay() {
  contentDelay.innerHTML = numDelay++;
}

// 防抖函数
// 方法1. 输入完毕后再查询(延迟执行)
function debounceDelay(func, wait) {
  let timeout;
  return function () {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(this);
    }, wait)
  }
}
// 方法2. 输入完毕后立即执行，等待时间之后才可以再次查询(立即执行)
function debounce(func, wait) {
  let timeout;
  return function () {
    if (timeout) clearTimeout(timeout);
    let callNow = !timeout; // 类型转换
    timeout = setTimeout(function () { // 增加定时器
      timeout = null; // 清空当前定时器
    }, wait)
    if (callNow) func.apply(this);
  }
}

// 防抖立即执行
content.onmousemove = debounce(count, 1000);
contentDelay.onmousemove = debounceDelay(countDelay, 1000);
