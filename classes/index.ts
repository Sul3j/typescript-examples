// class Point {
//     private y = 4;
// }

// class PointXY {
//     private x = 5;
// }

// const point = new PointXY();

class Person {
    public _age: number;
    // private firstname: string;
    // private lastname: string;
    constructor(
        age: number,
        private firstname: string, 
        protected lastname: string){
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge < 0) {
            this._age = 0;
        }
    }
    public changeFirstname(newName: string) {
        this.firstname = newName;
    }

    private greetings(){
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

// Klasy abstrakcyjne

abstract class Human {
    public abstract age: number;
    protected abstract firstname: string;
    public abstract lastname: string;

    public abstract greetings(): void;
    public abstract getAge(): number;
}

class Player extends Human {
    constructor(
        public age: number,
        protected firstname: string,
        public lastname: string,
    ) {
        super();
    }

    public greetings() {
        console.log(`Hello! My name is ${this.firstname} ${this.lastname}`);
    }

    public getAge() {
        return this.age;
    }
}

