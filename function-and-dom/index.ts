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

const ADDITION_BUTTON_ID: string = 'addition-button';
const FIRST_NUMBER_ID: string = 'first-number';
const NUMBER_CLASS: string = 'number';
const RESULT_PLACEHOLDER_ID: string = 'result-placeholder';
const SECOND_NUMBER_ID: string = 'second-number';

const addButton = document.getElementById(ADDITION_BUTTON_ID);

addButton?.addEventListener('click', () => {
    // const firstNumber = document.querySelector(`#${FIRST_NUMBER_ID}`) as HTMLInputElement | null;
    // const secondNumber = document.getElementById(SECOND_NUMBER_ID) as HTMLInputElement | null;
    const resultPlaceholder = document.getElementById(RESULT_PLACEHOLDER_ID) as HTMLSpanElement | null;
    const [inputFirst, inputSecond] = Array.from(document.querySelectorAll<HTMLInputElement>(NUMBER_CLASS));
    if(!inputFirst || !inputSecond || !resultPlaceholder) {
        console.error('Nie znaleziono wszystkich wymaganych elementów w funkcji click');
        return;
    }

    const result = addition(inputFirst.value, inputSecond.value);

    resultPlaceholder.textContent = `${result}`;
});

console.log('hello');
