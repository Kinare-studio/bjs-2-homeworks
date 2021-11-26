// Задание 1
let avg = 0;

function getArrayParams(arr) {
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = +(sum / arr.length).toFixed(2);
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { min: min, max: max, avg: avg };
}


// Задание 2

let worker = function (arr) {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  return sum;
}


function makeWork(arrOfArr, func) {
let max = 0;
for (let i = 0; i < arrOfArr.length; i++) {
  if (func(arrOfArr[i]) > max) {
    max = func(arrOfArr[i]);
  }
}
return max;
}

// Задание 3
let worker2 = function (arr) {
  let min = Infinity;
  let max = -Infinity;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > max) {
      max = arr[j];
    }
    if (arr[j] < min) {
      min = arr[j];
    }
  }
  return Math.abs(max - min);
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  return max;
  }