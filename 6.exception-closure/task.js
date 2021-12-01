//Задача 1
function parseCount(arg) {
    let result = Number.parseInt(arg);
    if (isNaN(result) === true) {
      const parseCountError = new Error("Невалидное значение");
      throw parseCountError;
    }
    return result;
  }

  function validateCount(arg) {
    let result = Number.parseInt(arg);
    try {
      parseCount = function() {
        if (isNaN(result) === true) {
          throw new Error("Невалидное значение");
        }
        return result;
      }
      return parseCount();
    } catch (error) {
      return error;
    }
  }


  //Задача 2
  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if ((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.c + this.b) < this.a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
    getPerimeter() {
      let p = this.a + this.b + this.c;
      return p;
    }
    getArea() {
      let s = (0.25 * Math.sqrt(4 * Math.pow(this.a, 2) * Math.pow(this.b, 2) - (Math.pow(this.a, 2) + Math.pow(this.b, 2) - Math.pow(this.c, 2)) ** 2)).toFixed(3);
      return +s;
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        getArea() {
          return `Ошибка! Треугольник не существует`
        },
        getPerimeter() {
          return `Ошибка! Треугольник не существует`
        }
      };
    }
  }