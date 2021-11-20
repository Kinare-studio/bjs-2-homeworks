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



function calculateTotalMortgage(percent, contribution, amount, date = new Date(2022, 12, 1)) {
  let S = amount - contribution;
  let P = 1 / 12 * percent / 100;
  let n = date;
  let monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));
  let totalAmount = monthlyPayment * n;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "string") {
      +arguments[i];
    }
    if (typeof arguments[i] !== "number") {
      return `Параметр ${arguments[i]} содержит неправильное значение ${arguments[i]}`;
    } else {
      return totalAmount.toFixed(2);
    }
  }
}

calculateTotalMortgage(10, 1000, 50000, 12);