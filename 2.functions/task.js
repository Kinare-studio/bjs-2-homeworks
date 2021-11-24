// Задание 1
function getArrayParams(arr) {
  let sum = 0;
  let avg = 0;
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

function worker(arr) {
  let sum = 0;
  for (let k = 0; k < arr.length; k++) {
    sum += arr[k];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
let max = 0;
for (let i = 0; i < arrOfArr.length; i++) {
  if (worker(arrOfArr[i]) > max) {
    max = worker(arrOfArr[i]);
  }
}
return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  for (let g = 0; g < arr.length; g++) {
    if (arr[g] > max) {
      max = arr[g];
    }
    if (arr[g] < min) {
      min = arr[g];
    }
  }
  return Math.abs(max - min);
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    if (worker2(arrOfArr[i]) > max) {
      max = worker2(arrOfArr[i]);
    }
  }
  return max;
  }