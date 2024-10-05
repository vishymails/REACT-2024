// classes in typescript 

namespace classes_demo {
    class Person {
        public name : string;
        public surname : string;
        public email : string;

        public constructor (name : string, surname : string, email : string) {
            this.email = email;
            this.name = name;
            this.surname = surname;

        }

        public greet() {
            console.log("hello all");
        }
    }

    const person = new Person(
        "Ram",
        "Kumar",
        "ram@gmail.com"
    )
}