function exist(arr, num) {
  if (!arr || arr.length === 0) {
    return false;
  }
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = l + ((r - l) >> 1);
    if (arr[mid] > num) {
      r = mid - 1;
    } else if (arr[mid] < num) {
      l = l + 1;
    } else {
      return true;
    }
  }
  return false;
}

// for test
test();
function test() {
  const testTime = 500000;
  const maxSize = 100;
  const maxValue = 100;
  let succeed = true;
  for (let i = 0; i < testTime; i++) {
    const arr = generateRandomArray(maxSize, maxValue);
    arr.sort((a, b) => a - b);
    const num = parseInt(Math.random() * 100) + 1;
    const bool = exist(arr, num);
    if (bool !== arr.includes(num)) {
      console.log(bool, num, arr);
      succeed = false;
      break;
    }
  }
  console.log(succeed ? "Nice" : "Error");
}

// 生成随机长度、随机值的数组
function generateRandomArray() {
  const arr = [];
  const len = parseInt(Math.random() * 100) + 1;
  for (let i = 0; i < len; i++) {
    arr.push(parseInt(Math.random() * 100) + 1);
  }
  return arr;
}
