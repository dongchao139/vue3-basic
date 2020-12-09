function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.say = function() {
    console.log("hello: " + this.name + " " + this.age);
}

function Student(name,age,grade) {
    Person.call(this, name, age);
    this.grade = grade;
}


Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function() {
    console.log("I'm studing at grade: "+ this.grade);
}