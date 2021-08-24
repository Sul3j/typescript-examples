// class Point {
//     private y = 4;
// }

// class PointXY {
//     private x = 5;
// }

// const point = new PointXY();

class Person {
    // public age: number;
    // private firstname: string;
    // private lastname: string;

    constructor(
        public age: number,
        private firstname: string, 
        protected lastname: string){}

    changeFirstname(newName: string) {
        this.firstname = newName;
    }

    greetings(){
        console.log(`Hello! My name is ${this.firstname} ${this.lastname}`);
    }
}

class Employee extends Person {
    constructor(age: number, firstname: string, lastname: string) {
        super(age, firstname, lastname);
    }

    showFirstname() {
        //console.log(this.firstname);
    }

    showLastname() {
        console.log(this.lastname);
    }
}

const user = new Person(31, 'Jan', 'Kowalski');
const employee = new Employee(31, 'Jan', 'Kowalski');

user.age = 30;
user.changeFirstname('Adam');