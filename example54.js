// classes in typescript 
var classes_demo;
(function (classes_demo) {
    var Person = /** @class */ (function () {
        function Person(name, surname, email) {
            this.email = email;
            this.name = name;
            this.surname = surnam;
        }
        Person.prototype.greet = function () {
            console.log("hello all");
        };
        return Person;
    }());
    var person = new Person("Ram", "Kumar", "ram@gmail.com");
})(classes_demo || (classes_demo = {}));
