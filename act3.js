const numbers = [12, 7, 5, 20, 33, 42, 19, 8, 10];

console.log(`Numbers: ${numbers.join(', ')}`)

even = [];
for(var i = 0; i < numbers.length; ++i){
    if(numbers[i] % 2 == 0){
        even.push(numbers[i]);
    }
}

console.log(`Even Numbers: ${even.join(', ')} | Count: ${even.length}`)


odd = [];
for(var i = 0; i < numbers.length; ++i){
    if(numbers[i] % 2 == 1){
        odd.push(numbers[i]);
    }
}

console.log(`Odd Numbers: ${odd.join(', ')} | Count: ${odd.length}`)