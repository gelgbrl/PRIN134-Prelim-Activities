let student1 = [85,93,89,89,85,92,100,90,80,100];
let student2 = [80,90,77,82,68,98,89,79,93,100];
let student3 = [70,68,77,82,68,65,89,79,93,70];
let student4 = [56,50,89,90,75,50,68,34,91,19];
let student5 = [10,30,70,31,90,20,89,58,67,21];


function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }

function gradeCalculator(average) {
    if(average >= 90 && average <= 100){
        console.log(`Your Rating: A. You Passed.`);
    }
    else if(average >= 80 && average <= 89){
        console.log(`Your Rating: B. You Passed.`);
    }
    else if(average >= 70 && average <= 79){
        console.log(`Your Rating: C. You Passed.`);
    }
    else if(average >= 60 && average <= 69){
        console.log(`Your Rating: D. You Passed.`);
    }
    else{
        console.log(`Your Rating: E. You Failed.`);
    }
}

let avg1 = average(student1);
console.log(`Grades: [${student1}] Average = ${avg1}`);
gradeCalculator(avg1);

let avg2 = average(student2);
console.log(`Grades: [${student2}] Average = ${avg2}`);
gradeCalculator(avg2);

let avg3 = average(student3);
console.log(`Grades: [${student3}] Average = ${avg3}`);
gradeCalculator(avg3);

let avg4 = average(student4);
console.log(`Grades: [${student4}] Average = ${avg4}`);
gradeCalculator(avg4);

let avg5 = average(student5);
console.log(`Grades: [${student5}] Average = ${avg5}`);
gradeCalculator(avg5);
