function bubbleSort(arr) {
  if (!arr || arr.length === 0) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}
function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}

// for test
test();
function test() {
  const testTime = 500000;
  const maxSize = 100;
  const maxValue = 100;
  let succeed = true;
  for (let i = 0; i < testTime; i++) {
    const arr1 = generateRandomArray(maxSize, maxValue);
    const arr2 = copyArray(arr1);
    bubbleSort(arr1);
    comparator(arr2);
    if (!isEqual(arr1, arr2)) {
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

// 复制函数
function copyArray(arr) {
  if (!arr) {
    return arr;
  }
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }
  return res;
}

// 数组排序
function comparator(arr) {
  arr.sort((a, b) => a - b);
}

// 判断两个数组是否相等
function isEqual(arr1, arr2) {
  if ((!arr1 && arr2) || (arr1 && !arr2)) {
    return false;
  }
  if (!arr1 && !arr2) {
    return true;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
