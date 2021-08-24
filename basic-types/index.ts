// basic types (boolean, number, string, null, undefined)
const isBoolean: boolean = true;
const decimalNumber: number = 10;
const exampleString: string = "example string";
const nullVar: null = null;
const undefinedVar: undefined = undefined;

// union types (allows the use of several types)
const age: number | string = 23;
const isOld: string | boolean = true;

// array types (specifies the type of data in the array)
const namesArray: string[] = ["Asia", "Basia", "Adam"];
const isGoodArray: boolean[] = [true, false, true];
const agesArray: number[] = [24, 45, 18];

//or (another way of saving the data type in an array)
const stringArray: Array<string> = ["okno", "patyk", "jabłko"];
const booleanArray: Array<boolean> = [false, true, false];
const numberArray: Array<number> = [1, 2, 3];

//union type array (allows you to enter several types of data into an array)
const peopleArray: Array<string | number > = ["Adam", 24, "Kasia", 45];
const allArray: Array<boolean | number> = [false, 34, false, 45];

// tuple (an array with a specified number of elements and types)
const tuple: [number, string] = [24, "Adam"];

// enum (number and string)
enum UserTypes {
    ADMIN,
    MODERATOR,
    MODERATOR_NEWS,
    USER,
    BANNED
}

enum stringExample {
    EVENT_CLICK = 'click',
    EVENT_CHANGE = 'change',
}

// unknown type 
let uknownExample: unknown = true;

// any type 
let anyExample: any = 24;

// void type (specifies the type of the function that returns nothing)
const showConsoleLog = (): void => {
    console.log("Text");
}

// never type (this type specifies a function that returns, for example, error)
const throwError = (): never => {
    throw new Error();
}




