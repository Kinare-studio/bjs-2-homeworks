//1 Вариант
/*function compareArrays(arr1, arr2) {
  let result = JSON.stringify(arr1) === JSON.stringify(arr2);
  return result;
}*/

//2 Вариант
function compareArrays(arr1, arr2) {
  let result = (arr1.length == arr2.length) && arr1.every(function(element, index) {
    return element === arr2[index]; 
});
  return result;
}


function advancedFilter(arr) {
  let resultArr = arr.filter((item) => item >= 0).filter((item) => item % 3 === 0).map((item) => item * 10);
  return resultArr;
}

