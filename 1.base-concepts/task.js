"use strict";
function solveEquation(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  let arr;
  if (D < 0) {
    arr = [];
  } else if (D === 0) {
    let x = -b / (2 * a);
    arr = [x];
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr = [x1, x2];
  }
  return arr; 
}

solveEquation(1, 1, 1);

// 1 Вариант
function calculateTotalMortgage(percent, contribution, amount, date = new Date()) {
  let S = amount - contribution;
  let P = percent / 100 / 12;
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let diffferenceInYears = date.getFullYear() - currentYear;
  let n = diffferenceInYears * 12 - currentMonth + date.getMonth();
  let monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));
  let totalAmount = +(monthlyPayment * n).toFixed(2);
  let parsedPercent = parseInt(percent);
  let parsedContribution = parseInt(contribution);
  let parsedAmount = parseInt(amount);
  if (Number.isNaN(parsedPercent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (Number.isNaN(parsedContribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (Number.isNaN(parsedAmount)) {
      return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`; 
  } else {
    return totalAmount;
  }
}


//2 Вариант с циклом
/*function calculateTotalMortgage(percent, contribution, amount, date = new Date()) {
  let arrArguments = [
    ["Процентная ставка", arguments[0]],
    ["Начальный взнос", arguments[1]],
    ["Общая стоимость", arguments[2]]
  ];
  for (let i = 0; i < arrArguments.length; i++) {
    let parsedArguments = parseInt(arrArguments[i][1]);
    if (Number.isNaN(parsedArguments)) {
      return `Параметр "${arrArguments[i][0]}" содержит неправильное значение "${arrArguments[i][1]}"`;
    }
  }
  let S = amount - contribution;
  let P = percent / 100 / 12;
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let diffferenceInYears = date.getFullYear() - currentYear;
  let n = diffferenceInYears * 12 - currentMonth + date.getMonth();
  let monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));
  let totalAmount = +(monthlyPayment * n).toFixed(2);
  return totalAmount;
}*/

  
  

