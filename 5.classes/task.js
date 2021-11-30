//Задача 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }
  get state() {
    return this._state;
  }
  fix() {
    this.state = this.state * 1.5;
  }
}
  

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}


//Задача 2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      return this.books.push(book);
    }
  }
  findBookBy(type, value) {
    let result = this.books.find(function(book) {
      return book[type] === value;
    });
    if (result !== undefined) {
      return result;
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    let foundBook = this.books.find(function(book) {
      return book.name === bookName;
    });
    if (foundBook !== undefined) {
      let indexOfFoundBook = this.books.indexOf(foundBook);
      return this.books.splice(indexOfFoundBook, 1);
    } else {
      return null;
    }
  }
}