let num1 = 10;
let num2 = 5;
let num3 = 0;

function addition(num1, num2){
    let addNum = num1 + num2;
    console.log(`Addition: 10 + 5 =`, addNum);
}

function subtraction(num1, num2) {
    let subNum = num1 - num2;
    console.log(`Subtraction: 10 - 5 =`, subNum);
}

function multiplication(num1, num2){
    let multiNum = num1 * num2;
    console.log(`Multiplication: 10 * 5 =`, multiNum);
}

function division(num1, num2){
    let divNum = num1 / num2;
    console.log(`Division: 10 / 5 =`, divNum);
}

function divisionZero(num1, num3){
    let divZero = num1 / num3; 
    console.log(`Division by zero: 10 / 0 =`, divZero);
}

function calculator(){
    addition(num1, num2);
    subtraction(num1, num2);
    multiplication(num1, num2);
    division(num1, num2);
    divisionZero(num1, num3);
}

calculator();