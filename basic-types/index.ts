// basic types
const isBoolean: boolean = true;
const decimalNumber: number = 10;
const exampleString: string = "example string";
const nullVar: null = null;
const undefinedVar: undefined = undefined;

// union types
const age: number | string = 23;
const isOld: string | boolean = true;

// array types
const namesArray: string[] = ["Asia", "Basia", "Adam"];
const isGoodArray: boolean[] = [true, false, true];
const agesArray: number[] = [24, 45, 18];

//or
const stringArray: Array<string> = ["okno", "patyk", "jabłko"];
const booleanArray: Array<boolean> = [false, true, false];
const numberArray: Array<number> = [1, 2, 3];

//union type array
const peopleArray: Array<string | number> = ["Adam", 24, "Kasia", 45];
const allArray: Array<boolean | number> = [false, 34, false, 45];

// tuple 
const tuple: [number, string] = [24, "Adam"];






