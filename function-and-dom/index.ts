// In this function typing params and return value
const add = (firstNum: number, secondNum: number): number => {
    return firstNum + secondNum;
}

console.log(add(4, 5));

// Create type for the function and use on it
type Addition = (firstNumber?: number | string, secondNumber?: number | string) => number;
    
const addition: Addition = (firstNumber = 0, secondNumber = 0) => {
    const a = typeof firstNumber === "number" ? firstNumber : Number(firstNumber);
    const b = typeof secondNumber === "number" ? secondNumber : Number(secondNumber);
    return a + b;
}

console.log(addition(2, '3'));


