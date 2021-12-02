//Задача 1
function parseCount(arg) {
    let result = Number.parseInt(arg);
    if (isNaN(result)) {
      throw new Error("Невалидное значение");
    }
    return result;
  }

  function validateCount(arg) {
     try {
      return parseCount(arg);
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
      if ((a + b) < c || (a + c) < b || (c + b) < a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
    }
    getPerimeter() {
      return this.a + this.b + this.c;
    }
    getArea() {
      return +((0.25 * Math.sqrt(4 * Math.pow(this.a, 2) * Math.pow(this.b, 2) - Math.pow((Math.pow(this.a, 2) + Math.pow(this.b, 2) - Math.pow(this.c, 2)), 2))).toFixed(3));
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