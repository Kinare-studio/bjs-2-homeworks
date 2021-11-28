function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
Student.prototype.setSubject = function(subjectName) {
  return this.subject = subjectName;
}

Student.prototype.addMark = function(...[mark]) {
  if (this.marks === undefined) {
    return this.marks = [mark];
  } else {
    return this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...mark) {
  if (typeof this.marks === "object") {
    return this.marks.push(mark);
  } else {
    return this.marks = mark;
  }
}

Student.prototype.getAverage = function(...marks) {
  const arr = this.marks;
  return average = arr.reduce((acc, item, idx) => {
    if (idx === arr.length - 1) {
      return (acc + item) / arr.length;
      } else {
      return acc + item;
    }
  });
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}